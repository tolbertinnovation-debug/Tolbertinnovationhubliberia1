import fs from 'node:fs';
import path from 'node:path';

// Copy published TIH information. App-specific data handling is described separately.
export const organizationSources = ['about.html', 'contact.html', 'privacy.html', 'terms.html', 'assets/tih-logo.png'];
const plain = s => s.replace(/<br\s*\/?\s*>/gi, '\n').replace(/<[^>]*>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
export function organization(root) {
  const read = file => fs.readFileSync(path.join(root, file), 'utf8');
  const about = read('about.html'), contact = read('contact.html'), privacy = read('privacy.html'), terms = read('terms.html');
  const required = (value, field) => { if (!value) throw new Error('TIH source information missing: ' + field); return value; };
  const afterHeading = title => required(plain(about.match(new RegExp(`<h3>${title}</h3>\\s*<p>([\\s\\S]*?)</p>`))?.[1] || ''), title);
  const section = (html, id) => {
    const match = html.match(new RegExp(`<h2 id="${id}">([\\s\\S]*?)</h2>([\\s\\S]*?)(?=<h2|$)`));
    if (!match) throw new Error('Missing source policy section: ' + id);
    return {title: plain(match[1]).replace(/^\d+\.\s*/, ''), paragraphs: [...match[2].matchAll(/<(p|li)\b[^>]*>([\s\S]*?)<\/\1>/g)].map(m => plain(m[2]))};
  };
  return {
    ...JSON.parse(read('android-app/release/app-information.json')),
    name: 'Tolbert Innovation Hub', appName: 'TIH Learning', website: 'https://tolbertinnovationhub.org',
    email: required(contact.match(/href="mailto:([^"]+)"/)?.[1], 'email'),
    phone: required(contact.match(/href="tel:([^"]+)"/)?.[1], 'phone'),
    address: required(plain(privacy.match(/<strong>Address:<\/strong>\s*([^<]+)/)?.[1] || ''), 'address'),
    mission: afterHeading('Our Mission'), vision: afterHeading('Our Vision'),
    hours: [...contact.matchAll(/<span class="hours-day">([\s\S]*?)<\/span>\s*<span[^>]*>([\s\S]*?)<\/span>/g)].map(m => plain(m[1]) + ': ' + plain(m[2])),
    policyUpdated: required(privacy.match(/<strong>Last Updated:<\/strong>\s*([^<]+)/)?.[1]?.trim(), 'policy date'),
    audience: section(privacy, 'children'), rights: section(privacy, 'your-rights'),
    terms: ['acceptance', 'use-of-services', 'intellectual-property', 'prohibited', 'disclaimers', 'governing-law'].map(id => section(terms, id)),
    sources: organizationSources
  };
}
