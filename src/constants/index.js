export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 5,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 6,
    name: "Github",
    href: "https://github.com/Stikeve",
  },
  {
    id: 7,
    name: "LeetCode",
    href: "https://leetcode.com/u/stikeve/",
  },
];

export const randomLines = [
  "Connecting to mail server...",
  "Encrypting message...",
  "Transmitting data...",
  "Bypassing firewalls...",
  "Allocating RAM...",
  "Generating session key...",
  "Compiling message structure...",
  "Pinging SMTP port...",
];

export const trollingMessages = [
  "Did you *really* think clicking that would work? 😏",
  "This modal is stronger than your willpower. Contact me. 🏋️‍♂️",
  "Even Stack Overflow can’t help you here. 😂",
  "I see you’re trying to break the internet. Nice try! 💻",
  "This is like trying to exit Vim. Good luck. 🖥️",
  "Critical hit! Your close attempt failed. Try again? 🎮",
  "The only way out is through… my DMs. 📩",
  "Go ahead, keep clicking. I don’t judge. (I do.) 🧐",
  "Click it again. Maybe it’ll work this time. (Spoiler: No.) 🎰",
  "I believe in you! (But this modal doesn’t.) 🙏",
  "You’ve got the spirit, but this modal has the power. ⚡",
  "Trying to escape? This modal is like a black hole. 🌌",
  "You’re not trapped. You’re *chosen.* (To contact me.) ✨",
  "This modal is powered by unicorn tears. You can’t close magic. 🦄",
  "You thought this would close? Cute. 😌",
  "You thought the X button worked? That’s adorable. 🎀",
  "You thought escape key would save you? How naive. 🏃‍♂️💨",
  "You thought I’d let you leave? laughs in JavaScript 😈",
  "This modal is sponsored by Nope™. Closing not included. 🚫",
  "This modal is legally required to annoy you. (Law #420.69) ⚖️",
  "This modal is a paid actor. It won’t break character. 🎭",
  "‘It’s not a bug, it’s a ✨feature✨",
  "This modal is my emotional support div. Don’t bully it. 🥺",
  "Per my last email: This modal does not close. 📧",
  "Synergy! (But between the modal and your suffering) 📊",
  "Let’s circle back to you accepting this won’t close. 🔄",
  "Low bandwidth? No, just high persistence. 📶",
  "This modal is like your ‘perfect candidate’—hard to find, impossible to let go. 🕵️‍♂️",
  "We’re innovating! (by removing the close button) 🚀",
  "Psychological trick: You think you have a choice. 🧠",
  "Other people are messaging me right now. Are you really gonna let them win? 🏁",
  "The algorithm chose you. Destiny? Nah, just my weird code. 📊",
];

export const myProjects = [
  {
    title: "Stikeve Dev Blog",
    desc: "A full-stack blogging platform built with React, TypeScript, Vite (client), and Node.js, Express, MongoDB (server). Users can register, create, edit, and manage blog posts with Markdown, tags, privacy controls, and user profiles.",
    subdesc:
      "Features : user authentication, admin controls, responsive UI, and supports technical/personal tagging.",
    href: "https://github.com/stikeve/stikeve-dev-blog",
    logo: "/assets/A.png",
    logoStyle: {
      backgroundColor: "black",
      border: "0.2px solid #D3D3D3",
      boxShadow: "0px 0px 30px 0px #D3D3D34D",
      filter: "invert(1)",
    },
    technologies:
      "React | TypeScript | Vite | Node.js | Express | MongoDB | JWT | Tailwind CSS | Markdown",
    spotlightColor:
      "radial-gradient(circle at 100% 0%, rgba(100,149,237,0.3) 0%, rgba(255,255,255,0) 80%)",
  },
  {
    title: "Torpedo Networking",
    desc: "A Chrome extension and Node.js backend demonstrating AI-powered LinkedIn outreach message generation using demo profile data. No real scraping or user data involved.",
    subdesc:
      "A cost-effective AI message generator using OpenAI GPT and cheaper than most commercial wrappers but not free.",
    href: "https://github.com/stikeve/torpedo-networking",
    logo: "/assets/A.png",
    logoStyle: {
      backgroundColor: "black",
      border: "0.2px solid #D3D3D3",
      boxShadow: "0px 0px 30px 0px #D3D3D34D",
      filter: "invert(1)",
    },
    technologies:
      "JavaScript | Node.js | Chrome Extension | OpenAI GPT | HTML | CSS",
    spotlightColor:
      "radial-gradient(circle at 100% 0%, rgba(255,99,71,0.3) 0%, rgba(255,255,255,0) 80%)",
  },

  {
    title: "Analysis of Performance Among Diverse Web Development JavaScript Frameworks",
    desc: "Evaluated performance metrics (page load time, FCP, TTI) of Angular, React, and Svelte using TodoMVC and Chrome DevTools. Identified Svelte as lightweight, React for dynamic UI, and Angular for large-scale applications.",
    subdesc: "MSc Dissertation at the University of Limerick",
    href: "https://drive.google.com/file/d/1K3jXy52kdtF9KBAxRsW79aQCE7QUMeFo/view?usp=sharing",
    logo: "/assets/UL.png",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #D3D3D3",
      boxShadow: "0px 0px 30px 0px #D3D3D34D",
    },
    technologies:
      "JavaScript | Angular | React.js | Svelte | Chrome DevTools | TodoMVC",
    spotlightColor:
      "radial-gradient(circle at 100% 0%, rgba(255,215,0,0.4) 0%, rgba(255,255,255,0) 70%)",
  },
  {
    title: "Hotel Management System Using Java Spring Boot, Microservices, and REST APIs",
    desc: "Designed a scalable system with Java Spring Boot and microservices architecture. Developed secure RESTful APIs for seamless communication between services. Implemented 6 design patterns to optimize performance and code quality, leading a team of 4.",
    subdesc: "Software Design Project at the University of Limerick",
    href: "",
    logo: "/assets/UL.png",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #D3D3D3",
      boxShadow: "0px 0px 30px 0px #D3D3D34D",
    },
    technologies:
      "Java | Spring Boot | Microservices | REST APIs | Design Patterns",
    spotlightColor:
      "radial-gradient(circle at 100% 0%, rgba(138,43,226,0.4) 0%, rgba(255,255,255,0) 70%)",
  },
  {
    title: "MERN Stack Movie Streaming Site",
    desc: "Built a full-stack site with MongoDB, Express, React, and Node.js. Implemented user authentication and secure session handling. Created a responsive front-end for seamless cross-device experience.",
    subdesc: "Bachelor's Final Year Project at KIIT University",
    href: "",
    logo: "/assets/Kiit.png",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #D3D3D3",
      boxShadow: "0px 0px 30px 0px #D3D3D34D",
    },
    technologies:
      "MongoDB | Express.js | React.js | Node.js | Authentication | Responsive Design",
    spotlightColor:
      "radial-gradient(circle at 100% 0%, rgba(0,191,255,0.4) 0%, rgba(255,255,255,0) 70%)",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 2 : isMobile ? 3 : 4,
    deskPosition: isMobile ? [0, -1, 0] : [0, 0, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Capgemini",
    pos: "Software Engineer",
    duration: "05/2021 - 08/2022",
    title:
      "Contributed to enterprise-grade software solutions focused on scalability, performance, and system design. \nWorked on cross-functional teams to build client-facing features and improve backend efficiency. \nCollaborated closely with QA and DevOps teams to ensure high system availability and fast deployments.",
    icon: "/assets/Capg.png",
  },
  {
    id: 2,
    name: "Capgemini",
    pos: "Software Engineer Intern",
    duration: "01/2021 - 04/2021",
    title:
      "Built scalable applications using C# and the .NET MVC framework. \nReduced code errors by 15% and improved maintainability through clean architecture. \nGained hands-on experience in agile environments, code reviews, and collaborative development.",
    icon: "/assets/Capg.png",
  },
];

export const educationHistory = [
  {
    id: 1,
    name: "University of Limerick",
    pos: "Masters of Science in Software Engineering",
    duration: "2023–2024",
    title:
      "Focused on scalable software systems, performance engineering, and project management. \nCompleted a thesis analyzing real-world performance of modern JavaScript frameworks. \nBuilt a microservice-based hotel management system with Spring Boot and REST APIs.",
    icon: "/assets/UL.png",
  },
  {
    id: 2,
    name: "KIIT University",
    pos: "Bachelor of Technology in Information Technology",
    duration: "2017–2021",
    title:
      "Explored full-stack development, data structures, and software architecture. \nFinal project: a MERN-based movie streaming platform with secure auth and responsive design. \nActively contributed to team projects, coding contests, and campus tech initiatives.",
    icon: "/assets/Kiit.png",
  },
];

export const certifications = [
  {
    id: 1,
    title: "IBM Full Stack Software Developer",
    description:
      "Completed 15-course program covering cloud-native full stack development and SaaS solutions.",
    image: "assets/CourseraPC.jpg",
    issuer: "IBM via Coursera",
    date: "2025-04-03",
    link: "https://coursera.org/verify/professional-cert/517695OLP7T1",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Node.js",
      "React",
      "Cloud Native",
      "DevOps",
      "CI/CD",
      "Containers",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Python",
      "Databases",
      "SQL",
      "NoSQL",
      "Django ORM",
      "Bootstrap",
      "Application Security",
      "Microservices",
      "Serverless computing",
      "SaaS Solutions",
      "Full Stack Development",
    ],
  },
  {
    id: 2,
    title: "Generative AI: Elevate Your Software Development Career",
    description:
      "Application of generative AI for code generation, software design, bug detection, and ethical AI programming.",
    image: "assets/GeNAI.jpg",
    issuer: "IBM via Coursera",
    date: "2025-04-03",
    link: "https://coursera.org/verify/MO3EZQTPCG9O",
    skills: [
      "Generative AI",
      "Code Generation",
      "AI-Powered Development",
      "ChatGPT",
      "GitHub CoPilot",
      "Google Gemini",
      "IBM watsonx",
      "Software Development",
      "Code Refactoring",
      "Bug Detection",
      "AI Ethics",
      "Prompt Engineering",
      "Application Design",
      "Program Optimization",
    ],
  },
  {
    id: 3,
    title: "Full Stack Software Developer Assessment",
    description:
      "Final assessment demonstrating mastery of full stack development, cloud computing, and DevOps skills from the IBM Professional Certificate program.",
    image: "assets/FSAsment.jpg",
    issuer: "IBM via Coursera",
    date: "2025-04-02",
    link: "https://coursera.org/verify/BW5VKIBXMKFS",
    skills: [
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Cloud Computing",
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Python",
      "Django",
      "Microservices",
      "Containers",
      "Troubleshooting",
      "Software Design",
      "Application Deployment",
      "DevOps",
    ],
  },
  {
    id: 4,
    title: "Full Stack Application Development Capstone Project",
    description:
      "Real-world web application combining JavaScript, React, Python, Node.js, Express and Django with cloud deployment.",
    image: "assets/Capstone.jpg",
    issuer: "IBM via Coursera",
    date: "2025-04-02",
    link: "https://coursera.org/verify/0A9CCKF5S2QE",
    skills: [
      "Full Stack Development",
      "JavaScript",
      "React",
      "Python",
      "Node.js",
      "Express",
      "Django",
      "Cloud Deployment",
      "Containers",
      "Serverless",
      "CI/CD",
      "DevOps",
      "Web Application",
      "RESTful APIs",
      "Database Integration",
    ],
  },
  {
    id: 5,
    title: "Application Development using Microservices and Serverless",
    description:
      "Building and deploying microservices using Docker, OpenShift, and serverless technologies with IBM Code Engine.",
    image: "assets/MicroserviceServerless.jpg",
    issuer: "IBM via Coursera",
    date: "2025-03-28",
    link: "https://coursera.org/verify/842EMXP50VWI",
    skills: [
      "Microservices",
      "Serverless",
      "REST API",
      "Docker",
      "OpenShift",
      "IBM Code Engine",
      "API Development",
      "cURL",
      "Postman",
      "SwaggerUI",
      "Cloud Applications",
      "Containerization",
      "Cloud Deployment",
    ],
  },
  {
    id: 6,
    title: "Introduction to Containers with Docker, Kubernetes & OpenShift",
    description:
      "Containerization using Docker, Kubernetes orchestration, and OpenShift for cloud-native applications.",
    image: "assets/Docker.jpg",
    issuer: "IBM via Coursera",
    date: "2025-01-30",
    link: "https://coursera.org/verify/9M10ZT4YKCPF",
    skills: [
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Containers",
      "Cloud Native",
      "Container Orchestration",
      "YAML",
      "Pods",
      "Services",
      "ReplicaSets",
      "Istio",
      "Cluster Management",
      "Application Deployment",
    ],
  },
  {
    id: 7,
    title: "Django Application Development with SQL and Databases",
    description:
      "Database modeling, SQL queries, Django ORM, and integrating Bootstrap with Django templates.",
    image: "assets/Django.jpg",
    issuer: "IBM via Coursera",
    date: "2024-11-11",
    link: "https://coursera.org/verify/9RF1LECRPCJJ",
    skills: [
      "Django",
      "SQL",
      "Relational Databases",
      "ORM",
      "Database Design",
      "Entity Relationship Modeling",
      "Bootstrap",
      "Backend Development",
      "Database Queries",
      "CRUD Operations",
      "Web Application Development",
    ],
  },
  {
    id: 8,
    title: "Developing AI Applications with Python and Flask",
    description:
      "Building and deploying AI-powered web applications using Python, Flask, and IBM Watson AI libraries.",
    image: "assets/PythonFlask.jpg",
    issuer: "IBM via Coursera",
    date: "2024-10-25",
    link: "https://coursera.org/verify/Q1B35Z1WA0OG",
    skills: [
      "Python",
      "Flask",
      "AI Applications",
      "IBM Watson",
      "Web Application Development",
      "Application Packaging",
      "Unit Testing",
      "PEP8 Standards",
      "Application Deployment",
      "Software Development Lifecycle",
      "RESTful APIs",
      "Microservices",
    ],
  },
  {
    id: 9,
    title: "Developing Front-End Apps with React",
    description:
      "Building interactive UIs and web applications using React, JSX, ES6, and Redux.",
    image: "assets/React.jpg",
    issuer: "IBM via Coursera",
    date: "2024-10-20",
    link: "https://coursera.org/verify/10TF6KSC93G6",
    skills: [
      "React",
      "JavaScript",
      "JSX",
      "ES6",
      "Redux",
      "Front-end Development",
      "User Interface",
      "Web Development",
      "React Hooks",
      "React Components",
      "React Props",
      "React State",
    ],
  },
  {
    id: 10,
    title: "Python for Data Science, AI & Development",
    description:
      "Python programming fundamentals for data science including Pandas, NumPy, and web scraping.",
    image: "assets/PythonAI.jpg",
    issuer: "IBM via Coursera",
    date: "2024-10-20",
    link: "https://coursera.org/verify/RCCWDMF68VED",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Science",
      "Data Analysis",
      "Jupyter Notebooks",
      "Web Scraping",
      "Beautiful Soup",
      "APIs",
      "Object-Oriented Programming",
      "Data Structures",
      "Functions",
      "Loops",
      "Conditionals",
    ],
  },
  {
    id: 11,
    title: "Developing Back-End Apps with Node.js and Express",
    description:
      "Building server-side applications using Node.js runtime, Express framework, and npm packages.",
    image: "assets/Node&Express.jpg",
    issuer: "IBM via Coursera",
    date: "2024-10-17",
    link: "https://coursera.org/verify/VPCV8NCT30A3",
    skills: [
      "Node.js",
      "Express",
      "Backend Development",
      "Server-side JavaScript",
      "npm",
      "Asynchronous Programming",
      "Callbacks",
      "Promises",
      "RESTful APIs",
      "Middleware",
      "Web Application Development",
    ],
  },
  {
    id: 12,
    title: "Getting Started with Git and GitHub",
    description:
      "Fundamentals of version control, Git workflows, and collaborative coding using GitHub.",
    image: "assets/Git.jpg",
    issuer: "IBM via Coursera",
    date: "2024-10-01",
    link: "https://coursera.org/verify/YCTPALBOZ2Z5",
    skills: [
      "Git",
      "GitHub",
      "Version Control",
      "DVCS",
      "Repositories",
      "Branches",
      "Pull Requests",
      "Merging",
      "Open Source",
      "Cloning",
      "Forking",
      "DevOps",
      "Collaborative Coding",
    ],
  },
  {
    id: 13,
    title: "Introduction to Software Engineering",
    description:
      "Fundamentals of software engineering, SDLC, and programming with Python.",
    image: "assets/SE.jpg",
    issuer: "IBM via Coursera",
    date: "2024-09-30",
    link: "https://coursera.org/verify/UC4GGINZL8XG",
    skills: [
      "Software Architecture",
      "Computer Programming",
      "Programming Principles",
      "Agile and Scrum",
      "Software Engineering",
      "Communication",
      "Software Development Lifecycle (SDLC)",
      "Python Programming",
    ],
  },
  {
    id: 14,
    title: "Introduction to HTML, CSS, & JavaScript",
    description:
      "Fundamentals of web development including front-end technologies and developer tools.",
    image: "assets/WEBD.jpg",
    issuer: "IBM via Coursera",
    date: "2024-09-30",
    link: "https://coursera.org/verify/KW4DHEWAU8MJ",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
      "Frontend Development",
      "Web Applications",
      "Developer Tools",
      "IDEs",
    ],
  },
];
