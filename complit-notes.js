/* TIH — Authored per-topic teaching notes for Complete Computer Literacy.
   The course player renders these directly (real textbook-style explanations:
   definition → breakdown → worked example → examples → why it matters) instead
   of the generic lesson template. Keyed by topic title (numbering/case ignored).
   Add more topics/modules over time — any topic not listed keeps the default. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_LESSON_NOTES = window.TIH_LESSON_NOTES || {};

  function intro(title, line) {
    return '<div class="lesson-note-intro"><strong>📖 ' + title + '</strong><br><span>' + line + '</span></div>';
  }
  function sec(h, body) { return '<div class="lesson-note-section"><h4>' + h + '</h4>' + body + '</div>'; }
  function eg(body) { return '<div class="lesson-note-example">' + body + '</div>'; }

  var CL = {};

  CL['What Is a Computer?'] =
    intro('What Is a Computer?', 'The foundation of everything you will learn in this course.') +
    '<p>A computer is an electronic device that accepts data as input, processes the data according to a set of instructions, stores information, and produces useful results as output.</p>' +
    '<p>In simple terms, a computer helps us receive, process, store, and communicate information quickly and accurately.</p>' +
    sec('The basic functions of a computer',
      '<p>A computer performs four main functions:</p>' +
      '<ol>' +
      '<li><strong>Input</strong> – The computer receives data from the user through devices such as a keyboard, mouse, scanner, microphone, or camera.</li>' +
      '<li><strong>Processing</strong> – The computer processes the data using the Central Processing Unit (CPU).</li>' +
      '<li><strong>Storage</strong> – The computer stores data and information for future use. Examples include hard drives, SSDs, USB drives, and memory cards.</li>' +
      '<li><strong>Output</strong> – The computer presents the processed information to the user through devices such as a monitor, printer, speakers, or projector.</li>' +
      '</ol>') +
    sec('Example',
      eg('When a student types <strong>25 + 15</strong> into a calculator application:' +
        '<ul><li><strong>Input:</strong> 25 + 15 is entered using the keyboard.</li>' +
        '<li><strong>Processing:</strong> The computer calculates the numbers.</li>' +
        '<li><strong>Storage:</strong> The information may temporarily be held in memory.</li>' +
        '<li><strong>Output:</strong> The answer <strong>40</strong> appears on the screen.</li></ul>')) +
    sec('Examples of computers',
      '<p>Computers come in many forms, including:</p>' +
      '<ul><li>Desktop computers</li><li>Laptops</li><li>Tablets</li><li>Smartphones</li><li>Servers</li><li>ATMs</li><li>Supercomputers</li><li>Smart devices and embedded computers</li></ul>') +
    sec('Why are computers important?',
      '<p>Computers are used in almost every area of modern life, including education, banking, healthcare, business, communication, government, science, engineering, entertainment, and transportation. Knowing how to use one opens the door to global opportunities.</p>');

  CL['Types of Computers'] =
    intro('Types of Computers', 'Computers come in many sizes and shapes, each built for a purpose.') +
    '<p>Computers are grouped by their size, power, and purpose. From the phone in your pocket to the giant machines that predict the weather, they all share the same four basic functions — they just differ in scale and use.</p>' +
    sec('Main types of computers',
      '<ol>' +
      '<li><strong>Supercomputers</strong> – Extremely powerful machines used for heavy scientific work such as weather forecasting and research.</li>' +
      '<li><strong>Mainframe computers</strong> – Large systems used by banks, governments and big companies to process huge amounts of data.</li>' +
      '<li><strong>Servers</strong> – Computers that provide services (websites, files, email) to many other computers over a network.</li>' +
      '<li><strong>Desktop computers</strong> – Personal computers that stay in one place, used in homes, schools and offices.</li>' +
      '<li><strong>Laptops</strong> – Portable personal computers with a built-in screen, keyboard and battery.</li>' +
      '<li><strong>Tablets &amp; smartphones</strong> – Small, touch-screen mobile computers you carry everywhere.</li>' +
      '<li><strong>Embedded computers</strong> – Tiny computers built inside other devices such as cars, TVs, ATMs and washing machines.</li>' +
      '</ol>') +
    sec('Example',
      eg('A student uses a <strong>laptop</strong> to write notes, a <strong>smartphone</strong> to check email, and withdraws money from an <strong>ATM</strong> — all three are computers, just built for different jobs.')) +
    sec('Why this matters',
      '<p>Understanding the types of computers helps you choose the right tool for a task and understand how technology fits into everyday life and work.</p>');

  CL['Parts of a Computer'] =
    intro('Parts of a Computer', 'The main pieces that make up a computer system.') +
    '<p>A computer system is made of several parts that work together. Some parts you can touch (hardware), and each has a clear job in helping the computer take in, process, store and show information.</p>' +
    sec('The main parts',
      '<ul>' +
      '<li><strong>System unit (or case)</strong> – Holds the most important internal parts, including the CPU and memory.</li>' +
      '<li><strong>Central Processing Unit (CPU)</strong> – The “brain” that carries out instructions and calculations.</li>' +
      '<li><strong>Memory (RAM)</strong> – Temporary working space the computer uses while it runs programs.</li>' +
      '<li><strong>Storage (hard drive / SSD)</strong> – Keeps your files and programs permanently, even when the power is off.</li>' +
      '<li><strong>Monitor</strong> – The screen that shows output.</li>' +
      '<li><strong>Keyboard &amp; mouse</strong> – The main tools you use to give the computer input.</li>' +
      '<li><strong>Motherboard</strong> – The main board that connects all the parts together.</li>' +
      '</ul>') +
    sec('Example',
      eg('When you open a document: the <strong>keyboard</strong> sends your typing to the <strong>CPU</strong>, the <strong>RAM</strong> holds the document while you work, the <strong>hard drive</strong> saves it, and the <strong>monitor</strong> shows it.')) +
    sec('Why this matters',
      '<p>Knowing the parts helps you understand how a computer works, describe a problem clearly, and make good choices when buying or upgrading a computer.</p>');

  CL['Computer Hardware'] =
    intro('Computer Hardware', 'The physical parts of the computer you can see and touch.') +
    '<p>Hardware is any physical part of a computer — the parts you can actually touch. Without hardware there is nothing to run the software on.</p>' +
    sec('Categories of hardware',
      '<ul>' +
      '<li><strong>Input hardware</strong> – Keyboard, mouse, scanner, microphone, camera.</li>' +
      '<li><strong>Processing hardware</strong> – The CPU and the motherboard.</li>' +
      '<li><strong>Storage hardware</strong> – Hard drive, SSD, USB flash drive, memory card.</li>' +
      '<li><strong>Output hardware</strong> – Monitor, printer, speakers, projector.</li>' +
      '<li><strong>Internal vs external</strong> – Internal parts sit inside the case (CPU, RAM); external parts plug in from outside (mouse, printer).</li>' +
      '</ul>') +
    sec('Example',
      eg('A <strong>printer</strong> is output hardware, a <strong>webcam</strong> is input hardware, and a <strong>USB flash drive</strong> is storage hardware — all are things you can physically hold.')) +
    sec('Why this matters',
      '<p>Recognising hardware helps you set up a computer, connect devices correctly, and identify which physical part may need repair or replacement.</p>');

  CL['Computer Software'] =
    intro('Computer Software', 'The programs and instructions that tell the hardware what to do.') +
    '<p>Software is a set of instructions (programs) that tell the computer’s hardware what to do. You cannot touch software — it is the “thinking” part, while hardware is the “body”.</p>' +
    sec('Main types of software',
      '<ol>' +
      '<li><strong>System software</strong> – Runs and manages the computer. The most important example is the <strong>operating system</strong> (e.g. Windows).</li>' +
      '<li><strong>Application software</strong> – Programs that help you do specific tasks: Microsoft Word (documents), Excel (spreadsheets), web browsers, WhatsApp, games.</li>' +
      '<li><strong>Utility software</strong> – Helper tools such as antivirus programs and file-cleanup tools.</li>' +
      '</ol>') +
    sec('Example',
      eg('When you open <strong>Microsoft Word</strong> to type a letter, Word is <strong>application software</strong>, and it runs on top of <strong>Windows</strong>, which is <strong>system software</strong>.')) +
    sec('Why this matters',
      '<p>Understanding software helps you install the right programs, keep them updated, and know the difference between the machine and the programs that run on it.</p>');

  CL['Hardware vs. Software'] =
    intro('Hardware vs. Software', 'Two parts of every computer that must work together.') +
    '<p>A computer needs both hardware and software. Hardware is the physical machine; software is the set of instructions that makes the machine useful. One cannot work without the other.</p>' +
    sec('The key differences',
      '<ul>' +
      '<li><strong>Hardware</strong> – Physical parts you can touch (keyboard, CPU, monitor).</li>' +
      '<li><strong>Software</strong> – Programs and instructions you cannot touch (Windows, Word, games).</li>' +
      '<li><strong>Damage</strong> – Hardware can break physically; software can develop errors or “bugs”.</li>' +
      '<li><strong>Working together</strong> – Software tells the hardware what to do; hardware carries out the work.</li>' +
      '</ul>') +
    sec('Example',
      eg('A <strong>music app (software)</strong> tells the <strong>speakers (hardware)</strong> to play sound. Without the app there is nothing to play; without the speakers there is no sound.')) +
    sec('Why this matters',
      '<p>Telling hardware and software apart helps you understand computer problems — for example, whether an issue is a broken part (hardware) or a program that needs re-installing (software).</p>');

  CL['Input Devices'] =
    intro('Input Devices', 'The tools you use to put information into a computer.') +
    '<p>An input device is any piece of hardware used to enter data or instructions into a computer. Input is the first of the computer’s four functions.</p>' +
    sec('Common input devices',
      '<ul>' +
      '<li><strong>Keyboard</strong> – Enters letters, numbers and commands.</li>' +
      '<li><strong>Mouse / touchpad</strong> – Points, clicks and selects on the screen.</li>' +
      '<li><strong>Touch screen</strong> – Lets you tap and swipe directly on the display.</li>' +
      '<li><strong>Scanner</strong> – Turns paper documents and photos into digital files.</li>' +
      '<li><strong>Microphone</strong> – Enters sound and voice.</li>' +
      '<li><strong>Camera / webcam</strong> – Enters photos and video.</li>' +
      '</ul>') +
    sec('Example',
      eg('To send a voice note, you speak into the <strong>microphone</strong> (input); to take a photo, you use the <strong>camera</strong> (input).')) +
    sec('Why this matters',
      '<p>Knowing your input devices lets you interact with a computer confidently — typing, clicking, scanning and recording — which are everyday skills for school and work.</p>');

  CL['Output Devices'] =
    intro('Output Devices', 'The tools that show you the computer’s results.') +
    '<p>An output device is any piece of hardware that presents processed information to the user. Output is the last of the computer’s four functions.</p>' +
    sec('Common output devices',
      '<ul>' +
      '<li><strong>Monitor / screen</strong> – Displays text, images and video.</li>' +
      '<li><strong>Printer</strong> – Produces information on paper (a “hard copy”).</li>' +
      '<li><strong>Speakers / headphones</strong> – Output sound and music.</li>' +
      '<li><strong>Projector</strong> – Displays the screen onto a large surface for an audience.</li>' +
      '</ul>') +
    sec('Example',
      eg('After you finish a letter, the <strong>monitor</strong> shows it on screen, and the <strong>printer</strong> produces a paper copy to sign.')) +
    sec('Why this matters',
      '<p>Output devices let you see, hear and share the results of your work — essential for studying, presenting and communicating.</p>');

  CL['Storage Devices'] =
    intro('Storage Devices', 'Where a computer keeps your files, even when it is switched off.') +
    '<p>A storage device keeps data and programs permanently, so your work is safe when the power goes off. This is different from memory (RAM), which is only temporary.</p>' +
    sec('Common storage devices',
      '<ul>' +
      '<li><strong>Hard Disk Drive (HDD)</strong> – Large, affordable internal storage.</li>' +
      '<li><strong>Solid State Drive (SSD)</strong> – Faster, more modern internal storage with no moving parts.</li>' +
      '<li><strong>USB flash drive</strong> – Small, portable storage you plug into a USB port.</li>' +
      '<li><strong>Memory card (SD card)</strong> – Used in cameras and phones.</li>' +
      '<li><strong>Cloud storage</strong> – Storage on the internet, e.g. Google Drive, so you can reach files from any device.</li>' +
      '</ul>') +
    sec('Example',
      eg('A student saves an assignment on a <strong>USB flash drive</strong> to carry it to school, and also keeps a copy on <strong>Google Drive</strong> as a backup.')) +
    sec('Why this matters',
      '<p>Good storage habits — saving your work and keeping backups — protect you from losing important files.</p>');

  CL['Computer Memory: RAM and ROM'] =
    intro('Computer Memory: RAM and ROM', 'The two main kinds of memory inside a computer.') +
    '<p>Memory is where a computer holds data it is using. There are two main types: RAM and ROM. They do very different jobs.</p>' +
    sec('RAM vs ROM',
      '<ul>' +
      '<li><strong>RAM (Random Access Memory)</strong> – Temporary working memory. It holds the programs and files you are using right now. It is <strong>volatile</strong> — everything in it is lost when the computer is turned off. More RAM lets a computer run more programs smoothly.</li>' +
      '<li><strong>ROM (Read-Only Memory)</strong> – Permanent memory built into the computer. It stores the basic instructions the computer needs to start up. It is <strong>non-volatile</strong> — its contents stay even when the power is off, and normally cannot be changed.</li>' +
      '</ul>') +
    sec('Example',
      eg('When you open several apps at once, they load into <strong>RAM</strong> so the computer can switch between them quickly. When you power on the computer, <strong>ROM</strong> provides the start-up instructions before Windows loads.')) +
    sec('Why this matters',
      '<p>Understanding memory helps you know why a computer slows down when too many programs are open (RAM is full) and why more RAM can make a computer faster.</p>');

  window.TIH_LESSON_NOTES['computer-literacy'] = CL;
})();
