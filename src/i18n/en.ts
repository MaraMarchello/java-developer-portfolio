export const en = {
  // Terminal Commands
  terminal: {
    prompt: "developer@portfolio:~$",
    placeholder: "Type 'help' for available commands",
    scrollHint: "Scroll down for quick overview",
    commandNotFound: "Command not found: {command}. Type 'help' for available commands.",
    
    // Command responses
    responses: {
      themeChanged: {
        dark: "Theme switched to dark mode 🌙",
        light: "Theme switched to light mode ☀️",
        toggle: "Theme toggled to {mode} mode {icon}"
      },
      currentTheme: "Current theme: {theme} {icon}",
      currentLanguage: "Current language: {language} {flag}",
      languageChanged: {
        en: "Language switched to English 🇺🇸",
        es: "Language switched to Spanish 🇪🇸",
        toggle: "Language toggled to {language} {flag}"
      },
      searchUsage: "Usage: find [keyword] - Search through portfolio content",
      searchNoResults: "No results found for \"{keyword}\"",
      searchResults: "Found {count} result(s) for \"{keyword}\":",
      searchMoreResults: "... and {count} more results",
      dateTime: "{date} {time}",
      downloadingResume: "Downloading resume... 📄",
      downloadingCV: "Downloading Marat_Nurmukhametov_Resume.pdf... 📄",
      connectingGithub: "Connecting to GitHub... 🐙",
      fetchingLinkedin: "Fetching LinkedIn profile... 💼",
      openingContactForm: "Opening contact form...",
      openingEnhancedForm: "Opening enhanced contact form with elevated privileges... 🔐",
      areYouSureExit: "Are you sure you want to leave? 🤔",
      scrollingToSection: {
        about: "Scrolling to About section...",
        timeline: "Scrolling to Timeline section...",
        skills: "Scrolling to Skills section...",
        projects: "Scrolling to Projects section...",
        contact: "Scrolling to Contact section..."
      }
    },

    // Help command
    help: {
      title: "Available commands:",
      commands: {
        "ls -la": "list portfolio sections",
        "cat [file]": "navigate to section",
        "git log": "show timeline",
        "whoami": "show about section",
        "hire me": "open contact form",
        "sudo hire-me": "enhanced contact form",
        "clear": "clear terminal",
        "help": "show this help",
        "theme [mode]": "dark/light/toggle/status",
        "lang [code]": "en/es/toggle/status",
        "find [keyword]": "search portfolio",
        "tree": "show portfolio structure",
        "date": "show current date/time",
        "ssh github": "open GitHub profile",
        "curl linkedin": "open LinkedIn profile",
        "download resume": "download CV/resume PDF",
        "wget resume": "download CV/resume PDF",
        "matrix": "enter the matrix",
        "cowsay [msg]": "ASCII cow says message",
        "fortune": "random programming quote",
        "sl": "surprise train",
        "hack": "hacking simulation",
        "exit": "leave portfolio"
      }
    }
  },

  // Portfolio Content
  portfolio: {
    title: "Junior Java Developer",
    name: "Marat Nurmukhametov",
    location: "Spain",
    
    about: {
      title: "Junior Java Developer",
      subtitle: "I don't just write code. I create reliable, scalable systems that generate profit. My experience building a business from scratch in a foreign country and managing a remote team taught me the main thing: any task is a system. It needs to be designed, optimized and scaled.",
      
      aboutMe: "About Me",
      
      myGoal: "My Goal",
      goalText: "My goal is not just to find a job, but to become your most reliable investment asset for the next few years. Ready to prove it on complex tasks from day one.",
      
      whatYouGet: "What you get",
      whatYouGetSubtitle: "By accepting me into the team, you get:",
      
      benefits: {
        productMinded: {
          title: "Product-minded developer",
          description: "I won't blindly follow specifications. I will think about how this feature will affect business processes, customer experience and your profit, because I have made such decisions myself on my project."
        },
        engineer: {
          title: "Engineer, not coder",
          description: "I built three houses with my own hands. I know what it means to lay a solid foundation (clean architecture, thoughtful database) and not skimp on 'load-bearing walls' (tests, security, documentation). My code is not a draft, it's a capital construction."
        },
        flexible: {
          title: "Flexible and resilient employee",
          description: "I moved to new countries, learned languages and started from scratch. Uncertainty, complex tasks and the need to quickly master new things are my natural environment. Your stack or processes change quickly? For me, this is not a problem, but an opportunity."
        },
        bridge: {
          title: "Bridge between departments",
          description: "I speak 5 human languages and now I'm mastering the language of machines. I can translate business and management requirements into technical specifications, and technical limitations into understandable business arguments."
        }
      },
      
      principles: {
        title: "My work principles:",
        tdd: {
          title: "Test-driven development",
          description: "Tests first, then code. This is a quality guarantee."
        },
        learning: {
          title: "Continuous learning",
          description: "Learning something new every day is my motto."
        },
        collaboration: {
          title: "Team collaboration",
          description: "Project success is the result of teamwork."
        },
        performance: {
          title: "Performance optimization",
          description: "Fast code - happy users."
        }
      }
    },

    timeline: {
      title: "git log --oneline",
      subtitle: "Journey through code and life",
      entries: {
        javaMastery: "Java Backend Mastery",
        spainMigration: "Spain Migration",
        houseConstruction: "House Construction x3",
        translationEmpire: "Build Translation Empire + Family",
        universityMigration: "University + First Migration"
      },
      descriptions: {
        javaMastery: "I'm not afraid of complex tasks — I mastered Java in a foreign language at 40+, while raising two children and living in a new country",
        spainMigration: "Major life code refactoring. Moving to Spain, adapting to a new culture and language.",
        houseConstruction: "If I can build a house from scratch — I can build a scalable Spring Boot service. The key is a clear plan, attention to detail, and responsibility for results.",
        translationEmpire: "Creating and developing a translation business + starting a family. Scaling the team to 60+ translators, automating processes.",
        universityMigration: "I mastered 5 languages. Now I speak the language of machines. I speak English, Spanish, Russian, Uzbek, and Tatar fluently."
      },
      changes: {
        javaMastery: [
          "+ Mastered Spring Boot, Spring Security, Spring Data",
          "+ Implemented microservices architecture",
          "+ Set up CI/CD pipelines",
          "+ Learned Docker, Kubernetes",
          "+ Working with PostgreSQL, MongoDB",
          "+ REST API and GraphQL development",
          "+ React and TypeScript development"
        ],
        spainMigration: [
          "+ Moved to a new country (Spain)",
          "+ Learning Spanish language",
          "+ Adapting to new culture",
          "+ Obtaining residence permit",
          "+ Learning local traditions and customs",
          "~ Increased adaptation metrics by 150%"
        ],
        houseConstruction: [
          "+ Managing construction projects",
          "+ Planning and executing work",
          "+ Design and budget control",
          "+ Quality control at all stages",
          "+ Supplier coordination",
          "+ Obtaining permits and documentation"
        ],
        translationEmpire: [
          "+ Creating translation agency",
          "+ Scaling team to 60+ people",
          "+ Starting a family (wife, son)",
          "+ Automating business processes",
          "+ Working with large corporate clients",
          "+ Implementing CRM and PM systems",
          "+ Expanding to international markets",
          "~ Increased happiness metrics by 200%"
        ],
        universityMigration: [
          "+ Graduated from university",
          "+ Learning English language",
          "+ Obtaining bachelor's degree",
          "+ First migration (changing countries)",
          "+ Forming life principles"
        ]
      },
      stats: {
        filesChanged: "file(s) changed",
        diffStat: "Diff --stat"
      }
    },

    skills: {
      title: "package.json",
      subtitle: "Dependencies and technologies"
    },

    projects: {
      title: "ls projects/",
      subtitle: "Repositories with real projects",
      projectList: {
        microservices: {
          name: "microservices-platform",
          description: "Microservices platform with Spring Boot and Docker"
        },
        translation: {
          name: "translation-management-system", 
          description: "CRM system for translation business management"
        },
        realEstate: {
          name: "real-estate-analytics",
          description: "Analytics system for real estate management"
        }
      },
      buttons: {
        gitClone: "git clone",
        liveDemo: "Live Demo"
      }
    },

    contact: {
      title: "Contributing to My Career",
      subtitle: "My goal is not just to find a job, but to become your most reliable investment asset for the next few years. Ready to prove it on complex tasks from day one.",
      methods: "Contact methods:",
      availability: {
        openFor: "Open for: Full-time, Contract, Consulting",
        location: "Location: Spain (remote work possible)"
      },
      buttons: {
        linkedin: "💼 LinkedIn",
        email: "📧 Email", 
        phone: "📱 Phone",
        github: "🐙 GitHub"
      }
    }
  },

  // Dialog Content
  dialogs: {
    hire: {
      title: "Let's Build Something Great Together!",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        downloadResume: "Download Resume"
      }
    },
    
    sudoHire: {
      title: "🔐 Root Access Granted - Premium Contact",
      terminal: "$ sudo access --level=premium --user=employer",
      status: {
        auth: "✅ Authentication successful",
        privileges: "✅ Elevated privileges granted", 
        unlocked: "✅ Premium contact information unlocked"
      },
      info: {
        directEmail: "Direct Email:",
        whatsapp: "WhatsApp/Telegram:",
        linkedinPremium: "LinkedIn Premium:",
        githubPro: "GitHub Pro:",
        responseTime: "Response Time:",
        responseValue: "< 2 hours (business hours)",
        availability: "Availability:",
        availabilityValue: "Immediate start available"
      },
      form: {
        name: "Your Name *",
        namePlaceholder: "Company/Hiring Manager Name",
        email: "Your Email *",
        emailPlaceholder: "company@domain.com",
        projectDetails: "Project Details *",
        projectPlaceholder: "Tell me about your Java project, team size, tech stack, timeline, and budget range...",
        sendPriority: "🚀 Send Priority Message",
        downloadCV: "📄 Download CV"
      }
    },

    exit: {
      title: "Are you sure you want to leave?",
      description: "You're about to exit this amazing portfolio! Are you sure you don't want to:",
      suggestions: [
        "• Check out my projects?",
        "• See my timeline?", 
        "• Send me a message?"
      ],
      tip: "💡 Pro tip: Try typing 'hire me' or 'sudo hire-me' instead!",
      buttons: {
        stay: "Stay and Explore",
        leave: "Yes, Leave"
      }
    }
  },

  // Animations and Fun
  animations: {
    matrix: "Wake up, Neo... The Matrix has you...",
    cowsay: {
      default: "Hello! I am a Java developer!"
    },
    hacking: {
      steps: [
        "Initializing neural network...",
        "Bypassing firewall...",
        "Decrypting mainframe...",
        "Accessing database...",
        "Downloading confidential files...",
        "Covering tracks...",
        "Mission accomplished!"
      ],
      disclaimer: "⚠️  Just kidding! This is a harmless animation 😄"
    },
    fortune: [
      "The best way to predict the future is to implement it. - Alan Kay",
      "Code is like humor. When you have to explain it, it's bad. - Cory House",
      "First, solve the problem. Then, write the code. - John Johnson",
      "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
      "In order to be irreplaceable, one must always be different. - Coco Chanel",
      "Java is to JavaScript what car is to Carpet. - Chris Heilmann",
      "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
      "Walking on water and developing software from a specification are easy if both are frozen. - Edward V. Berard",
      "It's not a bug – it's an undocumented feature. - Anonymous",
      "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. - Antoine de Saint-Exupery",
      "The trouble with programmers is that you can never tell what a programmer is doing until it's too late. - Seymour Cray",
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. - Bill Gates",
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. - Rick Cook",
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - Martin Golding",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler"
    ]
  },

  // Search content
  search: {
    sections: {
      about: "about",
      skills: "skills", 
      projects: "projects",
      contact: "contact"
    },
    content: {
      about: [
        "Junior Java Developer",
        "Marat Nurmukhametov", 
        "Spain",
        "scalable systems",
        "backend engineer",
        "Java Backend Mastery",
        "House Construction",
        "Translation Empire",
        "University",
        "Migration",
        "product-minded developer",
        "engineer not coder",
        "flexible resilient employee",
        "bridge between departments",
        "Test-driven development",
        "Continuous learning",
        "Team collaboration",
        "Performance optimization"
      ],
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security", 
        "Spring Data",
        "Microservices",
        "PostgreSQL",
        "MySQL",
        "MongoDB", 
        "Docker",
        "Kubernetes",
        "AWS",
        "REST API",
        "React",
        "Chart.js"
      ],
      projects: [
        "microservices-platform",
        "translation-management-system",
        "real-estate-analytics",
        "Spring Boot Docker platform",
        "CRM system translation business",
        "analytics real estate management"
      ],
      contact: [
        "maramarchelo@gmail.com",
        "+34 635 664 902",
        "LinkedIn marat-nurmukhametov",
        "GitHub MaraMarchello",
        "Spain remote work",
        "Full-time Contract Consulting",
        "resume download",
        "CV PDF",
        "curriculum vitae",
        "download resume",
        "wget resume"
      ]
    },
    tree: `
portfolio/
├── about.md
│   ├── personal-info
│   ├── experience
│   ├── philosophy
│   └── principles/
│       ├── test-driven-development
│       ├── continuous-learning
│       ├── team-collaboration
│       └── performance-optimization
├── timeline.log
│   ├── java-backend-mastery
│   ├── spain-migration
│   ├── house-construction-x3
│   ├── translation-empire
│   └── university-first-migration
├── skills.json
│   ├── backend/
│   │   ├── Java
│   │   ├── Spring Boot
│   │   ├── Spring Security
│   │   └── Spring Data
│   ├── databases/
│   │   ├── PostgreSQL
│   │   ├── MySQL
│   │   └── MongoDB
│   ├── devops/
│   │   ├── Docker
│   │   ├── Kubernetes
│   │   └── AWS
│   └── frontend/
│       ├── React
│       └── Chart.js
├── projects/
│   ├── microservices-platform/
│   │   ├── Spring Boot
│   │   ├── PostgreSQL
│   │   ├── Docker
│   │   └── Kubernetes
│   ├── translation-management-system/
│   │   ├── Spring Security
│   │   ├── React
│   │   ├── MySQL
│   │   └── REST API
│   └── real-estate-analytics/
│       ├── Spring Data
│       ├── MongoDB
│       ├── Chart.js
│       └── Docker
└── contact.md
    ├── email: maramarchelo@gmail.com
    ├── phone: +34-635-664-902
    ├── linkedin: /in/marat-nurmukhametov
    ├── github: MaraMarchello
    └── location: Spain (remote available)
    `
  }
};
