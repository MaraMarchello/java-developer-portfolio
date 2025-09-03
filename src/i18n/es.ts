export const es = {
  // Terminal Commands
  terminal: {
    prompt: "desarrollador@portfolio:~$",
    placeholder: "Escribe 'ayuda' para ver comandos disponibles",
    scrollHint: "Desplázate hacia abajo para una vista rápida",
    commandNotFound: "Comando no encontrado: {command}. Escribe 'ayuda' para ver comandos disponibles.",
    
    // Command responses
    responses: {
      themeChanged: {
        dark: "Tema cambiado a modo oscuro 🌙",
        light: "Tema cambiado a modo claro ☀️",
        toggle: "Tema alternado a modo {mode} {icon}"
      },
      currentTheme: "Tema actual: {theme} {icon}",
      currentLanguage: "Idioma actual: {language} {flag}",
      languageChanged: {
        en: "Idioma cambiado a Inglés 🇺🇸",
        es: "Idioma cambiado a Español 🇪🇸",
        toggle: "Idioma alternado a {language} {flag}"
      },
      searchUsage: "Uso: buscar [palabra] - Buscar en el contenido del portfolio",
      searchNoResults: "No se encontraron resultados para \"{keyword}\"",
      searchResults: "Se encontraron {count} resultado(s) para \"{keyword}\":",
      searchMoreResults: "... y {count} resultados más",
      dateTime: "{date} {time}",
      downloadingResume: "Descargando currículum... 📄",
      downloadingCV: "Descargando Marat_Nurmukhametov_Resume.pdf... 📄",
      connectingGithub: "Conectando a GitHub... 🐙",
      fetchingLinkedin: "Obteniendo perfil de LinkedIn... 💼",
      openingContactForm: "Abriendo formulario de contacto...",
      openingEnhancedForm: "Abriendo formulario de contacto mejorado con privilegios elevados... 🔐",
      areYouSureExit: "¿Estás seguro de que quieres salir? 🤔",
      scrollingToSection: {
        about: "Desplazándose a la sección Acerca de...",
        timeline: "Desplazándose a la sección Línea de tiempo...",
        skills: "Desplazándose a la sección Habilidades...",
        projects: "Desplazándose a la sección Proyectos...",
        contact: "Desplazándose a la sección Contacto..."
      }
    },

    // Help command
    help: {
      title: "Comandos disponibles:",
      commands: {
        "ls -la": "listar secciones del portfolio",
        "cat [archivo]": "navegar a sección",
        "git log": "mostrar línea de tiempo",
        "whoami": "mostrar sección acerca de",
        "hire me": "abrir formulario de contacto",
        "sudo hire-me": "formulario de contacto mejorado",
        "clear": "limpiar terminal",
        "help": "mostrar esta ayuda",
        "ayuda": "mostrar esta ayuda",
        "theme [modo]": "oscuro/claro/alternar/estado",
        "tema [modo]": "oscuro/claro/alternar/estado",
        "lang [código]": "en/es/alternar/estado",
        "idioma [código]": "en/es/alternar/estado",
        "find [palabra]": "buscar en portfolio",
        "buscar [palabra]": "buscar en portfolio",
        "tree": "mostrar estructura del portfolio",
        "árbol": "mostrar estructura del portfolio",
        "date": "mostrar fecha y hora actual",
        "fecha": "mostrar fecha y hora actual",
        "ssh github": "abrir perfil de GitHub",
        "curl linkedin": "abrir perfil de LinkedIn",
        "download resume": "descargar CV/currículum PDF",
        "descargar cv": "descargar CV/currículum PDF",
        "wget resume": "descargar CV/currículum PDF",
        "matrix": "entrar en la matrix",
        "cowsay [msg]": "vaca ASCII dice mensaje",
        "fortune": "cita aleatoria de programación",
        "fortuna": "cita aleatoria de programación",
        "sl": "tren sorpresa",
        "hack": "simulación de hacking",
        "hackear": "simulación de hacking",
        "exit": "salir del portfolio",
        "salir": "salir del portfolio"
      }
    }
  },

  // Portfolio Content
  portfolio: {
    title: "Desarrollador Java Junior",
    name: "Marat Nurmukhametov",
    location: "España",
    
    about: {
      title: "Desarrollador Java Junior",
      subtitle: "No solo escribo código. Creo sistemas confiables y escalables que generan beneficios. Mi experiencia construyendo un negocio desde cero en un país extranjero y gestionando un equipo remoto me enseñó lo principal: cualquier tarea es un sistema. Necesita ser diseñado, optimizado y escalado.",
      
      aboutMe: "Acerca de Mí",
      
      myGoal: "Mi Objetivo",
      goalText: "Mi objetivo no es solo encontrar trabajo, sino convertirme en tu activo de inversión más confiable durante los próximos años. Listo para demostrarlo en tareas complejas desde el primer día.",
      
      whatYouGet: "Lo que obtienes",
      whatYouGetSubtitle: "Al aceptarme en el equipo, obtienes:",
      
      benefits: {
        productMinded: {
          title: "Desarrollador orientado al producto",
          description: "No seguiré ciegamente las especificaciones. Pensaré en cómo esta funcionalidad afectará los procesos de negocio, la experiencia del cliente y tus beneficios, porque he tomado tales decisiones yo mismo en mi proyecto."
        },
        engineer: {
          title: "Ingeniero, no programador",
          description: "Construí tres casas con mis propias manos. Sé lo que significa poner una base sólida (arquitectura limpia, base de datos bien pensada) y no escatimar en 'muros de carga' (pruebas, seguridad, documentación). Mi código no es un borrador, es una construcción capital."
        },
        flexible: {
          title: "Empleado flexible y resistente",
          description: "Me mudé a nuevos países, aprendí idiomas y comencé desde cero. La incertidumbre, las tareas complejas y la necesidad de dominar rápidamente lo nuevo son mi entorno natural. ¿Tu stack o procesos cambian rápidamente? Para mí esto no es un problema, sino una oportunidad."
        },
        bridge: {
          title: "Puente entre departamentos",
          description: "Hablo 5 idiomas humanos y ahora estoy dominando el lenguaje de las máquinas. Puedo traducir los requisitos de negocio y gestión a especificaciones técnicas, y las limitaciones técnicas a argumentos de negocio comprensibles."
        }
      },
      
      principles: {
        title: "Mis principios de trabajo:",
        tdd: {
          title: "Desarrollo dirigido por pruebas",
          description: "Primero las pruebas, luego el código. Esta es una garantía de calidad."
        },
        learning: {
          title: "Aprendizaje continuo",
          description: "Aprender algo nuevo cada día es mi lema."
        },
        collaboration: {
          title: "Colaboración en equipo",
          description: "El éxito del proyecto es el resultado del trabajo en equipo."
        },
        performance: {
          title: "Optimización del rendimiento",
          description: "Código rápido - usuarios felices."
        }
      }
    },

    timeline: {
      title: "git log --oneline",
      subtitle: "Viaje a través del código y la vida",
      entries: {
        javaMastery: "Maestría en Java Backend",
        spainMigration: "Migración a España",
        houseConstruction: "Construcción de Casa x3",
        translationEmpire: "Construir Imperio de Traducción + Familia",
        universityMigration: "Universidad + Primera Migración"
      },
      descriptions: {
        javaMastery: "No temo las tareas complejas — dominé Java en un idioma extranjero a los 40+, mientras criaba dos hijos y vivía en un país nuevo",
        spainMigration: "Refactorización mayor del código de vida. Mudanza a España, adaptación a una nueva cultura e idioma.",
        houseConstruction: "Si puedo construir una casa desde cero — puedo construir un servicio Spring Boot escalable. La clave es un plan claro, atención al detalle y responsabilidad por los resultados.",
        translationEmpire: "Creación y desarrollo de un negocio de traducción + formar una familia. Escalando el equipo a 60+ traductores, automatizando procesos.",
        universityMigration: "Dominé 5 idiomas. Ahora hablo el lenguaje de las máquinas. Hablo inglés, español, ruso, uzbeko y tártaro con fluidez."
      },
      changes: {
        javaMastery: [
          "+ Dominé Spring Boot, Spring Security, Spring Data",
          "+ Implementé arquitectura de microservicios",
          "+ Configuré pipelines CI/CD",
          "+ Aprendí Docker, Kubernetes",
          "+ Trabajando con PostgreSQL, MongoDB",
          "+ Desarrollo de REST API y GraphQL",
          "+ Desarrollo de React y TypeScript"
        ],
        spainMigration: [
          "+ Mudanza a un nuevo país (España)",
          "+ Aprendizaje del idioma español",
          "+ Adaptación a nueva cultura",
          "+ Obtención de permiso de residencia",
          "+ Aprendizaje de tradiciones y costumbres locales",
          "~ Incrementé métricas de adaptación en 150%"
        ],
        houseConstruction: [
          "+ Gestión de proyectos de construcción",
          "+ Planificación y ejecución de trabajos",
          "+ Diseño y control de presupuesto",
          "+ Control de calidad en todas las etapas",
          "+ Coordinación con proveedores",
          "+ Obtención de permisos y documentación"
        ],
        translationEmpire: [
          "+ Creación de agencia de traducción",
          "+ Escalando equipo a 60+ personas",
          "+ Formando una familia (esposa, hijo)",
          "+ Automatizando procesos de negocio",
          "+ Trabajando con grandes clientes corporativos",
          "+ Implementando sistemas CRM y PM",
          "+ Expandiendo a mercados internacionales",
          "~ Incrementé métricas de felicidad en 200%"
        ],
        universityMigration: [
          "+ Graduado de la universidad",
          "+ Aprendizaje del idioma inglés",
          "+ Obtención de licenciatura",
          "+ Primera migración (cambio de países)",
          "+ Formación de principios de vida"
        ]
      },
      stats: {
        filesChanged: "archivo(s) cambiado(s)",
        diffStat: "Diff --stat"
      }
    },

    skills: {
      title: "package.json",
      subtitle: "Dependencias y tecnologías"
    },

    projects: {
      title: "ls proyectos/",
      subtitle: "Repositorios con proyectos reales",
      projectList: {
        microservices: {
          name: "plataforma-microservicios",
          description: "Plataforma de microservicios con Spring Boot y Docker"
        },
        translation: {
          name: "sistema-gestión-traducción",
          description: "Sistema CRM para gestión de negocio de traducción"
        },
        realEstate: {
          name: "análisis-inmobiliario",
          description: "Sistema de análisis para gestión inmobiliaria"
        }
      },
      buttons: {
        gitClone: "git clone",
        liveDemo: "Demo en Vivo"
      }
    },

    contact: {
      title: "Contribuyendo a Mi Carrera",
      subtitle: "Mi objetivo no es solo encontrar trabajo, sino convertirme en tu activo de inversión más confiable durante los próximos años. Listo para demostrarlo en tareas complejas desde el primer día.",
      methods: "Métodos de contacto:",
      availability: {
        openFor: "Disponible para: Tiempo completo, Contrato, Consultoría",
        location: "Ubicación: España (trabajo remoto posible)"
      },
      buttons: {
        linkedin: "💼 LinkedIn",
        email: "📧 Email",
        phone: "📱 Teléfono",
        github: "🐙 GitHub"
      }
    }
  },

  // Dialog Content
  dialogs: {
    hire: {
      title: "¡Construyamos Algo Grandioso Juntos!",
      form: {
        name: "Tu Nombre",
        email: "Tu Email",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        send: "Enviar Mensaje",
        downloadResume: "Descargar Currículum"
      }
    },
    
    sudoHire: {
      title: "🔐 Acceso Root Concedido - Contacto Premium",
      terminal: "$ sudo access --level=premium --user=empleador",
      status: {
        auth: "✅ Autenticación exitosa",
        privileges: "✅ Privilegios elevados concedidos",
        unlocked: "✅ Información de contacto premium desbloqueada"
      },
      info: {
        directEmail: "Email Directo:",
        whatsapp: "WhatsApp/Telegram:",
        linkedinPremium: "LinkedIn Premium:",
        githubPro: "GitHub Pro:",
        responseTime: "Tiempo de Respuesta:",
        responseValue: "< 2 horas (horario comercial)",
        availability: "Disponibilidad:",
        availabilityValue: "Inicio inmediato disponible"
      },
      form: {
        name: "Tu Nombre *",
        namePlaceholder: "Nombre de Empresa/Gerente de Contratación",
        email: "Tu Email *",
        emailPlaceholder: "empresa@dominio.com",
        projectDetails: "Detalles del Proyecto *",
        projectPlaceholder: "Cuéntame sobre tu proyecto Java, tamaño del equipo, stack tecnológico, cronograma y rango de presupuesto...",
        sendPriority: "🚀 Enviar Mensaje Prioritario",
        downloadCV: "📄 Descargar CV"
      }
    },

    exit: {
      title: "¿Estás seguro de que quieres salir?",
      description: "¡Estás a punto de salir de este increíble portfolio! ¿Estás seguro de que no quieres:",
      suggestions: [
        "• ¿Revisar mis proyectos?",
        "• ¿Ver mi línea de tiempo?",
        "• ¿Enviarme un mensaje?"
      ],
      tip: "💡 Consejo profesional: ¡Intenta escribir 'hire me' o 'sudo hire-me' en su lugar!",
      buttons: {
        stay: "Quedarse y Explorar",
        leave: "Sí, Salir"
      }
    }
  },

  // Animations and Fun
  animations: {
    matrix: "Despierta, Neo... La Matrix te tiene...",
    cowsay: {
      default: "¡Hola! ¡Soy un desarrollador Java!"
    },
    hacking: {
      steps: [
        "Inicializando red neuronal...",
        "Evadiendo firewall...",
        "Descifrando mainframe...",
        "Accediendo base de datos...",
        "Descargando archivos confidenciales...",
        "Cubriendo huellas...",
        "¡Misión cumplida!"
      ],
      disclaimer: "⚠️  ¡Solo bromeando! Esta es una animación inofensiva 😄"
    },
    fortune: [
      "La mejor manera de predecir el futuro es implementarlo. - Alan Kay",
      "El código es como el humor. Cuando tienes que explicarlo, es malo. - Cory House",
      "Primero, resuelve el problema. Luego, escribe el código. - John Johnson",
      "La experiencia es el nombre que todos le dan a sus errores. - Oscar Wilde",
      "Para ser irreemplazable, uno debe ser siempre diferente. - Coco Chanel",
      "Java es a JavaScript lo que coche es a alfombra. - Chris Heilmann",
      "La propiedad más importante de un programa es si cumple la intención de su usuario. - C.A.R. Hoare",
      "Caminar sobre el agua y desarrollar software desde una especificación es fácil si ambos están congelados. - Edward V. Berard",
      "No es un bug - es una característica no documentada. - Anónimo",
      "La perfección se logra no cuando no hay nada más que agregar, sino cuando no hay nada más que quitar. - Antoine de Saint-Exupery",
      "El problema con los programadores es que nunca puedes saber lo que está haciendo un programador hasta que es demasiado tarde. - Seymour Cray",
      "Medir el progreso de programación por líneas de código es como medir el progreso de construcción de aeronaves por peso. - Bill Gates",
      "La programación hoy es una carrera entre ingenieros de software que se esfuerzan por construir programas más grandes y mejores a prueba de idiotas, y el Universo tratando de producir idiotas más grandes y mejores. Hasta ahora, el Universo está ganando. - Rick Cook",
      "Siempre programa como si el tipo que termina manteniendo tu código fuera un psicópata violento que sabe dónde vives. - Martin Golding",
      "Cualquier tonto puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos puedan entender. - Martin Fowler"
    ]
  },

  // Search content
  search: {
    sections: {
      about: "acerca de",
      skills: "habilidades",
      projects: "proyectos", 
      contact: "contacto"
    },
    content: {
      about: [
        "Desarrollador Java Junior",
        "Marat Nurmukhametov",
        "España",
        "sistemas escalables",
        "ingeniero backend",
        "Maestría Java Backend",
        "Construcción Casa",
        "Imperio Traducción",
        "Universidad",
        "Migración",
        "desarrollador orientado al producto",
        "ingeniero no programador",
        "empleado flexible resistente",
        "puente entre departamentos",
        "Desarrollo dirigido por pruebas",
        "Aprendizaje continuo",
        "Colaboración en equipo",
        "Optimización del rendimiento"
      ],
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data",
        "Microservicios",
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
        "plataforma-microservicios",
        "sistema-gestión-traducción",
        "análisis-inmobiliario",
        "plataforma Spring Boot Docker",
        "sistema CRM negocio traducción",
        "análisis gestión inmobiliaria"
      ],
      contact: [
        "maramarchelo@gmail.com",
        "+34 635 664 902",
        "LinkedIn marat-nurmukhametov",
        "GitHub MaraMarchello",
        "España trabajo remoto",
        "Tiempo completo Contrato Consultoría",
        "descargar currículum",
        "CV PDF",
        "curriculum vitae",
        "descargar cv",
        "wget resume"
      ]
    },
    tree: `
portfolio/
├── acerca-de.md
│   ├── información-personal
│   ├── experiencia
│   ├── filosofía
│   └── principios/
│       ├── desarrollo-dirigido-por-pruebas
│       ├── aprendizaje-continuo
│       ├── colaboración-en-equipo
│       └── optimización-del-rendimiento
├── línea-de-tiempo.log
│   ├── maestría-java-backend
│   ├── migración-españa
│   ├── construcción-casa-x3
│   ├── imperio-traducción
│   └── universidad-primera-migración
├── habilidades.json
│   ├── backend/
│   │   ├── Java
│   │   ├── Spring Boot
│   │   ├── Spring Security
│   │   └── Spring Data
│   ├── bases-de-datos/
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
├── proyectos/
│   ├── plataforma-microservicios/
│   │   ├── Spring Boot
│   │   ├── PostgreSQL
│   │   ├── Docker
│   │   └── Kubernetes
│   ├── sistema-gestión-traducción/
│   │   ├── Spring Security
│   │   ├── React
│   │   ├── MySQL
│   │   └── REST API
│   └── análisis-inmobiliario/
│       ├── Spring Data
│       ├── MongoDB
│       ├── Chart.js
│       └── Docker
└── contacto.md
    ├── email: maramarchelo@gmail.com
    ├── teléfono: +34-635-664-902
    ├── linkedin: /in/marat-nurmukhametov
    ├── github: MaraMarchello
    └── ubicación: España (remoto disponible)
    `
  }
};
