const es = {
  nav: {
    home: "Inicio",
    about: "Acerca de",
    experience: "Experiencia",
    projects: "Proyectos",
    resume: "CV",
  },
  hero: {
    titlePrefix: "Hola, soy",
    titleName: "Jesús.",
    subtitle:
      "Frontend / Full-Stack Developer construyendo aplicaciones web con React, Next.js, TypeScript, Python y Django REST Framework.",
    secondary:
      "Background en UX/UI · Experiencia en SaaS · Disponible para roles Frontend y Full-Stack",
    ctaProjects: "Ver proyectos",
    ctaResume: "Descargar CV",
    ctaContact: "Hablemos",
  },
  about: {
    title: "Acerca de mí",
    paragraphOne:
      "Soy <b>Frontend / Full-Stack Developer</b> con background en diseño gráfico y <b>UX/UI</b>, enfocado en crear aplicaciones web funcionales, claras y usables. Trabajo con <b>React, Next.js, TypeScript, Python y Django REST Framework</b>, desarrollando soluciones <b>SaaS</b>, integraciones <b>frontend-backend</b>, <b>APIs REST</b> y automatizaciones administrativas.",
    paragraphTwo:
      "Mi enfoque combina desarrollo, producto e interfaz: me gusta escribir código mantenible, construir componentes reutilizables y cuidar la experiencia del usuario final.",
    techTitle: "Stack principal",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "MySQL",
      "Tailwind CSS",
      "Docker",
    ],
  },
  experience: {
    title: "Experiencia",
    ticsa: {
      role: "Desarrollador Full-Stack @ Ticsa",
      duration: "Feb 2024 — Jul 2024",
      bullets: [
        "Desarrollé funcionalidades para una plataforma SaaS de gestión operacional y administrativa utilizando React, TypeScript, Python, Django REST Framework y MySQL.",
        "Trabajé en módulos de RRHH, boletas y liquidaciones utilizados por aproximadamente 100 usuarios distribuidos en 3 entidades clientes.",
        "Creé endpoints REST y scripts en Python para automatizar procesos administrativos recurrentes como liquidaciones mensuales y boletas para clientes.",
      ],
    },
    dropsher: {
      role: "Front-End Developer / UX/UI Designer @ Dropsher",
      duration: "Nov 2022 — Feb 2023",
      bullets: [
        "Desarrollé una landing web responsive orientada a un producto SaaS, transformando diseños de Figma en componentes React reutilizables y adaptables a distintos tamaños de pantalla.",
        "Esta experiencia conectó mi formación en diseño con mi transición hacia el desarrollo frontend.",
      ],
    },
  },
  projects: {
    title: "Proyectos",
    featuredTitle: "Proyectos destacados",
    otherTitle: "Otros proyectos",
    spendwise: {
      name: "Spendwise",
      description:
        "Aplicación full-stack de finanzas personales para registrar ingresos, gastos, presupuestos y ahorros.",
      details:
        "Incluye autenticación por email y Google, sesiones JWT, datos privados por usuario, frontend responsive y backend con Django REST Framework + PostgreSQL.",
      stack: "Next.js · TypeScript · Django REST Framework · PostgreSQL · JWT",
      demo: "https://spendwise-psi-silk.vercel.app/",
      github: "https://github.com/Pdwxn/spendwise",
    },
    coverLetterAi: {
      name: "Cover Letter AI",
      description:
        "Aplicación que genera cartas de presentación personalizadas usando inteligencia artificial.",
      details:
        "Integra Groq API con Llama 3.1 8B y lógica de prompts para generar respuestas claras, editables y contextualizadas según la oferta laboral.",
      stack: "React · TypeScript · Groq API · Llama 3.1 8B",
      demo: "https://cover-letter-ai-zeta.vercel.app/",
      github: "https://github.com/Pdwxn/Cover-letter-ai",
    },
    authTransparency: {
      name: "Auth Transparency",
      description:
        "Herramienta educativa para visualizar flujos de autenticación y cambios de estado de usuario en tiempo real.",
      details:
        "Permite entender procesos como login, sesión activa y autenticación con proveedores externos mediante una interfaz visual e interactiva.",
      stack: "React · TypeScript · NextAuth · Tailwind CSS",
      demo: "https://auth-transparency.vercel.app/",
      github: "https://github.com/Pdwxn/auth-transparency",
    },
    others: [
      {
        name: "AI Code Reviewer",
        description:
          "Herramienta web que permite analizar, mejorar y entender código en tiempo real mediante inteligencia artificial.",
        stack: "Next.js · TypeScript · Tailwind CSS · Groq API",
        demo: "https://code-reviewer-ai-ten.vercel.app/",
        github: "https://github.com/Pdwxn/code-reviewer-ai",
      },
      {
        name: "World Wander Log",
        description:
          "Aplicación para almacenar y llevar un registro de viajes con una interfaz intuitiva y amigable.",
        stack: "React · TypeScript",
        demo: "https://worldwanderlog-app-reactjs.vercel.app/",
        github: "https://github.com/Pdwxn/worldwanderlog-app-reactjs",
      },
      {
        name: "CardStone",
        description:
          "Aplicación para explorar más de 3000 cartas de Hearthstone.",
        stack: "React · TypeScript · Tailwind CSS",
        demo: "https://card-stone.vercel.app/",
        github: "https://github.com/Pdwxn/CardStone",
      },
      {
        name: "Pomodoro Timer",
        description:
          "Aplicación de temporizador Pomodoro con una interfaz sencilla y funcional.",
        stack: "Next.js · TypeScript · Tailwind CSS",
        demo: "https://pomodor-timer-flame.vercel.app",
        github: "https://github.com/Pdwxn/pomodor-timer",
      },
    ],
  },
  contact: {
    title: "¿Trabajamos juntos?",
    body:
      "Estoy abierto a oportunidades Frontend y Full-Stack en Chile/LATAM, en modalidad remota, híbrida o presencial.",
    cta: "Enviar correo",
  },
};

export default es;
  
