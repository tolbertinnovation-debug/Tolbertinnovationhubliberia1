/* TIH — Authored per-topic quiz questions. Each topic has its OWN set of 3
   distinct multiple-choice questions. Builders (complit/ielts/toefl/english/ph-career)
   look these up by topic title; final exams sample across the pool. Falls back
   to generic questions if a topic is missing here. */
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
  window.TIH_TOPIC_QUIZZES['toefl'] = {
 "Welcome to the Course": [
  {
   "q": "What is the main purpose of the TOEFL iBT exam that this course prepares you for?",
   "opts": [
    "To certify native-speaker fluency for citizenship",
    "To measure your ability to use and understand English at the university level",
    "To test your knowledge of British literature and history",
    "To grade your handwriting and spelling in English"
   ],
   "correct": 1,
   "exp": "The TOEFL iBT measures academic English proficiency for use in an English-speaking university environment."
  },
  {
   "q": "Which four language skills does this complete TOEFL course train you in?",
   "opts": [
    "Reading, Grammar, Translation, and Dictation",
    "Grammar, Vocabulary, Spelling, and Punctuation",
    "Reading, Writing, Listening, and Speaking",
    "Listening, Singing, Debating, and Acting"
   ],
   "correct": 2,
   "exp": "The TOEFL iBT and this course cover the four integrated skills: Reading, Writing, Listening, and Speaking."
  },
  {
   "q": "According to the course orientation, what is the best way to get the most out of the lessons?",
   "opts": [
    "Skip the practice tests and only watch videos",
    "Study only the day before your test date",
    "Memorize the answer keys without reading the questions",
    "Follow the modules in order and complete the practice activities"
   ],
   "correct": 3,
   "exp": "Working through the modules in sequence and doing the practice activities builds skills systematically."
  }
 ],
 "How to Study Effectively": [
  {
   "q": "Which study habit is most likely to improve your TOEFL performance over time?",
   "opts": [
    "Studying consistently in shorter, regular sessions with active practice",
    "Only reading about strategies without ever practicing them",
    "Listening to English passively while doing other tasks",
    "Cramming all content in a single long session the night before"
   ],
   "correct": 0,
   "exp": "Spaced, regular practice with active engagement leads to better long-term retention than cramming."
  },
  {
   "q": "Why is it useful to review your mistakes after each practice test?",
   "opts": [
    "Because ETS adds bonus points for reviewing",
    "Because understanding why you erred helps you avoid repeating the error",
    "Because it lets you skip the harder sections entirely",
    "Because reviewing guarantees a perfect score next time"
   ],
   "correct": 1,
   "exp": "Analyzing errors reveals weak areas so you can target them and stop repeating the same mistakes."
  },
  {
   "q": "What is an effective way to build the academic vocabulary needed for TOEFL?",
   "opts": [
    "Avoiding all unfamiliar words until test day",
    "Memorizing a random dictionary from A to Z",
    "Reading and listening to authentic English and noting new words in context",
    "Translating every English word into your native language only"
   ],
   "correct": 2,
   "exp": "Encountering words in real academic context makes them easier to remember and use correctly."
  }
 ],
 "What is TOEFL?": [
  {
   "q": "What does the acronym TOEFL stand for?",
   "opts": [
    "Test Of Extended Foreign Languages",
    "Teaching Of English For Learners",
    "Trial Of Educational Fluency Levels",
    "Test Of English as a Foreign Language"
   ],
   "correct": 3,
   "exp": "TOEFL stands for Test Of English as a Foreign Language."
  },
  {
   "q": "Which organization creates and administers the TOEFL iBT test?",
   "opts": [
    "ETS (Educational Testing Service)",
    "Cambridge Assessment English",
    "The United Nations Language Board",
    "The British Council"
   ],
   "correct": 0,
   "exp": "The TOEFL iBT is developed and administered by ETS (Educational Testing Service)."
  },
  {
   "q": "Who most commonly needs to take the TOEFL iBT?",
   "opts": [
    "Only people seeking to become English teachers in the UK",
    "Non-native English speakers applying to English-medium universities",
    "Native English speakers renewing a passport",
    "Children learning to read in primary school"
   ],
   "correct": 1,
   "exp": "TOEFL is mainly taken by non-native speakers who need to prove English ability for university admission."
  }
 ],
 "TOEFL Test Structure": [
  {
   "q": "Which four sections make up the TOEFL iBT test?",
   "opts": [
    "Grammar, Vocabulary, Reading, and Essay",
    "Listening, Translation, Speaking, and Dictation",
    "Reading, Listening, Speaking, and Writing",
    "Reading, Math, Speaking, and Writing"
   ],
   "correct": 2,
   "exp": "The TOEFL iBT consists of four sections: Reading, Listening, Speaking, and Writing."
  },
  {
   "q": "In what order are the sections of the TOEFL iBT presented?",
   "opts": [
    "Speaking, Writing, Listening, Reading",
    "Writing, Reading, Speaking, Listening",
    "Listening, Reading, Writing, Speaking",
    "Reading, Listening, Speaking, Writing"
   ],
   "correct": 3,
   "exp": "The test always follows the order Reading, then Listening, then Speaking, then Writing."
  },
  {
   "q": "Which sections of the TOEFL iBT are described as integrated because they combine more than one skill?",
   "opts": [
    "Some Speaking and Writing tasks combine reading and listening with your response",
    "Only the Reading section combines skills",
    "None of the sections combine skills",
    "Only the Listening section combines skills"
   ],
   "correct": 0,
   "exp": "Integrated Speaking and Writing tasks require you to read and or listen and then respond."
  }
 ],
 "Scoring System": [
  {
   "q": "What is the total score range for the TOEFL iBT?",
   "opts": [
    "0 to 100",
    "0 to 120",
    "200 to 800",
    "1 to 9"
   ],
   "correct": 1,
   "exp": "The TOEFL iBT total score ranges from 0 to 120."
  },
  {
   "q": "How many points is each of the four sections worth on the TOEFL iBT?",
   "opts": [
    "0 to 50 points per section",
    "0 to 25 points per section",
    "0 to 30 points per section",
    "0 to 120 points per section"
   ],
   "correct": 2,
   "exp": "Each of the four sections is scored from 0 to 30, which sum to the 0 to 120 total."
  },
  {
   "q": "How is the total TOEFL iBT score of 0 to 120 calculated?",
   "opts": [
    "By averaging the four section scores",
    "By taking only the highest section score",
    "By subtracting wrong answers from a base of 120",
    "By adding the four section scores of 0 to 30 each together"
   ],
   "correct": 3,
   "exp": "The total is the sum of the four section scores, each ranging from 0 to 30."
  }
 ],
 "Study Plan": [
  {
   "q": "What should a good TOEFL study plan be based on first?",
   "opts": [
    "A diagnostic assessment of your current strengths and weaknesses",
    "Only the sections you already find easy",
    "Whatever section comes last on the test",
    "The plan of a random classmate"
   ],
   "correct": 0,
   "exp": "Identifying your current level through a diagnostic lets you target weak areas efficiently."
  },
  {
   "q": "Why is setting a target score important when building your study plan?",
   "opts": [
    "Because ETS requires you to submit a target in advance",
    "Because it helps you allocate study time toward the score your program requires",
    "Because a higher target automatically lowers the test difficulty",
    "Because the target replaces the need to practice"
   ],
   "correct": 1,
   "exp": "Knowing the score your university requires lets you focus effort where it is most needed."
  },
  {
   "q": "Which approach makes a study plan realistic and sustainable?",
   "opts": [
    "Planning to master everything in a single day",
    "Studying twelve hours only on weekends and nothing else",
    "Scheduling regular, manageable study blocks with clear weekly goals",
    "Leaving all Speaking practice until the final hour"
   ],
   "correct": 2,
   "exp": "Consistent, manageable sessions with weekly goals keep progress steady and prevent burnout."
  }
 ],
 "Test Registration": [
  {
   "q": "How do most test takers register for the TOEFL iBT?",
   "opts": [
    "By mailing a handwritten letter to a university",
    "Through a social media message to ETS",
    "By showing up at a test center on any random day",
    "Through an ETS account on the official TOEFL website"
   ],
   "correct": 3,
   "exp": "You register by creating an ETS account and signing up online through the official TOEFL website."
  },
  {
   "q": "What is generally required to complete your TOEFL registration and secure a seat?",
   "opts": [
    "Payment of the test fee and choosing a date and location",
    "Proof of a previous TOEFL score",
    "A letter of recommendation from a teacher",
    "A minimum of two years of English classes"
   ],
   "correct": 0,
   "exp": "Registration is confirmed once you pick a date and center and pay the required test fee."
  },
  {
   "q": "What identification rule must test takers follow on TOEFL test day?",
   "opts": [
    "Bring any photo including a printed selfie",
    "Bring valid, acceptable ID that matches the name used at registration",
    "No identification is needed at the test center",
    "Bring only a student library card"
   ],
   "correct": 1,
   "exp": "You must present valid, official ID whose name matches your registration or you may be turned away."
  }
 ],
 "Time Management": [
  {
   "q": "Why is pacing yourself important during each TOEFL section?",
   "opts": [
    "Because unanswered questions still earn partial credit",
    "Because the timer stops when you look away",
    "Because running out of time leaves questions unanswered and lowers your score",
    "Because extra time is automatically added for slow readers"
   ],
   "correct": 2,
   "exp": "Each section is timed, so poor pacing can leave questions blank and cost you points."
  },
  {
   "q": "What is a smart time-management move if one Reading question is taking too long?",
   "opts": [
    "Stop the whole test and restart it",
    "Spend all remaining time on that single question",
    "Leave the entire passage unanswered",
    "Make your best choice, note it, and move on to keep pace"
   ],
   "correct": 3,
   "exp": "Answering and moving on protects your time so you can reach every question."
  },
  {
   "q": "How should you manage the limited preparation time in the Speaking section?",
   "opts": [
    "Use the short prep seconds to jot quick notes and organize your answer",
    "Use the full response time to stay silent and think",
    "Ignore the prep time and start speaking immediately with no plan",
    "Spend prep time rereading unrelated questions"
   ],
   "correct": 0,
   "exp": "The brief preparation seconds are best used to outline key points so your response stays organized."
  }
 ],
 "Guessing Strategies": [
  {
   "q": "Why should you always answer every TOEFL multiple-choice question even when unsure?",
   "opts": [
    "Because wrong answers subtract two points each",
    "Because there is no penalty for wrong answers, so a guess can only help",
    "Because blank answers score higher than wrong ones",
    "Because guessing is forbidden by ETS rules"
   ],
   "correct": 1,
   "exp": "TOEFL does not penalize wrong answers, so guessing gives a chance at points with nothing to lose."
  },
  {
   "q": "What is the smartest way to improve the odds when you must guess?",
   "opts": [
    "Always pick the longest option",
    "Always choose option A",
    "Eliminate options you know are wrong, then choose among the rest",
    "Pick the answer that repeats the most words from the question"
   ],
   "correct": 2,
   "exp": "Removing clearly wrong choices raises the probability that your remaining guess is correct."
  },
  {
   "q": "If time is running out at the end of a section, what should you do with remaining questions?",
   "opts": [
    "Leave them blank to avoid mistakes",
    "Report the shortage to the proctor for extra time",
    "Erase your earlier answers to save time",
    "Quickly fill in an answer for every remaining question"
   ],
   "correct": 3,
   "exp": "Since blanks score zero and there is no penalty, filling in every remaining answer maximizes your chances."
  }
 ],
 "Common Mistakes": [
  {
   "q": "Which is a common TOEFL Reading mistake test takers should avoid?",
   "opts": [
    "Choosing an answer just because it repeats words from the passage",
    "Reading the questions before answering them",
    "Referring back to the passage to check details",
    "Managing time across all the questions"
   ],
   "correct": 0,
   "exp": "Matching surface wording is a trap; correct answers often paraphrase rather than repeat the text."
  },
  {
   "q": "What common mistake hurts scores on the integrated Speaking and Writing tasks?",
   "opts": [
    "Including information from both the reading and the listening as required",
    "Giving only your personal opinion instead of summarizing the given sources",
    "Organizing your response with clear structure",
    "Taking notes while listening"
   ],
   "correct": 1,
   "exp": "Integrated tasks require you to report the sources, not just share your own unsupported opinion."
  },
  {
   "q": "Which common test-day error should students guard against in the Listening section?",
   "opts": [
    "Taking notes on main ideas while listening",
    "Waiting to hear the passage before answering",
    "Trying to write down every single word instead of key points",
    "Reading each question carefully"
   ],
   "correct": 2,
   "exp": "Attempting to transcribe everything causes you to miss the flow; noting main ideas works better."
  }
 ],
 "Exam-Day Tips": [
  {
   "q": "What should you do the night before your TOEFL exam for best performance?",
   "opts": [
    "Study intensely all night to cover new material",
    "Change your test center at the last minute",
    "Skip breakfast to save time in the morning",
    "Get a good night of sleep and prepare your ID and documents"
   ],
   "correct": 3,
   "exp": "Rest and having your documents ready leave you alert and calm rather than exhausted."
  },
  {
   "q": "Why is it recommended to arrive early at the test center on exam day?",
   "opts": [
    "To allow time for check-in and ID verification without stress",
    "To choose which section you take first",
    "To negotiate a higher target score",
    "To skip the identification process"
   ],
   "correct": 0,
   "exp": "Arriving early gives time for check-in and ID checks so you are not rushed or turned away."
  },
  {
   "q": "During the exam, what is a good habit for staying focused across all four sections?",
   "opts": [
    "Rush through every section as fast as possible",
    "Read each question carefully and use the scheduled break to reset",
    "Ignore the on-screen timer entirely",
    "Discuss answers quietly with a neighbor"
   ],
   "correct": 1,
   "exp": "Careful reading plus using the break to recharge helps maintain focus through the long test."
  }
 ],
 "Stress Management": [
  {
   "q": "Which technique can help calm test anxiety during the TOEFL exam?",
   "opts": [
    "Holding your breath until a question feels easy",
    "Thinking only about how hard the test is",
    "Slow, deep breathing to steady your nerves before continuing",
    "Rushing faster whenever you feel nervous"
   ],
   "correct": 2,
   "exp": "Slow, deep breathing lowers physical tension and helps you refocus on the task."
  },
  {
   "q": "How does thorough preparation help with test-day stress?",
   "opts": [
    "It removes the need to sleep before the test",
    "It guarantees you will never feel any nerves",
    "It lets you skip the hardest section",
    "Familiarity with the format and practice builds confidence and reduces anxiety"
   ],
   "correct": 3,
   "exp": "Knowing what to expect from practice makes the real test feel familiar and less stressful."
  },
  {
   "q": "What mindset helps most if you find one question very difficult during the test?",
   "opts": [
    "Stay calm, make your best choice, and move on to the next question",
    "Panic and reread it many times without moving on",
    "Freeze and stop answering other questions",
    "Assume the whole test is ruined and give up"
   ],
   "correct": 0,
   "exp": "Staying calm and moving on prevents one hard question from derailing your performance on the rest."
  }
 ],
 "Parts of Speech": [
  {
   "q": "In the sentence \"She quickly finished her homework,\" what part of speech is the word quickly?",
   "opts": [
    "Adjective",
    "Adverb",
    "Verb",
    "Noun"
   ],
   "correct": 1,
   "exp": "\"Quickly\" modifies the verb \"finished,\" so it functions as an adverb."
  },
  {
   "q": "Which word in the sentence \"The tall man walked into the room\" is a noun?",
   "opts": [
    "tall",
    "walked",
    "man",
    "into"
   ],
   "correct": 2,
   "exp": "\"Man\" names a person, making it the noun in the sentence."
  },
  {
   "q": "In \"He is running because he is late,\" what part of speech is the word because?",
   "opts": [
    "Preposition",
    "Adjective",
    "Verb",
    "Conjunction"
   ],
   "correct": 3,
   "exp": "\"Because\" joins two clauses, so it is a conjunction."
  }
 ],
 "Nouns": [
  {
   "q": "Which of the following words is a collective noun?",
   "opts": [
    "team",
    "quickly",
    "run",
    "happiness"
   ],
   "correct": 0,
   "exp": "\"Team\" names a group of individuals, so it is a collective noun."
  },
  {
   "q": "What is the correct plural form of the noun child?",
   "opts": [
    "childs",
    "children",
    "childes",
    "childrens"
   ],
   "correct": 1,
   "exp": "\"Child\" has the irregular plural \"children.\""
  },
  {
   "q": "Which sentence uses an abstract noun correctly?",
   "opts": [
    "The table is made of wood.",
    "The dog ran across the yard.",
    "Her courage inspired everyone.",
    "He bought a new car."
   ],
   "correct": 2,
   "exp": "\"Courage\" names an idea or quality, so it is an abstract noun."
  }
 ],
 "Pronouns": [
  {
   "q": "Which pronoun correctly completes \"The gift was given to John and ___\"?",
   "opts": [
    "I",
    "myself",
    "mine",
    "me"
   ],
   "correct": 3,
   "exp": "As the object of the preposition \"to,\" the objective pronoun \"me\" is correct."
  },
  {
   "q": "Which sentence uses a reflexive pronoun correctly?",
   "opts": [
    "She hurt herself while cooking.",
    "She hurt her while cooking.",
    "She hurt she while cooking.",
    "Her hurt she while cooking."
   ],
   "correct": 0,
   "exp": "\"Herself\" is the correct reflexive pronoun referring back to \"she.\""
  },
  {
   "q": "In \"Everyone must bring ___ own lunch,\" which pronoun fits best in formal standard grammar?",
   "opts": [
    "their",
    "his or her",
    "them",
    "theirs"
   ],
   "correct": 1,
   "exp": "\"Everyone\" is singular, so \"his or her\" agrees in formal standard grammar."
  }
 ],
 "Verbs": [
  {
   "q": "Which word is the main verb in \"They have completed the project\"?",
   "opts": [
    "They",
    "have",
    "completed",
    "project"
   ],
   "correct": 2,
   "exp": "\"Completed\" is the main verb expressing the action, while \"have\" is the auxiliary."
  },
  {
   "q": "Which sentence contains a linking verb?",
   "opts": [
    "He kicked the ball.",
    "They built a house.",
    "We ran to school.",
    "She seems tired today."
   ],
   "correct": 3,
   "exp": "\"Seems\" links the subject \"She\" to the description \"tired,\" so it is a linking verb."
  },
  {
   "q": "Which word is the transitive verb in \"The chef prepared a delicious meal\"?",
   "opts": [
    "prepared",
    "delicious",
    "meal",
    "chef"
   ],
   "correct": 0,
   "exp": "\"Prepared\" takes the direct object \"meal,\" making it a transitive verb."
  }
 ],
 "Verb Tenses": [
  {
   "q": "Which sentence is written in the present perfect tense?",
   "opts": [
    "I ate breakfast this morning.",
    "I have eaten breakfast already.",
    "I eat breakfast every day.",
    "I will eat breakfast soon."
   ],
   "correct": 1,
   "exp": "\"Have eaten\" uses \"have\" plus the past participle, forming the present perfect."
  },
  {
   "q": "Which verb form correctly completes \"By next year, she ___ here for a decade\"?",
   "opts": [
    "works",
    "worked",
    "will have worked",
    "is working"
   ],
   "correct": 2,
   "exp": "The future perfect \"will have worked\" describes an action completed before a future point."
  },
  {
   "q": "Which sentence correctly uses the past continuous tense?",
   "opts": [
    "I read when the phone rang.",
    "I have read when the phone rang.",
    "I will read when the phone rang.",
    "I was reading when the phone rang."
   ],
   "correct": 3,
   "exp": "\"Was reading\" shows an ongoing past action interrupted by another, which is the past continuous."
  }
 ],
 "Subject-Verb Agreement": [
  {
   "q": "Which sentence has correct subject-verb agreement?",
   "opts": [
    "The list of items is on the desk.",
    "The list of items were on the desk.",
    "The list of items be on the desk.",
    "The list of items are on the desk."
   ],
   "correct": 0,
   "exp": "The subject \"list\" is singular, so the singular verb \"is\" agrees with it."
  },
  {
   "q": "Which verb correctly completes \"Neither the students nor the teacher ___ ready\"?",
   "opts": [
    "are",
    "is",
    "were",
    "have"
   ],
   "correct": 1,
   "exp": "With \"neither...nor,\" the verb agrees with the nearer subject \"teacher,\" so \"is\" is correct."
  },
  {
   "q": "Which sentence shows correct subject-verb agreement?",
   "opts": [
    "Each of the boys have a bike.",
    "Everybody enjoy the concert.",
    "Each of the boys has a bike.",
    "The childs plays outside."
   ],
   "correct": 2,
   "exp": "\"Each\" is singular and requires the singular verb \"has.\""
  }
 ],
 "Adjectives": [
  {
   "q": "Which sentence orders the adjectives correctly?",
   "opts": [
    "She bought a red big car.",
    "She bought a car big red.",
    "She bought red a big car.",
    "She bought a big red car."
   ],
   "correct": 3,
   "exp": "Size normally comes before color, so \"big red car\" follows correct adjective order."
  },
  {
   "q": "What is the correct comparative form of the adjective good?",
   "opts": [
    "better",
    "more good",
    "best",
    "gooder"
   ],
   "correct": 0,
   "exp": "\"Good\" has the irregular comparative form \"better.\""
  },
  {
   "q": "Which word is a demonstrative adjective in \"This book belongs to her\"?",
   "opts": [
    "book",
    "This",
    "belongs",
    "her"
   ],
   "correct": 1,
   "exp": "\"This\" points to a specific noun \"book,\" so it is a demonstrative adjective."
  }
 ],
 "Adverbs": [
  {
   "q": "Which sentence places the adverb of frequency correctly?",
   "opts": [
    "She goes always to the gym.",
    "Always she goes to the gym.",
    "She always goes to the gym.",
    "She goes to the gym always fast."
   ],
   "correct": 2,
   "exp": "Adverbs of frequency like \"always\" usually come before the main verb, as in \"always goes.\""
  },
  {
   "q": "Which word is the adverb in \"He spoke very softly to the child\"?",
   "opts": [
    "He",
    "spoke",
    "child",
    "softly"
   ],
   "correct": 3,
   "exp": "\"Softly\" describes how he spoke, so it is the adverb modifying the verb."
  },
  {
   "q": "Which sentence correctly uses an adverb rather than an adjective?",
   "opts": [
    "She sings beautifully.",
    "She sing beautifully.",
    "She beautiful sings.",
    "She sings beautiful."
   ],
   "correct": 0,
   "exp": "\"Beautifully\" is an adverb modifying the verb \"sings,\" which is grammatically correct."
  }
 ],
 "Prepositions": [
  {
   "q": "Which preposition correctly completes \"The meeting is scheduled ___ Monday\"?",
   "opts": [
    "in",
    "on",
    "at",
    "of"
   ],
   "correct": 1,
   "exp": "Days of the week take the preposition \"on,\" as in \"on Monday.\""
  },
  {
   "q": "Which preposition correctly completes \"She is good ___ mathematics\"?",
   "opts": [
    "in",
    "on",
    "at",
    "for"
   ],
   "correct": 2,
   "exp": "The idiomatic phrase \"good at\" is used with skills and subjects."
  },
  {
   "q": "Which sentence uses a preposition of place correctly?",
   "opts": [
    "The keys are in the table.",
    "He arrived to home late.",
    "She is married with him.",
    "The cat is on the box."
   ],
   "correct": 3,
   "exp": "\"On\" correctly shows the cat resting on the surface of the box."
  }
 ],
 "Conjunctions": [
  {
   "q": "Which of the following words is a coordinating conjunction?",
   "opts": [
    "but",
    "because",
    "unless",
    "although"
   ],
   "correct": 0,
   "exp": "\"But\" joins equal grammatical elements, making it a coordinating conjunction."
  },
  {
   "q": "Which correlative pair completes \"___ the movie ___ the book was interesting\"?",
   "opts": [
    "Either...nor",
    "Both...and",
    "Neither...or",
    "Not...but nor"
   ],
   "correct": 1,
   "exp": "\"Both...and\" is the correct correlative pair to link two positive items."
  },
  {
   "q": "Which sentence correctly uses a subordinating conjunction?",
   "opts": [
    "I stayed home, and it rained.",
    "I stayed home, but rained.",
    "I stayed home because it was raining.",
    "I stayed home, or it rained."
   ],
   "correct": 2,
   "exp": "\"Because\" introduces a dependent clause giving the reason, so it is a subordinating conjunction."
  }
 ],
 "Articles": [
  {
   "q": "Which article correctly completes \"She is ___ honest person\"?",
   "opts": [
    "a",
    "the",
    "no article",
    "an"
   ],
   "correct": 3,
   "exp": "\"Honest\" begins with a vowel sound because the \"h\" is silent, so \"an\" is correct."
  },
  {
   "q": "Which sentence uses the definite article correctly?",
   "opts": [
    "The sun rises in the east.",
    "Sun rises in east.",
    "A sun rises in the east.",
    "I saw a sun this morning."
   ],
   "correct": 0,
   "exp": "Unique objects like \"the sun\" take the definite article \"the.\""
  },
  {
   "q": "Which sentence uses articles correctly?",
   "opts": [
    "He plays a guitar the every evening.",
    "He plays the guitar every evening.",
    "He plays guitar the every evening.",
    "He plays an guitar every evening."
   ],
   "correct": 1,
   "exp": "Musical instruments take the definite article, so \"the guitar\" is correct."
  }
 ],
 "Active & Passive Voice": [
  {
   "q": "What is the passive form of \"The chef cooked the meal\"?",
   "opts": [
    "The meal cooked the chef.",
    "The chef was cooking the meal.",
    "The meal was cooked by the chef.",
    "The meal cooks by the chef."
   ],
   "correct": 2,
   "exp": "The passive uses \"was\" plus the past participle with \"by the chef\" as the agent."
  },
  {
   "q": "Which sentence is written in the active voice?",
   "opts": [
    "The letter was written by Sara.",
    "The window was broken.",
    "The song is being sung.",
    "Sara wrote the letter."
   ],
   "correct": 3,
   "exp": "In \"Sara wrote the letter,\" the subject performs the action, so it is active voice."
  },
  {
   "q": "What is the correct passive form of \"They will announce the results tomorrow\"?",
   "opts": [
    "The results will be announced tomorrow.",
    "The results will announcing tomorrow.",
    "The results are announce tomorrow.",
    "The results announce tomorrow."
   ],
   "correct": 0,
   "exp": "The future passive uses \"will be\" plus the past participle \"announced.\""
  }
 ],
 "Direct & Indirect Speech": [
  {
   "q": "What is the correct indirect form of \"She said, I am tired\"?",
   "opts": [
    "She said that she is tired.",
    "She said that she was tired.",
    "She said that I am tired.",
    "She says that she tired."
   ],
   "correct": 1,
   "exp": "In reported speech, present tense \"am\" shifts back to past tense \"was.\""
  },
  {
   "q": "What is the correct indirect form of \"He asked, Where do you live\"?",
   "opts": [
    "He asked where do you live.",
    "He asked where did I live.",
    "He asked where I lived.",
    "He asked where I live."
   ],
   "correct": 2,
   "exp": "Reported questions use statement word order and shift the tense: \"where I lived.\""
  },
  {
   "q": "What is the correct reported form of \"They said, We will help you\"?",
   "opts": [
    "They said they will help me.",
    "They said we would help you.",
    "They said they help me.",
    "They said they would help me."
   ],
   "correct": 3,
   "exp": "\"Will\" changes to \"would\" and \"we/you\" shift to \"they/me\" in reported speech."
  }
 ],
 "Conditional Sentences": [
  {
   "q": "Which verb form completes the second conditional \"If I ___ rich, I would travel the world\"?",
   "opts": [
    "were",
    "was",
    "will be",
    "am"
   ],
   "correct": 0,
   "exp": "The second conditional uses \"were\" for all subjects in the hypothetical if-clause."
  },
  {
   "q": "Which sentence is a correct first conditional?",
   "opts": [
    "If it rains, I stayed home.",
    "If it rains, I will stay home.",
    "If it will rain, I stay home.",
    "If it rained, I will stay home."
   ],
   "correct": 1,
   "exp": "The first conditional uses present tense in the if-clause and \"will\" in the main clause."
  },
  {
   "q": "Which sentence is a correct third conditional?",
   "opts": [
    "If she had studied, she would pass.",
    "If she studied, she would have passed.",
    "If she had studied, she would have passed.",
    "If she studies, she would have passed."
   ],
   "correct": 2,
   "exp": "The third conditional uses \"had studied\" and \"would have passed\" for unreal past situations."
  }
 ],
 "Relative Clauses": [
  {
   "q": "Which relative pronoun correctly completes \"The man ___ called you is my uncle\"?",
   "opts": [
    "which",
    "whom",
    "whose",
    "who"
   ],
   "correct": 3,
   "exp": "\"Who\" refers to a person acting as the subject of the relative clause."
  },
  {
   "q": "Which sentence uses a non-defining relative clause correctly?",
   "opts": [
    "My brother, who lives in Paris, is a doctor.",
    "My brother which lives in Paris is a doctor.",
    "My brother who lives in Paris, is a doctor.",
    "My brother who lives in Paris is a doctor."
   ],
   "correct": 0,
   "exp": "Non-defining clauses give extra information and are set off by commas."
  },
  {
   "q": "Which relative pronoun correctly completes \"This is the book ___ pages are torn\"?",
   "opts": [
    "who",
    "whose",
    "which",
    "that"
   ],
   "correct": 1,
   "exp": "\"Whose\" shows possession, correctly linking the book to its pages."
  }
 ],
 "Modals": [
  {
   "q": "Which modal best expresses strong obligation in \"You ___ wear a seatbelt while driving\"?",
   "opts": [
    "might",
    "could",
    "must",
    "may"
   ],
   "correct": 2,
   "exp": "\"Must\" expresses strong obligation or necessity."
  },
  {
   "q": "Which modal is best for asking polite permission in \"___ I open the window\"?",
   "opts": [
    "Should",
    "Must",
    "Would",
    "May"
   ],
   "correct": 3,
   "exp": "\"May\" is used to ask for polite permission."
  },
  {
   "q": "Which sentence uses a modal of deduction correctly?",
   "opts": [
    "He must be at home; his car is here.",
    "He musts be at home.",
    "He must being at home.",
    "He must to be at home."
   ],
   "correct": 0,
   "exp": "\"Must be\" expresses a logical deduction and is followed by the base verb."
  }
 ],
 "Gerunds & Infinitives": [
  {
   "q": "Which form correctly completes \"She enjoys ___ in the morning\"?",
   "opts": [
    "to run",
    "running",
    "run",
    "runs"
   ],
   "correct": 1,
   "exp": "The verb \"enjoy\" is followed by a gerund, so \"running\" is correct."
  },
  {
   "q": "Which sentence uses an infinitive correctly?",
   "opts": [
    "I want going home.",
    "I want go home.",
    "I want to go home.",
    "I want gone home."
   ],
   "correct": 2,
   "exp": "\"Want\" is followed by the infinitive \"to go.\""
  },
  {
   "q": "Which sentence uses a gerund correctly after the verb?",
   "opts": [
    "He decided leaving early.",
    "He avoided to speak in public.",
    "He avoided speak in public.",
    "He avoided speaking in public."
   ],
   "correct": 3,
   "exp": "\"Avoid\" is followed by a gerund, so \"speaking\" is correct."
  }
 ],
 "Punctuation": [
  {
   "q": "Which sentence is punctuated correctly?",
   "opts": [
    "It's a beautiful day, isn't it?",
    "Its a beautiful day isn't it.",
    "It's a beautiful day isnt it?",
    "Its a beautiful day, isnt it?"
   ],
   "correct": 0,
   "exp": "\"It's\" and \"isn't\" need apostrophes, and the tag question needs a comma and question mark."
  },
  {
   "q": "Where should the comma go in \"After the storm passed we went outside\"?",
   "opts": [
    "After, the storm passed we went outside.",
    "After the storm passed, we went outside.",
    "After the storm, passed we went outside.",
    "After the storm passed we, went outside."
   ],
   "correct": 1,
   "exp": "A comma follows an introductory clause, placed after \"passed.\""
  },
  {
   "q": "Which sentence uses the semicolon correctly?",
   "opts": [
    "I have; a test tomorrow I need to study.",
    "I have a test tomorrow; and I need to study.",
    "I have a test tomorrow; I need to study tonight.",
    "I have a test tomorrow I need; to study."
   ],
   "correct": 2,
   "exp": "A semicolon correctly joins two related independent clauses without a conjunction."
  }
 ],
 "Common Grammar Mistakes": [
  {
   "q": "Which sentence is grammatically correct?",
   "opts": [
    "Their going to the store.",
    "There going to the store.",
    "Theyre going to the store.",
    "They're going to the store."
   ],
   "correct": 3,
   "exp": "\"They're\" is the contraction of \"they are,\" which is correct here."
  },
  {
   "q": "Which sentence is grammatically correct?",
   "opts": [
    "You should have called me.",
    "You should have call me.",
    "You should has called me.",
    "You should of called me."
   ],
   "correct": 0,
   "exp": "\"Should have\" is correct; \"should of\" is a common error caused by mishearing."
  },
  {
   "q": "Which sentence uses fewer and less correctly?",
   "opts": [
    "There are less cars and fewer traffic today.",
    "There are fewer cars and less traffic today.",
    "There are less cars and less traffic today.",
    "There are fewer cars and fewer traffic today."
   ],
   "correct": 1,
   "exp": "\"Fewer\" is used with countable nouns like cars and \"less\" with uncountable nouns like traffic."
  }
 ],
 "Academic Vocabulary": [
  {
   "q": "Which word is most typical of formal academic writing rather than casual speech?",
   "opts": [
    "get",
    "a lot of",
    "demonstrate",
    "stuff"
   ],
   "correct": 2,
   "exp": "Demonstrate is a precise, formal verb preferred in academic prose, while the others are informal."
  },
  {
   "q": "In the sentence 'The data corroborate the theory,' what does 'corroborate' most nearly mean?",
   "opts": [
    "contradict",
    "ignore",
    "delay",
    "support"
   ],
   "correct": 3,
   "exp": "To corroborate is to confirm or support with evidence."
  },
  {
   "q": "Why is academic vocabulary such as 'significant' or 'analyze' important on the TOEFL?",
   "opts": [
    "It appears frequently across academic texts and lectures",
    "It replaces the need for grammar",
    "It is banned in the writing section",
    "It is only used in casual conversation"
   ],
   "correct": 0,
   "exp": "Academic word-list terms recur across university-level readings and lectures, so knowing them aids comprehension."
  }
 ],
 "Word Formation": [
  {
   "q": "Which noun is correctly formed from the verb 'decide'?",
   "opts": [
    "decidely",
    "decision",
    "decisive",
    "deciding"
   ],
   "correct": 1,
   "exp": "Adding the suffix -sion to 'decide' produces the noun 'decision'."
  },
  {
   "q": "To complete 'The scientist made an important ____,' which form of 'observe' fits?",
   "opts": [
    "observant",
    "observably",
    "observation",
    "observe"
   ],
   "correct": 2,
   "exp": "The noun 'observation' is needed after the article and adjective."
  },
  {
   "q": "What does word formation mainly involve?",
   "opts": [
    "Memorizing unrelated words",
    "Translating words into another language",
    "Spelling words backwards",
    "Building new words by adding affixes or changing form"
   ],
   "correct": 3,
   "exp": "Word formation creates related words through affixes and part-of-speech changes."
  }
 ],
 "Prefixes & Suffixes": [
  {
   "q": "What does the prefix 'un-' do to the meaning of a word like 'happy'?",
   "opts": [
    "Reverses or negates it",
    "Makes it a verb",
    "Makes it plural",
    "Intensifies it"
   ],
   "correct": 0,
   "exp": "The prefix 'un-' negates the meaning, so 'unhappy' means not happy."
  },
  {
   "q": "Which suffix changes the adjective 'quick' into an adverb?",
   "opts": [
    "-ness",
    "-ly",
    "-er",
    "-ful"
   ],
   "correct": 1,
   "exp": "Adding -ly to 'quick' forms the adverb 'quickly'."
  },
  {
   "q": "The prefix 're-' in 'rewrite' adds which meaning?",
   "opts": [
    "Before",
    "Not",
    "Again",
    "Under"
   ],
   "correct": 2,
   "exp": "The prefix 're-' means again, so 'rewrite' means write again."
  }
 ],
 "Synonyms": [
  {
   "q": "Which word is the closest synonym for 'enormous'?",
   "opts": [
    "tiny",
    "quiet",
    "rapid",
    "huge"
   ],
   "correct": 3,
   "exp": "'Enormous' and 'huge' both mean very large."
  },
  {
   "q": "A synonym is best defined as a word that has which relationship to another?",
   "opts": [
    "Same or nearly the same meaning",
    "Same spelling",
    "Unrelated meaning",
    "Opposite meaning"
   ],
   "correct": 0,
   "exp": "Synonyms share the same or a very similar meaning."
  },
  {
   "q": "Which of these is a synonym for 'begin'?",
   "opts": [
    "finish",
    "commence",
    "delay",
    "cancel"
   ],
   "correct": 1,
   "exp": "'Commence' is a synonym for 'begin', meaning to start."
  }
 ],
 "Antonyms": [
  {
   "q": "Which word is the antonym of 'ancient'?",
   "opts": [
    "old",
    "historic",
    "modern",
    "aged"
   ],
   "correct": 2,
   "exp": "'Modern' is the opposite of 'ancient'."
  },
  {
   "q": "An antonym of a word has which relationship to it?",
   "opts": [
    "Identical meaning",
    "Same sound",
    "Same origin",
    "Opposite meaning"
   ],
   "correct": 3,
   "exp": "Antonyms express opposite meanings."
  },
  {
   "q": "Which pair are antonyms?",
   "opts": [
    "increase and decrease",
    "fast and quick",
    "happy and glad",
    "big and large"
   ],
   "correct": 0,
   "exp": "'Increase' and 'decrease' are opposites, while the other pairs are synonyms."
  }
 ],
 "Collocations": [
  {
   "q": "Which word naturally collocates with 'make' in standard English?",
   "opts": [
    "make homework",
    "make a decision",
    "make sleep",
    "make rain"
   ],
   "correct": 1,
   "exp": "'Make a decision' is a fixed, natural collocation in English."
  },
  {
   "q": "What is a collocation?",
   "opts": [
    "A single long word",
    "A pair of opposites",
    "Words that habitually go together",
    "A grammar rule for tenses"
   ],
   "correct": 2,
   "exp": "A collocation is a combination of words that commonly occur together."
  },
  {
   "q": "Which verb correctly collocates with 'a photo'?",
   "opts": [
    "do",
    "get",
    "put",
    "take"
   ],
   "correct": 3,
   "exp": "English uses 'take a photo', not 'do' or 'make' a photo."
  }
 ],
 "Idioms": [
  {
   "q": "What does the idiom 'hit the books' mean?",
   "opts": [
    "To study hard",
    "To buy new books",
    "To throw something",
    "To damage books"
   ],
   "correct": 0,
   "exp": "'Hit the books' is an idiom meaning to study intensively."
  },
  {
   "q": "If something 'costs an arm and a leg', it is what?",
   "opts": [
    "Very cheap",
    "Very expensive",
    "Free of charge",
    "Broken"
   ],
   "correct": 1,
   "exp": "The idiom means something is very expensive."
  },
  {
   "q": "Why can idioms be tricky for learners?",
   "opts": [
    "They are always spelled wrong",
    "They only appear in writing",
    "Their meaning cannot be guessed from the individual words",
    "They have no meaning at all"
   ],
   "correct": 2,
   "exp": "Idioms are figurative, so their meaning differs from the literal words."
  }
 ],
 "Phrasal Verbs": [
  {
   "q": "What does the phrasal verb 'give up' mean?",
   "opts": [
    "Continue trying",
    "Give a gift",
    "Look upward",
    "Stop or quit"
   ],
   "correct": 3,
   "exp": "'Give up' means to stop doing or quit something."
  },
  {
   "q": "A phrasal verb is formed by combining a verb with what?",
   "opts": [
    "A particle such as a preposition or adverb",
    "A noun subject",
    "A question mark",
    "Another full verb"
   ],
   "correct": 0,
   "exp": "Phrasal verbs join a verb with a particle that changes its meaning."
  },
  {
   "q": "In 'She looks after her sister,' what does 'look after' mean?",
   "opts": [
    "Search for",
    "Take care of",
    "Look behind",
    "Ignore"
   ],
   "correct": 1,
   "exp": "'Look after' means to take care of someone."
  }
 ],
 "Context Clues": [
  {
   "q": "Using context clues means you determine a word's meaning by doing what?",
   "opts": [
    "Skipping the sentence entirely",
    "Counting the letters",
    "Using surrounding words and sentences",
    "Translating it word for word"
   ],
   "correct": 2,
   "exp": "Context clues rely on nearby words and ideas to infer meaning."
  },
  {
   "q": "In 'The nocturnal owl hunts only at night,' what clue reveals 'nocturnal' means active at night?",
   "opts": [
    "The word owl",
    "The word hunts",
    "The word the",
    "The phrase 'only at night'"
   ],
   "correct": 3,
   "exp": "'Only at night' defines nocturnal directly within the sentence."
  },
  {
   "q": "Which type of context clue gives the opposite meaning to help define a word?",
   "opts": [
    "Contrast clue",
    "Rhyme clue",
    "Spelling clue",
    "Repetition clue"
   ],
   "correct": 0,
   "exp": "A contrast clue signals meaning through an opposing idea, often after 'but' or 'unlike'."
  }
 ],
 "Vocabulary Review": [
  {
   "q": "What is the most effective way to retain new vocabulary long term?",
   "opts": [
    "Reading a word once",
    "Regular spaced review and use in context",
    "Memorizing only spellings",
    "Avoiding the words in writing"
   ],
   "correct": 1,
   "exp": "Spaced repetition and using words in context strengthen long-term memory."
  },
  {
   "q": "Which strategy best helps you learn a word's real usage?",
   "opts": [
    "Learning only its dictionary length",
    "Learning it without meaning",
    "Learning it with example sentences and collocations",
    "Ignoring its part of speech"
   ],
   "correct": 2,
   "exp": "Seeing a word in example sentences and collocations shows how it is actually used."
  },
  {
   "q": "On the TOEFL, a strong vocabulary most directly improves which skills?",
   "opts": [
    "Only handwriting",
    "Only typing speed",
    "Nothing measurable",
    "Reading and listening comprehension"
   ],
   "correct": 3,
   "exp": "A broad vocabulary helps you understand academic reading passages and lectures."
  }
 ],
 "English Sounds": [
  {
   "q": "The 'th' in 'think' represents which type of English sound?",
   "opts": [
    "A voiceless dental fricative",
    "A rolled r",
    "A silent letter",
    "A nasal sound"
   ],
   "correct": 0,
   "exp": "'Th' in 'think' is a voiceless dental fricative made with the tongue near the teeth."
  },
  {
   "q": "Which pair shows the difference between a voiced and a voiceless consonant?",
   "opts": [
    "m and n",
    "b and p",
    "a and e",
    "l and r"
   ],
   "correct": 1,
   "exp": "'B' is voiced and 'p' is voiceless, differing only in vocal-cord vibration."
  },
  {
   "q": "Why do many learners confuse the vowels in 'ship' and 'sheep'?",
   "opts": [
    "They are spelled identically",
    "They are both silent",
    "They are short versus long vowel sounds that must be distinguished",
    "They are consonants"
   ],
   "correct": 2,
   "exp": "'Ship' has a short vowel and 'sheep' a long one, a contrast learners must master."
  }
 ],
 "Stress": [
  {
   "q": "In the noun 'PREsent' (a gift), which syllable is stressed?",
   "opts": [
    "The second syllable",
    "Both equally",
    "Neither",
    "The first syllable"
   ],
   "correct": 3,
   "exp": "The noun 'present' stresses the first syllable, unlike the verb 'preSENT'."
  },
  {
   "q": "How does word stress typically differ between the noun and verb 'record'?",
   "opts": [
    "Noun stresses first syllable, verb stresses second",
    "Both stress the last syllable",
    "Verbs are never stressed",
    "Stress never changes"
   ],
   "correct": 0,
   "exp": "'REcord' (noun) stresses the first syllable while 're-CORD' (verb) stresses the second."
  },
  {
   "q": "What is sentence stress used for in spoken English?",
   "opts": [
    "To make every word equally loud",
    "To highlight the most important words",
    "To remove all vowels",
    "To end questions only"
   ],
   "correct": 1,
   "exp": "Sentence stress emphasizes key content words so listeners catch the main meaning."
  }
 ],
 "Intonation": [
  {
   "q": "A rising intonation at the end of a sentence typically signals what?",
   "opts": [
    "A completed statement",
    "A command",
    "A yes or no question",
    "Silence"
   ],
   "correct": 2,
   "exp": "Rising intonation commonly marks yes/no questions in English."
  },
  {
   "q": "What does falling intonation usually indicate?",
   "opts": [
    "Uncertainty",
    "A list that continues",
    "Surprise only",
    "A finished statement or wh-question"
   ],
   "correct": 3,
   "exp": "Falling intonation signals completeness, as in statements and wh-questions."
  },
  {
   "q": "Intonation refers to which feature of speech?",
   "opts": [
    "The rise and fall of pitch",
    "The number of syllables",
    "The speed of typing",
    "The spelling of words"
   ],
   "correct": 0,
   "exp": "Intonation is the pattern of pitch movement across an utterance."
  }
 ],
 "Connected Speech": [
  {
   "q": "In connected speech, the phrase 'want to' is often pronounced as what?",
   "opts": [
    "want too",
    "wanna",
    "won't",
    "wan"
   ],
   "correct": 1,
   "exp": "In relaxed connected speech 'want to' reduces to 'wanna'."
  },
  {
   "q": "What happens in the linking of 'an apple' in natural speech?",
   "opts": [
    "The words are separated by a pause",
    "The a is dropped",
    "The final n links to the vowel, sounding like a-napple",
    "The apple becomes silent"
   ],
   "correct": 2,
   "exp": "A final consonant links to a following vowel, so 'an apple' sounds joined."
  },
  {
   "q": "Connected speech mainly describes how sounds do what between words?",
   "opts": [
    "Stay completely separate",
    "Disappear entirely",
    "Become louder each time",
    "Link, reduce, or change"
   ],
   "correct": 3,
   "exp": "In connected speech neighboring sounds link, reduce, or blend together."
  }
 ],
 "Public Speaking Practice": [
  {
   "q": "During the TOEFL Speaking section, why is pacing important?",
   "opts": [
    "Speaking too fast or too slow reduces clarity",
    "Pausing is forbidden",
    "Pace has no effect on scores",
    "Faster is always better"
   ],
   "correct": 0,
   "exp": "A steady pace keeps speech clear and understandable to the listener."
  },
  {
   "q": "Which practice best improves fluency for public speaking?",
   "opts": [
    "Memorizing without understanding",
    "Regular timed speaking practice with feedback",
    "Never recording yourself",
    "Avoiding all preparation"
   ],
   "correct": 1,
   "exp": "Timed practice with feedback builds fluency and confidence."
  },
  {
   "q": "When organizing a spoken response, what helps listeners follow your ideas?",
   "opts": [
    "Speaking with no pauses at all",
    "Avoiding any main point",
    "Using clear transitions and structure",
    "Whispering the conclusion"
   ],
   "correct": 2,
   "exp": "Clear structure and transitions guide listeners through your points."
  }
 ],
 "Reading Strategies": [
  {
   "q": "Before reading the full passage in detail, what is the most effective first strategy on the TOEFL Reading section?",
   "opts": [
    "Memorize every unfamiliar word",
    "Answer the questions before reading anything",
    "Translate each paragraph into your first language",
    "Preview the passage by reading the title and first sentences to grasp the topic"
   ],
   "correct": 3,
   "exp": "Previewing the title and opening sentences builds a mental framework before detailed reading."
  },
  {
   "q": "Why is it recommended to read the question before locating the answer in the passage?",
   "opts": [
    "It focuses your search on the specific information the question requires",
    "It guarantees the answer is in the first paragraph",
    "It lets you skip the passage entirely",
    "It removes the need to read carefully"
   ],
   "correct": 0,
   "exp": "Knowing the question first directs your attention to the relevant part of the text."
  },
  {
   "q": "Which approach best manages time across a TOEFL Reading passage with its questions?",
   "opts": [
    "Spend all the time on the hardest question",
    "Answer questions in order, returning to marked hard ones if time allows",
    "Read the whole passage word by word twice before starting",
    "Guess on every question without reading"
   ],
   "correct": 1,
   "exp": "Answering in order and flagging hard items for review keeps pacing steady across the set."
  }
 ],
 "Skimming": [
  {
   "q": "What is the primary purpose of skimming a passage?",
   "opts": [
    "To memorize the passage word for word",
    "To find one specific number or name",
    "To quickly get the general idea and overall structure",
    "To check spelling errors"
   ],
   "correct": 2,
   "exp": "Skimming is reading quickly to grasp the main idea and organization, not details."
  },
  {
   "q": "When skimming, which parts of the text should you focus on most?",
   "opts": [
    "Every adjective and adverb",
    "Random middle sentences",
    "Only the footnotes",
    "Topic sentences and the first and last lines of paragraphs"
   ],
   "correct": 3,
   "exp": "Topic sentences and paragraph openings and closings carry the main ideas you skim for."
  },
  {
   "q": "Skimming differs from careful reading mainly because it is done at a speed that lets you:",
   "opts": [
    "Cover a lot of text rapidly to sense the gist",
    "Analyze the author's word choice deeply",
    "Understand every grammatical detail",
    "Recall exact statistics later"
   ],
   "correct": 0,
   "exp": "Skimming trades depth for speed, giving you the gist rather than full detail."
  }
 ],
 "Scanning": [
  {
   "q": "Scanning is the reading technique you use when you need to:",
   "opts": [
    "Understand the author's overall argument",
    "Locate specific information such as a date, name, or number",
    "Summarize the entire passage",
    "Evaluate the tone of the writing"
   ],
   "correct": 1,
   "exp": "Scanning is searching quickly for a particular piece of specific information."
  },
  {
   "q": "Which task is best accomplished by scanning rather than skimming?",
   "opts": [
    "Deciding the passage's main idea",
    "Judging the writer's attitude",
    "Finding the year an event occurred",
    "Understanding the general structure"
   ],
   "correct": 2,
   "exp": "Finding a precise fact like a year is exactly what scanning targets."
  },
  {
   "q": "When scanning for a keyword, what should your eyes do?",
   "opts": [
    "Read every word slowly from start to finish",
    "Focus only on punctuation marks",
    "Stop at the first paragraph and reread it",
    "Move quickly over the text looking only for the target word or its synonyms"
   ],
   "correct": 3,
   "exp": "Scanning means sweeping the text rapidly, seeking only the target word or its synonyms."
  }
 ],
 "Main Ideas": [
  {
   "q": "The main idea of a paragraph is best described as:",
   "opts": [
    "The central point the paragraph is making",
    "The single date mentioned in it",
    "A minor example given by the author",
    "The longest sentence present"
   ],
   "correct": 0,
   "exp": "The main idea is the central point around which the paragraph's details are organized."
  },
  {
   "q": "Where is the main idea of a paragraph most commonly located?",
   "opts": [
    "Only in the final footnote",
    "In the topic sentence, often at the beginning",
    "Scattered randomly with no pattern",
    "Never stated and always implied"
   ],
   "correct": 1,
   "exp": "The topic sentence, frequently the first sentence, usually states the main idea."
  },
  {
   "q": "A correct answer to a main-idea question typically:",
   "opts": [
    "Repeats one small supporting detail",
    "Introduces information not in the passage",
    "Covers the broad point of the whole passage without being too narrow or too broad",
    "Focuses on a single example only"
   ],
   "correct": 2,
   "exp": "The best main-idea answer captures the overall point at the right level of generality."
  }
 ],
 "Supporting Details": [
  {
   "q": "What is the function of supporting details in a passage?",
   "opts": [
    "To restate the title",
    "To replace the conclusion",
    "To confuse the reader",
    "To provide examples, facts, or reasons that back up the main idea"
   ],
   "correct": 3,
   "exp": "Supporting details give the evidence and examples that develop the main idea."
  },
  {
   "q": "A detail (factual information) question on the TOEFL asks you to:",
   "opts": [
    "Identify specific information explicitly stated in the passage",
    "Predict future events",
    "Guess the author's feelings",
    "Summarize the whole passage in one word"
   ],
   "correct": 0,
   "exp": "Detail questions test information that is directly and explicitly stated in the text."
  },
  {
   "q": "Which is the safest way to answer a supporting-detail question?",
   "opts": [
    "Rely on your outside knowledge",
    "Locate and reread the relevant sentence in the passage",
    "Choose the longest answer choice",
    "Pick the option with the most difficult vocabulary"
   ],
   "correct": 1,
   "exp": "Returning to the exact sentence in the passage confirms the stated detail."
  }
 ],
 "Vocabulary Questions": [
  {
   "q": "In a TOEFL vocabulary question, the highlighted word should be understood based on:",
   "opts": [
    "Its sound when spoken aloud",
    "Only its most common dictionary definition",
    "Its meaning in the surrounding context of the passage",
    "The number of letters it contains"
   ],
   "correct": 2,
   "exp": "Vocabulary items test the word's meaning as used in that specific context."
  },
  {
   "q": "A useful strategy when you do not know a highlighted vocabulary word is to:",
   "opts": [
    "Skip the passage entirely",
    "Always pick the first choice",
    "Choose the rarest-looking word",
    "Substitute each answer choice into the sentence to see which fits"
   ],
   "correct": 3,
   "exp": "Plugging each option back into the sentence reveals which preserves the meaning."
  },
  {
   "q": "Vocabulary questions usually ask which word or phrase is closest in meaning, so the correct answer is a:",
   "opts": [
    "Synonym that fits the context",
    "Direct antonym of the word",
    "Word that rhymes with it",
    "Completely unrelated technical term"
   ],
   "correct": 0,
   "exp": "The answer is a synonym that keeps the same meaning in context."
  }
 ],
 "Inference Questions": [
  {
   "q": "What does an inference question require you to do?",
   "opts": [
    "Repeat an exact sentence from the audio",
    "Draw a logical conclusion that is implied but not directly stated",
    "Define a vocabulary word",
    "Count the speakers"
   ],
   "correct": 1,
   "exp": "Inference questions ask for a conclusion supported by clues rather than an explicit statement."
  },
  {
   "q": "A correct inference answer must be what?",
   "opts": [
    "The opposite of what was said",
    "Based on your outside knowledge only",
    "Logically supported by evidence in the passage",
    "Directly quoted in the passage"
   ],
   "correct": 2,
   "exp": "A valid inference follows logically from what the speaker implied in the audio."
  },
  {
   "q": "Which is a common mistake on inference questions?",
   "opts": [
    "Reasoning from the passage content",
    "Using clues from the speaker's words",
    "Considering the speaker's implied meaning",
    "Choosing a conclusion that goes far beyond what the evidence supports"
   ],
   "correct": 3,
   "exp": "Over-reaching to a conclusion the audio does not support leads to wrong answers."
  }
 ],
 "Reference Questions": [
  {
   "q": "A reference question typically asks you to identify:",
   "opts": [
    "The noun that a highlighted pronoun refers to",
    "The author's nationality",
    "The main idea of the passage",
    "The publication date"
   ],
   "correct": 0,
   "exp": "Reference questions test which noun a pronoun such as it, they, or this points back to."
  },
  {
   "q": "To confirm a pronoun's referent, you should:",
   "opts": [
    "Count the syllables",
    "Replace the pronoun with your chosen noun and check it makes sense",
    "Look only at the last paragraph",
    "Pick any nearby proper name"
   ],
   "correct": 1,
   "exp": "Substituting the candidate noun for the pronoun verifies grammatical and logical fit."
  },
  {
   "q": "A pronoun and its referent must usually agree in:",
   "opts": [
    "Spelling",
    "Rhyme",
    "Number, and often be nearby in the text",
    "Font style"
   ],
   "correct": 2,
   "exp": "The referent must agree in number and typically appears close before the pronoun."
  }
 ],
 "Sentence Simplification": [
  {
   "q": "In a sentence simplification question, the correct choice must:",
   "opts": [
    "Add new information to the original",
    "Be longer and more complex than the original",
    "Contradict the original sentence",
    "Keep the essential meaning while leaving out or changing minor details"
   ],
   "correct": 3,
   "exp": "The right answer restates the essential meaning without adding or contradicting information."
  },
  {
   "q": "Why would an answer choice be wrong in a sentence simplification question even if it is grammatically correct?",
   "opts": [
    "Because it leaves out an essential idea or changes the meaning",
    "Because it uses simple words",
    "Because it is shorter",
    "Because it repeats the main clause"
   ],
   "correct": 0,
   "exp": "Choices that omit essential ideas or alter meaning are incorrect regardless of grammar."
  },
  {
   "q": "The best way to check a sentence simplification answer is to:",
   "opts": [
    "Count how many words it has",
    "Compare its core meaning against the original highlighted sentence",
    "See if it starts with the same word",
    "Choose the one with the hardest vocabulary"
   ],
   "correct": 1,
   "exp": "Matching the core meaning to the original sentence confirms the correct simplification."
  }
 ],
 "Summary Questions": [
  {
   "q": "In a prose summary question, you select the answer choices that:",
   "opts": [
    "Are false statements",
    "Mention minor details and examples",
    "Express the major ideas of the passage",
    "Contain the newest vocabulary"
   ],
   "correct": 2,
   "exp": "Summary questions require choosing the statements that capture the passage's major ideas."
  },
  {
   "q": "Which type of statement should NOT be chosen in a prose summary question?",
   "opts": [
    "A statement covering a central idea",
    "A broad idea supported throughout",
    "A statement reflecting the main point",
    "A minor detail or an idea not in the passage"
   ],
   "correct": 3,
   "exp": "Minor details and information not in the passage are the wrong choices to include."
  },
  {
   "q": "A prose summary task usually provides an introductory sentence and asks you to complete the summary by selecting:",
   "opts": [
    "The three choices that best represent the main ideas",
    "One correct sentence",
    "Every choice listed",
    "Only the false choices"
   ],
   "correct": 0,
   "exp": "You pick the three options that best express the passage's most important ideas."
  }
 ],
 "Reading Speed": [
  {
   "q": "Improving your reading speed for the TOEFL is important mainly because:",
   "opts": [
    "Faster reading always improves comprehension automatically",
    "The section is timed, so speed helps you finish all passages and questions",
    "Speed lets you skip the questions",
    "It reduces the number of passages"
   ],
   "correct": 1,
   "exp": "Because the section is timed, adequate speed ensures you complete every passage and question."
  },
  {
   "q": "Which habit slows reading speed and should be reduced?",
   "opts": [
    "Reading in meaningful phrases",
    "Previewing the title",
    "Subvocalizing or silently pronouncing every single word",
    "Recognizing topic sentences"
   ],
   "correct": 2,
   "exp": "Subvocalizing each word slows you down; reading in phrase groups is faster."
  },
  {
   "q": "A good balance for TOEFL reading is to:",
   "opts": [
    "Read as fast as possible ignoring meaning",
    "Never reread anything",
    "Read only the first paragraph",
    "Read slowly enough to understand while fast enough to finish on time"
   ],
   "correct": 3,
   "exp": "Effective reading balances comprehension with a pace that fits the time limit."
  }
 ],
 "Timed Reading Practice": [
  {
   "q": "The main benefit of practicing reading under timed conditions is that it:",
   "opts": [
    "Builds the pacing and stamina needed for the real test",
    "Guarantees a perfect score",
    "Removes the need to learn vocabulary",
    "Lets you avoid the questions"
   ],
   "correct": 0,
   "exp": "Timed practice develops the pacing and endurance the actual exam demands."
  },
  {
   "q": "Roughly how much time should you budget per TOEFL Reading passage and its questions?",
   "opts": [
    "About 2 minutes",
    "About 18 to 20 minutes",
    "About 60 minutes",
    "There is no time limit"
   ],
   "correct": 1,
   "exp": "Each passage set is generally allotted around 18 to 20 minutes."
  },
  {
   "q": "During timed practice, if one question is taking too long you should:",
   "opts": [
    "Stop the entire practice",
    "Restart the passage from the beginning",
    "Make your best guess, mark it, and move on to protect time",
    "Skip the rest of the passages"
   ],
   "correct": 2,
   "exp": "Guessing and flagging a slow question preserves time for the remaining items."
  }
 ],
 "TOEFL Speaking Overview": [
  {
   "q": "The TOEFL iBT Speaking section is scored on qualities that include:",
   "opts": [
    "Handwriting neatness",
    "Reading speed",
    "Number of pages written",
    "Delivery, language use, and topic development"
   ],
   "correct": 3,
   "exp": "Speaking responses are rated on delivery, language use, and topic development."
  },
  {
   "q": "How many tasks does the current TOEFL Speaking section contain?",
   "opts": [
    "Four tasks",
    "Ten tasks",
    "Two tasks",
    "Twenty tasks"
   ],
   "correct": 0,
   "exp": "The Speaking section has four tasks total, one independent and three integrated."
  },
  {
   "q": "In the Speaking section, your responses are:",
   "opts": [
    "Typed into a computer",
    "Recorded and later scored by raters and automated scoring",
    "Written by hand",
    "Judged only on grammar"
   ],
   "correct": 1,
   "exp": "Spoken answers are recorded and evaluated by human raters and automated scoring."
  }
 ],
 "Independent Speaking": [
  {
   "q": "In the independent speaking task, how much preparation and response time are given?",
   "opts": [
    "30 seconds to prepare and 60 seconds to speak",
    "No preparation and 30 seconds to speak",
    "15 seconds to prepare and 45 seconds to speak",
    "5 minutes to prepare and 5 minutes to speak"
   ],
   "correct": 2,
   "exp": "The independent task gives 15 seconds of prep and 45 seconds to respond."
  },
  {
   "q": "The independent speaking task asks you to:",
   "opts": [
    "Summarize a reading and a lecture",
    "Read a passage aloud",
    "Repeat a recorded conversation",
    "Give your own opinion or preference on a familiar topic"
   ],
   "correct": 3,
   "exp": "The independent task requires stating and supporting your own opinion or preference."
  },
  {
   "q": "A strong independent response should include:",
   "opts": [
    "A clear opinion supported by specific reasons and examples",
    "Only a one-word answer",
    "A summary of an unrelated lecture",
    "As many memorized words as possible with no structure"
   ],
   "correct": 0,
   "exp": "A high-scoring response states a clear position backed by specific reasons and examples."
  }
 ],
 "Integrated Speaking": [
  {
   "q": "Integrated speaking tasks require you to:",
   "opts": [
    "Only give a personal opinion",
    "Combine information from reading and or listening before you speak",
    "Read a passage silently and stop",
    "Write a full essay"
   ],
   "correct": 1,
   "exp": "Integrated tasks require synthesizing material you read and or hear into your spoken answer."
  },
  {
   "q": "In an integrated task that combines a reading passage and a lecture, your job is often to:",
   "opts": [
    "Ignore the lecture and give your opinion",
    "Memorize the reading word for word",
    "Explain how the lecture relates to or challenges the reading",
    "Translate the lecture"
   ],
   "correct": 2,
   "exp": "You must show how the lecture supports, illustrates, or contradicts the reading."
  },
  {
   "q": "Because integrated tasks are based on given sources, your response should mainly:",
   "opts": [
    "Argue against the test",
    "Focus on your unrelated personal stories",
    "Include your favorite hobbies",
    "Report the information from the sources accurately, not your personal views"
   ],
   "correct": 3,
   "exp": "Integrated responses report the source information accurately rather than personal opinion."
  }
 ],
 "Organizing Responses": [
  {
   "q": "Why is organizing your spoken response important on the TOEFL?",
   "opts": [
    "Clear organization helps the rater follow your ideas and improves topic development",
    "It has no effect on the score",
    "It lets you speak longer than allowed",
    "It replaces the need for good pronunciation"
   ],
   "correct": 0,
   "exp": "Clear structure helps raters follow your ideas and strengthens topic development."
  },
  {
   "q": "A well-organized independent response often follows the pattern:",
   "opts": [
    "Random ideas with no order",
    "Opinion, then reasons, then supporting examples",
    "Only a conclusion",
    "Examples with no stated opinion"
   ],
   "correct": 1,
   "exp": "Stating the opinion, then reasons, then examples gives a clear, logical structure."
  },
  {
   "q": "Transition words such as first, because, and for example help your response by:",
   "opts": [
    "Making it harder to understand",
    "Filling time without meaning",
    "Signaling the connections between your ideas",
    "Replacing content entirely"
   ],
   "correct": 2,
   "exp": "Transitions signal how ideas connect, making the response easier to follow."
  }
 ],
 "Speaking Templates": [
  {
   "q": "A speaking template is most useful because it:",
   "opts": [
    "Provides all the content so you do not think",
    "Lets you avoid answering the prompt",
    "Guarantees a perfect score by itself",
    "Gives a reliable structure so you can focus on content during the short prep time"
   ],
   "correct": 3,
   "exp": "A template supplies structure, freeing your limited prep time to focus on content."
  },
  {
   "q": "A risk of relying too heavily on memorized templates is that:",
   "opts": [
    "Your response may sound rehearsed and fail to address the specific prompt",
    "You will always score higher",
    "Templates make you speak too slowly",
    "Raters cannot hear templates"
   ],
   "correct": 0,
   "exp": "Overusing templates can sound canned and may not fit the actual question asked."
  },
  {
   "q": "The best use of a template is to:",
   "opts": [
    "Recite it word for word regardless of the topic",
    "Adapt its frame while filling it with content specific to the prompt",
    "Replace all original thinking",
    "Use it only in the reading section"
   ],
   "correct": 1,
   "exp": "Templates work best when adapted and filled with prompt-specific content."
  }
 ],
 "Pronunciation": [
  {
   "q": "In TOEFL speaking, pronunciation is scored as part of delivery mainly because it affects:",
   "opts": [
    "The number of ideas you present",
    "The grammar of your sentences",
    "How intelligible and clear your speech is to the listener",
    "Your reading comprehension"
   ],
   "correct": 2,
   "exp": "Clear pronunciation makes speech intelligible, which is central to the delivery score."
  },
  {
   "q": "Which aspect is part of good pronunciation and intonation?",
   "opts": [
    "Speaking in a flat monotone with no stress",
    "Whispering the whole response",
    "Pausing after every single word",
    "Using appropriate word stress, sentence stress, and rising or falling intonation"
   ],
   "correct": 3,
   "exp": "Natural word and sentence stress plus varied intonation mark good pronunciation."
  },
  {
   "q": "You do NOT need a perfect native accent to score well; what matters most is that your speech is:",
   "opts": [
    "Clear and understandable to the listener",
    "Identical to a specific regional accent",
    "As fast as possible",
    "Completely free of any pauses"
   ],
   "correct": 0,
   "exp": "Raters reward clear, understandable speech rather than a particular native accent."
  }
 ],
 "Fluency": [
  {
   "q": "Fluency in speaking refers mainly to:",
   "opts": [
    "Using the largest possible vocabulary",
    "Speaking smoothly at a natural pace without excessive pauses or hesitation",
    "Speaking as loudly as possible",
    "Using perfect grammar only"
   ],
   "correct": 1,
   "exp": "Fluency is smooth, natural-paced speech without frequent hesitation or breaks."
  },
  {
   "q": "Which habit hurts fluency the most?",
   "opts": [
    "Speaking in connected phrases",
    "Using clear transitions",
    "Frequent long pauses and repeated filler sounds like um and uh",
    "Maintaining a steady rhythm"
   ],
   "correct": 2,
   "exp": "Long pauses and repeated fillers break the smooth flow that fluency requires."
  },
  {
   "q": "A good way to improve fluency is to:",
   "opts": [
    "Memorize dictionary definitions",
    "Avoid all practice before the test",
    "Speak only in single words",
    "Practice speaking regularly and thinking in English to reduce hesitation"
   ],
   "correct": 3,
   "exp": "Regular speaking practice and thinking in English reduce hesitation and build fluency."
  }
 ],
 "Speaking Practice": [
  {
   "q": "The most effective way to prepare for the Speaking section is to:",
   "opts": [
    "Practice answering real prompts aloud within the actual time limits",
    "Only read about speaking without ever speaking",
    "Memorize whole answers to unrelated questions",
    "Study only grammar rules"
   ],
   "correct": 0,
   "exp": "Practicing real prompts aloud under timed conditions best prepares you for the section."
  },
  {
   "q": "Recording yourself during speaking practice is helpful because it lets you:",
   "opts": [
    "Avoid ever hearing your mistakes",
    "Review your delivery, pacing, and pronunciation to find areas to improve",
    "Skip the timing rules",
    "Score the test officially"
   ],
   "correct": 1,
   "exp": "Listening to recordings reveals delivery and pronunciation issues you can then fix."
  },
  {
   "q": "When practicing, keeping to the real prep and response times is important because it:",
   "opts": [
    "Makes practice easier than the test",
    "Removes the need to plan",
    "Trains you to organize and deliver a complete answer within the limits",
    "Lets you speak indefinitely"
   ],
   "correct": 2,
   "exp": "Practicing within the true time limits trains you to deliver complete answers on time."
  }
 ],
 "Listening Strategies": [
  {
   "q": "On the TOEFL iBT, how many times is each listening passage played?",
   "opts": [
    "As many times as you click replay",
    "Three times for lectures",
    "Twice automatically",
    "Once only"
   ],
   "correct": 3,
   "exp": "TOEFL listening audio is heard only once, so you must listen actively the first time."
  },
  {
   "q": "Why should you keep listening even after you think you have missed something?",
   "opts": [
    "Stopping to worry makes you miss the next points too",
    "Missed words are shown on screen",
    "The audio will repeat that part",
    "The narrator warns you before key ideas"
   ],
   "correct": 0,
   "exp": "Dwelling on a missed detail causes you to lose the information that follows, so keep listening forward."
  },
  {
   "q": "What is the most effective way to prepare your mind before the audio begins?",
   "opts": [
    "Memorize the answer choices word for word",
    "Predict the topic and speaker relationship from the direction line",
    "Translate the directions into your first language",
    "Read the transcript that appears beside the audio"
   ],
   "correct": 1,
   "exp": "Anticipating whether it is a lecture or conversation and the likely topic primes you to follow the content."
  }
 ],
 "Note-Taking": [
  {
   "q": "What should good TOEFL listening notes focus on capturing?",
   "opts": [
    "Every word the speaker says",
    "Only the speaker's first sentence",
    "The main ideas and how key details connect to them",
    "The exact grammar the speaker uses"
   ],
   "correct": 2,
   "exp": "Effective notes separate main ideas from supporting details rather than transcribing everything."
  },
  {
   "q": "Why are abbreviations and symbols recommended when taking notes?",
   "opts": [
    "They are required by the test rules",
    "They make your notes look academic",
    "They are graded for neatness",
    "They let you write faster so you can keep listening"
   ],
   "correct": 3,
   "exp": "Shorthand keeps your hand from falling behind the audio, which plays only once."
  },
  {
   "q": "Which note structure best shows the relationship between a main point and its examples?",
   "opts": [
    "Indented bullets with the main idea on the left and examples beneath it",
    "Random words scattered on the page",
    "A word-for-word transcript",
    "A single long paragraph"
   ],
   "correct": 0,
   "exp": "Indentation visually distinguishes main ideas from the details that support them."
  }
 ],
 "Campus Conversations": [
  {
   "q": "A typical TOEFL campus conversation usually involves which situation?",
   "opts": [
    "Two professors debating research",
    "A student solving a problem with a professor or university staff member",
    "A news broadcast about the campus",
    "A lecture on biology"
   ],
   "correct": 1,
   "exp": "Campus conversations are non-academic dialogues, often a student seeking help with a practical problem."
  },
  {
   "q": "When listening to a campus conversation, what is especially important to identify?",
   "opts": [
    "The exact building numbers mentioned",
    "The professor's academic publications",
    "The student's problem and the solution offered",
    "The precise time of day"
   ],
   "correct": 2,
   "exp": "The core of most conversations is the problem the student has and how it gets resolved."
  },
  {
   "q": "Which vocabulary type is most common in campus conversations compared with lectures?",
   "opts": [
    "Highly technical scientific terms",
    "Legal terminology",
    "Poetic and literary language",
    "Everyday practical and service-related language"
   ],
   "correct": 3,
   "exp": "Conversations use practical service language about registration, housing, deadlines, and similar campus matters."
  }
 ],
 "Academic Lectures": [
  {
   "q": "How do academic lectures differ from campus conversations on the TOEFL?",
   "opts": [
    "They present subject content, often with one main speaker explaining a topic",
    "They are always shorter",
    "They never include student voices",
    "They are always about literature"
   ],
   "correct": 0,
   "exp": "Lectures deliver academic content on a subject, unlike the practical dialogues of conversations."
  },
  {
   "q": "What signals in a lecture often mark an important point you should note?",
   "opts": [
    "Background noise",
    "Emphasis words like the key point is or most importantly",
    "The narrator's introduction only",
    "The length of pauses between words"
   ],
   "correct": 1,
   "exp": "Discourse markers of emphasis flag the ideas the questions are most likely to test."
  },
  {
   "q": "Why might a professor mention a specific example during a lecture?",
   "opts": [
    "To fill unused time",
    "To confuse the listener",
    "To illustrate or support a broader concept just introduced",
    "To read from a textbook"
   ],
   "correct": 2,
   "exp": "Examples in lectures typically serve to clarify or back up a larger idea."
  }
 ],
 "Main Idea Questions": [
  {
   "q": "What does a main idea question ask you to identify?",
   "opts": [
    "The speaker's tone of voice",
    "A single specific fact stated once",
    "The meaning of one difficult word",
    "The overall topic or purpose of the whole passage"
   ],
   "correct": 3,
   "exp": "Main idea questions target the central point of the entire lecture or conversation."
  },
  {
   "q": "Which answer choice is usually WRONG for a main idea question?",
   "opts": [
    "One that focuses on a minor detail mentioned briefly",
    "One that captures the overall purpose",
    "One that restates the central theme",
    "A statement summarizing the whole talk"
   ],
   "correct": 0,
   "exp": "A choice about a small detail is too narrow to be the main idea of the whole passage."
  },
  {
   "q": "Where in a lecture is the main idea most often introduced?",
   "opts": [
    "Only in the middle",
    "Near the beginning, and sometimes restated at the end",
    "Never stated, only implied",
    "In the answer choices"
   ],
   "correct": 1,
   "exp": "Speakers commonly state the main idea early and reinforce it in the conclusion."
  }
 ],
 "Detail Questions": [
  {
   "q": "What do detail questions test?",
   "opts": [
    "Your opinion of the topic",
    "The overall theme of the passage",
    "Specific facts or points the speaker stated",
    "Your memory of the passage title"
   ],
   "correct": 2,
   "exp": "Detail questions ask about particular pieces of information explicitly mentioned in the audio."
  },
  {
   "q": "Why are clear notes helpful for detail questions?",
   "opts": [
    "Because details never appear in questions",
    "Because details are always in the first sentence",
    "Because you can replay the audio if unsure",
    "Because the audio is only played once and details are easy to forget"
   ],
   "correct": 3,
   "exp": "Since the audio plays only once, notes preserve the specific facts you cannot re-hear."
  },
  {
   "q": "A detail-question answer that uses exact words from the audio but changes the meaning is called what?",
   "opts": [
    "A distractor designed to trap careless listeners",
    "The correct answer",
    "A main idea",
    "An inference"
   ],
   "correct": 0,
   "exp": "Such trap choices repeat familiar words but distort what was actually said."
  }
 ],
 "Purpose Questions": [
  {
   "q": "A purpose question typically asks what?",
   "opts": [
    "What a difficult word means",
    "Why the speaker says something or why the conversation takes place",
    "How long the passage lasted",
    "What grade the student received"
   ],
   "correct": 1,
   "exp": "Purpose questions probe the reason behind a statement or the goal of the talk."
  },
  {
   "q": "To answer why a professor mentions a particular example, you should consider what?",
   "opts": [
    "How many words the example took",
    "The exact spelling of the example",
    "The function of the example within the surrounding explanation",
    "Whether you personally like the example"
   ],
   "correct": 2,
   "exp": "Understanding how the example fits the larger point reveals the speaker's purpose."
  },
  {
   "q": "In a campus conversation, a common purpose for the student visiting is what?",
   "opts": [
    "To deliver a lecture",
    "To grade the professor",
    "To read announcements",
    "To request help or resolve a specific problem"
   ],
   "correct": 3,
   "exp": "Students usually approach staff to solve a problem, which is the conversation's purpose."
  }
 ],
 "Attitude Questions": [
  {
   "q": "What do attitude questions focus on?",
   "opts": [
    "The speaker's feelings, opinion, or degree of certainty",
    "The exact statistics given",
    "The length of the lecture",
    "The number of examples used"
   ],
   "correct": 0,
   "exp": "Attitude questions test how the speaker feels or how sure they are about something."
  },
  {
   "q": "Besides the words used, what best reveals a speaker's attitude?",
   "opts": [
    "The question numbers",
    "The tone of voice and stress in the audio",
    "The color of the screen",
    "The length of your notes"
   ],
   "correct": 1,
   "exp": "Tone, emphasis, and intonation often signal attitude beyond the literal words."
  },
  {
   "q": "If a speaker says an idea is interesting but then lists several problems with it, their attitude is best described as what?",
   "opts": [
    "Completely enthusiastic",
    "Totally indifferent",
    "Skeptical or having reservations",
    "Angry and hostile"
   ],
   "correct": 2,
   "exp": "Praising then raising problems signals doubt or reservations rather than full agreement."
  }
 ],
 "Writing Overview": [
  {
   "q": "How many writing tasks does the current TOEFL iBT include?",
   "opts": [
    "One task only",
    "Three narrative tasks",
    "Five separate essays",
    "Two tasks: an integrated task and an academic discussion task"
   ],
   "correct": 3,
   "exp": "The writing section contains an integrated task and an academic discussion writing task."
  },
  {
   "q": "What is graded most heavily across TOEFL writing tasks?",
   "opts": [
    "How clearly ideas are developed, organized, and expressed",
    "The color of formatting",
    "Handwriting neatness",
    "The number of rare words used"
   ],
   "correct": 0,
   "exp": "Scores reward clear development, organization, and effective language use over showy vocabulary."
  },
  {
   "q": "Why is planning time before writing recommended?",
   "opts": [
    "It replaces the need to write anything",
    "It helps organize ideas so the response is coherent and on-topic",
    "It lets you copy the prompt",
    "It is required to be exactly ten minutes"
   ],
   "correct": 1,
   "exp": "A brief plan produces a more organized, focused response within the time limit."
  }
 ],
 "Integrated Writing": [
  {
   "q": "What must the integrated writing response mainly do?",
   "opts": [
    "Summarize just the reading",
    "Give only your personal opinion",
    "Explain how the lecture relates to the reading passage",
    "Describe your daily routine"
   ],
   "correct": 2,
   "exp": "The task requires summarizing how the lecture supports or challenges the reading points."
  },
  {
   "q": "Whose ideas should the integrated response contain?",
   "opts": [
    "Only your own new opinions",
    "Only the reading's ideas",
    "Ideas invented for the essay",
    "The ideas from both the reading and the lecture, not your personal opinion"
   ],
   "correct": 3,
   "exp": "You report the source materials' points objectively rather than adding personal views."
  },
  {
   "q": "In most integrated tasks, how does the lecture relate to the reading?",
   "opts": [
    "It usually casts doubt on or contradicts the reading's points",
    "It changes the subject entirely",
    "It repeats the reading word for word",
    "It is unrelated to the reading"
   ],
   "correct": 0,
   "exp": "The lecture typically challenges or counters each point made in the reading."
  }
 ],
 "Academic Discussion Writing": [
  {
   "q": "In the academic discussion task, what are you asked to do?",
   "opts": [
    "Summarize a lecture only",
    "Contribute your own opinion to an online class discussion with support",
    "Translate a professor's post",
    "Correct grammar in a passage"
   ],
   "correct": 1,
   "exp": "You must state and support your own view in response to a professor's discussion question."
  },
  {
   "q": "How should you treat the classmates' posts shown in the prompt?",
   "opts": [
    "Copy them exactly as your answer",
    "Ignore the professor's question entirely",
    "Engage with them while adding your own clear position and reasons",
    "Grade them for accuracy"
   ],
   "correct": 2,
   "exp": "A strong response acknowledges the discussion and adds your own supported contribution."
  },
  {
   "q": "What makes an academic discussion response strong?",
   "opts": [
    "Avoiding any personal viewpoint",
    "The longest possible word count",
    "Listing every classmate's name",
    "A clear opinion backed by specific reasons or examples"
   ],
   "correct": 3,
   "exp": "A relevant, well-supported personal position is the core of a high-scoring discussion post."
  }
 ],
 "Essay Structure": [
  {
   "q": "A well-structured TOEFL essay generally follows which pattern?",
   "opts": [
    "Introduction, body paragraphs, and conclusion",
    "One long unbroken paragraph",
    "Only a conclusion",
    "A list of unconnected sentences"
   ],
   "correct": 0,
   "exp": "The standard structure is an introduction, developed body paragraphs, and a conclusion."
  },
  {
   "q": "What is the main function of a body paragraph?",
   "opts": [
    "To introduce the entire essay topic",
    "To develop one main point with supporting details",
    "To end the essay",
    "To list the title only"
   ],
   "correct": 1,
   "exp": "Each body paragraph focuses on a single point and develops it with support."
  },
  {
   "q": "Why does clear paragraph organization improve your score?",
   "opts": [
    "It uses more difficult words",
    "It makes the essay longer automatically",
    "It helps the reader follow your ideas logically",
    "It hides weak arguments"
   ],
   "correct": 2,
   "exp": "Logical organization lets the reader follow the argument, which raises the coherence score."
  }
 ],
 "Thesis Statements": [
  {
   "q": "What is the purpose of a thesis statement?",
   "opts": [
    "To summarize the reading passage",
    "To list every vocabulary word",
    "To ask the reader a question",
    "To state the essay's main claim or position clearly"
   ],
   "correct": 3,
   "exp": "The thesis expresses the central claim the rest of the essay will support."
  },
  {
   "q": "Where is the thesis statement usually placed?",
   "opts": [
    "In the introduction, often at the end of it",
    "In the middle of a body paragraph",
    "Only in the conclusion",
    "In the title line"
   ],
   "correct": 0,
   "exp": "The thesis typically appears in the introduction to set up the essay's direction."
  },
  {
   "q": "Which of these is the strongest thesis statement?",
   "opts": [
    "This essay is about technology",
    "Schools should limit smartphone use because it improves focus and reduces distraction",
    "There are many opinions about technology",
    "Technology exists in schools"
   ],
   "correct": 1,
   "exp": "A strong thesis takes a clear position and previews the supporting reasons."
  }
 ],
 "Supporting Ideas": [
  {
   "q": "What is the role of supporting ideas in an essay?",
   "opts": [
    "To introduce new unrelated topics",
    "To restate the thesis word for word",
    "To provide reasons, examples, and details that back up the thesis",
    "To fill space without meaning"
   ],
   "correct": 2,
   "exp": "Supporting ideas give the reasons and examples that make the thesis convincing."
  },
  {
   "q": "Which type of support is generally most convincing?",
   "opts": [
    "A vague general statement",
    "An unrelated fact",
    "A repeated phrase",
    "A specific example or concrete detail"
   ],
   "correct": 3,
   "exp": "Specific examples and concrete details strengthen an argument more than vague claims."
  },
  {
   "q": "A supporting idea should always do what?",
   "opts": [
    "Clearly relate to and reinforce the main point",
    "Introduce a brand-new topic",
    "Be left unexplained",
    "Contradict the thesis"
   ],
   "correct": 0,
   "exp": "Effective support must connect directly to and reinforce the paragraph's main point."
  }
 ],
 "Transitions": [
  {
   "q": "What is the main purpose of transition words in writing?",
   "opts": [
    "To increase the word count only",
    "To connect ideas and show relationships between them",
    "To replace the thesis",
    "To confuse the reader"
   ],
   "correct": 1,
   "exp": "Transitions link ideas and signal how one point relates to the next."
  },
  {
   "q": "Which transition best signals a contrast between two ideas?",
   "opts": [
    "For example",
    "In addition",
    "However",
    "Therefore"
   ],
   "correct": 2,
   "exp": "However introduces a contrasting idea, unlike additive or example transitions."
  },
  {
   "q": "Which transition would best introduce a result or conclusion?",
   "opts": [
    "In contrast",
    "On the other hand",
    "For instance",
    "As a result"
   ],
   "correct": 3,
   "exp": "As a result signals that what follows is a consequence of the previous point."
  }
 ],
 "Editing": [
  {
   "q": "Why is it important to leave a few minutes to edit your essay?",
   "opts": [
    "To catch grammar, spelling, and clarity errors before submitting",
    "To add more paragraphs",
    "To change your entire topic",
    "To copy the prompt again"
   ],
   "correct": 0,
   "exp": "A quick edit catches small errors that lower the language-use score."
  },
  {
   "q": "During editing, which is a good practice?",
   "opts": [
    "Ignoring subject-verb agreement",
    "Checking that each sentence is clear and grammatically correct",
    "Rewriting the whole essay from scratch",
    "Deleting all transitions"
   ],
   "correct": 1,
   "exp": "Reviewing sentences for clarity and correct grammar improves the final quality."
  },
  {
   "q": "What should you check to ensure your essay stays on task while editing?",
   "opts": [
    "That the font is large",
    "That there are many rare words",
    "That every paragraph relates to the thesis and prompt",
    "That the essay is the longest possible"
   ],
   "correct": 2,
   "exp": "Confirming each paragraph addresses the prompt keeps the response focused and relevant."
  }
 ],
 "Model Essays": [
  {
   "q": "What is the best way to learn from a model essay?",
   "opts": [
    "Memorize it and reuse it word for word on the test",
    "Only count its words",
    "Ignore its organization",
    "Analyze its structure, thesis, and use of support"
   ],
   "correct": 3,
   "exp": "Studying how a model builds its argument teaches transferable writing techniques."
  },
  {
   "q": "Why is memorizing a full model essay to reuse a poor strategy?",
   "opts": [
    "The prompt will differ, so a memorized essay will not fit the task",
    "Models are always wrong",
    "It takes too long to read",
    "Essays cannot be memorized"
   ],
   "correct": 0,
   "exp": "A memorized essay rarely matches the actual prompt and can lower your relevance score."
  },
  {
   "q": "A high-scoring model essay usually demonstrates what?",
   "opts": [
    "Random ideas with no order",
    "A clear thesis, organized paragraphs, and relevant support",
    "Only simple lists",
    "No thesis at all"
   ],
   "correct": 1,
   "exp": "Model essays showcase clear organization, a strong thesis, and well-developed support."
  }
 ]
};
  window.TIH_TOPIC_QUIZZES['english-success'] = {
 "Welcome to the Course": [
  {
   "q": "What is the main purpose of a course welcome or orientation section?",
   "opts": [
    "To test your grammar before you begin",
    "To introduce the course and help you know what to expect",
    "To assign your final grade",
    "To replace the main lessons"
   ],
   "correct": 1,
   "exp": "A welcome section orients learners by introducing the course and setting expectations."
  },
  {
   "q": "Why is it helpful to read the welcome message before starting the lessons?",
   "opts": [
    "It removes the need to study vocabulary",
    "It is the only graded part of the course",
    "It gives you a preview of structure, goals, and how to succeed",
    "It guarantees fluency immediately"
   ],
   "correct": 2,
   "exp": "The welcome message previews the structure and goals so learners can approach lessons with direction."
  },
  {
   "q": "A good attitude to bring to the start of a new language course is best described as which of the following?",
   "opts": [
    "Expecting no effort will be required",
    "Assuming you already know everything",
    "Waiting until the last day to begin",
    "Being open, motivated, and ready to practice regularly"
   ],
   "correct": 3,
   "exp": "Openness, motivation, and regular practice set learners up for success from the start."
  }
 ],
 "Course Objectives": [
  {
   "q": "What does a course objective mainly describe?",
   "opts": [
    "What you should be able to do by the end of the course",
    "The teacher's personal opinions",
    "The price of the course",
    "The names of other students"
   ],
   "correct": 0,
   "exp": "Objectives state the skills or outcomes a learner should achieve by the end."
  },
  {
   "q": "Which of these is written as a clear, measurable learning objective?",
   "opts": [
    "Learn some English things",
    "Write a formal email using appropriate tone and structure",
    "Be good at English one day",
    "Try to understand words"
   ],
   "correct": 1,
   "exp": "A measurable objective names a specific, observable skill such as writing a formal email correctly."
  },
  {
   "q": "Why should learners review the course objectives at the start?",
   "opts": [
    "To memorize them for a spelling test",
    "To skip all the lessons",
    "To know the target skills and track their own progress",
    "Because objectives are unrelated to the lessons"
   ],
   "correct": 2,
   "exp": "Knowing the objectives lets learners focus their effort and measure their progress against clear targets."
  }
 ],
 "Assessing Your English Level": [
  {
   "q": "What is the main reason to assess your English level before studying?",
   "opts": [
    "To compare yourself with famous authors",
    "To choose a new native language",
    "To avoid ever practicing again",
    "To identify your strengths and weaknesses so you can focus your study"
   ],
   "correct": 3,
   "exp": "A level assessment reveals strengths and gaps so learners can target the right areas."
  },
  {
   "q": "Which framework is commonly used to describe English proficiency levels from A1 to C2?",
   "opts": [
    "The CEFR (Common European Framework of Reference)",
    "The periodic table",
    "The Dewey Decimal System",
    "The metric system"
   ],
   "correct": 0,
   "exp": "The CEFR describes language proficiency on a scale from A1 (beginner) to C2 (mastery)."
  },
  {
   "q": "A learner who can handle everyday topics but struggles with abstract academic texts is most likely at which stage?",
   "opts": [
    "Complete beginner with no vocabulary",
    "An intermediate level still developing advanced skills",
    "Native-level mastery of all registers",
    "Unable to speak at all"
   ],
   "correct": 1,
   "exp": "Managing everyday topics but not abstract academic texts is typical of an intermediate learner still building advanced skills."
  }
 ],
 "Learning Strategies": [
  {
   "q": "What is a learning strategy?",
   "opts": [
    "A rule that forbids using a dictionary",
    "A guarantee of instant fluency",
    "A deliberate method or technique a learner uses to study more effectively",
    "A type of final exam"
   ],
   "correct": 2,
   "exp": "A learning strategy is an intentional technique that makes studying more effective."
  },
  {
   "q": "Which of the following is an example of an effective vocabulary learning strategy?",
   "opts": [
    "Reading a word once and never reviewing it",
    "Translating everything without context",
    "Avoiding all new words",
    "Using spaced repetition and putting new words into your own sentences"
   ],
   "correct": 3,
   "exp": "Spaced repetition and active use in sentences strengthen memory and retention of new words."
  },
  {
   "q": "Why is self-monitoring considered a useful learning strategy?",
   "opts": [
    "It lets you check your progress and adjust your methods",
    "It replaces the need to study",
    "It only works for native speakers",
    "It makes learning slower"
   ],
   "correct": 0,
   "exp": "Self-monitoring helps learners notice what is working and adjust their approach accordingly."
  }
 ],
 "Academic vs. Professional English": [
  {
   "q": "Which statement best captures a key difference between academic and professional English?",
   "opts": [
    "They are exactly the same in every situation",
    "Academic English favors formal analysis and citations, while professional English focuses on clear workplace communication",
    "Professional English uses only slang",
    "Academic English is only spoken, never written"
   ],
   "correct": 1,
   "exp": "Academic English emphasizes formal analysis and sources, while professional English prioritizes clear, practical workplace communication."
  },
  {
   "q": "In which context would you most likely use academic English?",
   "opts": [
    "Ordering food at a market",
    "Sending a quick text to a friend",
    "Writing a research essay with cited evidence",
    "Writing a shopping list"
   ],
   "correct": 2,
   "exp": "A cited research essay is a classic use of academic English."
  },
  {
   "q": "Which phrase sounds most appropriate in a professional workplace email?",
   "opts": [
    "Hey, gimme that report ASAP or else",
    "yo where the file at",
    "The aforementioned data hereby demonstrates statistical significance",
    "Kindly send me the report by end of day, thank you"
   ],
   "correct": 3,
   "exp": "A polite, clear request fits professional English, avoiding both slang and overly academic phrasing."
  }
 ],
 "Setting Language Goals": [
  {
   "q": "What makes a language goal a SMART goal?",
   "opts": [
    "It is Specific, Measurable, Achievable, Relevant, and Time-bound",
    "It is vague and open-ended",
    "It has no deadline",
    "It cannot be measured"
   ],
   "correct": 0,
   "exp": "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound."
  },
  {
   "q": "Which of these is the best-formed language goal?",
   "opts": [
    "Get better at English",
    "Learn 20 new academic words each week for two months",
    "Know all English words",
    "Speak perfectly forever"
   ],
   "correct": 1,
   "exp": "Learning a set number of words in a set time is specific, measurable, and time-bound."
  },
  {
   "q": "Why is it useful to break a large language goal into smaller ones?",
   "opts": [
    "To avoid ever finishing",
    "To make the goal impossible",
    "To make progress trackable and keep motivation high",
    "Because small goals do not matter"
   ],
   "correct": 2,
   "exp": "Smaller milestones make progress visible and help sustain motivation toward a big goal."
  }
 ],
 "Study Plan": [
  {
   "q": "What is the main purpose of a study plan?",
   "opts": [
    "To replace the course objectives",
    "To decorate your notebook",
    "To avoid studying entirely",
    "To organize when and what you will study so you stay consistent"
   ],
   "correct": 3,
   "exp": "A study plan schedules what and when to study, supporting consistent progress."
  },
  {
   "q": "Which feature makes a study plan realistic and sustainable?",
   "opts": [
    "Setting regular, manageable sessions that fit your routine",
    "Scheduling ten hours every single day with no breaks",
    "Studying only once a year",
    "Having no set times at all"
   ],
   "correct": 0,
   "exp": "Regular, manageable sessions that fit real life are more sustainable than extreme schedules."
  },
  {
   "q": "Why should a study plan include review time, not just new material?",
   "opts": [
    "Review wastes time",
    "Reviewing reinforces earlier learning and improves retention",
    "New material should never be studied",
    "Review is only for exams"
   ],
   "correct": 1,
   "exp": "Built-in review reinforces prior learning and strengthens long-term retention."
  }
 ],
 "Everyday Vocabulary": [
  {
   "q": "What best describes everyday vocabulary?",
   "opts": [
    "Rare technical terms used only in laboratories",
    "Ancient words no longer spoken",
    "Common words used in daily conversation and routine situations",
    "Words found only in legal contracts"
   ],
   "correct": 2,
   "exp": "Everyday vocabulary consists of common words used in ordinary daily communication."
  },
  {
   "q": "Which set of words belongs to everyday vocabulary?",
   "opts": [
    "jurisprudence, plaintiff, tort",
    "photosynthesis, hypothesis, methodology",
    "amortization, liquidity, dividend",
    "kitchen, breakfast, bus, weather"
   ],
   "correct": 3,
   "exp": "Kitchen, breakfast, bus, and weather are common words used in daily life."
  },
  {
   "q": "Why is a strong base of everyday vocabulary important for learners?",
   "opts": [
    "It supports basic communication and forms a foundation for advanced vocabulary",
    "It is only needed for exams",
    "It replaces the need for grammar",
    "It is useless outside the classroom"
   ],
   "correct": 0,
   "exp": "Everyday vocabulary enables basic communication and provides a foundation for more advanced words."
  }
 ],
 "Academic Vocabulary": [
  {
   "q": "What best describes academic vocabulary?",
   "opts": [
    "Slang used among friends",
    "Formal words frequently used in essays, research, and scholarly writing",
    "Words used only when shopping",
    "Emojis and abbreviations"
   ],
   "correct": 1,
   "exp": "Academic vocabulary is the formal language common to essays, research, and scholarly texts."
  },
  {
   "q": "Which word is most typical of academic vocabulary?",
   "opts": [
    "stuff",
    "gonna",
    "analyze",
    "yeah"
   ],
   "correct": 2,
   "exp": "Analyze is a formal verb frequently used in academic writing."
  },
  {
   "q": "In an academic essay, which sentence uses academic vocabulary appropriately?",
   "opts": [
    "The results kinda show a big thing happened",
    "The numbers got way bigger, no cap",
    "Stuff went up a lot in the study",
    "The findings indicate a significant correlation between the variables"
   ],
   "correct": 3,
   "exp": "The phrasing indicate a significant correlation uses precise, formal academic vocabulary."
  }
 ],
 "Professional Vocabulary": [
  {
   "q": "What is professional vocabulary?",
   "opts": [
    "Words specific to workplaces and careers used in professional communication",
    "Words only children use",
    "Words that are always slang",
    "Words banned from the office"
   ],
   "correct": 0,
   "exp": "Professional vocabulary is the workplace and career-related language used in professional settings."
  },
  {
   "q": "Which sentence uses professional vocabulary suited to a workplace?",
   "opts": [
    "We gotta wrap this thing up quick",
    "Please schedule a meeting to review the quarterly deliverables",
    "The whole thing is a total mess, lol",
    "I dunno, just do whatever"
   ],
   "correct": 1,
   "exp": "Schedule a meeting to review the quarterly deliverables uses clear, appropriate professional vocabulary."
  },
  {
   "q": "Which word would most likely appear in professional workplace communication?",
   "opts": [
    "cartoon",
    "playground",
    "deadline",
    "recess"
   ],
   "correct": 2,
   "exp": "Deadline is a common professional term for a required completion time."
  }
 ],
 "Business English Terms": [
  {
   "q": "In business English, what does revenue refer to?",
   "opts": [
    "The lunch break schedule",
    "The number of employees",
    "The color of the logo",
    "The total income a business earns from its activities"
   ],
   "correct": 3,
   "exp": "Revenue is the total income a business generates from its sales or services."
  },
  {
   "q": "What does the business term stakeholder mean?",
   "opts": [
    "Any person or group with an interest in a business or project",
    "A person who cooks stakes",
    "A wooden pole in the ground",
    "A type of printer"
   ],
   "correct": 0,
   "exp": "A stakeholder is anyone with an interest in or affected by a business or project."
  },
  {
   "q": "In a business context, what does the abbreviation ROI stand for?",
   "opts": [
    "Rate of Interest only",
    "Return on Investment",
    "Result of Inquiry",
    "Region of Interest"
   ],
   "correct": 1,
   "exp": "ROI stands for Return on Investment, a measure of the gain relative to cost."
  }
 ],
 "Word Formation": [
  {
   "q": "What does word formation refer to in English?",
   "opts": [
    "Reading words aloud",
    "Arranging words alphabetically",
    "The ways new words are created, such as by adding affixes or combining words",
    "Deleting words from a text"
   ],
   "correct": 2,
   "exp": "Word formation covers the processes of creating words, including affixation and compounding."
  },
  {
   "q": "Which noun is correctly formed from the verb decide?",
   "opts": [
    "decideness",
    "decidation",
    "decidement",
    "decision"
   ],
   "correct": 3,
   "exp": "The correct noun formed from decide is decision."
  },
  {
   "q": "The word notebook is an example of which word-formation process?",
   "opts": [
    "Compounding two words into one",
    "Adding a prefix",
    "Shortening a word",
    "Changing only the spelling"
   ],
   "correct": 0,
   "exp": "Notebook is a compound, formed by joining note and book."
  }
 ],
 "Prefixes & Suffixes": [
  {
   "q": "What is the function of a prefix?",
   "opts": [
    "It is added to the end of a word",
    "It is added to the beginning of a word to change its meaning",
    "It replaces the whole word",
    "It only changes pronunciation"
   ],
   "correct": 1,
   "exp": "A prefix attaches to the beginning of a word and alters its meaning."
  },
  {
   "q": "What does the prefix un- most often mean in words like unhappy or unfair?",
   "opts": [
    "Again",
    "Before",
    "Not or the opposite of",
    "Very"
   ],
   "correct": 2,
   "exp": "The prefix un- means not or the opposite, so unhappy means not happy."
  },
  {
   "q": "Which suffix turns the adjective happy into a noun?",
   "opts": [
    "-ing, giving happying",
    "-ly, giving happily",
    "-ful, giving happyful",
    "-ness, giving happiness"
   ],
   "correct": 3,
   "exp": "The suffix -ness turns happy into the noun happiness."
  }
 ],
 "Synonyms & Antonyms": [
  {
   "q": "What is a synonym?",
   "opts": [
    "A word with the same or nearly the same meaning as another",
    "A word with the opposite meaning",
    "A word that sounds funny",
    "A word with no meaning"
   ],
   "correct": 0,
   "exp": "A synonym is a word with the same or a very similar meaning to another word."
  },
  {
   "q": "Which pair of words are antonyms?",
   "opts": [
    "big and large",
    "hot and cold",
    "happy and glad",
    "fast and quick"
   ],
   "correct": 1,
   "exp": "Hot and cold have opposite meanings, making them antonyms."
  },
  {
   "q": "Which word is the best synonym for difficult?",
   "opts": [
    "easy",
    "simple",
    "hard",
    "light"
   ],
   "correct": 2,
   "exp": "Hard means the same as difficult, so it is the correct synonym."
  }
 ],
 "Collocations": [
  {
   "q": "What is a collocation?",
   "opts": [
    "A word spelled backwards",
    "A punctuation mark",
    "A grammar mistake",
    "A pair or group of words that naturally and frequently occur together"
   ],
   "correct": 3,
   "exp": "A collocation is a combination of words that native speakers naturally use together."
  },
  {
   "q": "Which is the natural collocation in English?",
   "opts": [
    "make a decision",
    "do a decision",
    "have a decision",
    "build a decision"
   ],
   "correct": 0,
   "exp": "English speakers say make a decision, which is the standard collocation."
  },
  {
   "q": "Which phrase is the correct collocation for coffee?",
   "opts": [
    "fast coffee",
    "strong coffee",
    "loud coffee",
    "tall decision"
   ],
   "correct": 1,
   "exp": "Strong coffee is the natural collocation English speakers use."
  }
 ],
 "Idioms": [
  {
   "q": "What is an idiom?",
   "opts": [
    "A spelling rule",
    "A single long word",
    "A phrase whose meaning cannot be understood from the literal words",
    "A type of punctuation"
   ],
   "correct": 2,
   "exp": "An idiom carries a figurative meaning that differs from the literal words."
  },
  {
   "q": "What does the idiom break the ice mean?",
   "opts": [
    "To smash something frozen",
    "To end a friendship",
    "To make someone angry",
    "To start a conversation and reduce social tension"
   ],
   "correct": 3,
   "exp": "Break the ice means to initiate conversation and ease initial awkwardness."
  },
  {
   "q": "If someone says a test was a piece of cake, what do they mean?",
   "opts": [
    "It was very easy",
    "It was about baking",
    "It was extremely difficult",
    "It was cancelled"
   ],
   "correct": 0,
   "exp": "A piece of cake is an idiom meaning something very easy."
  }
 ],
 "Phrasal Verbs": [
  {
   "q": "What is a phrasal verb?",
   "opts": [
    "A verb written in capital letters",
    "A verb combined with a particle (preposition or adverb) that creates a new meaning",
    "A noun acting as a verb",
    "A verb with no subject"
   ],
   "correct": 1,
   "exp": "A phrasal verb combines a verb with a particle to form a meaning different from the verb alone."
  },
  {
   "q": "What does the phrasal verb give up mean?",
   "opts": [
    "To lift something high",
    "To hand a gift",
    "To stop trying or quit",
    "To look upward"
   ],
   "correct": 2,
   "exp": "Give up means to stop trying or to quit."
  },
  {
   "q": "Which sentence uses a phrasal verb correctly?",
   "opts": [
    "Please turn the meeting yesterday",
    "She fast the road quickly",
    "They happy the report soon",
    "Can you look after my dog while I am away?"
   ],
   "correct": 3,
   "exp": "Look after means to take care of, used correctly in that sentence."
  }
 ],
 "Context Clues": [
  {
   "q": "What are context clues?",
   "opts": [
    "Hints in the surrounding text that help you guess an unknown word's meaning",
    "Footnotes at the back of a book",
    "The title of a chapter only",
    "A dictionary definition printed in the margin"
   ],
   "correct": 0,
   "exp": "Context clues are hints in nearby words and sentences that reveal an unfamiliar word's meaning."
  },
  {
   "q": "In the sentence, The arid desert had no water for miles, the surrounding words suggest that arid means what?",
   "opts": [
    "cold",
    "dry",
    "crowded",
    "green"
   ],
   "correct": 1,
   "exp": "The mention of a desert with no water signals that arid means dry."
  },
  {
   "q": "Why are context clues a useful reading skill?",
   "opts": [
    "They only work for words you already know",
    "They make reading slower",
    "They let you understand new words without stopping to look up each one",
    "They replace the need to read"
   ],
   "correct": 2,
   "exp": "Context clues let readers infer meanings and keep reading without constant dictionary use."
  }
 ],
 "Vocabulary Building Strategies": [
  {
   "q": "Which of these is an effective vocabulary building strategy?",
   "opts": [
    "Only reading the same page repeatedly",
    "Avoiding all new texts",
    "Never reviewing words you meet",
    "Reading widely and recording new words in a personal vocabulary log"
   ],
   "correct": 3,
   "exp": "Reading widely and keeping a vocabulary log exposes learners to new words and aids retention."
  },
  {
   "q": "Why does using a new word in your own sentences help you learn it?",
   "opts": [
    "It active recall and real use deepen memory and understanding",
    "It has no effect on memory",
    "It only helps with spelling",
    "It makes the word harder to remember"
   ],
   "correct": 0,
   "exp": "Actively using a word in your own sentences strengthens memory and understanding."
  },
  {
   "q": "How does spaced repetition help build vocabulary?",
   "opts": [
    "By studying a word only once",
    "By reviewing words at increasing intervals to move them into long-term memory",
    "By ignoring difficult words",
    "By learning words in random order without review"
   ],
   "correct": 1,
   "exp": "Spaced repetition reviews words at growing intervals, moving them into long-term memory."
  }
 ],
 "Parts of Speech": [
  {
   "q": "In the sentence 'She quickly finished her work', which word is an adverb?",
   "opts": [
    "finished",
    "She",
    "quickly",
    "work"
   ],
   "correct": 2,
   "exp": "'Quickly' modifies the verb 'finished', so it is an adverb."
  },
  {
   "q": "Which part of speech connects words, phrases, or clauses, such as 'and', 'but', and 'because'?",
   "opts": [
    "Preposition",
    "Pronoun",
    "Interjection",
    "Conjunction"
   ],
   "correct": 3,
   "exp": "Conjunctions join words, phrases, or clauses together."
  },
  {
   "q": "In 'Wow, that presentation was impressive!', what part of speech is 'Wow'?",
   "opts": [
    "Interjection",
    "Adjective",
    "Adverb",
    "Noun"
   ],
   "correct": 0,
   "exp": "'Wow' expresses sudden emotion, making it an interjection."
  }
 ],
 "Sentence Structure": [
  {
   "q": "Which of the following is a complete sentence?",
   "opts": [
    "Running down the hall.",
    "The manager approved the budget.",
    "After the long meeting.",
    "Because the report was late."
   ],
   "correct": 1,
   "exp": "'The manager approved the budget' has a subject and a complete verb, forming a full sentence."
  },
  {
   "q": "What type of sentence is 'I studied hard, so I passed the exam'?",
   "opts": [
    "Complex",
    "Simple",
    "Compound",
    "Fragment"
   ],
   "correct": 2,
   "exp": "Two independent clauses joined by 'so' form a compound sentence."
  },
  {
   "q": "Which sentence is complex, containing one independent and one dependent clause?",
   "opts": [
    "She sang and he danced.",
    "Open the door, please.",
    "The dog barked loudly.",
    "Although it rained, we went out."
   ],
   "correct": 3,
   "exp": "'Although it rained' is a dependent clause attached to the independent clause 'we went out'."
  }
 ],
 "Nouns": [
  {
   "q": "Which word is an abstract noun?",
   "opts": [
    "Honesty",
    "River",
    "Table",
    "Teacher"
   ],
   "correct": 0,
   "exp": "'Honesty' names an idea or quality that cannot be perceived by the senses."
  },
  {
   "q": "What is the correct plural form of 'child'?",
   "opts": [
    "Childs",
    "Children",
    "Childrens",
    "Childes"
   ],
   "correct": 1,
   "exp": "'Child' has the irregular plural 'children'."
  },
  {
   "q": "Which of the following is a collective noun?",
   "opts": [
    "Happy",
    "Book",
    "Team",
    "Quickly"
   ],
   "correct": 2,
   "exp": "'Team' refers to a group of people considered as a single unit."
  }
 ],
 "Pronouns": [
  {
   "q": "Which sentence uses the correct pronoun?",
   "opts": [
    "Me and him went to the store.",
    "I and him went to the store.",
    "Him and me went to the store.",
    "He and I went to the store."
   ],
   "correct": 3,
   "exp": "As subjects, the correct pronouns are 'He and I'."
  },
  {
   "q": "In 'The students submitted their assignments', what does 'their' refer to?",
   "opts": [
    "The students",
    "The assignments",
    "The teacher",
    "The class"
   ],
   "correct": 0,
   "exp": "The possessive pronoun 'their' refers back to 'the students'."
  },
  {
   "q": "Which is a reflexive pronoun in 'She taught herself to code'?",
   "opts": [
    "She",
    "herself",
    "code",
    "taught"
   ],
   "correct": 1,
   "exp": "'Herself' reflects the action back onto the subject, making it reflexive."
  }
 ],
 "Verbs": [
  {
   "q": "Which word is an action verb in 'The engineer designed a new bridge'?",
   "opts": [
    "new",
    "engineer",
    "designed",
    "bridge"
   ],
   "correct": 2,
   "exp": "'Designed' expresses the action performed by the subject."
  },
  {
   "q": "Which sentence contains a linking verb?",
   "opts": [
    "She runs every morning.",
    "He kicked the ball.",
    "They built a house.",
    "The soup smells delicious."
   ],
   "correct": 3,
   "exp": "'Smells' links the subject 'soup' to the description 'delicious', making it a linking verb."
  },
  {
   "q": "In 'They have finished the project', which word is the helping verb?",
   "opts": [
    "have",
    "finished",
    "They",
    "project"
   ],
   "correct": 0,
   "exp": "'Have' assists the main verb 'finished', so it is the helping (auxiliary) verb."
  }
 ],
 "Verb Tenses": [
  {
   "q": "Which sentence is in the present perfect tense?",
   "opts": [
    "I write reports daily.",
    "I have written the report.",
    "I will write the report.",
    "I was writing the report."
   ],
   "correct": 1,
   "exp": "'Have written' uses 'have' plus a past participle, forming the present perfect."
  },
  {
   "q": "Which verb form correctly completes 'While I ___ dinner, the phone rang'?",
   "opts": [
    "cooked",
    "cook",
    "was cooking",
    "have cooked"
   ],
   "correct": 2,
   "exp": "'Was cooking' describes an ongoing past action, the past continuous tense."
  },
  {
   "q": "Which sentence correctly uses the future perfect tense?",
   "opts": [
    "They complete the plan now.",
    "They are completing the plan.",
    "They completed the plan.",
    "By 2030, they will have completed the plan."
   ],
   "correct": 3,
   "exp": "'Will have completed' expresses an action finished before a future point, the future perfect."
  }
 ],
 "Subject-Verb Agreement": [
  {
   "q": "Which sentence has correct subject-verb agreement?",
   "opts": [
    "The list of items is long.",
    "The list of items were long.",
    "The list of items are long.",
    "The list of items be long."
   ],
   "correct": 0,
   "exp": "The subject 'list' is singular, so it takes the singular verb 'is'."
  },
  {
   "q": "Which verb correctly completes 'Neither the teacher nor the students ___ ready'?",
   "opts": [
    "is",
    "are",
    "has",
    "was"
   ],
   "correct": 1,
   "exp": "With 'neither...nor', the verb agrees with the nearer subject 'students', so 'are' is correct."
  },
  {
   "q": "Which verb correctly completes 'Each of the employees ___ a badge'?",
   "opts": [
    "were",
    "have",
    "has",
    "are"
   ],
   "correct": 2,
   "exp": "'Each' is singular and takes the singular verb 'has'."
  }
 ],
 "Adjectives": [
  {
   "q": "Which word is an adjective in 'The tall building collapsed'?",
   "opts": [
    "The",
    "collapsed",
    "building",
    "tall"
   ],
   "correct": 3,
   "exp": "'Tall' describes the noun 'building', making it an adjective."
  },
  {
   "q": "Which word correctly completes the comparative 'This test is ___ than the last one'?",
   "opts": [
    "more difficult",
    "most difficult",
    "difficult",
    "difficultest"
   ],
   "correct": 0,
   "exp": "Longer adjectives form the comparative with 'more', giving 'more difficult'."
  },
  {
   "q": "Which sentence orders its adjectives correctly?",
   "opts": [
    "A red big car",
    "A big red car",
    "Big a red car",
    "A car red big"
   ],
   "correct": 1,
   "exp": "Size comes before color in English adjective order, so 'big red car' is correct."
  }
 ],
 "Adverbs": [
  {
   "q": "Which word is an adverb in 'He spoke very softly'?",
   "opts": [
    "spoke",
    "He",
    "softly",
    "very"
   ],
   "correct": 2,
   "exp": "'Softly' modifies the verb 'spoke', making it an adverb."
  },
  {
   "q": "Which sentence uses an adverb of frequency correctly?",
   "opts": [
    "She always is late.",
    "She late always is.",
    "Always she late is.",
    "She is always late."
   ],
   "correct": 3,
   "exp": "Adverbs of frequency come after the verb 'be', so 'is always late' is correct."
  },
  {
   "q": "In 'The team performed well', what does 'well' describe?",
   "opts": [
    "How they performed",
    "The number of players",
    "The team",
    "When they played"
   ],
   "correct": 0,
   "exp": "'Well' is an adverb describing how the team performed."
  }
 ],
 "Articles": [
  {
   "q": "Which article correctly completes 'She is ___ honest person'?",
   "opts": [
    "a",
    "an",
    "no article",
    "the"
   ],
   "correct": 1,
   "exp": "'Honest' begins with a vowel sound, so 'an' is used."
  },
  {
   "q": "Which sentence uses articles correctly?",
   "opts": [
    "I saw the elephant at a zoo.",
    "I saw a elephant at the zoo.",
    "I saw an elephant at the zoo.",
    "I saw elephant at zoo."
   ],
   "correct": 2,
   "exp": "'An' precedes the vowel sound in 'elephant', and 'the' identifies the specific zoo."
  },
  {
   "q": "When do we typically use the definite article 'the'?",
   "opts": [
    "Before any singular noun",
    "Never with people",
    "Only with plural nouns",
    "When referring to a specific, known thing"
   ],
   "correct": 3,
   "exp": "'The' is used when the noun refers to something specific and identifiable."
  }
 ],
 "Prepositions": [
  {
   "q": "Which preposition correctly completes 'The meeting is ___ Monday'?",
   "opts": [
    "on",
    "at",
    "in",
    "by"
   ],
   "correct": 0,
   "exp": "We use 'on' with days of the week."
  },
  {
   "q": "Which sentence uses the preposition of time correctly?",
   "opts": [
    "The class starts in 9 a.m.",
    "The class starts at 9 a.m.",
    "The class starts by 9 a.m.",
    "The class starts on 9 a.m."
   ],
   "correct": 1,
   "exp": "We use 'at' with specific clock times."
  },
  {
   "q": "Which preposition best completes 'The keys are ___ the drawer'?",
   "opts": [
    "at",
    "on",
    "in",
    "over"
   ],
   "correct": 2,
   "exp": "'In' indicates something enclosed inside the drawer."
  }
 ],
 "Conjunctions": [
  {
   "q": "Which word is a coordinating conjunction?",
   "opts": [
    "because",
    "while",
    "although",
    "but"
   ],
   "correct": 3,
   "exp": "'But' is a coordinating conjunction that joins equal elements."
  },
  {
   "q": "Which subordinating conjunction correctly completes '___ it was raining, we stayed home'?",
   "opts": [
    "Because",
    "But",
    "And",
    "Or"
   ],
   "correct": 0,
   "exp": "'Because' introduces a reason in a dependent clause."
  },
  {
   "q": "Which sentence uses a correlative conjunction pair correctly?",
   "opts": [
    "Either you go nor stay.",
    "Either you go or stay.",
    "Neither he and she came.",
    "Both you or I can attend."
   ],
   "correct": 1,
   "exp": "'Either...or' is the correct correlative conjunction pair."
  }
 ],
 "Modals": [
  {
   "q": "Which modal expresses strong obligation?",
   "opts": [
    "could",
    "might",
    "must",
    "may"
   ],
   "correct": 2,
   "exp": "'Must' expresses strong obligation or necessity."
  },
  {
   "q": "Which modal correctly completes 'You ___ smoke here; it is prohibited'?",
   "opts": [
    "should",
    "would",
    "could",
    "must not"
   ],
   "correct": 3,
   "exp": "'Must not' expresses prohibition."
  },
  {
   "q": "Which sentence uses a modal to express polite permission?",
   "opts": [
    "May I leave early today?",
    "I leaving early today.",
    "I leave early today.",
    "Leave early I today?"
   ],
   "correct": 0,
   "exp": "'May I' is a polite way to ask for permission."
  }
 ],
 "Active & Passive Voice": [
  {
   "q": "Which sentence is written in the passive voice?",
   "opts": [
    "The chef cooked the meal.",
    "The meal was cooked by the chef.",
    "The chef cooks daily.",
    "The chef is cooking."
   ],
   "correct": 1,
   "exp": "The subject 'meal' receives the action, and 'was cooked' shows passive voice."
  },
  {
   "q": "Which is the correct passive form of 'The company launched a new product'?",
   "opts": [
    "The company was launched a product.",
    "A new product launched the company.",
    "A new product was launched by the company.",
    "A new product launches the company."
   ],
   "correct": 2,
   "exp": "The object becomes the subject and the verb becomes 'was launched by the company'."
  },
  {
   "q": "Which is the correct active-voice version of 'The letter was written by Sara'?",
   "opts": [
    "The letter wrote Sara.",
    "The letter is written Sara.",
    "Sara was written the letter.",
    "Sara wrote the letter."
   ],
   "correct": 3,
   "exp": "In the active voice, the doer 'Sara' becomes the subject: 'Sara wrote the letter'."
  }
 ],
 "Direct & Indirect Speech": [
  {
   "q": "Which is the correct indirect speech for She said, 'I am tired'?",
   "opts": [
    "She said that she was tired.",
    "She says she tired.",
    "She said that she is tired.",
    "She said I am tired."
   ],
   "correct": 0,
   "exp": "In reported speech, present tense shifts to past, giving 'she was tired'."
  },
  {
   "q": "Which is the correct direct speech form?",
   "opts": [
    "He said that he was busy.",
    "He said, 'I am busy.'",
    "He said busy he was.",
    "He said he is busy."
   ],
   "correct": 1,
   "exp": "Direct speech quotes the exact words within quotation marks."
  },
  {
   "q": "Which correctly reports the question He asked, 'Where do you live'?",
   "opts": [
    "He asked where I live?",
    "He asked where do you live.",
    "He asked where I lived.",
    "He asked where did I live."
   ],
   "correct": 2,
   "exp": "Reported questions use statement word order and shift tense, giving 'where I lived'."
  }
 ],
 "Conditionals": [
  {
   "q": "Which verb form correctly completes the first conditional 'If it rains, we ___ the trip'?",
   "opts": [
    "cancel",
    "would cancel",
    "cancelled",
    "will cancel"
   ],
   "correct": 3,
   "exp": "The first conditional uses 'will' plus the base verb in the result clause."
  },
  {
   "q": "Which sentence is a correct second conditional?",
   "opts": [
    "If I had money, I would travel.",
    "If I have money, I would travel.",
    "If I had money, I will travel.",
    "If I have money, I travelled."
   ],
   "correct": 0,
   "exp": "The second conditional uses past simple in the 'if' clause and 'would' in the result."
  },
  {
   "q": "Which verb form completes the third conditional 'If she had studied, she ___ the exam'?",
   "opts": [
    "would pass",
    "would have passed",
    "passed",
    "will pass"
   ],
   "correct": 1,
   "exp": "The third conditional uses 'would have' plus a past participle for unreal past results."
  }
 ],
 "Relative Clauses": [
  {
   "q": "Which relative pronoun correctly completes 'The woman ___ called you is my aunt'?",
   "opts": [
    "whose",
    "which",
    "who",
    "where"
   ],
   "correct": 2,
   "exp": "'Who' refers to people acting as the subject of the clause."
  },
  {
   "q": "Which sentence uses a relative clause correctly?",
   "opts": [
    "The book who I read was long.",
    "The book whose I read was long.",
    "The book where I read was long.",
    "The book which I read was long."
   ],
   "correct": 3,
   "exp": "'Which' refers to things such as 'the book'."
  },
  {
   "q": "Which relative pronoun shows possession in 'The man ___ car was stolen called the police'?",
   "opts": [
    "whose",
    "which",
    "who",
    "whom"
   ],
   "correct": 0,
   "exp": "'Whose' indicates possession, referring to the man's car."
  }
 ],
 "Punctuation": [
  {
   "q": "Which sentence is punctuated correctly?",
   "opts": [
    "We bought apples oranges and pears.",
    "We bought apples, oranges, and pears.",
    "We bought, apples oranges pears.",
    "We bought apples, oranges and, pears."
   ],
   "correct": 1,
   "exp": "Commas correctly separate items in a list."
  },
  {
   "q": "Which is the correct singular possessive form for a tail belonging to one dog?",
   "opts": [
    "dogs' tail",
    "dogs tail",
    "dog's tail",
    "dog s' tail"
   ],
   "correct": 2,
   "exp": "A singular possessive adds an apostrophe before the 's': 'dog's'."
  },
  {
   "q": "Which sentence correctly uses a semicolon?",
   "opts": [
    "I was tired; so I slept.",
    "I was; tired I slept.",
    "I was tired, I went to sleep;",
    "I was tired; I went to sleep."
   ],
   "correct": 3,
   "exp": "A semicolon joins two closely related independent clauses without a conjunction."
  }
 ],
 "Common Grammar Errors": [
  {
   "q": "Which sentence uses 'their', 'there', and 'they're' correctly?",
   "opts": [
    "They're going to their house over there.",
    "There going to their house over they're.",
    "Their going to they're house over there.",
    "Their going to there house over they're."
   ],
   "correct": 0,
   "exp": "'They're' means they are, 'their' shows possession, and 'there' indicates place."
  },
  {
   "q": "Which word correctly completes 'The decision will ___ everyone'?",
   "opts": [
    "effect",
    "affect",
    "effected",
    "affects"
   ],
   "correct": 1,
   "exp": "'Affect' is the verb meaning to influence, while 'effect' is usually a noun."
  },
  {
   "q": "Which sentence correctly uses 'its' or 'it's'?",
   "opts": [
    "The dog wagged it's tail.",
    "Its raining outside today.",
    "It's a beautiful day for its walk.",
    "Its' a nice day."
   ],
   "correct": 2,
   "exp": "'It's' means it is, and 'its' is the possessive form, both used correctly here."
  }
 ],
 "Reading Strategies": [
  {
   "q": "Why should a reader adjust their reading strategy based on their purpose?",
   "opts": [
    "Because reading strategies are decided by the author, not the reader",
    "Because all texts should be read at the same slow pace",
    "Because strategies only matter for fiction",
    "Because different goals, like finding a fact versus deep study, require different approaches"
   ],
   "correct": 3,
   "exp": "Effective readers match their strategy to their purpose, such as scanning for a fact or reading closely to study."
  },
  {
   "q": "What does previewing a text before reading it in full accomplish?",
   "opts": [
    "It activates prior knowledge and sets expectations about content",
    "It replaces the need to read the text at all",
    "It guarantees you will memorize every detail",
    "It is only useful for very short texts"
   ],
   "correct": 0,
   "exp": "Previewing headings and structure activates background knowledge and helps readers anticipate the content."
  },
  {
   "q": "Which practice best reflects an active reading strategy?",
   "opts": [
    "Reading every word aloud at a constant speed",
    "Asking questions and making predictions while reading",
    "Avoiding note-taking to save time",
    "Reading the conclusion first and stopping there"
   ],
   "correct": 1,
   "exp": "Active reading involves engaging with the text by questioning, predicting, and monitoring comprehension."
  }
 ],
 "Skimming": [
  {
   "q": "What is the main purpose of skimming a text?",
   "opts": [
    "To locate one specific number or name",
    "To memorize every supporting detail",
    "To get a quick general overview of the main idea",
    "To translate each sentence carefully"
   ],
   "correct": 2,
   "exp": "Skimming is reading quickly to grasp the overall gist or main idea of a text."
  },
  {
   "q": "Which parts of a text are most useful to focus on when skimming?",
   "opts": [
    "The page numbers and margins",
    "Every footnote and citation",
    "Only the middle sentences of each paragraph",
    "Titles, headings, and first sentences of paragraphs"
   ],
   "correct": 3,
   "exp": "Titles, headings, and topic sentences quickly reveal the general content when skimming."
  },
  {
   "q": "In which situation is skimming the most appropriate strategy?",
   "opts": [
    "Deciding whether an article is relevant before reading it fully",
    "Finding a specific date in a schedule",
    "Studying for a detailed final exam",
    "Proofreading a document for spelling errors"
   ],
   "correct": 0,
   "exp": "Skimming helps a reader quickly judge whether a text is relevant enough to read in depth."
  }
 ],
 "Scanning": [
  {
   "q": "What is scanning primarily used for?",
   "opts": [
    "Understanding the author's overall argument",
    "Locating specific information such as a name, date, or number",
    "Enjoying the style of the writing",
    "Summarizing the whole passage"
   ],
   "correct": 1,
   "exp": "Scanning is reading to find specific pieces of information quickly without reading everything."
  },
  {
   "q": "Which task is a clear example of scanning?",
   "opts": [
    "Reading a novel from start to finish",
    "Getting the general theme of an essay",
    "Looking up a phone number in a directory",
    "Analyzing a poem's meaning"
   ],
   "correct": 2,
   "exp": "Finding a phone number involves searching for one specific item, which is scanning."
  },
  {
   "q": "How does scanning differ from skimming?",
   "opts": [
    "They are two names for the exact same process",
    "Scanning is slower and more thorough than skimming",
    "Scanning ignores keywords, while skimming focuses on them",
    "Scanning targets specific details, while skimming gets a general overview"
   ],
   "correct": 3,
   "exp": "Scanning hunts for specific information, whereas skimming aims for the overall gist."
  }
 ],
 "Identifying Main Ideas": [
  {
   "q": "What is the main idea of a paragraph?",
   "opts": [
    "The central point the author wants to convey",
    "The first word of the paragraph",
    "A minor example used for illustration",
    "The longest sentence in the paragraph"
   ],
   "correct": 0,
   "exp": "The main idea is the central point or overall message the author communicates."
  },
  {
   "q": "Where is the main idea of a paragraph most often stated?",
   "opts": [
    "Always in the final footnote",
    "Frequently in a topic sentence, often at the beginning",
    "Only in the title of the book",
    "Never directly stated in academic writing"
   ],
   "correct": 1,
   "exp": "The main idea is commonly expressed in a topic sentence, often near the start of a paragraph."
  },
  {
   "q": "Which question best helps a reader identify the main idea?",
   "opts": [
    "What single word appears most often?",
    "How many sentences are there?",
    "What is this passage mostly about?",
    "Which sentence is the shortest?"
   ],
   "correct": 2,
   "exp": "Asking what the passage is mostly about points directly to its main idea."
  }
 ],
 "Supporting Details": [
  {
   "q": "What is the role of supporting details in a paragraph?",
   "opts": [
    "To replace the main idea entirely",
    "To state the central point of the text",
    "To introduce an unrelated topic",
    "To explain, prove, or illustrate the main idea"
   ],
   "correct": 3,
   "exp": "Supporting details develop the main idea by providing evidence, examples, and explanation."
  },
  {
   "q": "Which of the following is most likely a supporting detail rather than a main idea?",
   "opts": [
    "A 2020 study found participants who walked daily lowered their blood pressure",
    "Exercise improves overall health",
    "The essay argues for a healthier lifestyle",
    "Health is important for everyone"
   ],
   "correct": 0,
   "exp": "A specific study with data is a detail that supports the broader claim about health."
  },
  {
   "q": "Which signal words often introduce supporting details?",
   "opts": [
    "In conclusion, therefore, thus",
    "For example, such as, in addition",
    "However, on the other hand, nevertheless",
    "First and foremost, above all"
   ],
   "correct": 1,
   "exp": "Phrases like for example and such as commonly introduce details that back up the main idea."
  }
 ],
 "Making Inferences": [
  {
   "q": "What does it mean to make an inference while reading?",
   "opts": [
    "To copy the text word for word",
    "To ignore any information the author leaves out",
    "To draw a logical conclusion from clues not directly stated",
    "To read only the explicitly stated facts"
   ],
   "correct": 2,
   "exp": "An inference is a reasoned conclusion based on textual clues plus prior knowledge, not a direct statement."
  },
  {
   "q": "If a passage says a character shivered, pulled her coat tight, and saw her breath, what can you infer?",
   "opts": [
    "It is nighttime",
    "The character is at the beach in summer",
    "The character is angry",
    "The weather is cold"
   ],
   "correct": 3,
   "exp": "The clues about shivering and visible breath logically imply that the weather is cold."
  },
  {
   "q": "What makes an inference valid rather than a wild guess?",
   "opts": [
    "It is based on textual evidence and reasonable logic",
    "It contradicts the details in the text",
    "It relies only on imagination with no clues",
    "It repeats exactly what the author already stated"
   ],
   "correct": 0,
   "exp": "A valid inference is supported by evidence in the text combined with sound reasoning."
  }
 ],
 "Vocabulary in Context": [
  {
   "q": "What does using context clues to determine a word's meaning involve?",
   "opts": [
    "Guessing randomly without reading nearby text",
    "Using surrounding words and sentences to infer the meaning",
    "Skipping the unfamiliar word entirely",
    "Only checking a dictionary and ignoring the sentence"
   ],
   "correct": 1,
   "exp": "Context clues rely on the surrounding words and sentences to reveal an unknown word's meaning."
  },
  {
   "q": "In the sentence, The arid desert had no water for miles, what does arid most likely mean?",
   "opts": [
    "Very wet",
    "Crowded",
    "Extremely dry",
    "Cold"
   ],
   "correct": 2,
   "exp": "The mention of a desert with no water signals that arid means extremely dry."
  },
  {
   "q": "Which type of context clue defines a word directly within the sentence?",
   "opts": [
    "A punctuation-only clue with no words",
    "A page-number clue",
    "A font-size clue",
    "A definition or restatement clue"
   ],
   "correct": 3,
   "exp": "A definition or restatement clue explains the unfamiliar word right in the sentence."
  }
 ],
 "Reading Academic Articles": [
  {
   "q": "What is the purpose of the abstract in an academic article?",
   "opts": [
    "To provide a concise summary of the article's aims, methods, and findings",
    "To list the author's personal opinions only",
    "To advertise the journal to new readers",
    "To replace the reference list"
   ],
   "correct": 0,
   "exp": "An abstract summarizes the study's purpose, methods, and main findings so readers can judge relevance."
  },
  {
   "q": "Which section of a research article typically explains how the study was conducted?",
   "opts": [
    "The introduction",
    "The methods section",
    "The abstract",
    "The acknowledgments"
   ],
   "correct": 1,
   "exp": "The methods section describes the procedures and design used to conduct the study."
  },
  {
   "q": "Why is it useful to read the discussion or conclusion of an academic article carefully?",
   "opts": [
    "It only lists the references",
    "It contains only raw data tables",
    "It interprets the results and explains their significance",
    "It repeats the title several times"
   ],
   "correct": 2,
   "exp": "The discussion interprets findings and explains what they mean and why they matter."
  }
 ],
 "Reading Business Documents": [
  {
   "q": "What is the main purpose of the subject line in a business email?",
   "opts": [
    "To provide a legal disclaimer",
    "To hide the topic from the reader",
    "To list all recipients",
    "To briefly state the email's purpose so the reader knows what to expect"
   ],
   "correct": 3,
   "exp": "A clear subject line concisely tells the reader what the email is about."
  },
  {
   "q": "When reading a business report, where would you most likely find a quick overview for busy managers?",
   "opts": [
    "In the executive summary",
    "In the appendix footnotes",
    "In the page headers",
    "In the reference list"
   ],
   "correct": 0,
   "exp": "The executive summary gives decision-makers a brief overview of the report's key points."
  },
  {
   "q": "Why are bullet points and headings common in business documents?",
   "opts": [
    "To make the document longer",
    "To help readers quickly locate and scan key information",
    "To hide the main message",
    "To follow poetry conventions"
   ],
   "correct": 1,
   "exp": "Headings and bullet points make information easy to scan and locate quickly."
  }
 ],
 "Active Listening": [
  {
   "q": "What best describes active listening?",
   "opts": [
    "Hearing sounds while thinking about something else",
    "Interrupting to share your own story",
    "Fully concentrating on, understanding, and responding to the speaker",
    "Waiting silently only to plan your reply"
   ],
   "correct": 2,
   "exp": "Active listening means fully focusing on the speaker to understand and respond appropriately."
  },
  {
   "q": "Which behavior demonstrates active listening?",
   "opts": [
    "Changing the subject immediately",
    "Checking your phone while the speaker talks",
    "Finishing the speaker's sentences for them",
    "Paraphrasing what the speaker said to confirm understanding"
   ],
   "correct": 3,
   "exp": "Paraphrasing to confirm understanding is a core active listening technique."
  },
  {
   "q": "Why is giving nonverbal feedback, like nodding, important in active listening?",
   "opts": [
    "It signals attention and encourages the speaker to continue",
    "It proves you disagree with the speaker",
    "It replaces the need to understand the words",
    "It ends the conversation politely"
   ],
   "correct": 0,
   "exp": "Nonverbal cues like nodding show engagement and encourage the speaker to keep going."
  }
 ],
 "Listening for Main Ideas": [
  {
   "q": "When listening for the main idea, what should you focus on?",
   "opts": [
    "Every single word equally",
    "The overall point the speaker is trying to make",
    "Only the first word of each sentence",
    "The background noise"
   ],
   "correct": 1,
   "exp": "Listening for the main idea means grasping the speaker's overall central point."
  },
  {
   "q": "Which spoken signal often introduces a main idea in a talk?",
   "opts": [
    "For example",
    "By the way",
    "The key point is",
    "As a small side note"
   ],
   "correct": 2,
   "exp": "Phrases like the key point is directly signal a speaker's main idea."
  },
  {
   "q": "How can you identify the main idea when you miss some words in a talk?",
   "opts": [
    "Assume there is no main idea",
    "Stop listening entirely",
    "Focus only on unfamiliar vocabulary",
    "Use context and repeated ideas to grasp the overall message"
   ],
   "correct": 3,
   "exp": "Using context and noticing repeated or emphasized ideas helps capture the main point despite gaps."
  }
 ],
 "Listening for Details": [
  {
   "q": "What does listening for details require you to do?",
   "opts": [
    "Catch specific information such as names, dates, and figures",
    "Ignore specific facts and numbers",
    "Only summarize the general topic",
    "Listen to the tone but not the words"
   ],
   "correct": 0,
   "exp": "Listening for details means catching specific information like names, dates, and numbers."
  },
  {
   "q": "In which situation is listening for details most important?",
   "opts": [
    "Deciding the general mood of a song",
    "Writing down flight times and gate numbers from an announcement",
    "Guessing the topic of a conversation",
    "Enjoying background music"
   ],
   "correct": 1,
   "exp": "Recording exact flight times and gate numbers depends on catching precise details."
  },
  {
   "q": "Which strategy helps you catch details while listening?",
   "opts": [
    "Focusing only on the speaker's clothing",
    "Thinking about your response instead of listening",
    "Listening for keywords and specific facts as they are spoken",
    "Assuming details are unimportant"
   ],
   "correct": 2,
   "exp": "Focusing on keywords and specific facts as they occur helps capture important details."
  }
 ],
 "Note-Taking Skills": [
  {
   "q": "Why is it more effective to write notes in your own words rather than copying word for word?",
   "opts": [
    "It is required by grammar rules",
    "It takes longer and is harder",
    "It removes all key ideas",
    "It promotes understanding and helps you process the information"
   ],
   "correct": 3,
   "exp": "Paraphrasing in your own words deepens understanding and helps you engage with the material."
  },
  {
   "q": "Which is a common feature of effective note-taking?",
   "opts": [
    "Using abbreviations, symbols, and short phrases",
    "Recording every word the speaker says",
    "Writing only complete formal sentences",
    "Avoiding any structure or headings"
   ],
   "correct": 0,
   "exp": "Effective notes use abbreviations, symbols, and short phrases to capture ideas quickly."
  },
  {
   "q": "What is a key benefit of the Cornell note-taking method?",
   "opts": [
    "It requires no review afterward",
    "It divides the page into sections for notes, cues, and a summary",
    "It forbids the use of keywords",
    "It only works for math problems"
   ],
   "correct": 1,
   "exp": "The Cornell method organizes the page into notes, cue, and summary areas to aid review."
  }
 ],
 "Listening to Lectures": [
  {
   "q": "What do lecturers often do to signal that important information is coming?",
   "opts": [
    "Lower their voice to a whisper and stop",
    "Change the topic without warning",
    "Use phrases such as this is important or remember that",
    "Read silently to themselves"
   ],
   "correct": 2,
   "exp": "Signposting phrases like this is important alert listeners to key points in a lecture."
  },
  {
   "q": "How can recognizing lecture structure help a listener?",
   "opts": [
    "It replaces the need to listen",
    "It makes note-taking impossible",
    "It only matters after the lecture ends",
    "It helps predict and follow the flow of ideas"
   ],
   "correct": 3,
   "exp": "Understanding the structure helps a listener anticipate and follow the organization of ideas."
  },
  {
   "q": "What should you do when you miss a point during a lecture?",
   "opts": [
    "Leave a gap in your notes and keep listening, then clarify later",
    "Stop taking notes for the rest of the class",
    "Interrupt loudly every time",
    "Erase all previous notes"
   ],
   "correct": 0,
   "exp": "Leaving a gap and continuing to listen lets you keep up and fill in the point afterward."
  }
 ],
 "Listening to Business Meetings": [
  {
   "q": "In a business meeting, what does the term action item usually refer to?",
   "opts": [
    "A snack served during the break",
    "A specific task assigned to someone to complete",
    "The meeting room number",
    "A vote to end the meeting"
   ],
   "correct": 1,
   "exp": "An action item is a concrete task assigned to a person during a meeting."
  },
  {
   "q": "Why is it useful to listen carefully for who is assigned each task in a meeting?",
   "opts": [
    "To criticize the speaker",
    "To ignore the agenda",
    "To know who is responsible for follow-up actions",
    "To leave the meeting early"
   ],
   "correct": 2,
   "exp": "Tracking task assignments clarifies responsibility for follow-up after the meeting."
  },
  {
   "q": "What is the purpose of an agenda in a business meeting?",
   "opts": [
    "To decide who pays for lunch",
    "To record personal opinions only",
    "To replace the minutes",
    "To list the topics and structure the discussion"
   ],
   "correct": 3,
   "exp": "An agenda outlines the topics and gives structure to the meeting discussion."
  }
 ],
 "Understanding Different English Accents": [
  {
   "q": "Why can the same English word sound different across accents?",
   "opts": [
    "Because pronunciation, stress, and intonation vary between regions",
    "Because the spelling changes with each accent",
    "Because the meaning is different in each country",
    "Because grammar rules change completely"
   ],
   "correct": 0,
   "exp": "Accents differ mainly in pronunciation, stress, and intonation rather than spelling or meaning."
  },
  {
   "q": "What is an effective way to improve understanding of unfamiliar English accents?",
   "opts": [
    "Avoid listening to them entirely",
    "Expose yourself regularly to varied speakers through media and conversation",
    "Only read text and never listen",
    "Insist everyone speak one accent"
   ],
   "correct": 1,
   "exp": "Regular exposure to diverse speakers trains the ear to understand different accents."
  },
  {
   "q": "When you struggle to understand someone's accent, what is a helpful strategy?",
   "opts": [
    "Immediately stop the conversation",
    "Correct the speaker's pronunciation",
    "Focus on the overall meaning and use context clues",
    "Assume they are speaking a different language"
   ],
   "correct": 2,
   "exp": "Focusing on overall meaning and context helps comprehension when an accent is unfamiliar."
  }
 ],
 "Pronunciation": [
  {
   "q": "Which pair of words are minimal pairs that a learner might confuse because they differ by a single sound?",
   "opts": [
    "happy and joyful",
    "table and chair",
    "quickly and slowly",
    "ship and sheep"
   ],
   "correct": 3,
   "exp": "Ship and sheep differ only in the vowel sound, making them a classic minimal pair for practice."
  },
  {
   "q": "What does word stress mean when pronouncing a multi-syllable word like PHOtograph?",
   "opts": [
    "Making one syllable louder, longer, and clearer than the others",
    "Saying every syllable at the same volume",
    "Pausing before each syllable",
    "Whispering the final syllable"
   ],
   "correct": 0,
   "exp": "Word stress means giving one syllable more emphasis in loudness, length, and clarity than the rest."
  },
  {
   "q": "Why can the letter combination -ough be difficult for learners of English pronunciation?",
   "opts": [
    "It is always silent",
    "It can be pronounced several different ways in different words",
    "It is only used in formal writing",
    "It is never found at the end of a word"
   ],
   "correct": 1,
   "exp": "The spelling -ough maps to several different sounds, as in through, tough, and though, so spelling does not predict pronunciation."
  }
 ],
 "Intonation": [
  {
   "q": "In standard English, what intonation pattern is most common for a yes or no question such as Are you ready?",
   "opts": [
    "Flat, level tone throughout",
    "Falling tone at the end",
    "Rising tone at the end",
    "No change in pitch at all"
   ],
   "correct": 2,
   "exp": "Yes or no questions typically use rising intonation at the end to signal that a response is expected."
  },
  {
   "q": "What does a speaker usually communicate by using a falling intonation at the end of a statement?",
   "opts": [
    "That they are surprised",
    "That they are unsure and want confirmation",
    "That they are asking a question",
    "That the statement is finished and certain"
   ],
   "correct": 3,
   "exp": "A falling tone at the end signals completeness and certainty, marking the statement as finished."
  },
  {
   "q": "How can intonation change the meaning of the same words, such as You did that?",
   "opts": [
    "Rising intonation can turn a statement into a surprised question",
    "It cannot change meaning, only volume",
    "It only affects the speed of speech",
    "It only matters in written English"
   ],
   "correct": 0,
   "exp": "The same words spoken with rising intonation become a question or express surprise rather than a plain statement."
  }
 ],
 "Fluency Development": [
  {
   "q": "In speaking, what does fluency mainly refer to?",
   "opts": [
    "Using the most advanced vocabulary possible",
    "Speaking smoothly and continuously at a natural pace",
    "Never making any grammatical mistakes",
    "Speaking as fast as possible"
   ],
   "correct": 1,
   "exp": "Fluency is the ability to speak smoothly and continuously at a natural, comfortable pace."
  },
  {
   "q": "Which strategy best helps a speaker keep talking when they cannot remember an exact word?",
   "opts": [
    "Stopping completely until the word comes to mind",
    "Switching entirely to the first language",
    "Using a filler phrase or describing the idea in other words",
    "Repeating the previous sentence word for word"
   ],
   "correct": 2,
   "exp": "Paraphrasing or using a filler lets the speaker maintain flow instead of breaking down when a word is missing."
  },
  {
   "q": "Why is regular speaking practice important for developing fluency?",
   "opts": [
    "It guarantees a perfect native accent",
    "It removes the need to learn grammar",
    "It makes vocabulary unnecessary",
    "It builds automaticity so words come more quickly and naturally"
   ],
   "correct": 3,
   "exp": "Frequent practice builds automaticity, letting the speaker produce language faster and with less hesitation."
  }
 ],
 "Everyday Conversations": [
  {
   "q": "Which response is the most natural and polite reply to the greeting How are you?",
   "opts": [
    "I am fine, thanks. And you?",
    "That is not your concern.",
    "Why do you ask me that?",
    "I do not want to say."
   ],
   "correct": 0,
   "exp": "Answering briefly and returning the question is the standard, polite convention in casual greetings."
  },
  {
   "q": "What is the main purpose of small talk in everyday conversation?",
   "opts": [
    "To exchange detailed technical information",
    "To build friendly rapport and ease social interaction",
    "To end a conversation quickly",
    "To test the other person's knowledge"
   ],
   "correct": 1,
   "exp": "Small talk builds rapport and creates a comfortable social connection rather than transferring detailed information."
  },
  {
   "q": "Which phrase is the most appropriate polite way to interrupt someone in a friendly conversation?",
   "opts": [
    "Stop talking for a second.",
    "You are wrong about that.",
    "Sorry to interrupt, but may I add something?",
    "Be quiet and listen to me."
   ],
   "correct": 2,
   "exp": "Apologizing and asking permission is the courteous way to interrupt without appearing rude."
  }
 ],
 "Academic Discussions": [
  {
   "q": "Which phrase is most appropriate for politely disagreeing during an academic discussion?",
   "opts": [
    "That is completely wrong.",
    "Nobody agrees with you.",
    "You clearly did not read the material.",
    "I see your point, but I would argue that..."
   ],
   "correct": 3,
   "exp": "Acknowledging the other view before offering a counterargument keeps the disagreement respectful and academic."
  },
  {
   "q": "In an academic seminar, why is it important to support your opinions with evidence?",
   "opts": [
    "Because evidence makes arguments more credible and persuasive",
    "Because it makes the discussion shorter",
    "Because the loudest speaker wins",
    "Because personal opinions are not allowed"
   ],
   "correct": 0,
   "exp": "Backing claims with evidence strengthens their credibility, which is central to academic discussion."
  },
  {
   "q": "What is an effective way to show active listening in an academic discussion?",
   "opts": [
    "Interrupting to change the topic",
    "Building on a previous speaker's point before adding your own",
    "Checking your phone while others speak",
    "Repeating your point until others agree"
   ],
   "correct": 1,
   "exp": "Referencing and extending a previous speaker's idea demonstrates that you listened and engages the group."
  }
 ],
 "Public Speaking": [
  {
   "q": "What is the most effective way to begin a public speech to capture the audience's attention?",
   "opts": [
    "Apologizing for being nervous",
    "Reading every word slowly from a script",
    "Opening with a hook such as a question, story, or striking fact",
    "Listing all the things you will not cover"
   ],
   "correct": 2,
   "exp": "A strong hook like a question, story, or surprising fact immediately engages the audience."
  },
  {
   "q": "Why is eye contact important when delivering a public speech?",
   "opts": [
    "It lets you avoid looking at your notes",
    "It helps you speak faster",
    "It signals that the speech is nearly over",
    "It builds connection and trust with the audience"
   ],
   "correct": 3,
   "exp": "Eye contact establishes a personal connection and helps the audience trust and stay engaged with the speaker."
  },
  {
   "q": "Which practice best helps a speaker manage nervousness before a public speech?",
   "opts": [
    "Rehearsing thoroughly and taking slow, deep breaths",
    "Memorizing the speech only minutes before",
    "Avoiding all preparation to stay spontaneous",
    "Speaking as quickly as possible to finish sooner"
   ],
   "correct": 0,
   "exp": "Thorough rehearsal combined with controlled breathing reduces anxiety and builds confidence."
  }
 ],
 "Business Meetings": [
  {
   "q": "What is the main purpose of an agenda in a business meeting?",
   "opts": [
    "To record who attended the meeting",
    "To outline the topics and keep the meeting focused",
    "To assign blame for past mistakes",
    "To replace the need for any discussion"
   ],
   "correct": 1,
   "exp": "An agenda lists the topics to be covered and keeps the meeting organized and on track."
  },
  {
   "q": "Which phrase is most appropriate for professionally proposing an idea in a business meeting?",
   "opts": [
    "We have to do it my way.",
    "That idea will never work.",
    "I suggest we consider adopting this approach.",
    "Just do whatever you want."
   ],
   "correct": 2,
   "exp": "Suggesting rather than demanding presents the idea professionally and invites discussion."
  },
  {
   "q": "What are the action items typically recorded at the end of a business meeting?",
   "opts": [
    "A summary of everyone's personal opinions",
    "Complaints raised during the meeting",
    "The seating arrangement of participants",
    "Specific tasks assigned to people with deadlines"
   ],
   "correct": 3,
   "exp": "Action items are the concrete tasks assigned to individuals, usually with deadlines, so follow-up is clear."
  }
 ],
 "Telephone Communication": [
  {
   "q": "Which is the most professional way to answer a business phone call?",
   "opts": [
    "Good morning, this is Sarah from Sales. How may I help you?",
    "Yeah, who is this?",
    "What do you want?",
    "Hold on, I am busy."
   ],
   "correct": 0,
   "exp": "Greeting the caller, identifying yourself, and offering help is the courteous professional standard."
  },
  {
   "q": "Why is it especially important to speak clearly and confirm details on the telephone?",
   "opts": [
    "Because calls are always recorded",
    "Because the listener cannot see your gestures or lips",
    "Because phone lines only allow short calls",
    "Because tone of voice does not matter on the phone"
   ],
   "correct": 1,
   "exp": "Without visual cues the listener relies entirely on your voice, so clarity and confirming details prevent misunderstanding."
  },
  {
   "q": "What should you do when you need to put a caller on hold?",
   "opts": [
    "Hang up and call them back later",
    "Say nothing and mute the line immediately",
    "Ask permission, explain briefly, and thank them for waiting",
    "Transfer them without any warning"
   ],
   "correct": 2,
   "exp": "Asking permission and explaining the reason shows respect and keeps the caller informed."
  }
 ],
 "Presentation Skills": [
  {
   "q": "How should visual aids such as slides best support a presentation?",
   "opts": [
    "By containing the full text of everything you will say",
    "By replacing the need for the speaker entirely",
    "By using as many animations as possible",
    "By highlighting key points with clear, uncluttered visuals"
   ],
   "correct": 3,
   "exp": "Effective slides reinforce key points with clear, simple visuals rather than duplicating the entire spoken script."
  },
  {
   "q": "What is the best way to structure the body of an effective presentation?",
   "opts": [
    "Clearly organized main points that flow logically",
    "A random collection of interesting facts",
    "One long unbroken paragraph of information",
    "Only questions with no answers"
   ],
   "correct": 0,
   "exp": "A logical sequence of clearly organized main points helps the audience follow and remember the content."
  },
  {
   "q": "Why is it valuable to summarize your key points at the end of a presentation?",
   "opts": [
    "To fill extra time",
    "To reinforce the main message and help the audience remember it",
    "To introduce brand-new information",
    "To confuse the audience deliberately"
   ],
   "correct": 1,
   "exp": "A closing summary reinforces the core message and improves the audience's retention of it."
  }
 ],
 "Sentence Writing": [
  {
   "q": "Which of the following is a complete sentence?",
   "opts": [
    "Running quickly down the street.",
    "Because the weather was cold.",
    "The students completed their assignments on time.",
    "After the long and difficult meeting."
   ],
   "correct": 2,
   "exp": "It contains a subject and a verb and expresses a complete thought, unlike the sentence fragments."
  },
  {
   "q": "What error appears in this sentence: I finished my work, I went home?",
   "opts": [
    "An incorrect verb tense",
    "A missing subject",
    "A spelling mistake",
    "A comma splice joining two independent clauses"
   ],
   "correct": 3,
   "exp": "Two independent clauses joined only by a comma form a comma splice, which needs a conjunction or semicolon."
  },
  {
   "q": "Which sentence correctly uses a compound structure with a coordinating conjunction?",
   "opts": [
    "She studied hard, and she passed the exam.",
    "She studied hard she passed the exam.",
    "She studied hard, she passed the exam.",
    "She studied hard although passed the exam."
   ],
   "correct": 0,
   "exp": "Two independent clauses joined by a comma and the coordinating conjunction and form a correct compound sentence."
  }
 ],
 "Paragraph Writing": [
  {
   "q": "What is the main function of a topic sentence in a paragraph?",
   "opts": [
    "To provide a detailed example",
    "To state the main idea the paragraph will develop",
    "To conclude the entire essay",
    "To cite an outside source"
   ],
   "correct": 1,
   "exp": "The topic sentence introduces the central idea that the rest of the paragraph supports and develops."
  },
  {
   "q": "Which quality describes a well-written, unified paragraph?",
   "opts": [
    "It contains exactly ten sentences",
    "It covers as many different topics as possible",
    "Every sentence relates to and supports one central idea",
    "It avoids using any examples"
   ],
   "correct": 2,
   "exp": "Unity means all sentences focus on and support a single main idea, keeping the paragraph coherent."
  },
  {
   "q": "What role do transition words like however and therefore play in a paragraph?",
   "opts": [
    "They increase the word count",
    "They replace the topic sentence",
    "They signal the end of the essay",
    "They show the logical connections between ideas"
   ],
   "correct": 3,
   "exp": "Transition words clarify how ideas relate to one another, improving the paragraph's flow and coherence."
  }
 ],
 "Essay Writing": [
  {
   "q": "What is the primary purpose of a thesis statement in an essay?",
   "opts": [
    "To present the essay's main argument or central claim",
    "To list every source used",
    "To summarize each body paragraph in detail",
    "To provide a personal anecdote"
   ],
   "correct": 0,
   "exp": "The thesis statement expresses the essay's central argument, guiding the whole piece."
  },
  {
   "q": "Which part of an essay typically restates the main argument and leaves the reader with a final thought?",
   "opts": [
    "The introduction",
    "The conclusion",
    "The first body paragraph",
    "The thesis statement"
   ],
   "correct": 1,
   "exp": "The conclusion restates the argument and provides a final thought, giving the essay a sense of closure."
  },
  {
   "q": "What is the recommended basic structure of a standard academic essay?",
   "opts": [
    "A list of bullet points",
    "Only a single long paragraph",
    "Introduction, body paragraphs, and conclusion",
    "Conclusion first, then introduction"
   ],
   "correct": 2,
   "exp": "A standard essay follows an introduction, several supporting body paragraphs, and a conclusion."
  }
 ],
 "Academic Writing Style": [
  {
   "q": "Which sentence best reflects a formal academic writing style?",
   "opts": [
    "The results were kinda surprising, to be honest.",
    "This stuff basically proves our point.",
    "We were super shocked by what we found!",
    "The findings indicate a significant correlation between the variables."
   ],
   "correct": 3,
   "exp": "It uses precise, objective, and formal language appropriate for academic writing, avoiding slang and casual tone."
  },
  {
   "q": "Why is academic writing usually expected to avoid contractions and slang?",
   "opts": [
    "To maintain a formal, objective, and professional tone",
    "Because they take up too much space",
    "Because readers cannot understand them",
    "Because they are grammatically incorrect in all writing"
   ],
   "correct": 0,
   "exp": "Avoiding contractions and slang keeps the tone formal and objective, as academic conventions require."
  },
  {
   "q": "In academic writing, why are claims typically supported with citations?",
   "opts": [
    "To make the paper longer",
    "To give credit to sources and strengthen credibility",
    "To decorate the reference list",
    "To avoid writing original sentences"
   ],
   "correct": 1,
   "exp": "Citations credit the original sources and lend authority and credibility to the writer's claims."
  }
 ],
 "Writing Clearly and Concisely": [
  {
   "q": "Which revision makes the sentence more concise without losing meaning?",
   "opts": [
    "Due to the fact that it was raining, we stayed inside.",
    "In light of the fact that rain was occurring, we remained indoors.",
    "Because it was raining, we stayed inside.",
    "Owing to the circumstance of rain, we did not go outside."
   ],
   "correct": 2,
   "exp": "Replacing the wordy phrase due to the fact that with because keeps the meaning while removing clutter."
  },
  {
   "q": "Why is the active voice often preferred over the passive voice for clear writing?",
   "opts": [
    "It is grammatically required in all sentences",
    "It always makes sentences longer",
    "It hides who performs the action",
    "It usually makes sentences more direct and easier to follow"
   ],
   "correct": 3,
   "exp": "The active voice states clearly who does what, making sentences more direct and readable."
  },
  {
   "q": "Which practice best supports concise writing?",
   "opts": [
    "Cutting unnecessary words and redundant phrases",
    "Repeating the main idea in several ways",
    "Adding as many adjectives as possible",
    "Using long, complex sentences everywhere"
   ],
   "correct": 0,
   "exp": "Removing redundant words and filler tightens the writing and makes the meaning clearer."
  }
 ],
 "Editing and Proofreading": [
  {
   "q": "What is the main difference between editing and proofreading?",
   "opts": [
    "They are exactly the same task",
    "Editing improves content and structure, while proofreading catches surface errors like spelling",
    "Editing only fixes commas, while proofreading rewrites ideas",
    "Proofreading happens before any writing begins"
   ],
   "correct": 1,
   "exp": "Editing focuses on content, clarity, and structure, whereas proofreading targets final surface errors like spelling and punctuation."
  },
  {
   "q": "Why is it helpful to read your writing aloud during proofreading?",
   "opts": [
    "It makes the writing longer",
    "It replaces the need to check spelling",
    "It helps you catch awkward phrasing and missing words",
    "It is only useful for poetry"
   ],
   "correct": 2,
   "exp": "Reading aloud makes awkward sentences and omitted words easier to notice than silent reading."
  },
  {
   "q": "Which of the following is a proofreading task rather than an editing task?",
   "opts": [
    "Reorganizing paragraphs for better flow",
    "Strengthening a weak argument",
    "Cutting an entire off-topic section",
    "Correcting a misspelled word and a missing comma"
   ],
   "correct": 3,
   "exp": "Fixing spelling and punctuation are surface corrections, which is the core work of proofreading."
  }
 ],
 "Research Essays": [
  {
   "q": "What is the primary purpose of a thesis statement in a research essay?",
   "opts": [
    "To state the essay's central argument or claim",
    "To list every source consulted during research",
    "To summarize the conclusion in advance",
    "To provide background facts about the topic"
   ],
   "correct": 0,
   "exp": "A thesis statement expresses the essay's main argument that the rest of the paper supports."
  },
  {
   "q": "Which section of a research essay presents evidence and analysis to support the argument?",
   "opts": [
    "The title page",
    "The body paragraphs",
    "The introduction hook",
    "The reference list"
   ],
   "correct": 1,
   "exp": "Body paragraphs develop and support the thesis with evidence and analysis."
  },
  {
   "q": "Why should a research essay use credible, peer-reviewed sources?",
   "opts": [
    "To make the essay longer",
    "To avoid writing an introduction",
    "To strengthen the argument with reliable evidence",
    "To replace the need for a thesis"
   ],
   "correct": 2,
   "exp": "Credible sources give the argument reliable, verifiable support that readers can trust."
  }
 ],
 "Reports": [
  {
   "q": "Which feature most distinguishes a report from an essay?",
   "opts": [
    "It never uses evidence",
    "It avoids any conclusions",
    "It must be written in the first person",
    "It uses clearly labeled sections and headings"
   ],
   "correct": 3,
   "exp": "Reports are organized into distinct labeled sections and headings for easy navigation."
  },
  {
   "q": "In a formal report, what is the main purpose of the executive summary?",
   "opts": [
    "To give a brief overview of key findings and recommendations",
    "To list all references used",
    "To thank the people involved",
    "To define technical terms"
   ],
   "correct": 0,
   "exp": "The executive summary briefly conveys the report's key findings and recommendations for busy readers."
  },
  {
   "q": "Where in a report would specific advice for action typically appear?",
   "opts": [
    "The title page",
    "The recommendations section",
    "The appendix of raw data",
    "The table of contents"
   ],
   "correct": 1,
   "exp": "The recommendations section states the actions suggested based on the findings."
  }
 ],
 "Literature Reviews": [
  {
   "q": "What is the main goal of a literature review?",
   "opts": [
    "To report original experimental results",
    "To advertise a product",
    "To survey and synthesize existing research on a topic",
    "To list personal opinions only"
   ],
   "correct": 2,
   "exp": "A literature review surveys and synthesizes what has already been published on a topic."
  },
  {
   "q": "A strong literature review does more than summarize sources by also doing what?",
   "opts": [
    "Copying abstracts word for word",
    "Ignoring conflicting findings",
    "Listing sources alphabetically without comment",
    "Identifying gaps, patterns, and relationships between studies"
   ],
   "correct": 3,
   "exp": "A good review synthesizes sources, showing patterns, gaps, and how studies relate."
  },
  {
   "q": "Why is it important to organize a literature review thematically rather than source by source?",
   "opts": [
    "It shows connections between ideas rather than isolated summaries",
    "It hides weak sources",
    "It makes the review shorter",
    "It removes the need for citations"
   ],
   "correct": 0,
   "exp": "Thematic organization reveals connections and debates across sources instead of disconnected summaries."
  }
 ],
 "Summaries": [
  {
   "q": "What is the key characteristic of an effective summary?",
   "opts": [
    "It adds the writer's new opinions",
    "It restates only the main ideas in condensed form",
    "It quotes the original extensively",
    "It is longer than the original text"
   ],
   "correct": 1,
   "exp": "A summary condenses the source to its main ideas without adding new content."
  },
  {
   "q": "When writing a summary, how should you treat minor details and examples?",
   "opts": [
    "Include every one of them",
    "Expand on them at length",
    "Generally omit them and focus on main points",
    "Replace them with your opinions"
   ],
   "correct": 2,
   "exp": "Summaries focus on main points and leave out minor details and examples."
  },
  {
   "q": "Which practice keeps a summary faithful to the original source?",
   "opts": [
    "Changing the author's meaning to fit your view",
    "Copying whole sentences verbatim",
    "Adding facts not in the source",
    "Accurately representing the author's ideas in your own words"
   ],
   "correct": 3,
   "exp": "A faithful summary conveys the author's actual meaning in your own words."
  }
 ],
 "Paraphrasing": [
  {
   "q": "What does paraphrasing require you to do?",
   "opts": [
    "Restate the source's idea in your own words and structure",
    "Copy the passage and add quotation marks",
    "Shorten the text to a single line",
    "Translate the text into another language"
   ],
   "correct": 0,
   "exp": "Paraphrasing means expressing the source's idea in your own words and sentence structure."
  },
  {
   "q": "Even when you paraphrase correctly, what must you still do?",
   "opts": [
    "Use quotation marks around the whole passage",
    "Cite the original source",
    "Change the meaning of the idea",
    "Avoid mentioning the author"
   ],
   "correct": 1,
   "exp": "A paraphrase still uses someone else's idea, so it must be cited."
  },
  {
   "q": "Which is an example of poor paraphrasing that risks plagiarism?",
   "opts": [
    "Fully rewording and restructuring the idea",
    "Explaining the concept from memory in new words",
    "Swapping a few words while keeping the original sentence structure",
    "Combining ideas from several sources in your own phrasing"
   ],
   "correct": 2,
   "exp": "Changing only a few words while keeping the original structure is too close to the source."
  }
 ],
 "Referencing & Citations": [
  {
   "q": "What is the main purpose of citing sources in academic writing?",
   "opts": [
    "To make the paper look longer",
    "To fill space in the bibliography",
    "To avoid writing a conclusion",
    "To credit original authors and let readers locate sources"
   ],
   "correct": 3,
   "exp": "Citations credit the original authors and allow readers to trace the sources."
  },
  {
   "q": "Which of these is a widely used citation style in academic writing?",
   "opts": [
    "APA",
    "HTML",
    "JPEG",
    "PDF"
   ],
   "correct": 0,
   "exp": "APA is a recognized academic citation style, unlike file or markup formats."
  },
  {
   "q": "What is the difference between an in-text citation and a reference list entry?",
   "opts": [
    "They are identical in every way",
    "In-text citations are brief pointers; reference entries give full source details",
    "Reference entries are shorter than in-text citations",
    "In-text citations appear only on the title page"
   ],
   "correct": 1,
   "exp": "In-text citations are brief markers, while the reference list gives complete source details."
  }
 ],
 "Avoiding Plagiarism": [
  {
   "q": "Which action best helps you avoid plagiarism?",
   "opts": [
    "Using only one source for the whole paper",
    "Removing all quotations from your work",
    "Citing every source of ideas, words, and data you use",
    "Writing without any references"
   ],
   "correct": 2,
   "exp": "Properly citing all borrowed ideas, words, and data prevents plagiarism."
  },
  {
   "q": "When you use an author's exact words, what must you do?",
   "opts": [
    "Change one word so it counts as yours",
    "Leave them uncited if they are short",
    "Paraphrase them without any citation",
    "Put them in quotation marks and cite the source"
   ],
   "correct": 3,
   "exp": "Exact wording requires quotation marks and a citation to avoid plagiarism."
  },
  {
   "q": "Why is self-plagiarism a concern in academic work?",
   "opts": [
    "Reusing your own previous work without disclosure can be dishonest",
    "It never counts as plagiarism",
    "It only applies to images",
    "It is encouraged to save time"
   ],
   "correct": 0,
   "exp": "Submitting your own prior work as new without disclosure is a form of academic dishonesty."
  }
 ],
 "Business Emails": [
  {
   "q": "What makes a subject line effective in a business email?",
   "opts": [
    "It is left blank to save time",
    "It is clear, specific, and reflects the email's purpose",
    "It uses all capital letters",
    "It repeats the entire message"
   ],
   "correct": 1,
   "exp": "A clear, specific subject line tells the reader the email's purpose at a glance."
  },
  {
   "q": "Which tone is most appropriate for a professional business email to a client?",
   "opts": [
    "Casual slang and emojis",
    "Aggressive and demanding",
    "Polite, clear, and professional",
    "Vague and overly informal"
   ],
   "correct": 2,
   "exp": "Business emails should maintain a polite, clear, and professional tone."
  },
  {
   "q": "What is the best practice for closing a formal business email?",
   "opts": [
    "End abruptly with no sign-off",
    "Include only a smiley face",
    "Sign off with a nickname only",
    "Use a professional closing and your name"
   ],
   "correct": 3,
   "exp": "A professional closing followed by your name gives the email a courteous, complete ending."
  }
 ],
 "Letters": [
  {
   "q": "Which element is typically found in a formal business letter but not a casual note?",
   "opts": [
    "A sender's and recipient's address block",
    "A doodle in the margin",
    "Text-message abbreviations",
    "A random subject with no greeting"
   ],
   "correct": 0,
   "exp": "Formal letters include structured address blocks for sender and recipient."
  },
  {
   "q": "When you do not know the recipient's name, which salutation is most appropriate in a formal letter?",
   "opts": [
    "Hey there",
    "Dear Sir or Madam",
    "To whoever",
    "Yo"
   ],
   "correct": 1,
   "exp": "'Dear Sir or Madam' is the conventional formal salutation when the name is unknown."
  },
  {
   "q": "Which complimentary close matches a formal letter that begins with 'Dear Mr. Smith'?",
   "opts": [
    "Later",
    "Cheers mate",
    "Yours sincerely",
    "See ya"
   ],
   "correct": 2,
   "exp": "'Yours sincerely' is the correct formal close when the recipient's name is used."
  }
 ],
 "Memorandums": [
  {
   "q": "Who is the typical audience for a memorandum (memo)?",
   "opts": [
    "External customers of a company",
    "Government tax offices only",
    "The general public",
    "People within the same organization"
   ],
   "correct": 3,
   "exp": "Memos are internal documents circulated to people within the same organization."
  },
  {
   "q": "Which set of headings is standard at the top of a memo?",
   "opts": [
    "To, From, Date, Subject",
    "Dear, Sincerely, Address",
    "Bibliography, Index, Glossary",
    "Abstract, Method, Results"
   ],
   "correct": 0,
   "exp": "Memos begin with the standard To, From, Date, and Subject header lines."
  },
  {
   "q": "What is the main purpose of a memo?",
   "opts": [
    "To apply for an external job",
    "To communicate information or decisions internally",
    "To publish research findings",
    "To advertise to new customers"
   ],
   "correct": 1,
   "exp": "A memo communicates internal information, decisions, or instructions concisely."
  }
 ],
 "Meeting Minutes": [
  {
   "q": "What are meeting minutes?",
   "opts": [
    "A timed agenda for future meetings only",
    "A list of attendees' phone numbers",
    "An official written record of what was discussed and decided",
    "A transcript of every word spoken"
   ],
   "correct": 2,
   "exp": "Minutes are the official record of the discussions, decisions, and actions of a meeting."
  },
  {
   "q": "Which item is essential to record in meeting minutes?",
   "opts": [
    "The weather during the meeting",
    "Personal opinions about coworkers",
    "The color of the meeting room",
    "Action items and who is responsible for them"
   ],
   "correct": 3,
   "exp": "Recording action items and responsible persons ensures follow-up after the meeting."
  },
  {
   "q": "Which style is most appropriate for writing meeting minutes?",
   "opts": [
    "Concise, factual, and objective",
    "Emotional and opinionated",
    "Long and full of personal stories",
    "Written as poetry"
   ],
   "correct": 0,
   "exp": "Minutes should be concise, factual, and objective to serve as a reliable record."
  }
 ],
 "Proposals": [
  {
   "q": "What is the primary aim of a proposal?",
   "opts": [
    "To record past meeting decisions",
    "To persuade a reader to approve an idea, project, or solution",
    "To summarize a completed report",
    "To list personal grievances"
   ],
   "correct": 1,
   "exp": "A proposal seeks to persuade the reader to accept a proposed plan or solution."
  },
  {
   "q": "Which element strengthens a business proposal?",
   "opts": [
    "Vague costs and no timeline",
    "Only decorative images",
    "A clear problem statement, solution, and expected benefits",
    "No mention of the reader's needs"
   ],
   "correct": 2,
   "exp": "A strong proposal clearly defines the problem, the solution, and its benefits."
  },
  {
   "q": "Why should a proposal address the reader's needs and objections?",
   "opts": [
    "To make it longer",
    "To hide the budget",
    "To avoid stating any solution",
    "To increase the chance the proposal is accepted"
   ],
   "correct": 3,
   "exp": "Addressing the reader's needs and concerns makes the proposal more persuasive and likely to be approved."
  }
 ],
 "Resume (CV) Writing": [
  {
   "q": "What is the main purpose of a resume (CV)?",
   "opts": [
    "To summarize your qualifications and experience for a job",
    "To tell your life story in full",
    "To list your hobbies only",
    "To replace a cover letter"
   ],
   "correct": 0,
   "exp": "A resume concisely summarizes your relevant qualifications and experience for employers."
  },
  {
   "q": "Which practice makes a resume more effective?",
   "opts": [
    "Writing in long, unbroken paragraphs",
    "Using strong action verbs and measurable achievements",
    "Including irrelevant personal details",
    "Leaving out any dates"
   ],
   "correct": 1,
   "exp": "Action verbs and quantifiable achievements make accomplishments clear and impressive."
  },
  {
   "q": "Why should you tailor your resume to each job application?",
   "opts": [
    "To make it identical for every job",
    "To increase its length",
    "To highlight the skills and experience most relevant to that role",
    "To hide your work history"
   ],
   "correct": 2,
   "exp": "Tailoring emphasizes the qualifications most relevant to the specific job."
  }
 ],
 "Cover Letters": [
  {
   "q": "What is the main function of a cover letter?",
   "opts": [
    "To replace the job application form",
    "To repeat the resume word for word",
    "To list references only",
    "To introduce yourself and explain why you fit the role"
   ],
   "correct": 3,
   "exp": "A cover letter introduces the applicant and explains their fit for the specific role."
  },
  {
   "q": "How should a cover letter relate to the resume?",
   "opts": [
    "It should complement the resume by highlighting key strengths",
    "It should duplicate the resume exactly",
    "It should contradict the resume",
    "It should be identical in format"
   ],
   "correct": 0,
   "exp": "A cover letter complements the resume by expanding on key strengths, not repeating everything."
  },
  {
   "q": "Which is the best way to open a strong cover letter?",
   "opts": [
    "With a generic 'To whom it may concern' and no purpose",
    "By naming the position and showing genuine interest and fit",
    "By listing your salary demands first",
    "By apologizing for applying"
   ],
   "correct": 1,
   "exp": "Naming the position and showing genuine interest immediately engages the employer."
  }
 ],
 "LinkedIn Profile Writing": [
  {
   "q": "What is the purpose of the LinkedIn headline?",
   "opts": [
    "To list your home address",
    "To share your phone number",
    "To summarize your professional identity in a brief phrase",
    "To repeat your entire resume"
   ],
   "correct": 2,
   "exp": "The headline briefly conveys your professional identity and value to viewers."
  },
  {
   "q": "Which practice improves a LinkedIn 'About' (summary) section?",
   "opts": [
    "Using only random hashtags",
    "Leaving it completely blank",
    "Copying legal disclaimers",
    "Writing in an engaging first-person voice about your strengths and goals"
   ],
   "correct": 3,
   "exp": "A first-person summary of strengths and goals engages readers and shows your professional story."
  },
  {
   "q": "Why is a professional profile photo recommended on LinkedIn?",
   "opts": [
    "It builds trust and makes your profile more approachable",
    "It replaces the need for experience",
    "It hides your identity",
    "It is required to send messages"
   ],
   "correct": 0,
   "exp": "A professional photo builds trust and makes the profile more credible and approachable."
  }
 ],
 "Creating Presentation Slides": [
  {
   "q": "What is the best practice for the amount of text on a single presentation slide?",
   "opts": [
    "Fill the slide with full paragraphs so nothing is forgotten",
    "Use a few short bullet points or key phrases",
    "Write the entire speech word for word",
    "Include as many statistics as will fit"
   ],
   "correct": 1,
   "exp": "Slides should support the speaker with concise key points, not replace the spoken words with dense text."
  },
  {
   "q": "Why is consistency in fonts and colors important across your slides?",
   "opts": [
    "It makes the file size smaller",
    "It lets you avoid using images",
    "It creates a professional, unified look that is easy to follow",
    "It guarantees the audience will agree with you"
   ],
   "correct": 2,
   "exp": "Consistent design keeps the presentation looking professional and helps the audience focus on the content rather than distracting changes."
  },
  {
   "q": "Which choice would most improve the readability of a slide for a large room?",
   "opts": [
    "A decorative script font in pale grey",
    "Tiny text so more fits per slide",
    "Red text on a dark blue background",
    "A large, high-contrast font"
   ],
   "correct": 3,
   "exp": "Large, high-contrast text can be read easily even by people sitting far from the screen."
  }
 ],
 "Speaking with Confidence": [
  {
   "q": "Which technique best helps a speaker manage nervousness before presenting?",
   "opts": [
    "Preparing well and taking slow, deep breaths",
    "Avoiding all eye contact with the audience",
    "Apologizing repeatedly for being nervous",
    "Speaking as fast as possible to finish quickly"
   ],
   "correct": 0,
   "exp": "Thorough preparation and controlled breathing calm the body and build confidence before speaking."
  },
  {
   "q": "How does a confident speaker typically use their voice?",
   "opts": [
    "They mumble so mistakes go unnoticed",
    "They speak clearly at a steady, measured pace",
    "They keep a flat monotone throughout",
    "They rush through every sentence"
   ],
   "correct": 1,
   "exp": "Clear speech at a steady pace projects confidence and helps the audience understand the message."
  },
  {
   "q": "What is a healthy way to think about mistakes made during a presentation?",
   "opts": [
    "Stop the presentation entirely and start over",
    "Draw loud attention to every slip",
    "Stay composed, correct it briefly, and continue",
    "Blame the audience for the distraction"
   ],
   "correct": 2,
   "exp": "Recovering calmly from small mistakes keeps the audience focused and preserves the speaker's credibility."
  }
 ],
 "Body Language": [
  {
   "q": "What does maintaining eye contact with the audience communicate?",
   "opts": [
    "Boredom and impatience",
    "That the speaker is unprepared",
    "A wish to end quickly",
    "Confidence and connection with listeners"
   ],
   "correct": 3,
   "exp": "Eye contact signals confidence and helps build a genuine connection with the audience."
  },
  {
   "q": "Which posture best conveys confidence during a presentation?",
   "opts": [
    "Standing upright with shoulders relaxed",
    "Crossing arms tightly across the chest",
    "Staring down at your shoes",
    "Slouching against the wall"
   ],
   "correct": 0,
   "exp": "An upright, open posture communicates confidence and openness to the audience."
  },
  {
   "q": "How should hand gestures be used effectively while speaking?",
   "opts": [
    "Keep hands hidden in pockets the whole time",
    "Use natural gestures to emphasize key points",
    "Wave constantly and randomly",
    "Grip the podium and never move"
   ],
   "correct": 1,
   "exp": "Purposeful, natural gestures reinforce important points without distracting the audience."
  }
 ],
 "Audience Engagement": [
  {
   "q": "Which strategy is most effective for keeping an audience engaged?",
   "opts": [
    "Reading directly from your notes without pausing",
    "Turning off the lights and speaking quietly",
    "Asking questions and inviting participation",
    "Using only technical jargon"
   ],
   "correct": 2,
   "exp": "Questions and participation invite the audience to think and stay actively involved."
  },
  {
   "q": "Why is telling a relevant story or example useful during a presentation?",
   "opts": [
    "It fills time when you have nothing to say",
    "It proves you memorized the material",
    "It replaces the need for a main point",
    "It makes ideas relatable and memorable"
   ],
   "correct": 3,
   "exp": "Stories and examples make abstract ideas concrete, relatable, and easier to remember."
  },
  {
   "q": "What should a presenter do when the audience appears confused or distracted?",
   "opts": [
    "Pause, check understanding, and rephrase the point",
    "Speak louder without changing anything",
    "End the presentation immediately",
    "Ignore them and keep reading the slides"
   ],
   "correct": 0,
   "exp": "Pausing to check understanding and rephrasing helps re-engage a confused audience."
  }
 ],
 "Handling Questions": [
  {
   "q": "What is the best response when you do not know the answer to an audience question?",
   "opts": [
    "Make up an answer to sound confident",
    "Admit it honestly and offer to follow up later",
    "Ignore the question completely",
    "Tell the person the question is not important"
   ],
   "correct": 1,
   "exp": "Honestly admitting you do not know and promising to follow up protects your credibility."
  },
  {
   "q": "Why is it helpful to repeat or paraphrase a question before answering it?",
   "opts": [
    "To waste time and delay answering",
    "To avoid actually answering",
    "To make sure everyone heard it and you understood it",
    "To confuse the person asking"
   ],
   "correct": 2,
   "exp": "Repeating the question ensures the whole audience hears it and confirms you understood correctly."
  },
  {
   "q": "How should a presenter handle a hostile or challenging question?",
   "opts": [
    "Argue back aggressively",
    "Refuse to respond at all",
    "Insult the questioner in return",
    "Stay calm, respectful, and address the concern"
   ],
   "correct": 3,
   "exp": "Remaining calm and respectful defuses tension and keeps the presenter professional."
  }
 ],
 "Presentation Practice": [
  {
   "q": "Why is rehearsing a presentation out loud beneficial?",
   "opts": [
    "It helps with timing, flow, and reducing nerves",
    "It removes the need for slides",
    "It lets you memorize every word exactly",
    "It guarantees no one will ask questions"
   ],
   "correct": 0,
   "exp": "Practicing aloud improves timing and delivery flow while lowering anxiety on the actual day."
  },
  {
   "q": "What is a useful way to get feedback while practicing a presentation?",
   "opts": [
    "Present only in complete secrecy",
    "Record yourself or ask a friend to listen",
    "Skip practice and rely on luck",
    "Read silently in your head once"
   ],
   "correct": 1,
   "exp": "Recording yourself or getting a listener's feedback reveals areas to improve before the real event."
  },
  {
   "q": "How does timing your practice runs help your final presentation?",
   "opts": [
    "It makes the slides load faster",
    "It removes the need to prepare content",
    "It ensures you finish within the allotted time",
    "It guarantees applause"
   ],
   "correct": 2,
   "exp": "Timing rehearsals helps you stay within limits and avoid rushing or running over."
  }
 ],
 "Office Communication": [
  {
   "q": "When sending a professional email, what makes the subject line effective?",
   "opts": [
    "Leaving it blank to save time",
    "Writing it in all capital letters",
    "Using only emojis",
    "Making it clear and specific about the message"
   ],
   "correct": 3,
   "exp": "A clear, specific subject line tells the recipient what the email is about and helps them prioritize it."
  },
  {
   "q": "Which channel is usually most appropriate for a quick, informal question to a nearby colleague?",
   "opts": [
    "A brief instant message or quick chat",
    "A company-wide email",
    "A scheduled formal meeting",
    "A formal printed memo"
   ],
   "correct": 0,
   "exp": "A quick chat or instant message suits simple, informal questions without overloading formal channels."
  },
  {
   "q": "Why is it important to proofread a work message before sending it?",
   "opts": [
    "To make the message longer",
    "To catch errors and ensure a professional impression",
    "To hide the main point",
    "To avoid using the subject line"
   ],
   "correct": 1,
   "exp": "Proofreading catches mistakes and keeps your communication clear and professional."
  }
 ],
 "Professional Etiquette": [
  {
   "q": "What is proper etiquette when you arrive late to a scheduled meeting?",
   "opts": [
    "Loudly explain your excuse to everyone",
    "Interrupt the speaker to be updated",
    "Enter quietly, apologize briefly, and catch up later",
    "Skip the meeting entirely without notice"
   ],
   "correct": 2,
   "exp": "Entering quietly and apologizing briefly minimizes disruption and respects others' time."
  },
  {
   "q": "Which behavior best reflects professional etiquette during a video call?",
   "opts": [
    "Eating a full meal on camera",
    "Talking over others frequently",
    "Leaving without saying anything",
    "Muting when not speaking to reduce background noise"
   ],
   "correct": 3,
   "exp": "Muting when not speaking reduces distractions and shows consideration for other participants."
  },
  {
   "q": "How should you address a senior colleague you are meeting for the first time in a formal setting?",
   "opts": [
    "Politely and respectfully, using their proper title or name",
    "By shouting across the room",
    "Without any greeting at all",
    "By a nickname you invent"
   ],
   "correct": 0,
   "exp": "Using a respectful, proper form of address makes a good first impression in professional settings."
  }
 ],
 "Team Collaboration": [
  {
   "q": "What is a key ingredient of successful team collaboration?",
   "opts": [
    "Each member working in complete isolation",
    "Open communication and sharing information",
    "Keeping ideas secret from teammates",
    "Competing to make others look bad"
   ],
   "correct": 1,
   "exp": "Open communication and information sharing let a team coordinate and achieve shared goals."
  },
  {
   "q": "When a teammate is struggling with their part of a project, what is the most collaborative response?",
   "opts": [
    "Report them and take over silently",
    "Ignore it since it is not your task",
    "Offer support or share the workload",
    "Complain to the whole team about them"
   ],
   "correct": 2,
   "exp": "Offering help and sharing the workload strengthens the team and keeps the project on track."
  },
  {
   "q": "Why is it important to clarify each member's role in a team project?",
   "opts": [
    "To make sure only one person does everything",
    "To create competition between members",
    "To slow the project down",
    "To avoid duplication and confusion about responsibilities"
   ],
   "correct": 3,
   "exp": "Clear roles prevent overlap and confusion so everyone knows what they are responsible for."
  }
 ],
 "Giving & Receiving Feedback": [
  {
   "q": "Which approach makes constructive feedback most effective?",
   "opts": [
    "Being specific about behavior and offering suggestions",
    "Giving vague praise only",
    "Sharing it publicly to embarrass them",
    "Focusing on the person's character flaws"
   ],
   "correct": 0,
   "exp": "Specific feedback about behavior with suggestions helps the person understand exactly what to improve."
  },
  {
   "q": "What is the best way to receive critical feedback about your work?",
   "opts": [
    "Argue against every point immediately",
    "Listen openly and consider how to improve",
    "Take it as a personal attack and shut down",
    "Ignore it completely"
   ],
   "correct": 1,
   "exp": "Listening openly and reflecting on the feedback turns criticism into an opportunity to grow."
  },
  {
   "q": "Why should positive feedback also be given, not just corrections?",
   "opts": [
    "It has no real value",
    "It replaces the need for any improvement",
    "It reinforces good behavior and boosts motivation",
    "It hides problems permanently"
   ],
   "correct": 2,
   "exp": "Recognizing what someone does well reinforces good work and keeps them motivated."
  }
 ],
 "Negotiation Skills": [
  {
   "q": "What is the goal of a good win-win negotiation?",
   "opts": [
    "One side takes everything and the other loses",
    "The negotiation ends without any agreement",
    "The louder person always prevails",
    "Both parties reach an outcome they can accept"
   ],
   "correct": 3,
   "exp": "A win-win negotiation seeks a mutually acceptable outcome that benefits both parties."
  },
  {
   "q": "Why is listening carefully to the other party important during a negotiation?",
   "opts": [
    "It helps you understand their needs and find common ground",
    "It shows you are weak",
    "It lets them control everything",
    "It wastes valuable time"
   ],
   "correct": 0,
   "exp": "Understanding the other side's needs helps you find solutions that work for both parties."
  },
  {
   "q": "What is a smart way to prepare before entering a negotiation?",
   "opts": [
    "Decide to accept nothing at all",
    "Know your goals and what you are willing to compromise on",
    "Refuse to plan and improvise everything",
    "Assume the other side has no needs"
   ],
   "correct": 1,
   "exp": "Knowing your goals and acceptable compromises lets you negotiate clearly and flexibly."
  }
 ],
 "Conflict Resolution": [
  {
   "q": "What is the most professional first step when a conflict arises with a coworker?",
   "opts": [
    "Spread the story to other coworkers",
    "Ignore it and let resentment build",
    "Calmly discuss the issue directly with the person",
    "Send an angry message immediately"
   ],
   "correct": 2,
   "exp": "Addressing the issue calmly and directly is the most professional way to begin resolving conflict."
  },
  {
   "q": "Why is focusing on the problem rather than the person helpful in resolving conflict?",
   "opts": [
    "It makes the argument more personal",
    "It guarantees you win the argument",
    "It avoids solving anything",
    "It keeps the discussion respectful and solution-focused"
   ],
   "correct": 3,
   "exp": "Focusing on the problem keeps the conversation respectful and centered on finding a solution."
  },
  {
   "q": "What role can compromise play in resolving a workplace conflict?",
   "opts": [
    "It allows both sides to reach an acceptable middle ground",
    "It makes the conflict worse",
    "It is a sign of failure",
    "It means one side must always give up everything"
   ],
   "correct": 0,
   "exp": "Compromise lets both parties adjust their positions to reach a workable, acceptable solution."
  }
 ],
 "Leadership Communication": [
  {
   "q": "What is a key trait of effective leadership communication?",
   "opts": [
    "Giving vague instructions to keep the team guessing",
    "Communicating a clear vision and expectations transparently",
    "Speaking only through written memos, never in person",
    "Withholding information to maintain control"
   ],
   "correct": 1,
   "exp": "Effective leaders communicate a clear vision and expectations transparently so their team understands direction and priorities."
  },
  {
   "q": "How does active listening support strong leadership communication?",
   "opts": [
    "It lets the leader plan a rebuttal while others talk",
    "It signals that the leader does not value speed",
    "It helps the leader understand concerns and build trust",
    "It replaces the need to ever give feedback"
   ],
   "correct": 2,
   "exp": "Active listening helps leaders genuinely understand team members' concerns, which builds trust and informs better decisions."
  },
  {
   "q": "When delivering difficult feedback, which leadership approach is most constructive?",
   "opts": [
    "Criticizing the person publicly to set an example",
    "Blaming the whole team for one person's mistake",
    "Avoiding the issue and hoping it improves",
    "Being specific, respectful, and focused on behavior and solutions"
   ],
   "correct": 3,
   "exp": "Constructive feedback is specific and respectful, focusing on behavior and solutions rather than personal attacks."
  }
 ],
 "Workplace Scenarios": [
  {
   "q": "A colleague takes credit for your idea in a meeting. What is the most professional response?",
   "opts": [
    "Calmly and politely clarify your contribution",
    "Say nothing and resent them silently",
    "Quit the project immediately",
    "Shout at them in front of everyone"
   ],
   "correct": 0,
   "exp": "Calmly clarifying your contribution asserts your work without creating unnecessary conflict."
  },
  {
   "q": "You realize you cannot meet a project deadline. What should you do?",
   "opts": [
    "Hide it and hope no one notices",
    "Inform your manager early and propose a solution",
    "Blame a coworker for the delay",
    "Submit incomplete work without warning"
   ],
   "correct": 1,
   "exp": "Communicating early and proposing a solution is the responsible, professional way to handle a missed deadline."
  },
  {
   "q": "A customer sends an angry email about a problem. What is the best professional approach?",
   "opts": [
    "Reply with equal anger",
    "Delete the email and ignore it",
    "Respond calmly, acknowledge the issue, and offer help",
    "Forward it around the office for laughs"
   ],
   "correct": 2,
   "exp": "Responding calmly and acknowledging the issue helps resolve the problem and maintain professionalism."
  }
 ],
 "Academic Research": [
  {
   "q": "What is the main purpose of a research question in academic research?",
   "opts": [
    "To repeat what the title already says",
    "To fill space in the introduction",
    "To make the paper look longer",
    "To focus the investigation and guide what evidence is collected"
   ],
   "correct": 3,
   "exp": "A clear research question sets the scope and directs the whole inquiry toward relevant evidence."
  },
  {
   "q": "Why should a researcher record where each piece of information came from?",
   "opts": [
    "To give proper credit and let others verify the sources",
    "To make the bibliography colorful",
    "To hide who wrote the ideas",
    "To avoid having to read the sources"
   ],
   "correct": 0,
   "exp": "Recording sources allows correct citation and lets readers check the evidence for themselves."
  },
  {
   "q": "Which step usually comes first in a sound research process?",
   "opts": [
    "Writing the conclusion",
    "Defining the topic and question",
    "Printing the final copy",
    "Choosing the font"
   ],
   "correct": 1,
   "exp": "Defining the topic and question comes first because it shapes every later step of the research."
  }
 ],
 "Evaluating Sources": [
  {
   "q": "Which feature makes a source more likely to be reliable?",
   "opts": [
    "It has a flashy homepage",
    "It appears first in a search",
    "A named, qualified author and cited evidence",
    "It uses many capital letters"
   ],
   "correct": 2,
   "exp": "Identified expert authors who cite evidence signal accountability and credibility."
  },
  {
   "q": "You find a website with no author, no date, and strong emotional language. What is the best action?",
   "opts": [
    "Trust it because it feels convincing",
    "Share it immediately as fact",
    "Copy it directly into your paper",
    "Treat it cautiously and look for supporting reliable sources"
   ],
   "correct": 3,
   "exp": "Missing author and date plus emotional wording are warning signs, so verify against trustworthy sources."
  },
  {
   "q": "What does checking a source for bias mean?",
   "opts": [
    "Seeing whether it leans toward one side or interest",
    "Counting how many pages it has",
    "Measuring the file size",
    "Checking the background color"
   ],
   "correct": 0,
   "exp": "Bias refers to a slant favoring a particular viewpoint, which can distort the information."
  }
 ],
 "Fact vs. Opinion": [
  {
   "q": "Which statement is a fact rather than an opinion?",
   "opts": [
    "Summer is the best season of the year",
    "Liberia is located in West Africa",
    "Everyone should study science",
    "This book is boring to read"
   ],
   "correct": 1,
   "exp": "Liberia's location can be verified with evidence, so it is a fact, not a personal judgment."
  },
  {
   "q": "What is the clearest sign that a statement is an opinion?",
   "opts": [
    "It can be checked in a reference book",
    "It gives a measurable number",
    "It expresses a personal judgment or preference",
    "It reports a historical date"
   ],
   "correct": 2,
   "exp": "Opinions express personal beliefs or preferences that cannot be proven true or false."
  },
  {
   "q": "Why is telling fact from opinion important in research?",
   "opts": [
    "It makes writing longer",
    "It removes the need for sources",
    "It changes the page numbers",
    "It helps you judge which claims need evidence"
   ],
   "correct": 3,
   "exp": "Separating facts from opinions shows which statements must be backed by evidence."
  }
 ],
 "Critical Reading": [
  {
   "q": "What does a critical reader do while reading a text?",
   "opts": [
    "Questions the author's evidence and reasoning",
    "Accepts every claim without thinking",
    "Only looks at the pictures",
    "Reads as fast as possible without pausing"
   ],
   "correct": 0,
   "exp": "Critical reading means actively questioning the claims, evidence, and logic of a text."
  },
  {
   "q": "Identifying an author's purpose helps a reader to do what?",
   "opts": [
    "Ignore the main idea",
    "Understand why the text was written and spot persuasion",
    "Skip the conclusion",
    "Memorize every word"
   ],
   "correct": 1,
   "exp": "Knowing the purpose reveals the author's intent and any attempt to persuade the reader."
  },
  {
   "q": "Which question best reflects critical reading of an article?",
   "opts": [
    "How long is the article?",
    "What color is the heading?",
    "What evidence supports this claim, and is it convincing?",
    "Who published it last year?"
   ],
   "correct": 2,
   "exp": "Weighing whether the evidence truly supports a claim is at the heart of critical reading."
  }
 ],
 "Critical Writing": [
  {
   "q": "What sets critical writing apart from simply describing a topic?",
   "opts": [
    "It lists facts with no judgment",
    "It only summarizes other people's work",
    "It avoids using any sources",
    "It analyzes evidence and argues a reasoned position"
   ],
   "correct": 3,
   "exp": "Critical writing evaluates evidence and builds a supported argument rather than just describing."
  },
  {
   "q": "In critical writing, why include counterarguments?",
   "opts": [
    "To show you considered other views and strengthen your case",
    "To confuse the reader",
    "To make the essay shorter",
    "To avoid stating any position"
   ],
   "correct": 0,
   "exp": "Addressing opposing views shows balanced thinking and makes your own argument more convincing."
  },
  {
   "q": "What is the best way to support a claim in critical writing?",
   "opts": [
    "Repeat the claim in different words",
    "Provide relevant evidence and clear reasoning",
    "State it more loudly with capital letters",
    "Assume readers already agree"
   ],
   "correct": 1,
   "exp": "Claims become persuasive when backed by relevant evidence and logical reasoning."
  }
 ],
 "Problem Solving": [
  {
   "q": "What is usually the first step in solving a problem effectively?",
   "opts": [
    "Guessing an answer at random",
    "Announcing the solution before thinking",
    "Clearly defining what the problem actually is",
    "Blaming someone else"
   ],
   "correct": 2,
   "exp": "You cannot solve a problem well until you clearly understand and define it."
  },
  {
   "q": "Why is it useful to brainstorm several possible solutions?",
   "opts": [
    "It wastes time on purpose",
    "It guarantees the first idea is used",
    "It avoids making any decision",
    "It lets you compare options and choose the best one"
   ],
   "correct": 3,
   "exp": "Generating multiple options lets you weigh trade-offs and select the strongest solution."
  },
  {
   "q": "After trying a solution, what should a good problem solver do?",
   "opts": [
    "Evaluate the results and adjust if needed",
    "Never think about it again",
    "Assume it worked without checking",
    "Hide any mistakes"
   ],
   "correct": 0,
   "exp": "Reviewing outcomes shows whether the solution worked and what to improve next time."
  }
 ],
 "Analytical Thinking": [
  {
   "q": "What does analytical thinking mainly involve?",
   "opts": [
    "Accepting ideas without question",
    "Breaking information into parts to understand relationships",
    "Memorizing facts word for word",
    "Avoiding difficult questions"
   ],
   "correct": 1,
   "exp": "Analytical thinking breaks a whole into parts to examine how they connect and why."
  },
  {
   "q": "Which activity best shows analytical thinking?",
   "opts": [
    "Copying a chart without reading it",
    "Choosing based only on feelings",
    "Comparing data to find a pattern or cause",
    "Repeating what a friend said"
   ],
   "correct": 2,
   "exp": "Spotting patterns and causes in data is a core act of analytical thinking."
  },
  {
   "q": "Why does analytical thinking require evidence?",
   "opts": [
    "Evidence makes conclusions look longer",
    "It replaces the need to think",
    "It hides weak reasoning",
    "Conclusions should be based on facts, not guesses"
   ],
   "correct": 3,
   "exp": "Analytical conclusions must rest on evidence rather than assumptions or guesses."
  }
 ],
 "Online Research": [
  {
   "q": "Which search strategy helps you find more relevant results online?",
   "opts": [
    "Using specific keywords and quotation marks for exact phrases",
    "Clicking only advertisements",
    "Always choosing the last result",
    "Typing one very general word"
   ],
   "correct": 0,
   "exp": "Specific keywords and quoted phrases narrow results to what you actually need."
  },
  {
   "q": "Why should you check the web address (domain) of an online source?",
   "opts": [
    "The domain never matters",
    "It can hint at the source type, such as .edu or .gov",
    "Longer domains are always false",
    "It tells you the file size"
   ],
   "correct": 1,
   "exp": "Domains like .edu or .gov can signal educational or official origins worth considering."
  },
  {
   "q": "You find the same claim on several independent, trustworthy sites. This is an example of what good research habit?",
   "opts": [
    "Copying without reading",
    "Ignoring all evidence",
    "Cross-checking information across sources",
    "Trusting a single random blog"
   ],
   "correct": 2,
   "exp": "Confirming a claim across independent reliable sources is called cross-checking or verification."
  }
 ],
 "Microsoft Word": [
  {
   "q": "Which Microsoft Word feature automatically creates a table of contents from your headings?",
   "opts": [
    "Adding page borders",
    "Typing each page number by hand",
    "Changing the font color",
    "Using built-in heading styles with the References tab"
   ],
   "correct": 3,
   "exp": "Applying heading styles lets Word build and update a table of contents automatically."
  },
  {
   "q": "What is the best reason to use the spell-check and review tools in Word?",
   "opts": [
    "To catch typing and spelling errors before sharing",
    "To make the document print slower",
    "To delete your work",
    "To change the language of the buttons"
   ],
   "correct": 0,
   "exp": "Spell-check and review tools help you find and fix errors before others read the document."
  },
  {
   "q": "Which action lets you keep an original file while saving a new version?",
   "opts": [
    "Delete the file",
    "Use Save As with a new name",
    "Print the document",
    "Close without saving"
   ],
   "correct": 1,
   "exp": "Save As stores a separate copy under a new name, preserving the original file."
  }
 ],
 "Google Docs": [
  {
   "q": "What is a major advantage of Google Docs for group work?",
   "opts": [
    "Only one person can ever open it",
    "It cannot be shared",
    "Several people can edit the same document at the same time",
    "It works only when printed"
   ],
   "correct": 2,
   "exp": "Google Docs allows real-time collaboration so multiple people can edit together online."
  },
  {
   "q": "How does Google Docs help protect your work from being lost?",
   "opts": [
    "It deletes files after an hour",
    "It never keeps any copy",
    "It emails the file to strangers",
    "It saves changes automatically to the cloud"
   ],
   "correct": 3,
   "exp": "Google Docs auto-saves to the cloud, reducing the risk of losing your work."
  },
  {
   "q": "Which sharing setting lets someone read but not change your document?",
   "opts": [
    "Viewer",
    "Editor",
    "Owner",
    "Deleter"
   ],
   "correct": 0,
   "exp": "The Viewer permission allows reading only, without letting the person edit the file."
  }
 ],
 "Grammarly": [
  {
   "q": "What is the most responsible way to use Grammarly on your writing?",
   "opts": [
    "Accept every suggestion without reading it",
    "Review each suggestion and decide if it fits your meaning",
    "Let it write the whole essay for you",
    "Ignore all feedback entirely"
   ],
   "correct": 1,
   "exp": "Grammarly is a helper; you should review suggestions so the final wording stays yours and correct."
  },
  {
   "q": "Grammarly is mainly designed to help with what?",
   "opts": [
    "Solving math equations",
    "Drawing pictures",
    "Grammar, spelling, and clarity of your text",
    "Recording videos"
   ],
   "correct": 2,
   "exp": "Grammarly focuses on checking grammar, spelling, punctuation, and clarity in writing."
  },
  {
   "q": "Why should you still proofread even after using Grammarly?",
   "opts": [
    "Proofreading changes your grade automatically",
    "Grammarly deletes correct words",
    "It is required to reprint the page",
    "Tools can miss context or suggest wrong fixes"
   ],
   "correct": 3,
   "exp": "Automated checkers do not always understand context, so human proofreading remains important."
  }
 ],
 "ChatGPT for Learning": [
  {
   "q": "What is a responsible way to use ChatGPT while studying?",
   "opts": [
    "Ask it to explain a concept, then check and write in your own words",
    "Submit its answer as your own homework",
    "Use it to cheat on a test",
    "Believe everything it says without checking"
   ],
   "correct": 0,
   "exp": "Using ChatGPT to explain ideas and then verifying and rewriting them supports real learning, not cheating."
  },
  {
   "q": "Why should you verify facts that ChatGPT gives you?",
   "opts": [
    "It is always wrong",
    "It can sometimes produce incorrect or made-up information",
    "Checking is against the rules",
    "It never gives facts at all"
   ],
   "correct": 1,
   "exp": "AI models can generate confident but mistaken information, so facts should be confirmed with reliable sources."
  },
  {
   "q": "Which use of ChatGPT best supports honest learning?",
   "opts": [
    "Copying an essay word for word to submit",
    "Having it take your quiz for you",
    "Getting practice questions to test your own understanding",
    "Pretending its writing is yours"
   ],
   "correct": 2,
   "exp": "Generating practice questions helps you learn and self-check, which is honest and effective study."
  }
 ],
 "AI Writing Tools": [
  {
   "q": "How should AI writing tools be used honestly in schoolwork?",
   "opts": [
    "To replace all your own thinking and writing",
    "To avoid learning the topic",
    "To submit AI text as your own without disclosure",
    "As support for brainstorming or editing while you do the real work"
   ],
   "correct": 3,
   "exp": "AI tools should assist your own effort, such as brainstorming or editing, not replace your learning."
  },
  {
   "q": "What is a real limitation of AI writing tools you should keep in mind?",
   "opts": [
    "They may produce inaccurate or biased content",
    "They always know your exact assignment",
    "They can never make mistakes",
    "They understand your teacher's mind"
   ],
   "correct": 0,
   "exp": "AI tools can generate inaccurate or biased text, so their output needs careful checking."
  },
  {
   "q": "Why is it important to review and edit anything an AI tool writes for you?",
   "opts": [
    "Because editing is never allowed",
    "To ensure it is accurate, original, and truly your own understanding",
    "To make it longer only",
    "So you can avoid reading it"
   ],
   "correct": 1,
   "exp": "Reviewing and editing keeps the work accurate and ensures it reflects your genuine understanding."
  }
 ],
 "Responsible AI Use": [
  {
   "q": "Which behavior shows responsible use of AI for schoolwork?",
   "opts": [
    "Hiding AI use to get undeserved credit",
    "Trusting AI output without any checking",
    "Being open about when and how you used AI",
    "Using AI to complete a test dishonestly"
   ],
   "correct": 2,
   "exp": "Responsible AI use includes honesty about how the tool was used and verifying its output."
  },
  {
   "q": "Why should you protect personal information when using AI tools?",
   "opts": [
    "AI needs your passwords to work",
    "Sharing private data improves grades",
    "Privacy does not matter online",
    "Personal data can be misused or exposed"
   ],
   "correct": 3,
   "exp": "Sharing sensitive personal information can lead to misuse, so it should be protected."
  },
  {
   "q": "What is the best response when an AI gives an answer you are unsure about?",
   "opts": [
    "Check it against reliable sources before using it",
    "Share it as certain fact",
    "Ignore the topic completely",
    "Accept it without question"
   ],
   "correct": 0,
   "exp": "Verifying uncertain AI answers with trustworthy sources is a key part of responsible use."
  }
 ],
 "Digital Collaboration": [
  {
   "q": "What is a key benefit of digital collaboration tools for a team?",
   "opts": [
    "They stop people from communicating",
    "They let members work together from different locations in real time",
    "They allow only one person to contribute",
    "They remove the need for any planning"
   ],
   "correct": 1,
   "exp": "Digital collaboration tools connect team members across locations so they can work together live."
  },
  {
   "q": "Which habit makes online group collaboration more effective?",
   "opts": [
    "Ignoring teammates' messages",
    "Editing others' work without telling them",
    "Communicating clearly and respecting shared deadlines",
    "Keeping all files to yourself"
   ],
   "correct": 2,
   "exp": "Clear communication and respecting deadlines keep a digital team organized and productive."
  },
  {
   "q": "Why is it important to use version history in collaborative documents?",
   "opts": [
    "To delete the whole document",
    "To make the file impossible to open",
    "To hide who made edits",
    "To track changes and restore earlier work if needed"
   ],
   "correct": 3,
   "exp": "Version history records edits and lets the team recover earlier versions when necessary."
  }
 ],
 "Job Search Skills": [
  {
   "q": "Which approach is most likely to uncover unadvertised job openings in the hidden job market?",
   "opts": [
    "Networking with contacts and asking for informational interviews",
    "Waiting for recruiters to find your resume",
    "Submitting the same application to hundreds of companies",
    "Applying only to postings on large job boards"
   ],
   "correct": 0,
   "exp": "Many jobs are never publicly posted, so networking and informational interviews reveal openings before they are advertised."
  },
  {
   "q": "Why is it important to tailor each application to the specific job you are applying for?",
   "opts": [
    "It makes the application longer and more impressive",
    "It shows the employer how your skills match their specific needs",
    "It lets you reuse one generic version to save time",
    "It guarantees you will be hired for the role"
   ],
   "correct": 1,
   "exp": "A tailored application directly connects your qualifications to the employer's stated requirements, making you a stronger candidate."
  },
  {
   "q": "What is the best first step when beginning an organized job search?",
   "opts": [
    "Accept the first offer you receive regardless of fit",
    "Apply randomly to every listing you can find",
    "Clarify your goals and identify the roles and industries you want",
    "Delete your professional profiles to start fresh"
   ],
   "correct": 2,
   "exp": "Defining clear goals and target roles focuses your effort so you apply to positions that actually fit your skills and interests."
  }
 ],
 "Resume Writing": [
  {
   "q": "Which of these is the most effective way to describe a work accomplishment on a resume?",
   "opts": [
    "Responsible for handling customer issues",
    "Managed customer service tasks daily",
    "Did various duties related to customers",
    "Resolved customer complaints, raising satisfaction scores by 20 percent"
   ],
   "correct": 3,
   "exp": "Strong resume bullets use action verbs and quantified results to show measurable impact rather than vague duties."
  },
  {
   "q": "Why should a resume generally be kept concise, often one to two pages?",
   "opts": [
    "Recruiters skim quickly and value clear, relevant information",
    "Longer resumes are illegal in most workplaces",
    "Shorter resumes prove you have no experience",
    "Employers charge a fee for each extra page"
   ],
   "correct": 0,
   "exp": "Recruiters spend only seconds on an initial scan, so a concise resume highlights your most relevant qualifications efficiently."
  },
  {
   "q": "What is the purpose of using keywords from the job description in your resume?",
   "opts": [
    "To fill space so the resume looks fuller",
    "To help pass applicant tracking systems and match employer needs",
    "To make the resume harder to read",
    "To confuse competing applicants"
   ],
   "correct": 1,
   "exp": "Applicant tracking systems and hiring managers look for role-specific keywords, so including them improves your chances of being noticed."
  }
 ],
 "Interview Preparation": [
  {
   "q": "What does the STAR method help you do when answering interview questions?",
   "opts": [
    "Memorize a script to recite word for word",
    "Avoid answering behavioral questions entirely",
    "Structure answers with Situation, Task, Action, and Result",
    "Rate the interviewer's performance"
   ],
   "correct": 2,
   "exp": "STAR gives a clear framework to describe a Situation, Task, Action, and Result, making behavioral answers focused and complete."
  },
  {
   "q": "Why is researching the company before an interview important?",
   "opts": [
    "It lets you criticize the company's weaknesses",
    "It replaces the need to prepare answers",
    "It is only useful for senior executive roles",
    "It shows genuine interest and helps you tailor your responses"
   ],
   "correct": 3,
   "exp": "Researching the company demonstrates real interest and lets you connect your skills to the organization's goals and values."
  },
  {
   "q": "When an interviewer asks if you have any questions, what is the best response?",
   "opts": [
    "Ask thoughtful questions about the role and team",
    "Ask only about salary and vacation days",
    "Say no so the interview ends quickly",
    "Repeat questions the interviewer already answered"
   ],
   "correct": 0,
   "exp": "Thoughtful questions about the role and team show engagement and help you evaluate whether the job is right for you."
  }
 ],
 "Workplace English": [
  {
   "q": "Which sentence is most appropriate for a professional email to a manager?",
   "opts": [
    "Hey, gimme that report ASAP or else",
    "Could you please send me the report by Friday?",
    "Send report now thx",
    "Why havent you finished the report yet"
   ],
   "correct": 1,
   "exp": "A polite, clear request with please and a specific deadline fits the professional tone expected in workplace communication."
  },
  {
   "q": "What does it mean to use professional register in workplace communication?",
   "opts": [
    "Using slang and abbreviations to seem friendly",
    "Speaking as loudly as possible",
    "Adjusting your language to be respectful and appropriately formal",
    "Only using technical jargon others cannot understand"
   ],
   "correct": 2,
   "exp": "Professional register means choosing respectful, appropriately formal language suited to the workplace audience and situation."
  },
  {
   "q": "In a meeting, which phrase best shows you want to add to someone's point politely?",
   "opts": [
    "That is completely wrong",
    "You never understand anything",
    "Stop talking, it is my turn",
    "Building on what you said, I would add that"
   ],
   "correct": 3,
   "exp": "The phrase building on what you said acknowledges the other person before contributing, which keeps the exchange collaborative and respectful."
  }
 ],
 "Networking": [
  {
   "q": "What is the main goal of professional networking?",
   "opts": [
    "To build genuine, mutually beneficial relationships over time",
    "To ask everyone you meet for a job immediately",
    "To promote yourself without listening to others",
    "To collect as many business cards as possible"
   ],
   "correct": 0,
   "exp": "Effective networking focuses on building real, mutually beneficial relationships rather than transactional exchanges."
  },
  {
   "q": "What is an elevator pitch used for in networking?",
   "opts": [
    "A long detailed report of your entire career history",
    "A brief, memorable introduction of who you are and what you do",
    "A speech given only inside elevators",
    "A written contract with a new employer"
   ],
   "correct": 1,
   "exp": "An elevator pitch is a short, compelling self-introduction that concisely communicates who you are and what you offer."
  },
  {
   "q": "After meeting a useful contact at an event, what is a strong follow-up action?",
   "opts": [
    "Never contact them again to avoid seeming needy",
    "Immediately ask them to lend you money",
    "Send a personalized message referencing your conversation",
    "Add them to a mass marketing list without consent"
   ],
   "correct": 2,
   "exp": "A personalized follow-up that references your conversation keeps the connection warm and shows genuine interest."
  }
 ],
 "Personal Branding": [
  {
   "q": "What does personal branding refer to in a professional context?",
   "opts": [
    "The logo a company designs for its products",
    "A legal trademark you must register",
    "The clothing brands you wear to work",
    "The reputation and image you project to others professionally"
   ],
   "correct": 3,
   "exp": "Personal branding is the consistent professional reputation and image you convey through your skills, values, and communication."
  },
  {
   "q": "Why is consistency important across your professional profiles and interactions?",
   "opts": [
    "It makes people trust and recognize your professional identity",
    "It allows you to hide your real skills",
    "It is required by law in every country",
    "It prevents anyone from contacting you"
   ],
   "correct": 0,
   "exp": "Consistent messaging across platforms builds a recognizable and trustworthy professional identity that others can rely on."
  },
  {
   "q": "Which action best strengthens your personal brand online?",
   "opts": [
    "Posting complaints about former employers",
    "Sharing insightful content related to your field of expertise",
    "Leaving your profiles empty and unfinished",
    "Copying someone else's profile word for word"
   ],
   "correct": 1,
   "exp": "Sharing valuable, field-relevant content demonstrates your expertise and reinforces the professional image you want to project."
  }
 ],
 "Career Planning": [
  {
   "q": "What is the purpose of setting SMART goals in career planning?",
   "opts": [
    "To make goals vague so they are easy to reach",
    "To avoid making any commitments",
    "To create specific, measurable, achievable, relevant, time-bound goals",
    "To copy other people's career paths exactly"
   ],
   "correct": 2,
   "exp": "SMART goals are specific, measurable, achievable, relevant, and time-bound, which makes career progress clear and trackable."
  },
  {
   "q": "Why is it useful to identify your long-term career vision before short-term steps?",
   "opts": [
    "It removes the need to develop any skills",
    "Short-term steps should never be planned",
    "A vision guarantees automatic promotions",
    "Long-term vision guides which short-term actions to prioritize"
   ],
   "correct": 3,
   "exp": "A clear long-term vision provides direction so your short-term decisions and skill-building move you toward your ultimate goals."
  },
  {
   "q": "What does a skills gap analysis help a professional determine?",
   "opts": [
    "The difference between current skills and those needed for a goal",
    "Which coworkers to avoid",
    "How much vacation time to request",
    "The exact salary of every colleague"
   ],
   "correct": 0,
   "exp": "A skills gap analysis reveals which abilities you still need to develop to qualify for your target role."
  }
 ],
 "Emotional Intelligence": [
  {
   "q": "Which of the following best defines emotional intelligence?",
   "opts": [
    "The ability to score highly on academic tests",
    "The ability to recognize and manage your own and others' emotions",
    "The ability to work faster than everyone else",
    "The ability to memorize large amounts of data"
   ],
   "correct": 1,
   "exp": "Emotional intelligence is the capacity to recognize, understand, and manage emotions in yourself and in others."
  },
  {
   "q": "A colleague reacts angrily during a stressful project. Which emotionally intelligent response is best?",
   "opts": [
    "Shout back to show you will not be intimidated",
    "Ignore them completely and refuse to speak",
    "Stay calm, acknowledge their feelings, and address the issue",
    "Report them immediately without discussion"
   ],
   "correct": 2,
   "exp": "Staying calm and acknowledging emotions demonstrates self-regulation and empathy, two core parts of emotional intelligence."
  },
  {
   "q": "What does self-awareness, a component of emotional intelligence, involve?",
   "opts": [
    "Being unaware of how your mood affects others",
    "Hiding all emotions from everyone at all times",
    "Focusing only on other people's feelings",
    "Recognizing your own emotions and how they influence your behavior"
   ],
   "correct": 3,
   "exp": "Self-awareness means recognizing your own emotions and understanding how they affect your thoughts and actions."
  }
 ],
 "Time Management": [
  {
   "q": "How does the Eisenhower Matrix help you manage time?",
   "opts": [
    "By sorting tasks by urgency and importance",
    "By requiring you to do every task at once",
    "By eliminating the need to plan ahead",
    "By ranking tasks only by how fun they are"
   ],
   "correct": 0,
   "exp": "The Eisenhower Matrix categorizes tasks by urgency and importance so you can prioritize what truly matters."
  },
  {
   "q": "Why is prioritizing tasks more effective than simply working longer hours?",
   "opts": [
    "Longer hours always produce better results",
    "Focusing on high-value tasks produces more meaningful progress",
    "Prioritizing means you never finish anything",
    "Working hours have no effect on productivity"
   ],
   "correct": 1,
   "exp": "Prioritizing directs your limited time toward high-value work, achieving more meaningful results than merely adding hours."
  },
  {
   "q": "What is a benefit of breaking a large project into smaller tasks?",
   "opts": [
    "It makes the project impossible to finish",
    "It hides the project from your manager",
    "It reduces overwhelm and creates manageable, trackable steps",
    "It guarantees the project needs no deadlines"
   ],
   "correct": 2,
   "exp": "Breaking a big project into smaller tasks reduces overwhelm and makes progress easier to plan, track, and complete."
  }
 ],
 "Teamwork": [
  {
   "q": "What is a key characteristic of an effective team?",
   "opts": [
    "Members compete secretly against each other",
    "One person makes every decision without input",
    "Members avoid helping one another",
    "Members communicate openly and share a common goal"
   ],
   "correct": 3,
   "exp": "Effective teams rely on open communication and a shared goal that aligns everyone's efforts."
  },
  {
   "q": "When a disagreement arises within a team, what is the most productive response?",
   "opts": [
    "Discuss different viewpoints respectfully to reach a solution",
    "Ignore it and hope it disappears",
    "Force everyone to agree with the loudest member",
    "Split the team permanently into rival groups"
   ],
   "correct": 0,
   "exp": "Respectfully discussing different viewpoints turns conflict into better solutions and strengthens the team."
  },
  {
   "q": "Why is understanding each member's role important in teamwork?",
   "opts": [
    "It lets one person avoid all responsibility",
    "It prevents duplicated effort and clarifies accountability",
    "It makes collaboration unnecessary",
    "It ensures no one ever communicates"
   ],
   "correct": 1,
   "exp": "Clear roles prevent overlapping work and make each member accountable, helping the team function smoothly."
  }
 ],
 "Decision Making": [
  {
   "q": "What is a benefit of weighing pros and cons before making a decision?",
   "opts": [
    "It removes all risk from every choice",
    "It guarantees the decision will please everyone",
    "It helps you evaluate options more objectively",
    "It lets you avoid ever deciding"
   ],
   "correct": 2,
   "exp": "Listing pros and cons helps you assess options objectively and understand the likely consequences of each choice."
  },
  {
   "q": "Why is gathering relevant information important before making an important decision?",
   "opts": [
    "It is only useful for trivial decisions",
    "It slows you down so you never decide",
    "It replaces the need to consider consequences",
    "It reduces uncertainty and supports a well-informed choice"
   ],
   "correct": 3,
   "exp": "Gathering relevant information reduces uncertainty and gives you a stronger basis for a sound, well-informed decision."
  },
  {
   "q": "What does it mean to consider the long-term consequences of a decision?",
   "opts": [
    "Thinking about how the choice will affect the future",
    "Focusing only on immediate rewards",
    "Ignoring any outcomes beyond today",
    "Letting others decide for you"
   ],
   "correct": 0,
   "exp": "Considering long-term consequences means evaluating how a decision will affect future outcomes, not just immediate results."
  }
 ],
 "Professional Ethics": [
  {
   "q": "What does acting with integrity in the workplace mean?",
   "opts": [
    "Only following rules when a manager is present",
    "Doing what is right even when no one is watching",
    "Prioritizing personal gain over honesty",
    "Bending rules whenever it is convenient"
   ],
   "correct": 1,
   "exp": "Integrity means consistently doing what is right and honest, regardless of whether anyone is watching."
  },
  {
   "q": "A coworker asks you to share confidential client data with an outside friend. What is the ethical response?",
   "opts": [
    "Share it since a coworker requested it",
    "Share only part of the data to compromise",
    "Decline and protect the client's confidential information",
    "Sell the data to the highest bidder"
   ],
   "correct": 2,
   "exp": "Protecting confidential information is an ethical duty, so you should decline to share it regardless of who asks."
  },
  {
   "q": "Why is it important to disclose a conflict of interest at work?",
   "opts": [
    "To gain a personal advantage over colleagues",
    "To avoid ever having to make decisions",
    "Because conflicts of interest are always illegal to have",
    "To maintain transparency and trust in decision making"
   ],
   "correct": 3,
   "exp": "Disclosing a conflict of interest maintains transparency and trust, allowing decisions to be made fairly and openly."
  }
 ],
 "Workplace Productivity": [
  {
   "q": "Which habit is most likely to improve workplace productivity?",
   "opts": [
    "Minimizing distractions and focusing on one task at a time",
    "Multitasking on many complex tasks simultaneously",
    "Checking email and messages every few minutes",
    "Leaving all tasks until the last possible moment"
   ],
   "correct": 0,
   "exp": "Minimizing distractions and focusing on one task at a time improves concentration and the quality of your work."
  },
  {
   "q": "How can setting clear daily priorities boost productivity?",
   "opts": [
    "It ensures you never complete anything",
    "It directs your energy toward the most important work first",
    "It removes the need to plan your day",
    "It makes every task equally urgent"
   ],
   "correct": 1,
   "exp": "Setting clear priorities ensures you tackle the most important work first, making better use of your time and energy."
  },
  {
   "q": "Why can taking regular short breaks actually increase overall productivity?",
   "opts": [
    "Breaks always waste valuable working time",
    "Breaks are only for people who work slowly",
    "Breaks help restore focus and prevent burnout",
    "Breaks reduce the quality of every task"
   ],
   "correct": 2,
   "exp": "Short, regular breaks restore focus and prevent burnout, helping you sustain higher productivity throughout the day."
  }
 ],
 "British English vs. American English": [
  {
   "q": "Which spelling is standard in British English?",
   "opts": [
    "Collor",
    "Color",
    "Culor",
    "Colour"
   ],
   "correct": 3,
   "exp": "British English keeps the 'u' in words like colour, whereas American English writes color."
  },
  {
   "q": "An American says 'apartment'; what word would a British speaker most likely use?",
   "opts": [
    "Flat",
    "Loft",
    "Cabin",
    "Suite"
   ],
   "correct": 0,
   "exp": "In British English a rented living unit is called a flat, while Americans say apartment."
  },
  {
   "q": "Which verb form is the more common British spelling?",
   "opts": [
    "Organize",
    "Analyse",
    "Realize",
    "Recognize"
   ],
   "correct": 1,
   "exp": "British English favours the '-yse' ending in analyse, whereas American English uses analyze."
  }
 ],
 "Common International Expressions": [
  {
   "q": "In an email, what does the abbreviation 'ASAP' mean?",
   "opts": [
    "Always send a photo",
    "After some advance planning",
    "As soon as possible",
    "At someone's approval point"
   ],
   "correct": 2,
   "exp": "ASAP is a widely used abbreviation meaning 'as soon as possible'."
  },
  {
   "q": "If a colleague says a task is 'a piece of cake', what do they mean?",
   "opts": [
    "It is delicious",
    "It is expensive",
    "It is unfinished",
    "It is very easy"
   ],
   "correct": 3,
   "exp": "'A piece of cake' is a common idiom meaning something is very easy to do."
  },
  {
   "q": "What is the most appropriate response to 'How do you do?' at a first meeting?",
   "opts": [
    "How do you do?",
    "By taxi, thank you",
    "It is on the table",
    "I am doing my homework"
   ],
   "correct": 0,
   "exp": "'How do you do?' is a formal greeting traditionally answered by repeating the same phrase."
  }
 ],
 "Cross-Cultural Communication": [
  {
   "q": "Why should you avoid idioms and slang when speaking with someone from another culture?",
   "opts": [
    "They are grammatically incorrect",
    "They may not translate and cause confusion",
    "They are always rude",
    "They take too long to say"
   ],
   "correct": 1,
   "exp": "Idioms and slang are culture-specific and can be misunderstood by non-native or foreign listeners."
  },
  {
   "q": "In cross-cultural communication, what does 'high-context' culture rely on most?",
   "opts": [
    "Written contracts only",
    "Explicit, direct words",
    "Shared background and nonverbal cues",
    "Loud speaking volume"
   ],
   "correct": 2,
   "exp": "High-context cultures convey meaning through shared context, relationships, and nonverbal cues rather than explicit words."
  },
  {
   "q": "What is the best way to confirm understanding across cultures?",
   "opts": [
    "Repeat the same words louder",
    "Speak faster",
    "Assume they understood",
    "Politely paraphrase and check back"
   ],
   "correct": 3,
   "exp": "Paraphrasing and asking for confirmation ensures the message was understood despite cultural or language differences."
  }
 ],
 "English for Travel": [
  {
   "q": "At an airport, what does the 'boarding pass' allow you to do?",
   "opts": [
    "Board the aircraft",
    "Exchange currency",
    "Rent a car",
    "Claim lost luggage"
   ],
   "correct": 0,
   "exp": "A boarding pass is the document that permits a passenger to board the plane."
  },
  {
   "q": "Which phrase would you use to politely ask for directions in a foreign city?",
   "opts": [
    "Give me the map now",
    "Excuse me, how do I get to the station?",
    "You must tell me the way",
    "Where is it, hurry"
   ],
   "correct": 1,
   "exp": "'Excuse me, how do I get to...' is a polite and standard way to ask for directions."
  },
  {
   "q": "At a hotel, what does it mean to 'check out'?",
   "opts": [
    "Order room service",
    "Look at the view",
    "Leave and settle the bill",
    "Book another night"
   ],
   "correct": 2,
   "exp": "To check out means to formally leave the hotel and pay your remaining bill."
  }
 ],
 "English for International Business": [
  {
   "q": "In a business email, which opening is most appropriately formal to an unknown recipient?",
   "opts": [
    "What's up",
    "Hey there!",
    "Yo team",
    "Dear Sir or Madam,"
   ],
   "correct": 3,
   "exp": "'Dear Sir or Madam' is a formal salutation used when the recipient's name is unknown."
  },
  {
   "q": "What does it mean to 'reach a consensus' in a business meeting?",
   "opts": [
    "To arrive at general agreement",
    "To vote against a plan",
    "To end the meeting early",
    "To postpone a decision"
   ],
   "correct": 0,
   "exp": "Reaching a consensus means the group arrives at a general agreement everyone can accept."
  },
  {
   "q": "In international trade, what does the term 'invoice' refer to?",
   "opts": [
    "A shipping container",
    "A bill listing goods and amounts due",
    "A meeting agenda",
    "A marketing plan"
   ],
   "correct": 1,
   "exp": "An invoice is a document that itemizes products or services and states the amount owed."
  }
 ],
 "Global Workplace Communication": [
  {
   "q": "When scheduling a meeting across countries, why is it important to state the time zone?",
   "opts": [
    "To sound professional",
    "To make the email longer",
    "To avoid confusion about the actual meeting time",
    "It is legally required"
   ],
   "correct": 2,
   "exp": "Naming the time zone prevents colleagues in different regions from mistaking the meeting time."
  },
  {
   "q": "Which practice best supports clear communication on a global team?",
   "opts": [
    "Using local slang freely",
    "Using only voice calls",
    "Avoiding written summaries",
    "Writing concise, plain-language messages"
   ],
   "correct": 3,
   "exp": "Concise, plain-language writing reduces misunderstanding among people with varied English levels."
  },
  {
   "q": "What is 'asynchronous communication' in a global workplace?",
   "opts": [
    "Messages that do not require an immediate real-time reply",
    "Everyone speaking at once",
    "A type of video call",
    "Communication in one language only"
   ],
   "correct": 0,
   "exp": "Asynchronous communication lets people respond at different times, useful across time zones."
  }
 ],
 "Intercultural Awareness": [
  {
   "q": "What does intercultural awareness primarily involve?",
   "opts": [
    "Judging other customs as wrong",
    "Recognizing and respecting cultural differences",
    "Speaking only your own language",
    "Ignoring other cultures"
   ],
   "correct": 1,
   "exp": "Intercultural awareness means understanding and respecting differences among cultures."
  },
  {
   "q": "A gesture that is friendly in one country may be offensive in another. What lesson does this teach?",
   "opts": [
    "You should never use gestures",
    "Gestures have universal meaning",
    "Nonverbal signals can vary by culture",
    "Gestures are always rude"
   ],
   "correct": 2,
   "exp": "The same gesture can carry different meanings across cultures, so nonverbal cues are culture-dependent."
  },
  {
   "q": "What is a 'stereotype' in intercultural terms?",
   "opts": [
    "An accurate description of a group",
    "A translation tool",
    "A type of formal greeting",
    "An oversimplified fixed idea about a group"
   ],
   "correct": 3,
   "exp": "A stereotype is an oversimplified, generalized belief about a group that often ignores individual differences."
  }
 ],
 "TOEFL Introduction": [
  {
   "q": "The TOEFL iBT primarily measures a test-taker's ability in which language?",
   "opts": [
    "English",
    "Spanish",
    "French",
    "German"
   ],
   "correct": 0,
   "exp": "TOEFL (Test of English as a Foreign Language) measures English proficiency for non-native speakers."
  },
  {
   "q": "Which four sections make up the TOEFL iBT?",
   "opts": [
    "Grammar, Vocabulary, Reading, Math",
    "Reading, Listening, Speaking, Writing",
    "Speaking, Math, Science, Writing",
    "Listening, Drawing, Reading, Logic"
   ],
   "correct": 1,
   "exp": "The TOEFL iBT contains four sections: Reading, Listening, Speaking, and Writing."
  },
  {
   "q": "What is the maximum total score on the TOEFL iBT?",
   "opts": [
    "100",
    "150",
    "120",
    "200"
   ],
   "correct": 2,
   "exp": "Each of the four TOEFL sections is scored out of 30, for a maximum total of 120."
  }
 ],
 "IELTS Introduction": [
  {
   "q": "What does the abbreviation IELTS stand for?",
   "opts": [
    "Internal English Learning Test Series",
    "International Exam for Language Translation Studies",
    "Institute for English Language Teaching Standards",
    "International English Language Testing System"
   ],
   "correct": 3,
   "exp": "IELTS stands for the International English Language Testing System."
  },
  {
   "q": "IELTS results are reported on a band scale ranging from 1 to what number?",
   "opts": [
    "9",
    "12",
    "7",
    "100"
   ],
   "correct": 0,
   "exp": "IELTS uses a nine-band scoring scale, from band 1 (non-user) to band 9 (expert)."
  },
  {
   "q": "Which two versions of the IELTS test are available to candidates?",
   "opts": [
    "National and International",
    "Academic and General Training",
    "Written and Oral",
    "Beginner and Advanced"
   ],
   "correct": 1,
   "exp": "IELTS offers an Academic version and a General Training version for different purposes."
  }
 ],
 "SAT Reading & Writing Overview": [
  {
   "q": "On the digital SAT, the Reading and Writing section is delivered as what?",
   "opts": [
    "An oral interview",
    "Three separate essays",
    "A single combined section",
    "A listening exercise"
   ],
   "correct": 2,
   "exp": "The digital SAT combines Reading and Writing into one section with short passages and questions."
  },
  {
   "q": "Which skill is most directly tested by SAT Reading & Writing questions about a passage's main idea?",
   "opts": [
    "Mental arithmetic",
    "Spoken fluency",
    "Handwriting speed",
    "Reading comprehension"
   ],
   "correct": 3,
   "exp": "Identifying a passage's main idea tests reading comprehension, a core SAT Reading & Writing skill."
  },
  {
   "q": "A SAT Reading & Writing question asks you to choose the option that best corrects a sentence. What is it testing?",
   "opts": [
    "Standard English grammar and usage",
    "Vocabulary translation",
    "Geometry",
    "Listening skills"
   ],
   "correct": 0,
   "exp": "Sentence-correction items assess command of standard English grammar, punctuation, and usage."
  }
 ],
 "Academic Vocabulary Review": [
  {
   "q": "Which word most nearly means 'to examine in detail'?",
   "opts": [
    "Ignore",
    "Analyze",
    "Conceal",
    "Simplify"
   ],
   "correct": 1,
   "exp": "To analyze means to examine something carefully in detail, part by part."
  },
  {
   "q": "In academic writing, what does the word 'hypothesis' mean?",
   "opts": [
    "A final conclusion",
    "A proven fact",
    "A proposed explanation to be tested",
    "A type of citation"
   ],
   "correct": 2,
   "exp": "A hypothesis is a proposed, testable explanation that research aims to support or reject."
  },
  {
   "q": "Which word is the best synonym for 'significant' in an academic context?",
   "opts": [
    "Tiny",
    "Random",
    "Colorful",
    "Important"
   ],
   "correct": 3,
   "exp": "In academic usage, significant means important or notable, as in a significant finding."
  }
 ],
 "Grammar Review": [
  {
   "q": "Which sentence uses the correct subject-verb agreement?",
   "opts": [
    "The team plays well together.",
    "She walk to school.",
    "The students is ready.",
    "They was late."
   ],
   "correct": 0,
   "exp": "'The team plays' correctly matches a singular collective subject with the singular verb form."
  },
  {
   "q": "Which sentence is written in the past perfect tense?",
   "opts": [
    "I eat lunch now.",
    "She had finished before he arrived.",
    "They will travel tomorrow.",
    "We are studying."
   ],
   "correct": 1,
   "exp": "'Had finished' is the past perfect, showing an action completed before another past event."
  },
  {
   "q": "Which word in the sentence is an adverb: 'She quickly solved the difficult problem'?",
   "opts": [
    "Problem",
    "Solved",
    "Quickly",
    "Difficult"
   ],
   "correct": 2,
   "exp": "'Quickly' modifies the verb 'solved', telling how the action was done, so it is an adverb."
  }
 ],
 "Practice Tests": [
  {
   "q": "What is the main purpose of taking a full-length practice test before a real exam?",
   "opts": [
    "To memorize the answers",
    "To lower the passing score",
    "To skip studying",
    "To build stamina and identify weak areas"
   ],
   "correct": 3,
   "exp": "Practice tests help build endurance and reveal which topics need more review before the real exam."
  },
  {
   "q": "Why is it useful to time yourself during a practice test?",
   "opts": [
    "To simulate real exam pacing",
    "To increase the difficulty",
    "To avoid reading questions",
    "To finish as slowly as possible"
   ],
   "correct": 0,
   "exp": "Timing practice tests mirrors real conditions so you learn to manage the exam's time limits."
  },
  {
   "q": "After completing a practice test, what is the most valuable next step?",
   "opts": [
    "Throw the test away",
    "Review mistakes and understand why",
    "Take another test immediately",
    "Only count your score"
   ],
   "correct": 1,
   "exp": "Reviewing errors and understanding the reasons behind them turns practice into real improvement."
  }
 ],
 "Test-Taking Strategies": [
  {
   "q": "On a timed multiple-choice test, what is a smart strategy for a very difficult question?",
   "opts": [
    "Leave the whole test",
    "Guess randomly on everything",
    "Skip it and return later",
    "Refuse to answer any question"
   ],
   "correct": 2,
   "exp": "Skipping a hard question and returning later saves time for questions you can answer quickly."
  },
  {
   "q": "How can the 'process of elimination' help on a multiple-choice question?",
   "opts": [
    "It stops the timer",
    "It adds more choices",
    "It changes the correct answer",
    "It removes clearly wrong options to improve your odds"
   ],
   "correct": 3,
   "exp": "Eliminating obviously wrong choices increases the probability of choosing the correct remaining answer."
  },
  {
   "q": "Why is it important to read the question carefully before answering?",
   "opts": [
    "To catch key words like 'not' or 'except'",
    "To use more time",
    "To impress the teacher",
    "To avoid reading the options"
   ],
   "correct": 0,
   "exp": "Careful reading catches qualifying words such as 'not' or 'except' that change the correct answer."
  }
 ]
};
  window.TIH_TOPIC_QUIZZES['ph-career'] = {
 "Welcome to the Course": [
  {
   "q": "What is the primary goal of this course, Career Success for Public Health Graduates?",
   "opts": [
    "To help public health graduates build the skills and plans needed to launch and grow their careers",
    "To teach clinical surgery skills",
    "To provide funding for NGOs in Liberia",
    "To certify graduates as medical doctors"
   ],
   "correct": 0,
   "exp": "The course is designed to equip public health graduates with career-building skills, planning tools, and technical knowledge for professional success."
  },
  {
   "q": "Which of the following best describes how a learner should approach this course to get the most value?",
   "opts": [
    "Skip the applied exercises and only read theory",
    "Actively complete the self-assessments, goal-setting, and planning activities",
    "Memorize every fact without reflecting on personal goals",
    "Wait until the end to attempt any activities"
   ],
   "correct": 1,
   "exp": "The course is built around applied activities like self-assessment and goal-setting, so active participation produces the most career benefit."
  },
  {
   "q": "Why is a career-focused course particularly valuable for public health graduates in Liberia and West Africa?",
   "opts": [
    "Because there are no public health employers in the region",
    "Because all graduates are automatically hired by the Ministry of Health",
    "Because navigating a competitive and evolving job market benefits from deliberate planning and skill-building",
    "Because career planning is only useful outside Africa"
   ],
   "correct": 2,
   "exp": "A competitive, evolving regional job market makes deliberate career planning and skill development especially important for new graduates."
  }
 ],
 "The Public Health Job Market": [
  {
   "q": "Which type of organization is typically one of the largest employers of public health professionals in Liberia?",
   "opts": [
    "Private airlines",
    "Textile factories",
    "Commercial banks",
    "The Ministry of Health and county health teams"
   ],
   "correct": 3,
   "exp": "The Ministry of Health along with county health teams is a major public sector employer of public health workers in Liberia."
  },
  {
   "q": "A graduate wants to work in emergency outbreak response and program funding. Which sector is she most likely to target?",
   "opts": [
    "INGOs and multilateral agencies such as WHO and UNICEF",
    "Local grocery retail",
    "Automobile manufacturing",
    "Real estate development"
   ],
   "correct": 0,
   "exp": "INGOs and multilateral agencies like WHO and UNICEF fund and lead much outbreak response and public health programming in the region."
  },
  {
   "q": "Which factor has notably shaped demand for public health professionals in West Africa in recent years?",
   "opts": [
    "A decline in all infectious diseases",
    "Major outbreaks such as Ebola and Lassa fever increasing demand for surveillance and response capacity",
    "The elimination of NGOs from the region",
    "A complete shift away from data-driven programs"
   ],
   "correct": 1,
   "exp": "Outbreaks like Ebola and Lassa fever have driven investment in surveillance, response, and the workforce needed to support them."
  }
 ],
 "Career Pathways in Public Health": [
  {
   "q": "Which of the following is an example of a technical or specialist career pathway in public health?",
   "opts": [
    "Retail cashier",
    "General office receptionist",
    "Epidemiologist focusing on disease investigation",
    "Airline pilot"
   ],
   "correct": 2,
   "exp": "An epidemiologist is a technical specialist pathway centered on investigating disease patterns and outbreaks."
  },
  {
   "q": "A public health graduate enjoys coordinating teams, budgets, and donor reporting rather than lab work. Which pathway fits best?",
   "opts": [
    "Laboratory bench scientist",
    "Vaccine cold-chain repair technician only",
    "Clinical surgery",
    "Program or project management"
   ],
   "correct": 3,
   "exp": "Program and project management pathways center on coordinating teams, budgets, and reporting, matching this graduate's interests."
  },
  {
   "q": "Why is it useful to think of public health careers as pathways rather than a single fixed job?",
   "opts": [
    "Because professionals often move across roles such as research, management, and policy over time",
    "Because pathways never change and require no planning",
    "Because only one job exists in public health",
    "Because pathways prevent any skill development"
   ],
   "correct": 0,
   "exp": "Viewing careers as pathways reflects the reality that professionals commonly progress and shift across research, management, and policy roles."
  }
 ],
 "Key Public Health Job Roles": [
  {
   "q": "What is the main responsibility of a Monitoring and Evaluation (M&E) officer?",
   "opts": [
    "Prescribing medication to patients",
    "Tracking program performance and measuring whether interventions achieve their objectives",
    "Driving ambulances",
    "Managing hospital pharmacies exclusively"
   ],
   "correct": 1,
   "exp": "An M&E officer tracks indicators and evaluates whether programs are meeting their intended objectives."
  },
  {
   "q": "A county health team needs someone to investigate a suspected cholera cluster and identify its source. Which role is most appropriate?",
   "opts": [
    "Communications intern",
    "Finance clerk",
    "Field epidemiologist",
    "Logistics driver"
   ],
   "correct": 2,
   "exp": "A field epidemiologist is trained to investigate clusters, trace sources, and guide the outbreak response."
  },
  {
   "q": "Which role focuses primarily on designing community campaigns and behavior-change messaging?",
   "opts": [
    "Biostatistician",
    "Procurement officer",
    "Data server administrator",
    "Health promotion or health education officer"
   ],
   "correct": 3,
   "exp": "A health promotion or health education officer designs campaigns and messaging to encourage healthier community behaviors."
  }
 ],
 "Assessing Your Skills and Strengths": [
  {
   "q": "What is the main purpose of conducting a personal skills self-assessment early in career planning?",
   "opts": [
    "To identify your strengths and gaps so you can target growth and suitable roles",
    "To avoid ever learning new skills",
    "To guarantee a specific salary",
    "To replace the need for any qualifications"
   ],
   "correct": 0,
   "exp": "A self-assessment reveals strengths and gaps, allowing you to focus development efforts and pursue well-matched roles."
  },
  {
   "q": "Which of the following is an example of a transferable soft skill valued across public health roles?",
   "opts": [
    "Ownership of a specific brand of microscope",
    "Written and verbal communication",
    "Living in a particular county",
    "Owning a personal vehicle"
   ],
   "correct": 1,
   "exp": "Communication is a transferable soft skill that strengthens performance across nearly all public health roles."
  },
  {
   "q": "A graduate realizes she is strong in data analysis but weak in report writing. What is the most constructive next step?",
   "opts": [
    "Ignore the weakness and hope it never matters",
    "Abandon public health entirely",
    "Set a targeted plan to build report-writing skills while leveraging her data strength",
    "Only apply for jobs requiring no writing forever"
   ],
   "correct": 2,
   "exp": "Recognizing a gap should lead to a targeted development plan that also builds on existing strengths."
  }
 ],
 "Setting SMART Career Goals": [
  {
   "q": "In the SMART framework, what does the M stand for?",
   "opts": [
    "Motivational",
    "Managerial",
    "Mandatory",
    "Measurable"
   ],
   "correct": 3,
   "exp": "The M in SMART stands for Measurable, meaning the goal has clear criteria to track progress."
  },
  {
   "q": "Which of the following is the best example of a SMART career goal?",
   "opts": [
    "I will complete a certificate in M&E within six months to qualify for a data officer role",
    "I want to be successful someday",
    "I will get better at things",
    "I hope to maybe work in health"
   ],
   "correct": 0,
   "exp": "This goal is specific, measurable, time-bound, and tied to a concrete career outcome, meeting the SMART criteria."
  },
  {
   "q": "Why does the T (Time-bound) element strengthen a career goal?",
   "opts": [
    "It removes any need for effort",
    "It sets a deadline that creates focus and lets you track progress",
    "It makes the goal impossible to measure",
    "It guarantees external funding"
   ],
   "correct": 1,
   "exp": "A deadline provides focus and a reference point for measuring whether you are on track."
  }
 ],
 "Building Your Career Plan": [
  {
   "q": "What is a career plan primarily meant to do?",
   "opts": [
    "Lock you into one job for life with no flexibility",
    "Replace the need to apply for jobs",
    "Map the steps, skills, and milestones needed to reach your career goals over time",
    "Predict the exact salary of every role"
   ],
   "correct": 2,
   "exp": "A career plan maps the sequence of steps, skills, and milestones that move you toward your goals."
  },
  {
   "q": "A recent graduate's goal is to become a county surveillance officer in three years. Which element belongs in her career plan?",
   "opts": [
    "Only her favorite food choices",
    "The color scheme of her office",
    "A list of unrelated hobbies",
    "Short-term milestones like gaining field experience and learning surveillance tools"
   ],
   "correct": 3,
   "exp": "Concrete short-term milestones such as field experience and surveillance training bridge the gap to the longer-term goal."
  },
  {
   "q": "Why should a career plan be reviewed and updated periodically?",
   "opts": [
    "Because circumstances, skills, and opportunities change over time",
    "Because plans must never be looked at again once written",
    "Because updating a plan is illegal",
    "Because employers forbid planning"
   ],
   "correct": 0,
   "exp": "Regular review keeps the plan relevant as your skills, opportunities, and circumstances evolve."
  }
 ],
 "Epidemiology Essentials": [
  {
   "q": "Epidemiology is best defined as the study of what?",
   "opts": [
    "The chemical structure of medicines",
    "The distribution and determinants of health and disease in populations",
    "The management of hospital finances",
    "The design of medical buildings"
   ],
   "correct": 1,
   "exp": "Epidemiology studies how health and disease are distributed in populations and the factors that determine them."
  },
  {
   "q": "During a suspected Ebola outbreak, a team lists cases by person, place, and time to describe the pattern. What is this called?",
   "opts": [
    "Laboratory synthesis",
    "Randomized controlled trial",
    "Descriptive epidemiology",
    "Financial auditing"
   ],
   "correct": 2,
   "exp": "Organizing cases by person, place, and time is the core of descriptive epidemiology, which characterizes an outbreak."
  },
  {
   "q": "Which measure expresses the number of new cases of a disease occurring in a population over a specific period?",
   "opts": [
    "Prevalence",
    "Case fatality budget",
    "Sensitivity",
    "Incidence"
   ],
   "correct": 3,
   "exp": "Incidence measures the number of new cases arising in a population during a defined time period."
  }
 ],
 "Biostatistics and Data Literacy": [
  {
   "q": "Which measure of central tendency is most affected by extreme outlier values in a dataset?",
   "opts": [
    "The mean",
    "The median",
    "The mode",
    "The range only"
   ],
   "correct": 0,
   "exp": "The mean is pulled toward extreme values, making it the most sensitive to outliers among these measures."
  },
  {
   "q": "A county health team collects malaria data with KoBoToolbox on tablets. What is a key biostatistics benefit of this approach?",
   "opts": [
    "It removes the need for any analysis",
    "It enables cleaner, structured digital data that is easier to validate and analyze",
    "It guarantees no data errors ever",
    "It makes statistics unnecessary"
   ],
   "correct": 1,
   "exp": "Digital collection tools like KoBoToolbox produce structured data that is easier to validate, clean, and analyze."
  },
  {
   "q": "If a survey reports that 40 percent of respondents own a bed net, what type of measure is this?",
   "opts": [
    "A standard deviation",
    "A p-value",
    "A proportion or percentage",
    "A correlation coefficient"
   ],
   "correct": 2,
   "exp": "A percentage expressing a part of the whole is a proportion, a basic descriptive summary of categorical data."
  }
 ],
 "Disease Surveillance": [
  {
   "q": "What is the primary purpose of disease surveillance?",
   "opts": [
    "To sell medicines",
    "To replace laboratories entirely",
    "To build hospitals",
    "To continuously collect and analyze health data so outbreaks can be detected and acted on early"
   ],
   "correct": 3,
   "exp": "Surveillance provides ongoing data collection and analysis so that outbreaks are detected and responded to promptly."
  },
  {
   "q": "Liberia uses the IDSR strategy promoted by WHO in Africa. What does IDSR stand for?",
   "opts": [
    "Integrated Disease Surveillance and Response",
    "Internal Data Storage Registry",
    "International Drug Supply Rules",
    "Independent District Sanitation Review"
   ],
   "correct": 0,
   "exp": "IDSR stands for Integrated Disease Surveillance and Response, WHO's framework for strengthening surveillance in Africa."
  },
  {
   "q": "A health facility reports a single suspected Lassa fever case immediately rather than waiting for a weekly summary. This is an example of what?",
   "opts": [
    "Routine annual census",
    "Case-based or immediate notifiable reporting",
    "Financial reporting",
    "Passive advertising"
   ],
   "correct": 1,
   "exp": "Priority diseases like Lassa fever require immediate case-based notification so response can begin without delay."
  }
 ],
 "Health Promotion and Education": [
  {
   "q": "What is the central aim of health promotion?",
   "opts": [
    "To treat advanced diseases surgically",
    "To sell hospital insurance",
    "To enable people and communities to increase control over and improve their health",
    "To reduce the number of health workers"
   ],
   "correct": 2,
   "exp": "Health promotion empowers people and communities to gain greater control over the factors that affect their health."
  },
  {
   "q": "A team wants to increase handwashing during a cholera outbreak in a rural county. Which approach best reflects effective health education?",
   "opts": [
    "Using complex medical jargon in English only",
    "Blaming the community for the outbreak",
    "Distributing no information at all",
    "Engaging community members with clear, culturally relevant messages and local languages"
   ],
   "correct": 3,
   "exp": "Effective health education uses clear, culturally relevant messaging in local languages and engages the community respectfully."
  },
  {
   "q": "Which of the following is an example of a behavior-change communication channel used in community health promotion?",
   "opts": [
    "Community radio and peer educators",
    "Locked filing cabinets",
    "Hospital accounting software",
    "Vehicle maintenance logs"
   ],
   "correct": 0,
   "exp": "Community radio and peer educators are common channels for delivering behavior-change communication at the community level."
  }
 ],
 "Health Systems and Policy": [
  {
   "q": "According to the WHO framework, which of the following is one of the health system building blocks?",
   "opts": [
    "Weather forecasting",
    "Health workforce",
    "Road construction",
    "Foreign currency exchange"
   ],
   "correct": 1,
   "exp": "The health workforce is one of WHO's six building blocks of a health system, alongside financing, information, and others."
  },
  {
   "q": "A national policy aims for universal health coverage. What does universal health coverage primarily mean?",
   "opts": [
    "All care is delivered in one central hospital",
    "Only wealthy citizens receive care",
    "Everyone can access needed health services without suffering financial hardship",
    "Health services are provided only during outbreaks"
   ],
   "correct": 2,
   "exp": "Universal health coverage means all people can obtain the health services they need without financial hardship."
  },
  {
   "q": "Why is health policy important for the work of a county health team in Liberia?",
   "opts": [
    "It has no effect on daily operations",
    "It prevents any data collection",
    "It only concerns private companies",
    "It sets priorities, standards, and resource allocation that guide how services are delivered"
   ],
   "correct": 3,
   "exp": "Health policy defines the priorities, standards, and resource decisions that shape how county-level services are delivered."
  }
 ],
 "Environmental and Occupational Health": [
  {
   "q": "Environmental health primarily focuses on what?",
   "opts": [
    "The relationship between people's health and factors in their physical environment such as water, air, and sanitation",
    "Stock market performance",
    "Interior decoration of clinics",
    "The pricing of imported cars"
   ],
   "correct": 0,
   "exp": "Environmental health addresses how physical environmental factors like water, air, and sanitation affect human health."
  },
  {
   "q": "Poor sanitation and unsafe drinking water in a community most directly increase the risk of which condition?",
   "opts": [
    "Fractured bones",
    "Diarrheal diseases such as cholera",
    "Color blindness",
    "Hearing loss from noise"
   ],
   "correct": 1,
   "exp": "Contaminated water and poor sanitation are leading causes of diarrheal diseases such as cholera."
  },
  {
   "q": "A health worker reusing needles without protection faces a workplace hazard. Which field addresses protecting workers from such job-related risks?",
   "opts": [
    "Astronomy",
    "Marketing",
    "Occupational health",
    "Agriculture economics"
   ],
   "correct": 2,
   "exp": "Occupational health focuses on identifying and preventing hazards that threaten the health and safety of workers."
  }
 ],
 "Global Health and One Health": [
  {
   "q": "The One Health approach is based on which core idea?",
   "opts": [
    "Human health can be studied in complete isolation",
    "Health issues never cross borders",
    "Only animal health matters",
    "The health of people, animals, and the environment are interconnected"
   ],
   "correct": 3,
   "exp": "One Health recognizes that human, animal, and environmental health are interconnected and must be addressed together."
  },
  {
   "q": "Why is the One Health approach especially relevant to outbreaks like Ebola and Lassa fever in West Africa?",
   "opts": [
    "Because these are zoonotic diseases that spread from animals to humans",
    "Because these diseases only affect plants",
    "Because they have no environmental component",
    "Because they cannot be prevented in any way"
   ],
   "correct": 0,
   "exp": "Ebola and Lassa fever are zoonotic diseases spread from animals to humans, making the One Health approach essential."
  },
  {
   "q": "What does the term global health emphasize compared with a purely national view?",
   "opts": [
    "Only the health of a single village",
    "Health issues that transcend borders and require cross-country cooperation",
    "Ignoring international collaboration",
    "Focusing solely on personal finances"
   ],
   "correct": 1,
   "exp": "Global health emphasizes health challenges that cross national borders and call for international cooperation."
  }
 ],
 "Writing a Public Health CV": [
  {
   "q": "A public health graduate in Monrovia is applying for an epidemiologist post with the National Public Health Institute of Liberia (NPHIL). What belongs at the very top of a well-structured CV?",
   "opts": [
    "A detailed list of hobbies and personal interests",
    "The names and phone numbers of three references",
    "Full name and up-to-date contact details with a brief professional summary",
    "A photograph and national ID number"
   ],
   "correct": 2,
   "exp": "The top of a CV should immediately identify you and orient the reader, so name, contact details, and a short professional summary come first."
  },
  {
   "q": "When describing your role in a county-level immunization campaign, which bullet point is strongest on a public health CV?",
   "opts": [
    "Was responsible for helping with vaccines in the county",
    "Involved in immunization activities for some time",
    "Did vaccination work as part of the health team",
    "Coordinated a measles campaign across 15 health facilities, reaching over 8,000 children under five"
   ],
   "correct": 3,
   "exp": "Strong CV bullets use action verbs and quantified results, which show measurable impact rather than vague responsibility."
  },
  {
   "q": "Why should a public health CV be tailored for each specific job application rather than sent as one generic document?",
   "opts": [
    "Tailoring lets you highlight the skills and experience most relevant to that particular role",
    "Employers legally require a new CV for every post",
    "A generic CV is always longer and therefore looks more impressive",
    "It prevents other organizations from copying your CV"
   ],
   "correct": 0,
   "exp": "Tailoring foregrounds the qualifications a specific employer is seeking, making your relevance obvious and improving shortlisting chances."
  }
 ],
 "Writing a Cover Letter": [
  {
   "q": "What is the main purpose of a cover letter accompanying a job application to an INGO like the International Rescue Committee?",
   "opts": [
    "To repeat your CV word for word so nothing is missed",
    "To explain why you are a strong fit for this specific role and organization",
    "To list every job you have ever held in chronological order",
    "To state your expected salary and start date only"
   ],
   "correct": 1,
   "exp": "A cover letter connects your skills and motivation to the specific role and employer, adding context the CV alone cannot convey."
  },
  {
   "q": "A cover letter for a Ministry of Health M&E officer position should ideally be addressed how?",
   "opts": [
    "To Whom It May Concern, with no further detail",
    "Dear Sir or Madam, and nothing more",
    "To the named hiring manager or recruiter where their name is known",
    "Hello, followed by the applicant's own name"
   ],
   "correct": 2,
   "exp": "Addressing the letter to a named person shows initiative and research, making the application feel personal and considered."
  },
  {
   "q": "Which is the best way to close the final paragraph of a cover letter?",
   "opts": [
    "Demand an interview within one week or you will withdraw",
    "Apologize for taking up the reader's time",
    "Restate your full home address and phone number again",
    "Thank the reader and express genuine interest in discussing your fit further"
   ],
   "correct": 3,
   "exp": "A strong close thanks the reader and signals enthusiasm for next steps, leaving a positive, professional final impression."
  }
 ],
 "Personal Statements and Motivation Letters": [
  {
   "q": "A graduate is writing a motivation letter for a Master of Public Health scholarship. What should the letter primarily convey?",
   "opts": [
    "Your motivation, relevant experiences, and how the program fits your goals",
    "A complete transcript of every course grade received",
    "A promise to accept any job the funder later offers",
    "A list of every extracurricular club at your undergraduate school"
   ],
   "correct": 0,
   "exp": "A motivation letter should articulate why you want the opportunity and how it aligns with your experiences and future goals."
  },
  {
   "q": "How does a personal statement typically differ from a standard cover letter?",
   "opts": [
    "A personal statement is always shorter than one paragraph",
    "A personal statement focuses more on your story, values, and long-term aspirations",
    "A personal statement must never mention any specific experiences",
    "A personal statement is written entirely in the third person"
   ],
   "correct": 1,
   "exp": "Personal statements emphasize your narrative, motivations, and aspirations, going deeper into who you are than a job-focused cover letter."
  },
  {
   "q": "Which opening for a fellowship motivation letter is most effective?",
   "opts": [
    "A generic sentence stating you saw the fellowship advertised online",
    "A dictionary definition of the word public health",
    "A specific, vivid moment that sparked your commitment to public health",
    "A complaint about how competitive the fellowship is"
   ],
   "correct": 2,
   "exp": "A concrete, personal opening moment engages the reader and authentically establishes your genuine commitment to the field."
  }
 ],
 "Building a Professional Portfolio": [
  {
   "q": "What is the primary value of a professional portfolio for a public health graduate?",
   "opts": [
    "It replaces the need for a CV or cover letter entirely",
    "It is only useful for artists and designers, not health professionals",
    "It guarantees a job offer from any organization",
    "It provides concrete evidence of your skills through samples of real work"
   ],
   "correct": 3,
   "exp": "A portfolio demonstrates your capabilities with tangible work samples, giving employers proof beyond claims made in a CV."
  },
  {
   "q": "Which item would be most appropriate to include in a public health professional portfolio?",
   "opts": [
    "A copy of a health promotion brochure you designed for a community campaign",
    "Personal family photographs from a recent holiday",
    "Screenshots of unrelated social media banter",
    "A list of your favorite films and music"
   ],
   "correct": 0,
   "exp": "Work products like a health promotion brochure directly showcase relevant public health skills and accomplishments."
  },
  {
   "q": "Before including a data report from a former employer in your portfolio, what should you do?",
   "opts": [
    "Publish it publicly to prove it is real",
    "Ensure sensitive or confidential information is removed or permission is obtained",
    "Add your own logo over the organization's name",
    "Nothing, since all work you touched is yours to share"
   ],
   "correct": 1,
   "exp": "Confidential or sensitive data must be removed or cleared with permission to respect ethics, privacy, and employer trust."
  }
 ],
 "Creating a Strong LinkedIn Profile": [
  {
   "q": "What makes an effective LinkedIn headline for a recent public health graduate in Liberia?",
   "opts": [
    "Simply the word Unemployed",
    "A long paragraph listing all your coursework",
    "A concise description of your focus, such as Public Health Graduate | Epidemiology and Disease Surveillance",
    "Your full residential address"
   ],
   "correct": 2,
   "exp": "A focused headline signaling your field and interests helps recruiters and connections quickly understand your professional identity."
  },
  {
   "q": "Why is a professional profile photo recommended on LinkedIn?",
   "opts": [
    "Profiles without photos are automatically deleted",
    "Photos increase your salary automatically",
    "It allows you to skip filling in your work experience",
    "A clear, professional photo makes your profile more approachable and trustworthy"
   ],
   "correct": 3,
   "exp": "A professional headshot builds credibility and approachability, and profiles with photos receive significantly more engagement."
  },
  {
   "q": "How can a public health graduate best use LinkedIn to find opportunities?",
   "opts": [
    "Engage with relevant posts, follow key organizations like WHO, and connect thoughtfully with professionals",
    "Send identical copy-paste messages demanding jobs from strangers",
    "Only add family members as connections",
    "Leave the profile blank to appear mysterious"
   ],
   "correct": 0,
   "exp": "Active, thoughtful engagement and following relevant organizations builds a network and surfaces opportunities over time."
  }
 ],
 "References and Recommendation Letters": [
  {
   "q": "Who makes the most appropriate professional reference for a public health graduate applying to a county health team?",
   "opts": [
    "A close childhood friend with no work connection",
    "A former supervisor or lecturer who can speak to your skills and work ethic",
    "A family member who knows you well",
    "A celebrity you admire but have never met"
   ],
   "correct": 1,
   "exp": "Supervisors and lecturers can credibly attest to your professional abilities and character from direct experience."
  },
  {
   "q": "What is the correct etiquette before listing someone as a reference?",
   "opts": [
    "List them without asking, as a surprise",
    "Only use references who have passed away",
    "Ask their permission and confirm they are willing to speak positively",
    "Choose references you have never actually met"
   ],
   "correct": 2,
   "exp": "Always ask permission first so the reference is prepared, willing, and able to give a strong, informed endorsement."
  },
  {
   "q": "To help a referee write a strong recommendation letter, what should you provide them?",
   "opts": [
    "Nothing, so the letter stays completely neutral",
    "Only your phone number",
    "A pre-written letter they must sign without reading",
    "The job description, your CV, and key points you hope they can highlight"
   ],
   "correct": 3,
   "exp": "Sharing the job details and your CV helps the referee tailor a relevant, specific, and compelling recommendation."
  }
 ],
 "Where to Find Public Health Jobs": [
  {
   "q": "Which website is a widely used source for humanitarian and public health job listings across Liberia and West Africa?",
   "opts": [
    "ReliefWeb",
    "A local restaurant review site",
    "A personal gaming forum",
    "A used-car marketplace"
   ],
   "correct": 0,
   "exp": "ReliefWeb is a leading platform that aggregates humanitarian and public health vacancies from NGOs, UN agencies, and INGOs."
  },
  {
   "q": "Beyond online job boards, what is an effective way for a graduate to learn about public health openings?",
   "opts": [
    "Waiting passively for employers to call",
    "Networking with professionals and staying in touch with former lecturers and colleagues",
    "Refusing to tell anyone you are job hunting",
    "Only checking jobs once a year"
   ],
   "correct": 1,
   "exp": "Many roles are filled through networks, so maintaining professional relationships surfaces opportunities that may never be advertised widely."
  },
  {
   "q": "Where would you look to find vacancies posted directly by the Government of Liberia's health sector?",
   "opts": [
    "Only through paid text-message services",
    "A random personal blog with no affiliation",
    "The Ministry of Health website and official government notice boards",
    "An international sports news site"
   ],
   "correct": 2,
   "exp": "Government health vacancies are typically announced through the Ministry of Health's official channels and public notices."
  }
 ],
 "Working with NGOs and INGOs": [
  {
   "q": "What does the acronym INGO stand for in the humanitarian and public health sector?",
   "opts": [
    "Internal National Government Office",
    "International Network of Governors",
    "Independent National Growth Organization",
    "International Non-Governmental Organization"
   ],
   "correct": 3,
   "exp": "INGO stands for International Non-Governmental Organization, referring to non-profits operating across multiple countries."
  },
  {
   "q": "Which of the following is an example of an INGO that commonly recruits public health staff in Liberia?",
   "opts": [
    "Partners in Health",
    "The local city bus company",
    "A neighborhood grocery store",
    "A private mobile phone retailer"
   ],
   "correct": 0,
   "exp": "Partners in Health is an INGO with health programming in Liberia that regularly recruits public health professionals."
  },
  {
   "q": "When applying to NGOs, why is it important to understand an organization's mission and values?",
   "opts": [
    "Because you can then ignore the job requirements",
    "So you can align your application to show genuine fit with their goals",
    "Because missions are legally confidential",
    "So you can copy their mission into your CV as your own"
   ],
   "correct": 1,
   "exp": "Aligning your application with the organization's mission demonstrates genuine commitment and a strong cultural fit."
  }
 ],
 "Ministry of Health and Government Roles": [
  {
   "q": "In Liberia's decentralized health system, which body manages health services at the local level?",
   "opts": [
    "A private insurance company",
    "The United Nations Security Council",
    "County Health Teams",
    "The national football federation"
   ],
   "correct": 2,
   "exp": "County Health Teams coordinate and deliver health services at the county level under the Ministry of Health's decentralized structure."
  },
  {
   "q": "What is often a distinctive advantage of pursuing a career within the Ministry of Health?",
   "opts": [
    "Guaranteed international travel every month",
    "The highest salary of any sector without exception",
    "Automatic exemption from any performance review",
    "Opportunity to shape national health policy and serve the public system directly"
   ],
   "correct": 3,
   "exp": "Government roles offer a direct chance to influence national health policy and strengthen the public health system."
  },
  {
   "q": "Recruitment for civil service public health posts in Liberia typically requires what?",
   "opts": [
    "Following formal application procedures, often through the Civil Service Agency and Ministry channels",
    "No documents at all, just a verbal request",
    "A personal recommendation from a foreign head of state",
    "Payment of a fee to secure the position"
   ],
   "correct": 0,
   "exp": "Government positions follow formal, merit-based procedures administered through official channels such as the Civil Service Agency."
  }
 ],
 "WHO, UN and International Agencies": [
  {
   "q": "What is the primary mandate of the World Health Organization (WHO)?",
   "opts": [
    "To sell pharmaceutical products for profit",
    "To direct and coordinate international health within the United Nations system",
    "To manage global financial markets",
    "To organize international sporting events"
   ],
   "correct": 1,
   "exp": "WHO is the UN's specialized agency responsible for directing and coordinating international public health efforts."
  },
  {
   "q": "Which UN agency focuses specifically on the health and wellbeing of children and mothers?",
   "opts": [
    "The International Monetary Fund",
    "UNESCO",
    "UNICEF",
    "The World Trade Organization"
   ],
   "correct": 2,
   "exp": "UNICEF is the UN agency dedicated to advancing the rights, health, and wellbeing of children and mothers worldwide."
  },
  {
   "q": "Where should a graduate look for entry points into UN careers such as WHO country office roles?",
   "opts": [
    "A single newspaper classified once a decade",
    "Only through word of mouth at social gatherings",
    "Random unofficial websites promising guaranteed UN jobs for a fee",
    "Official UN and agency careers portals, including UN Volunteers and Junior Professional programs"
   ],
   "correct": 3,
   "exp": "Official UN careers portals and programs like UN Volunteers and JPO schemes are legitimate entry points into UN careers."
  }
 ],
 "Fellowships, Internships and Volunteering": [
  {
   "q": "What is a key benefit of completing a public health fellowship or internship early in your career?",
   "opts": [
    "It builds practical experience, skills, and professional networks",
    "It guarantees a permanent job with no further effort",
    "It removes the need to ever update your CV again",
    "It exempts you from all future interviews"
   ],
   "correct": 0,
   "exp": "Fellowships and internships provide hands-on experience, skill development, and networks that strengthen future job prospects."
  },
  {
   "q": "A graduate volunteers with a community health outreach program while job hunting. How should this be viewed on a CV?",
   "opts": [
    "As a waste of time that should be hidden",
    "As valuable relevant experience demonstrating skills and commitment",
    "As something only worth mentioning if paid",
    "As irrelevant unless it was overseas"
   ],
   "correct": 1,
   "exp": "Volunteering demonstrates real skills, initiative, and commitment, making it valuable and worth featuring on a CV."
  },
  {
   "q": "Which is an example of a well-known fellowship relevant to public health professionals in Africa?",
   "opts": [
    "A one-day social media challenge",
    "A local weekend cooking class",
    "The Africa CDC Kofi Annan Global Health Leadership Fellowship",
    "A neighborhood raffle draw"
   ],
   "correct": 2,
   "exp": "The Africa CDC fellowship is a recognized structured program that develops public health leadership across the continent."
  }
 ],
 "Networking for Public Health Professionals": [
  {
   "q": "What is the most accurate description of professional networking?",
   "opts": [
    "Demanding favors from as many strangers as possible",
    "Collecting business cards without ever following up",
    "Only speaking to people who can give you a job today",
    "Building genuine, mutually beneficial relationships within your field over time"
   ],
   "correct": 3,
   "exp": "Effective networking is about cultivating authentic, reciprocal professional relationships rather than one-off transactional requests."
  },
  {
   "q": "How can attending a public health conference in the region support your career?",
   "opts": [
    "It lets you meet peers, learn new developments, and form useful connections",
    "It is purely for tourism with no professional value",
    "It automatically results in a promotion",
    "It replaces the need for any qualifications"
   ],
   "correct": 0,
   "exp": "Conferences expose you to new knowledge and peers, creating relationships and visibility that advance your career."
  },
  {
   "q": "After meeting a senior epidemiologist at an event, what is a good networking follow-up?",
   "opts": [
    "Never contact them again to avoid bothering them",
    "Send a brief, polite message thanking them and referencing your conversation",
    "Immediately ask them to give you their own job",
    "Add them then send twenty messages the same day"
   ],
   "correct": 1,
   "exp": "A courteous, specific follow-up reinforces the connection and keeps the relationship warm without being demanding."
  }
 ],
 "Using Job Boards and Alerts": [
  {
   "q": "What is the main advantage of setting up job alerts on a platform like ReliefWeb or LinkedIn?",
   "opts": [
    "It writes your applications automatically for you",
    "It guarantees you will be hired for any listed role",
    "It notifies you of relevant new vacancies so you can apply promptly",
    "It hides jobs from other applicants"
   ],
   "correct": 2,
   "exp": "Job alerts deliver timely notifications of matching vacancies, helping you apply early before deadlines pass."
  },
  {
   "q": "When configuring a job alert for public health roles, which approach yields the most useful results?",
   "opts": [
    "Using no keywords at all so you see every job on earth",
    "Disabling all filters and email notifications",
    "Only searching for the single word job",
    "Using specific keywords and filters like public health, Liberia, and monitoring and evaluation"
   ],
   "correct": 3,
   "exp": "Specific keywords and filters narrow results to genuinely relevant roles, saving time and improving match quality."
  },
  {
   "q": "Why should you still verify a vacancy's legitimacy even when it appears on a job board?",
   "opts": [
    "Because scams exist, and legitimate employers never ask for payment to apply",
    "Because all job boards are completely fake",
    "Because verifying is legally required before reading any post",
    "Because job boards only list expired positions"
   ],
   "correct": 0,
   "exp": "Verifying protects you from scams, and a genuine employer will never require payment as a condition of applying."
  }
 ],
 "Preparing for a Public Health Interview": [
  {
   "q": "You have an interview next week for an M&E Officer role with a county health team in Bong County. Which preparation step will most directly help you answer questions about the organization's work?",
   "opts": [
    "Memorizing the entire Ministry of Health organogram",
    "Researching the organization's current projects, funders, and recent reports",
    "Preparing a list of salary demands to open with",
    "Buying a new phone to take notes during the interview"
   ],
   "correct": 1,
   "exp": "Researching the organization's active projects, donors, and published reports lets you tailor your answers and show genuine, informed interest."
  },
  {
   "q": "What is the best way to prepare specific evidence of your accomplishments before an interview?",
   "opts": [
    "Rely on memory to recall achievements on the spot",
    "List only your academic grades and certificates",
    "Prepare 4 to 6 concrete stories with measurable results you can adapt to different questions",
    "Prepare one very long story covering your whole career"
   ],
   "correct": 2,
   "exp": "Having several concise, result-focused stories ready lets you match relevant evidence to whatever the interviewer asks."
  },
  {
   "q": "Why should a candidate prepare thoughtful questions to ask the interviewer at the end?",
   "opts": [
    "It is a legal requirement in most NGOs",
    "It fills time so the interview lasts longer",
    "It allows the candidate to avoid answering difficult questions",
    "It signals genuine interest and helps the candidate assess the role and organization"
   ],
   "correct": 3,
   "exp": "Well-prepared questions demonstrate engagement and help you judge whether the role and organization are a good fit for you."
  }
 ],
 "Common Interview Questions and Answers": [
  {
   "q": "When asked \"Tell me about yourself\" in a public health interview, the strongest response is:",
   "opts": [
    "A focused summary of your relevant experience, skills, and why you fit this role",
    "A detailed account of your childhood and family background",
    "A complaint about how your last employer treated you",
    "A recitation of your full CV line by line"
   ],
   "correct": 0,
   "exp": "A concise, role-relevant summary of your experience and fit keeps the answer professional and shows why you suit the position."
  },
  {
   "q": "An interviewer asks about your greatest weakness. What is the most effective approach?",
   "opts": [
    "Claim you have no weaknesses",
    "Name a genuine weakness and describe concrete steps you are taking to improve it",
    "Give a strength disguised as a weakness, such as being a perfectionist",
    "Blame the weakness on poor training at your previous job"
   ],
   "correct": 1,
   "exp": "Naming a real weakness alongside the steps you take to address it shows self-awareness and a commitment to growth."
  },
  {
   "q": "For the question \"Why do you want to work for us?\", the best answer connects:",
   "opts": [
    "Your need for any job to pay your bills",
    "The generous salary and allowances the role offers",
    "The organization's mission and work to your own skills and career goals",
    "The short commute from your home to the office"
   ],
   "correct": 2,
   "exp": "Linking the organization's mission to your skills and goals shows you have researched them and are motivated by more than convenience."
  }
 ],
 "Behavioral (STAR) Interviews": [
  {
   "q": "In the STAR method for answering behavioral questions, what do the four letters stand for?",
   "opts": [
    "Situation, Target, Analysis, Recommendation",
    "Strategy, Timeline, Assessment, Report",
    "Skill, Talent, Attitude, Reference",
    "Situation, Task, Action, Result"
   ],
   "correct": 3,
   "exp": "STAR stands for Situation, Task, Action, and Result, giving a structured way to describe past experiences."
  },
  {
   "q": "A candidate describes a data-quality problem during a measles campaign but never says what they actually did about it. Which part of STAR is missing?",
   "opts": [
    "Action",
    "Task",
    "Situation",
    "Result"
   ],
   "correct": 0,
   "exp": "The Action step describes the specific things the candidate personally did, which is missing here."
  },
  {
   "q": "Which of these is the strongest \"Result\" statement in a STAR answer?",
   "opts": [
    "The team worked very hard and everyone was happy",
    "We reduced data-entry errors by 40 percent within two months and cut reporting delays",
    "Things improved a lot after my involvement",
    "The supervisor said I did a good job on the project"
   ],
   "correct": 1,
   "exp": "A strong Result is specific and measurable, such as a 40 percent error reduction, rather than vague or opinion-based."
  }
 ],
 "Technical and Case Interviews": [
  {
   "q": "In a technical interview for a data role, you are asked to explain how you would clean a messy KoBoToolbox dataset. The best answer first:",
   "opts": [
    "Immediately starts running statistical tests",
    "Deletes any row that looks unusual without checking",
    "Describes checking for missing values, duplicates, outliers, and inconsistent codes before analysis",
    "States that clean data is the responsibility of field staff only"
   ],
   "correct": 2,
   "exp": "Systematically checking for missing values, duplicates, outliers, and coding inconsistencies is the foundation of data cleaning before analysis."
  },
  {
   "q": "During a case interview you are asked how to estimate the number of children needing vaccination in a rural district with no census. The best approach is to:",
   "opts": [
    "Refuse to answer because the data does not exist",
    "Insist that only the Ministry of Health can provide the figure",
    "Guess a single round number quickly",
    "Break the problem into assumptions, such as population size and proportion under five, and reason step by step"
   ],
   "correct": 3,
   "exp": "Case interviews assess structured reasoning, so breaking the estimate into stated assumptions and working through them logically is what interviewers want to see."
  },
  {
   "q": "When you do not know the answer to a technical question during an interview, the most professional response is to:",
   "opts": [
    "Explain your reasoning, state what you would do to find out, and stay honest",
    "Stay silent until the interviewer moves on",
    "Pretend you know and give a confident but wrong answer",
    "End the interview immediately"
   ],
   "correct": 0,
   "exp": "Honestly reasoning through the problem and explaining how you would find the answer shows integrity and problem-solving ability."
  }
 ],
 "Virtual and Panel Interviews": [
  {
   "q": "Before a virtual interview on Zoom for an INGO position, which technical check is most important?",
   "opts": [
    "Setting a colorful animated background",
    "Testing your internet connection, camera, microphone, and finding a quiet, well-lit space",
    "Memorizing the interviewer's full biography",
    "Turning off your camera to save bandwidth throughout"
   ],
   "correct": 1,
   "exp": "Testing your connection, audio, video, and environment beforehand prevents technical disruptions that could undermine your interview."
  },
  {
   "q": "In a panel interview with several county health team members, how should you handle answering a question asked by one panelist?",
   "opts": [
    "Look only at the person who asked and ignore the others",
    "Ask the most senior person to repeat the question first",
    "Answer to the asker but make eye contact with the whole panel as you respond",
    "Direct your full answer only to the most senior panelist"
   ],
   "correct": 2,
   "exp": "Addressing the asker while including the whole panel with your gaze shows respect and engages everyone in the room."
  },
  {
   "q": "During a virtual interview your internet briefly cuts out mid-answer. The best response when reconnected is to:",
   "opts": [
    "Pretend nothing happened and continue from a random point",
    "Blame the interviewer's connection for the problem",
    "End the call and reschedule for another week",
    "Apologize briefly, confirm where you were cut off, and continue calmly"
   ],
   "correct": 3,
   "exp": "A brief apology and calmly confirming where to resume keeps the interview professional and on track."
  }
 ],
 "Salary Negotiation": [
  {
   "q": "When is generally the best time to discuss specific salary figures during a hiring process?",
   "opts": [
    "After you have received a job offer or when the employer raises it",
    "In the very first minute of the first interview",
    "Before you have even submitted your application",
    "Only after you have already signed the contract"
   ],
   "correct": 0,
   "exp": "Negotiating once an offer is on the table gives you the most leverage, because the employer has already decided they want you."
  },
  {
   "q": "How should you decide on a reasonable salary range to request for an M&E role with a Monrovia-based NGO?",
   "opts": [
    "Ask for the highest figure you can imagine regardless of the market",
    "Research typical pay for similar roles, your experience, and the organization's sector",
    "Accept whatever is first offered without any research",
    "Base it only on what a friend earns in a different country"
   ],
   "correct": 1,
   "exp": "Grounding your range in market rates, your experience, and the sector makes your request credible and realistic."
  },
  {
   "q": "If an NGO says its salary scale is fixed and cannot be changed, a good negotiation strategy is to:",
   "opts": [
    "Walk away from the offer immediately",
    "Demand the fixed figure be doubled anyway",
    "Explore non-salary benefits such as training, transport, or professional development",
    "Accept and complain about it to colleagues later"
   ],
   "correct": 2,
   "exp": "When base pay is fixed, negotiating benefits like training, allowances, or development opportunities can still improve the overall package."
  }
 ],
 "Following Up After an Interview": [
  {
   "q": "What is the recommended timing for sending a thank-you message after an interview?",
   "opts": [
    "Never, because it appears desperate",
    "At least two weeks later so you do not seem eager",
    "Only after you have received the final decision",
    "Within about 24 hours of the interview"
   ],
   "correct": 3,
   "exp": "Sending a thank-you note within roughly 24 hours keeps you fresh in the interviewer's mind and shows professionalism."
  },
  {
   "q": "A strong post-interview thank-you email should include:",
   "opts": [
    "Appreciation for their time and a brief reminder of your fit for the role",
    "A demand for an immediate hiring decision",
    "A long list of all your grievances about the process",
    "A request to lower the job's requirements for you"
   ],
   "correct": 0,
   "exp": "Thanking the interviewer and briefly reinforcing your suitability reminds them of your value without being pushy."
  },
  {
   "q": "If two weeks pass after the stated decision date with no response, the most appropriate action is to:",
   "opts": [
    "Call the office repeatedly every day until they answer",
    "Send one polite follow-up email asking for a status update",
    "Post publicly on social media complaining about the delay",
    "Assume rejection and never contact them again"
   ],
   "correct": 1,
   "exp": "A single polite follow-up email after the expected date shows continued interest while respecting the employer's process."
  }
 ],
 "Monitoring and Evaluation (M&E)": [
  {
   "q": "In an M&E logframe, which of these is an example of an indicator rather than an outcome?",
   "opts": [
    "Improved maternal health in the county",
    "Mothers feel more supported by health workers",
    "Percentage of pregnant women attending at least four antenatal care visits",
    "The community values skilled birth attendance"
   ],
   "correct": 2,
   "exp": "An indicator is a specific, measurable metric such as the percentage of women completing four ANC visits, unlike the broader outcome statement."
  },
  {
   "q": "What is the key difference between monitoring and evaluation?",
   "opts": [
    "Monitoring is done once at the end; evaluation is continuous",
    "Monitoring is only for donors; evaluation is only for staff",
    "They are two words for exactly the same activity",
    "Monitoring tracks ongoing progress routinely; evaluation assesses results and impact at specific points"
   ],
   "correct": 3,
   "exp": "Monitoring is the continuous routine tracking of activities, while evaluation periodically judges whether outcomes and impact were achieved."
  },
  {
   "q": "In a results chain, which sequence is correct from start to end?",
   "opts": [
    "Input, Activity, Output, Outcome, Impact",
    "Impact, Outcome, Output, Activity, Input",
    "Output, Input, Activity, Impact, Outcome",
    "Activity, Input, Impact, Output, Outcome"
   ],
   "correct": 0,
   "exp": "The standard results chain flows from Inputs to Activities to Outputs to Outcomes and finally to Impact."
  }
 ],
 "Project and Program Management": [
  {
   "q": "A project manager at a county health program creates a schedule showing tasks, durations, and dependencies over time. This tool is a:",
   "opts": [
    "Logframe",
    "Gantt chart",
    "Balance sheet",
    "SWOT analysis"
   ],
   "correct": 1,
   "exp": "A Gantt chart displays tasks against a timeline with their durations and dependencies, making it ideal for scheduling."
  },
  {
   "q": "Which set best describes the classic triple constraint in project management?",
   "opts": [
    "Inputs, outputs, and outcomes",
    "Staff, donors, and vehicles",
    "Scope, time, and cost",
    "Risk, quality, and reporting"
   ],
   "correct": 2,
   "exp": "The triple constraint balances scope, time, and cost, and changing one usually affects the others."
  },
  {
   "q": "During implementation of an immunization project, a key supplier of cold-chain equipment is delayed. The best project-management response is to:",
   "opts": [
    "Ignore it and hope it resolves itself",
    "Wait until the donor report is due to mention it",
    "Cancel the entire project immediately",
    "Consult the risk register and activate a mitigation plan such as an alternative supplier"
   ],
   "correct": 3,
   "exp": "Good project management anticipates such risks in a risk register and responds with a prepared mitigation plan rather than ignoring the problem."
  }
 ],
 "Grant and Proposal Writing": [
  {
   "q": "In a grant proposal, the section that explains the specific issue your project will address and why it matters is the:",
   "opts": [
    "Problem statement or needs assessment",
    "Budget narrative",
    "Executive summary of the organization",
    "Sustainability plan"
   ],
   "correct": 0,
   "exp": "The problem statement or needs assessment defines the specific issue and justifies why the project is needed."
  },
  {
   "q": "A donor asks that your objectives be SMART. Which objective best meets that standard?",
   "opts": [
    "Improve health in the county soon",
    "Train 120 community health volunteers in ORS use across 3 districts by December 2026",
    "Help as many people as possible whenever we can",
    "Reduce disease significantly over the coming years"
   ],
   "correct": 1,
   "exp": "The objective naming a number, activity, location, and deadline is Specific, Measurable, Achievable, Relevant, and Time-bound."
  },
  {
   "q": "Why is a sustainability plan important in a proposal to a funder like WHO or a bilateral donor?",
   "opts": [
    "It guarantees the project will never need money again",
    "It replaces the need for a budget",
    "It shows how benefits will continue after donor funding ends",
    "It is only decorative and rarely read"
   ],
   "correct": 2,
   "exp": "A sustainability plan demonstrates how project benefits will be maintained after the grant period ends, which funders value highly."
  }
 ],
 "Report Writing": [
  {
   "q": "In a public health project report, the section that gives a brief, standalone overview of the whole report for busy decision-makers is the:",
   "opts": [
    "Annexes",
    "Methodology",
    "Reference list",
    "Executive summary"
   ],
   "correct": 3,
   "exp": "The executive summary provides a concise overview of the report so that busy readers can grasp the key points quickly."
  },
  {
   "q": "When presenting quarterly indicator data in a report, the most effective practice is to:",
   "opts": [
    "Use clear tables or charts with a short interpretation of what the data mean",
    "Include every raw data record in the main text",
    "Write only long paragraphs of numbers with no visuals",
    "Leave out targets so results always look positive"
   ],
   "correct": 0,
   "exp": "Presenting data in clear tables or charts with a brief interpretation helps readers understand results at a glance."
  },
  {
   "q": "Which of these best reflects good practice for the recommendations section of an M&E report?",
   "opts": [
    "Recommendations unrelated to the findings",
    "Actionable recommendations that follow directly from the report's findings",
    "A restatement of the introduction word for word",
    "Only recommendations that require more funding"
   ],
   "correct": 1,
   "exp": "Recommendations should flow logically from the findings and be actionable so readers know what to do next."
  }
 ],
 "Data Collection Tools (KoBoToolbox & ODK)": [
  {
   "q": "In KoBoToolbox or ODK, which feature helps prevent enumerators from entering an age of 250 years?",
   "opts": [
    "A skip logic on the name field",
    "Changing the question to a text type",
    "A validation constraint setting an allowed numeric range",
    "Adding a photo question instead"
   ],
   "correct": 2,
   "exp": "A validation constraint restricts entries to an allowed range, blocking impossible values like an age of 250."
  },
  {
   "q": "What does \"skip logic\" (relevance) do in a KoBoToolbox form?",
   "opts": [
    "Automatically submits the form to the server",
    "Translates the form into another language",
    "Deletes all responses that contain errors",
    "Shows or hides questions based on previous answers"
   ],
   "correct": 3,
   "exp": "Skip logic, or relevance, displays or hides questions depending on earlier responses, keeping surveys efficient and relevant."
  },
  {
   "q": "A key advantage of collecting data with KoBoToolbox or ODK on mobile devices instead of paper is that they:",
   "opts": [
    "Allow offline data collection and reduce transcription errors from paper entry",
    "Never require any staff training",
    "Guarantee that respondents always tell the truth",
    "Remove the need for any data cleaning afterward"
   ],
   "correct": 0,
   "exp": "Mobile tools like KoBoToolbox and ODK support offline collection and reduce the transcription errors that come with re-entering paper forms."
  }
 ],
 "Data Analysis with Excel and SPSS": [
  {
   "q": "In Excel, which function would you use to count how many survey respondents in a column selected \"Yes\"?",
   "opts": [
    "SUM",
    "COUNTIF",
    "VLOOKUP",
    "CONCATENATE"
   ],
   "correct": 1,
   "exp": "COUNTIF counts the cells that meet a specified condition, such as those equal to \"Yes\"."
  },
  {
   "q": "In SPSS, which variable measurement level should you assign to a variable coded 1 for male and 2 for female?",
   "opts": [
    "Scale",
    "Ordinal",
    "Nominal",
    "Continuous"
   ],
   "correct": 2,
   "exp": "Sex has categories with no inherent order, so it is a nominal variable even though it is coded with numbers."
  },
  {
   "q": "You want to compare mean antenatal-visit counts between two counties in SPSS to see if the difference is statistically significant. A suitable test is:",
   "opts": [
    "A CONCATENATE formula",
    "A pie chart",
    "A frequency table only",
    "An independent-samples t-test"
   ],
   "correct": 3,
   "exp": "An independent-samples t-test compares the means of a continuous variable between two independent groups."
  }
 ],
 "Community Engagement and Mobilization": [
  {
   "q": "Before launching a hygiene-promotion campaign in a rural community, the most important first step for meaningful engagement is to:",
   "opts": [
    "Consult community leaders and members to understand local needs and gain trust",
    "Deliver a fixed message decided entirely at head office",
    "Distribute flyers only, in English, and leave",
    "Wait until the campaign fails before involving the community"
   ],
   "correct": 0,
   "exp": "Consulting community leaders and members first builds trust and ensures the campaign responds to real local needs."
  },
  {
   "q": "Why are community health volunteers or town criers often central to mobilization in Liberian communities?",
   "opts": [
    "They are cheaper than printing any materials",
    "They are trusted local voices who can reach people in their own language and context",
    "They eliminate the need for any health facilities",
    "They only work with international staff"
   ],
   "correct": 1,
   "exp": "Trusted local figures can communicate in the community's own language and context, making health messages more credible and accepted."
  },
  {
   "q": "Which approach best reflects genuine community participation rather than token involvement?",
   "opts": [
    "Informing the community of decisions already finalized",
    "Collecting signatures only for a donor report",
    "Involving community members in planning, decisions, and feedback throughout the project",
    "Inviting the community to a single closing ceremony"
   ],
   "correct": 2,
   "exp": "Genuine participation means engaging community members in planning, decision-making, and feedback across the whole project, not just informing them."
  }
 ],
 "Building Data Dashboards": [
  {
   "q": "The primary purpose of a data dashboard for a county health team is to:",
   "opts": [
    "Store the raw survey forms permanently",
    "Serve as a backup of the SPSS software",
    "Replace the need to collect any data",
    "Present key indicators visually so managers can monitor performance at a glance"
   ],
   "correct": 3,
   "exp": "A dashboard visualizes key indicators so decision-makers can quickly monitor performance and spot issues."
  },
  {
   "q": "When choosing a chart to show the trend of monthly malaria cases over a year, the best option is usually a:",
   "opts": [
    "Line chart",
    "Pie chart",
    "Single large number",
    "Word cloud"
   ],
   "correct": 0,
   "exp": "A line chart is ideal for showing how a value changes over time, such as monthly case counts across a year."
  },
  {
   "q": "Which design practice makes a health dashboard most effective for its users?",
   "opts": [
    "Cramming as many charts as possible onto one screen",
    "Focusing on a few key indicators with clear labels and consistent colors",
    "Using a different color scheme for every single chart",
    "Hiding the reporting period and data source"
   ],
   "correct": 1,
   "exp": "Focusing on a few key indicators with clear labels and consistent colors keeps the dashboard readable and actionable."
  }
 ],
 "Scientific and Technical Writing": [
  {
   "q": "In a scientific manuscript following the IMRaD structure, where should you state whether your intervention significantly reduced malaria incidence?",
   "opts": [
    "Introduction",
    "Methods",
    "Results",
    "Acknowledgements"
   ],
   "correct": 2,
   "exp": "The Results section reports the findings and statistical outcomes, while interpretation of their meaning belongs in the Discussion."
  },
  {
   "q": "A Ministry of Health officer is writing a surveillance report and wants the language to be clear and professional. Which sentence best reflects good technical writing?",
   "opts": [
    "It was felt by us that maybe the numbers might be going up a bit.",
    "Cases did a big jump recently which is not good at all for us.",
    "The situation regarding cases is honestly quite alarming and terrible.",
    "Confirmed cholera cases increased from 12 to 47 between weeks 3 and 6."
   ],
   "correct": 3,
   "exp": "Good technical writing is precise, concrete, and quantified, stating exactly what changed and over what period without vague or emotive language."
  },
  {
   "q": "Why is it important to cite sources properly in a technical public health document?",
   "opts": [
    "To give credit, allow verification, and avoid plagiarism",
    "To make the document longer and appear more scholarly",
    "Because reviewers require at least 50 references",
    "To hide weaknesses in your own data"
   ],
   "correct": 0,
   "exp": "Citation credits original authors, lets readers verify claims, and protects the writer from plagiarism, which is the ethical and scholarly standard."
  }
 ],
 "Presenting Data and Findings": [
  {
   "q": "You want to show how the proportion of fully immunized children differs across Liberia's 15 counties. Which chart type is most appropriate?",
   "opts": [
    "A single pie chart with 15 slices",
    "A bar chart comparing counties",
    "A line graph with counties on the x-axis",
    "A scatter plot of two immunization variables"
   ],
   "correct": 1,
   "exp": "A bar chart is best for comparing a single measure across many discrete categories, whereas a 15-slice pie chart is hard to read."
  },
  {
   "q": "What is the main purpose of a well-designed data visualization in a public health presentation?",
   "opts": [
    "To display every data point you collected",
    "To make the slide look colorful and busy",
    "To communicate a clear message quickly to the audience",
    "To prove how much analysis you performed"
   ],
   "correct": 2,
   "exp": "A good visualization distills data into a clear, quickly grasped message rather than overwhelming the audience with detail."
  },
  {
   "q": "When presenting a trend of maternal mortality over ten years, which practice is misleading and should be avoided?",
   "opts": [
    "Labeling the axes with units and years",
    "Using a line graph for the time trend",
    "Noting the data source below the chart",
    "Truncating the y-axis so small changes look dramatic"
   ],
   "correct": 3,
   "exp": "Truncating or manipulating the y-axis exaggerates changes and misleads the audience, undermining honest data presentation."
  }
 ],
 "Writing Policy Briefs": [
  {
   "q": "What primarily distinguishes a policy brief from a scientific journal article?",
   "opts": [
    "A policy brief targets decision-makers with concise, actionable recommendations",
    "A policy brief must be at least 20 pages long",
    "A policy brief avoids any mention of evidence",
    "A policy brief is only written by academics"
   ],
   "correct": 0,
   "exp": "A policy brief is short and aimed at busy decision-makers, translating evidence into clear, actionable recommendations rather than exhaustive academic detail."
  },
  {
   "q": "Which element is essential in an effective policy brief submitted to the Ministry of Health?",
   "opts": [
    "A detailed literature review of 100 studies",
    "Clear, specific, and feasible policy recommendations",
    "The author's full academic CV",
    "Raw data tables with no interpretation"
   ],
   "correct": 1,
   "exp": "The core value of a policy brief lies in offering clear, feasible recommendations that decision-makers can act upon."
  },
  {
   "q": "Where in a policy brief should the key message appear so a busy official grasps it immediately?",
   "opts": [
    "Only in the final paragraph",
    "Buried in the methods section",
    "In an executive summary or up front",
    "In a footnote"
   ],
   "correct": 2,
   "exp": "Because officials may read only the beginning, the key message belongs in an executive summary or opening section for immediate impact."
  }
 ],
 "Public Speaking and Presentations": [
  {
   "q": "You have 10 minutes to present findings to district health officers. What is the best way to manage your slides?",
   "opts": [
    "Use 40 dense slides so nothing is left out",
    "Read every word on each slide aloud",
    "Avoid slides entirely and read from a script",
    "Use a few clear slides with key points and speak to them"
   ],
   "correct": 3,
   "exp": "A few uncluttered slides that support your spoken points keep the audience engaged and fit the time limit better than dense or read-aloud slides."
  },
  {
   "q": "Which technique most effectively reduces nervousness before speaking to a large audience?",
   "opts": [
    "Preparing and rehearsing your talk in advance",
    "Memorizing the talk word-for-word only minutes before",
    "Avoiding eye contact with everyone",
    "Speaking as fast as possible to finish quickly"
   ],
   "correct": 0,
   "exp": "Thorough preparation and rehearsal build familiarity and confidence, which are the most reliable ways to reduce speaking anxiety."
  },
  {
   "q": "During a community health talk in a rural Liberian setting, how should you handle technical jargon?",
   "opts": [
    "Use as much jargon as possible to sound expert",
    "Explain concepts in plain, accessible language",
    "Refuse to answer questions to save time",
    "Speak only in formal academic English"
   ],
   "correct": 1,
   "exp": "Communicating in plain, accessible language ensures the community audience understands the message, which is the goal of the talk."
  }
 ],
 "Facilitating Meetings and Trainings": [
  {
   "q": "What is the primary purpose of setting an agenda before a stakeholder meeting?",
   "opts": [
    "To make the meeting appear more formal",
    "To prevent participants from speaking",
    "To keep the meeting focused and use time efficiently",
    "To satisfy a bureaucratic requirement only"
   ],
   "correct": 2,
   "exp": "An agenda structures the discussion, keeps it on track, and ensures the group uses its time efficiently toward clear objectives."
  },
  {
   "q": "As a facilitator of a training for community health workers, how should you handle one participant dominating the discussion?",
   "opts": [
    "Let them continue since they seem confident",
    "End the session early to avoid conflict",
    "Publicly criticize them in front of the group",
    "Gently redirect and invite quieter participants to contribute"
   ],
   "correct": 3,
   "exp": "A skilled facilitator manages participation by tactfully redirecting dominant voices and drawing in quieter members so everyone contributes."
  },
  {
   "q": "Which practice best confirms that trainees have actually learned a new clinical skill?",
   "opts": [
    "Having them demonstrate or practice the skill",
    "Asking if everyone understood and moving on",
    "Handing out a certificate at the end",
    "Reading the manual aloud to them"
   ],
   "correct": 0,
   "exp": "Having trainees demonstrate or practice the skill provides evidence of competence, unlike simply asking whether they understood."
  }
 ],
 "Working with the Media and the Public": [
  {
   "q": "During an Ebola outbreak, a journalist asks about a rumor you cannot yet confirm. What is the best response?",
   "opts": [
    "Deny everything to avoid panic",
    "Say what is known, acknowledge uncertainty, and promise updates",
    "Refuse to speak to the media at all",
    "Speculate freely to fill the silence"
   ],
   "correct": 1,
   "exp": "Honest communication that shares confirmed facts, admits what is not yet known, and commits to updates builds public trust during a crisis."
  },
  {
   "q": "What is a key advantage of preparing clear key messages before a media interview?",
   "opts": [
    "It lets you avoid answering any questions",
    "It guarantees the story will be positive",
    "It ensures your main points are communicated accurately and consistently",
    "It replaces the need to understand the topic"
   ],
   "correct": 2,
   "exp": "Prepared key messages help you convey your most important points clearly and consistently, even if questions go in unexpected directions."
  },
  {
   "q": "Which approach best builds public trust in a health campaign against a disease outbreak?",
   "opts": [
    "Using fear and blame to force compliance",
    "Withholding bad news indefinitely",
    "Sharing information only with government officials",
    "Providing accurate, timely, and culturally respectful information"
   ],
   "correct": 3,
   "exp": "Accurate, timely, and culturally respectful communication fosters trust and cooperation, which is essential to an effective health campaign."
  }
 ],
 "Continuing Education and Certifications": [
  {
   "q": "Why do many public health professionals pursue continuing education throughout their careers?",
   "opts": [
    "To keep skills current with evolving evidence and practice",
    "Certificates are only needed once at graduation",
    "It is legally forbidden to stop learning",
    "Employers ignore additional qualifications"
   ],
   "correct": 0,
   "exp": "Continuing education keeps professionals up to date as evidence, technologies, and guidelines evolve, maintaining competence over a career."
  },
  {
   "q": "A field epidemiologist in West Africa wants structured, practical outbreak-response training. Which program is most relevant?",
   "opts": [
    "A creative writing certificate",
    "The Field Epidemiology Training Program (FETP)",
    "A graphic design diploma",
    "A basic typing course"
   ],
   "correct": 1,
   "exp": "The Field Epidemiology Training Program is designed specifically to build applied outbreak investigation and surveillance skills."
  },
  {
   "q": "What is a practical first step when choosing a certification to invest limited time and money in?",
   "opts": [
    "Pick the most expensive one available",
    "Choose whichever has the shortest name",
    "Align it with your career goals and recognized credibility",
    "Select one unrelated to public health for variety"
   ],
   "correct": 2,
   "exp": "Selecting a credible certification aligned with your career goals ensures your limited time and money produce real professional value."
  }
 ],
 "Applying for an MPH or PhD Abroad": [
  {
   "q": "Which component most strongly conveys your research fit and motivation in an MPH or PhD application?",
   "opts": [
    "The color of your application folder",
    "The font you choose",
    "The number of pages in your CV",
    "A well-written personal or research statement"
   ],
   "correct": 3,
   "exp": "A clear personal or research statement communicates your goals, fit, and motivation, which admissions committees weigh heavily."
  },
  {
   "q": "A Liberian graduate needs funding for a PhD abroad. Which is a well-known scholarship route to explore?",
   "opts": [
    "Chevening, Fulbright, or Mastercard Foundation scholarships",
    "Applying only with personal savings",
    "Assuming all foreign study is automatically free",
    "Waiting for a random email offer"
   ],
   "correct": 0,
   "exp": "Chevening, Fulbright, and Mastercard Foundation scholarships are established, competitive funding routes for graduate study abroad."
  },
  {
   "q": "Why should you contact potential PhD supervisors before formally applying to many programs?",
   "opts": [
    "It is required to pay them a fee",
    "To confirm research-interest alignment and possible supervision",
    "To skip the application entirely",
    "Because applications are decided by lottery"
   ],
   "correct": 1,
   "exp": "Reaching out early confirms that a supervisor shares your research interests and has capacity, which strengthens a PhD application."
  }
 ],
 "Leadership and Management Skills": [
  {
   "q": "What best distinguishes leadership from management in a health program?",
   "opts": [
    "Management is only for junior staff",
    "They are identical terms with no difference",
    "Leadership sets vision and inspires; management organizes resources and tasks",
    "Leadership means never delegating"
   ],
   "correct": 2,
   "exp": "Leadership focuses on vision and motivating people, while management focuses on organizing resources and processes; effective programs need both."
  },
  {
   "q": "A county health team leader notices declining staff morale. Which action best reflects good leadership?",
   "opts": [
    "Ignore it and hope it improves",
    "Blame the staff publicly for poor results",
    "Threaten dismissals to enforce discipline",
    "Listen to staff concerns and address them collaboratively"
   ],
   "correct": 3,
   "exp": "Good leaders listen to their team and address concerns collaboratively, which rebuilds morale and trust more effectively than threats."
  },
  {
   "q": "Why is delegation an important management skill for a program manager?",
   "opts": [
    "It develops staff and lets the manager focus on priorities",
    "It shifts blame onto subordinates",
    "It means avoiding all responsibility",
    "It is only used when a manager is lazy"
   ],
   "correct": 0,
   "exp": "Effective delegation builds staff capacity and frees the manager to concentrate on higher-level priorities, strengthening the whole team."
  }
 ],
 "Professional Ethics and Integrity": [
  {
   "q": "A supervisor pressures you to alter program data to show better coverage results for a donor report. What is the ethical response?",
   "opts": [
    "Change the data since the supervisor ordered it",
    "Refuse and report the honest figures",
    "Delete the data so no one can check",
    "Report inflated numbers only to that one donor"
   ],
   "correct": 1,
   "exp": "Integrity requires reporting honest data and refusing to falsify results, even under pressure from a superior."
  },
  {
   "q": "Which situation represents a conflict of interest that should be disclosed?",
   "opts": [
    "Attending a routine staff meeting",
    "Reading a published research article",
    "Recommending a supplier in which you hold a financial stake",
    "Taking your approved annual leave"
   ],
   "correct": 2,
   "exp": "A personal financial stake in a supplier you recommend is a conflict of interest that must be disclosed to preserve transparency and trust."
  },
  {
   "q": "Why is protecting the confidentiality of patient health records an ethical obligation?",
   "opts": [
    "It makes records harder to organize",
    "It allows staff to avoid documentation",
    "It is only important for wealthy patients",
    "It respects privacy and maintains trust in the health system"
   ],
   "correct": 3,
   "exp": "Safeguarding confidentiality respects patient privacy and sustains public trust, which is a core ethical duty in health care."
  }
 ],
 "Mentorship: Finding and Being a Mentor": [
  {
   "q": "What is the most useful quality to look for when choosing a professional mentor?",
   "opts": [
    "Someone with relevant experience willing to guide you",
    "Someone who shares your exact age",
    "Someone who will do your work for you",
    "Someone who lives in the same town only"
   ],
   "correct": 0,
   "exp": "An effective mentor has relevant experience and the willingness to guide your growth, which matters far more than age or location."
  },
  {
   "q": "As a mentee, how can you make the mentoring relationship most productive?",
   "opts": [
    "Wait passively for the mentor to solve everything",
    "Come prepared with specific goals and questions",
    "Contact the mentor only when in crisis",
    "Expect the mentor to find you a job directly"
   ],
   "correct": 1,
   "exp": "Mentees who arrive with clear goals and specific questions make the relationship focused and productive, respecting the mentor's time."
  },
  {
   "q": "What is a key benefit that mentors themselves often gain from mentoring others?",
   "opts": [
    "A guaranteed salary increase",
    "Complete control over the mentee's career",
    "Reflection, leadership growth, and fresh perspectives",
    "Freedom from all their own responsibilities"
   ],
   "correct": 2,
   "exp": "Mentoring helps mentors sharpen leadership skills, reflect on their own practice, and gain fresh perspectives from those they guide."
  }
 ],
 "Work-Life Balance and Avoiding Burnout": [
  {
   "q": "Which set of signs is most characteristic of professional burnout?",
   "opts": [
    "Increased energy and enthusiasm",
    "Improved concentration and mood",
    "A sudden desire for more overtime",
    "Chronic exhaustion, cynicism, and reduced effectiveness"
   ],
   "correct": 3,
   "exp": "Burnout is defined by emotional exhaustion, cynicism or detachment, and a decline in professional effectiveness."
  },
  {
   "q": "An outbreak-response worker has been on call for weeks without rest. Which is the healthiest strategy to prevent burnout?",
   "opts": [
    "Set boundaries, rest, and seek support when overloaded",
    "Skip all breaks to prove dedication",
    "Rely on caffeine to work longer hours",
    "Hide the stress and never ask for help"
   ],
   "correct": 0,
   "exp": "Setting boundaries, taking rest, and seeking support are proven strategies to sustain wellbeing and prevent burnout."
  },
  {
   "q": "Why is protecting work-life balance important for long-term career success, not just personal wellbeing?",
   "opts": [
    "It has no effect on job performance",
    "Sustained wellbeing supports better performance and career longevity",
    "It signals a lack of commitment to employers",
    "It only benefits people who dislike their jobs"
   ],
   "correct": 1,
   "exp": "Maintaining balance sustains energy and focus over time, supporting stronger performance and a longer, more successful career."
  }
 ],
 "Building a Lasting Professional Network": [
  {
   "q": "What is the most effective mindset for building a lasting professional network?",
   "opts": [
    "Collect as many contacts as possible and never follow up",
    "Only contact people when you need a favor",
    "Focus on genuine, mutually beneficial relationships over time",
    "Avoid connecting with peers at your own level"
   ],
   "correct": 2,
   "exp": "Lasting networks are built on genuine, reciprocal relationships nurtured over time, not on one-sided or purely transactional contacts."
  },
  {
   "q": "After meeting a WHO regional officer at a conference, what is a good networking follow-up?",
   "opts": [
    "Never contact them so as not to bother them",
    "Add them to a mass marketing email list",
    "Immediately ask them for a job the next day",
    "Send a brief, personalized message referencing your conversation"
   ],
   "correct": 3,
   "exp": "A short, personalized follow-up referencing your conversation reinforces the connection and keeps the relationship warm and genuine."
  },
  {
   "q": "How can professional associations help a public health graduate build their network?",
   "opts": [
    "They offer events, resources, and connections in the field",
    "They isolate members from one another",
    "They only benefit senior staff",
    "They discourage collaboration among members"
   ],
   "correct": 0,
   "exp": "Professional associations provide conferences, resources, and peer connections that expand a graduate's professional network in the field."
  }
 ]
};

})();
