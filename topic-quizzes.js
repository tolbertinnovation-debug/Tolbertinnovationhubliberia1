/* TIH — Authored per-topic quiz questions. Each topic has its OWN set of 3
   distinct multiple-choice questions (question, 4 options, 0-based correct
   index, explanation). The curriculum builders (complit-curriculum.js,
   ielts-curriculum.js) look these up by topic title and use them for each
   topic's practice quiz; the Computer Literacy final exam/certificate sample a
   spread across the whole pool. Falls back to generic questions if a topic is
   missing here. */
(function () {
  if (typeof window === 'undefined') return;
  window.TIH_TOPIC_QUIZZES = window.TIH_TOPIC_QUIZZES || {};
  window.TIH_TOPIC_QUIZZES['computer-literacy'] = {
 "What Is a Computer?": [
  {
   "q": "What best describes what a computer does with information?",
   "opts": [
    "It takes in data, processes it, and gives out results",
    "It only stores paper documents",
    "It only makes phone calls",
    "It only prints photos"
   ],
   "correct": 0,
   "exp": "A computer accepts input data, processes it, and produces output, which is its basic job."
  },
  {
   "q": "Which of these is a real reason a computer is useful for a small shop owner?",
   "opts": [
    "It can cook food automatically",
    "It can keep records and do calculations quickly",
    "It can drive a car by itself in the shop",
    "It can wash the floor"
   ],
   "correct": 1,
   "exp": "Computers are excellent at storing records and performing calculations fast and accurately."
  },
  {
   "q": "A computer is an electronic device that follows a set of what to complete tasks?",
   "opts": [
    "Smells",
    "Colors",
    "Instructions",
    "Sounds"
   ],
   "correct": 2,
   "exp": "A computer follows instructions (programs) to carry out its tasks."
  }
 ],
 "Types of Computers": [
  {
   "q": "Which type of computer is designed to be carried around and has a battery?",
   "opts": [
    "Desktop",
    "Server",
    "Mainframe",
    "Laptop"
   ],
   "correct": 3,
   "exp": "A laptop is portable and runs on a battery, so it can be carried and used anywhere."
  },
  {
   "q": "Which device is a small handheld computer you can use to call, text, and browse the internet?",
   "opts": [
    "Smartphone",
    "Desktop tower",
    "Printer",
    "Projector"
   ],
   "correct": 0,
   "exp": "A smartphone is a pocket-sized computer used for calls, messages, and internet."
  },
  {
   "q": "A desktop computer is best described as a machine that usually stays where?",
   "opts": [
    "In your pocket",
    "In one place on a desk",
    "On your wrist",
    "Inside a phone"
   ],
   "correct": 1,
   "exp": "A desktop is meant to sit in one fixed place on a desk and is not carried around."
  }
 ],
 "Parts of a Computer": [
  {
   "q": "Which part of a desktop computer shows you pictures and text on a screen?",
   "opts": [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Speaker"
   ],
   "correct": 2,
   "exp": "The monitor is the screen that displays what the computer is doing."
  },
  {
   "q": "Which part is often called the brain or main box that holds the important components?",
   "opts": [
    "Power cable",
    "Mouse pad",
    "Monitor stand",
    "System unit (tower)"
   ],
   "correct": 3,
   "exp": "The system unit or tower houses the main parts like the processor and memory."
  },
  {
   "q": "Which part do you use to type letters and numbers into the computer?",
   "opts": [
    "Keyboard",
    "Speaker",
    "Monitor",
    "Webcam"
   ],
   "correct": 0,
   "exp": "The keyboard is the part you use to type letters, numbers, and symbols."
  }
 ],
 "Computer Hardware": [
  {
   "q": "Which of these is an example of computer hardware?",
   "opts": [
    "A web browser",
    "A keyboard",
    "A song file",
    "A photo you saved"
   ],
   "correct": 1,
   "exp": "Hardware is a physical part you can touch, such as a keyboard."
  },
  {
   "q": "What is the best definition of hardware?",
   "opts": [
    "A password you type in",
    "The instructions a computer follows",
    "The physical parts of a computer you can touch",
    "A website you visit"
   ],
   "correct": 2,
   "exp": "Hardware refers to the physical, touchable components of a computer."
  },
  {
   "q": "Which of the following is NOT hardware?",
   "opts": [
    "Printer",
    "Monitor",
    "Mouse",
    "A game app"
   ],
   "correct": 3,
   "exp": "A game app is software, not a physical hardware part."
  }
 ],
 "Computer Software": [
  {
   "q": "Which of these is an example of computer software?",
   "opts": [
    "A word processing program",
    "A monitor",
    "A mouse",
    "A USB cable"
   ],
   "correct": 0,
   "exp": "A word processing program is software, a set of instructions, not a physical part."
  },
  {
   "q": "What is software?",
   "opts": [
    "The physical parts you can touch",
    "Programs and instructions that tell the computer what to do",
    "The desk the computer sits on",
    "The electricity that powers the computer"
   ],
   "correct": 1,
   "exp": "Software is the set of programs and instructions that control what the computer does."
  },
  {
   "q": "Which type of software runs the whole computer and lets other programs work, like Windows?",
   "opts": [
    "A cable",
    "A printer",
    "Operating system",
    "A speaker"
   ],
   "correct": 2,
   "exp": "The operating system is the main software that manages the computer and other programs."
  }
 ],
 "Hardware vs. Software": [
  {
   "q": "What is the main difference between hardware and software?",
   "opts": [
    "There is no difference",
    "Hardware is free and software costs money",
    "Hardware is only for laptops; software is only for phones",
    "Hardware is physical and can be touched; software is programs and instructions"
   ],
   "correct": 3,
   "exp": "Hardware is the touchable physical parts, while software is the programs and instructions."
  },
  {
   "q": "Which pair correctly shows hardware and then software?",
   "opts": [
    "A monitor and a web browser",
    "A web browser and a keyboard",
    "A song and a photo",
    "A mouse and a printer"
   ],
   "correct": 0,
   "exp": "A monitor is hardware and a web browser is software, so this pair is correct."
  },
  {
   "q": "A photo editing app is an example of what, and the screen it appears on is what?",
   "opts": [
    "Both are hardware",
    "The app is software and the screen is hardware",
    "Both are software",
    "The app is hardware and the screen is software"
   ],
   "correct": 1,
   "exp": "The app is software while the physical screen is hardware."
  }
 ],
 "Input Devices": [
  {
   "q": "What is an input device used for?",
   "opts": [
    "Sending information out of the computer",
    "Storing files permanently",
    "Putting information into the computer",
    "Powering the computer"
   ],
   "correct": 2,
   "exp": "An input device is used to put data and commands into the computer."
  },
  {
   "q": "Which of these is an input device?",
   "opts": [
    "Printer",
    "Speaker",
    "Monitor",
    "Microphone"
   ],
   "correct": 3,
   "exp": "A microphone inputs sound into the computer, so it is an input device."
  },
  {
   "q": "Which group contains only input devices?",
   "opts": [
    "Keyboard, mouse, and microphone",
    "Monitor, speaker, and printer",
    "Keyboard, monitor, and speaker",
    "Printer, mouse, and speaker"
   ],
   "correct": 0,
   "exp": "Keyboard, mouse, and microphone all send information into the computer."
  }
 ],
 "Output Devices": [
  {
   "q": "What does an output device do?",
   "opts": [
    "Puts information into the computer",
    "Shows or gives out results from the computer",
    "Stores data on a disk",
    "Connects to the internet only"
   ],
   "correct": 1,
   "exp": "An output device presents or sends out the results the computer produces."
  },
  {
   "q": "Which of these is an output device?",
   "opts": [
    "Keyboard",
    "Mouse",
    "Printer",
    "Microphone"
   ],
   "correct": 2,
   "exp": "A printer outputs printed pages, so it is an output device."
  },
  {
   "q": "Which output device lets you hear sound from the computer?",
   "opts": [
    "Webcam",
    "Scanner",
    "Keyboard",
    "Speaker"
   ],
   "correct": 3,
   "exp": "A speaker outputs sound so you can hear it from the computer."
  }
 ],
 "Storage Devices": [
  {
   "q": "What is the main purpose of a storage device?",
   "opts": [
    "To keep files and data saved for later use",
    "To display images on the screen",
    "To type letters",
    "To play sound"
   ],
   "correct": 0,
   "exp": "Storage devices keep your files and data saved so you can use them later."
  },
  {
   "q": "Which of these is a small storage device you can plug into a USB port and carry in your pocket?",
   "opts": [
    "Monitor",
    "Flash drive",
    "Keyboard",
    "Mouse"
   ],
   "correct": 1,
   "exp": "A USB flash drive is a small, portable storage device."
  },
  {
   "q": "Which device stores large amounts of data inside most desktop and laptop computers?",
   "opts": [
    "Speaker",
    "Webcam",
    "Hard drive",
    "Printer"
   ],
   "correct": 2,
   "exp": "The hard drive is the main storage device that holds large amounts of data inside a computer."
  }
 ],
 "Computer Memory: RAM and ROM": [
  {
   "q": "What does RAM do while you are using the computer?",
   "opts": [
    "Stores files permanently even when power is off",
    "Connects to the internet",
    "Prints your documents",
    "Temporarily holds the programs and data you are currently using"
   ],
   "correct": 3,
   "exp": "RAM temporarily holds the data and programs in use, and it clears when power is off."
  },
  {
   "q": "What happens to the information in RAM when you turn off the computer?",
   "opts": [
    "It is lost",
    "It is printed automatically",
    "It stays forever",
    "It moves to the monitor"
   ],
   "correct": 0,
   "exp": "RAM is temporary memory, so its contents are lost when the computer is switched off."
  },
  {
   "q": "How is ROM different from RAM?",
   "opts": [
    "ROM is faster to type on",
    "ROM keeps its information even when the power is off",
    "ROM is an input device",
    "ROM is a kind of printer"
   ],
   "correct": 1,
   "exp": "ROM is permanent memory that keeps its stored instructions even when the power is off."
  }
 ],
 "Starting and Shutting Down a Computer": [
  {
   "q": "What is the correct first step to start a desktop computer?",
   "opts": [
    "Unplug the power cable",
    "Close all the windows",
    "Press the power button on the system unit",
    "Remove the mouse"
   ],
   "correct": 2,
   "exp": "You start a computer by pressing its power button to turn it on."
  },
  {
   "q": "Why is it important to shut down properly instead of just unplugging the computer?",
   "opts": [
    "It makes the screen bigger",
    "It changes the wallpaper",
    "It charges the battery faster",
    "It helps avoid losing your work and damaging files"
   ],
   "correct": 3,
   "exp": "Shutting down properly saves your work and protects files from being damaged."
  },
  {
   "q": "In Windows, where do you usually click to find the Shut down option?",
   "opts": [
    "The Start button",
    "The clock",
    "The recycle bin",
    "The web browser"
   ],
   "correct": 0,
   "exp": "The Shut down option is found by clicking the Start button in Windows."
  }
 ],
 "Using the Keyboard": [
  {
   "q": "Which key do you press to make a letter capital while holding it down?",
   "opts": [
    "Spacebar",
    "Shift",
    "Enter",
    "Tab"
   ],
   "correct": 1,
   "exp": "Holding the Shift key while pressing a letter makes it a capital letter."
  },
  {
   "q": "Which key adds a blank space between words?",
   "opts": [
    "Enter",
    "Esc",
    "Spacebar",
    "Caps Lock"
   ],
   "correct": 2,
   "exp": "The spacebar inserts a space between words when typing."
  },
  {
   "q": "What does the Backspace key do while typing?",
   "opts": [
    "Saves the file",
    "Opens a new program",
    "Makes text bold",
    "Deletes the character to the left of the cursor"
   ],
   "correct": 3,
   "exp": "Backspace erases the character just to the left of the cursor."
  }
 ],
 "Using a Computer Mouse": [
  {
   "q": "What does a single left click of the mouse usually do to an item?",
   "opts": [
    "Selects it",
    "Deletes it",
    "Prints it",
    "Renames it"
   ],
   "correct": 0,
   "exp": "A single left click normally selects an item on the screen."
  },
  {
   "q": "How do you usually open a program or file from an icon on the desktop?",
   "opts": [
    "Shake the mouse",
    "Double-click it",
    "Right-click once and wait",
    "Scroll over it"
   ],
   "correct": 1,
   "exp": "Double-clicking an icon opens the program or file it represents."
  },
  {
   "q": "What is the scroll wheel in the middle of the mouse mainly used for?",
   "opts": [
    "Turning off the computer",
    "Typing letters",
    "Moving a page up and down",
    "Changing the volume of speakers"
   ],
   "correct": 2,
   "exp": "The scroll wheel moves the page or list up and down."
  }
 ],
 "Understanding the Desktop": [
  {
   "q": "What is the desktop on a computer?",
   "opts": [
    "A storage device",
    "A physical table for the computer",
    "A type of printer",
    "The main screen you see after the computer starts, with icons and a background"
   ],
   "correct": 3,
   "exp": "The desktop is the main screen shown after startup, holding icons and the background."
  },
  {
   "q": "The small pictures on the desktop that open programs or files are called what?",
   "opts": [
    "Icons",
    "Cables",
    "Keys",
    "Speakers"
   ],
   "correct": 0,
   "exp": "The small pictures on the desktop are called icons."
  },
  {
   "q": "The picture or color shown behind the icons on the desktop is called the what?",
   "opts": [
    "Printer",
    "Wallpaper or background",
    "Hard drive",
    "Cursor"
   ],
   "correct": 1,
   "exp": "The background image or color of the desktop is called the wallpaper or background."
  }
 ],
 "Using Windows Icons": [
  {
   "q": "What does a desktop icon represent?",
   "opts": [
    "A keyboard key",
    "The computer's electricity",
    "A shortcut to a program, file, or folder",
    "The internet speed"
   ],
   "correct": 2,
   "exp": "An icon is a small picture that represents a program, file, or folder you can open."
  },
  {
   "q": "Which mouse action do you normally use to open the program an icon stands for?",
   "opts": [
    "Hover without clicking",
    "Right-click and choose Delete",
    "Scroll on the icon",
    "Double-click the icon"
   ],
   "correct": 3,
   "exp": "Double-clicking an icon opens the program or file it represents."
  },
  {
   "q": "What usually happens when you right-click an icon?",
   "opts": [
    "A menu of options appears",
    "The computer shuts down",
    "The icon is deleted immediately",
    "The screen turns off"
   ],
   "correct": 0,
   "exp": "Right-clicking an icon opens a menu with options like Open, Rename, or Delete."
  }
 ],
 "Using the Taskbar": [
  {
   "q": "Where is the taskbar usually located on a Windows screen?",
   "opts": [
    "In the middle of the screen",
    "Along the bottom of the screen",
    "Inside the mouse",
    "On the keyboard"
   ],
   "correct": 1,
   "exp": "The taskbar normally runs along the bottom edge of the Windows screen."
  },
  {
   "q": "What can you see and do using the taskbar?",
   "opts": [
    "Only turn off the monitor",
    "Change the mouse batteries",
    "See open programs and switch between them",
    "Print a document by itself"
   ],
   "correct": 2,
   "exp": "The taskbar shows your open programs and lets you switch between them."
  },
  {
   "q": "Which button, usually found at the left of the taskbar, opens the menu of programs?",
   "opts": [
    "The power cable",
    "The Backspace key",
    "The scroll wheel",
    "The Start button"
   ],
   "correct": 3,
   "exp": "The Start button on the taskbar opens the menu to find and launch programs."
  }
 ],
 "Opening and Closing Programs": [
  {
   "q": "What is one common way to open a program in Windows?",
   "opts": [
    "Double-click its icon on the desktop",
    "Turn the monitor off and on",
    "Unplug the keyboard",
    "Shake the mouse"
   ],
   "correct": 0,
   "exp": "Double-clicking a program's desktop icon is a common way to open it."
  },
  {
   "q": "Which button do you click to close a program window in Windows?",
   "opts": [
    "The Spacebar",
    "The X in the top-right corner of the window",
    "The green plus sign",
    "The scroll wheel"
   ],
   "correct": 1,
   "exp": "Clicking the X in the top-right corner of the window closes that program."
  },
  {
   "q": "Why should you save your work before closing a program?",
   "opts": [
    "To make the window bigger",
    "To change the wallpaper",
    "So you do not lose your unsaved changes",
    "To speed up the internet"
   ],
   "correct": 2,
   "exp": "Saving before closing keeps your changes so they are not lost."
  }
 ],
 "Using Windows Search": [
  {
   "q": "What is the main purpose of Windows Search?",
   "opts": [
    "To charge the battery",
    "To print documents",
    "To turn up the volume",
    "To find programs, files, and settings on the computer"
   ],
   "correct": 3,
   "exp": "Windows Search helps you quickly find programs, files, and settings."
  },
  {
   "q": "Where do you usually find the Search box in Windows?",
   "opts": [
    "Next to the Start button on the taskbar",
    "Inside the mouse",
    "On the back of the monitor",
    "Inside the keyboard keys"
   ],
   "correct": 0,
   "exp": "The Search box is usually on the taskbar right next to the Start button."
  },
  {
   "q": "To open a program using Search, what do you do after typing its name?",
   "opts": [
    "Unplug the computer",
    "Click the program in the results list",
    "Turn off the screen",
    "Wait for it to print"
   ],
   "correct": 1,
   "exp": "After typing the name, you click the matching program in the results to open it."
  }
 ],
 "What Is an Operating System?": [
  {
   "q": "What is the main job of an operating system on a computer?",
   "opts": [
    "To type documents for you automatically",
    "To connect two computers with a cable",
    "To manage the hardware and let you run programs",
    "To make the screen brighter only"
   ],
   "correct": 2,
   "exp": "An operating system manages the computer's hardware and provides a way to run software programs."
  },
  {
   "q": "Which of these is an example of an operating system?",
   "opts": [
    "Microsoft Word",
    "A printer",
    "Google Chrome",
    "Windows"
   ],
   "correct": 3,
   "exp": "Windows is an operating system, while Word and Chrome are programs that run on top of it."
  },
  {
   "q": "Without an operating system, what would happen when you turn on a computer?",
   "opts": [
    "You could not use programs or control the hardware",
    "It would still open your files",
    "It would run faster than normal",
    "It would print automatically"
   ],
   "correct": 0,
   "exp": "The operating system is required to control the hardware and run programs, so nothing useful would work without it."
  }
 ],
 "Introduction to Windows": [
  {
   "q": "Which company makes the Windows operating system?",
   "opts": [
    "Apple",
    "Microsoft",
    "Facebook",
    "Google"
   ],
   "correct": 1,
   "exp": "Windows is developed and sold by Microsoft."
  },
  {
   "q": "Why is the Windows operating system called \"Windows\"?",
   "opts": [
    "Because it was made of glass",
    "Because it only works near a real window",
    "Because it shows programs in rectangular window frames on the screen",
    "Because it cleans your files like a window"
   ],
   "correct": 2,
   "exp": "Windows displays programs inside rectangular frames called windows, which is where the name comes from."
  },
  {
   "q": "What do you usually see first after Windows finishes starting up?",
   "opts": [
    "A blank black screen forever",
    "The inside of the computer",
    "A printed page",
    "The desktop"
   ],
   "correct": 3,
   "exp": "After Windows starts, it shows the desktop, your main working screen with icons and the taskbar."
  }
 ],
 "Windows Desktop": [
  {
   "q": "On the Windows desktop, what is the bar usually found along the bottom of the screen called?",
   "opts": [
    "The taskbar",
    "The scroll bar",
    "The menu bar",
    "The title bar"
   ],
   "correct": 0,
   "exp": "The taskbar sits at the bottom of the desktop and holds the Start button and open programs."
  },
  {
   "q": "What are the small pictures on the desktop that you double-click to open programs or files called?",
   "opts": [
    "Buttons on the keyboard",
    "Icons",
    "Passwords",
    "Folders inside the printer"
   ],
   "correct": 1,
   "exp": "Icons are the small pictures on the desktop that you double-click to open programs or files."
  },
  {
   "q": "Which button do you click to find your programs and shut down or restart the computer?",
   "opts": [
    "The Delete key",
    "The volume button",
    "The Start button",
    "The power cable"
   ],
   "correct": 2,
   "exp": "The Start button opens the Start menu, where you find programs and options to shut down or restart."
  }
 ],
 "Windows Settings": [
  {
   "q": "What is the Windows Settings app mainly used for?",
   "opts": [
    "To play music videos",
    "To write long letters",
    "To make phone calls",
    "To change how your computer works and looks"
   ],
   "correct": 3,
   "exp": "The Settings app lets you change computer options such as display, sound, network, and accounts."
  },
  {
   "q": "In Windows Settings, which section would you open to connect to a Wi-Fi network?",
   "opts": [
    "Network and Internet",
    "Time and Language",
    "Personalization",
    "Accessibility"
   ],
   "correct": 0,
   "exp": "The Network and Internet section holds Wi-Fi and other connection settings."
  },
  {
   "q": "Which keyboard shortcut quickly opens the Windows Settings app?",
   "opts": [
    "Ctrl plus C",
    "Windows key plus I",
    "Alt plus F4",
    "Ctrl plus P"
   ],
   "correct": 1,
   "exp": "Pressing the Windows key together with the letter I opens the Settings app quickly."
  }
 ],
 "Control Panel": [
  {
   "q": "What is the Control Panel in Windows used for?",
   "opts": [
    "To send emails",
    "To draw pictures",
    "To adjust and manage computer settings and hardware",
    "To charge the battery faster"
   ],
   "correct": 2,
   "exp": "The Control Panel is a tool for adjusting and managing computer settings and hardware."
  },
  {
   "q": "Which task is commonly done from the Control Panel?",
   "opts": [
    "Watching a movie",
    "Writing a school essay",
    "Taking a photo with a camera",
    "Uninstalling a program"
   ],
   "correct": 3,
   "exp": "The Control Panel includes Programs and Features, where you can uninstall installed software."
  },
  {
   "q": "How is the Control Panel different from the newer Settings app?",
   "opts": [
    "The Control Panel is an older tool for detailed system settings",
    "The Control Panel can only play games",
    "The Control Panel only works without electricity",
    "The Control Panel is only for printing"
   ],
   "correct": 0,
   "exp": "The Control Panel is the older Windows tool that still offers many detailed system and hardware settings."
  }
 ],
 "Installing Software": [
  {
   "q": "What does it mean to install software on a computer?",
   "opts": [
    "To delete it from the computer",
    "To copy a program onto the computer so you can use it",
    "To turn off the computer",
    "To clean the screen"
   ],
   "correct": 1,
   "exp": "Installing means adding a program to your computer so it is ready to run."
  },
  {
   "q": "What kind of file do you usually run to start installing a new program in Windows?",
   "opts": [
    "A picture file (.jpg)",
    "A music file (.mp3)",
    "A setup or installer file (.exe)",
    "A text note (.txt)"
   ],
   "correct": 2,
   "exp": "Windows programs are usually installed by running a setup or installer file, often ending in .exe."
  },
  {
   "q": "To stay safe when installing software, where should you get programs from?",
   "opts": [
    "A broken link that gives errors",
    "Any random pop-up advertisement",
    "Unknown email attachments from strangers",
    "Trusted official websites or app stores"
   ],
   "correct": 3,
   "exp": "Downloading only from trusted official sources helps protect your computer from viruses and fake programs."
  }
 ],
 "Uninstalling Software": [
  {
   "q": "What does uninstalling a program do?",
   "opts": [
    "It removes the program from your computer",
    "It makes the program open faster",
    "It prints the program on paper",
    "It sends the program to a friend"
   ],
   "correct": 0,
   "exp": "Uninstalling removes a program and its files from the computer."
  },
  {
   "q": "Why might someone uninstall a program?",
   "opts": [
    "To make the screen colorful",
    "To free up space or remove a program they no longer need",
    "To charge the battery",
    "To increase the volume"
   ],
   "correct": 1,
   "exp": "People uninstall programs to free up storage space or remove software they no longer use."
  },
  {
   "q": "Which is the correct way to uninstall a program in Windows?",
   "opts": [
    "Delete its desktop shortcut only",
    "Unplug the computer",
    "Use Settings or Control Panel to uninstall it properly",
    "Turn off the monitor"
   ],
   "correct": 2,
   "exp": "Deleting the shortcut does not remove the program; you should uninstall it through Settings or Control Panel."
  }
 ],
 "Windows Updates": [
  {
   "q": "What is the main purpose of Windows Updates?",
   "opts": [
    "To delete all your files",
    "To turn the computer into a phone",
    "To make the keyboard bigger",
    "To fix problems and improve security in Windows"
   ],
   "correct": 3,
   "exp": "Windows Updates fix bugs, close security holes, and improve how Windows works."
  },
  {
   "q": "Why is it important to install security updates?",
   "opts": [
    "They protect the computer from viruses and attackers",
    "They make the computer heavier",
    "They change your name",
    "They add more keys to the keyboard"
   ],
   "correct": 0,
   "exp": "Security updates close weaknesses that viruses and attackers could use to harm your computer."
  },
  {
   "q": "What might Windows ask you to do after installing some updates?",
   "opts": [
    "Buy a new computer",
    "Restart the computer",
    "Throw away the mouse",
    "Turn off the internet forever"
   ],
   "correct": 1,
   "exp": "Some updates need a restart so the changes can finish being applied."
  }
 ],
 "What Are Files and Folders?": [
  {
   "q": "What is a file on a computer?",
   "opts": [
    "The computer's power button",
    "A physical drawer in a desk",
    "A single item that stores data, such as a document or photo",
    "A type of internet cable"
   ],
   "correct": 2,
   "exp": "A file is a single stored item of data, like a document, photo, song, or video."
  },
  {
   "q": "What is a folder used for on a computer?",
   "opts": [
    "To make the computer louder",
    "To charge the battery",
    "To connect to Wi-Fi",
    "To hold and organize files together"
   ],
   "correct": 3,
   "exp": "A folder is a container that holds and organizes related files together."
  },
  {
   "q": "How can you tell what kind of file something is?",
   "opts": [
    "By its file extension, like .docx or .jpg",
    "By its color only",
    "By its weight",
    "By how loud it is"
   ],
   "correct": 0,
   "exp": "The file extension at the end of the name, such as .docx or .jpg, tells you the file type."
  }
 ],
 "Creating a Folder": [
  {
   "q": "Why would you create a new folder?",
   "opts": [
    "To delete the computer",
    "To keep related files organized in one place",
    "To make the screen darker",
    "To turn off Windows"
   ],
   "correct": 1,
   "exp": "A new folder gives you a place to group related files so they are organized and easy to find."
  },
  {
   "q": "In File Explorer, one common way to create a new folder is to right-click an empty space and choose what?",
   "opts": [
    "Delete",
    "Print",
    "New, then Folder",
    "Shut down"
   ],
   "correct": 2,
   "exp": "Right-clicking empty space and choosing New then Folder creates a new folder."
  },
  {
   "q": "What should you do right after creating a new folder?",
   "opts": [
    "Print it on paper",
    "Leave it named \"New folder\" forever with no thought",
    "Immediately delete it",
    "Give it a clear name that describes what it holds"
   ],
   "correct": 3,
   "exp": "Naming a new folder clearly helps you remember what files it is meant to hold."
  }
 ],
 "Renaming Files and Folders": [
  {
   "q": "Why would you rename a file or folder?",
   "opts": [
    "To give it a clearer name that is easy to understand",
    "To make it disappear",
    "To make the computer faster",
    "To connect to the internet"
   ],
   "correct": 0,
   "exp": "Renaming lets you give a file or folder a clearer, more meaningful name."
  },
  {
   "q": "Which key can you press to start renaming a selected file in Windows?",
   "opts": [
    "The spacebar",
    "F2",
    "The Windows key",
    "Caps Lock"
   ],
   "correct": 1,
   "exp": "Pressing F2 on a selected file lets you type a new name for it."
  },
  {
   "q": "When renaming a file, what should you usually avoid changing?",
   "opts": [
    "The first letter",
    "Making the name shorter",
    "The file extension, such as .jpg or .docx",
    "Using capital letters"
   ],
   "correct": 2,
   "exp": "Changing the file extension can stop the file from opening correctly, so it is best left unchanged."
  }
 ],
 "Copying and Moving Files": [
  {
   "q": "What is the difference between copying and moving a file?",
   "opts": [
    "There is no difference at all",
    "Copying deletes the file; moving prints it",
    "They both erase the file",
    "Copying makes a duplicate; moving relocates the original"
   ],
   "correct": 3,
   "exp": "Copying leaves the original and makes a duplicate, while moving takes the original to a new place."
  },
  {
   "q": "Which keyboard shortcut is used to copy a selected file?",
   "opts": [
    "Ctrl plus C",
    "Ctrl plus V",
    "Ctrl plus P",
    "Ctrl plus Z"
   ],
   "correct": 0,
   "exp": "Ctrl plus C copies the selected item, and Ctrl plus V pastes it."
  },
  {
   "q": "After copying a file with Ctrl plus C, what do you press to place it in a new folder?",
   "opts": [
    "Ctrl plus X to cut it",
    "Ctrl plus V to paste it",
    "The Delete key",
    "The Escape key"
   ],
   "correct": 1,
   "exp": "Ctrl plus V pastes the copied file into the new location."
  }
 ],
 "Deleting Files and Folders": [
  {
   "q": "When you delete a file in Windows, where does it usually go first?",
   "opts": [
    "It disappears forever right away",
    "The printer",
    "The Recycle Bin",
    "The internet"
   ],
   "correct": 2,
   "exp": "Deleted files normally go to the Recycle Bin first, so they can be restored if needed."
  },
  {
   "q": "Which key is a quick way to delete a selected file?",
   "opts": [
    "Caps Lock",
    "The Enter key",
    "The Shift key alone",
    "The Delete key"
   ],
   "correct": 3,
   "exp": "Pressing the Delete key sends the selected file to the Recycle Bin."
  },
  {
   "q": "What happens if you delete a folder that has files inside it?",
   "opts": [
    "The files inside are deleted along with the folder",
    "Only the folder name changes",
    "Nothing happens at all",
    "The files get printed"
   ],
   "correct": 0,
   "exp": "Deleting a folder also deletes all the files stored inside it."
  }
 ],
 "Using Recycle Bin": [
  {
   "q": "What is the main purpose of the Recycle Bin?",
   "opts": [
    "To store new programs",
    "To hold deleted files so you can restore them if needed",
    "To connect to Wi-Fi",
    "To make files bigger"
   ],
   "correct": 1,
   "exp": "The Recycle Bin holds deleted files temporarily so you can restore them if you change your mind."
  },
  {
   "q": "How can you get a deleted file back from the Recycle Bin?",
   "opts": [
    "Print the Recycle Bin",
    "Turn off the computer",
    "Right-click the file and choose Restore",
    "Rename the Recycle Bin"
   ],
   "correct": 2,
   "exp": "Right-clicking a file in the Recycle Bin and choosing Restore returns it to its original place."
  },
  {
   "q": "What happens when you empty the Recycle Bin?",
   "opts": [
    "The files are emailed to you",
    "The files move to the desktop",
    "The files are printed",
    "The files are permanently removed from the computer"
   ],
   "correct": 3,
   "exp": "Emptying the Recycle Bin permanently deletes the files, so they can no longer be easily restored."
  }
 ],
 "Searching for Files": [
  {
   "q": "Why is searching for files useful?",
   "opts": [
    "It helps you find a file quickly without opening every folder",
    "It makes the computer louder",
    "It deletes old files",
    "It charges the battery"
   ],
   "correct": 0,
   "exp": "Searching lets you find a file quickly by name instead of opening many folders by hand."
  },
  {
   "q": "Where can you type to search for files inside File Explorer?",
   "opts": [
    "The power button",
    "The search box in the top-right corner",
    "The volume slider",
    "The title of the window"
   ],
   "correct": 1,
   "exp": "File Explorer has a search box in the top-right corner where you type what you are looking for."
  },
  {
   "q": "If you cannot remember a file's full name, what can help you find it?",
   "opts": [
    "Deleting all your folders",
    "Turning off the screen",
    "Typing part of the name or a keyword from it",
    "Unplugging the mouse"
   ],
   "correct": 2,
   "exp": "Typing part of the name or a keyword still lets the search show matching files."
  }
 ],
 "Organizing Your Files": [
  {
   "q": "Why is it important to organize your files well?",
   "opts": [
    "So the screen turns off",
    "So the computer uses more electricity",
    "So files become louder",
    "So you can find what you need quickly and easily"
   ],
   "correct": 3,
   "exp": "Good organization means you can find your files quickly instead of searching everywhere."
  },
  {
   "q": "Which is a good habit for organizing files?",
   "opts": [
    "Give files clear names and group them in labeled folders",
    "Save everything on the desktop with random names",
    "Never use folders at all",
    "Delete files you still need"
   ],
   "correct": 0,
   "exp": "Clear names and labeled folders make files easy to find and keep them tidy."
  },
  {
   "q": "Where is a sensible place to keep your personal documents in Windows?",
   "opts": [
    "Inside the Recycle Bin",
    "Inside the Documents folder",
    "On the power button",
    "Inside the printer"
   ],
   "correct": 1,
   "exp": "The Documents folder is a built-in place designed for storing your personal documents."
  }
 ],
 "What Is the Internet?": [
  {
   "q": "What is the internet?",
   "opts": [
    "A program you install on your phone",
    "A single computer owned by one company",
    "A global network that connects millions of computers together",
    "A type of electric cable only found in cities"
   ],
   "correct": 2,
   "exp": "The internet is a worldwide network that links many computers so they can share information."
  },
  {
   "q": "Which of these is something people commonly use the internet to do?",
   "opts": [
    "Cook food faster on a stove",
    "Charge a phone battery without electricity",
    "Make a room cooler like a fan",
    "Send email and visit websites"
   ],
   "correct": 3,
   "exp": "The internet lets people communicate and reach websites, such as sending email or browsing pages."
  },
  {
   "q": "What do you usually need to connect a device to the internet?",
   "opts": [
    "An internet connection such as mobile data or Wi-Fi",
    "A second monitor",
    "A microphone",
    "A printer"
   ],
   "correct": 0,
   "exp": "To reach the internet a device needs a connection like mobile data or a Wi-Fi link to a provider."
  }
 ],
 "How the Internet Works": [
  {
   "q": "When you open a website, what is your device mainly doing?",
   "opts": [
    "Printing the page onto paper",
    "Requesting information from a server that stores the website",
    "Copying files from a nearby phone by Bluetooth",
    "Creating the website from scratch on your device"
   ],
   "correct": 1,
   "exp": "Your device sends a request to a server, which sends back the web page you asked for."
  },
  {
   "q": "What is a server on the internet?",
   "opts": [
    "The keyboard used to type addresses",
    "The cable that carries electricity to your home",
    "A powerful computer that stores and delivers websites or files",
    "A person who fixes broken phones"
   ],
   "correct": 2,
   "exp": "A server is a computer that holds websites and data and sends them to users when requested."
  },
  {
   "q": "How does information usually travel across the internet between computers?",
   "opts": [
    "It stays on one computer and never moves",
    "It is carried by hand on a USB stick",
    "It is broadcast only through radio songs",
    "It is split into small pieces called data packets"
   ],
   "correct": 3,
   "exp": "Data is broken into small packets that travel across the network and are put back together at the other end."
  }
 ],
 "What Is a Web Browser?": [
  {
   "q": "What is a web browser?",
   "opts": [
    "A program used to open and view websites",
    "A cable that connects to the wall",
    "A machine that prints documents",
    "A folder where photos are saved"
   ],
   "correct": 0,
   "exp": "A web browser is the software you use to open and view websites on the internet."
  },
  {
   "q": "Which of these is an example of a web browser?",
   "opts": [
    "Microsoft Excel",
    "Google Chrome",
    "WhatsApp Voice Call",
    "A calculator app"
   ],
   "correct": 1,
   "exp": "Google Chrome is a popular web browser used to visit websites."
  },
  {
   "q": "In a browser, where do you type a website address like www.example.com?",
   "opts": [
    "Inside the printer settings",
    "On the power button",
    "In the address bar at the top",
    "In the phone's contact list"
   ],
   "correct": 2,
   "exp": "You type a website address into the address bar at the top of the browser to visit it."
  }
 ],
 "Using Google Chrome": [
  {
   "q": "In Google Chrome, what does clicking the plus (+) button near the top do?",
   "opts": [
    "Closes the browser completely",
    "Deletes your saved photos",
    "Turns off the internet",
    "Opens a new tab"
   ],
   "correct": 3,
   "exp": "The plus button opens a new tab so you can visit another website without losing the current one."
  },
  {
   "q": "What is a bookmark in Google Chrome used for?",
   "opts": [
    "To save a website so you can return to it easily later",
    "To delete a website forever",
    "To increase your internet speed",
    "To change the screen brightness"
   ],
   "correct": 0,
   "exp": "A bookmark saves a website's address so you can quickly open it again in the future."
  },
  {
   "q": "In Chrome, what does the back arrow button do?",
   "opts": [
    "Closes all your tabs at once",
    "Returns to the page you viewed just before",
    "Refreshes the whole computer",
    "Opens a new browser"
   ],
   "correct": 1,
   "exp": "The back arrow takes you to the previous page you were viewing."
  }
 ],
 "Using Search Engines": [
  {
   "q": "What is a search engine used for?",
   "opts": [
    "Making phone calls without a SIM card",
    "Charging your laptop battery",
    "Finding websites and information by typing keywords",
    "Printing documents in color"
   ],
   "correct": 2,
   "exp": "A search engine helps you find websites and information by typing words about what you want."
  },
  {
   "q": "Which of these is a well-known search engine?",
   "opts": [
    "USB drive",
    "Notepad",
    "Paint",
    "Google"
   ],
   "correct": 3,
   "exp": "Google is one of the most widely used search engines."
  },
  {
   "q": "After you type words into a search engine and press Enter, what do you get?",
   "opts": [
    "A list of results linking to related websites",
    "A phone call from the website owner",
    "A new email in your inbox automatically",
    "A printed copy of the page"
   ],
   "correct": 0,
   "exp": "The search engine shows a list of results with links to websites that match your words."
  }
 ],
 "Effective Google Searching": [
  {
   "q": "To get better search results, what kind of words should you type?",
   "opts": [
    "Long full sentences with polite greetings",
    "Clear keywords about exactly what you want",
    "Random letters and numbers",
    "Only your own name"
   ],
   "correct": 1,
   "exp": "Using clear keywords about your topic helps the search engine find the most useful results."
  },
  {
   "q": "What does putting a phrase inside quotation marks, like \"clean water project\", do in a Google search?",
   "opts": [
    "Translates the words into French",
    "Hides the results from other people",
    "Searches for those exact words in that exact order",
    "Deletes the words from your history"
   ],
   "correct": 2,
   "exp": "Quotation marks tell Google to look for that exact phrase rather than the words separately."
  },
  {
   "q": "If your first search does not find what you need, what is a good next step?",
   "opts": [
    "Give up and turn off the computer",
    "Type the same words many times",
    "Search only using capital letters",
    "Try different or more specific keywords"
   ],
   "correct": 3,
   "exp": "Changing your keywords to be more specific often gives better and more relevant results."
  }
 ],
 "Opening and Managing Web Pages": [
  {
   "q": "What is a browser tab?",
   "opts": [
    "A separate open web page inside the same browser window",
    "A file saved on your desktop",
    "The name of your internet provider",
    "A button that turns off the screen"
   ],
   "correct": 0,
   "exp": "A tab is one open web page, and you can have several tabs open at once in the same window."
  },
  {
   "q": "How do you close a single web page tab you no longer need?",
   "opts": [
    "Shut down the whole computer",
    "Click the small X on that tab",
    "Unplug the internet cable",
    "Delete the browser program"
   ],
   "correct": 1,
   "exp": "Clicking the X on a tab closes just that page while keeping your other tabs open."
  },
  {
   "q": "What does the refresh (reload) button do on a web page?",
   "opts": [
    "Prints the page",
    "Saves the page as your home screen",
    "Loads the current page again to show the latest version",
    "Deletes your password"
   ],
   "correct": 2,
   "exp": "Refresh reloads the page so you see the most up-to-date content."
  }
 ],
 "Downloading Files From the Internet": [
  {
   "q": "What does it mean to download a file from the internet?",
   "opts": [
    "To send a file to a printer far away",
    "To delete a file from your phone",
    "To turn your screen brightness up",
    "To copy a file from the internet onto your device"
   ],
   "correct": 3,
   "exp": "Downloading means copying a file from the internet and saving it onto your own device."
  },
  {
   "q": "After you download a file in Chrome, where can you usually find it?",
   "opts": [
    "In the Downloads folder or download list",
    "Only on another person's computer",
    "Inside the phone's battery",
    "In the calculator app"
   ],
   "correct": 0,
   "exp": "Downloaded files are normally saved in the Downloads folder and shown in the browser's download list."
  },
  {
   "q": "Before downloading a file, what is the safest habit?",
   "opts": [
    "Download from any pop-up that appears",
    "Only download from websites and sources you trust",
    "Turn off the screen first",
    "Download the same file ten times"
   ],
   "correct": 1,
   "exp": "Downloading only from trusted sources helps you avoid viruses and harmful files."
  }
 ],
 "Internet Safety Basics": [
  {
   "q": "Which of these is a smart internet safety habit?",
   "opts": [
    "Clicking every link you receive",
    "Sharing your password with strangers online",
    "Keeping personal details like your password private",
    "Using the same simple password everywhere"
   ],
   "correct": 2,
   "exp": "Keeping personal details such as passwords private is a basic and important safety habit."
  },
  {
   "q": "You get a message from someone you do not know asking for money urgently. What should you do?",
   "opts": [
    "Send the money quickly before it is too late",
    "Share your bank PIN to prove you are real",
    "Forward it to all your friends",
    "Be careful and do not send money or personal details"
   ],
   "correct": 3,
   "exp": "Urgent requests for money from strangers are often scams, so you should not send money or private details."
  },
  {
   "q": "Why should you be careful about what you post publicly online?",
   "opts": [
    "Because anyone, including strangers, may be able to see it",
    "Because posting uses no data at all",
    "Because posts make your phone heavier",
    "Because it changes your phone number"
   ],
   "correct": 0,
   "exp": "Public posts can be seen by many people you do not know, so share carefully."
  }
 ],
 "Creating Strong Passwords": [
  {
   "q": "Which of these is the strongest password?",
   "opts": [
    "1234",
    "K7#mesQ2!rp",
    "password",
    "your first name"
   ],
   "correct": 1,
   "exp": "A long mix of letters, numbers, and symbols like K7#mesQ2!rp is much harder to guess."
  },
  {
   "q": "Why is it risky to use the same password for every account?",
   "opts": [
    "It makes your screen slower",
    "It uses more electricity",
    "If one account is broken into, all your accounts are at risk",
    "It makes passwords easier to remember, which is always good"
   ],
   "correct": 2,
   "exp": "Reusing one password means a single leak can expose all of your accounts at once."
  },
  {
   "q": "Which detail should you avoid using in a password?",
   "opts": [
    "Uppercase and lowercase letters",
    "A random mix of characters",
    "A long phrase only you know",
    "Your birthday or your name"
   ],
   "correct": 3,
   "exp": "Personal details like your name or birthday are easy for others to guess or find."
  }
 ],
 "Two-Factor Authentication": [
  {
   "q": "What is two-factor authentication (2FA)?",
   "opts": [
    "A second security step, like a code, added on top of your password",
    "Using two computers at the same time",
    "A way to double your internet speed",
    "Logging in twice a day"
   ],
   "correct": 0,
   "exp": "2FA adds a second step, such as a one-time code, so a password alone is not enough to log in."
  },
  {
   "q": "With 2FA turned on, how is a code often sent to you when you log in?",
   "opts": [
    "Printed on your keyboard",
    "By a text message or an authenticator app",
    "Written inside the phone battery",
    "Sent by regular postal mail only"
   ],
   "correct": 1,
   "exp": "The extra code usually arrives by SMS text or through an authenticator app on your phone."
  },
  {
   "q": "Why does two-factor authentication make your account safer?",
   "opts": [
    "It removes the need for any password",
    "It hides your account from you",
    "Even if someone steals your password, they still need the second code",
    "It makes your phone charge faster"
   ],
   "correct": 2,
   "exp": "A thief with only your password still cannot get in without the second code, so your account stays protected."
  }
 ],
 "Recognizing Phishing Scams": [
  {
   "q": "What is a phishing message trying to do?",
   "opts": [
    "Teach you how to swim",
    "Improve your phone's camera",
    "Give you free airtime with no catch",
    "Trick you into giving personal details like passwords"
   ],
   "correct": 3,
   "exp": "Phishing messages try to trick you into revealing private details such as passwords or bank numbers."
  },
  {
   "q": "Which sign suggests a message might be a phishing scam?",
   "opts": [
    "It urgently demands your password and threatens to close your account",
    "It has your correct full name only",
    "It contains no links at all",
    "It comes from a saved contact you called yesterday"
   ],
   "correct": 0,
   "exp": "Urgent threats demanding your password are a common phishing trick to make you act without thinking."
  },
  {
   "q": "You get an email saying you won a prize; just click the link and enter your bank details. What should you do?",
   "opts": [
    "Enter your bank details quickly",
    "Do not click and do not share your bank details",
    "Reply with your PIN to claim it",
    "Forward it to your bank so they can pay you"
   ],
   "correct": 1,
   "exp": "Unexpected prize messages asking for bank details are phishing, so do not click or share anything."
  }
 ],
 "Avoiding Online Scams": [
  {
   "q": "An online seller offers a brand-new phone for a price far below normal if you pay in full first. What is the wise action?",
   "opts": [
    "Pay immediately before the deal ends",
    "Send extra money to get two phones",
    "Be suspicious, because deals that seem too good to be true are often scams",
    "Share your bank password to speed it up"
   ],
   "correct": 2,
   "exp": "Offers that seem too good to be true are often scams, so be cautious before paying."
  },
  {
   "q": "Which of these is a common warning sign of an online scam?",
   "opts": [
    "Paying only after you receive the item",
    "A seller with clear contact details and reviews",
    "Being allowed to ask questions first",
    "Pressure to pay quickly and secretly"
   ],
   "correct": 3,
   "exp": "Scammers often pressure you to pay fast and in secret so you cannot check if it is real."
  },
  {
   "q": "How can you reduce the risk of being scammed when buying online?",
   "opts": [
    "Only buy from trusted sellers and check reviews first",
    "Ignore all warning signs",
    "Always pay strangers in advance without checking",
    "Give your password to prove you are serious"
   ],
   "correct": 0,
   "exp": "Sticking to trusted sellers and checking reviews helps you avoid dishonest offers."
  }
 ],
 "Protecting Personal Information Online": [
  {
   "q": "Which of these counts as personal information you should protect online?",
   "opts": [
    "The color of the sky",
    "Your home address and bank number",
    "The name of a famous city",
    "Today's weather"
   ],
   "correct": 1,
   "exp": "Details like your home address and bank number are private and should be kept safe."
  },
  {
   "q": "A website you do not trust asks for your full bank details to view an article. What should you do?",
   "opts": [
    "Share the details with friends too",
    "Give the details so you can read it",
    "Refuse and leave the website",
    "Post the details publicly"
   ],
   "correct": 2,
   "exp": "You should never give bank details to an untrusted site; the safe choice is to refuse and leave."
  },
  {
   "q": "Why should you review the privacy settings on your social media accounts?",
   "opts": [
    "To make your phone battery last longer",
    "To increase your internet speed",
    "To change your phone's ringtone",
    "To control who can see your posts and personal details"
   ],
   "correct": 3,
   "exp": "Privacy settings let you decide who can see your information, helping keep it away from strangers."
  }
 ],
 "Safe Downloads": [
  {
   "q": "What is the safest place to download apps to your phone?",
   "opts": [
    "An official app store like Google Play",
    "Any link sent by a stranger",
    "Random pop-up ads on websites",
    "A shared USB from someone you do not know"
   ],
   "correct": 0,
   "exp": "Official app stores check apps for safety, so they are much safer than random links or pop-ups."
  },
  {
   "q": "A pop-up says your phone has a virus and tells you to download a cleaning app right now. What should you do?",
   "opts": [
    "Download it immediately as told",
    "Ignore the pop-up because it is likely a trick",
    "Share the pop-up with all your contacts",
    "Enter your password into the pop-up"
   ],
   "correct": 1,
   "exp": "Fake virus pop-ups are a trick to make you install harmful software, so you should ignore them."
  },
  {
   "q": "Before installing a downloaded file, what is a good safety habit?",
   "opts": [
    "Install it even if you do not know where it came from",
    "Turn off the screen",
    "Make sure it comes from a source you trust",
    "Download it several more times first"
   ],
   "correct": 2,
   "exp": "Installing only files from trusted sources helps protect your device from viruses."
  }
 ],
 "Computer Viruses and Malware": [
  {
   "q": "What is a computer virus?",
   "opts": [
    "A word for a slow keyboard",
    "A helpful tool that speeds up your computer",
    "A type of internet cable",
    "A harmful program that can damage your device or steal data"
   ],
   "correct": 3,
   "exp": "A computer virus is harmful software that can damage your device or steal your information."
  },
  {
   "q": "Which of these helps protect a computer from viruses and malware?",
   "opts": [
    "Using antivirus software and keeping it updated",
    "Opening every email attachment from strangers",
    "Turning off the screen at night",
    "Sharing your password widely"
   ],
   "correct": 0,
   "exp": "Antivirus software that is kept up to date helps find and block harmful programs."
  },
  {
   "q": "How does malware often get onto a device?",
   "opts": [
    "By charging the battery normally",
    "Through unsafe downloads or clicking bad links",
    "By using the calculator app",
    "By adjusting the screen brightness"
   ],
   "correct": 1,
   "exp": "Malware commonly spreads through unsafe downloads and clicking harmful links, so be careful what you open."
  }
 ],
 "What Is Email?": [
  {
   "q": "What does the word email stand for?",
   "opts": [
    "Easy mail",
    "Extra mail",
    "Electronic mail",
    "Express mail"
   ],
   "correct": 2,
   "exp": "Email is short for electronic mail, messages sent over the internet."
  },
  {
   "q": "What do you mainly need in order to send and receive email?",
   "opts": [
    "A printer and paper",
    "A fax machine",
    "A postage stamp",
    "An email address and internet access"
   ],
   "correct": 3,
   "exp": "You need an email address and an internet connection to use email."
  },
  {
   "q": "Which of these is an example of a valid email address?",
   "opts": [
    "kofi@gmail.com",
    "john smith",
    "www.gmail.com",
    "0776543210"
   ],
   "correct": 0,
   "exp": "A valid email address has a name, the @ sign, and a domain like gmail.com."
  }
 ],
 "Creating a Gmail Account": [
  {
   "q": "Which company provides the Gmail email service?",
   "opts": [
    "Apple",
    "Google",
    "Facebook",
    "Microsoft"
   ],
   "correct": 1,
   "exp": "Gmail is the free email service made by Google."
  },
  {
   "q": "When creating a Gmail account, why should your password be strong?",
   "opts": [
    "So it looks nice",
    "So Google can read it easily",
    "To keep your account safe from others",
    "To make sign-in slower"
   ],
   "correct": 2,
   "exp": "A strong password protects your account from people trying to break in."
  },
  {
   "q": "What ending do all new Gmail addresses have?",
   "opts": [
    "@yahoo.com",
    "@hotmail.com",
    "@google.org",
    "@gmail.com"
   ],
   "correct": 3,
   "exp": "Every Gmail account address ends with @gmail.com."
  }
 ],
 "Understanding the Gmail Interface": [
  {
   "q": "In Gmail, which folder holds the emails other people have sent to you?",
   "opts": [
    "Inbox",
    "Trash",
    "Drafts",
    "Sent"
   ],
   "correct": 0,
   "exp": "The Inbox is where incoming emails from others arrive."
  },
  {
   "q": "Where does Gmail keep messages you have already sent to others?",
   "opts": [
    "The Inbox",
    "The Sent folder",
    "The Spam folder",
    "The Bin"
   ],
   "correct": 1,
   "exp": "Copies of emails you send are stored in the Sent folder."
  },
  {
   "q": "What is the Spam folder in Gmail used for?",
   "opts": [
    "Storing your photos",
    "Keeping your contacts",
    "Holding unwanted or junk mail",
    "Saving drafts"
   ],
   "correct": 2,
   "exp": "Gmail moves suspected junk and unwanted messages into the Spam folder."
  }
 ],
 "Sending an Email": [
  {
   "q": "Which box do you type the receiver's email address into?",
   "opts": [
    "Subject",
    "Body",
    "Attach",
    "To"
   ],
   "correct": 3,
   "exp": "The address of the person you are writing to goes in the To field."
  },
  {
   "q": "What is the Subject line of an email for?",
   "opts": [
    "To give a short title of the message",
    "To hold your password",
    "To show the date",
    "To add pictures"
   ],
   "correct": 0,
   "exp": "The subject is a short line telling the reader what the email is about."
  },
  {
   "q": "After writing your message, which button actually delivers the email?",
   "opts": [
    "Delete",
    "Send",
    "Save",
    "Print"
   ],
   "correct": 1,
   "exp": "Clicking Send delivers your email to the receiver."
  }
 ],
 "Replying to an Email": [
  {
   "q": "What does the Reply button do?",
   "opts": [
    "Deletes the message",
    "Prints the message",
    "Sends a response back to the sender",
    "Blocks the sender"
   ],
   "correct": 2,
   "exp": "Reply lets you write back to the person who sent you the email."
  },
  {
   "q": "You get an email sent to five people. Which option answers everyone at once?",
   "opts": [
    "Reply",
    "Archive",
    "Forward",
    "Reply All"
   ],
   "correct": 3,
   "exp": "Reply All sends your response to the sender and all other recipients."
  },
  {
   "q": "What does Forward do with an email?",
   "opts": [
    "Sends the same message on to a new person",
    "Deletes it permanently",
    "Changes the sender's name",
    "Marks it as spam"
   ],
   "correct": 0,
   "exp": "Forward passes the email along to someone who did not originally receive it."
  }
 ],
 "Email Attachments": [
  {
   "q": "Which icon do you usually click to attach a file to an email?",
   "opts": [
    "A star",
    "A paperclip",
    "A trash can",
    "A magnifying glass"
   ],
   "correct": 1,
   "exp": "The paperclip icon is used to attach a file to your email."
  },
  {
   "q": "Which of these can be sent as an email attachment?",
   "opts": [
    "Your monitor",
    "The internet itself",
    "A photo or document file",
    "A phone call"
   ],
   "correct": 2,
   "exp": "You can attach files such as photos, documents, or PDFs to an email."
  },
  {
   "q": "Someone sent you a document attached to an email. What should you do to open it?",
   "opts": [
    "Delete the whole email",
    "Change your password",
    "Reply with no message",
    "Click or tap the attachment to open or download it"
   ],
   "correct": 3,
   "exp": "Clicking the attachment lets you view or download the file that was sent."
  }
 ],
 "Managing Email": [
  {
   "q": "What happens when you delete an email?",
   "opts": [
    "It moves to the Trash or Bin",
    "It is printed",
    "It is sent to everyone",
    "It becomes a draft"
   ],
   "correct": 0,
   "exp": "Deleted emails go to the Trash or Bin before being removed for good."
  },
  {
   "q": "What is a good way to find one old email among many?",
   "opts": [
    "Delete all your emails",
    "Use the search bar at the top",
    "Turn off the internet",
    "Restart the computer"
   ],
   "correct": 1,
   "exp": "The search bar lets you type words to quickly find a specific email."
  },
  {
   "q": "What does archiving an email do?",
   "opts": [
    "Deletes it forever",
    "Sends it to spam",
    "Removes it from the inbox but keeps it saved",
    "Prints a copy"
   ],
   "correct": 2,
   "exp": "Archiving hides an email from the inbox while keeping it stored for later."
  }
 ],
 "Email Etiquette": [
  {
   "q": "Why is it polite to fill in a clear subject line?",
   "opts": [
    "It hides your name",
    "It adds a picture",
    "It makes the email longer",
    "It helps the reader know what your email is about"
   ],
   "correct": 3,
   "exp": "A clear subject line helps the reader understand your message quickly."
  },
  {
   "q": "How should you write a professional email?",
   "opts": [
    "Politely and with correct spelling",
    "With rude words",
    "All in capital letters",
    "Without any greeting"
   ],
   "correct": 0,
   "exp": "Polite wording and good spelling make your email respectful and clear."
  },
  {
   "q": "Writing an email entirely in CAPITAL LETTERS can seem like you are doing what?",
   "opts": [
    "Being very polite",
    "Shouting at the reader",
    "Saving space",
    "Attaching a file"
   ],
   "correct": 1,
   "exp": "All capital letters is often read as shouting and is considered rude."
  }
 ],
 "Introduction to Microsoft Word": [
  {
   "q": "What is Microsoft Word mainly used for?",
   "opts": [
    "Editing videos",
    "Sending phone calls",
    "Creating and editing text documents",
    "Playing music"
   ],
   "correct": 2,
   "exp": "Word is a word processor for writing and editing text documents."
  },
  {
   "q": "Which type of file is Microsoft Word best for making?",
   "opts": [
    "A song recording",
    "A spreadsheet of numbers",
    "A slideshow presentation",
    "A letter or report"
   ],
   "correct": 3,
   "exp": "Word is designed for text documents like letters and reports."
  },
  {
   "q": "Which company makes Microsoft Word?",
   "opts": [
    "Microsoft",
    "Apple",
    "Google",
    "Adobe"
   ],
   "correct": 0,
   "exp": "Microsoft Word is made by the Microsoft company."
  }
 ],
 "Creating a Word Document": [
  {
   "q": "In Word, what do you usually choose to begin a new empty document?",
   "opts": [
    "Print Preview",
    "Blank document",
    "Close",
    "Undo"
   ],
   "correct": 1,
   "exp": "Choosing Blank document opens a fresh, empty page to start typing."
  },
  {
   "q": "What is a template in Word?",
   "opts": [
    "A broken file",
    "A printer setting",
    "A ready-made design you can start from",
    "A password"
   ],
   "correct": 2,
   "exp": "A template gives you a pre-made layout so you do not start from nothing."
  },
  {
   "q": "Which menu do you usually click to create a new document?",
   "opts": [
    "View",
    "Insert",
    "Review",
    "File"
   ],
   "correct": 3,
   "exp": "The File menu holds the New option for creating documents."
  }
 ],
 "Typing and Editing Text": [
  {
   "q": "Which key removes the character just to the left of the cursor?",
   "opts": [
    "Backspace",
    "Enter",
    "Shift",
    "Tab"
   ],
   "correct": 0,
   "exp": "The Backspace key deletes the character before the cursor."
  },
  {
   "q": "What does the blinking line in your document show?",
   "opts": [
    "The internet speed",
    "Where your text will appear when you type",
    "The battery level",
    "The page number"
   ],
   "correct": 1,
   "exp": "The blinking cursor marks the spot where typed text will be inserted."
  },
  {
   "q": "If you make a mistake, which action reverses your last change?",
   "opts": [
    "Save",
    "Print",
    "Undo",
    "Zoom"
   ],
   "correct": 2,
   "exp": "Undo reverses your most recent action, fixing a mistake quickly."
  }
 ],
 "Formatting Text": [
  {
   "q": "Which button makes selected text bold?",
   "opts": [
    "A letter U",
    "A letter A",
    "A letter I",
    "A letter B"
   ],
   "correct": 3,
   "exp": "The B button makes text bold, giving it a thicker, darker look."
  },
  {
   "q": "What must you usually do before changing how text looks?",
   "opts": [
    "Select or highlight the text first",
    "Turn off the computer",
    "Print the page",
    "Close the document"
   ],
   "correct": 0,
   "exp": "You highlight the text first so Word knows which words to format."
  },
  {
   "q": "The letter I button in the formatting toolbar makes text what?",
   "opts": [
    "Underlined",
    "Italic (slanted)",
    "Bigger",
    "Red"
   ],
   "correct": 1,
   "exp": "The I button makes text italic, giving it a slanted style."
  }
 ],
 "Using Styles and Headings": [
  {
   "q": "What is a heading style mainly used for?",
   "opts": [
    "To print the page",
    "To delete text",
    "To mark titles and section names",
    "To attach a file"
   ],
   "correct": 2,
   "exp": "Heading styles label titles and sections so the document is organized."
  },
  {
   "q": "What is one benefit of using built-in styles instead of formatting each line by hand?",
   "opts": [
    "It uses more paper",
    "It turns off spelling check",
    "It hides your text",
    "It keeps the whole document looking consistent"
   ],
   "correct": 3,
   "exp": "Styles apply the same look everywhere, keeping the document consistent."
  },
  {
   "q": "Heading styles can help Word automatically create what?",
   "opts": [
    "A table of contents",
    "A photo album",
    "A phone call",
    "A password"
   ],
   "correct": 0,
   "exp": "Word can build a table of contents from the headings you apply."
  }
 ],
 "Creating Lists": [
  {
   "q": "Which kind of list uses small dots in front of each item?",
   "opts": [
    "A numbered list",
    "A bulleted list",
    "A table",
    "A heading"
   ],
   "correct": 1,
   "exp": "A bulleted list places a dot before each item and shows no order."
  },
  {
   "q": "When should you use a numbered list instead of bullets?",
   "opts": [
    "When adding a picture",
    "When you want no order at all",
    "When the order of steps matters",
    "When printing"
   ],
   "correct": 2,
   "exp": "Numbered lists show a clear order, good for steps or ranked items."
  },
  {
   "q": "How do you usually add a new item to a list in Word?",
   "opts": [
    "Press Delete",
    "Change the font color",
    "Close the file",
    "Press Enter to start a new line"
   ],
   "correct": 3,
   "exp": "Pressing Enter creates the next line, which becomes a new list item."
  }
 ],
 "Inserting Pictures": [
  {
   "q": "Which tab do you usually use to add a picture to a Word document?",
   "opts": [
    "Insert",
    "Review",
    "View",
    "Home"
   ],
   "correct": 0,
   "exp": "The Insert tab holds the Pictures option for adding images."
  },
  {
   "q": "After adding a picture, what do the small handles around it let you do?",
   "opts": [
    "Change its color only",
    "Resize or make it bigger and smaller",
    "Delete the document",
    "Print the page"
   ],
   "correct": 1,
   "exp": "Dragging the corner handles resizes the picture larger or smaller."
  },
  {
   "q": "Where can pictures you insert into Word come from?",
   "opts": [
    "Only from the printer",
    "Only from email",
    "Files saved on your computer or online images",
    "Only from the keyboard"
   ],
   "correct": 2,
   "exp": "You can insert pictures from files on your device or from online sources."
  }
 ],
 "Creating Tables": [
  {
   "q": "What is a table in Word made up of?",
   "opts": [
    "A single long line",
    "Only pictures",
    "Only headings",
    "Rows and columns of cells"
   ],
   "correct": 3,
   "exp": "A table is a grid of rows and columns, and each box is a cell."
  },
  {
   "q": "What is one good use for a table?",
   "opts": [
    "Organizing information neatly, like a schedule",
    "Playing videos",
    "Sending an email",
    "Turning off the computer"
   ],
   "correct": 0,
   "exp": "Tables arrange information in rows and columns so it is easy to read."
  },
  {
   "q": "The small box where one row and one column meet is called what?",
   "opts": [
    "A page",
    "A cell",
    "A margin",
    "A font"
   ],
   "correct": 1,
   "exp": "A cell is the single box formed where a row crosses a column."
  }
 ],
 "Page Layout and Margins": [
  {
   "q": "What are the margins of a page?",
   "opts": [
    "The pictures",
    "The page number",
    "The blank space around the edges of the text",
    "The heading color"
   ],
   "correct": 2,
   "exp": "Margins are the empty borders between the text and the paper edges."
  },
  {
   "q": "What does page orientation decide?",
   "opts": [
    "The font size",
    "The spelling",
    "The printer ink color",
    "Whether the page is upright (portrait) or sideways (landscape)"
   ],
   "correct": 3,
   "exp": "Orientation sets the page as tall portrait or wide landscape."
  },
  {
   "q": "Which layout is usually taller than it is wide?",
   "opts": [
    "Portrait",
    "Sideways",
    "Landscape",
    "Square"
   ],
   "correct": 0,
   "exp": "Portrait orientation makes the page taller than it is wide."
  }
 ],
 "Headers, Footers and Page Numbers": [
  {
   "q": "Where does a header appear on a page?",
   "opts": [
    "In the middle of the text",
    "At the top of the page",
    "At the bottom of the page",
    "On the back only"
   ],
   "correct": 1,
   "exp": "A header sits in the top margin, repeating on each page."
  },
  {
   "q": "Where does a footer appear on a page?",
   "opts": [
    "At the top",
    "In the center",
    "At the bottom of the page",
    "Off the page"
   ],
   "correct": 2,
   "exp": "A footer sits in the bottom margin of every page."
  },
  {
   "q": "What is a key benefit of adding automatic page numbers?",
   "opts": [
    "It changes the font",
    "It deletes text",
    "It adds pictures",
    "Pages are numbered in order without typing each one"
   ],
   "correct": 3,
   "exp": "Automatic page numbers count the pages for you and update as you edit."
  }
 ],
 "Saving a Word Document": [
  {
   "q": "Why is it important to save your document?",
   "opts": [
    "So your work is not lost",
    "To make it print faster",
    "To change the font",
    "To send an email"
   ],
   "correct": 0,
   "exp": "Saving keeps your work so it is not lost if the computer closes."
  },
  {
   "q": "What does Save As let you do that plain Save does not?",
   "opts": [
    "Delete the file",
    "Choose a new name or location for the file",
    "Turn off the computer",
    "Add a picture"
   ],
   "correct": 1,
   "exp": "Save As lets you give the file a new name or save it in a new place."
  },
  {
   "q": "Which keyboard shortcut quickly saves a document in Word?",
   "opts": [
    "Ctrl + P",
    "Ctrl + X",
    "Ctrl + S",
    "Ctrl + V"
   ],
   "correct": 2,
   "exp": "Ctrl + S is the shortcut that saves your document quickly."
  }
 ],
 "Printing and Saving as PDF": [
  {
   "q": "Before printing, which feature lets you see how the page will look on paper?",
   "opts": [
    "Zoom out only",
    "Spell Check",
    "Undo",
    "Print Preview"
   ],
   "correct": 3,
   "exp": "Print Preview shows how the document will appear before you print it."
  },
  {
   "q": "What is one advantage of saving a document as a PDF?",
   "opts": [
    "It keeps the same layout on almost any device",
    "It can never be opened",
    "It deletes your text",
    "It only works on printers"
   ],
   "correct": 0,
   "exp": "A PDF keeps the layout looking the same when opened on different devices."
  },
  {
   "q": "In Word, saving as a PDF is usually done through which menu?",
   "opts": [
    "Home",
    "File",
    "Insert",
    "Review"
   ],
   "correct": 1,
   "exp": "The File menu offers Save As or Export options to create a PDF."
  }
 ],
 "Introduction to Microsoft Excel": [
  {
   "q": "What is Microsoft Excel mainly used for?",
   "opts": [
    "Sending emails to friends",
    "Editing photos and drawings",
    "Working with numbers and data in a spreadsheet",
    "Playing music files"
   ],
   "correct": 2,
   "exp": "Excel is a spreadsheet program designed to organize, calculate, and analyze numbers and data."
  },
  {
   "q": "What file type does an Excel document typically use?",
   "opts": [
    ".docx",
    ".pptx",
    ".mp3",
    ".xlsx"
   ],
   "correct": 3,
   "exp": "Modern Excel workbooks are saved with the .xlsx file extension."
  },
  {
   "q": "Which of these tasks is Excel BEST suited for?",
   "opts": [
    "Creating a monthly budget with automatic totals",
    "Recording a phone call",
    "Writing a long story",
    "Designing a logo"
   ],
   "correct": 0,
   "exp": "Excel's ability to calculate automatically makes it ideal for budgets and numeric records."
  }
 ],
 "Understanding the Excel Interface": [
  {
   "q": "What is the strip of tabs and buttons across the top of Excel called?",
   "opts": [
    "The Taskbar",
    "The Ribbon",
    "The Scroll bar",
    "The Status bar"
   ],
   "correct": 1,
   "exp": "The Ribbon holds Excel's command tabs such as Home, Insert, and Formulas."
  },
  {
   "q": "What does the Name Box show when you click a cell?",
   "opts": [
    "The colour of the cell",
    "The file name",
    "The cell reference such as A1",
    "The number of open workbooks"
   ],
   "correct": 2,
   "exp": "The Name Box displays the reference (like A1) of the currently selected cell."
  },
  {
   "q": "Where do you type or edit the contents of a selected cell?",
   "opts": [
    "The Quick Access Toolbar",
    "The Sheet tab",
    "The Title bar",
    "The Formula Bar"
   ],
   "correct": 3,
   "exp": "The Formula Bar shows and lets you edit the data or formula in the active cell."
  }
 ],
 "Workbooks and Worksheets": [
  {
   "q": "What is the difference between a workbook and a worksheet?",
   "opts": [
    "A workbook is the whole file; a worksheet is one page inside it",
    "They are exactly the same thing",
    "A worksheet contains many workbooks",
    "A workbook can hold only one worksheet"
   ],
   "correct": 0,
   "exp": "A workbook is the entire Excel file, and it can contain many worksheets (tabs)."
  },
  {
   "q": "Where do you click to switch between worksheets in a workbook?",
   "opts": [
    "The Ribbon at the top",
    "The sheet tabs at the bottom",
    "The Name Box",
    "The vertical scroll bar"
   ],
   "correct": 1,
   "exp": "Sheet tabs at the bottom of the window let you move between worksheets."
  },
  {
   "q": "How can you add a new worksheet to a workbook?",
   "opts": [
    "Close and reopen the file",
    "Press the Escape key",
    "Click the plus (+) button next to the sheet tabs",
    "Change the zoom level"
   ],
   "correct": 2,
   "exp": "Clicking the plus (+) sign beside the existing sheet tabs inserts a new worksheet."
  }
 ],
 "Rows, Columns and Cells": [
  {
   "q": "How are columns labelled in Excel?",
   "opts": [
    "With numbers like 1, 2, 3",
    "With colours",
    "With Roman numerals",
    "With letters like A, B, C"
   ],
   "correct": 3,
   "exp": "Columns run vertically and are identified by letters such as A, B, and C."
  },
  {
   "q": "What is a cell in Excel?",
   "opts": [
    "The box where a row and a column meet",
    "The name of the file",
    "A whole row of data",
    "A type of chart"
   ],
   "correct": 0,
   "exp": "A cell is the single box formed where a row and a column intersect, such as B3."
  },
  {
   "q": "How are rows labelled in Excel?",
   "opts": [
    "With letters like A, B, C",
    "With numbers like 1, 2, 3",
    "With plus and minus signs",
    "With the days of the week"
   ],
   "correct": 1,
   "exp": "Rows run horizontally and are identified by numbers such as 1, 2, and 3."
  }
 ],
 "Entering Data": [
  {
   "q": "After typing a value into a cell, which key confirms the entry and moves down?",
   "opts": [
    "The Escape key",
    "The Caps Lock key",
    "The Enter key",
    "The F1 key"
   ],
   "correct": 2,
   "exp": "Pressing Enter accepts the typed data and usually moves to the cell below."
  },
  {
   "q": "How does Excel usually align numbers you type into a cell by default?",
   "opts": [
    "To the left",
    "In the centre",
    "Numbers cannot be typed",
    "To the right"
   ],
   "correct": 3,
   "exp": "By default Excel aligns numbers to the right and text to the left of a cell."
  },
  {
   "q": "Which key cancels what you are typing before you confirm it?",
   "opts": [
    "The Escape key",
    "The Tab key",
    "The Spacebar",
    "The Enter key"
   ],
   "correct": 0,
   "exp": "Pressing Escape cancels the current entry and restores the cell's previous content."
  }
 ],
 "Formatting Cells": [
  {
   "q": "Which button would you use to make the text in a cell bold?",
   "opts": [
    "The scroll bar",
    "The B button on the Home tab",
    "The Name Box",
    "The plus (+) tab button"
   ],
   "correct": 1,
   "exp": "The B (Bold) button on the Home tab makes selected cell text bold."
  },
  {
   "q": "What does merging cells do?",
   "opts": [
    "Splits one cell into many",
    "Deletes the selected cells",
    "Joins several cells into one larger cell",
    "Changes numbers into text"
   ],
   "correct": 2,
   "exp": "Merge combines two or more selected cells into a single larger cell, often used for titles."
  },
  {
   "q": "How can you add a background colour to a cell?",
   "opts": [
    "Press the Enter key",
    "Use the Formula Bar",
    "Rename the worksheet",
    "Use the Fill Color tool on the Home tab"
   ],
   "correct": 3,
   "exp": "The Fill Color (paint bucket) tool on the Home tab shades a cell's background."
  }
 ],
 "Basic Excel Formulas": [
  {
   "q": "What symbol must every Excel formula begin with?",
   "opts": [
    "An equals sign (=)",
    "A dollar sign ($)",
    "A hash (#)",
    "A question mark (?)"
   ],
   "correct": 0,
   "exp": "Every formula in Excel starts with an equals sign (=) so Excel knows to calculate it."
  },
  {
   "q": "What will the formula =5+3 display in a cell?",
   "opts": [
    "5+3",
    "8",
    "Error",
    "53"
   ],
   "correct": 1,
   "exp": "Excel calculates 5 plus 3 and shows the result, 8."
  },
  {
   "q": "Which formula correctly adds the values in cells A1 and A2?",
   "opts": [
    "A1+A2",
    "SUM A1 A2",
    "=A1+A2",
    "+A1A2"
   ],
   "correct": 2,
   "exp": "A valid formula begins with = and references the cells, so =A1+A2 adds their values."
  }
 ],
 "Excel Functions": [
  {
   "q": "Which function adds up a range of numbers?",
   "opts": [
    "=PRINT()",
    "=COLOR()",
    "=SAVE()",
    "=SUM()"
   ],
   "correct": 3,
   "exp": "The SUM function totals the values in the range you give it, e.g. =SUM(A1:A5)."
  },
  {
   "q": "What does the =AVERAGE(B1:B5) function calculate?",
   "opts": [
    "The mean (average) of the numbers in B1 to B5",
    "The largest number in the range",
    "The number of cells in the range",
    "The smallest number"
   ],
   "correct": 0,
   "exp": "AVERAGE adds the values and divides by how many there are to give the mean."
  },
  {
   "q": "Which function would you use to count how many cells contain numbers?",
   "opts": [
    "=MAX()",
    "=COUNT()",
    "=BOLD()",
    "=SORT()"
   ],
   "correct": 1,
   "exp": "The COUNT function returns how many cells in a range contain numeric values."
  }
 ],
 "Sorting Data": [
  {
   "q": "What does sorting data in Excel do?",
   "opts": [
    "Changes the font colour",
    "Deletes duplicate rows",
    "Arranges rows in a chosen order, such as A to Z",
    "Adds up all the numbers"
   ],
   "correct": 2,
   "exp": "Sorting rearranges rows into an order like alphabetical or smallest to largest."
  },
  {
   "q": "To sort names alphabetically from A to Z, which option do you choose?",
   "opts": [
    "Sort Z to A",
    "Merge Cells",
    "Filter",
    "Sort A to Z"
   ],
   "correct": 3,
   "exp": "Sort A to Z places text in ascending alphabetical order."
  },
  {
   "q": "Which tab of the Ribbon contains the Sort buttons?",
   "opts": [
    "The Data tab",
    "The Help tab",
    "The Design tab",
    "The Review tab"
   ],
   "correct": 0,
   "exp": "Sort and Filter commands are found on the Data tab of the Ribbon."
  }
 ],
 "Filtering Data": [
  {
   "q": "What is the main purpose of filtering data?",
   "opts": [
    "To permanently delete rows you do not want",
    "To show only the rows that match a condition and hide the rest",
    "To create a chart",
    "To change the colour of the sheet"
   ],
   "correct": 1,
   "exp": "Filtering temporarily hides rows that do not match your chosen criteria without deleting them."
  },
  {
   "q": "After turning on a filter, where do the small drop-down arrows appear?",
   "opts": [
    "In the Name Box",
    "On the sheet tabs",
    "In the column header cells",
    "In the Formula Bar"
   ],
   "correct": 2,
   "exp": "Filter drop-down arrows appear in the header cell of each column."
  },
  {
   "q": "If you filter a list to show only 'Monrovia', what happens to the other cities?",
   "opts": [
    "They are deleted from the file",
    "They turn red",
    "They move to a new workbook",
    "They are hidden but still in the sheet"
   ],
   "correct": 3,
   "exp": "Filtered-out rows are only hidden and reappear when you clear the filter."
  }
 ],
 "Creating Charts": [
  {
   "q": "What must you usually do first before inserting a chart?",
   "opts": [
    "Select the data you want to chart",
    "Close the workbook",
    "Delete all the numbers",
    "Rename the file"
   ],
   "correct": 0,
   "exp": "You highlight the data range first so Excel knows what to plot in the chart."
  },
  {
   "q": "Which chart type is best for showing parts of a whole, like percentages of a budget?",
   "opts": [
    "A line chart",
    "A pie chart",
    "A scatter chart",
    "A bar of text"
   ],
   "correct": 1,
   "exp": "A pie chart shows how individual parts make up a whole, ideal for percentages."
  },
  {
   "q": "On which Ribbon tab do you find the buttons to insert a chart?",
   "opts": [
    "The View tab",
    "The Home tab",
    "The Insert tab",
    "The Formulas tab"
   ],
   "correct": 2,
   "exp": "Chart buttons are located in the Charts group on the Insert tab."
  }
 ],
 "Creating a Simple Spreadsheet Project": [
  {
   "q": "In a simple sales spreadsheet, which formula would total a column of daily sales in D2 to D8?",
   "opts": [
    "=TOTAL(D2 D8)",
    "=COUNT(D2:D8)",
    "D2+D8 only",
    "=SUM(D2:D8)"
   ],
   "correct": 3,
   "exp": "=SUM(D2:D8) adds every value in that column to give the overall total."
  },
  {
   "q": "What is a good first step when building a spreadsheet project?",
   "opts": [
    "Add column headings that label your data",
    "Print the empty sheet",
    "Change the screen brightness",
    "Delete the worksheet"
   ],
   "correct": 0,
   "exp": "Clear column headings label each type of data and keep the project organized."
  },
  {
   "q": "Why would you save your spreadsheet project regularly while working?",
   "opts": [
    "To make the file smaller",
    "To avoid losing your work if the power goes out",
    "To delete your formulas",
    "To change the column letters"
   ],
   "correct": 1,
   "exp": "Saving often protects your work from being lost during power cuts or crashes."
  }
 ],
 "Introduction to Microsoft PowerPoint": [
  {
   "q": "What is Microsoft PowerPoint mainly used to create?",
   "opts": [
    "Spreadsheets with formulas",
    "Video films",
    "Slide presentations",
    "Email messages"
   ],
   "correct": 2,
   "exp": "PowerPoint is designed to build presentations made of slides."
  },
  {
   "q": "What is each single page in a PowerPoint presentation called?",
   "opts": [
    "A cell",
    "A row",
    "A worksheet",
    "A slide"
   ],
   "correct": 3,
   "exp": "Each page of a PowerPoint presentation is called a slide."
  },
  {
   "q": "What file extension does a PowerPoint presentation normally use?",
   "opts": [
    ".pptx",
    ".xlsx",
    ".txt",
    ".jpg"
   ],
   "correct": 0,
   "exp": "PowerPoint presentations are saved with the .pptx file extension."
  }
 ],
 "Understanding the PowerPoint Interface": [
  {
   "q": "What does the pane on the left side of PowerPoint usually show?",
   "opts": [
    "A calculator",
    "Small thumbnails of all your slides",
    "The internet browser",
    "A list of emails"
   ],
   "correct": 1,
   "exp": "The left pane displays thumbnails of the slides so you can navigate the deck."
  },
  {
   "q": "What is the large central area where you build the current slide called?",
   "opts": [
    "The status bar",
    "The Ribbon",
    "The slide pane (editing area)",
    "The Name Box"
   ],
   "correct": 2,
   "exp": "The main central slide pane is where you add and arrange content on the active slide."
  },
  {
   "q": "Where can you type speaker notes that only the presenter sees?",
   "opts": [
    "In the slide title",
    "In a chart",
    "On the Ribbon",
    "In the Notes area below the slide"
   ],
   "correct": 3,
   "exp": "The Notes pane beneath the slide holds reminders visible to the presenter, not the audience."
  }
 ],
 "Creating a Presentation": [
  {
   "q": "When you start a new PowerPoint file, what does the first slide usually contain?",
   "opts": [
    "A title and subtitle placeholder",
    "A video clip",
    "A finished chart",
    "A spreadsheet"
   ],
   "correct": 0,
   "exp": "New presentations open with a title slide that has placeholders for a title and subtitle."
  },
  {
   "q": "What is a quick way to start a presentation that already has a design?",
   "opts": [
    "Turn off the computer",
    "Choose a template when creating the file",
    "Open Excel instead",
    "Delete all slides first"
   ],
   "correct": 1,
   "exp": "Templates provide ready-made designs so you can start with formatting already applied."
  },
  {
   "q": "How do you save your new presentation for the first time?",
   "opts": [
    "Press the Escape key",
    "Close the program",
    "Use File then Save As and choose a name and location",
    "Change the theme"
   ],
   "correct": 2,
   "exp": "File then Save As lets you name the presentation and pick where to store it."
  }
 ],
 "Adding and Editing Slides": [
  {
   "q": "How do you add a new slide to your presentation?",
   "opts": [
    "Press the Delete key",
    "Close the file",
    "Click the Formula Bar",
    "Click New Slide on the Home tab"
   ],
   "correct": 3,
   "exp": "The New Slide button on the Home tab inserts another slide into the deck."
  },
  {
   "q": "What does a slide 'layout' control?",
   "opts": [
    "The arrangement of placeholders like title and content on a slide",
    "The colour of the printer ink",
    "The speed of your computer",
    "The file name"
   ],
   "correct": 0,
   "exp": "A layout sets where titles, text, and content boxes are positioned on a slide."
  },
  {
   "q": "How can you change the order of slides in your presentation?",
   "opts": [
    "Rename the file",
    "Drag a slide thumbnail up or down in the left pane",
    "Press Caps Lock",
    "Delete the whole presentation"
   ],
   "correct": 1,
   "exp": "Dragging a slide's thumbnail in the left pane moves it to a new position."
  }
 ],
 "Adding Text and Images": [
  {
   "q": "Where do you usually type text on a slide?",
   "opts": [
    "On the Ribbon",
    "In the Name Box",
    "Inside a text box or placeholder",
    "In the status bar"
   ],
   "correct": 2,
   "exp": "Text goes into text boxes or the placeholders provided on the slide."
  },
  {
   "q": "Which Ribbon tab lets you insert a picture onto a slide?",
   "opts": [
    "The View tab",
    "The Help tab",
    "The Review tab",
    "The Insert tab"
   ],
   "correct": 3,
   "exp": "The Insert tab contains the Pictures button for adding images to a slide."
  },
  {
   "q": "After adding an image, how do you make it larger or smaller without distorting it?",
   "opts": [
    "Drag a corner handle of the image",
    "Press the Enter key",
    "Type a new file name",
    "Change the slide number"
   ],
   "correct": 0,
   "exp": "Dragging a corner handle resizes an image evenly, keeping its proportions."
  }
 ],
 "Themes and Templates": [
  {
   "q": "What does applying a theme to a presentation change?",
   "opts": [
    "The number of slides",
    "The colours, fonts, and overall look of the slides",
    "The speaker notes",
    "The file location"
   ],
   "correct": 1,
   "exp": "A theme sets a coordinated set of colours, fonts, and effects across all slides."
  },
  {
   "q": "On which tab do you find the built-in themes to apply?",
   "opts": [
    "The Insert tab",
    "The Review tab",
    "The Design tab",
    "The Home tab"
   ],
   "correct": 2,
   "exp": "The Design tab holds the gallery of themes you can apply to your slides."
  },
  {
   "q": "What is the advantage of using a theme across your whole presentation?",
   "opts": [
    "It deletes your text automatically",
    "It makes the file impossible to save",
    "It removes all images",
    "It gives every slide a consistent, professional look"
   ],
   "correct": 3,
   "exp": "A theme keeps colours and fonts consistent, making the presentation look unified and professional."
  }
 ],
 "Slide Transitions": [
  {
   "q": "What is a slide transition?",
   "opts": [
    "The visual effect shown when moving from one slide to the next",
    "A formula that adds numbers",
    "The name of the file",
    "A way to delete slides"
   ],
   "correct": 0,
   "exp": "A transition is the animation effect that plays as one slide changes to the next."
  },
  {
   "q": "On which Ribbon tab do you find slide transition effects?",
   "opts": [
    "The Formulas tab",
    "The Transitions tab",
    "The Data tab",
    "The Home tab"
   ],
   "correct": 1,
   "exp": "Transition effects are located on the Transitions tab of the Ribbon."
  },
  {
   "q": "What is good advice about using transitions in a presentation?",
   "opts": [
    "Never save the file after adding them",
    "Use a different flashy effect on every single slide",
    "Keep them simple and consistent so they do not distract the audience",
    "Only use them in Excel"
   ],
   "correct": 2,
   "exp": "Simple, consistent transitions look professional and keep the audience focused on your message."
  }
 ],
 "Animations": [
  {
   "q": "What does an animation do in PowerPoint?",
   "opts": [
    "Adds up numbers in a column",
    "Prints the slides",
    "Changes the file name",
    "Adds movement or effects to items on a single slide"
   ],
   "correct": 3,
   "exp": "Animations control how individual elements like text or images appear and move on one slide."
  },
  {
   "q": "What is the difference between an animation and a transition?",
   "opts": [
    "An animation affects objects on a slide; a transition affects moving between slides",
    "An animation deletes slides",
    "They are exactly the same",
    "A transition only works in Excel"
   ],
   "correct": 0,
   "exp": "Animations move objects within a slide, while transitions play when changing from one slide to another."
  },
  {
   "q": "Which type of animation makes text appear onto a slide?",
   "opts": [
    "An Exit effect",
    "An Entrance effect",
    "A Fill effect",
    "A Sort effect"
   ],
   "correct": 1,
   "exp": "Entrance effects bring an object onto the slide, such as making text fade or fly in."
  }
 ],
 "Adding Audio and Video": [
  {
   "q": "Which Ribbon tab is used to insert audio or video into a slide?",
   "opts": [
    "The Design tab",
    "The Transitions tab",
    "The Insert tab",
    "The Review tab"
   ],
   "correct": 2,
   "exp": "Audio and Video buttons are found in the Media group on the Insert tab."
  },
  {
   "q": "What is one benefit of adding a video to a presentation?",
   "opts": [
    "It makes the file unable to open",
    "It removes all the text",
    "It changes the slide numbers",
    "It can show a demonstration or example the audience can watch"
   ],
   "correct": 3,
   "exp": "Video lets you show moving examples or demonstrations that reinforce your message."
  },
  {
   "q": "After inserting audio, what small control appears so you can play it?",
   "opts": [
    "A play button and audio icon on the slide",
    "A new worksheet tab",
    "A Formula Bar",
    "A pie chart"
   ],
   "correct": 0,
   "exp": "Inserted audio shows a speaker icon with a play button so you can preview or play the sound."
  }
 ],
 "Presenting a Slide Show": [
  {
   "q": "Which key starts the slide show from the beginning?",
   "opts": [
    "Escape",
    "F5",
    "Caps Lock",
    "Delete"
   ],
   "correct": 1,
   "exp": "Pressing F5 launches the slide show from the first slide in full screen."
  },
  {
   "q": "During a slide show, how do you move to the next slide?",
   "opts": [
    "Close the program",
    "Press Caps Lock",
    "Press the spacebar, Enter, or the right arrow key",
    "Type a formula"
   ],
   "correct": 2,
   "exp": "The spacebar, Enter, or the right arrow key advances to the next slide."
  },
  {
   "q": "Which key exits the slide show and returns to editing?",
   "opts": [
    "The F5 key",
    "The B key",
    "The Tab key",
    "The Escape key"
   ],
   "correct": 3,
   "exp": "Pressing Escape ends the full-screen slide show and returns to the normal editing view."
  }
 ],
 "What Is Google Workspace?": [
  {
   "q": "What is Google Workspace?",
   "opts": [
    "A collection of online tools like Gmail, Drive, Docs, and Meet",
    "A type of computer keyboard",
    "A single video game app",
    "A brand of mobile phone"
   ],
   "correct": 0,
   "exp": "Google Workspace is a bundle of cloud-based productivity tools such as Gmail, Drive, Docs, Sheets, and Meet."
  },
  {
   "q": "What do you mainly need to use Google Workspace tools?",
   "opts": [
    "A special gaming console",
    "A Google account and internet connection",
    "A paid television subscription",
    "A printer connected to the computer"
   ],
   "correct": 1,
   "exp": "Google Workspace runs in the browser, so you mainly need a Google account and an internet connection."
  },
  {
   "q": "Where are files created in Google Workspace usually stored?",
   "opts": [
    "Only on paper",
    "On the computer's screen brightness setting",
    "In the cloud on Google's servers",
    "Inside the mouse"
   ],
   "correct": 2,
   "exp": "Google Workspace saves your work in the cloud, so you can reach it from any device with your account."
  }
 ],
 "Google Drive": [
  {
   "q": "What is Google Drive mainly used for?",
   "opts": [
    "Playing music CDs",
    "Measuring internet speed",
    "Charging your phone battery",
    "Storing files and folders online"
   ],
   "correct": 3,
   "exp": "Google Drive is a cloud storage service for keeping files and folders online."
  },
  {
   "q": "How much free storage does a standard Google account usually include across Drive, Gmail, and Photos?",
   "opts": [
    "15 GB",
    "2 GB",
    "500 GB",
    "Unlimited"
   ],
   "correct": 0,
   "exp": "A standard free Google account comes with 15 GB of storage shared across Drive, Gmail, and Photos."
  },
  {
   "q": "What is an advantage of storing files in Google Drive instead of only on one computer?",
   "opts": [
    "The files print automatically every night",
    "You can open them from any device with internet",
    "It makes the computer run cooler",
    "It removes the need for a password forever"
   ],
   "correct": 1,
   "exp": "Because Drive files live in the cloud, you can access them from any device that has internet."
  }
 ],
 "Uploading Files to Google Drive": [
  {
   "q": "Which button in Google Drive lets you add a file from your computer?",
   "opts": [
    "The Print button",
    "The Delete button",
    "The New button (then File upload)",
    "The Zoom button"
   ],
   "correct": 2,
   "exp": "Clicking New and then File upload lets you add files from your computer to Drive."
  },
  {
   "q": "Besides clicking New, what is another quick way to upload a file into Drive?",
   "opts": [
    "Shake the mouse three times",
    "Type the file name into the address bar",
    "Turn the monitor off and on",
    "Drag and drop the file into the Drive window"
   ],
   "correct": 3,
   "exp": "You can drag a file from your computer and drop it directly into the open Drive window to upload it."
  },
  {
   "q": "After a file finishes uploading to Google Drive, where can you find it?",
   "opts": [
    "In your Drive file list, ready to open or share",
    "Deleted from Google after one hour",
    "Printed on paper automatically",
    "Only inside the trash"
   ],
   "correct": 0,
   "exp": "An uploaded file appears in your Drive file list where you can open, move, or share it."
  }
 ],
 "Organizing Google Drive Files": [
  {
   "q": "What do you create in Google Drive to group related files together?",
   "opts": [
    "A screenshot",
    "A folder",
    "A password",
    "A ringtone"
   ],
   "correct": 1,
   "exp": "Folders let you group related files together so your Drive stays organized."
  },
  {
   "q": "How can you move a file into a folder in Google Drive?",
   "opts": [
    "Print it and scan it back",
    "Rename the computer",
    "Drag the file onto the folder or use Move to",
    "Delete it and upload again"
   ],
   "correct": 2,
   "exp": "You can drag a file onto a folder or right-click and choose Move to in order to organize it."
  },
  {
   "q": "Why is naming files clearly helpful in Google Drive?",
   "opts": [
    "It gives you more free storage",
    "It changes the file's color",
    "It makes the file open faster on the internet",
    "It makes files easier to find later by searching"
   ],
   "correct": 3,
   "exp": "Clear file names make it much easier to search for and find your files later."
  }
 ],
 "Sharing Files and Folders": [
  {
   "q": "What do you usually click to share a file in Google Drive?",
   "opts": [
    "The Share button",
    "The Battery icon",
    "The Refresh arrow",
    "The Volume slider"
   ],
   "correct": 0,
   "exp": "The Share button lets you give other people access to your file or folder."
  },
  {
   "q": "To let someone change your document, which permission should you give them?",
   "opts": [
    "Viewer",
    "Editor",
    "Blocked",
    "Printer"
   ],
   "correct": 1,
   "exp": "The Editor permission allows the person to make changes to the document."
  },
  {
   "q": "What does giving someone Viewer access mean?",
   "opts": [
    "They automatically own the file",
    "They can delete your whole Drive",
    "They can only look at the file but not change it",
    "They can change your password"
   ],
   "correct": 2,
   "exp": "Viewer access lets a person open and read the file but not edit it."
  }
 ],
 "Google Docs": [
  {
   "q": "What kind of program is Google Docs?",
   "opts": [
    "A calculator for numbers only",
    "A music player",
    "A photo-editing tool",
    "A word processor for writing documents"
   ],
   "correct": 3,
   "exp": "Google Docs is an online word processor used for writing and editing documents."
  },
  {
   "q": "How does Google Docs usually save your work?",
   "opts": [
    "Automatically as you type",
    "Once a week",
    "Never, you must retype it",
    "Only when you print it"
   ],
   "correct": 0,
   "exp": "Google Docs saves your changes automatically in the cloud as you type."
  },
  {
   "q": "What can two people do at the same time in one Google Doc?",
   "opts": [
    "Only one person is ever allowed to open it",
    "They can type and edit together in real time",
    "They must email the file back and forth",
    "They can only read but never write"
   ],
   "correct": 1,
   "exp": "Google Docs allows multiple people to edit the same document together in real time."
  }
 ],
 "Google Sheets": [
  {
   "q": "What is Google Sheets mainly used for?",
   "opts": [
    "Recording videos",
    "Writing long letters",
    "Working with numbers and data in rows and columns",
    "Sending text messages"
   ],
   "correct": 2,
   "exp": "Google Sheets is a spreadsheet program for organizing and calculating data in rows and columns."
  },
  {
   "q": "In Google Sheets, what must you usually type before a formula like a sum?",
   "opts": [
    "A question mark (?)",
    "A dollar bill",
    "The word please",
    "An equals sign (=)"
   ],
   "correct": 3,
   "exp": "Formulas in Google Sheets start with an equals sign, for example =SUM(A1:A5)."
  },
  {
   "q": "What is the box where a row and a column meet called?",
   "opts": [
    "A cell",
    "A folder",
    "A slide",
    "A tab"
   ],
   "correct": 0,
   "exp": "The box where a row and column meet is called a cell, and it holds one piece of data."
  }
 ],
 "Google Slides": [
  {
   "q": "What is Google Slides used to create?",
   "opts": [
    "Email inboxes",
    "Presentations made of slides",
    "Spreadsheets of numbers",
    "Printed photographs only"
   ],
   "correct": 1,
   "exp": "Google Slides is used to build presentations made up of individual slides."
  },
  {
   "q": "What is each page of a Google Slides presentation called?",
   "opts": [
    "A cell",
    "A folder",
    "A slide",
    "A tab"
   ],
   "correct": 2,
   "exp": "Each individual page in the presentation is called a slide."
  },
  {
   "q": "How do you show a Google Slides presentation full screen to an audience?",
   "opts": [
    "Change the internet speed",
    "Press the power button",
    "Delete the first slide",
    "Click Slideshow (Present)"
   ],
   "correct": 3,
   "exp": "Clicking Slideshow or Present displays your slides full screen for the audience."
  }
 ],
 "Introduction to Google Meet": [
  {
   "q": "What is Google Meet used for?",
   "opts": [
    "Online video meetings and calls",
    "Printing documents",
    "Editing photos",
    "Storing files only"
   ],
   "correct": 0,
   "exp": "Google Meet is a tool for holding online video meetings and calls."
  },
  {
   "q": "What do you mainly need to join a Google Meet video call?",
   "opts": [
    "A USB flash drive",
    "A camera, microphone, and internet connection",
    "A paper calendar",
    "A television remote"
   ],
   "correct": 1,
   "exp": "A camera, microphone, and internet connection let you take part in a Google Meet video call."
  },
  {
   "q": "Google Meet is part of which set of tools?",
   "opts": [
    "A weather station",
    "A cooking app",
    "Google Workspace",
    "A car dashboard"
   ],
   "correct": 2,
   "exp": "Google Meet is one of the tools included in Google Workspace."
  }
 ],
 "Joining a Google Meet Meeting": [
  {
   "q": "What is one common way to join a Google Meet meeting?",
   "opts": [
    "Turning off your computer",
    "Calling the phone company",
    "Printing the invitation",
    "Clicking the meeting link someone sent you"
   ],
   "correct": 3,
   "exp": "Clicking the shared meeting link opens Google Meet and lets you join."
  },
  {
   "q": "If you have only a meeting code, where do you enter it?",
   "opts": [
    "In the Meet box that says Enter a code or link",
    "In the volume control",
    "In the file name",
    "In the printer settings"
   ],
   "correct": 0,
   "exp": "You type the meeting code into the box on the Meet page that asks for a code or link."
  },
  {
   "q": "What button do you usually click to enter the meeting after opening the link?",
   "opts": [
    "Delete",
    "Join now (Ask to join)",
    "Shut down",
    "Refresh"
   ],
   "correct": 1,
   "exp": "You click Join now, or Ask to join, to enter the meeting."
  }
 ],
 "Creating a Google Meet Meeting": [
  {
   "q": "Which option starts a brand new Google Meet meeting?",
   "opts": [
    "Print page",
    "Delete account",
    "New meeting",
    "Log out"
   ],
   "correct": 2,
   "exp": "Clicking New meeting lets you start a new Google Meet call."
  },
  {
   "q": "After you start a meeting, how do you invite others to join?",
   "opts": [
    "Restart your computer",
    "Turn off the internet",
    "Change your wallpaper",
    "Share the meeting link or code with them"
   ],
   "correct": 3,
   "exp": "You invite people by sharing the meeting link or code so they can join."
  },
  {
   "q": "Which Google tool lets you schedule a Meet meeting for a future date and time?",
   "opts": [
    "Google Calendar",
    "Google Photos",
    "Google Translate",
    "Google Maps"
   ],
   "correct": 0,
   "exp": "Google Calendar lets you schedule a meeting and automatically adds a Meet link."
  }
 ],
 "Using the Camera and Microphone": [
  {
   "q": "What does the microphone icon with a line through it usually mean in a meeting?",
   "opts": [
    "The meeting has ended",
    "Your microphone is muted",
    "Your camera is broken",
    "Your battery is full"
   ],
   "correct": 1,
   "exp": "A microphone icon with a line through it means your microphone is muted and others cannot hear you."
  },
  {
   "q": "What should you do so others can see you during a video call?",
   "opts": [
    "Mute your microphone",
    "Close the browser",
    "Turn on your camera",
    "Lower the screen brightness"
   ],
   "correct": 2,
   "exp": "Turning on your camera lets other people in the meeting see you."
  },
  {
   "q": "Why is it polite to mute your microphone when you are not speaking?",
   "opts": [
    "It gives you more storage",
    "It saves the computer's paper",
    "It makes your camera clearer",
    "It reduces background noise for everyone"
   ],
   "correct": 3,
   "exp": "Muting when you are not talking cuts background noise so everyone can hear the speaker clearly."
  }
 ],
 "Sharing Your Screen": [
  {
   "q": "In Google Meet, which option lets you show your screen to others?",
   "opts": [
    "Present now",
    "Leave call",
    "Turn off camera",
    "Raise hand"
   ],
   "correct": 0,
   "exp": "The Present now option shares your screen with the other people in the meeting."
  },
  {
   "q": "When sharing your screen, what can you usually choose to share?",
   "opts": [
    "Only the wallpaper color",
    "Your entire screen, a window, or a single tab",
    "Just your microphone",
    "Only the meeting clock"
   ],
   "correct": 1,
   "exp": "You can choose to share your whole screen, a single window, or one browser tab."
  },
  {
   "q": "What should you do when you finish sharing your screen?",
   "opts": [
    "Turn off the computer",
    "Delete the meeting",
    "Click Stop sharing (Stop presenting)",
    "Change your password"
   ],
   "correct": 2,
   "exp": "Clicking Stop sharing ends the screen share so others stop seeing your screen."
  }
 ],
 "Introduction to Zoom": [
  {
   "q": "What is Zoom mainly used for?",
   "opts": [
    "Editing spreadsheets",
    "Charging batteries",
    "Printing photos",
    "Online video meetings and classes"
   ],
   "correct": 3,
   "exp": "Zoom is a platform for online video meetings, classes, and webinars."
  },
  {
   "q": "To use Zoom on a computer or phone, what do you usually do first?",
   "opts": [
    "Install the Zoom app or open it in a browser",
    "Buy a new printer",
    "Disconnect the internet",
    "Format the hard drive"
   ],
   "correct": 0,
   "exp": "You typically install the Zoom app or open Zoom in a web browser before joining a meeting."
  },
  {
   "q": "What piece of information identifies a specific Zoom meeting?",
   "opts": [
    "A file name",
    "A Meeting ID",
    "A phone battery level",
    "A printer model"
   ],
   "correct": 1,
   "exp": "Each Zoom meeting has a Meeting ID that identifies it so people can join the right call."
  }
 ],
 "Joining a Zoom Meeting": [
  {
   "q": "What is the easiest way to join a Zoom meeting someone invited you to?",
   "opts": [
    "Print the invitation",
    "Turn off your monitor",
    "Click the Zoom link they sent",
    "Restart the router"
   ],
   "correct": 2,
   "exp": "Clicking the Zoom invitation link opens the app and takes you into the meeting."
  },
  {
   "q": "If you join Zoom without a link, what two things do you usually need to enter?",
   "opts": [
    "Your printer name and ink level",
    "A photo and a video",
    "Your home address and age",
    "Meeting ID and passcode"
   ],
   "correct": 3,
   "exp": "Joining manually usually requires the Meeting ID and the meeting passcode."
  },
  {
   "q": "When joining a Zoom meeting, what is a Waiting Room?",
   "opts": [
    "A place where you wait until the host lets you in",
    "A room to store files",
    "A setting that turns off sound",
    "A type of camera"
   ],
   "correct": 0,
   "exp": "The Waiting Room holds you until the meeting host admits you into the call."
  }
 ],
 "Using Zoom for Online Classes and Meetings": [
  {
   "q": "Which Zoom feature lets students send written messages during a class?",
   "opts": [
    "The Print button",
    "The Chat",
    "The Battery meter",
    "The Wallpaper setting"
   ],
   "correct": 1,
   "exp": "The Chat feature lets participants type and send written messages during the meeting."
  },
  {
   "q": "What is the Raise Hand feature useful for in an online class?",
   "opts": [
    "Turning off the internet",
    "Deleting the meeting",
    "Telling the teacher you want to speak or ask a question",
    "Changing the screen color"
   ],
   "correct": 2,
   "exp": "Raise Hand signals to the host that you want to speak or ask a question without interrupting."
  },
  {
   "q": "Why should students usually mute their microphones during a Zoom class?",
   "opts": [
    "To speed up the internet",
    "To make the video sharper",
    "To earn extra storage",
    "To reduce background noise so the teacher is heard clearly"
   ],
   "correct": 3,
   "exp": "Muting when not speaking keeps background noise down so everyone can hear the teacher clearly."
  }
 ],
 "Keeping Your Computer Clean and Organized": [
  {
   "q": "Why is it a good idea to gently clean dust out of your computer's vents and fan openings?",
   "opts": [
    "It stops the computer from overheating",
    "It makes the screen brighter",
    "It increases your internet speed",
    "It adds more storage space"
   ],
   "correct": 0,
   "exp": "Dust blocks airflow, so cleaning the vents helps the computer stay cool and avoid overheating."
  },
  {
   "q": "What is the best way to keep your files easy to find on the computer?",
   "opts": [
    "Save everything to the Desktop in one big pile",
    "Organize files into clearly named folders",
    "Delete files as soon as you finish them",
    "Rename every file with random numbers"
   ],
   "correct": 1,
   "exp": "Grouping files into clearly named folders makes them quick to locate later."
  },
  {
   "q": "What should you use to safely wipe fingerprints off your computer screen?",
   "opts": [
    "A rough kitchen scrubbing sponge",
    "Plenty of water poured on the screen",
    "A soft, slightly damp microfiber cloth",
    "Cooking oil on a paper towel"
   ],
   "correct": 2,
   "exp": "A soft microfiber cloth cleans the screen without scratching it or letting liquid get inside."
  }
 ],
 "Installing and Updating Software": [
  {
   "q": "Where is the safest place to download a new program from?",
   "opts": [
    "Any random pop-up advertisement",
    "A link a stranger sent by email",
    "A file shared on a USB from an unknown person",
    "The official website or app store of the software"
   ],
   "correct": 3,
   "exp": "Official websites and app stores provide genuine software that is far less likely to contain viruses."
  },
  {
   "q": "Why should you keep your installed software updated?",
   "opts": [
    "Updates fix security holes and bugs",
    "Updates delete all your files",
    "Updates make the computer heavier",
    "Updates change your password automatically"
   ],
   "correct": 0,
   "exp": "Updates repair security weaknesses and errors, keeping the program safer and working better."
  },
  {
   "q": "During installation, what should you do before clicking Next on each screen?",
   "opts": [
    "Close the window immediately",
    "Read the prompts so you don't install unwanted extras",
    "Turn off the computer",
    "Ignore everything and click as fast as possible"
   ],
   "correct": 1,
   "exp": "Reading each screen lets you refuse bundled toolbars or unwanted extra programs."
  }
 ],
 "Backing Up Important Files": [
  {
   "q": "What does it mean to back up your files?",
   "opts": [
    "To permanently delete them",
    "To make the files smaller",
    "To keep an extra copy in another place",
    "To email them to strangers"
   ],
   "correct": 2,
   "exp": "A backup is a spare copy kept somewhere else so you don't lose the files."
  },
  {
   "q": "Which of these is a good place to keep a backup copy of your files?",
   "opts": [
    "Only the Recycle Bin",
    "Written on a piece of paper",
    "Nowhere, since backups are not needed",
    "A USB flash drive or cloud storage"
   ],
   "correct": 3,
   "exp": "A USB drive or cloud storage safely holds a second copy of your files."
  },
  {
   "q": "Why is keeping a backup on the cloud helpful?",
   "opts": [
    "You can reach your files even if your computer is lost or damaged",
    "It prevents the computer from turning on",
    "It uses no internet at all",
    "It makes your typing faster"
   ],
   "correct": 0,
   "exp": "Cloud backups stay safe online, so you can recover files even if the device is lost or broken."
  }
 ],
 "Managing Computer Storage": [
  {
   "q": "What usually happens when your computer's storage becomes almost full?",
   "opts": [
    "The computer gets brand new features",
    "The computer can slow down and struggle to save files",
    "The screen becomes larger",
    "The internet becomes faster"
   ],
   "correct": 1,
   "exp": "A nearly full drive leaves little room to work, which slows the computer and blocks new saves."
  },
  {
   "q": "Which of these is a good way to free up storage space?",
   "opts": [
    "Install more games",
    "Increase the screen brightness",
    "Empty the Recycle Bin and remove files you no longer need",
    "Change the desktop wallpaper"
   ],
   "correct": 2,
   "exp": "Deleting unneeded files and emptying the Recycle Bin recovers storage space."
  },
  {
   "q": "How can you check how much storage space is left on your computer?",
   "opts": [
    "By turning the monitor off",
    "By counting the keys on the keyboard",
    "By reading the mouse label",
    "By looking at This PC to see used and free space"
   ],
   "correct": 3,
   "exp": "This PC shows each drive with how much space is used and how much is free."
  }
 ],
 "Basic Computer Troubleshooting": [
  {
   "q": "What is often a good first step when a program suddenly freezes or the computer misbehaves?",
   "opts": [
    "Restart the computer",
    "Unplug the internet cable forever",
    "Pour water on the keyboard",
    "Throw the computer away"
   ],
   "correct": 0,
   "exp": "Restarting clears temporary glitches and fixes many common problems."
  },
  {
   "q": "Your computer will not turn on at all. What should you check first?",
   "opts": [
    "Whether the wallpaper is nice",
    "Whether the power cable is plugged in and switched on",
    "Whether the mouse is clean",
    "Whether the speakers are loud"
   ],
   "correct": 1,
   "exp": "Checking the power connection first rules out the simplest reason it won't start."
  },
  {
   "q": "What is a sensible troubleshooting habit when a problem appears?",
   "opts": [
    "Change many settings all at once randomly",
    "Ignore the problem completely",
    "Try one fix at a time and see if it helps",
    "Immediately reinstall Windows"
   ],
   "correct": 2,
   "exp": "Trying one change at a time shows you exactly which step solved the problem."
  }
 ],
 "Common Windows Problems": [
  {
   "q": "A program has stopped responding and is frozen. Which tool can help you close it?",
   "opts": [
    "The web browser",
    "The Calculator",
    "The Recycle Bin",
    "Task Manager"
   ],
   "correct": 3,
   "exp": "Task Manager lets you select a frozen program and end the task."
  },
  {
   "q": "Your computer is running very slowly. Which of these could commonly cause it?",
   "opts": [
    "Too many programs open at the same time",
    "Using a wireless mouse",
    "Having a large monitor",
    "Having a clean desktop"
   ],
   "correct": 0,
   "exp": "Many open programs use up memory and processing power, slowing the computer down."
  },
  {
   "q": "You cannot connect to the internet. What is a reasonable thing to check?",
   "opts": [
    "The color of the desktop",
    "Whether Wi-Fi is turned on and connected",
    "The number of files on the drive",
    "The font size in Word"
   ],
   "correct": 1,
   "exp": "Confirming Wi-Fi is on and connected addresses one of the most common causes of no internet."
  }
 ],
 "Safe Computer Maintenance": [
  {
   "q": "What should you do before cleaning the inside or hardware of a computer?",
   "opts": [
    "Open every program first",
    "Spray water inside it",
    "Turn it off and unplug it from power",
    "Increase the volume"
   ],
   "correct": 2,
   "exp": "Shutting down and unplugging prevents electric shock and damage while you clean."
  },
  {
   "q": "Which liquid habit keeps your computer safe?",
   "opts": [
    "Resting a cup of water on the laptop",
    "Cleaning the screen with lots of water",
    "Storing juice near the vents",
    "Keeping drinks far away from the keyboard"
   ],
   "correct": 3,
   "exp": "Keeping drinks away avoids spills that can damage the keyboard and internal parts."
  },
  {
   "q": "Why is it wise to protect your computer with a surge protector or stabilizer?",
   "opts": [
    "It guards against damage from power surges",
    "It makes files load faster",
    "It adds more storage",
    "It brightens the screen"
   ],
   "correct": 0,
   "exp": "A surge protector shields the computer from sudden voltage spikes that can harm it."
  }
 ],
 "Creating a Professional Document": [
  {
   "q": "Which feature helps a long professional document look organized with clear section titles?",
   "opts": [
    "Typing everything in capital letters",
    "Using heading styles for section titles",
    "Using ten different fonts",
    "Removing all spaces"
   ],
   "correct": 1,
   "exp": "Heading styles give sections a clear, consistent, professional structure."
  },
  {
   "q": "What makes a work document look more professional?",
   "opts": [
    "Bright rainbow colors on every word",
    "Many spelling mistakes",
    "Consistent fonts, spacing, and correct spelling",
    "Random picture placement"
   ],
   "correct": 2,
   "exp": "Consistent formatting and correct spelling make a document look neat and trustworthy."
  },
  {
   "q": "Before sending an important document, what should you always do?",
   "opts": [
    "Delete the title",
    "Change it to a strange font",
    "Remove your name",
    "Proofread it for spelling and grammar errors"
   ],
   "correct": 3,
   "exp": "Proofreading catches mistakes so the document looks careful and professional."
  }
 ],
 "Creating a Professional Spreadsheet": [
  {
   "q": "In a spreadsheet, what does a formula like =SUM(B2:B10) do?",
   "opts": [
    "Adds up the numbers in cells B2 to B10",
    "Deletes the cells",
    "Changes the color of the cells",
    "Prints the page"
   ],
   "correct": 0,
   "exp": "SUM adds together all the values in the range you select."
  },
  {
   "q": "What is a good way to make column data easy to understand in a spreadsheet?",
   "opts": [
    "Leave every column blank",
    "Add clear headings at the top of each column",
    "Mix numbers and words in one cell",
    "Hide all the columns"
   ],
   "correct": 1,
   "exp": "Clear column headings tell the reader what each set of numbers means."
  },
  {
   "q": "Which spreadsheet feature helps you present numbers visually to compare them?",
   "opts": [
    "Changing the file name",
    "Deleting the rows",
    "Inserting a chart",
    "Turning off the screen"
   ],
   "correct": 2,
   "exp": "A chart turns numbers into a picture that makes comparisons easy to see."
  }
 ],
 "Creating a Professional Presentation": [
  {
   "q": "What is a good rule for text on a presentation slide?",
   "opts": [
    "Fill the slide with long paragraphs",
    "Use tiny font so more fits",
    "Write no titles at all",
    "Keep it short with a few clear bullet points"
   ],
   "correct": 3,
   "exp": "Short bullet points are easy to read and keep the audience focused on your message."
  },
  {
   "q": "Why should slides use large, readable fonts?",
   "opts": [
    "So people at the back of the room can read them",
    "To use up more slides",
    "To make the file smaller",
    "To hide the content"
   ],
   "correct": 0,
   "exp": "Large fonts ensure everyone in the audience can read the slides clearly."
  },
  {
   "q": "Which mode do you use to display a presentation full screen to an audience?",
   "opts": [
    "Print Preview",
    "Slide Show mode",
    "Spell Check",
    "Save As"
   ],
   "correct": 1,
   "exp": "Slide Show mode presents the slides full screen for the audience."
  }
 ],
 "Professional Email Communication": [
  {
   "q": "What should a professional email always include to tell the reader what it is about?",
   "opts": [
    "Only emojis",
    "A blank subject",
    "A clear subject line",
    "A random number"
   ],
   "correct": 2,
   "exp": "A clear subject line quickly tells the reader the purpose of the email."
  },
  {
   "q": "Which greeting is most appropriate for a professional email to a manager?",
   "opts": [
    "Yo!",
    "hey u",
    "nothing at all",
    "Dear Mr. Johnson,"
   ],
   "correct": 3,
   "exp": "A polite greeting using the person's name sets a respectful, professional tone."
  },
  {
   "q": "What is the best practice before sending a work email?",
   "opts": [
    "Check the recipient address and proofread the message",
    "Attach random files",
    "Send it without reading",
    "Write in all capital letters"
   ],
   "correct": 0,
   "exp": "Checking the address and proofreading prevents mistakes and embarrassing errors."
  }
 ],
 "Managing Digital Files": [
  {
   "q": "What is the benefit of giving your files clear, descriptive names?",
   "opts": [
    "It makes the computer faster",
    "It helps you find and recognize files easily",
    "It changes the file type",
    "It adds more storage"
   ],
   "correct": 1,
   "exp": "Descriptive names let you identify and find the right file at a glance."
  },
  {
   "q": "What does a file extension like .docx or .jpg tell you?",
   "opts": [
    "Your internet speed",
    "The size of your screen",
    "The type of file it is",
    "The battery level"
   ],
   "correct": 2,
   "exp": "The extension shows the file type, such as a Word document or an image."
  },
  {
   "q": "Which is a good way to organize related work files?",
   "opts": [
    "Delete them after saving",
    "Scatter them across the desktop",
    "Give them all the same name",
    "Group them into folders and subfolders by project"
   ],
   "correct": 3,
   "exp": "Folders and subfolders grouped by project keep related files together and easy to manage."
  }
 ],
 "Online Collaboration": [
  {
   "q": "What is one advantage of using online collaboration tools like shared documents?",
   "opts": [
    "Several people can work on the same file together",
    "Only one person can ever open it",
    "The file cannot be shared",
    "It stops the internet from working"
   ],
   "correct": 0,
   "exp": "Shared online documents let multiple people view and edit the same file at once."
  },
  {
   "q": "Which tool would you use for an online video meeting with coworkers?",
   "opts": [
    "A calculator",
    "A video conferencing app like Zoom or Google Meet",
    "A photo printer",
    "The Recycle Bin"
   ],
   "correct": 1,
   "exp": "Video conferencing apps let teams meet and talk face to face online."
  },
  {
   "q": "When sharing a document online, what setting decides who can open it?",
   "opts": [
    "The battery level",
    "The font color",
    "The sharing or permission settings",
    "The screen brightness"
   ],
   "correct": 2,
   "exp": "Sharing permissions control who can view or edit the document."
  }
 ],
 "Digital Workplace Safety": [
  {
   "q": "Why should you use a strong, unique password for work accounts?",
   "opts": [
    "To change the wallpaper",
    "To slow down the computer",
    "To use more electricity",
    "To make them harder for others to guess or steal"
   ],
   "correct": 3,
   "exp": "Strong, unique passwords make it much harder for anyone to break into your accounts."
  },
  {
   "q": "You receive a work email asking for your password with a suspicious link. What should you do?",
   "opts": [
    "Do not click and report it as possible phishing",
    "Forward it to all coworkers",
    "Reply with your password",
    "Click the link quickly"
   ],
   "correct": 0,
   "exp": "Legitimate workplaces never ask for passwords by email, so treat it as phishing and report it."
  },
  {
   "q": "What is a safe habit when you step away from your work computer?",
   "opts": [
    "Leave it fully open and logged in",
    "Lock the screen so others cannot use it",
    "Remove the keyboard",
    "Turn up the volume"
   ],
   "correct": 1,
   "exp": "Locking the screen protects your work and data while you are away."
  }
 ]
};
  window.TIH_TOPIC_QUIZZES['ielts'] = {
 "English Alphabet & Pronunciation": [
  {
   "q": "How many letters are in the English alphabet?",
   "opts": [
    "24",
    "25",
    "26",
    "28"
   ],
   "correct": 2,
   "exp": "The English alphabet has 26 letters, from A to Z."
  },
  {
   "q": "Which group of letters are the vowels in English?",
   "opts": [
    "L, M, N, O, P",
    "B, C, D, F, G",
    "A, B, C, D, E",
    "A, E, I, O, U"
   ],
   "correct": 3,
   "exp": "A, E, I, O, U are the five vowels; all other letters are consonants."
  },
  {
   "q": "Which word contains a silent letter?",
   "opts": [
    "knife",
    "cat",
    "dog",
    "run"
   ],
   "correct": 0,
   "exp": "In knife the letter k is silent, so it is pronounced nife."
  }
 ],
 "Basic Grammar": [
  {
   "q": "Which sentence is grammatically correct?",
   "opts": [
    "She go to school every day.",
    "She goes to school every day.",
    "She going to school every day.",
    "She gone to school every day."
   ],
   "correct": 1,
   "exp": "With the subject she in present simple, the verb takes -s, so goes is correct."
  },
  {
   "q": "Which is the correct plural of the word child?",
   "opts": [
    "childs",
    "childes",
    "children",
    "childrens"
   ],
   "correct": 2,
   "exp": "Child has an irregular plural, children, not formed by adding -s."
  },
  {
   "q": "Choose the correct article: I saw ___ elephant at the zoo.",
   "opts": [
    "a",
    "no article",
    "the",
    "an"
   ],
   "correct": 3,
   "exp": "Elephant begins with a vowel sound, so it takes an."
  }
 ],
 "Parts of Speech": [
  {
   "q": "In the sentence The dog runs fast, which word is a verb?",
   "opts": [
    "runs",
    "dog",
    "fast",
    "the"
   ],
   "correct": 0,
   "exp": "Runs is the action word, which makes it the verb."
  },
  {
   "q": "Which word in this list is a noun?",
   "opts": [
    "quickly",
    "happiness",
    "beautiful",
    "and"
   ],
   "correct": 1,
   "exp": "Happiness names a thing or idea, so it is a noun."
  },
  {
   "q": "What part of speech is the word slowly in She walked slowly?",
   "opts": [
    "adjective",
    "noun",
    "adverb",
    "preposition"
   ],
   "correct": 2,
   "exp": "Slowly describes how the verb walked happens, so it is an adverb."
  }
 ],
 "Common Vocabulary": [
  {
   "q": "What is the opposite (antonym) of the word big?",
   "opts": [
    "large",
    "tall",
    "huge",
    "small"
   ],
   "correct": 3,
   "exp": "Small is the opposite of big; large and huge are synonyms of big."
  },
  {
   "q": "Which word means the same as happy?",
   "opts": [
    "glad",
    "angry",
    "sad",
    "tired"
   ],
   "correct": 0,
   "exp": "Glad is a synonym of happy."
  },
  {
   "q": "Which of these words is a type of fruit?",
   "opts": [
    "carrot",
    "banana",
    "potato",
    "onion"
   ],
   "correct": 1,
   "exp": "A banana is a fruit; the others are vegetables."
  }
 ],
 "Sentence Structure": [
  {
   "q": "What is the basic word order of a simple English sentence?",
   "opts": [
    "Verb, Subject, Object",
    "Object, Verb, Subject",
    "Subject, Verb, Object",
    "Subject, Object, Verb"
   ],
   "correct": 2,
   "exp": "English follows Subject, Verb, Object order, as in She eats rice."
  },
  {
   "q": "Which of these is a complete sentence?",
   "opts": [
    "Running in the park.",
    "The tall boy.",
    "Because it rained.",
    "Birds fly."
   ],
   "correct": 3,
   "exp": "Birds fly has both a subject and a verb, making it a complete sentence."
  },
  {
   "q": "In the sentence Mary reads books, which word is the object?",
   "opts": [
    "books",
    "reads",
    "Mary",
    "none"
   ],
   "correct": 0,
   "exp": "Books receives the action of the verb reads, so it is the object."
  }
 ],
 "Daily Conversations": [
  {
   "q": "What is a polite response when someone says Thank you?",
   "opts": [
    "Goodbye",
    "You are welcome",
    "How are you",
    "See you"
   ],
   "correct": 1,
   "exp": "You are welcome is the standard polite reply to Thank you."
  },
  {
   "q": "If a shopkeeper asks How much is this?, what are they asking about?",
   "opts": [
    "the size",
    "the color",
    "the price",
    "the time"
   ],
   "correct": 2,
   "exp": "How much is this? asks about the price of an item."
  },
  {
   "q": "Which reply best answers the question Would you like some water?",
   "opts": [
    "It is Monday.",
    "The store is open.",
    "My name is Sam.",
    "Yes, please."
   ],
   "correct": 3,
   "exp": "Yes, please is a natural, polite reply accepting the offer."
  }
 ],
 "Greetings & Introductions": [
  {
   "q": "Which greeting is most suitable early in the morning?",
   "opts": [
    "Good morning",
    "Good afternoon",
    "Good night",
    "Goodbye"
   ],
   "correct": 0,
   "exp": "Good morning is used to greet someone before noon."
  },
  {
   "q": "How do you politely respond to Nice to meet you?",
   "opts": [
    "No, thank you.",
    "Nice to meet you too.",
    "I am fine, go away.",
    "It is raining."
   ],
   "correct": 1,
   "exp": "Nice to meet you too returns the polite greeting."
  },
  {
   "q": "Which sentence correctly introduces yourself?",
   "opts": [
    "This is my friend Ama.",
    "She is a teacher.",
    "My name is John.",
    "They live in Monrovia."
   ],
   "correct": 2,
   "exp": "My name is John introduces yourself by giving your own name."
  }
 ],
 "Numbers, Dates & Time": [
  {
   "q": "How do you write the number fifteen in digits?",
   "opts": [
    "50",
    "500",
    "5",
    "15"
   ],
   "correct": 3,
   "exp": "Fifteen is written as 15."
  },
  {
   "q": "What time is it when the clock shows half past three?",
   "opts": [
    "3:30",
    "3:15",
    "3:45",
    "2:30"
   ],
   "correct": 0,
   "exp": "Half past three means thirty minutes after three, which is 3:30."
  },
  {
   "q": "Which of these is a correct way to say a date?",
   "opts": [
    "The twelve of August",
    "The twelfth of August",
    "August twelve day",
    "The month August twelve"
   ],
   "correct": 1,
   "exp": "Dates use ordinal numbers, so the twelfth of August is correct."
  }
 ],
 "Family & Friends": [
  {
   "q": "What do you call your mother's brother?",
   "opts": [
    "cousin",
    "nephew",
    "uncle",
    "grandfather"
   ],
   "correct": 2,
   "exp": "Your mother's brother is your uncle."
  },
  {
   "q": "Who is your sibling?",
   "opts": [
    "your friend",
    "your teacher",
    "your neighbour",
    "your brother or sister"
   ],
   "correct": 3,
   "exp": "A sibling is a brother or sister."
  },
  {
   "q": "What word describes the child of your aunt or uncle?",
   "opts": [
    "cousin",
    "grandchild",
    "niece",
    "in-law"
   ],
   "correct": 0,
   "exp": "The child of your aunt or uncle is your cousin."
  }
 ],
 "Describing People": [
  {
   "q": "Which word describes a person's height?",
   "opts": [
    "kind",
    "tall",
    "friendly",
    "clever"
   ],
   "correct": 1,
   "exp": "Tall describes physical height; the others describe personality."
  },
  {
   "q": "Which adjective describes someone's personality rather than appearance?",
   "opts": [
    "slim",
    "short",
    "generous",
    "bald"
   ],
   "correct": 2,
   "exp": "Generous describes a personality trait, while the others describe appearance."
  },
  {
   "q": "Complete the sentence: She has long, curly ___.",
   "opts": [
    "eyes",
    "shoes",
    "hands",
    "hair"
   ],
   "correct": 3,
   "exp": "Long and curly are words used to describe hair."
  }
 ],
 "Listening for Names and Numbers": [
  {
   "q": "When someone spells a name aloud in a listening test, what should you write?",
   "opts": [
    "each letter in order",
    "only the first letter",
    "just a summary",
    "the meaning of the name"
   ],
   "correct": 0,
   "exp": "You must note each letter in order to record the spelled name correctly."
  },
  {
   "q": "You hear the phone number double five, three, one. How is it written?",
   "opts": [
    "531",
    "5531",
    "553 1",
    "55 31"
   ],
   "correct": 1,
   "exp": "Double five means two fives, so it is 5531."
  },
  {
   "q": "Why is it important to listen for small differences like fifteen and fifty?",
   "opts": [
    "they mean the same",
    "they are both spellings of names",
    "they sound similar but are different numbers",
    "they are never used"
   ],
   "correct": 2,
   "exp": "Fifteen and fifty sound alike but are very different numbers, so careful listening matters."
  }
 ],
 "Listening for Directions": [
  {
   "q": "If you are told to turn left at the traffic lights, which way do you go?",
   "opts": [
    "to the right",
    "backwards",
    "straight ahead",
    "to the left"
   ],
   "correct": 3,
   "exp": "Turn left means you go to your left side."
  },
  {
   "q": "What does the instruction go straight on mean?",
   "opts": [
    "continue forward without turning",
    "stop walking",
    "turn around",
    "turn right"
   ],
   "correct": 0,
   "exp": "Go straight on means keep moving forward in the same direction."
  },
  {
   "q": "If the bank is opposite the school, where is it?",
   "opts": [
    "next to the school",
    "on the other side facing the school",
    "behind the school",
    "inside the school"
   ],
   "correct": 1,
   "exp": "Opposite means directly across, facing the school from the other side."
  }
 ],
 "Everyday Conversations": [
  {
   "q": "In a listening test, what does a speaker usually mean by Could you repeat that?",
   "opts": [
    "they want you to leave",
    "they agree fully",
    "they did not hear and want it said again",
    "they are ending the talk"
   ],
   "correct": 2,
   "exp": "Could you repeat that? asks the other person to say something again."
  },
  {
   "q": "A speaker says the meeting is put off until Friday. What happened to the meeting?",
   "opts": [
    "it was cancelled forever",
    "it is happening now",
    "it started early",
    "it was moved to a later time"
   ],
   "correct": 3,
   "exp": "Put off is a phrasal verb meaning to postpone, so it moved to a later time."
  },
  {
   "q": "If someone says I am afraid I cannot make it, what do they mean?",
   "opts": [
    "they cannot attend",
    "they are scared",
    "they are lost",
    "they will arrive early"
   ],
   "correct": 0,
   "exp": "I cannot make it politely means the person is unable to attend."
  }
 ],
 "Understanding Simple Instructions": [
  {
   "q": "The instruction says Fill in the form using capital letters. How should you write?",
   "opts": [
    "in small letters",
    "in uppercase letters",
    "in cursive only",
    "in numbers"
   ],
   "correct": 1,
   "exp": "Capital letters means uppercase letters such as A, B, C."
  },
  {
   "q": "If told Do not write more than three words, what is an acceptable answer?",
   "opts": [
    "a five word phrase",
    "a full sentence",
    "a two word phrase",
    "a paragraph"
   ],
   "correct": 2,
   "exp": "A two word phrase obeys the limit of no more than three words."
  },
  {
   "q": "The instruction says Choose two answers. How many should you select?",
   "opts": [
    "one",
    "all of them",
    "three",
    "two"
   ],
   "correct": 3,
   "exp": "Choose two answers means you must select exactly two."
  }
 ],
 "Note Completion Practice": [
  {
   "q": "In note completion, why should you predict the type of word before listening?",
   "opts": [
    "to know if you need a noun, number, or date",
    "to guess the whole answer",
    "to finish faster without listening",
    "to change the question"
   ],
   "correct": 0,
   "exp": "Predicting the word type helps you catch the right kind of answer when you hear it."
  },
  {
   "q": "If a note gap reads Cost: $___ , what kind of answer do you expect?",
   "opts": [
    "a name",
    "a number or amount",
    "a colour",
    "a place"
   ],
   "correct": 1,
   "exp": "The dollar sign signals that a number or amount belongs in the gap."
  },
  {
   "q": "What should you do if you miss one answer during note completion?",
   "opts": [
    "stop the whole test",
    "write anything random and panic",
    "keep listening for the next answers",
    "go back and replay it"
   ],
   "correct": 2,
   "exp": "You cannot replay the audio, so keep going and focus on the following answers."
  }
 ],
 "Form Completion Practice": [
  {
   "q": "On a form, what usually goes in the field labelled Surname?",
   "opts": [
    "your address",
    "your first name",
    "your age",
    "your family or last name"
   ],
   "correct": 3,
   "exp": "Surname means your family name or last name."
  },
  {
   "q": "A form asks for Date of Birth. What information is needed?",
   "opts": [
    "the day you were born",
    "today's date",
    "your appointment date",
    "the year you started school"
   ],
   "correct": 0,
   "exp": "Date of Birth is the day, month, and year you were born."
  },
  {
   "q": "If a form field says Postcode, what should you write there?",
   "opts": [
    "a phone number",
    "a mailing or area code for the address",
    "your full name",
    "an email"
   ],
   "correct": 1,
   "exp": "A postcode is the code used to identify a postal area or address."
  }
 ],
 "Skimming and Scanning": [
  {
   "q": "What is the main purpose of skimming a text?",
   "opts": [
    "to find one specific number",
    "to memorise every word",
    "to get the general idea quickly",
    "to check spelling"
   ],
   "correct": 2,
   "exp": "Skimming means reading quickly to understand the overall or general idea."
  },
  {
   "q": "When would you use scanning?",
   "opts": [
    "to translate the text",
    "to enjoy a story slowly",
    "to understand the writer's mood",
    "to find a specific name or date fast"
   ],
   "correct": 3,
   "exp": "Scanning is used to locate specific information such as a name, number, or date."
  },
  {
   "q": "Which reading skill helps you answer How many people attended? most efficiently?",
   "opts": [
    "scanning",
    "skimming",
    "reading every word",
    "reading the title only"
   ],
   "correct": 0,
   "exp": "Scanning quickly locates the specific number needed to answer the question."
  }
 ],
 "Finding Main Ideas": [
  {
   "q": "Where is the main idea of a paragraph often found?",
   "opts": [
    "hidden in the middle only",
    "in the first or topic sentence",
    "never stated",
    "only in the last word"
   ],
   "correct": 1,
   "exp": "The main idea is frequently expressed in the topic sentence, often the first sentence."
  },
  {
   "q": "What is the main idea of a paragraph?",
   "opts": [
    "a small supporting detail",
    "an example given",
    "the most important point it makes",
    "the longest sentence"
   ],
   "correct": 2,
   "exp": "The main idea is the central and most important point of the paragraph."
  },
  {
   "q": "Which of these is a supporting detail rather than a main idea?",
   "opts": [
    "Exercise improves health.",
    "Health matters to everyone.",
    "Staying healthy is important.",
    "For example, walking strengthens the heart."
   ],
   "correct": 3,
   "exp": "The example about walking supports and explains the broader main idea."
  }
 ],
 "Reading Advertisements": [
  {
   "q": "What is the main purpose of an advertisement?",
   "opts": [
    "to persuade you to buy or use something",
    "to teach grammar",
    "to tell a long story",
    "to report the news"
   ],
   "correct": 0,
   "exp": "Advertisements are written to persuade people to buy a product or use a service."
  },
  {
   "q": "In a job advert, what does the word required usually indicate?",
   "opts": [
    "something optional",
    "something you must have",
    "something forbidden",
    "something free"
   ],
   "correct": 1,
   "exp": "Required means the qualification or item is necessary and must be provided."
  },
  {
   "q": "If an advert says Sale ends Sunday, what information is this giving?",
   "opts": [
    "the price",
    "the shop's name",
    "the deadline for the offer",
    "the product colour"
   ],
   "correct": 2,
   "exp": "Sale ends Sunday tells you the last day, or deadline, of the offer."
  }
 ],
 "Reading Emails and Messages": [
  {
   "q": "What does the Subject line of an email tell you?",
   "opts": [
    "the password",
    "the sender's home address",
    "the time you must reply",
    "the topic of the email"
   ],
   "correct": 3,
   "exp": "The subject line briefly states what the email is about."
  },
  {
   "q": "If an email ends with Please reply by Friday, what is being requested?",
   "opts": [
    "a response before Friday",
    "to delete the message",
    "to forward it to everyone",
    "to ignore it"
   ],
   "correct": 0,
   "exp": "Please reply by Friday asks the reader to respond before that day."
  },
  {
   "q": "In a message, what does the greeting Dear Mr. Johnson suggest about its tone?",
   "opts": [
    "it is very casual",
    "it is formal and polite",
    "it is angry",
    "it is a joke"
   ],
   "correct": 1,
   "exp": "Dear followed by a title and surname signals a formal, polite tone."
  }
 ],
 "Reading Short Articles": [
  {
   "q": "What is usually the best way to start reading a short article for meaning?",
   "opts": [
    "count the paragraphs",
    "read only the last word",
    "read the title and first paragraph",
    "look at nothing"
   ],
   "correct": 2,
   "exp": "The title and first paragraph often reveal the article's topic and main point."
  },
  {
   "q": "If an article asks a question in its title, what is the writer likely to do in the text?",
   "opts": [
    "ignore the question",
    "list only names",
    "change the language",
    "answer or discuss that question"
   ],
   "correct": 3,
   "exp": "A question title signals that the article will explore or answer that question."
  },
  {
   "q": "What does the conclusion of a short article usually do?",
   "opts": [
    "sum up the main point",
    "introduce a brand new topic",
    "list the writer's address",
    "start the story"
   ],
   "correct": 0,
   "exp": "The conclusion usually summarises or restates the main point of the article."
  }
 ],
 "Vocabulary Building": [
  {
   "q": "What is a synonym?",
   "opts": [
    "a word with the opposite meaning",
    "a word with a similar meaning",
    "a spelling mistake",
    "a punctuation mark"
   ],
   "correct": 1,
   "exp": "A synonym is a word that has a similar meaning to another word."
  },
  {
   "q": "Using context, what does the underlined word mean in The arid desert had almost no water?",
   "opts": [
    "very wet",
    "very cold",
    "very dry",
    "very crowded"
   ],
   "correct": 2,
   "exp": "The clue almost no water shows that arid means very dry."
  },
  {
   "q": "What does the prefix un- usually add to a word, as in unhappy?",
   "opts": [
    "makes it plural",
    "makes it a question",
    "makes it past tense",
    "makes it a negative or opposite"
   ],
   "correct": 3,
   "exp": "The prefix un- reverses the meaning, so unhappy means not happy."
  }
 ],
 "Sentence Writing": [
  {
   "q": "Which of the following is a complete, correctly written sentence?",
   "opts": [
    "The students finished their exam on time.",
    "Running to the market every morning.",
    "Because the weather was hot.",
    "When we arrived at the school."
   ],
   "correct": 0,
   "exp": "It has a subject (The students) and a complete verb phrase (finished), so it stands alone as a full sentence."
  },
  {
   "q": "What is the minimum a group of words needs to be a complete sentence in English?",
   "opts": [
    "At least ten words",
    "A subject and a complete verb",
    "A comma and a conjunction",
    "An adjective and an adverb"
   ],
   "correct": 1,
   "exp": "Every complete sentence must contain a subject and a finite verb that together express a full idea."
  },
  {
   "q": "Which sentence correctly joins two complete ideas without an error?",
   "opts": [
    "I studied hard, I passed the test.",
    "I studied hard passed the test.",
    "I studied hard, and I passed the test.",
    "I studied, hard so passed test."
   ],
   "correct": 2,
   "exp": "A comma plus the coordinating conjunction 'and' correctly links two independent clauses."
  }
 ],
 "Paragraph Writing": [
  {
   "q": "What is the main job of a topic sentence in a paragraph?",
   "opts": [
    "To give a final example",
    "To list references and sources",
    "To ask the reader a question",
    "To state the main idea of the paragraph"
   ],
   "correct": 3,
   "exp": "The topic sentence introduces and controls the central idea that the rest of the paragraph develops."
  },
  {
   "q": "A well-structured paragraph should focus on how many main ideas?",
   "opts": [
    "One main idea",
    "Three main ideas",
    "As many as possible",
    "No main idea at all"
   ],
   "correct": 0,
   "exp": "Good paragraph unity means each paragraph develops a single controlling idea."
  },
  {
   "q": "Which word best signals that you are adding a supporting point in a paragraph?",
   "opts": [
    "However",
    "Furthermore",
    "Instead",
    "Nevertheless"
   ],
   "correct": 1,
   "exp": "'Furthermore' adds and reinforces an idea, while the others signal contrast."
  }
 ],
 "Describing Places": [
  {
   "q": "Which sentence best describes a place using vivid detail?",
   "opts": [
    "The market is a place.",
    "I went to the market.",
    "The market was busy, with colourful stalls and the smell of fresh fish.",
    "The market is good."
   ],
   "correct": 2,
   "exp": "It uses specific sensory details (colourful stalls, smell of fresh fish) to paint a clear picture."
  },
  {
   "q": "Which group of words are prepositions useful for describing where things are located?",
   "opts": [
    "happy, sad, tired",
    "quickly, slowly, well",
    "run, walk, sit",
    "beside, opposite, near"
   ],
   "correct": 3,
   "exp": "'Beside', 'opposite' and 'near' are prepositions of place that show location."
  },
  {
   "q": "When describing a place in IELTS Speaking, what should you also include besides its appearance?",
   "opts": [
    "How you feel about it and why it is special",
    "Nothing more than one adjective",
    "Only its exact map coordinates",
    "A list of unrelated places"
   ],
   "correct": 0,
   "exp": "Adding your feelings and reasons extends your answer and shows a fuller range of language."
  }
 ],
 "Writing Informal Emails": [
  {
   "q": "Which greeting is most appropriate for an informal email to a friend?",
   "opts": [
    "Dear Sir or Madam,",
    "Hi Musu,",
    "To Whom It May Concern,",
    "Respected Manager,"
   ],
   "correct": 1,
   "exp": "'Hi Musu,' is a friendly, casual opening suited to writing to a friend."
  },
  {
   "q": "Which closing best fits an informal email?",
   "opts": [
    "Yours faithfully,",
    "I remain your obedient servant,",
    "See you soon,",
    "Yours sincerely,"
   ],
   "correct": 2,
   "exp": "'See you soon,' is a relaxed, friendly sign-off appropriate for informal messages."
  },
  {
   "q": "Which sentence uses the informal, contracted style typical of a friendly email?",
   "opts": [
    "I am writing to inform you of my arrival.",
    "I would be most grateful for your response.",
    "Please find attached the requested document.",
    "I can't wait to see you next week!"
   ],
   "correct": 3,
   "exp": "The contraction 'can't' and the excited tone match the casual style of informal emails."
  }
 ],
 "Common Grammar Errors": [
  {
   "q": "Which sentence uses subject-verb agreement correctly?",
   "opts": [
    "My brother lives in Monrovia.",
    "The children plays outside.",
    "He walk to work.",
    "She go to school every day."
   ],
   "correct": 0,
   "exp": "The singular subject 'My brother' correctly takes the singular verb form 'lives'."
  },
  {
   "q": "Which sentence uses the article correctly?",
   "opts": [
    "I saw a elephant at the zoo.",
    "I saw an elephant at the zoo.",
    "I saw an dog in the yard.",
    "I saw a apple on the table."
   ],
   "correct": 1,
   "exp": "'An' is used before words beginning with a vowel sound, such as 'elephant'."
  },
  {
   "q": "Which sentence uses the correct past tense?",
   "opts": [
    "Yesterday I buyed new shoes.",
    "Yesterday I buy new shoes.",
    "Yesterday I bought new shoes.",
    "Yesterday I have buy new shoes."
   ],
   "correct": 2,
   "exp": "'Bought' is the correct irregular past tense of 'buy'."
  }
 ],
 "Self-Introduction": [
  {
   "q": "In IELTS Speaking Part 1, which is the best way to introduce yourself when asked your name?",
   "opts": [
    "My name is Sarah, but you can call me Sarah.",
    "Names.",
    "Why do you want to know my name?",
    "My full name is Sarah Kollie, and people usually call me Sarah."
   ],
   "correct": 3,
   "exp": "It gives the full name and a natural extra detail, showing fluency and confidence."
  },
  {
   "q": "Which question is the examiner LEAST likely to ask during a Part 1 self-introduction?",
   "opts": [
    "Can you explain quantum physics in detail?",
    "Do you work or study?",
    "Where are you from?",
    "What do you do in your free time?"
   ],
   "correct": 0,
   "exp": "Part 1 covers familiar personal topics, not complex academic explanations."
  },
  {
   "q": "Why should you avoid one-word answers when introducing yourself?",
   "opts": [
    "Because the examiner cannot hear you",
    "Because they show little range of language and fluency",
    "Because it is against the rules to speak",
    "Because you must always speak for five minutes"
   ],
   "correct": 1,
   "exp": "Extending answers demonstrates vocabulary, grammar and fluency, which the examiner assesses."
  }
 ],
 "Talking About Family": [
  {
   "q": "Which sentence correctly describes a family member using present tense?",
   "opts": [
    "My mother work as a nurse.",
    "My mother working as a nurse.",
    "My mother works as a nurse.",
    "My mother worked as a nurse now."
   ],
   "correct": 2,
   "exp": "The singular subject 'My mother' takes 'works' in the present simple tense."
  },
  {
   "q": "If asked 'Are you close to your family?', which is the strongest IELTS answer?",
   "opts": [
    "Yes.",
    "No.",
    "I don't know.",
    "Yes, very close. We eat dinner together every evening and share our news."
   ],
   "correct": 3,
   "exp": "It answers directly and adds a specific reason, extending the response naturally."
  },
  {
   "q": "Which word correctly completes: 'My father's brother is my ___.'?",
   "opts": [
    "uncle",
    "nephew",
    "cousin",
    "grandfather"
   ],
   "correct": 0,
   "exp": "Your father's brother is your uncle."
  }
 ],
 "Talking About Hobbies": [
  {
   "q": "Which sentence correctly uses a gerund to talk about a hobby?",
   "opts": [
    "I enjoy to swim on weekends.",
    "I enjoy swimming on weekends.",
    "I enjoy swim on weekends.",
    "I enjoy swum on weekends."
   ],
   "correct": 1,
   "exp": "The verb 'enjoy' is followed by the gerund form 'swimming'."
  },
  {
   "q": "If asked why you like a hobby, which answer best extends your response?",
   "opts": [
    "Because.",
    "It is a hobby.",
    "I like reading because it relaxes me and helps me learn new things.",
    "No reason."
   ],
   "correct": 2,
   "exp": "It gives clear reasons, which develops the answer and displays better language range."
  },
  {
   "q": "Which phrase best expresses how long you have done a hobby?",
   "opts": [
    "I will play football since ten.",
    "I am playing football ten years ago.",
    "I play football yesterday for years.",
    "I have played football since I was ten."
   ],
   "correct": 3,
   "exp": "The present perfect with 'since' correctly shows an action continuing from a point in the past until now."
  }
 ],
 "Talking About School": [
  {
   "q": "Which is the most natural way to answer a question about your favourite school subject?",
   "opts": [
    "My favourite subject was biology because I loved learning about living things.",
    "School.",
    "Yes, I went to school.",
    "Subjects are many."
   ],
   "correct": 0,
   "exp": "It answers directly and gives a reason, which extends the response effectively."
  },
  {
   "q": "Which sentence correctly uses the past tense to describe school life?",
   "opts": [
    "I go to primary school in Gbarnga.",
    "I went to primary school in Gbarnga.",
    "I goes to primary school in Gbarnga.",
    "I gone to primary school in Gbarnga."
   ],
   "correct": 1,
   "exp": "'Went' is the correct simple past tense of 'go' for describing past school life."
  },
  {
   "q": "Which word best describes a teacher who explains things clearly and patiently?",
   "opts": [
    "boring",
    "careless",
    "supportive",
    "strict"
   ],
   "correct": 2,
   "exp": "'Supportive' positively describes a helpful, patient teacher."
  }
 ],
 "Talking About Work": [
  {
   "q": "Which is the best full answer to the question 'What do you do?' in IELTS Speaking?",
   "opts": [
    "Work.",
    "Yes, I work.",
    "Job.",
    "I am a teacher, and I teach English at a secondary school in Monrovia."
   ],
   "correct": 3,
   "exp": "It states the job and adds detail about where and what you do, extending the answer."
  },
  {
   "q": "Which sentence correctly describes your daily work routine?",
   "opts": [
    "I usually start work at eight o'clock.",
    "I usually starting work at eight o'clock.",
    "I usually starts work at eight o'clock.",
    "I usually started work at eight o'clock every day now."
   ],
   "correct": 0,
   "exp": "The present simple 'start' with 'I' correctly describes a regular routine."
  },
  {
   "q": "Which phrase best describes something you like about your job?",
   "opts": [
    "The most boring part is helping people.",
    "What I enjoy most is helping people every day.",
    "Helping people is my worst part.",
    "I hate helping people the most."
   ],
   "correct": 1,
   "exp": "'What I enjoy most is...' clearly and positively highlights a good aspect of the job."
  }
 ],
 "Basic Fluency Practice": [
  {
   "q": "In IELTS Speaking, what does 'fluency' mainly refer to?",
   "opts": [
    "Speaking with a perfect British accent",
    "Using only very long words",
    "Speaking smoothly at a natural pace without too many pauses",
    "Speaking as fast as possible"
   ],
   "correct": 2,
   "exp": "Fluency is about speaking smoothly and continuously at a natural pace, not about accent or speed."
  },
  {
   "q": "Which is a useful filler phrase to keep speaking naturally while you think?",
   "opts": [
    "Silence for ten seconds.",
    "I don't know, stop.",
    "No comment.",
    "Well, let me think about that for a moment."
   ],
   "correct": 3,
   "exp": "A natural filler phrase buys thinking time while keeping your speech flowing."
  },
  {
   "q": "Which habit most improves fluency for a Liberian IELTS learner?",
   "opts": [
    "Speaking English regularly and practising every day",
    "Only reading silently",
    "Memorising long answers word for word",
    "Never making any mistakes"
   ],
   "correct": 0,
   "exp": "Regular spoken practice builds the automatic ease that fluency requires."
  }
 ],
 "Multiple Choice Questions": [
  {
   "q": "In IELTS Listening multiple choice, what should you do before the audio starts?",
   "opts": [
    "Close your eyes and relax",
    "Read the question and underline key words",
    "Write your name repeatedly",
    "Answer all questions from memory"
   ],
   "correct": 1,
   "exp": "Reading and underlining key words helps you predict and catch the answer as you listen."
  },
  {
   "q": "Why are the wrong options in a listening multiple choice question often mentioned in the audio?",
   "opts": [
    "To help you choose them",
    "By mistake in the recording",
    "To distract you, as they are deliberate distractors",
    "Because they are always correct"
   ],
   "correct": 2,
   "exp": "Distractors are intentionally spoken to test whether you catch the precise correct answer."
  },
  {
   "q": "If you are unsure of the answer in the listening MCQ, what is the best strategy?",
   "opts": [
    "Leave it blank forever",
    "Write all four options",
    "Stop the whole test",
    "Make your best guess and move on"
   ],
   "correct": 3,
   "exp": "There is no penalty for wrong answers, so guessing and moving on avoids missing later questions."
  }
 ],
 "Map Labelling": [
  {
   "q": "In an IELTS map-labelling task, which language is most important to understand?",
   "opts": [
    "Directions and prepositions of place, like 'opposite' and 'next to'",
    "Advanced legal vocabulary",
    "Names of famous people",
    "Complex mathematical formulas"
   ],
   "correct": 0,
   "exp": "Map tasks rely on following directions and location words such as 'opposite' and 'next to'."
  },
  {
   "q": "Before the audio begins in a map task, what should you do first?",
   "opts": [
    "Memorise the whole map",
    "Find the starting point, such as the entrance or 'You are here' marker",
    "Colour in the map",
    "Ignore the labels"
   ],
   "correct": 1,
   "exp": "Locating the starting point lets you follow the speaker's directions accurately."
  },
  {
   "q": "If the speaker says 'turn left and it is the second building on your right', what skill is being tested?",
   "opts": [
    "Spelling of long words",
    "Adding numbers together",
    "Following spoken directions on a map",
    "Reading a graph"
   ],
   "correct": 2,
   "exp": "The task tests your ability to track directions and orientation as you listen."
  }
 ],
 "Table Completion": [
  {
   "q": "In IELTS Listening table completion, why should you read the column and row headings first?",
   "opts": [
    "To decorate the table",
    "Because they are the answers",
    "To count the total boxes",
    "To predict what type of information each gap needs"
   ],
   "correct": 3,
   "exp": "Headings tell you whether a gap needs a name, number, date or other detail, so you listen for the right thing."
  },
  {
   "q": "If a table gap is under a heading called 'Price', what should you listen for?",
   "opts": [
    "A cost or amount of money",
    "A person's name",
    "A colour",
    "A day of the week"
   ],
   "correct": 0,
   "exp": "The 'Price' heading signals that the missing information is a cost or amount of money."
  },
  {
   "q": "What must you always check about the number of words allowed in table completion?",
   "opts": [
    "The examiner's name",
    "The word limit stated in the instructions",
    "The colour of the paper",
    "The date of the test"
   ],
   "correct": 1,
   "exp": "Answers that exceed the stated word limit are marked wrong, so you must follow it exactly."
  }
 ],
 "Sentence Completion": [
  {
   "q": "In IELTS Listening sentence completion, what should your answer do?",
   "opts": [
    "Change the meaning of the sentence",
    "Always be a full paragraph",
    "Fit grammatically and make sense in the sentence",
    "Ignore the words around the gap"
   ],
   "correct": 2,
   "exp": "The word you write must fit the grammar and meaning of the surrounding sentence."
  },
  {
   "q": "If the instruction says 'Write NO MORE THAN TWO WORDS', which answer is acceptable?",
   "opts": [
    "a very large modern building",
    "the modern building over there",
    "building that is modern and large",
    "modern building"
   ],
   "correct": 3,
   "exp": "'Modern building' is two words and respects the stated limit."
  },
  {
   "q": "Why is it important to predict the type of word needed before listening?",
   "opts": [
    "It helps you recognise the answer, such as a noun or number, when you hear it",
    "It is against the rules",
    "It changes the recording",
    "It wastes time"
   ],
   "correct": 0,
   "exp": "Predicting the word type primes you to catch the correct answer as the audio plays."
  }
 ],
 "Summary Completion": [
  {
   "q": "In IELTS Listening summary completion, what is the summary usually based on?",
   "opts": [
    "A random unrelated topic",
    "The main ideas of the recording in shortened form",
    "The examiner's opinion",
    "A completely different test"
   ],
   "correct": 1,
   "exp": "The summary restates the recording's key points, and you fill gaps with words you hear."
  },
  {
   "q": "What is a key challenge of summary completion compared with a simple gap fill?",
   "opts": [
    "There are no gaps to fill",
    "You must draw a picture",
    "The summary often paraphrases the audio, so exact words may differ",
    "You cannot listen to the audio"
   ],
   "correct": 2,
   "exp": "Because the summary paraphrases, you must listen for meaning, not just matching words."
  },
  {
   "q": "When completing a summary, your answers must be taken from where?",
   "opts": [
    "Your imagination",
    "Any dictionary",
    "The other test sections",
    "The words you hear in the recording"
   ],
   "correct": 3,
   "exp": "Summary completion answers must come from words actually spoken in the recording."
  }
 ],
 "Academic Listening": [
  {
   "q": "IELTS Academic Listening Section 4 typically features what kind of recording?",
   "opts": [
    "A university lecture or academic monologue",
    "A casual chat between two friends",
    "A song on the radio",
    "A shopping advertisement"
   ],
   "correct": 0,
   "exp": "Section 4 is usually a single-speaker academic lecture on a study-related topic."
  },
  {
   "q": "What listening skill is especially important for academic lectures?",
   "opts": [
    "Ignoring signposting language",
    "Recognising signposting words that show the structure of the talk",
    "Only listening to the first sentence",
    "Counting the speaker's pauses"
   ],
   "correct": 1,
   "exp": "Signposting words like 'firstly' and 'in conclusion' guide you through the lecture's structure."
  },
  {
   "q": "Why is note-taking practice valuable for academic listening?",
   "opts": [
    "It removes the need to listen",
    "It lets you replay the audio",
    "It helps you follow and record key points as you listen once",
    "It gives you extra time on the test"
   ],
   "correct": 2,
   "exp": "The audio plays only once, so quick note-taking captures key points before they pass."
  }
 ],
 "Matching Headings": [
  {
   "q": "In an IELTS Matching Headings task, what should each heading you choose reflect?",
   "opts": [
    "A single supporting detail in the paragraph",
    "The first sentence of the paragraph copied exactly",
    "A statistic mentioned in the paragraph",
    "The main idea or overall point of the paragraph"
   ],
   "correct": 3,
   "exp": "Headings summarise the central idea of a whole paragraph, not one detail or figure."
  },
  {
   "q": "Why does a Matching Headings list usually contain more headings than paragraphs?",
   "opts": [
    "Because extra headings act as distractors that are not used",
    "Because some paragraphs need two headings",
    "To reward guessing",
    "Because the order is always reversed"
   ],
   "correct": 0,
   "exp": "There are extra headings that will not be used, so you must reject the distractors."
  },
  {
   "q": "What is the best strategy for tackling a Matching Headings question?",
   "opts": [
    "Match headings to random paragraphs quickly",
    "Read the headings first, then skim each paragraph for its main idea",
    "Only read the first line of the passage",
    "Choose headings that share the most words with the paragraph"
   ],
   "correct": 1,
   "exp": "Reading headings first then identifying each paragraph's main idea avoids being tricked by shared vocabulary."
  }
 ],
 "True/False/Not Given": [
  {
   "q": "In a True/False/Not Given task, when should you answer 'Not Given'?",
   "opts": [
    "When the statement contradicts the text",
    "When the statement matches the text exactly",
    "When the text neither confirms nor contradicts the statement",
    "When the statement is your own opinion"
   ],
   "correct": 2,
   "exp": "'Not Given' means the passage provides no information to confirm or contradict the statement."
  },
  {
   "q": "You should mark a statement 'False' when it does what to the information in the passage?",
   "opts": [
    "Repeats it using synonyms",
    "Leaves it unmentioned",
    "Adds extra detail not in the text",
    "Directly contradicts it"
   ],
   "correct": 3,
   "exp": "'False' applies when the statement clearly contradicts what the passage states."
  },
  {
   "q": "These questions ask you to judge statements against what?",
   "opts": [
    "The factual information stated in the passage",
    "The writer's opinions and claims",
    "Your general knowledge of the topic",
    "Other students' answers"
   ],
   "correct": 0,
   "exp": "True/False/Not Given tests factual information given in the text, not the writer's views or your knowledge."
  }
 ],
 "Yes/No/Not Given": [
  {
   "q": "How does Yes/No/Not Given differ from True/False/Not Given?",
   "opts": [
    "It uses numbers instead of letters",
    "It tests the writer's opinions or claims rather than facts",
    "It has five possible answers",
    "It only appears in listening tests"
   ],
   "correct": 1,
   "exp": "Yes/No/Not Given focuses on the writer's views and claims, whereas True/False/Not Given tests facts."
  },
  {
   "q": "You should answer 'Yes' when the statement does what?",
   "opts": [
    "Contradicts the writer's opinion",
    "Is not discussed by the writer",
    "Agrees with the writer's opinion or claim",
    "Is grammatically correct"
   ],
   "correct": 2,
   "exp": "'Yes' means the statement agrees with the opinion or claim the writer expresses."
  },
  {
   "q": "What does 'Not Given' mean in a Yes/No/Not Given task?",
   "opts": [
    "The writer strongly disagrees",
    "The statement is only partly true",
    "The statement is false",
    "The writer expresses no view on that point"
   ],
   "correct": 3,
   "exp": "'Not Given' means the writer states no opinion on that particular point."
  }
 ],
 "Matching Information": [
  {
   "q": "In a Matching Information task, what are you asked to do?",
   "opts": [
    "Find which paragraph contains a specific piece of information",
    "Put paragraphs in chronological order",
    "Choose a heading for the whole passage",
    "Correct grammar mistakes in the text"
   ],
   "correct": 0,
   "exp": "You locate which paragraph holds a stated detail such as an example, reason or comparison."
  },
  {
   "q": "Why can Matching Information questions be time-consuming?",
   "opts": [
    "You must translate each paragraph",
    "The information may appear in any paragraph, and paragraphs can be used more than once",
    "The answers are always in order",
    "There is only one paragraph to read"
   ],
   "correct": 1,
   "exp": "The details are not in passage order and a paragraph may be the answer to more than one question."
  },
  {
   "q": "Which skill is most useful for Matching Information questions?",
   "opts": [
    "Guessing based on the title",
    "Memorising the whole passage",
    "Scanning for specific details like examples or reasons",
    "Reading only the conclusion"
   ],
   "correct": 2,
   "exp": "Scanning helps you quickly locate the specific type of information described in each question."
  }
 ],
 "Diagram Labelling": [
  {
   "q": "When labelling a diagram in IELTS Reading, where do your answers come from?",
   "opts": [
    "Your own knowledge of the object",
    "A separate vocabulary list",
    "The diagram's caption only",
    "Words taken from the passage"
   ],
   "correct": 3,
   "exp": "Diagram labels must be words found in the reading passage, usually within a word limit."
  },
  {
   "q": "What must you check carefully before writing a diagram label?",
   "opts": [
    "The word limit stated in the instructions",
    "The colour of the diagram",
    "The author's name",
    "The number of paragraphs"
   ],
   "correct": 0,
   "exp": "Instructions set a word limit, so exceeding it makes the answer incorrect."
  },
  {
   "q": "Which reading skill helps you match labels to parts of a diagram?",
   "opts": [
    "Reading the passage backwards",
    "Locating the paragraph that describes that part of the process or object",
    "Counting the words in each paragraph",
    "Ignoring the passage and using logic"
   ],
   "correct": 1,
   "exp": "You find where the passage describes that component, then take the correct word from it."
  }
 ],
 "Reading Academic Texts": [
  {
   "q": "What does skimming an academic text help you do?",
   "opts": [
    "Memorise every word",
    "Find one specific number",
    "Get the general idea and structure quickly",
    "Correct the writer's argument"
   ],
   "correct": 2,
   "exp": "Skimming gives you the overall gist and organisation before you read for detail."
  },
  {
   "q": "In IELTS, what is scanning used for?",
   "opts": [
    "Understanding the main argument",
    "Summarising the conclusion",
    "Judging the writer's tone",
    "Locating specific details such as names, dates or figures"
   ],
   "correct": 3,
   "exp": "Scanning means searching quickly for particular pieces of information like dates or names."
  },
  {
   "q": "Why is it unwise to spend too long on one difficult question in the Reading test?",
   "opts": [
    "All questions carry equal marks, so you may miss easier ones",
    "The test has no time limit",
    "Difficult questions are worth more points",
    "You lose marks for skipping"
   ],
   "correct": 0,
   "exp": "Every question is worth one mark, so managing time lets you secure the easier answers."
  }
 ],
 "Introduction to Task 1": [
  {
   "q": "In Academic Writing Task 1, what should your introduction do?",
   "opts": [
    "Give your personal opinion on the topic",
    "Paraphrase what the chart or graph shows",
    "Predict future trends",
    "List every number in the data"
   ],
   "correct": 1,
   "exp": "A Task 1 introduction paraphrases the question by restating what the visual presents."
  },
  {
   "q": "What is the minimum word count for Writing Task 1?",
   "opts": [
    "100 words",
    "200 words",
    "150 words",
    "250 words"
   ],
   "correct": 2,
   "exp": "Task 1 requires at least 150 words; writing fewer loses marks."
  },
  {
   "q": "Which element should NOT appear in an Academic Task 1 response?",
   "opts": [
    "An overview of main trends",
    "Key supporting figures",
    "An accurate paraphrase of the task",
    "Your personal opinion or recommendations"
   ],
   "correct": 3,
   "exp": "Task 1 is a factual report, so personal opinions and recommendations do not belong."
  }
 ],
 "Charts and Graphs": [
  {
   "q": "What is the purpose of an overview sentence in a Task 1 answer about a chart?",
   "opts": [
    "To summarise the most noticeable trends or features",
    "To give the exact source of the data",
    "To offer a solution to a problem",
    "To describe every single data point"
   ],
   "correct": 0,
   "exp": "The overview highlights the main, most striking features without listing all details."
  },
  {
   "q": "When a chart shows change over time, which tense is most appropriate for past dates?",
   "opts": [
    "Present simple",
    "Past simple",
    "Present continuous",
    "Future perfect"
   ],
   "correct": 1,
   "exp": "Past dates require the past simple to describe completed changes."
  },
  {
   "q": "How should you select which figures to include from a detailed chart?",
   "opts": [
    "Include every number shown",
    "Only include the smallest values",
    "Choose the most significant or representative figures",
    "Avoid numbers altogether"
   ],
   "correct": 2,
   "exp": "You select key, representative figures to support your description rather than listing them all."
  }
 ],
 "Tables": [
  {
   "q": "When describing a table in Task 1, what makes a good overview?",
   "opts": [
    "Reading out each cell in order",
    "Describing the table's colours",
    "Explaining why the data was collected",
    "Identifying the highest and lowest values or clearest patterns"
   ],
   "correct": 3,
   "exp": "A strong overview points out extremes and overall patterns rather than every cell."
  },
  {
   "q": "Tables often contain a lot of numbers. What should you do to score well?",
   "opts": [
    "Group and compare related figures instead of listing them all",
    "Copy every figure into your answer",
    "Ignore the numbers and describe categories only",
    "Convert all numbers to percentages you invent"
   ],
   "correct": 0,
   "exp": "Grouping and comparing selected figures shows analysis, which listing every number does not."
  },
  {
   "q": "Which language is useful for comparing values in a table?",
   "opts": [
    "Only past continuous verbs",
    "Comparatives and superlatives such as higher, the highest",
    "Conditional sentences with 'if'",
    "Direct speech quotations"
   ],
   "correct": 1,
   "exp": "Comparatives and superlatives let you compare and rank the values clearly."
  }
 ],
 "Pie Charts": [
  {
   "q": "Pie charts are best described using which type of language?",
   "opts": [
    "Precise growth rates per year",
    "Distances in kilometres",
    "Proportions and percentages such as a quarter or 25 percent",
    "Temperatures in degrees"
   ],
   "correct": 2,
   "exp": "Pie charts show parts of a whole, so proportions and percentages are the natural language."
  },
  {
   "q": "Which phrase correctly describes a segment making up 50 percent of a pie chart?",
   "opts": [
    "A small fraction",
    "Roughly one tenth",
    "A slight majority above 90 percent",
    "Half of the total"
   ],
   "correct": 3,
   "exp": "Fifty percent equals half of the total amount shown."
  },
  {
   "q": "When two pie charts show the same categories at different dates, what should you do?",
   "opts": [
    "Compare how the proportions changed between the two dates",
    "Describe only the first chart",
    "Add up all the percentages",
    "Ignore the smaller segments"
   ],
   "correct": 0,
   "exp": "With two dated pie charts you compare the shifts in proportion over time."
  }
 ],
 "Line Graphs": [
  {
   "q": "Line graphs are especially good for showing what?",
   "opts": [
    "Parts of a whole",
    "Trends and changes over time",
    "The exact location of places",
    "Steps in a process"
   ],
   "correct": 1,
   "exp": "Line graphs illustrate how values rise, fall or fluctuate over a period."
  },
  {
   "q": "Which phrase best describes a line that goes up quickly?",
   "opts": [
    "A gradual decline",
    "Remained stable",
    "A sharp increase",
    "A slight dip"
   ],
   "correct": 2,
   "exp": "A quick upward movement is described as a sharp or rapid increase."
  },
  {
   "q": "How would you describe a line that stays at the same level over time?",
   "opts": [
    "It plummeted",
    "It fluctuated wildly",
    "It soared",
    "It remained stable or leveled off"
   ],
   "correct": 3,
   "exp": "A flat, unchanging line means the value remained stable or leveled off."
  }
 ],
 "Bar Charts": [
  {
   "q": "Bar charts are most useful for doing what?",
   "opts": [
    "Comparing quantities across different categories",
    "Displaying stages of a natural cycle",
    "Showing a continuous trend every second",
    "Giving directions on a map"
   ],
   "correct": 0,
   "exp": "Bar charts compare amounts between separate categories or groups."
  },
  {
   "q": "If a bar is the tallest on the chart, how should you describe its value?",
   "opts": [
    "The lowest figure",
    "The highest figure",
    "An average figure",
    "A negative figure"
   ],
   "correct": 1,
   "exp": "The tallest bar represents the highest or greatest value shown."
  },
  {
   "q": "What is a good approach when a bar chart has many categories?",
   "opts": [
    "Describe each bar one by one with no grouping",
    "Only mention the middle bar",
    "Group similar bars and highlight notable comparisons",
    "Convert the bars into a pie chart"
   ],
   "correct": 2,
   "exp": "Grouping bars and highlighting key comparisons produces a clearer, higher-scoring report."
  }
 ],
 "Process Diagrams": [
  {
   "q": "Which language feature is commonly used to describe a process diagram in Task 1?",
   "opts": [
    "Personal opinions and 'I think'",
    "Comparatives such as bigger than",
    "Percentages of a whole",
    "The passive voice and sequencing words like first, then, finally"
   ],
   "correct": 3,
   "exp": "Processes are usually described with the passive voice and sequence markers to show stages."
  },
  {
   "q": "What should the overview of a process diagram mention?",
   "opts": [
    "The total number of stages and whether it is a cycle or linear",
    "Your opinion of the process",
    "The exact percentages involved",
    "The colours used in the diagram"
   ],
   "correct": 0,
   "exp": "A process overview notes how many stages there are and whether it is linear or cyclical."
  },
  {
   "q": "For a process with no dates, which tense is usually appropriate?",
   "opts": [
    "Past perfect",
    "Present simple",
    "Future continuous",
    "Past continuous"
   ],
   "correct": 1,
   "exp": "Timeless processes are normally described in the present simple, often passive."
  }
 ],
 "Maps": [
  {
   "q": "When comparing two maps of the same place at different times, what do you describe?",
   "opts": [
    "Your opinion on the planning decisions",
    "The percentage of each land use",
    "The changes and developments between the two periods",
    "A step-by-step manufacturing process"
   ],
   "correct": 2,
   "exp": "Map tasks require you to describe how the place changed or developed over time."
  },
  {
   "q": "Which language is most useful for describing locations on a map?",
   "opts": [
    "Sequencers like firstly and finally only",
    "Comparatives like faster than",
    "Percentages and fractions",
    "Prepositions of place such as to the north of, next to, opposite"
   ],
   "correct": 3,
   "exp": "Prepositions of place and direction help describe where features are located."
  },
  {
   "q": "If a forest on the earlier map becomes houses on the later map, how do you describe this?",
   "opts": [
    "The forest was replaced by or converted into housing",
    "The forest increased sharply",
    "The forest remained unchanged",
    "The forest fluctuated"
   ],
   "correct": 0,
   "exp": "When one feature becomes another, you say it was replaced by or converted into the new feature."
  }
 ],
 "Comparing Data": [
  {
   "q": "Which structure correctly compares two values that are very close?",
   "opts": [
    "Far higher than",
    "Slightly higher than",
    "Twice as high as",
    "Nowhere near"
   ],
   "correct": 1,
   "exp": "'Slightly higher than' expresses a small difference between two close values."
  },
  {
   "q": "To say two figures are exactly equal, which phrase is best?",
   "opts": [
    "A fraction of",
    "Far more than",
    "The same as",
    "Considerably less than"
   ],
   "correct": 2,
   "exp": "'The same as' shows that two values are equal."
  },
  {
   "q": "Which word signals a contrast between two data points?",
   "opts": [
    "Similarly",
    "Because",
    "Therefore",
    "Whereas"
   ],
   "correct": 3,
   "exp": "'Whereas' introduces a contrast, highlighting a difference between two figures."
  }
 ],
 "Task 1 Vocabulary": [
  {
   "q": "Which word is a synonym for a large increase in Task 1 writing?",
   "opts": [
    "Surge",
    "Dip",
    "Plunge",
    "Plateau"
   ],
   "correct": 0,
   "exp": "'Surge' means a strong, large increase, while the others describe falls or flatness."
  },
  {
   "q": "Which pair correctly matches a verb of decrease with its noun form?",
   "opts": [
    "To rise / a rise",
    "To decline / a decline",
    "To grow / a growth",
    "To climb / a climb"
   ],
   "correct": 1,
   "exp": "'Decline' is a decrease as both verb and noun; the others describe increases."
  },
  {
   "q": "Which adverb best describes a very small change in data?",
   "opts": [
    "Substantially",
    "Dramatically",
    "Marginally",
    "Steeply"
   ],
   "correct": 2,
   "exp": "'Marginally' means by a very small amount, unlike the others which show large change."
  }
 ],
 "Essay Structure": [
  {
   "q": "In a standard IELTS Task 2 essay, what is the main purpose of the introduction?",
   "opts": [
    "To list every idea you will mention in detail",
    "To write the conclusion early",
    "To give your personal life story",
    "To paraphrase the question and state your overall response"
   ],
   "correct": 3,
   "exp": "A good introduction rephrases the task and previews your position or approach."
  },
  {
   "q": "How many body paragraphs are typically recommended for a Task 2 essay?",
   "opts": [
    "Two well-developed paragraphs",
    "Six short paragraphs",
    "One long paragraph",
    "No body paragraphs at all"
   ],
   "correct": 0,
   "exp": "Two focused body paragraphs give enough space to develop and support each main idea."
  },
  {
   "q": "What should each body paragraph ideally contain?",
   "opts": [
    "Only a list of unconnected facts",
    "A topic sentence, explanation, and a supporting example",
    "Several unrelated topics mixed together",
    "Just a quotation from a famous person"
   ],
   "correct": 1,
   "exp": "A clear topic sentence with explanation and an example makes each paragraph coherent and complete."
  }
 ],
 "Opinion Essays": [
  {
   "q": "In an opinion (agree/disagree) essay, what must you make clear from the start?",
   "opts": [
    "That you have no opinion",
    "Only the opposing view",
    "Your own clear position on the statement",
    "A summary of every possible view without choosing"
   ],
   "correct": 2,
   "exp": "Opinion essays require you to state and maintain one clear position throughout."
  },
  {
   "q": "Which phrase best introduces your personal stance in an opinion essay?",
   "opts": [
    "Some people might possibly think somewhere that",
    "Everyone always agrees on this issue",
    "It is impossible to say anything at all",
    "In my view, the benefits clearly outweigh the drawbacks"
   ],
   "correct": 3,
   "exp": "A phrase like In my view directly signals your clear personal position."
  },
  {
   "q": "What is a common mistake that weakens an opinion essay?",
   "opts": [
    "Switching your position and sounding unsure",
    "Staying on topic throughout",
    "Giving reasons that support your view",
    "Using a clear thesis statement"
   ],
   "correct": 0,
   "exp": "Changing your position mid-essay confuses the reader and lowers the task response score."
  }
 ],
 "Discussion Essays": [
  {
   "q": "What does a discussion (discuss both views) essay require you to do?",
   "opts": [
    "Discuss only the view you agree with",
    "Present both sides and usually give your own opinion",
    "Avoid giving any opinion ever",
    "Only describe a personal experience"
   ],
   "correct": 1,
   "exp": "Discussion essays ask you to examine both viewpoints and typically state your own view."
  },
  {
   "q": "How should the two opposing views usually be organised?",
   "opts": [
    "Both views crammed into one sentence",
    "Randomly mixed with no structure",
    "One view per body paragraph",
    "Only in the conclusion"
   ],
   "correct": 2,
   "exp": "Dedicating one body paragraph to each view keeps the discussion clear and balanced."
  },
  {
   "q": "Which linking phrase best introduces the second, contrasting view?",
   "opts": [
    "For example",
    "As a result",
    "In conclusion",
    "On the other hand"
   ],
   "correct": 3,
   "exp": "On the other hand signals a shift to the opposing viewpoint in a discussion essay."
  }
 ],
 "Problem-Solution Essays": [
  {
   "q": "What two main elements must a problem-solution essay address?",
   "opts": [
    "The causes or problems and their solutions",
    "Only advantages and disadvantages",
    "A story and a poem",
    "Two opposing opinions only"
   ],
   "correct": 0,
   "exp": "This essay type requires identifying the problem(s) and proposing realistic solution(s)."
  },
  {
   "q": "Which of these is the best way to present a solution?",
   "opts": [
    "Only name it with no explanation",
    "State it and explain how it would help",
    "List ten solutions in one line",
    "Ignore whether it is realistic"
   ],
   "correct": 1,
   "exp": "A strong solution is explained and shown to address the stated problem effectively."
  },
  {
   "q": "Which verb tense or form is most useful when proposing solutions?",
   "opts": [
    "Past simple for finished events",
    "Only the present perfect",
    "Modal verbs like should and could",
    "No verbs at all"
   ],
   "correct": 2,
   "exp": "Modals such as should and could express suggestions and recommended actions clearly."
  }
 ],
 "Advantages & Disadvantages Essays": [
  {
   "q": "In an advantages and disadvantages essay, what must you cover?",
   "opts": [
    "Only the advantages",
    "Only the disadvantages",
    "A single unrelated opinion",
    "Both the benefits and the drawbacks"
   ],
   "correct": 3,
   "exp": "This essay type requires a balanced treatment of both positive and negative points."
  },
  {
   "q": "If the prompt asks whether advantages outweigh disadvantages, what must you also do?",
   "opts": [
    "Give a clear judgement on which side is stronger",
    "Refuse to decide",
    "Only describe advantages",
    "Copy the question word for word"
   ],
   "correct": 0,
   "exp": "An outweigh question requires you to weigh the sides and state a clear conclusion."
  },
  {
   "q": "Which sentence best signals a disadvantage?",
   "opts": [
    "One major benefit is that costs fall",
    "However, a significant drawback is the loss of jobs",
    "Therefore, everyone is happier",
    "For instance, it saves time"
   ],
   "correct": 1,
   "exp": "However and drawback clearly introduce a negative point in the essay."
  }
 ],
 "Two-Part Questions": [
  {
   "q": "What is the key feature of a two-part (direct) question essay?",
   "opts": [
    "It asks one simple yes or no question",
    "It only requires a description",
    "It contains two separate questions you must both answer",
    "It has no questions to answer"
   ],
   "correct": 2,
   "exp": "Two-part questions pose two distinct questions, and both must be answered fully."
  },
  {
   "q": "How should the body of a two-part question essay usually be organised?",
   "opts": [
    "Answer only the first question",
    "Ignore the questions and give your hobbies",
    "Answer both questions in the conclusion only",
    "One body paragraph for each question"
   ],
   "correct": 3,
   "exp": "Devoting one paragraph to each question ensures both are addressed clearly."
  },
  {
   "q": "What happens to your score if you answer only one of the two questions?",
   "opts": [
    "Your task response score drops for an incomplete answer",
    "Nothing changes",
    "You automatically get top marks",
    "The essay becomes an opinion essay"
   ],
   "correct": 0,
   "exp": "Failing to answer both parts leaves the task incomplete and lowers task achievement."
  }
 ],
 "Linking Words": [
  {
   "q": "Which linking word correctly shows contrast between two ideas?",
   "opts": [
    "Therefore",
    "However",
    "Because",
    "Furthermore"
   ],
   "correct": 1,
   "exp": "However introduces a contrasting idea, unlike the cause or addition words."
  },
  {
   "q": "Which linker best shows a result or consequence?",
   "opts": [
    "Although",
    "For example",
    "As a result",
    "In contrast"
   ],
   "correct": 2,
   "exp": "As a result signals that what follows is a consequence of the previous statement."
  },
  {
   "q": "Which word is used to add a similar supporting point?",
   "opts": [
    "Nevertheless",
    "Despite",
    "Whereas",
    "Furthermore"
   ],
   "correct": 3,
   "exp": "Furthermore adds another point in the same direction as the previous idea."
  }
 ],
 "Cohesion & Coherence": [
  {
   "q": "What does coherence in writing mainly refer to?",
   "opts": [
    "Ideas being logically organised and easy to follow",
    "Using very long sentences",
    "Writing as fast as possible",
    "Using many rare words"
   ],
   "correct": 0,
   "exp": "Coherence is about clear, logical organisation so the reader can follow your ideas."
  },
  {
   "q": "Which technique helps create cohesion between sentences?",
   "opts": [
    "Starting every sentence the same way",
    "Referencing with pronouns like it and this",
    "Removing all linking words",
    "Changing the topic each sentence"
   ],
   "correct": 1,
   "exp": "Reference words such as it and this link sentences and avoid repetition, aiding cohesion."
  },
  {
   "q": "Why is overusing linking words a problem for cohesion?",
   "opts": [
    "It makes writing sound natural",
    "It always raises your score",
    "It can seem mechanical and forced",
    "It shortens the essay"
   ],
   "correct": 2,
   "exp": "Too many connectors sound artificial; cohesion should feel natural, not forced."
  }
 ],
 "Speaking Part 1": [
  {
   "q": "What kinds of topics does IELTS Speaking Part 1 usually cover?",
   "opts": [
    "Abstract global politics in depth",
    "A formal academic debate",
    "A two-minute uninterrupted talk",
    "Familiar personal topics like home, work, and hobbies"
   ],
   "correct": 3,
   "exp": "Part 1 asks short questions about familiar everyday topics such as home and hobbies."
  },
  {
   "q": "How long does Speaking Part 1 typically last?",
   "opts": [
    "About 4 to 5 minutes",
    "Exactly 30 seconds",
    "About 20 minutes",
    "No fixed time at all"
   ],
   "correct": 0,
   "exp": "Part 1 lasts roughly four to five minutes with short question-and-answer exchanges."
  },
  {
   "q": "What is the best way to answer a Part 1 question?",
   "opts": [
    "Give a one-word answer only",
    "Give a short answer with a reason or brief detail",
    "Speak for two minutes without stopping",
    "Ask the examiner a question back"
   ],
   "correct": 1,
   "exp": "Extending a short answer with a reason or example shows better language range."
  }
 ],
 "Speaking Part 2 Cue Cards": [
  {
   "q": "How long should you speak in the Speaking Part 2 cue card task?",
   "opts": [
    "Around 10 minutes",
    "Exactly 10 seconds",
    "About 1 to 2 minutes",
    "As long as you like"
   ],
   "correct": 2,
   "exp": "In Part 2 you speak for one to two minutes on the cue card topic."
  },
  {
   "q": "How much preparation time do you get before speaking in Part 2?",
   "opts": [
    "No time at all",
    "Five minutes",
    "Fifteen minutes",
    "One minute to make notes"
   ],
   "correct": 3,
   "exp": "Candidates get one minute to prepare and can make notes before speaking."
  },
  {
   "q": "What is the best use of the bullet points on the cue card?",
   "opts": [
    "Use them to structure and develop your talk",
    "Ignore them completely",
    "Read them aloud word for word only",
    "Answer only the first one"
   ],
   "correct": 0,
   "exp": "The bullet prompts help you organise and expand your two-minute response."
  }
 ],
 "Speaking Part 3 Discussions": [
  {
   "q": "How do Part 3 questions differ from Part 1 questions?",
   "opts": [
    "They are simpler and more personal",
    "They are more abstract and require deeper opinions",
    "They require only yes or no",
    "They involve no speaking"
   ],
   "correct": 1,
   "exp": "Part 3 explores abstract ideas linked to the Part 2 topic and needs developed answers."
  },
  {
   "q": "Which skill is especially important in Part 3?",
   "opts": [
    "Memorising a scripted speech",
    "Giving one-word answers",
    "Justifying opinions and discussing ideas in depth",
    "Avoiding any examples"
   ],
   "correct": 2,
   "exp": "Part 3 rewards explaining, justifying, and analysing ideas rather than short replies."
  },
  {
   "q": "If you do not understand a Part 3 question, what should you do?",
   "opts": [
    "Stay silent",
    "Answer a Part 1 question instead",
    "Change to a different topic",
    "Politely ask the examiner to rephrase it"
   ],
   "correct": 3,
   "exp": "Asking for clarification is acceptable and better than answering the wrong question."
  }
 ],
 "Expanding Answers": [
  {
   "q": "What is the best strategy to expand a short speaking answer?",
   "opts": [
    "Add reasons, examples, or details",
    "Repeat the same sentence twice",
    "Speak more quietly",
    "Stop after one word"
   ],
   "correct": 0,
   "exp": "Adding reasons and examples develops your answer and shows language range."
  },
  {
   "q": "Which technique naturally extends an answer about a preference?",
   "opts": [
    "Saying only yes",
    "Explaining why and giving an example",
    "Changing the subject",
    "Listing unrelated facts"
   ],
   "correct": 1,
   "exp": "Explaining the reason and adding an example turns a short reply into a full answer."
  },
  {
   "q": "Why is expanding answers important for your speaking score?",
   "opts": [
    "It fills silence with noise only",
    "It confuses the examiner",
    "It demonstrates fluency, vocabulary, and grammar range",
    "It shortens the test"
   ],
   "correct": 2,
   "exp": "Developed answers give the examiner more language to assess across all criteria."
  }
 ],
 "Pronunciation Skills": [
  {
   "q": "What does word stress refer to in English pronunciation?",
   "opts": [
    "Saying every syllable equally loud",
    "Whispering all words",
    "Speaking as fast as possible",
    "Emphasising a particular syllable in a word"
   ],
   "correct": 3,
   "exp": "Word stress means giving greater emphasis to one syllable, which affects clarity."
  },
  {
   "q": "Why is intonation important when speaking English?",
   "opts": [
    "The rise and fall of the voice conveys meaning and attitude",
    "It has no effect on meaning",
    "It only matters in writing",
    "It makes speech slower only"
   ],
   "correct": 0,
   "exp": "Intonation, the voice rising and falling, helps express meaning, questions, and emotion."
  },
  {
   "q": "Which is a good goal for pronunciation in IELTS Speaking?",
   "opts": [
    "Sounding exactly like a native, or you fail",
    "Being clear and easy to understand",
    "Hiding your accent completely",
    "Speaking with no rhythm"
   ],
   "correct": 1,
   "exp": "IELTS rewards clear, intelligible pronunciation rather than a perfect native accent."
  }
 ],
 "Fluency Development": [
  {
   "q": "What does fluency mean in the IELTS Speaking test?",
   "opts": [
    "Speaking without any pauses ever",
    "Using only very long words",
    "Speaking smoothly at a natural pace with few hesitations",
    "Talking as loudly as possible"
   ],
   "correct": 2,
   "exp": "Fluency is speaking at a natural pace with logical flow and minimal hesitation."
  },
  {
   "q": "Which habit harms fluency the most?",
   "opts": [
    "Using linking phrases to connect ideas",
    "Giving relevant examples",
    "Speaking in complete sentences",
    "Frequently stopping to search for perfect words"
   ],
   "correct": 3,
   "exp": "Constant long pauses to find words break the natural flow and reduce fluency."
  },
  {
   "q": "Which phrase can help you keep speaking while you think?",
   "opts": [
    "That is a good question, let me think",
    "Ending the conversation abruptly",
    "Complete silence",
    "Repeating the examiner exactly"
   ],
   "correct": 0,
   "exp": "Natural filler phrases buy thinking time and maintain flow without awkward silence."
  }
 ],
 "Vocabulary for Speaking": [
  {
   "q": "What kind of vocabulary raises your lexical resource score in speaking?",
   "opts": [
    "Only very basic everyday words",
    "A range including topic-specific words and natural collocations",
    "Random rare words used incorrectly",
    "Repeating one adjective many times"
   ],
   "correct": 1,
   "exp": "A varied range with accurate collocations and topic words boosts lexical resource."
  },
  {
   "q": "What is a collocation?",
   "opts": [
    "A spelling rule",
    "A type of grammar tense",
    "Words that naturally go together, like heavy rain",
    "A punctuation mark"
   ],
   "correct": 2,
   "exp": "Collocations are natural word pairings such as heavy rain or make a decision."
  },
  {
   "q": "Which is better for showing vocabulary range when describing something good?",
   "opts": [
    "Saying good every time",
    "Using only the word nice",
    "Avoiding adjectives entirely",
    "Using varied words like excellent, beneficial, or impressive"
   ],
   "correct": 3,
   "exp": "Varying your word choice instead of repeating good demonstrates a wider vocabulary."
  }
 ],
 "Understanding Accents": [
  {
   "q": "In the IELTS Listening test, which strategy best helps you cope with an unfamiliar accent such as Australian or Scottish?",
   "opts": [
    "Concentrate on stressed content words and overall meaning rather than every phoneme",
    "Focus only on the exact vowel sounds you expect from your own accent",
    "Ask the invigilator to slow the recording down",
    "Ignore the speaker and rely on reading the questions"
   ],
   "correct": 0,
   "exp": "Tracking stressed content words and meaning lets you follow speakers despite accent variation, since key information falls on stressed syllables."
  },
  {
   "q": "A speaker with a non-rhotic British accent says a word where the final 'r' is not pronounced; how does this typically affect your listening?",
   "opts": [
    "It changes the spelling you must write in the answer",
    "Words like 'car' or 'here' may sound as if they end in a vowel, so you rely on context",
    "It means the answer is always plural",
    "It signals the speaker has made an error"
   ],
   "correct": 1,
   "exp": "In non-rhotic accents the final 'r' is dropped in speech, so recognising the word from context prevents mishearing it."
  },
  {
   "q": "Why does IELTS deliberately include a range of native-speaker accents in the Listening recordings?",
   "opts": [
    "Because only British examiners are available",
    "To make the test harder for no reason",
    "To reflect the real international English learners will encounter and test genuine comprehension",
    "To test the candidate's own pronunciation"
   ],
   "correct": 2,
   "exp": "IELTS uses varied accents to assess whether candidates can understand English as it is genuinely spoken across different regions."
  }
 ],
 "Predicting Answers": [
  {
   "q": "Before a Listening section begins, what is the most effective use of the time given to read the questions?",
   "opts": [
    "Memorising the instructions word for word",
    "Translating each question into your first language",
    "Writing random guesses in every blank",
    "Predicting the type of word or information each gap needs, such as a number, name or noun"
   ],
   "correct": 3,
   "exp": "Anticipating the grammatical type and content of each answer primes you to catch it when the audio reaches that point."
  },
  {
   "q": "A gap in a form reads: 'Deposit required: $______'. What should you predict the answer will be?",
   "opts": [
    "A number or amount of money",
    "A date of the week",
    "A person's name",
    "An adjective describing quality"
   ],
   "correct": 0,
   "exp": "The dollar sign and the word 'deposit' signal that a numerical monetary amount is required in the gap."
  },
  {
   "q": "How does predicting the answer help even when your prediction turns out to be wrong?",
   "opts": [
    "It guarantees the correct answer regardless of the audio",
    "It keeps you actively engaged and focused on the relevant part of the recording",
    "It lets you skip listening to that section",
    "It replaces the need to check grammar"
   ],
   "correct": 1,
   "exp": "The act of predicting keeps your attention targeted, so you notice the answer even if it differs from your guess."
  }
 ],
 "Identifying Opinions": [
  {
   "q": "Which phrase most clearly signals that a speaker is expressing a personal opinion rather than a fact?",
   "opts": [
    "Research has shown that...",
    "The data indicate that...",
    "If you ask me, I'd say that...",
    "It was built in 1990"
   ],
   "correct": 2,
   "exp": "'If you ask me' explicitly frames the following statement as the speaker's subjective viewpoint."
  },
  {
   "q": "Two speakers discuss a project; one says 'I suppose it could work, but...'. What attitude does this convey?",
   "opts": [
    "Full and enthusiastic agreement",
    "Indifference to the topic",
    "Complete rejection of the idea",
    "Hesitant or partial agreement with reservations"
   ],
   "correct": 3,
   "exp": "'I suppose... but' expresses tentative acceptance qualified by doubt, signalling reservation rather than firm agreement."
  },
  {
   "q": "In a discussion, how can tone of voice help you identify a speaker's opinion when the words seem neutral?",
   "opts": [
    "Falling intonation and stress can reveal sarcasm, doubt or enthusiasm behind the words",
    "Tone is irrelevant in IELTS Listening",
    "Tone only tells you the speaker's gender",
    "Tone always means the answer is negative"
   ],
   "correct": 0,
   "exp": "Intonation and stress carry attitudinal meaning, so they can reveal an opinion that the literal words do not state."
  }
 ],
 "Following Lectures": [
  {
   "q": "During a monologue lecture in Section 4, what verbal cue usually signals that the speaker is moving to a new main point?",
   "opts": [
    "A long pause with no words",
    "Discourse markers such as 'Moving on to...' or 'Another key aspect is...'",
    "Repeating the previous sentence",
    "Lowering the volume of speech"
   ],
   "correct": 1,
   "exp": "Signposting discourse markers explicitly announce transitions, helping you track the structure of the lecture."
  },
  {
   "q": "Section 4 gives no mid-section pause; what is the best way to keep pace with the lecture?",
   "opts": [
    "Stop writing and just listen passively",
    "Wait until the end and recall everything from memory",
    "Read ahead, follow the signposting language, and note answers as they occur",
    "Focus only on the first and last sentences"
   ],
   "correct": 2,
   "exp": "Because there is no pause, continuously reading ahead and following signposts keeps you aligned with the audio in real time."
  },
  {
   "q": "A lecturer says 'This brings us to the crux of the matter'. What does this indicate?",
   "opts": [
    "The lecture is ending immediately",
    "An unrelated tangent is beginning",
    "The speaker is repeating an earlier example",
    "The most important or central point is about to be made"
   ],
   "correct": 3,
   "exp": "'The crux of the matter' flags the central, most important point, so the following information is likely to be tested."
  }
 ],
 "High-Band Listening Strategies": [
  {
   "q": "To reach Band 7+ in Listening, how should you handle distractors where a speaker corrects an earlier number or fact?",
   "opts": [
    "Listen to the whole utterance and record the corrected, final piece of information",
    "Always write the first number you hear",
    "Write both numbers in the gap",
    "Skip the question entirely"
   ],
   "correct": 0,
   "exp": "Speakers often self-correct, so the valid answer is the final revised information, not the first figure mentioned."
  },
  {
   "q": "Which habit most undermines a high-band score during the Listening test?",
   "opts": [
    "Transferring answers carefully at the end",
    "Dwelling on a missed answer so you lose the next questions",
    "Checking spelling of written answers",
    "Using the reading time to predict"
   ],
   "correct": 1,
   "exp": "Fixating on one lost answer causes you to miss subsequent ones, so moving on quickly protects your overall score."
  },
  {
   "q": "For matching and multiple-choice tasks, why is paraphrase recognition crucial at Band 7+?",
   "opts": [
    "Because the audio never uses the exact words from the question",
    "Because paraphrases are only used in the Reading test",
    "Because the recording usually restates ideas using synonyms rather than repeating the question wording",
    "Because the answers are always the words printed on the page"
   ],
   "correct": 2,
   "exp": "The correct option is typically signalled by a synonym or rephrasing, so hearing paraphrases rather than exact words is essential."
  }
 ],
 "Advanced Listening Review": [
  {
   "q": "After practice tests, what review technique most improves advanced listening accuracy?",
   "opts": [
    "Only checking your final band score",
    "Memorising the answer key",
    "Discarding the transcript entirely",
    "Analysing why each wrong answer was missed and relistening to that exact segment"
   ],
   "correct": 3,
   "exp": "Diagnosing the cause of each error and relistening builds the specific skills that were failing, unlike simply noting the score."
  },
  {
   "q": "When reviewing, you find you consistently misspell answers you heard correctly. What is the priority fix?",
   "opts": [
    "Practise accurate spelling and singular/plural endings, since these lose marks despite correct hearing",
    "Listen to more recordings only",
    "Ignore it because meaning is enough",
    "Change to a different accent"
   ],
   "correct": 0,
   "exp": "Correct comprehension is wasted if spelling or grammatical endings are wrong, so targeted spelling practice recovers those marks."
  },
  {
   "q": "Why is it valuable to review the transcript alongside the audio after a listening test?",
   "opts": [
    "To memorise the passage for the real exam",
    "To see how words you missed were pronounced and how ideas were paraphrased",
    "To count the total number of words",
    "To find grammar mistakes made by the speakers"
   ],
   "correct": 1,
   "exp": "Comparing transcript and audio reveals the pronunciation and paraphrasing that caused errors, informing future listening."
  }
 ],
 "Critical Reading": [
  {
   "q": "Critical reading in IELTS mainly requires you to do what beyond understanding the literal text?",
   "opts": [
    "Memorise every sentence",
    "Count the paragraphs",
    "Evaluate the writer's purpose, assumptions and the strength of their evidence",
    "Translate the passage accurately"
   ],
   "correct": 2,
   "exp": "Critical reading means assessing purpose, assumptions and evidence rather than only decoding the surface meaning."
  },
  {
   "q": "A passage states a claim and then adds 'though this remains contested'. A critical reader concludes that the writer is doing what?",
   "opts": [
    "Fully endorsing the claim as proven fact",
    "Quoting someone else's opinion word for word",
    "Rejecting the claim outright",
    "Acknowledging that the claim is disputed and not settled"
   ],
   "correct": 3,
   "exp": "The phrase 'remains contested' signals the writer views the claim as debatable rather than established."
  },
  {
   "q": "Which question best reflects critical reading when evaluating a source cited in a passage?",
   "opts": [
    "Is the evidence sufficient and relevant to support the writer's conclusion?",
    "How many words are in the sentence?",
    "What colour is associated with the topic?",
    "How is the word spelled?"
   ],
   "correct": 0,
   "exp": "Judging whether evidence adequately supports the conclusion is a core act of critical evaluation."
  }
 ],
 "Speed Reading Techniques": [
  {
   "q": "What is the key difference between skimming and scanning in IELTS Reading?",
   "opts": [
    "Skimming finds specific details; scanning gets the general idea",
    "Skimming gets the general idea; scanning locates specific information such as names or dates",
    "They are identical techniques",
    "Both require reading every word slowly"
   ],
   "correct": 1,
   "exp": "Skimming captures the gist quickly, while scanning hunts for particular details like figures or keywords."
  },
  {
   "q": "Why should advanced readers avoid subvocalising (silently pronouncing every word) during timed reading?",
   "opts": [
    "It improves comprehension of every word",
    "It is required by the IELTS rules",
    "It slows reading speed to speaking pace, wasting limited exam time",
    "It helps locate answers faster"
   ],
   "correct": 2,
   "exp": "Subvocalising caps your speed at talking pace, which is far too slow for the time pressure of the Reading test."
  },
  {
   "q": "When you first receive a Reading passage, what is the most efficient initial step?",
   "opts": [
    "Read every word from start to finish before looking at questions",
    "Answer questions in random order without reading",
    "Translate the title",
    "Skim headings, first sentences and structure to build a mental map before answering"
   ],
   "correct": 3,
   "exp": "A quick skim of structure and topic sentences creates a map that makes locating answers much faster."
  }
 ],
 "Inference Questions": [
  {
   "q": "An inference question in IELTS Reading asks you to identify what?",
   "opts": [
    "A conclusion that is strongly implied but not directly stated",
    "Information stated word for word in the text",
    "The number of paragraphs",
    "The writer's nationality"
   ],
   "correct": 0,
   "exp": "Inference questions test conclusions logically implied by the text rather than statements written explicitly."
  },
  {
   "q": "Which is the safest approach to choosing an answer for an inference question?",
   "opts": [
    "Pick the option that goes furthest beyond the text for a bold claim",
    "Choose the option that follows logically from evidence in the text without over-reaching",
    "Select the option using the most words from the passage",
    "Choose the most surprising option"
   ],
   "correct": 1,
   "exp": "A valid inference is tightly supported by textual evidence, so the best answer follows logically without exaggerating."
  },
  {
   "q": "A passage says a policy 'was quietly withdrawn after months of public criticism'. What can you reasonably infer?",
   "opts": [
    "The policy was highly successful",
    "The policy is still fully in force",
    "The government wished to avoid drawing attention to reversing an unpopular policy",
    "The criticism came only from other governments"
   ],
   "correct": 2,
   "exp": "'Quietly withdrawn after criticism' implies deliberate low-profile reversal of an unpopular measure, which is a supported inference."
  }
 ],
 "Writer’s Opinion Questions": [
  {
   "q": "In a Yes/No/Not Given task about the writer's views, when should you select 'Not Given'?",
   "opts": [
    "When the statement contradicts the writer",
    "Whenever the statement is long",
    "When the statement matches the writer exactly",
    "When the writer expresses no opinion on that specific claim in the passage"
   ],
   "correct": 3,
   "exp": "'Not Given' applies when the passage offers no information confirming or contradicting the writer's view on that point."
  },
  {
   "q": "How do you distinguish the writer's own opinion from an opinion the writer merely reports?",
   "opts": [
    "Look for reporting verbs and attribution such as 'critics argue', which signal others' views not the writer's",
    "They are always the same thing",
    "Assume every opinion is the writer's",
    "Only the first opinion in the passage is the writer's"
   ],
   "correct": 0,
   "exp": "Attribution phrases like 'critics argue' mark someone else's view, which must not be mistaken for the writer's own stance."
  },
  {
   "q": "A statement claims the writer 'strongly supports' an idea, but the text only says the idea 'may have some merit'. What is the answer?",
   "opts": [
    "Yes, the statement agrees with the writer",
    "No, the statement overstates the writer's cautious position",
    "Not Given",
    "True without qualification"
   ],
   "correct": 1,
   "exp": "'May have some merit' is tentative, so claiming the writer 'strongly supports' it contradicts the actual view, giving 'No'."
  }
 ],
 "Complex Academic Passages": [
  {
   "q": "When a dense academic passage uses heavy nominalisation (nouns formed from verbs), what helps comprehension?",
   "opts": [
    "Skipping the sentence entirely",
    "Reading only the first word of each line",
    "Mentally converting the nouns back into their verb forms to see the underlying action",
    "Counting the syllables"
   ],
   "correct": 2,
   "exp": "Turning nominalisations back into verbs unpacks who does what, clarifying dense academic sentences."
  },
  {
   "q": "In a long, complex sentence with several subordinate clauses, how do you find the core meaning?",
   "opts": [
    "Read only the subordinate clauses",
    "Ignore all punctuation",
    "Assume the last clause is the main idea",
    "Identify the main subject and main verb of the independent clause first"
   ],
   "correct": 3,
   "exp": "Locating the main subject and verb of the independent clause reveals the sentence's core message before the modifiers."
  },
  {
   "q": "Cohesive devices such as 'nevertheless' and 'consequently' in academic texts primarily help you to do what?",
   "opts": [
    "Track the logical relationships between ideas, such as contrast or cause",
    "Increase your reading speed automatically",
    "Identify the writer's age",
    "Find spelling errors"
   ],
   "correct": 0,
   "exp": "Linking words signal logical relations like contrast or cause, guiding you through the argument's structure."
  }
 ],
 "Reading Time Management": [
  {
   "q": "With 60 minutes for three passages and no extra transfer time, roughly how should you allocate your time?",
   "opts": [
    "45 minutes on passage 1 and rush the rest",
    "About 20 minutes per passage, adjusting for difficulty",
    "Two minutes total then guess",
    "Read all passages first, then all questions at the very end"
   ],
   "correct": 1,
   "exp": "Allocating roughly 20 minutes per passage keeps you on pace to finish all three within the hour."
  },
  {
   "q": "You are stuck on one difficult question with time running out. What is the best action?",
   "opts": [
    "Spend as long as needed until you solve it",
    "Leave it and all following questions blank",
    "Make your best guess, mark it, and move on to secure other answers",
    "Restart the passage from the beginning"
   ],
   "correct": 2,
   "exp": "Guessing and moving on protects easier marks, since there is no penalty for wrong answers in IELTS."
  },
  {
   "q": "Why is it risky to leave transferring answers to the very last minute in the Reading test?",
   "opts": [
    "Because there is a separate transfer time as in Listening",
    "Because pencils are not allowed",
    "Because the answer sheet is optional",
    "Because there is no extra transfer time, so you must write answers on the sheet as you go or reserve time"
   ],
   "correct": 3,
   "exp": "Unlike Listening, Reading gives no extra transfer time, so failing to record answers within the hour loses marks."
  }
 ],
 "Band 7+ Essay Structure": [
  {
   "q": "What is the recommended paragraph structure for a Band 7+ Task 2 opinion essay?",
   "opts": [
    "Introduction, two or three developed body paragraphs, and a conclusion",
    "One long paragraph covering everything",
    "Only an introduction and conclusion",
    "A list of bullet points"
   ],
   "correct": 0,
   "exp": "A clear introduction, well-developed body paragraphs and a conclusion give the logical organisation examiners reward."
  },
  {
   "q": "In a body paragraph, what does a strong topic sentence do?",
   "opts": [
    "Introduces an unrelated new idea at the end",
    "States the paragraph's main point clearly at the start so the argument is easy to follow",
    "Repeats the essay question word for word",
    "Provides the final conclusion"
   ],
   "correct": 1,
   "exp": "A topic sentence stating the main idea up front gives the paragraph clear focus and coherence."
  },
  {
   "q": "For a high band, how should the introduction to a Task 2 essay end?",
   "opts": [
    "With an unrelated question",
    "With a personal anecdote about your family",
    "With a clear thesis statement that outlines your position or the essay's direction",
    "With a copied sentence from the prompt"
   ],
   "correct": 2,
   "exp": "A clear thesis at the end of the introduction signals your position and structures the whole essay."
  }
 ],
 "Advanced Vocabulary": [
  {
   "q": "Which sentence shows the most precise, high-band use of vocabulary?",
   "opts": [
    "The problem is very very big and bad",
    "It is a big big issue for people",
    "The thing got worse and stuff",
    "The issue has escalated into a significant public health crisis"
   ],
   "correct": 3,
   "exp": "'Escalated into a significant public health crisis' uses precise collocation and register expected at Band 7+."
  },
  {
   "q": "Why can overusing memorised 'high-level' words actually lower a Writing score?",
   "opts": [
    "Words used inaccurately or with wrong collocation reduce the lexical resource mark",
    "Examiners dislike long words on principle",
    "It always improves the score",
    "Long words are banned in IELTS"
   ],
   "correct": 0,
   "exp": "Lexical resource rewards accurate, natural word choice, so misused advanced words damage rather than help the score."
  },
  {
   "q": "Which is the best example of a natural collocation for Band 7+ writing?",
   "opts": [
    "make a research",
    "conduct research",
    "do a research",
    "perform a research"
   ],
   "correct": 1,
   "exp": "'Conduct research' is the standard, natural collocation, whereas the others are common learner errors."
  }
 ],
 "Academic Writing Style": [
  {
   "q": "Which feature is characteristic of an appropriate academic writing style in Task 2?",
   "opts": [
    "Contractions like 'don't' and 'can't'",
    "Emojis and exclamation marks",
    "A formal, impersonal tone avoiding slang and contractions",
    "Very casual chatty language"
   ],
   "correct": 2,
   "exp": "Academic style favours a formal, impersonal tone and avoids contractions, slang and informal punctuation."
  },
  {
   "q": "Which sentence is written in the most appropriate academic register?",
   "opts": [
    "Loads of people reckon the plan's a total mess",
    "The plan? Not great, honestly",
    "The plan is rubbish and everyone knows it",
    "Many people believe the plan is fundamentally flawed"
   ],
   "correct": 3,
   "exp": "'Many people believe the plan is fundamentally flawed' is formal and objective, matching academic register."
  },
  {
   "q": "To maintain objectivity in academic writing, how should you usually present a debatable claim?",
   "opts": [
    "With cautious, hedged language such as 'this suggests' or 'it may indicate'",
    "As an absolute fact with no hedging",
    "With exclamation marks for emphasis",
    "As a rhetorical shout"
   ],
   "correct": 0,
   "exp": "Hedging with phrases like 'this suggests' conveys appropriate academic caution about debatable claims."
  }
 ],
 "Complex Sentences": [
  {
   "q": "Which sentence contains a subordinate (dependent) clause?",
   "opts": [
    "The results were clear and convincing.",
    "Although the results were clear, the committee remained cautious.",
    "The committee met and voted.",
    "Researchers gathered data and published it."
   ],
   "correct": 1,
   "exp": "'Although the results were clear' is a dependent clause that cannot stand alone, making the sentence complex."
  },
  {
   "q": "What punctuation is normally needed when a subordinate clause begins the sentence?",
   "opts": [
    "No punctuation at all",
    "A semicolon before it",
    "A comma after the subordinate clause and before the main clause",
    "A full stop in the middle"
   ],
   "correct": 2,
   "exp": "A fronted subordinate clause is separated from the main clause by a comma, as in 'Because it rained, we stayed.'"
  },
  {
   "q": "Which word functions as a relative pronoun introducing a subordinate clause?",
   "opts": [
    "and",
    "or",
    "but",
    "which"
   ],
   "correct": 3,
   "exp": "'Which' introduces a relative clause, e.g. 'the report, which was late, was accurate', whereas 'and/but/or' are coordinating conjunctions."
  }
 ],
 "Data Analysis for Task 1": [
  {
   "q": "In a Task 1 report describing a graph, what should the overview paragraph contain?",
   "opts": [
    "The most significant general trends or key features without specific figures",
    "Every single data point in detail",
    "Your personal opinion on the data",
    "A conclusion recommending action"
   ],
   "correct": 0,
   "exp": "The overview summarises the main trends and standout features, which is essential for a high Task Achievement score."
  },
  {
   "q": "Which phrase best describes a sharp increase in a line graph?",
   "opts": [
    "remained stable",
    "surged dramatically",
    "rose gradually",
    "declined slightly"
   ],
   "correct": 1,
   "exp": "'Surged dramatically' accurately conveys a sharp, steep increase in the data."
  },
  {
   "q": "When comparing data across years, which grammar structure is most appropriate for a completed change in the past?",
   "opts": [
    "Present continuous, e.g. 'is rising'",
    "Future tense, e.g. 'will rise'",
    "Past simple, e.g. 'rose from 20 to 40 percent'",
    "Present perfect continuous for everything"
   ],
   "correct": 2,
   "exp": "Data describing a finished period uses the past simple, such as 'rose from 20 to 40 percent'."
  }
 ],
 "High-Band Sample Essays": [
  {
   "q": "When studying a Band 9 sample essay, what is the most useful thing to analyse?",
   "opts": [
    "The handwriting style",
    "The colour of the ink",
    "The exact number of words on each line",
    "How ideas are developed, linked and supported with relevant examples"
   ],
   "correct": 3,
   "exp": "Examining idea development, cohesion and support teaches the transferable skills that produce a high band."
  },
  {
   "q": "A model essay fully addresses every part of the task prompt. Which marking criterion does this most directly satisfy?",
   "opts": [
    "Task Response (Task Achievement)",
    "Pronunciation",
    "Handwriting neatness",
    "Spelling only"
   ],
   "correct": 0,
   "exp": "Fully answering all parts of the prompt is the core of the Task Response criterion."
  },
  {
   "q": "Why is copying whole sentences from a memorised sample essay a poor strategy?",
   "opts": [
    "It always guarantees Band 9",
    "Examiners penalise memorised, off-topic content that does not answer the specific question",
    "It is required by IELTS",
    "It improves your coherence score automatically"
   ],
   "correct": 1,
   "exp": "Memorised chunks rarely fit the exact task and are penalised, so understanding techniques matters more than copying."
  }
 ],
 "Common Writing Mistakes": [
  {
   "q": "Which is a common error that lowers the Grammatical Range and Accuracy score?",
   "opts": [
    "Using a variety of correct sentence structures",
    "Accurate use of commas",
    "Frequent subject-verb agreement errors such as 'the results shows'",
    "Correct spelling of common words"
   ],
   "correct": 2,
   "exp": "'The results shows' is a subject-verb agreement error, and repeated such mistakes lower the grammar score."
  },
  {
   "q": "Writing far below the minimum word count in Task 2 primarily causes what?",
   "opts": [
    "A higher band for being concise",
    "An automatic Band 9",
    "No effect on the score",
    "A penalty because the task cannot be fully developed"
   ],
   "correct": 3,
   "exp": "Underlength essays are penalised because they cannot develop ideas fully, harming Task Response."
  },
  {
   "q": "Which habit most damages the Coherence and Cohesion score?",
   "opts": [
    "Overusing or misusing linking words like 'moreover' in almost every sentence",
    "Using clear topic sentences",
    "Organising ideas into paragraphs",
    "Referencing ideas with pronouns correctly"
   ],
   "correct": 0,
   "exp": "Mechanically overusing linkers makes writing feel artificial and disjointed, harming cohesion rather than helping it."
  }
 ],
 "Task Achievement Strategies": [
  {
   "q": "To maximise Task Achievement in Task 2, what must your essay do first and foremost?",
   "opts": [
    "Use the longest words possible",
    "Directly and fully answer every part of the question asked",
    "Contain exactly five paragraphs",
    "Include a personal story"
   ],
   "correct": 1,
   "exp": "Task Achievement depends on addressing all parts of the prompt directly and completely."
  },
  {
   "q": "A Task 2 prompt asks you to discuss both views and give your opinion. What must a high-band response include?",
   "opts": [
    "Only your own opinion",
    "Only one of the two views",
    "A balanced discussion of both views plus a clearly stated personal opinion",
    "Neither view, just background facts"
   ],
   "correct": 2,
   "exp": "The instruction requires both views to be discussed and your own opinion stated, or the task is incomplete."
  },
  {
   "q": "In Task 1, why must you avoid inventing reasons or opinions about why data changed?",
   "opts": [
    "Because speculation is rewarded",
    "Because opinions raise the vocabulary score",
    "Because you must always give recommendations",
    "Because Task 1 requires objective reporting of the data, not personal explanation"
   ],
   "correct": 3,
   "exp": "Task 1 is an objective report of the visual data, so adding invented causes or opinions harms Task Achievement."
  }
 ],
 "Speaking Like a Native": [
  {
   "q": "Which feature most helps English sound natural rather than robotic in the Speaking test?",
   "opts": [
    "Using connected speech and word linking",
    "Speaking as slowly as possible",
    "Pausing after every single word",
    "Memorising long scripted answers"
   ],
   "correct": 0,
   "exp": "Connected speech, where words link smoothly together, is a key marker of natural, fluent English."
  },
  {
   "q": "What does a 'filler' like 'well, actually' do for a near-native speaker?",
   "opts": [
    "It lowers the band score automatically",
    "It buys natural thinking time without awkward silence",
    "It must never be used in IELTS",
    "It replaces the need to answer the question"
   ],
   "correct": 1,
   "exp": "Natural fillers give you thinking time and keep speech flowing, sounding more native than dead silence."
  },
  {
   "q": "Which habit best builds a native-like rhythm in English?",
   "opts": [
    "Reading grammar rules aloud",
    "Stressing every word equally",
    "Shadowing native audio and copying its stress patterns",
    "Translating word-for-word from your first language"
   ],
   "correct": 2,
   "exp": "Shadowing native audio trains you to reproduce natural stress and rhythm rather than flat, even speech."
  }
 ],
 "Advanced Topic Discussions": [
  {
   "q": "In Part 3, how should you handle an abstract, unfamiliar discussion topic?",
   "opts": [
    "Say you do not know and stop",
    "Give a one-word answer only",
    "Change the subject to something easier",
    "Reason aloud, giving examples and considering different sides"
   ],
   "correct": 3,
   "exp": "Part 3 rewards developed reasoning, examples and balanced viewpoints rather than short or evasive answers."
  },
  {
   "q": "Which phrase best introduces a contrasting viewpoint in a discussion?",
   "opts": [
    "On the other hand, some would argue that...",
    "I like it very much because good",
    "Yes, that is true, full stop",
    "I have no opinion about this"
   ],
   "correct": 0,
   "exp": "'On the other hand' signals a contrasting view and shows the range expected in advanced discussion."
  },
  {
   "q": "What does an examiner look for when a Part 3 question asks you to speculate about the future?",
   "opts": [
    "A memorised paragraph",
    "Use of tentative language such as 'might', 'could' or 'is likely to'",
    "Definite facts only",
    "A refusal to guess"
   ],
   "correct": 1,
   "exp": "Speculation calls for tentative, hypothetical language like 'might' and 'is likely to' to sound precise and natural."
  }
 ],
 "Abstract Ideas": [
  {
   "q": "How can you make an abstract idea like 'freedom' clearer when speaking?",
   "opts": [
    "Repeat the word many times",
    "Define it using a dictionary quote",
    "Give a concrete example or situation to illustrate it",
    "Avoid the topic entirely"
   ],
   "correct": 2,
   "exp": "A concrete example anchors an abstract concept and shows you can develop ideas clearly."
  },
  {
   "q": "Which sentence best expresses an abstract idea with precision?",
   "opts": [
    "Happiness is a thing that is good",
    "I think happiness maybe yes",
    "Happiness happy people",
    "Happiness often depends less on wealth than on strong relationships"
   ],
   "correct": 3,
   "exp": "This option states an abstract claim clearly and adds a comparative idea, showing controlled expression."
  },
  {
   "q": "When discussing an abstract concept, why is comparing two ideas useful?",
   "opts": [
    "It shows depth by weighing relationships between ideas",
    "It fills time without meaning",
    "It is required to reach Band 5",
    "It avoids giving any opinion"
   ],
   "correct": 0,
   "exp": "Comparing ideas demonstrates the analytical depth examiners reward in higher bands."
  }
 ],
 "Debate and Argument Skills": [
  {
   "q": "What is the strongest way to support an argument in Part 3?",
   "opts": [
    "Repeat your opinion louder",
    "Back the claim with a reason and an example",
    "State it once with no support",
    "Say everyone agrees with you"
   ],
   "correct": 1,
   "exp": "A claim supported by a clear reason and example is far more persuasive than mere repetition."
  },
  {
   "q": "Which phrase best concedes a point before rebutting it?",
   "opts": [
    "That is completely wrong",
    "I refuse to answer that",
    "While that may be true, the bigger issue is...",
    "You are correct, so I stop"
   ],
   "correct": 2,
   "exp": "Conceding then rebutting ('While that may be true...') shows sophisticated, balanced argument skills."
  },
  {
   "q": "Why should you avoid saying only 'I agree' in a debate-style question?",
   "opts": [
    "It is grammatically wrong",
    "It uses too many words",
    "Agreement is forbidden in IELTS",
    "It gives no reasoning and limits your band score"
   ],
   "correct": 3,
   "exp": "Bare agreement shows no development; examiners want reasons and extended responses."
  }
 ],
 "Idioms and Collocations": [
  {
   "q": "Which is a correct English collocation?",
   "opts": [
    "Make a decision",
    "Do a decision",
    "Have a decision",
    "Take a decision quickly done"
   ],
   "correct": 0,
   "exp": "'Make a decision' is the standard collocation; 'do' and 'have' a decision are incorrect."
  },
  {
   "q": "What does the idiom 'to be over the moon' mean?",
   "opts": [
    "To be very tired",
    "To be extremely happy",
    "To be confused",
    "To be in space"
   ],
   "correct": 1,
   "exp": "'Over the moon' is an idiom meaning extremely happy or delighted."
  },
  {
   "q": "Why should idioms be used carefully in the Speaking test?",
   "opts": [
    "They are banned by IELTS",
    "They always raise your score",
    "Used wrongly or too often they sound forced and unnatural",
    "They only work in Writing"
   ],
   "correct": 2,
   "exp": "Idioms help only when used accurately and naturally; forced overuse sounds unnatural to examiners."
  }
 ],
 "Pronunciation for Band 8+": [
  {
   "q": "Which pronunciation feature most affects meaning and is key at Band 8+?",
   "opts": [
    "Speaking in a monotone",
    "Speaking extremely fast",
    "Adding an accent from a film",
    "Correct word and sentence stress"
   ],
   "correct": 3,
   "exp": "Accurate word and sentence stress carries meaning and is essential for a high pronunciation band."
  },
  {
   "q": "What is intonation and why does it matter for Band 8+?",
   "opts": [
    "The rise and fall of the voice that signals meaning and attitude",
    "The speed of speech only",
    "The volume of your voice",
    "The number of words per minute"
   ],
   "correct": 0,
   "exp": "Intonation, the rise and fall of the voice, conveys meaning and attitude, a Band 8+ requirement."
  },
  {
   "q": "For a high pronunciation score, how understandable must you be?",
   "opts": [
    "Understandable only to your teacher",
    "Effortlessly understood throughout with only occasional lapses",
    "Perfectly accent-free like a newsreader",
    "Understandable in your first language"
   ],
   "correct": 1,
   "exp": "Band 8 requires being easy to understand throughout, with only occasional lapses, not a specific accent."
  }
 ],
 "Speaking Confidence Building": [
  {
   "q": "If you do not understand a Speaking question, what should you do?",
   "opts": [
    "Stay silent until time runs out",
    "Answer a different question you prefer",
    "Politely ask the examiner to repeat or rephrase it",
    "Guess and speak about anything"
   ],
   "correct": 2,
   "exp": "Politely asking for repetition is allowed and shows composure rather than losing marks."
  },
  {
   "q": "Which practice best reduces nervousness before the Speaking test?",
   "opts": [
    "Avoiding speaking until test day",
    "Learning only difficult vocabulary",
    "Memorising full answers word for word",
    "Regular timed practice with a partner or recording"
   ],
   "correct": 3,
   "exp": "Frequent realistic practice builds fluency and calm; memorised scripts sound unnatural under pressure."
  },
  {
   "q": "If you make a small grammar slip while speaking, what is best?",
   "opts": [
    "Self-correct briefly and keep going naturally",
    "Stop and apologise repeatedly",
    "Start the whole answer again",
    "Switch to your first language"
   ],
   "correct": 0,
   "exp": "A quick self-correction and continued flow shows control; dwelling on errors harms fluency."
  }
 ],
 "IELTS Exam Strategies": [
  {
   "q": "In Listening, why should you read the questions before the audio plays?",
   "opts": [
    "To skip the audio entirely",
    "To predict answers and know what to listen for",
    "Because the audio repeats twice",
    "To write answers before listening"
   ],
   "correct": 1,
   "exp": "Previewing questions lets you predict content and target key information as you listen."
  },
  {
   "q": "In Reading, what is 'skimming' used for?",
   "opts": [
    "Reading every word slowly",
    "Finding one specific number",
    "Getting the general idea or gist of a passage quickly",
    "Memorising the whole text"
   ],
   "correct": 2,
   "exp": "Skimming gives the overall gist quickly, helping you locate where answers are before reading closely."
  },
  {
   "q": "What should you do with a hard Reading question you cannot answer quickly?",
   "opts": [
    "Leave it blank forever",
    "Spend all remaining time on it",
    "Give up on the whole section",
    "Guess or mark it, move on, and return later"
   ],
   "correct": 3,
   "exp": "There is no penalty for guessing, so move on and return, ensuring you attempt every question."
  }
 ],
 "Time Management": [
  {
   "q": "In Writing, how should you split the 60 minutes between Task 1 and Task 2?",
   "opts": [
    "About 20 minutes on Task 1 and 40 on Task 2",
    "30 minutes each",
    "40 on Task 1 and 20 on Task 2",
    "All 60 on Task 1"
   ],
   "correct": 0,
   "exp": "Task 2 is worth more marks, so spend about 20 minutes on Task 1 and 40 on Task 2."
  },
  {
   "q": "Roughly how long is the Academic Reading test and how many questions?",
   "opts": [
    "30 minutes, 20 questions",
    "60 minutes, 40 questions",
    "90 minutes, 40 questions",
    "45 minutes, 30 questions"
   ],
   "correct": 1,
   "exp": "Academic Reading gives 60 minutes for 40 questions, so pace at about 20 minutes per passage."
  },
  {
   "q": "Why should you not spend too long on a single Listening answer?",
   "opts": [
    "Each answer is worth ten marks",
    "There is extra time to relisten",
    "The recording keeps moving and you may miss later answers",
    "The examiner pauses for you"
   ],
   "correct": 2,
   "exp": "The audio plays once and continues, so lingering on one answer risks missing the next ones."
  }
 ],
 "Mock Tests": [
  {
   "q": "What is the main purpose of taking full mock tests before IELTS?",
   "opts": [
    "To memorise the real exam answers",
    "To guarantee a Band 9",
    "To avoid studying grammar",
    "To build stamina and practise timing under real conditions"
   ],
   "correct": 3,
   "exp": "Mock tests build exam stamina and let you rehearse timing under realistic conditions."
  },
  {
   "q": "For a mock test to be useful, how should it be taken?",
   "opts": [
    "Under strict timed, exam-like conditions",
    "With no time limit and open notes",
    "Only the sections you enjoy",
    "With a friend giving the answers"
   ],
   "correct": 0,
   "exp": "Realistic timed conditions make the practice diagnostic and prepare you for real pressure."
  },
  {
   "q": "After finishing a mock test, what is the most valuable next step?",
   "opts": [
    "Throw it away and start another",
    "Review mistakes and understand why they happened",
    "Only check the total score",
    "Repeat the exact same test immediately"
   ],
   "correct": 1,
   "exp": "Reviewing why errors occurred turns a mock test into real learning and improvement."
  }
 ],
 "Error Analysis": [
  {
   "q": "What is the best first step in analysing your practice errors?",
   "opts": [
    "Ignore them and move on",
    "Blame the difficulty of the test",
    "Group them by type, such as grammar or spelling",
    "Only count how many were wrong"
   ],
   "correct": 2,
   "exp": "Grouping errors by type reveals patterns so you can target your weakest areas."
  },
  {
   "q": "If you repeatedly lose marks for verb tenses, what should you do?",
   "opts": [
    "Avoid using verbs",
    "Only write short sentences",
    "Accept it as impossible to fix",
    "Focus targeted practice on that specific grammar point"
   ],
   "correct": 3,
   "exp": "Targeted practice on the recurring weakness is the efficient way to raise your score."
  },
  {
   "q": "Why keep an error log during IELTS preparation?",
   "opts": [
    "To track recurring weaknesses and measure progress",
    "To increase the number of mistakes",
    "Because the examiner checks it",
    "To fill up your notebook"
   ],
   "correct": 0,
   "exp": "An error log exposes recurring weaknesses and shows measurable progress over time."
  }
 ],
 "Band Score Improvement": [
  {
   "q": "Which concrete tactic most helps raise a Writing band for lexical resource?",
   "opts": [
    "Repeating the same simple words",
    "Using a range of accurate, topic-specific vocabulary",
    "Writing much longer essays",
    "Using only very rare words wrongly"
   ],
   "correct": 1,
   "exp": "A range of accurate, appropriate vocabulary directly boosts the lexical resource criterion."
  },
  {
   "q": "To move from Band 6 to 7 in Speaking, what should you improve?",
   "opts": [
    "Speaking only in short answers",
    "Memorising more idioms only",
    "Fluency and using a wider range of structures accurately",
    "Slowing down to almost silence"
   ],
   "correct": 2,
   "exp": "Band 7 needs greater fluency and a wider range of accurate grammar, not just memorised phrases."
  },
  {
   "q": "Which is a realistic way to gain marks in Reading?",
   "opts": [
    "Translating every word first",
    "Reading each passage three times",
    "Answering only easy questions",
    "Improving skimming and scanning speed"
   ],
   "correct": 3,
   "exp": "Faster, accurate skimming and scanning lets you answer more questions in the limited time."
  }
 ],
 "Exam Day Preparation & Computer-Based IELTS": [
  {
   "q": "What identity document is normally required to enter the IELTS test?",
   "opts": [
    "The valid passport or ID used at registration",
    "A school report card",
    "A recent electricity bill",
    "A photocopy of any ID"
   ],
   "correct": 0,
   "exp": "You must bring the same valid passport or national ID you registered with to be admitted."
  },
  {
   "q": "A key advantage of computer-based IELTS over paper is that you can?",
   "opts": [
    "See the answers in advance",
    "Easily edit, cut and paste text in Writing",
    "Take unlimited time",
    "Skip the Speaking test"
   ],
   "correct": 1,
   "exp": "On computer you can edit and rearrange your writing easily and see a live word count."
  },
  {
   "q": "In computer-based IELTS, how is the Speaking test usually conducted?",
   "opts": [
    "By typing your answers",
    "By a fully automated robot only",
    "Face to face or via video with a real examiner",
    "It is cancelled"
   ],
   "correct": 2,
   "exp": "Speaking remains a live conversation with a real examiner, in person or by video call."
  }
 ],
 "Academic vs General IELTS": [
  {
   "q": "How do the Writing tasks differ between Academic and General Training?",
   "opts": [
    "They are identical",
    "Academic only has one task",
    "General has no Writing test",
    "Academic Task 1 describes a graph or chart; General Task 1 is a letter"
   ],
   "correct": 3,
   "exp": "Academic Task 1 describes visual data, while General Training Task 1 asks you to write a letter."
  },
  {
   "q": "Which module has the same test for both Academic and General candidates?",
   "opts": [
    "Listening and Speaking",
    "Writing",
    "Reading",
    "None of them"
   ],
   "correct": 0,
   "exp": "Listening and Speaking are identical for both versions; only Reading and Writing differ."
  },
  {
   "q": "Which version is typically required for university study abroad?",
   "opts": [
    "General Training",
    "Academic",
    "Either one equally",
    "Neither is accepted"
   ],
   "correct": 1,
   "exp": "Universities usually require the Academic module, while General Training suits migration and work."
  }
 ]
};
})();
