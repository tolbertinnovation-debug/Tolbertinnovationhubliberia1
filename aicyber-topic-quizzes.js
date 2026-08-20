/* TIH — Authored per-topic quiz questions for the AI & Cybersecurity course.
   aicyber-curriculum.js prefers these over its generic skill pools, so every
   topic gets its own three questions rather than the first three of a shared
   bank. Keyed by topic title, matched case- and punctuation-insensitively. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_TOPIC_QUIZZES = window.TIH_TOPIC_QUIZZES || {};
  window.TIH_TOPIC_QUIZZES['ai-cybersecurity'] = {
  "What Is Artificial Intelligence?": [
    {"q": "What most distinguishes AI from traditional rule-based software?", "opts": ["It learns its rules from data rather than being given them", "It needs no computer", "It never makes mistakes", "It runs faster"], "correct": 0, "exp": "Traditional software follows written rules; AI systems infer patterns from training data."},
    {"q": "What does an AI security model actually output?", "opts": ["A guaranteed verdict", "A probability or confidence score", "A legal judgement", "An exact copy of the input"], "correct": 1, "exp": "Models produce likelihoods, which is why human review of AI security findings remains necessary."},
    {"q": "Why does poor training data matter?", "opts": ["It only affects speed", "It slows the model down", "The model learns the flaws in the data and reproduces them", "It cannot be loaded"], "correct": 2, "exp": "A model can only learn what its data shows, so biased or incomplete data produces biased, incomplete results."}
  ],
  "What Is Cybersecurity?": [
    {"q": "What are the three goals of the CIA triad?", "opts": ["Compliance, Identity, Authorisation", "Cryptography, Internet, Authentication", "Control, Inspection, Access", "Confidentiality, Integrity, Availability"], "correct": 3, "exp": "The CIA triad is confidentiality, integrity and availability, the three goals security exists to protect."},
    {"q": "What does 'defence in depth' mean?", "opts": ["Layering several independent controls so one failure is not fatal", "Encrypting everything twice", "Hiring more analysts", "Using one very strong control"], "correct": 0, "exp": "Multiple independent layers mean an attacker who defeats one control still faces others."},
    {"q": "Where do most successful breaches begin?", "opts": ["With a hardware fault", "With a person", "With an expired certificate", "With a power failure"], "correct": 1, "exp": "Social engineering and human error are involved in the large majority of successful attacks."}
  ],
  "Why AI and Cybersecurity Matter": [
    {"q": "Why is AI increasingly necessary in cybersecurity?", "opts": ["It guarantees no breaches", "It is cheaper than software licences", "Event volume far exceeds what human analysts can review", "It removes the need for firewalls"], "correct": 2, "exp": "Organisations generate far more security events than any team can read, so automated triage is essential."},
    {"q": "What is alert fatigue?", "opts": ["A type of malware", "Slow alert delivery", "A hardware failure under load", "Analysts becoming desensitised by too many alerts, causing missed incidents"], "correct": 3, "exp": "High alert volume causes analysts to dismiss alerts quickly, which is how genuine incidents get missed."},
    {"q": "How does AI change the attacker's side?", "opts": ["It helps them write convincing phishing and automate reconnaissance", "It makes attacks illegal", "It slows attacks down", "It does not affect attackers"], "correct": 0, "exp": "The same capabilities that help defenders also make attacks faster, cheaper and more convincing."}
  ],
  "Types of Cyber Threats": [
    {"q": "What does ransomware do?", "opts": ["Deletes all files permanently", "Encrypts data and demands payment for its return", "Slows the network", "Steals only passwords"], "correct": 1, "exp": "Ransomware encrypts an organisation's data and demands payment in exchange for decryption."},
    {"q": "Which threat involves someone with legitimate access causing harm?", "opts": ["Supply chain attack", "Phishing", "Insider threat", "Denial of service"], "correct": 2, "exp": "Insider threats come from people who already hold authorised access to systems or data."},
    {"q": "A supply chain attack compromises:", "opts": ["Only physical deliveries", "The internet backbone", "The target directly", "A trusted supplier in order to reach their customers"], "correct": 3, "exp": "Attackers compromise a trusted vendor or component to gain access to everyone who uses it."}
  ],
  "Cybersecurity Roles and Careers": [
    {"q": "Which role is the most common entry point into cybersecurity?", "opts": ["SOC Analyst Tier 1", "Chief Information Security Officer", "Malware Reverse Engineer", "Penetration Tester"], "correct": 0, "exp": "Tier 1 SOC analysis, monitoring and triaging alerts, is the standard entry-level defensive role."},
    {"q": "What does 'blue team' refer to?", "opts": ["Authorised offensive testing", "Defensive security work", "Compliance auditing only", "Hardware maintenance"], "correct": 1, "exp": "Blue team covers defensive work such as monitoring, detection, response and forensics."},
    {"q": "A penetration tester operates:", "opts": ["Anonymously", "Without any permission", "Under written authorisation defining scope", "Only on their own devices"], "correct": 2, "exp": "Legitimate offensive testing always requires documented authorisation and an agreed scope."}
  ],
  "How AI Is Used in Cybersecurity": [
    {"q": "What is anomaly detection?", "opts": ["Encrypting log data", "Scanning for known virus signatures", "Blocking all unknown files", "Flagging behaviour that differs from an established baseline"], "correct": 3, "exp": "Anomaly detection learns what normal looks like and highlights departures from it."},
    {"q": "What is the correct working relationship between an analyst and an AI tool?", "opts": ["The tool narrows the field and the analyst verifies and decides", "The analyst works without the tool", "The tool replaces the analyst", "The tool decides and the analyst files the report"], "correct": 0, "exp": "AI reduces volume; the analyst confirms findings, because models produce probabilities and can be wrong."},
    {"q": "Why do detection models degrade over time?", "opts": ["The software expires", "Attacker behaviour shifts away from what the model learned", "Logs become too small", "Hardware wears out"], "correct": 1, "exp": "Models learn historical patterns, so they lose accuracy as adversary techniques change."}
  ],
  "Computer Hardware and Software": [
    {"q": "Which component loses its contents when a computer is powered off?", "opts": ["SSD", "Hard disk", "RAM", "Firmware"], "correct": 2, "exp": "RAM is volatile, so running processes and connections are lost at power-off, which matters for evidence capture."},
    {"q": "Why is firmware-level compromise especially serious?", "opts": ["It only affects printers", "It is easy to detect", "It slows the computer", "It survives reinstalling the operating system"], "correct": 3, "exp": "Firmware runs before the OS, so reinstalling the OS does not remove it."},
    {"q": "What should a responder do before powering off a suspect machine?", "opts": ["Consider capturing volatile memory first", "Delete suspicious files", "Reinstall the OS", "Nothing, power off immediately"], "correct": 0, "exp": "Volatile memory holds evidence that is destroyed by shutdown, so it is captured first where possible."}
  ],
  "Operating Systems": [
    {"q": "What is privilege escalation?", "opts": ["Installing more software", "Gaining higher permissions than the account was granted", "Encrypting a hard disk", "Adding more RAM"], "correct": 1, "exp": "Privilege escalation moves an attacker from a limited account to administrative control."},
    {"q": "Why should daily work be done from an unprivileged account?", "opts": ["It disables logging", "It runs faster", "Malware that lands there cannot alter the whole system", "It uses less disk space"], "correct": 2, "exp": "Code runs with the privileges of the account it starts in, so limiting that account limits the damage."},
    {"q": "Which Linux mechanism grants temporary administrative rights?", "opts": ["grep", "ping", "chmod", "sudo"], "correct": 3, "exp": "sudo runs a single command with elevated privileges rather than logging in as root."}
  ],
  "Files, Processes, and Services": [
    {"q": "What does 'persistence' mean in an attack?", "opts": ["The malicious code survives a reboot", "The attack is slow", "Data is stored permanently", "The attacker keeps trying to log in"], "correct": 0, "exp": "Persistence mechanisms such as services and scheduled tasks restart malicious code after a restart."},
    {"q": "Which detail is a red flag when reviewing a running process?", "opts": ["It has a PID", "It runs from a user's Downloads folder with a browser as parent", "It uses RAM", "It has a command line"], "correct": 1, "exp": "Unusual paths and parent processes are classic indicators of a malicious process."},
    {"q": "What is a service?", "opts": ["A user account", "A file stored on disk", "A process that starts automatically and runs in the background", "A network cable"], "correct": 2, "exp": "Services run in the background without a user starting them, which is why attackers use them for persistence."}
  ],
  "What Is a Computer Network?": [
    {"q": "What is lateral movement?", "opts": ["Switching internet providers", "Moving files between folders", "Moving a server to another rack", "An attacker spreading from one compromised machine to others"], "correct": 3, "exp": "Lateral movement is how a single compromised host becomes a network-wide incident."},
    {"q": "What does network segmentation achieve?", "opts": ["It limits how far a compromise can spread", "It encrypts all traffic", "It removes the need for firewalls", "Faster internet"], "correct": 0, "exp": "Segmentation contains an incident to part of the network rather than letting it reach everything."},
    {"q": "Which device connects separate networks together?", "opts": ["A switch", "A router", "A hub", "A repeater"], "correct": 1, "exp": "Routers forward traffic between networks; switches connect devices within one network."}
  ],
  "IP Addresses": [
    {"q": "Which of these is a private IP address range?", "opts": ["1.1.1.1", "8.8.8.8", "192.168.1.10", "203.0.113.5"], "correct": 2, "exp": "192.168.x.x is one of the reserved private ranges, not routable across the internet."},
    {"q": "What does an 'impossible travel' alert indicate?", "opts": ["A very slow connection", "An expired password", "A network cable fault", "Logins from locations too far apart for the time between them"], "correct": 3, "exp": "Two logins separated by more distance than the elapsed time allows suggests stolen credentials."},
    {"q": "Can an IP address by itself identify a person?", "opts": ["No, it must be correlated with account and device information", "Only for public addresses", "Only with IPv6", "Yes, always"], "correct": 0, "exp": "Addresses are shared, reassigned and disguised, so they identify a connection point rather than a person."}
  ],
  "MAC Addresses": [
    {"q": "At which level does a MAC address operate?", "opts": ["Across the whole internet", "Within the local network segment only", "Only over VPN", "Only in cloud networks"], "correct": 1, "exp": "MAC addresses are link-layer identifiers and are not forwarded across routers."},
    {"q": "Why is MAC filtering a weak security control?", "opts": ["It blocks legitimate users", "It is slow", "MAC addresses can be spoofed in software", "It requires a licence"], "correct": 2, "exp": "Because a MAC address can be changed by software, filtering on it deters rather than prevents."},
    {"q": "What do the first three pairs of a MAC address indicate?", "opts": ["The country", "The operating system", "The IP address", "The manufacturer"], "correct": 3, "exp": "The organisationally unique identifier identifies the interface manufacturer."}
  ],
  "DNS and DHCP": [
    {"q": "What does DNS do?", "opts": ["Resolves domain names into IP addresses", "Encrypts network traffic", "Filters spam", "Assigns IP addresses to devices"], "correct": 0, "exp": "DNS translates human-readable names into the IP addresses machines use."},
    {"q": "Why are DNS logs valuable to defenders?", "opts": ["They contain passwords", "They show what a machine tried to contact, even when blocked", "They are encrypted", "They replace firewalls"], "correct": 1, "exp": "The lookup happens before the connection, so DNS records attempts that never succeeded."},
    {"q": "Why must a time be recorded alongside an IP address?", "opts": ["It is a legal requirement only", "Logs are sorted by time", "DHCP leases change, so the same address maps to different devices over time", "IP addresses expire"], "correct": 2, "exp": "Without a timestamp an IP address cannot be tied to a specific device, because leases are reassigned."}
  ],
  "Ports and Protocols": [
    {"q": "Which port does HTTPS use by default?", "opts": ["22", "53", "80", "443"], "correct": 3, "exp": "HTTPS uses TCP port 443, while unencrypted HTTP uses port 80."},
    {"q": "Why should RDP (port 3389) never be exposed directly to the internet?", "opts": ["It is heavily targeted for brute-force and exploitation", "It only works locally", "It uses too much bandwidth", "It is too slow"], "correct": 0, "exp": "Internet-exposed RDP is one of the most common initial access routes for ransomware."},
    {"q": "What is the main risk of plain-text protocols such as Telnet and FTP?", "opts": ["They are slow", "Credentials and data are exposed in transit", "They use too many ports", "They cannot cross routers"], "correct": 1, "exp": "Without encryption, anyone able to observe the traffic can read the credentials."}
  ],
  "TCP/IP Fundamentals": [
    {"q": "What are the three steps of the TCP handshake?", "opts": ["REQ, RES, END", "SYN, ACK, FIN", "SYN, SYN-ACK, ACK", "GET, POST, PUT"], "correct": 2, "exp": "A TCP connection is established with SYN, SYN-ACK and then ACK."},
    {"q": "Why is UDP easier to spoof than TCP?", "opts": ["It is encrypted", "It is slower", "It uses fewer ports", "It is connectionless, so no handshake proves the source"], "correct": 3, "exp": "Without a handshake there is nothing to confirm the sender's address is genuine."},
    {"q": "Why can a network firewall miss an SQL injection attack?", "opts": ["The attack rides inside legitimate application-layer traffic", "SQL uses no ports", "Firewalls only inspect email", "Firewalls are always disabled"], "correct": 0, "exp": "Transport-layer filtering sees an allowed HTTPS connection; the attack is in the application content."}
  ],
  "How the Internet Works": [
    {"q": "What is the first step when a browser opens a website by name?", "opts": ["The TLS handshake", "A DNS lookup to resolve the name", "The HTTP request", "Certificate validation"], "correct": 1, "exp": "The name must be resolved to an IP address before any connection can be made."},
    {"q": "What does a valid TLS certificate prove?", "opts": ["The operator has been vetted", "The site is trustworthy", "The connection is to the named domain and is encrypted", "The site has no malware"], "correct": 2, "exp": "TLS authenticates the domain name and encrypts the channel; it says nothing about the operator's intent."},
    {"q": "Why is encryption in transit necessary?", "opts": ["It reduces bandwidth", "It is required by DNS", "It speeds up routing", "Traffic crosses networks you do not control"], "correct": 3, "exp": "Because the path is untrusted, content must be protected independently of the network carrying it."}
  ],
  "CIA Triad: Confidentiality, Integrity and Availability": [
    {"q": "A denial-of-service attack primarily damages which property?", "opts": ["Availability", "Authentication", "Confidentiality", "Integrity"], "correct": 0, "exp": "A DDoS prevents legitimate users from reaching a service, which is an availability failure."},
    {"q": "Which control most directly protects integrity?", "opts": ["Encryption at rest", "Cryptographic hashing and digital signatures", "Load balancing", "Redundant power supplies"], "correct": 1, "exp": "Hashes and signatures detect whether data has been altered, which is what integrity means."},
    {"q": "Why can strengthening one CIA property weaken another?", "opts": ["The triad is theoretical only", "The properties are identical", "Controls trade off, such as strict access reducing availability", "Only one can be enabled"], "correct": 2, "exp": "Tighter confidentiality controls often make legitimate access slower or harder, reducing availability."}
  ],
  "Authentication and Authorization": [
    {"q": "What is the difference between authentication and authorization?", "opts": ["Authorization comes first", "Authentication applies only to admins", "They are the same thing", "Authentication proves identity; authorization decides permitted actions"], "correct": 3, "exp": "Identity is established first, then permissions are evaluated for that identity."},
    {"q": "What does the principle of least privilege require?", "opts": ["Grant only the access a role genuinely requires", "Nobody gets any access", "Access is reviewed once a decade", "Everyone gets administrator rights"], "correct": 0, "exp": "Limiting permissions limits the damage when an account is compromised or misused."},
    {"q": "Why must authorization checks run server-side?", "opts": ["Servers are faster", "Client-side checks can be bypassed by the user", "It saves bandwidth", "Browsers cannot check permissions"], "correct": 1, "exp": "Anything enforced only in the browser can be modified or skipped by an attacker."}
  ],
  "Password Security": [
    {"q": "What contributes most to password strength?", "opts": ["Using a capital letter", "Replacing letters with symbols", "Length and unpredictability", "Changing it monthly"], "correct": 2, "exp": "Long, unpredictable passphrases resist guessing far better than short substituted strings."},
    {"q": "What is credential stuffing?", "opts": ["Storing passwords in a file", "Overloading a login form", "Guessing passwords character by character", "Replaying credentials from one breach against other services"], "correct": 3, "exp": "Because people reuse passwords, credentials stolen from one site often work elsewhere."},
    {"q": "How should a system store user passwords?", "opts": ["As salted cryptographic hashes", "Encrypted with a shared key", "In the application log", "In plain text"], "correct": 0, "exp": "Hashing with a salt means the original password cannot be recovered from a stolen database."}
  ],
  "Multi-Factor Authentication": [
    {"q": "Which combination is genuine multi-factor authentication?", "opts": ["Two different passwords", "A password and a code from an authenticator app", "A password and a security question", "A username and a password"], "correct": 1, "exp": "MFA requires factors from different categories; a password and a device-generated code qualify."},
    {"q": "Why is SMS the weakest common MFA factor?", "opts": ["It needs internet access", "It is slow", "It is vulnerable to SIM swapping and interception", "It costs money"], "correct": 2, "exp": "An attacker who takes over the phone number receives the codes."},
    {"q": "What is MFA fatigue?", "opts": ["Forgetting a password", "Too many factors configured", "A device battery draining", "Flooding a user with push prompts until one is approved"], "correct": 3, "exp": "Repeated prompts wear the user down until they approve one to stop the notifications."}
  ],
  "Encryption Basics": [
    {"q": "What is the key difference between hashing and encryption?", "opts": ["Hashing is one-way and cannot be reversed", "Hashing uses longer keys", "There is no difference", "Hashing is faster"], "correct": 0, "exp": "Encryption is reversible with a key; hashing is a one-way function used to verify integrity."},
    {"q": "Why does TLS use both asymmetric and symmetric encryption?", "opts": ["For redundancy", "Asymmetric safely agrees a key; symmetric then encrypts data quickly", "Symmetric is insecure", "It is a legacy requirement"], "correct": 1, "exp": "Each is used for its strength: key exchange without a shared secret, then fast bulk encryption."},
    {"q": "Where does the security of a modern cipher lie?", "opts": ["In the network protocol", "In keeping the algorithm secret", "In the secrecy of the key", "In the file format"], "correct": 2, "exp": "Algorithms are public and reviewed; only the key must remain secret."}
  ],
  "Firewalls": [
    {"q": "What does a 'default deny' firewall policy mean?", "opts": ["Log all traffic without blocking", "Deny only external traffic", "Allow everything except known threats", "Block everything, then permit only what is required"], "correct": 3, "exp": "Default deny fails safe: anything not explicitly permitted, including novel traffic, is blocked."},
    {"q": "Why does egress filtering matter?", "opts": ["It blocks outbound connections used for exfiltration and command and control", "It is required for DNS", "It replaces antivirus", "It speeds up the network"], "correct": 0, "exp": "Outbound filtering catches compromised hosts calling out, which inbound rules never see."},
    {"q": "Why can a firewall miss threats inside encrypted traffic?", "opts": ["Encryption breaks the firewall", "It cannot read the content unless it terminates TLS", "Encrypted traffic is always blocked", "Firewalls ignore port 443"], "correct": 1, "exp": "Without TLS inspection the firewall sees only the connection, not what it carries."}
  ],
  "Antivirus and Endpoint Security": [
    {"q": "What is the main limitation of signature-based antivirus?", "opts": ["It cannot scan documents", "It is slow", "It detects only malware that has already been catalogued", "It requires internet access"], "correct": 2, "exp": "Signatures match known samples, so novel or modified malware passes undetected."},
    {"q": "Why does fileless malware evade traditional antivirus?", "opts": ["It is too small", "It disables the operating system", "It encrypts itself", "It runs in memory and writes no file to scan"], "correct": 3, "exp": "Signature scanning inspects files, and fileless attacks never create one."},
    {"q": "What additional capability does EDR provide over antivirus?", "opts": ["Behavioural monitoring, recorded telemetry and host isolation", "Cheaper licensing", "Automatic patching", "Faster scanning"], "correct": 0, "exp": "EDR watches process behaviour, retains activity history for investigation, and can contain a host."}
  ],
  "Security Policies": [
    {"q": "What is the difference between a policy and a procedure?", "opts": ["They are the same", "A policy states requirements; a procedure states the steps", "A procedure is approved by management", "A policy is technical"], "correct": 1, "exp": "Policies define what must be achieved; procedures describe how to achieve it."},
    {"q": "Why is an unenforceable policy worse than none?", "opts": ["It slows the network", "It costs more", "It creates false assurance while being ignored in practice", "It cannot be written down"], "correct": 2, "exp": "An ignored policy looks like a control during audit while providing no actual protection."},
    {"q": "What makes a security policy authoritative?", "opts": ["Technical detail", "Frequent rewriting", "Length", "Management approval and publication to staff"], "correct": 3, "exp": "Without management endorsement and communication, a policy cannot be enforced."}
  ],
  "Risk Management": [
    {"q": "How is risk conventionally calculated?", "opts": ["Likelihood multiplied by impact", "Number of vulnerabilities", "Cost of controls", "Threat plus vulnerability"], "correct": 0, "exp": "Risk combines how likely an event is with how damaging it would be."},
    {"q": "Which is a legitimate response to an identified risk?", "opts": ["Ignoring it silently", "Formally accepting it with documentation and approval", "Deleting the risk register", "Reclassifying it as a vulnerability"], "correct": 1, "exp": "Accepting risk is valid when it is consciously decided, documented and approved."},
    {"q": "What is residual risk?", "opts": ["Risk transferred to insurers", "Risk before any controls", "Risk remaining after controls are applied", "Risk that cannot be measured"], "correct": 2, "exp": "Controls reduce but rarely eliminate risk; what remains is residual risk."}
  ],
  "Security Awareness": [
    {"q": "What proportion of successful breaches involve a human element?", "opts": ["Exactly half", "Only in small organisations", "Almost none", "The majority"], "correct": 3, "exp": "Social engineering and human error feature in most successful attacks."},
    {"q": "Why should incident reporting be blame-free?", "opts": ["Fear of punishment delays or prevents reports", "It reduces training costs", "It removes the need for training", "It is legally required everywhere"], "correct": 0, "exp": "Fast reporting is what limits damage, and blame suppresses reporting."},
    {"q": "Which is a recognition signal for a phishing message?", "opts": ["It arrives during working hours", "Unexpected urgency combined with a request to act immediately", "It contains an image", "It is addressed to your team"], "correct": 1, "exp": "Manufactured urgency is designed to prevent the recipient from checking before acting."}
  ],
  "What Is Linux?": [
    {"q": "What does it mean that Linux is open source?", "opts": ["It cannot be modified", "It is free of charge only", "Its source code is public and can be inspected", "It has no security"], "correct": 2, "exp": "Open source means the code is publicly available for inspection and modification."},
    {"q": "Why is Linux important for security professionals?", "opts": ["It is the only OS with logs", "It cannot be attacked", "It has no vulnerabilities", "Most servers and most security tooling run on it"], "correct": 3, "exp": "The systems you defend and the tools you use are predominantly Linux-based."},
    {"q": "What do Linux distributions share?", "opts": ["The Linux kernel", "The same graphical interface", "The same file paths", "Identical software packages"], "correct": 0, "exp": "Distributions package the shared kernel with different software, defaults and tooling."}
  ],
  "Installing a Linux Virtual Machine": [
    {"q": "Why should security practice happen inside a virtual machine?", "opts": ["VMs run faster", "It isolates experiments from your real system and can be restored", "VMs have no vulnerabilities", "It is legally required"], "correct": 1, "exp": "A VM gives an isolated, disposable environment that can be rolled back to a snapshot."},
    {"q": "What is the purpose of a VM snapshot?", "opts": ["To speed up boot", "To compress the disk", "To save a state you can return to instantly", "To share the VM"], "correct": 2, "exp": "Snapshots let you undo any change, which makes risky experiments safe."},
    {"q": "How should a VM be networked when handling untrusted files?", "opts": ["Directly to the internet", "Shared with the host filesystem", "Bridged to the local network", "Host-only or isolated"], "correct": 3, "exp": "Isolating the network prevents anything under analysis from reaching real systems."}
  ],
  "Linux Terminal Basics": [
    {"q": "Which command searches for text inside files?", "opts": ["grep", "cd", "chmod", "ls"], "correct": 0, "exp": "grep searches file contents for a pattern and is the core tool of log analysis."},
    {"q": "What does the pipe symbol | do?", "opts": ["Runs two commands at once", "Sends one command's output into another command", "Comments out a line", "Repeats the last command"], "correct": 1, "exp": "The pipe chains commands, feeding the output of one as input to the next."},
    {"q": "Which command follows a log file as new lines are written?", "opts": ["less", "cat", "tail -f", "head"], "correct": 2, "exp": "tail -f streams new lines as they arrive, which is how live logs are watched."}
  ],
  "Linux File System": [
    {"q": "Which directory holds Linux system logs?", "opts": ["/home", "/bin", "/etc", "/var/log"], "correct": 3, "exp": "/var/log contains system and application logs, the primary evidence source on Linux."},
    {"q": "Why is /tmp of particular interest during an investigation?", "opts": ["It is world-writable, so dropped malicious files often appear there", "It stores passwords", "It is never used", "It is encrypted"], "correct": 0, "exp": "Because any account can write there, attackers frequently stage files in /tmp."},
    {"q": "How do you list hidden files in Linux?", "opts": ["ls -h", "ls -la", "ls --hidden", "find -hidden"], "correct": 1, "exp": "Hidden files begin with a dot and are shown by ls -a, commonly combined as ls -la."}
  ],
  "Users and Permissions": [
    {"q": "What does permission 755 grant?", "opts": ["No access at all", "Full access to everyone", "rwx for owner, r-x for group and others", "Read only for everyone"], "correct": 2, "exp": "7 is rwx for the owner, and 5 is r-x for group and others."},
    {"q": "Why is a world-readable /etc/shadow dangerous?", "opts": ["It disables sudo", "It deletes accounts", "It slows logins", "Any user can copy the password hashes and crack them offline"], "correct": 3, "exp": "The shadow file holds password hashes, which must be readable only by root."},
    {"q": "What is the risk of an unexpected SUID binary?", "opts": ["It runs with the owner's privileges, enabling escalation", "It cannot be deleted", "It disables logging", "It uses more disk"], "correct": 0, "exp": "A SUID program owned by root executes with root privileges regardless of who runs it."}
  ],
  "Managing Processes": [
    {"q": "Which command shows which process is listening on which port?", "opts": ["ls -la", "ss -tulpn", "grep -r", "chmod 755"], "correct": 1, "exp": "ss -tulpn lists listening sockets together with the owning process."},
    {"q": "Why check a suspicious process's parent?", "opts": ["It shows the file size", "Parents run faster", "An unexpected parent, such as a web server spawning a shell, indicates compromise", "Parents hold the logs"], "correct": 2, "exp": "Process lineage reveals how something was launched, which often exposes the attack path."},
    {"q": "What should be done before killing a suspicious process?", "opts": ["Delete its files", "Disable logging", "Reboot the machine", "Capture evidence such as its command line and connections"], "correct": 3, "exp": "Killing the process destroys volatile evidence that the investigation will need."}
  ],
  "Installing Software": [
    {"q": "Why are repository packages safer than downloaded binaries?", "opts": ["They are cryptographically signed and verified on install", "They install faster", "They need no permissions", "They are smaller"], "correct": 0, "exp": "Signature verification confirms the package came from the distribution and was not altered."},
    {"q": "What is the risk of piping a remote script directly into a shell?", "opts": ["It is slow", "It executes unreviewed code from a server with your privileges", "It requires root", "It cannot be undone"], "correct": 1, "exp": "You run whatever the server returns at that moment, with no opportunity to inspect it."},
    {"q": "Which routine task most reduces exploitable vulnerabilities?", "opts": ["Clearing logs", "Changing the wallpaper", "Applying software updates", "Renaming accounts"], "correct": 2, "exp": "Most exploited vulnerabilities already have patches available at the time of the attack."}
  ],
  "Networking Commands": [
    {"q": "Which command lists current network connections with their owning processes?", "opts": ["ip a", "traceroute", "ping", "ss -tunap"], "correct": 3, "exp": "ss with those flags shows established connections alongside the processes holding them."},
    {"q": "Which command resolves a DNS name from the terminal?", "opts": ["dig", "tcpdump", "ping -c", "curl"], "correct": 0, "exp": "dig queries DNS directly and shows the full response."},
    {"q": "What does tcpdump do?", "opts": ["Deletes network logs", "Captures packets for analysis", "Configures interfaces", "Tests DNS only"], "correct": 1, "exp": "tcpdump captures raw network traffic, which can then be examined in detail."}
  ],
  "Bash Fundamentals": [
    {"q": "What does the line #!/bin/bash at the top of a script do?", "opts": ["Imports a library", "Adds a comment", "Tells the system which interpreter to run the script with", "Sets permissions"], "correct": 2, "exp": "The shebang line specifies the interpreter used to execute the script."},
    {"q": "Why should variables be quoted in bash scripts?", "opts": ["It is faster", "Quotes are required by syntax", "It looks tidier", "Unquoted values break on spaces and special characters"], "correct": 3, "exp": "Quoting prevents word splitting and glob expansion from corrupting the value."},
    {"q": "What is the main security benefit of scripting evidence collection?", "opts": ["Every host is collected from identically", "It hides the activity", "It needs no permissions", "It runs faster"], "correct": 0, "exp": "Consistent collection matters because inconsistent evidence is hard to compare and to defend."}
  ],
  "Linux Security Basics": [
    {"q": "Why should SSH root login be disabled?", "opts": ["It is slower", "It removes a known, guessable target account for remote attacks", "Root cannot use SSH", "It saves disk space"], "correct": 1, "exp": "Root is a universal account name, making it the obvious target for remote brute-force attempts."},
    {"q": "Why should logs be shipped off the host?", "opts": ["Because local logs are unreadable", "To save disk space only", "So an attacker with access cannot erase the evidence", "To speed up the server"], "correct": 2, "exp": "Attackers routinely clear local logs; a remote copy preserves the record."},
    {"q": "What is the security benefit of disabling unused services?", "opts": ["It improves logging", "It is required for SSH", "Faster boot only", "Each listening service is attack surface that can be removed"], "correct": 3, "exp": "Removing services removes the vulnerabilities and exposure they carry."}
  ],
  "What Is Ethical Hacking?": [
    {"q": "What legally distinguishes ethical hacking from an attack?", "opts": ["Written authorisation and an agreed scope", "The attacker's intention alone", "The time of day", "The tools used"], "correct": 0, "exp": "The techniques overlap; documented permission and scope are what make testing lawful."},
    {"q": "What should a tester do when finding an issue outside the agreed scope?", "opts": ["Test it immediately", "Report the observation and request written scope extension", "Ignore it entirely", "Publish it publicly"], "correct": 1, "exp": "Acting outside scope is unauthorised, so the correct step is to document and ask."},
    {"q": "What is the deliverable of a professional penetration test?", "opts": ["Copies of the data found", "Proof of access", "A report enabling the owner to remediate the findings", "A list of tools used"], "correct": 2, "exp": "The purpose is improving the client's security, which requires actionable reporting."}
  ],
  "Legal and Ethical Responsibilities": [
    {"q": "Is good intent a legal defence for unauthorised scanning?", "opts": ["Only for students", "Only if nothing breaks", "Yes, always", "No, unauthorised access remains an offence regardless of intent"], "correct": 3, "exp": "Most computer-misuse laws turn on authorisation, not on the tester's motive."},
    {"q": "Where should a learner practise offensive techniques?", "opts": ["In their own lab or on platforms designed for the purpose", "On their employer's systems", "On a friend's server", "On any public website"], "correct": 0, "exp": "Purpose-built practice environments and your own lab are the only authorised targets."},
    {"q": "What is responsible disclosure?", "opts": ["Publishing a flaw immediately", "Reporting to the owner first with time to remediate", "Selling the finding", "Never reporting anything"], "correct": 1, "exp": "Responsible disclosure gives the owner an opportunity to fix the issue before it becomes public."}
  ],
  "Reconnaissance": [
    {"q": "What distinguishes passive from active reconnaissance?", "opts": ["Passive requires special tools", "Passive is faster", "Passive uses public sources without touching the target", "Active is always legal"], "correct": 2, "exp": "Passive gathering never interacts with the target, so it leaves no trace on their systems."},
    {"q": "Why are job adverts a reconnaissance source?", "opts": ["They contain network diagrams", "They are always outdated", "They list passwords", "They reveal specific internal technologies and versions"], "correct": 3, "exp": "Requirements often name the exact products in use, which narrows an attacker's research."},
    {"q": "What is the defensive takeaway from reconnaissance?", "opts": ["Review and limit what the organisation publishes", "Block all search engines", "Disable DNS", "Stop hiring"], "correct": 0, "exp": "Reducing publicly available detail reduces what an attacker can learn without any risk."}
  ],
  "Information Gathering": [
    {"q": "What is the most common serious finding when mapping attack surface?", "opts": ["Strong passwords", "Forgotten assets nobody knew were still exposed", "Excessive logging", "Too many firewalls"], "correct": 1, "exp": "Systems that everyone stopped maintaining but nobody switched off are a recurring source of breaches."},
    {"q": "Why does an asset inventory matter for security?", "opts": ["It replaces scanning", "It is required for accounting", "You cannot patch or monitor what you do not know you own", "It speeds up the network"], "correct": 2, "exp": "Unknown assets are unmonitored and unpatched by definition."},
    {"q": "What do certificate transparency logs reveal?", "opts": ["Server passwords", "Internal IP addresses", "Private keys", "Subdomain names that certificates were issued for"], "correct": 3, "exp": "Public CT logs list issued certificates, exposing subdomain names an organisation may consider private."}
  ],
  "Vulnerability Scanning": [
    {"q": "What does a CVE identifier represent?", "opts": ["A specific publicly known vulnerability", "A scanning tool", "A patch", "A severity score"], "correct": 0, "exp": "CVE is the catalogue identifier for a particular known vulnerability; CVSS scores its severity."},
    {"q": "Why must scanner findings be validated?", "opts": ["Scanners are illegal", "False positives waste effort and false negatives create false confidence", "Validation is required by law", "Scanners only work once"], "correct": 1, "exp": "Automated matching produces errors in both directions, so human confirmation is required."},
    {"q": "Which finding should usually be prioritised?", "opts": ["The one with the longest description", "A critical issue on an isolated test system", "A medium issue on an internet-facing system holding customer data", "The oldest finding"], "correct": 2, "exp": "Priority combines severity with exposure and data sensitivity, not severity alone."}
  ],
  "Network Scanning": [
    {"q": "What does a port scan reveal?", "opts": ["The contents of files", "The operating system licence", "User passwords", "Which services are listening on a host"], "correct": 3, "exp": "Port scanning identifies open ports and, with service detection, what is running behind them."},
    {"q": "Why is internal scanning activity a serious indicator?", "opts": ["It suggests an attacker mapping the network for lateral movement", "It is normal maintenance", "It affects only printers", "It slows the network"], "correct": 0, "exp": "Post-compromise attackers scan internally to find their next target, so it signals an active intrusion."},
    {"q": "What makes scanning visible in firewall logs?", "opts": ["It uses encryption", "Many connection attempts across many ports or hosts from one source", "It runs at night", "It uses UDP only"], "correct": 1, "exp": "The volume and spread of connection attempts is a distinctive pattern no normal application produces."}
  ],
  "Understanding Common Vulnerabilities": [
    {"q": "What is the most common root cause of exploited vulnerabilities?", "opts": ["Weak encryption algorithms", "Zero-day flaws", "Missing patches for known issues", "Hardware failure"], "correct": 2, "exp": "Most successful exploitation targets vulnerabilities for which a patch was already available."},
    {"q": "What does 'zero-day' mean?", "opts": ["An attack lasting under a day", "A vulnerability with no impact", "A vulnerability found on the first day", "A vulnerability with no patch available yet"], "correct": 3, "exp": "Zero-day refers to a flaw the vendor has had no time to fix, so no patch exists."},
    {"q": "Which root cause underlies injection vulnerabilities?", "opts": ["Insufficient input validation", "Missing backups", "Slow networks", "Weak passwords"], "correct": 0, "exp": "Injection occurs when untrusted input is treated as code or query structure rather than data."}
  ],
  "Web Security Fundamentals": [
    {"q": "Why must security decisions be enforced server-side?", "opts": ["Servers are faster", "Anything enforced in the browser can be altered by the user", "Browsers cannot run checks", "It reduces bandwidth"], "correct": 1, "exp": "Client-side controls are advisory because the client is under the user's control."},
    {"q": "Which input should be treated as untrusted?", "opts": ["None, if HTTPS is used", "Only form fields", "All client-supplied input including headers and cookies", "Only file uploads"], "correct": 2, "exp": "Every value coming from the client can be modified, regardless of how it is transmitted."},
    {"q": "Why should error messages be generic in production?", "opts": ["Users dislike detail", "It is a legal requirement", "They render faster", "Detailed errors disclose versions, paths and query structure to attackers"], "correct": 3, "exp": "Verbose errors hand an attacker information about the technology and its internals."}
  ],
  "Password Security Testing": [
    {"q": "What is the most common credential finding in real assessments?", "opts": ["Default or vendor credentials still in place", "Too many password changes", "Overuse of MFA", "Passwords that are too long"], "correct": 0, "exp": "Unchanged default credentials remain one of the most frequently found and most easily exploited issues."},
    {"q": "Why is offline hash analysis preferred over online guessing during a test?", "opts": ["It is more accurate", "It avoids account lockouts and service disruption", "It requires no authorisation", "It is faster to set up"], "correct": 1, "exp": "Repeated live login attempts lock accounts and disrupt the business being tested."},
    {"q": "How should password testing results be reported?", "opts": ["Only verbally", "As a list of individual users' passwords", "As systemic policy and storage weaknesses", "Publicly, for transparency"], "correct": 2, "exp": "Reporting the systemic cause makes the finding fixable and avoids exposing individuals."}
  ],
  "Writing a Security Assessment": [
    {"q": "Who is the executive summary written for?", "opts": ["Auditors only", "Other testers", "Developers", "Management, in business language"], "correct": 3, "exp": "The summary must convey risk and required decisions to non-technical decision makers."},
    {"q": "Why must each finding include reproduction steps?", "opts": ["A finding that cannot be reproduced is likely to be disputed and ignored", "It is legally required", "To demonstrate skill", "To lengthen the report"], "correct": 0, "exp": "Reproducibility is what makes a finding credible and fixable."},
    {"q": "How should findings be prioritised in a report?", "opts": ["By scanner severity alone", "By business risk, combining severity with exposure and data sensitivity", "Alphabetically", "By discovery order"], "correct": 1, "exp": "Context determines which technically severe findings actually matter most to this organisation."}
  ],
  "How Websites Work": [
    {"q": "Where must web security controls be enforced?", "opts": ["In the DNS record", "In the browser", "On the server", "In the network cable"], "correct": 2, "exp": "The client is under the user's control, so only server-side enforcement is trustworthy."},
    {"q": "What does it mean that HTTP is stateless?", "opts": ["It has no headers", "It works only once", "It cannot be encrypted", "Each request is independent, so sessions are needed for continuity"], "correct": 3, "exp": "HTTP does not remember previous requests, which is why session mechanisms exist."},
    {"q": "What is client-side validation good for?", "opts": ["Improving usability by catching mistakes early", "Replacing server checks", "Encrypting data", "Preventing attacks"], "correct": 0, "exp": "It gives users fast feedback but provides no security because it can be bypassed."}
  ],
  "HTTP and HTTPS": [
    {"q": "What does HTTPS add to HTTP?", "opts": ["Faster page loads", "Encryption in transit and authentication of the server's domain", "Better search ranking only", "Automatic input validation"], "correct": 1, "exp": "TLS encrypts the connection and verifies that you are talking to the named domain."},
    {"q": "Why should sensitive data not be sent in GET parameters?", "opts": ["GET cannot carry data", "GET is slower", "GET parameters appear in browser history, logs and referrer headers", "GET is deprecated"], "correct": 2, "exp": "URL parameters are recorded in many places, so they are unsuitable for secrets."},
    {"q": "A sudden burst of HTTP 401 responses most likely indicates:", "opts": ["A DNS failure", "Normal traffic", "A server crash", "A brute-force authentication attempt"], "correct": 3, "exp": "Repeated authentication failures at volume are the signature of credential guessing."}
  ],
  "Cookies and Sessions": [
    {"q": "What does the HttpOnly cookie flag do?", "opts": ["Prevents JavaScript from reading the cookie", "Sends it only over HTTPS", "Expires it immediately", "Encrypts the cookie"], "correct": 0, "exp": "HttpOnly blocks script access, which limits cookie theft through cross-site scripting."},
    {"q": "Why does a stolen session token bypass multi-factor authentication?", "opts": ["MFA does not apply to web apps", "MFA was satisfied when the session was created, and is not re-checked", "Tokens contain the MFA code", "MFA only protects admins"], "correct": 1, "exp": "The session represents an already-authenticated state, so possessing it skips the login entirely."},
    {"q": "Why should a session identifier be regenerated at login?", "opts": ["To support HTTPS", "To improve performance", "To prevent session fixation, where an attacker pre-sets the identifier", "To reduce cookie size"], "correct": 2, "exp": "If the identifier does not change at login, an attacker who set it beforehand inherits the authenticated session."}
  ],
  "Authentication Security": [
    {"q": "Why should login errors be identical for wrong username and wrong password?", "opts": ["It speeds up login", "Users prefer it", "It is simpler to code", "Different messages let an attacker enumerate valid accounts"], "correct": 3, "exp": "Distinct messages confirm which accounts exist, narrowing an attacker's target list."},
    {"q": "Which password hashing approach is appropriate?", "opts": ["A slow salted algorithm such as bcrypt or Argon2", "Reversible encryption", "Plain text with file permissions", "Fast hashing such as MD5"], "correct": 0, "exp": "Slow, salted hashing makes offline cracking expensive even if the database is stolen."},
    {"q": "What property must a password reset token have?", "opts": ["It should be memorable", "Random, single-use and short-lived", "The same for each user", "Valid indefinitely"], "correct": 1, "exp": "Predictable or long-lived reset tokens allow account takeover without the password."}
  ],
  "Access Control": [
    {"q": "What is an insecure direct object reference?", "opts": ["An expired session", "A broken hyperlink", "Accessing another user's record by changing an identifier, with no ownership check", "A missing database index"], "correct": 2, "exp": "The application confirms authentication but not that the requested object belongs to that user."},
    {"q": "Where must access control be enforced for an API?", "opts": ["In the client application", "In the firewall only", "Nowhere; APIs are internal", "On the server, exactly as for web pages"], "correct": 3, "exp": "APIs are directly reachable, so they need the same server-side authorisation as any page."},
    {"q": "Why log authorisation failures?", "opts": ["Repeated denials indicate someone enumerating objects or permissions", "They are required for backups", "To slow attackers down", "For billing"], "correct": 0, "exp": "A pattern of denied requests is a strong signal of active probing."}
  ],
  "SQL Injection Concepts": [
    {"q": "What is the correct defence against SQL injection?", "opts": ["Filtering dangerous words", "Parameterised queries that separate structure from data", "Escaping quotes manually", "Hiding error messages"], "correct": 1, "exp": "Parameterisation means user input can never be interpreted as query structure."},
    {"q": "Why is blocklist filtering an unreliable defence?", "opts": ["It requires a WAF", "It is slow", "Attackers repeatedly find encodings and syntax the list does not cover", "It breaks the database"], "correct": 2, "exp": "Blocking known-bad patterns is always incomplete, whereas parameterisation removes the class of flaw."},
    {"q": "Why apply least privilege to the application's database account?", "opts": ["It is required for backups", "It prevents all injection", "It speeds up queries", "It limits what a successful injection can do"], "correct": 3, "exp": "If the account cannot drop tables or read other schemas, a successful injection achieves far less."}
  ],
  "Cross-Site Scripting (XSS)": [
    {"q": "Which form of XSS affects every visitor to a page?", "opts": ["Stored", "DOM-based", "Blind", "Reflected"], "correct": 0, "exp": "Stored XSS is saved server-side and served to everyone who views the affected page."},
    {"q": "What is the primary fix for XSS?", "opts": ["Blocking the word 'script'", "Encoding output for the context it is rendered into", "Using HTTPS", "Disabling cookies"], "correct": 1, "exp": "Contextual output encoding ensures untrusted data is displayed as text rather than executed."},
    {"q": "Which header limits which scripts a page may execute?", "opts": ["Set-Cookie", "X-Frame-Options", "Content-Security-Policy", "Strict-Transport-Security"], "correct": 2, "exp": "CSP restricts script sources and inline execution, mitigating XSS impact."}
  ],
  "Cross-Site Request Forgery (CSRF)": [
    {"q": "What does a CSRF attack achieve?", "opts": ["Stealing the password", "Crashing the server", "Reading the victim's data", "Causing the victim's browser to perform an action on a site where they are logged in"], "correct": 3, "exp": "The attacker cannot read the response; CSRF causes unintended state-changing actions."},
    {"q": "What is the standard defence against CSRF?", "opts": ["An unpredictable anti-CSRF token on state-changing requests", "Hiding the form", "Rate limiting", "HTTPS"], "correct": 0, "exp": "A token the attacker's page cannot know or read proves the request came from the real application."},
    {"q": "Why should state changes never use GET requests?", "opts": ["GET is slower", "GET requests can be triggered by simply loading a URL or image", "GET cannot carry parameters", "GET is deprecated"], "correct": 1, "exp": "Any embedded link or image can issue a GET, making state changes trivially forgeable."}
  ],
  "Secure Web Development": [
    {"q": "Why is dependency management a security concern?", "opts": ["It only affects licensing", "Dependencies slow the build", "Most application code comes from third parties and carries their vulnerabilities", "Dependencies cannot be updated"], "correct": 2, "exp": "Vulnerabilities in libraries are inherited by every application that uses them."},
    {"q": "What should never appear in a source code repository?", "opts": ["Test files", "Documentation", "Comments", "Secrets such as API keys and passwords"], "correct": 3, "exp": "Committed secrets are exposed permanently in history and are found by automated scanners."},
    {"q": "Which validation approach is preferred?", "opts": ["Allowing only known-good input", "Validating in the browser only", "No validation if HTTPS is used", "Blocking known-bad input"], "correct": 0, "exp": "Allow-list validation defines what is acceptable, rather than trying to enumerate every attack."}
  ],
  "OWASP Top 10": [
    {"q": "What currently ranks first in the OWASP Top 10?", "opts": ["Injection", "Broken Access Control", "Cryptographic Failures", "Security Misconfiguration"], "correct": 1, "exp": "Broken access control is the most frequently identified serious issue in real applications."},
    {"q": "What is the OWASP Top 10?", "opts": ["A legal standard", "A certification", "A community list of the most critical web application security risks", "A scanning tool"], "correct": 2, "exp": "It is an awareness document listing the most critical risks, based on collected industry data."},
    {"q": "Does passing an OWASP Top 10 review mean an application is secure?", "opts": ["Only for small applications", "Only if automated", "Yes, it is comprehensive", "No, it is a baseline rather than a complete standard"], "correct": 3, "exp": "The Top 10 covers common risks; it is a floor, not a guarantee of overall security."}
  ],
  "Introduction to Python": [
    {"q": "What defines a code block in Python?", "opts": ["Indentation", "Semicolons", "The 'end' keyword", "Curly braces"], "correct": 0, "exp": "Python uses indentation as syntax, so inconsistent indentation is a genuine error."},
    {"q": "Why is Python widely used in security work?", "opts": ["It is the fastest language", "It is readable and has libraries for files, networks and APIs", "It cannot have bugs", "It is required by law"], "correct": 1, "exp": "Readability and a broad standard library make it well suited to automation tasks."},
    {"q": "What should a code comment explain?", "opts": ["The file size", "What each line does", "Why the code does something non-obvious", "The author's name"], "correct": 2, "exp": "The code already shows what happens; comments are for reasoning that is not visible."}
  ],
  "Installing Python": [
    {"q": "Why use a Python virtual environment?", "opts": ["It encrypts the code", "It is required by pip", "It runs faster", "It isolates each project's dependencies from the system and other projects"], "correct": 3, "exp": "Isolation prevents one project's packages from breaking another or the system Python."},
    {"q": "Why should you avoid 'sudo pip install'?", "opts": ["It installs packages system-wide as root, risking system breakage and privilege issues", "pip does not support sudo", "It requires a password", "It is slower"], "correct": 0, "exp": "System-wide installation as root can conflict with distribution packages and runs installer code with full privileges."},
    {"q": "What is package typosquatting?", "opts": ["Misspelling a variable", "Publishing a malicious package under a name similar to a popular one", "Installing too many packages", "Using an old Python version"], "correct": 1, "exp": "Attackers register near-miss names hoping users install theirs by mistake."}
  ],
  "Python Variables and Data Types": [
    {"q": "Which structure best counts events per IP address?", "opts": ["A boolean", "A list", "A dictionary mapping address to count", "A string"], "correct": 2, "exp": "Dictionaries map a key to a value, which is exactly the shape of a per-address count."},
    {"q": "What happens with \"5\" + 5 in Python?", "opts": ["It returns \"55\"", "It returns 5", "It returns 10", "It raises a type error"], "correct": 3, "exp": "Python does not implicitly convert between strings and integers, so this raises TypeError."},
    {"q": "Which structure is best for storing unique IP addresses?", "opts": ["set", "str", "int", "list"], "correct": 0, "exp": "A set automatically discards duplicates, which is what deduplication requires."}
  ],
  "Conditions and Loops": [
    {"q": "Which loop iterates over each line of a file?", "opts": ["while", "for", "if", "def"], "correct": 1, "exp": "A for loop iterates over a collection, including the lines of an open file."},
    {"q": "What does 'continue' do inside a loop?", "opts": ["Pauses execution", "Exits the loop", "Skips to the next iteration", "Restarts the script"], "correct": 2, "exp": "continue abandons the current iteration and moves on to the next one."},
    {"q": "Which operator tests whether text appears inside a string?", "opts": ["+", "is", "==", "in"], "correct": 3, "exp": "The 'in' operator tests for substring membership, which is the basis of simple log matching."}
  ],
  "Functions": [
    {"q": "What does a function return if it has no return statement?", "opts": ["None", "An empty string", "An error", "0"], "correct": 0, "exp": "A function without an explicit return produces None."},
    {"q": "Why should functions be small and single-purpose?", "opts": ["They run faster", "They are easier to test, reuse and reason about", "Python requires it", "They use less memory"], "correct": 1, "exp": "Focused functions can be verified independently and reused without side effects."},
    {"q": "What is the practical benefit of putting parsing logic in one function?", "opts": ["It removes the need for testing", "It looks tidier", "A fix applies everywhere at once instead of being duplicated", "It runs in parallel"], "correct": 2, "exp": "Single definition means single point of correction, which avoids inconsistent copies."}
  ],
  "Working With Files": [
    {"q": "Why use 'with open(...)' rather than a bare open()?", "opts": ["It encrypts the file", "It allows writing only", "It is faster", "The file is closed automatically, even if an error occurs"], "correct": 3, "exp": "The context manager guarantees the file handle is released."},
    {"q": "How should a very large log file be processed?", "opts": ["Iterate line by line", "Split it manually first", "Convert it to JSON first", "Read it entirely into memory"], "correct": 0, "exp": "Line-by-line iteration keeps memory use constant regardless of file size."},
    {"q": "Which file mode should be used for an evidence log?", "opts": ["'w' to start fresh", "'a' to append without destroying prior data", "'r' read-only", "'x' exclusive create"], "correct": 1, "exp": "Appending preserves everything already collected, which overwriting would destroy."}
  ],
  "Python and Networking": [
    {"q": "Why must network scripts set a timeout?", "opts": ["It encrypts the connection", "It improves accuracy", "Without one, an unresponsive host hangs the script indefinitely", "It is required by the socket module"], "correct": 2, "exp": "A missing timeout means a single silent host can stall the entire run."},
    {"q": "What is wrong with disabling TLS certificate verification?", "opts": ["It breaks the requests library", "Nothing, it is standard practice", "It is slower", "It removes the protection that TLS exists to provide"], "correct": 3, "exp": "Without verification you cannot know you are talking to the intended server."},
    {"q": "What must precede any script that interacts with systems you do not own?", "opts": ["Written authorisation", "A firewall rule", "A virtual environment", "A backup"], "correct": 0, "exp": "Interacting with third-party systems without permission is unauthorised access."}
  ],
  "Working With APIs": [
    {"q": "Where should an API key be stored?", "opts": ["In the script", "In an environment variable or secrets manager", "In the repository README", "In a comment"], "correct": 1, "exp": "Keys in source code are exposed through version control and are found by automated scanners."},
    {"q": "What does HTTP status 429 indicate?", "opts": ["Resource not found", "Server error", "Rate limit exceeded, so back off and retry later", "Authentication failure"], "correct": 2, "exp": "429 means too many requests; the client should slow down rather than retry immediately."},
    {"q": "What should be checked before parsing an API response body?", "opts": ["The content encoding", "The server header", "The response length", "The HTTP status code"], "correct": 3, "exp": "Parsing an error response as if it were data produces confusing failures downstream."}
  ],
  "Automating Security Tasks": [
    {"q": "Which task is a good candidate for automation?", "opts": ["Enriching every alert with threat intelligence data", "Approving policy exceptions", "Classifying incident severity", "Deciding whether to isolate a production server"], "correct": 0, "exp": "Repetitive, identical data gathering automates well; judgement calls do not."},
    {"q": "How should a security script behave when it encounters an error?", "opts": ["Continue silently", "Stop and alert rather than proceeding on bad data", "Retry indefinitely", "Delete its output"], "correct": 1, "exp": "Failing safe prevents an error from producing confidently wrong results."},
    {"q": "Why is automation nobody understands a liability?", "opts": ["It cannot be logged", "It uses resources", "Nobody can verify, fix or safely modify what it does", "It runs too fast"], "correct": 2, "exp": "Unmaintainable automation eventually acts wrongly with nobody able to correct it."}
  ],
  "Building a Simple Security Tool": [
    {"q": "How should a simple analysis tool be structured?", "opts": ["Entirely inside a loop", "As a single line", "One long function", "Separate parse, analyse and report functions"], "correct": 3, "exp": "Separating the stages makes each testable and lets the log format change independently."},
    {"q": "Why should the threshold be an argument rather than hard-coded?", "opts": ["The tool can be reused for different environments without editing code", "Python requires it", "It reduces file size", "It runs faster"], "correct": 0, "exp": "Parameterising the tool makes it reusable and avoids editing code for each use."},
    {"q": "Why must the tool handle malformed log lines?", "opts": ["Logs are always perfect", "Real logs contain truncated or unexpected lines that would otherwise crash the script", "It improves speed", "It is required by JSON"], "correct": 1, "exp": "A single unexpected line should not stop the analysis of an entire file."}
  ],
  "AI vs. Machine Learning": [
    {"q": "Which learning type uses labelled examples?", "opts": ["Generative", "Unsupervised", "Supervised", "Reinforcement"], "correct": 2, "exp": "Supervised learning trains on examples labelled with the correct answer."},
    {"q": "What is overfitting?", "opts": ["Using too much memory", "Having too many labels", "Training for too little time", "A model memorising training data and failing on new data"], "correct": 3, "exp": "An overfitted model performs well on data it has seen and poorly on anything else."},
    {"q": "Which learning type suits anomaly detection with no labels?", "opts": ["Unsupervised", "Reinforcement", "Transfer", "Supervised"], "correct": 0, "exp": "Unsupervised learning finds structure and outliers without needing labelled examples."}
  ],
  "Generative AI": [
    {"q": "What does 'hallucination' mean in generative AI?", "opts": ["The model stops responding", "It produces confident content that is factually false", "It repeats its input", "It refuses to answer"], "correct": 1, "exp": "Generative models optimise for plausibility, so fluent but incorrect output is a normal failure mode."},
    {"q": "Why is 'poor grammar' no longer a reliable phishing signal?", "opts": ["It never was a signal", "Attackers hire writers", "Generative AI produces fluent text in any language at no cost", "Email clients correct grammar"], "correct": 2, "exp": "Language quality no longer distinguishes attacker-written messages from legitimate ones."},
    {"q": "What should never be pasted into a public AI service?", "opts": ["Sample log formats", "Open-source code", "Public documentation", "Confidential or personal data"], "correct": 3, "exp": "Data submitted to a third-party service leaves your control and may be retained."}
  ],
  "Large Language Models": [
    {"q": "How does a large language model produce its answers?", "opts": ["By predicting statistically likely text", "By searching the internet live", "By applying written rules", "By querying a fact database"], "correct": 0, "exp": "LLMs generate text based on learned statistical patterns, not by looking facts up."},
    {"q": "Which kind of LLM output is least reliable?", "opts": ["General explanations", "Specific identifiers, version numbers and citations", "Summaries of provided text", "Rephrasing"], "correct": 1, "exp": "Specific factual details are exactly where models fabricate most convincingly."},
    {"q": "What is a knowledge cutoff?", "opts": ["A maximum answer length", "A rate limit", "The point after which the model has no training data", "A licensing restriction"], "correct": 2, "exp": "Models know nothing about events after their training data ends."}
  ],
  "How ChatGPT and Similar AI Systems Work": [
    {"q": "What is a context window?", "opts": ["The training data size", "The response time limit", "The user interface", "The amount of text the model can consider in one request"], "correct": 3, "exp": "The context window bounds how much input and output the model can handle at once."},
    {"q": "Does a model remember earlier conversations by default?", "opts": ["No, unless the application re-sends that history", "Only for paid accounts", "Only within 24 hours", "Yes, permanently"], "correct": 0, "exp": "Any apparent memory comes from the application resending prior messages in the request."},
    {"q": "What happens when input exceeds the context window?", "opts": ["The model returns an error only", "Earlier content may be dropped, so the answer covers only part of the input", "The model summarises automatically", "Nothing changes"], "correct": 1, "exp": "Truncation can be silent, producing answers that appear complete but are not."}
  ],
  "Prompt Engineering": [
    {"q": "What makes a prompt produce a checkable answer?", "opts": ["Using technical vocabulary", "Making it short", "Providing the data and asking for the evidence used", "Asking a yes/no question"], "correct": 2, "exp": "Requiring the model to cite the input it relied on lets the analyst verify the result."},
    {"q": "What should never be included in a prompt to a public AI service?", "opts": ["General questions", "Public documentation", "Log format examples", "Credentials, personal data or client information"], "correct": 3, "exp": "Anything sent to a third-party service should be considered disclosed to it."},
    {"q": "Why break a large task into steps?", "opts": ["Smaller steps produce more accurate, verifiable output", "It uses fewer tokens overall", "The model requires it", "It is faster"], "correct": 0, "exp": "Multi-part requests dilute accuracy; stepwise prompting keeps each answer checkable."}
  ],
  "AI for Security Research": [
    {"q": "How should AI-provided facts be treated before use in a report?", "opts": ["Cited directly", "Verified against the primary source", "Ignored entirely", "Rewritten in your own words"], "correct": 1, "exp": "Specifics such as identifiers and version ranges must be confirmed with the vendor or CVE record."},
    {"q": "Which is an appropriate use of an AI assistant in security research?", "opts": ["Approving remediation", "Providing citations for a report", "Explaining an unfamiliar protocol so you can research it further", "Deciding incident severity"], "correct": 2, "exp": "Explanation and orientation are strengths; authoritative sourcing is not."},
    {"q": "Why be cautious about AI answers on very recent events?", "opts": ["Recent events are classified", "The model refuses them", "They are always wrong", "The model's training data has a cutoff date"], "correct": 3, "exp": "Anything after the knowledge cutoff is either unknown or fabricated."}
  ],
  "AI for Log Analysis": [
    {"q": "What should you always require when using AI for log analysis?", "opts": ["The specific log lines supporting each observation", "A shorter answer", "A JSON response", "A confidence score"], "correct": 0, "exp": "Quoted evidence lets the analyst verify the finding against the original log."},
    {"q": "Why must large logs be chunked before analysis?", "opts": ["To save money", "The context window is finite and truncation can be silent", "Models reject large files", "It improves grammar"], "correct": 1, "exp": "Exceeding the context window can drop content without any warning in the answer."},
    {"q": "What context can the model not supply on its own?", "opts": ["Pattern clustering", "Log format explanations", "What is normal for your specific environment", "Summarisation"], "correct": 2, "exp": "Baseline knowledge of your environment must come from you, not the model."}
  ],
  "AI for Threat Detection": [
    {"q": "Why does a 99% accurate model still produce many false positives?", "opts": ["Accuracy is measured wrongly", "It needs more memory", "The model is broken", "Almost all events are benign, so even a small error rate is a large number"], "correct": 3, "exp": "At very low base rates the volume of benign events dominates the error count."},
    {"q": "What must be true of the baseline period used to train a detection model?", "opts": ["It must be free of active compromise", "It must include attacks", "It must be from another network", "It must be short"], "correct": 0, "exp": "If compromise is present during baselining, the model learns malicious activity as normal."},
    {"q": "What is model drift?", "opts": ["The model file becoming corrupted", "Accuracy declining as the environment and attacker behaviour change", "Slower processing over time", "Logs arriving late"], "correct": 1, "exp": "Models learn historical patterns and lose accuracy as those patterns change."}
  ],
  "AI-Assisted Security Automation": [
    {"q": "Which step should retain human approval?", "opts": ["Correlating log sources", "Enriching an alert with threat intelligence", "Isolating a production host from the network", "Formatting a report"], "correct": 2, "exp": "Disruptive actions need human judgement because a false positive has real business cost."},
    {"q": "Why must every automated action be logged?", "opts": ["To slow the system", "It is optional", "For billing", "So actions can be audited and rolled back"], "correct": 3, "exp": "Without a record, an incorrect automated action cannot be traced or reversed."},
    {"q": "How should new automation be validated?", "opts": ["Test it against historical incidents first", "Trust the vendor's claims", "Run it once and review monthly", "Enable it in production immediately"], "correct": 0, "exp": "Replaying known past incidents shows what the automation would actually have done."}
  ],
  "Limitations of AI in Cybersecurity": [
    {"q": "What context do AI models typically lack?", "opts": ["Log formats", "Organisational knowledge such as scheduled jobs and approved exceptions", "Statistical patterns", "Network protocols"], "correct": 1, "exp": "Models see data, not the business context that explains it, so analysts must supply it."},
    {"q": "What is adversarial input?", "opts": ["Input in another language", "Corrupted log data", "Input deliberately crafted to evade or mislead a model", "Very large input"], "correct": 2, "exp": "Attackers who understand a model can craft input that produces the wrong classification."},
    {"q": "Why is over-trusting AI output a security risk?", "opts": ["Models are always wrong", "It violates policy", "It uses resources", "Confident wrong answers get acted on without verification"], "correct": 3, "exp": "Models fail confidently, so unverified trust converts a model error into an operational error."}
  ],
  "Understanding Security Logs": [
    {"q": "Why is time synchronisation critical for log analysis?", "opts": ["Correlating events across systems requires consistent timestamps", "Logs will not write otherwise", "It is a compliance formality", "It saves disk space"], "correct": 0, "exp": "Unsynchronised clocks make events appear in the wrong order across systems."},
    {"q": "Why should logs be shipped off the host that generates them?", "opts": ["To reduce disk use only", "So an attacker with host access cannot delete the evidence", "To improve write speed", "Because local logs are encrypted"], "correct": 1, "exp": "Clearing local logs is a standard attacker step; a remote copy survives it."},
    {"q": "How long should logs be retained?", "opts": ["Indefinitely, always", "One week", "Longer than the typical time to detect an incident", "One day"], "correct": 2, "exp": "Breaches are often found months later, so retention must outlast typical detection delay."}
  ],
  "Identifying Suspicious Activity": [
    {"q": "Why can no single event be suspicious in isolation?", "opts": ["Events are encrypted", "Single events are never logged", "Logs are unreliable", "Suspicion is a comparison against what is normal for that context"], "correct": 3, "exp": "The same action can be routine in one context and significant in another."},
    {"q": "A service account begins authenticating interactively from a workstation. This is significant because:", "opts": ["It is a change from that account's established pattern", "Service accounts cannot log in", "Workstations are insecure", "Interactive login is always malicious"], "correct": 0, "exp": "A departure from an account's usual behaviour is the signal, regardless of whether anything failed."},
    {"q": "Which of these is a volume-based signal?", "opts": ["A login at 09:00", "An outbound transfer many times larger than the account's norm", "A successful password change", "A DNS lookup"], "correct": 1, "exp": "Data volumes far above baseline suggest exfiltration or bulk collection."}
  ],
  "Detecting Anomalies": [
    {"q": "What happens if the baseline period contains an active compromise?", "opts": ["Nothing changes", "The model detects it automatically", "The attacker's activity is learned as normal and will not be flagged", "The model refuses to train"], "correct": 2, "exp": "Baselines define normal, so anything present during baselining becomes normal."},
    {"q": "Does anomalous mean malicious?", "opts": ["Only for user accounts", "Only outside working hours", "Yes, always", "No, it means unexplained and requiring investigation"], "correct": 3, "exp": "Anomalies are departures from baseline; many have entirely legitimate explanations."},
    {"q": "Why is an alert that analysts routinely ignore worse than no alert?", "opts": ["It creates the appearance of coverage while being disregarded, including when genuine", "It slows the SIEM", "It cannot be tuned", "It uses storage"], "correct": 0, "exp": "Habitually dismissed alerts provide false assurance and mask real detections."}
  ],
  "AI-Based Malware Detection": [
    {"q": "What is the advantage of ML-based malware detection over signatures?", "opts": ["It is faster", "It can classify variants that have never been seen before", "It needs no data", "It never produces false positives"], "correct": 1, "exp": "Feature-based classification generalises to new samples, which exact signature matching cannot."},
    {"q": "What is dynamic malware analysis?", "opts": ["Scanning its filename", "Reading the file's code", "Running the sample in an isolated sandbox and observing behaviour", "Checking its hash"], "correct": 2, "exp": "Dynamic analysis executes the sample safely to observe what it actually does."},
    {"q": "Why might a sample behave benignly in a sandbox?", "opts": ["Sandboxes run too fast", "Sandboxes block all code", "Sandboxes remove malware", "Malware can detect the sandbox and suppress its behaviour"], "correct": 3, "exp": "Sandbox-aware malware checks for analysis environments and stays dormant inside them."}
  ],
  "Phishing Detection With AI": [
    {"q": "Why has language quality become a weak phishing signal?", "opts": ["Generative AI produces fluent text in any language at no cost", "Attackers avoid text", "It never was a signal", "Filters correct grammar"], "correct": 0, "exp": "Fluent, well-localised phishing is now trivially cheap to produce."},
    {"q": "Which is a strong technical phishing indicator?", "opts": ["The message contains an image", "The sender domain was registered a few days ago", "It arrived in the morning", "It has a signature block"], "correct": 1, "exp": "Newly registered domains are heavily associated with phishing campaigns."},
    {"q": "What should be checked about a link in a suspicious email?", "opts": ["Whether it is underlined", "Its colour", "Where it actually points, not what its text says", "Its length only"], "correct": 2, "exp": "Displayed link text is arbitrary; the actual destination is what matters."}
  ],
  "Threat Intelligence": [
    {"q": "Which form of threat intelligence has the longest useful life?", "opts": ["File hashes", "Domain names", "IP address lists", "Behavioural descriptions of attacker techniques"], "correct": 3, "exp": "Infrastructure changes quickly; the techniques attackers rely on change slowly."},
    {"q": "What is MITRE ATT&CK?", "opts": ["A shared framework describing adversary tactics and techniques", "An encryption standard", "A compliance regulation", "A scanning tool"], "correct": 0, "exp": "ATT&CK catalogues real-world adversary behaviour and gives the industry a common vocabulary."},
    {"q": "Why does relevance matter in threat intelligence?", "opts": ["Feeds are expensive", "Intelligence about unrelated sectors adds noise without improving detection", "All intelligence is equally useful", "Relevance affects storage"], "correct": 1, "exp": "Untargeted intelligence dilutes attention without improving defence of your environment."}
  ],
  "Indicators of Compromise (IOCs)": [
    {"q": "Why are file hashes considered weak indicators?", "opts": ["They cannot be searched", "They are hard to compute", "Changing a single byte produces a new hash", "They are not shareable"], "correct": 2, "exp": "Hashes identify one exact file, so trivial modification defeats them."},
    {"q": "What does the Pyramid of Pain describe?", "opts": ["Analyst workload", "Alert volumes", "Incident severity levels", "How costly each indicator type is for an attacker to change"], "correct": 3, "exp": "It ranks detection approaches by how much difficulty they impose on the adversary."},
    {"q": "What is retrospective hunting?", "opts": ["Searching stored logs for a newly published indicator", "Reviewing closed tickets", "Re-running a scanner", "Predicting future attacks"], "correct": 0, "exp": "New indicators are searched against historical data to find compromise that already occurred."}
  ],
  "Security Event Analysis": [
    {"q": "What is the most common analytical failure when triaging alerts?", "opts": ["Gathering too much context", "Concluding first and then seeking supporting evidence", "Escalating too quickly", "Reading the alert rule"], "correct": 1, "exp": "Confirmation bias leads analysts to justify an early conclusion rather than test it."},
    {"q": "Why document what was ruled out?", "opts": ["It is not necessary", "For compliance only", "So the next analyst does not repeat the same investigation", "To lengthen the ticket"], "correct": 2, "exp": "Recording eliminated explanations makes investigative work cumulative rather than repeated."},
    {"q": "What should an escalation state?", "opts": ["The analyst's opinion", "The alert text alone", "Only the conclusion", "What is known, what is not known, and the supporting evidence"], "correct": 3, "exp": "A useful escalation separates established facts from open questions."}
  ],
  "Building a Basic Threat Detection Workflow": [
    {"q": "Where should building a detection start?", "opts": ["With the question you want answered", "With the alert volume target", "With the budget", "With the available tool"], "correct": 0, "exp": "Starting from the question identifies the right data source and logic rather than accepting defaults."},
    {"q": "What is the purpose of normalisation?", "opts": ["Reducing storage", "Making different log sources comparable so they can be correlated", "Encrypting logs", "Removing old events"], "correct": 1, "exp": "Consistent field names and formats are what make cross-source correlation possible."},
    {"q": "Why must triage outcomes feed back into the rule?", "opts": ["To increase alert volume", "For reporting metrics", "Without feedback the rule is never tuned and its accuracy decays", "It is a compliance requirement"], "correct": 2, "exp": "Outcome feedback is how false positive rates are reduced and coverage gaps found."}
  ],
  "Evaluating AI Security Tools": [
    {"q": "Why is an accuracy percentage a poor way to compare detection tools?", "opts": ["Accuracy cannot be measured", "It only applies to antivirus", "It is always inflated", "Without the base rate it says nothing about alert volume or precision"], "correct": 3, "exp": "At low base rates, high accuracy still produces overwhelming false positive volumes."},
    {"q": "Which question best reveals a tool's practical cost?", "opts": ["How many alerts per day per thousand endpoints, and how many were real?", "How many features does it have?", "How long has the vendor existed?", "What is its accuracy?"], "correct": 0, "exp": "Alert volume and precision determine the analyst time the tool will consume."},
    {"q": "Why should a tool be trialled on your own data?", "opts": ["Vendors require it", "Vendor benchmarks rarely transfer to a different environment", "It is cheaper", "Trials are always free"], "correct": 1, "exp": "Detection performance depends heavily on the environment's own traffic and baseline."}
  ],
  "What Is a SOC?": [
    {"q": "What does a Tier 1 SOC analyst primarily do?", "opts": ["Write detection rules", "Deep forensic analysis", "Triage incoming alerts and escalate what matters", "Manage the firewall estate"], "correct": 2, "exp": "Tier 1 handles first-line triage, deciding which alerts warrant deeper investigation."},
    {"q": "Why is documentation central to SOC work?", "opts": ["It fills shift time", "It replaces alerting", "Compliance only", "Without it the team has no memory and repeats investigations"], "correct": 3, "exp": "Recorded outcomes make investigation cumulative and reveal patterns over time."},
    {"q": "What is an MSSP?", "opts": ["An outsourced security operations provider serving multiple clients", "A logging protocol", "A compliance standard", "A detection algorithm"], "correct": 0, "exp": "Managed security service providers deliver SOC capability to organisations that lack their own."}
  ],
  "SOC Analyst Responsibilities": [
    {"q": "In what order should an alert queue be worked?", "opts": ["Arrival order", "By priority", "Alphabetically", "Newest first always"], "correct": 1, "exp": "Priority ordering ensures the most consequential alerts get attention first."},
    {"q": "Why document alerts closed as benign?", "opts": ["It is not necessary", "It is required by law", "Patterns across many benign alerts can reveal a slow intrusion", "To increase metrics"], "correct": 2, "exp": "Individually benign events can form a significant pattern only if they are recorded."},
    {"q": "What quality is most valued in a Tier 1 analyst?", "opts": ["Speed above all", "Tool expertise alone", "Occasional brilliant discoveries", "Consistency and clear written reasoning"], "correct": 3, "exp": "Reliable, well-documented triage is what makes a SOC function."}
  ],
  "Security Information and Event Management (SIEM)": [
    {"q": "What determines a SIEM's detection coverage?", "opts": ["Which log sources are actually being collected", "The vendor", "The user interface", "The number of rules"], "correct": 0, "exp": "No rule can detect activity in a log source that is not being ingested."},
    {"q": "Why is a missing log source a dangerous gap?", "opts": ["It causes errors", "It produces no alert and no warning, so it looks like nothing is happening", "It slows the SIEM", "It breaks correlation rules"], "correct": 1, "exp": "Absent data fails silently, which is why coverage must be audited deliberately."},
    {"q": "What does normalisation do in a SIEM?", "opts": ["Deletes duplicates", "Compresses logs", "Maps different sources into common fields so they can be correlated", "Encrypts events"], "correct": 2, "exp": "Common field names are what allow events from different systems to be joined."}
  ],
  "Log Collection": [
    {"q": "Why should the SOC alert on a log source going silent?", "opts": ["To reduce costs", "For licensing compliance", "To measure volume", "Because absence of events produces no alert and hides a collection failure"], "correct": 3, "exp": "A stopped source fails silently, leaving a blind spot nobody notices."},
    {"q": "How should log sources be prioritised?", "opts": ["By what supports the detections the organisation actually needs", "By data volume", "By age of the system", "Alphabetically"], "correct": 0, "exp": "Collection should be driven by detection requirements rather than by availability."},
    {"q": "Why must logs be protected in transit and at rest?", "opts": ["They are large", "They contain sensitive detail about users and systems", "It improves performance", "It is optional"], "correct": 1, "exp": "Logs reveal account names, hostnames and behaviour, which is valuable to an attacker."}
  ],
  "Alert Monitoring": [
    {"q": "What is the primary risk of high alert volume?", "opts": ["Licensing breaches", "Storage cost", "Alert fatigue causing superficial triage and missed incidents", "Slower networks"], "correct": 2, "exp": "When volume exceeds capacity, genuine detections are dismissed alongside noise."},
    {"q": "What is the correct response to a persistently noisy rule?", "opts": ["Increase staffing", "Lower its severity only", "Train analysts to ignore it", "Tune or remove the rule"], "correct": 3, "exp": "A rule that is routinely dismissed provides no detection value and must be fixed."},
    {"q": "Which metrics indicate SOC queue health?", "opts": ["Queue depth and time-to-triage", "Number of rules enabled", "Log volume ingested", "Total alerts generated"], "correct": 0, "exp": "Whether alerts are actually being worked matters more than how many arrive."}
  ],
  "Alert Triage": [
    {"q": "What are the three possible outcomes of alert triage?", "opts": ["Open, closed, deferred", "Benign with reasoning, investigate further, or declare an incident", "Low, medium, high", "Accept, reject, transfer"], "correct": 1, "exp": "Triage routes each alert to one of these three documented outcomes."},
    {"q": "What should an analyst do when genuinely uncertain?", "opts": ["Reduce its severity", "Close the alert", "Escalate to Tier 2", "Wait for it to recur"], "correct": 2, "exp": "Escalation exists for uncertainty; closing an ambiguous alert is how incidents are missed."},
    {"q": "Why is triage consistency important?", "opts": ["It reduces alert volume", "It satisfies auditors", "It speeds up reporting", "Different conclusions on the same alert indicate a broken process"], "correct": 3, "exp": "A repeatable process produces comparable results regardless of who is on shift."}
  ],
  "Incident Investigation": [
    {"q": "Why must scope be established before remediation?", "opts": ["Cleaning one host while the attacker retains access elsewhere achieves nothing", "It is a compliance rule", "Scope cannot be found later", "Remediation is expensive"], "correct": 0, "exp": "Partial remediation alerts the attacker while leaving their access intact."},
    {"q": "What should an investigation build first?", "opts": ["A remediation plan", "A timeline of events", "A press statement", "A new detection rule"], "correct": 1, "exp": "Sequence is what reveals cause and effect across systems."},
    {"q": "How should notes distinguish information?", "opts": ["Notes are unnecessary", "All findings are equal", "Confirmed facts must be separated from working hypotheses", "Only conclusions matter"], "correct": 2, "exp": "Mixing assumptions with facts leads to conclusions that collapse under review."}
  ],
  "Threat Hunting": [
    {"q": "What drives a threat hunt?", "opts": ["A vendor recommendation", "A scheduled scan", "An alert", "A hypothesis about how an attacker might operate undetected"], "correct": 3, "exp": "Hunting starts from a question, not from a triggered alert."},
    {"q": "Why is a hunt that finds nothing still valuable?", "opts": ["It confirms absence or exposes a visibility gap in collection", "It generates metrics", "It is not valuable", "It fills time"], "correct": 0, "exp": "Discovering that you could not have detected something is an important finding."},
    {"q": "What should happen after a successful hunt?", "opts": ["Close the case", "Convert the technique into an automated detection rule", "Repeat it manually each week", "Archive the notes"], "correct": 1, "exp": "Automating the finding means the same activity is caught without a manual hunt next time."}
  ],
  "Incident Documentation": [
    {"q": "When should incident notes be written?", "opts": ["Only if escalated", "After the incident closes", "Contemporaneously, as work happens", "At the end of each week"], "correct": 2, "exp": "Notes written during the work are more accurate and carry more evidential weight."},
    {"q": "How should times be recorded?", "opts": ["By shift number", "They need not be recorded", "Relative, such as 'this morning'", "Absolute timestamps with time zone"], "correct": 3, "exp": "Absolute, timezone-qualified times are required to correlate across systems and teams."},
    {"q": "What must documentation distinguish?", "opts": ["Observations from conclusions", "Internal and external systems", "Automated and manual alerts", "Senior and junior authorship"], "correct": 0, "exp": "Separating evidence from interpretation keeps the record reliable as understanding changes."}
  ],
  "SOC Automation": [
    {"q": "What is a SOAR playbook?", "opts": ["A training manual", "A defined sequence of automated steps for a given alert type", "A compliance document", "A detection rule"], "correct": 1, "exp": "Playbooks encode the standard response steps so they run consistently."},
    {"q": "Which action should be gated behind human approval?", "opts": ["Collecting related log events", "Adding threat intelligence context", "Isolating a host from the network", "Opening a ticket"], "correct": 2, "exp": "Disruptive actions carry business cost when triggered by a false positive."},
    {"q": "Why must automated actions be logged?", "opts": ["For licensing", "To trigger more automation", "To measure speed", "So they can be audited and reversed"], "correct": 3, "exp": "Unlogged automated actions cannot be traced or rolled back when they are wrong."}
  ],
  "Introduction to Digital Forensics": [
    {"q": "Why should analysis be performed on a copy rather than the original?", "opts": ["Working on the original alters evidence such as timestamps", "Originals are encrypted", "Copies are smaller", "Copies are faster"], "correct": 0, "exp": "Any interaction with the original risks changing the metadata the investigation depends on."},
    {"q": "What does 'order of volatility' mean?", "opts": ["Collecting the largest data first", "Collecting the most perishable evidence, such as memory, first", "Prioritising by file type", "Collecting alphabetically"], "correct": 1, "exp": "Volatile data such as RAM is lost first, so it is captured before disk images."},
    {"q": "What makes forensic conclusions defensible?", "opts": ["The speed of the investigation", "The analyst's seniority", "Traceability from each conclusion to the specific evidence supporting it", "The tools used"], "correct": 2, "exp": "Defensibility comes from being able to show exactly which evidence supports each finding."}
  ],
  "Evidence Collection": [
    {"q": "What is the purpose of a write blocker?", "opts": ["To compress the image", "To encrypt the copy", "To speed up imaging", "To prevent the acquisition process from modifying the source media"], "correct": 3, "exp": "It guarantees the evidence drive is only read, never written to."},
    {"q": "Why is network isolation often preferred to powering off?", "opts": ["It contains the threat while preserving volatile memory evidence", "It is quieter", "Powering off is impossible", "It is faster"], "correct": 0, "exp": "Isolation stops attacker communication without destroying the memory contents."},
    {"q": "What should be recorded when acquiring evidence?", "opts": ["Only the file size", "Who collected it, when, with which tool, and its hash", "The analyst's opinion", "The alert that triggered it"], "correct": 1, "exp": "Complete acquisition records are what make the evidence defensible later."}
  ],
  "Evidence Preservation": [
    {"q": "What does chain of custody record?", "opts": ["The incident severity", "The file contents", "Every person who handled the evidence, when and why", "The tools available"], "correct": 2, "exp": "An unbroken handling record is what demonstrates the evidence was not altered."},
    {"q": "What is the consequence of a gap in the chain of custody?", "opts": ["Nothing significant", "The hash changes", "A delay only", "The evidence may become unusable and conclusions from it undermined"], "correct": 3, "exp": "Without a complete record, integrity cannot be demonstrated even if the data is intact."},
    {"q": "How is evidence integrity demonstrated over time?", "opts": ["By re-computing and comparing cryptographic hashes", "By the storage location", "By analyst testimony alone", "By file size"], "correct": 0, "exp": "Matching hashes prove the data is identical to what was collected."}
  ],
  "File and Disk Analysis": [
    {"q": "Why are deleted files often recoverable?", "opts": ["They are backed up automatically", "Deletion usually marks the space reusable rather than erasing the contents", "The OS keeps a copy", "Deletion is always reversible"], "correct": 1, "exp": "Until the space is overwritten, the original data typically remains on the media."},
    {"q": "What is timestomping?", "opts": ["Encrypting metadata", "Compressing files", "Deliberately altering file timestamps to mislead an investigation", "Deleting logs"], "correct": 2, "exp": "Attackers modify timestamps to hide activity, often producing detectable inconsistencies."},
    {"q": "How is a file's true type determined?", "opts": ["By its size", "By its location", "By its extension", "By its file signature or magic bytes"], "correct": 3, "exp": "Extensions are arbitrary; the header bytes identify the actual format."}
  ],
  "Understanding System Logs": [
    {"q": "Where are Linux authentication events typically recorded?", "opts": ["/var/log/auth.log", "/tmp", "/home", "/etc/passwd"], "correct": 0, "exp": "Authentication events are written to auth.log or the systemd journal."},
    {"q": "Why is a cleared log itself useful evidence?", "opts": ["It cannot be cleared", "The clearing action is usually recorded, and central copies survive", "It restores automatically", "Logs are never cleared"], "correct": 1, "exp": "Log clearing generates its own event and does not affect copies already forwarded."},
    {"q": "What must be done before building a cross-system timeline?", "opts": ["Convert to JSON", "Compress the logs", "Normalise time zones across all sources", "Delete duplicates"], "correct": 2, "exp": "Inconsistent time zones produce a timeline that misrepresents the order of events."}
  ],
  "Investigating Suspicious Activity": [
    {"q": "What is the central artefact of an incident investigation?", "opts": ["The remediation plan", "The firewall configuration", "The alert", "A timeline of events across systems"], "correct": 3, "exp": "An ordered account of events is what answers scope and causation questions."},
    {"q": "Why is a single log source rarely sufficient?", "opts": ["Host, network and identity evidence each show a different part of the activity", "Sources conflict by design", "It is a compliance requirement", "Sources are unreliable"], "correct": 0, "exp": "Correlation across sources is what reveals the full sequence."},
    {"q": "Which question must be repeatedly re-asked during an investigation?", "opts": ["Who is to blame?", "Is the activity still ongoing?", "What tools were used?", "How long will it take?"], "correct": 1, "exp": "Ongoing access changes the urgency and the response entirely."}
  ],
  "Malware Incident Response": [
    {"q": "What is the first step in malware incident response?", "opts": ["Run a full antivirus scan", "Delete the malicious file", "Isolate the host from the network while preserving evidence", "Reimage immediately"], "correct": 2, "exp": "Isolation stops spread and attacker communication without destroying volatile evidence."},
    {"q": "Why is reimaging usually preferred to cleaning?", "opts": ["Cleaning tools are expensive", "Reimaging preserves evidence", "It is faster", "Malware commonly installs multiple persistence mechanisms that cleanup may miss"], "correct": 3, "exp": "Rebuilding from a known-good image removes everything, including persistence you did not find."},
    {"q": "Which remediation step is most often overlooked?", "opts": ["Resetting credentials used or stored on the affected host", "Removing the file", "Documenting the incident", "Isolating the host"], "correct": 0, "exp": "Stolen credentials remain valid after the malware is gone, allowing the intrusion to recur."}
  ],
  "Phishing Incident Response": [
    {"q": "Why is resetting the password alone insufficient?", "opts": ["Passwords can be guessed again", "Existing session tokens remain valid, so the attacker keeps access", "Resets take time to apply", "Users forget new passwords"], "correct": 1, "exp": "Active sessions must be revoked explicitly; a reset does not invalidate them."},
    {"q": "What should be checked immediately after a mailbox compromise?", "opts": ["Screen resolution", "Disk space", "Mail forwarding and inbox rules created by the attacker", "Printer settings"], "correct": 2, "exp": "Hidden forwarding rules are a common persistence mechanism that survives a password change."},
    {"q": "How should a user who reports clicking a phishing link be treated?", "opts": ["Ignored", "Removed from email", "Disciplined", "Thanked, because fast reporting limits the damage"], "correct": 3, "exp": "Punishing reports suppresses them, which is what turns a contained incident into a breach."}
  ],
  "Incident Recovery": [
    {"q": "Which backup should be used for recovery?", "opts": ["One predating the compromise, verified for integrity", "Any available backup", "A backup from the same day", "The most recent one"], "correct": 0, "exp": "A backup taken after the intrusion began may reinstate the attacker's access."},
    {"q": "What must be done before restoring systems?", "opts": ["Notify the press", "Confirm eradication and patch the initial access route", "Delete the logs", "Reduce monitoring"], "correct": 1, "exp": "Restoring without closing the entry point recreates the conditions of the breach."},
    {"q": "Why monitor restored systems more closely?", "opts": ["Users make mistakes", "They run slower", "Residual attacker access usually becomes visible shortly after restoration", "Backups are unreliable"], "correct": 2, "exp": "Heightened monitoring is how incomplete eradication is detected."}
  ],
  "Writing an Incident Report": [
    {"q": "What distinguishes a root cause from a symptom?", "opts": ["Symptoms are more serious", "They are the same thing", "Root causes are technical", "The root cause explains why the symptom was possible and can be fixed"], "correct": 3, "exp": "Addressing the underlying condition prevents recurrence; addressing the symptom does not."},
    {"q": "Who is the incident report summary written for?", "opts": ["Management, in business terms", "Attackers", "Auditors only", "Other analysts"], "correct": 0, "exp": "The summary must convey impact and required decisions to non-technical readers."},
    {"q": "What makes a recommendation actionable?", "opts": ["Being technically detailed", "Being specific, with a named owner and a date", "Being listed first", "Being marked urgent"], "correct": 1, "exp": "Recommendations without ownership and deadlines are rarely implemented."}
  ],
  "AI-Generated Phishing": [
    {"q": "Why is 'poor grammar' now a misleading phishing indicator?", "opts": ["It was never taught", "Email clients fix grammar", "Generative AI produces fluent text in any language at no cost", "Attackers hire editors"], "correct": 2, "exp": "Language quality no longer distinguishes fraudulent messages from legitimate ones."},
    {"q": "What is the most reliable defence against a convincing unexpected request?", "opts": ["Replying to ask", "Checking the signature block", "Checking the grammar", "Verifying through a separate, known channel"], "correct": 3, "exp": "Out-of-band verification defeats the message regardless of how convincing it is."},
    {"q": "Where should phishing detection effort now be focused?", "opts": ["Technical signals such as domain age and authentication results", "Message length", "Time of sending", "Language analysis"], "correct": 0, "exp": "Technical indicators remain reliable where linguistic ones no longer are."}
  ],
  "Deepfakes and Identity Fraud": [
    {"q": "How much audio is typically needed to clone a voice convincingly?", "opts": ["Several hours", "A few seconds", "One minute of singing", "It cannot be done"], "correct": 1, "exp": "Modern voice cloning requires only a very short sample of recorded speech."},
    {"q": "What control defeats a deepfake authorisation request?", "opts": ["Recording the call", "Checking video quality", "Out-of-band verification through a known channel", "Asking a personal question on the call"], "correct": 2, "exp": "Independent verification does not depend on recognising the person on the call."},
    {"q": "What pattern characterises these frauds?", "opts": ["Written documentation", "Multiple approvers", "Long lead times", "Urgency, secrecy and an unusual channel"], "correct": 3, "exp": "Pressure and isolation are used to prevent the victim from verifying independently."}
  ],
  "AI-Powered Social Engineering": [
    {"q": "What has AI changed about social engineering?", "opts": ["The cost of researching and personalising attacks at scale", "The legality", "The need for a pretext", "The psychological levers used"], "correct": 0, "exp": "The manipulation techniques are unchanged; automation made convincing personalisation cheap."},
    {"q": "Why must defence be procedural rather than judgement-based?", "opts": ["People are careless", "Content can be made arbitrarily convincing, so plausibility is not a test", "Procedures are cheaper", "Judgement is banned"], "correct": 1, "exp": "If the message can always be made more convincing, evaluating convincingness cannot be the control."},
    {"q": "Which detail in a convincing pretext actually verifies identity?", "opts": ["Naming your manager", "Referencing a real project", "None of them, if publicly discoverable", "Using the correct ticketing system"], "correct": 2, "exp": "Publicly available detail demonstrates research, not identity."}
  ],
  "Adversarial Machine Learning": [
    {"q": "What is a poisoning attack?", "opts": ["Stealing the model file", "Encrypting the training set", "Overloading a model with requests", "Corrupting training data so the model learns incorrect behaviour"], "correct": 3, "exp": "Poisoning targets the training phase so the deployed model behaves wrongly by design."},
    {"q": "What is an evasion attack?", "opts": ["Crafting input that the model misclassifies at inference time", "Slowing the model down", "Copying the training data", "Deleting the model"], "correct": 0, "exp": "Evasion manipulates the input so a working model produces the wrong classification."},
    {"q": "Why is a compromised baseline period a security problem?", "opts": ["It slows training", "The attacker's activity is learned as normal and becomes permanently invisible", "The model refuses to train", "It only affects accuracy metrics"], "correct": 1, "exp": "Anything present while normal is being defined becomes part of that definition."}
  ],
  "Prompt Injection": [
    {"q": "Why is prompt injection possible?", "opts": ["Prompts are too long", "Models are poorly written", "Models cannot reliably distinguish instructions from data", "Encryption is missing"], "correct": 2, "exp": "Instructions and content arrive through the same channel, so content can act as instruction."},
    {"q": "What is indirect prompt injection?", "opts": ["Injecting SQL into a prompt", "Overloading the context window", "The user typing malicious instructions", "Instructions hidden inside content the model is asked to process"], "correct": 3, "exp": "The attacker plants instructions in a document or message the model will later read."},
    {"q": "How should AI output be treated by a system that consumes it?", "opts": ["As untrusted input requiring validation", "As encrypted data", "As user credentials", "As trusted commands"], "correct": 0, "exp": "Because output can be attacker-influenced, it must be validated before any privileged use."}
  ],
  "AI Data Privacy": [
    {"q": "What happens to data sent to a third-party AI service?", "opts": ["It is deleted immediately", "It is processed on their infrastructure and may be retained or logged", "It stays on your machine", "It is always encrypted end to end"], "correct": 1, "exp": "Submission is a disclosure to the provider, governed by their terms."},
    {"q": "Why is training a model on sensitive data risky?", "opts": ["It reduces accuracy", "Training is slow", "Models can memorise and later reproduce fragments of training data", "Sensitive data cannot be processed"], "correct": 2, "exp": "Memorised training data can surface in outputs, creating a lasting exposure."},
    {"q": "What should be done before sending content to an external AI service?", "opts": ["Translate it", "Convert it to JSON", "Compress it", "Redact personal data, credentials and client detail"], "correct": 3, "exp": "Removing sensitive detail limits what is disclosed if the data is retained."}
  ],
  "Securing AI Applications": [
    {"q": "What is the critical design rule for AI-integrated applications?", "opts": ["Model output must not directly trigger privileged actions", "Log everything", "Disable rate limiting", "Use the largest model"], "correct": 0, "exp": "If output can cause privileged action, anyone influencing input can cause it too."},
    {"q": "Why apply least privilege to what a model can reach?", "opts": ["It improves speed", "It limits the damage when the model is manipulated", "It reduces cost", "It improves accuracy"], "correct": 1, "exp": "Constraining the model's reach bounds the impact of any successful injection."},
    {"q": "Which design pattern mitigates prompt injection most effectively?", "opts": ["Encrypting prompts", "Longer prompts", "Having the model propose actions for human approval rather than execute them", "Using two models"], "correct": 2, "exp": "A human approval gate prevents manipulated output from taking effect directly."}
  ],
  "AI Model Security": [
    {"q": "What is model extraction?", "opts": ["Compressing a model", "Retraining a model", "Deleting a model", "Reconstructing a model's behaviour through repeated queries"], "correct": 3, "exp": "An attacker can approximate a proprietary model by querying it systematically."},
    {"q": "Why is loading a model from an untrusted source risky?", "opts": ["Some formats execute code when the file is loaded", "It uses bandwidth", "Models cannot be verified", "Models are large"], "correct": 0, "exp": "Certain serialisation formats run code on deserialisation, making the load equivalent to execution."},
    {"q": "How is model tampering made detectable?", "opts": ["By file size", "By versioning and hashing models", "By retraining regularly", "By monitoring accuracy only"], "correct": 1, "exp": "Recorded hashes allow any modification of the model artefact to be detected."}
  ],
  "Responsible AI": [
    {"q": "Where does bias in a security model usually originate?", "opts": ["The programming language", "The algorithm", "The training data", "The hardware"], "correct": 2, "exp": "Models learn the patterns present in their training data, including historical bias."},
    {"q": "Who is accountable for a decision made using a model's output?", "opts": ["Nobody", "The model itself", "The model vendor", "The human who acted on it"], "correct": 3, "exp": "Accountability cannot be delegated to a tool; the person taking action remains responsible."},
    {"q": "Why is accuracy insufficient for evaluating a model that flags people?", "opts": ["A model can be accurate against biased history and still be unfair in operation", "Accuracy is always low", "Accuracy applies only to malware", "Accuracy is hard to measure"], "correct": 0, "exp": "Matching a biased historical record is not the same as making fair decisions."}
  ],
  "Future of AI and Cybersecurity": [
    {"q": "What remains constant despite AI-driven change?", "opts": ["Attack tooling", "The underlying stages of an intrusion and the fundamental controls", "Alert volumes", "Regulatory requirements"], "correct": 1, "exp": "Initial access, persistence, movement and exfiltration still describe intrusions, and the core controls still address them."},
    {"q": "How do analyst skills shift as AI tooling spreads?", "opts": ["They do not change", "Toward manual log reading only", "Toward verification and judgement of AI-assisted findings", "Toward programming exclusively"], "correct": 2, "exp": "As tools narrow the field, the analyst's value moves to confirming and deciding."},
    {"q": "Through which routes are most organisations still breached?", "opts": ["Hardware implants", "Physical intrusion", "Novel AI attacks", "Unpatched services, stolen credentials and phishing"], "correct": 3, "exp": "The dominant initial access routes have remained stable even as techniques accelerate."}
  ],
  "What Is Cloud Computing?": [
    {"q": "Under shared responsibility, who secures customer data and configuration?", "opts": ["The customer", "Nobody", "The regulator", "The cloud provider"], "correct": 0, "exp": "Providers secure the underlying infrastructure; configuration, identity and data remain the customer's responsibility."},
    {"q": "What causes most cloud security breaches?", "opts": ["Provider infrastructure failures", "Customer misconfiguration", "Physical intrusion", "Encryption weaknesses"], "correct": 1, "exp": "Misconfigured storage, permissions and network rules dominate real cloud incidents."},
    {"q": "Which service model gives the customer the most control?", "opts": ["SaaS", "PaaS", "IaaS", "They are equal"], "correct": 2, "exp": "Infrastructure as a Service gives the most control and correspondingly the most responsibility."}
  ],
  "Cloud Security Fundamentals": [
    {"q": "Why is identity described as the cloud perimeter?", "opts": ["Firewalls are unavailable", "Identity is easier to manage", "Networks do not exist in cloud", "Access is controlled by credentials rather than network position"], "correct": 3, "exp": "Without a network edge, possession of valid credentials is what grants access."},
    {"q": "Why must cloud configuration be monitored continuously?", "opts": ["Resources are created by API in seconds, so misconfiguration appears fast", "Audits require it", "Configuration cannot be set correctly", "Providers change defaults"], "correct": 0, "exp": "The speed of resource creation means point-in-time review is quickly out of date."},
    {"q": "What should be enabled from day one in any cloud environment?", "opts": ["Auto-scaling", "Audit logging", "Load balancing", "Content delivery"], "correct": 1, "exp": "Without audit logs enabled from the start, early activity cannot be investigated later."}
  ],
  "Identity and Access Management": [
    {"q": "Why should workloads use roles rather than long-lived access keys?", "opts": ["Roles are faster", "Roles are cheaper", "Roles provide short-lived credentials that cannot be stolen and reused indefinitely", "Keys are deprecated"], "correct": 2, "exp": "Temporary credentials expire, limiting the value of a leaked secret."},
    {"q": "What is the risk of wildcard permissions in a policy?", "opts": ["Higher cost", "Policy size limits", "Slower evaluation", "A compromised identity inherits every action the wildcard allows"], "correct": 3, "exp": "Broad grants mean a small compromise becomes a broad one."},
    {"q": "How should the cloud root or owner account be used?", "opts": ["Only for tasks that require it, with MFA enforced", "Shared among the team", "For automation", "For daily administration"], "correct": 0, "exp": "The root account should be protected and used rarely, never for routine operations."}
  ],
  "Cloud Data Protection": [
    {"q": "What causes the classic cloud data breach?", "opts": ["A provider vulnerability", "Storage permissions set to public", "Weak encryption algorithms", "Network interception"], "correct": 1, "exp": "Publicly accessible storage is a configuration mistake, not an exploited vulnerability."},
    {"q": "What should be verified rather than assumed about encryption at rest?", "opts": ["That it is customer-managed", "That it slows performance", "That it is actually enabled for the service in use", "That it uses AES"], "correct": 2, "exp": "Defaults vary by service, so encryption status should be confirmed explicitly."},
    {"q": "Why does data residency matter?", "opts": ["It changes encryption", "It affects cost only", "It affects latency only", "Where data physically resides may be legally regulated"], "correct": 3, "exp": "Regulations may require that certain data remain within specific jurisdictions."}
  ],
  "Cloud Network Security": [
    {"q": "What is the most common serious cloud network finding?", "opts": ["Management ports such as SSH or RDP open to the internet", "Slow DNS", "Unused subnets", "Missing load balancers"], "correct": 0, "exp": "Broad access rules added during troubleshooting and left in place are a recurring cause of compromise."},
    {"q": "What should the default security group posture be?", "opts": ["Allow all, then restrict", "Deny by default, then permit what is needed", "Allow internal traffic only", "No rules at all"], "correct": 1, "exp": "Default deny ensures anything not explicitly required is blocked."},
    {"q": "Which cloud log is equivalent to a traditional firewall log?", "opts": ["Billing log", "Audit log", "Flow log", "Application log"], "correct": 2, "exp": "Flow logs record network connections between resources."}
  ],
  "Securing Cloud Applications": [
    {"q": "Where should application credentials be stored in cloud?", "opts": ["In environment files in the repository", "In the application log", "In the container image", "In a managed secrets service"], "correct": 3, "exp": "Managed secrets services provide controlled, auditable, rotatable credential storage."},
    {"q": "Why is SSRF particularly dangerous in cloud environments?", "opts": ["It can reach the instance metadata service and retrieve role credentials", "It affects only containers", "It bypasses encryption", "It is harder to detect"], "correct": 0, "exp": "Metadata endpoints expose credentials, so an SSRF can escalate to full instance compromise."},
    {"q": "What should each cloud application have?", "opts": ["Shared administrative credentials", "Its own identity with minimal permissions", "Root account access", "No identity at all"], "correct": 1, "exp": "Per-application identities with least privilege contain the blast radius of a compromise."}
  ],
  "AI Services in the Cloud": [
    {"q": "What should be confirmed before sending data to a managed AI service?", "opts": ["Its programming language", "Its response time", "Retention terms and whether inputs are used for training", "Its model size"], "correct": 2, "exp": "Data handling terms determine whether submission constitutes an unacceptable disclosure."},
    {"q": "Why must model endpoints be authenticated and rate limited?", "opts": ["It is required by law", "To reduce latency", "To improve accuracy", "To prevent data exposure, model extraction and unexpected cost"], "correct": 3, "exp": "Open endpoints allow abuse, extraction and uncontrolled billing."},
    {"q": "How should AI service usage be treated for logging purposes?", "opts": ["As an access path requiring audit logging like any other resource", "Only errors need logging", "Logging is the provider's job", "It need not be logged"], "correct": 0, "exp": "AI endpoints handle data and must be auditable like any other access route."}
  ],
  "Cloud Security Monitoring": [
    {"q": "Why must cloud audit logging be enabled in advance?", "opts": ["It improves performance", "Logs are not retroactive, so activity before enabling is unrecorded", "It is cheaper", "Providers require it"], "correct": 1, "exp": "Nothing that happened before logging was enabled can be recovered."},
    {"q": "Why send cloud logs to a separate account or project?", "opts": ["For regulatory formatting", "To reduce cost", "So an attacker with access to the main account cannot delete them", "To improve query speed"], "correct": 2, "exp": "Separation preserves the evidence when the primary environment is compromised."},
    {"q": "Which event is among the highest-value cloud alerts?", "opts": ["A storage read", "An autoscaling event", "A new virtual machine", "Audit logging being disabled"], "correct": 3, "exp": "Disabling logging is almost always a deliberate step to work unobserved."}
  ],
  "Common Cloud Security Risks": [
    {"q": "What is the common character of most cloud security incidents?", "opts": ["Configuration mistakes", "Physical compromise", "Encryption failures", "Sophisticated zero-day exploitation"], "correct": 0, "exp": "Misconfiguration rather than exploitation accounts for the majority of cloud incidents."},
    {"q": "Which risk involves resources nobody remembers owning?", "opts": ["Over-permissive IAM", "Forgotten resources left running and unpatched", "Public storage", "Disabled logging"], "correct": 1, "exp": "Orphaned resources are unmonitored and unpatched by definition."},
    {"q": "What is the practical defence against most cloud risk?", "opts": ["Manual annual audits", "Buying more tools", "Automated, repeated configuration checking", "Reducing cloud usage"], "correct": 2, "exp": "Continuous configuration verification catches the mistakes that cause most incidents."}
  ],
  "Cloud Security Best Practices": [
    {"q": "Why does consistency matter more than depth in cloud security?", "opts": ["Consistency is easier", "Depth is unnecessary", "Depth is expensive", "Attackers find the one account where the standard was not applied"], "correct": 3, "exp": "A single unmanaged account or project becomes the entry point regardless of how well others are secured."},
    {"q": "What should every cloud resource carry?", "opts": ["An owner tag so orphans can be identified", "A separate account", "A dedicated firewall", "A public IP address"], "correct": 0, "exp": "Ownership tagging is what makes forgotten resources findable."},
    {"q": "Which practice protects audit logs from an attacker with account access?", "opts": ["Encrypting them locally", "Shipping them to a separate account", "Compressing them", "Reducing retention"], "correct": 1, "exp": "Logs held in the compromised account can be deleted; a separate destination preserves them."}
  ],
  "Certificate Requirements": [
    {"q": "What pass mark does the Graduation Assessment require?", "opts": ["50%", "60%", "70%", "90%"], "correct": 2, "exp": "The final assessment requires 70% or higher, with unlimited retakes."},
    {"q": "How many projects must be completed in Module 14?", "opts": ["One", "Two", "Four", "Six"], "correct": 3, "exp": "All six real-world projects are required for graduation."},
    {"q": "What constraint applies to all practical work in this course?", "opts": ["It must be legal, ethical and confined to systems you own or are authorised to test", "It must be done in one sitting", "It must be published publicly", "It must use paid tools"], "correct": 0, "exp": "Practical security work is only legitimate within authorisation, as Module 5 established."}
  ]
  };
})();
