/* TIH — authored per-topic quiz questions for a single course.
   Split out of the 567 KB topic-quizzes.js, which the course player loaded
   in full even for the 20 courses that have no entry in it. The curriculum
   builder reads this at build time, so the loader fetches it first. */
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

})();
