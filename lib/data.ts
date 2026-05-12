// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO DATA — edit this file to update all content across the site
// ─────────────────────────────────────────────────────────────────────────────

export const PROFILE = {
  name:          'Dhrumil Patel',
  tagline:       'Developer × Cybersecurity Student',
  subtitle:      'Building immersive digital experiences while exploring cybersecurity, secure systems, and modern engineering. Developer by day — security student by night.',
  location:      'Gandhinagar, GJ, India',
  email:         'pdhrumil840@gmail.com',
  phone:         '+91 9558136602',
  availableNote: 'Available · 2026',
  cgpa:          '8.6',
  internships:   4,
} as const

export const ROLES = [
  'Full-Stack Developer',
  'Security-Focused Builder',
  'Creative Technologist',
  'Cybersecurity Graduate Student',
  'Digital Systems Explorer',
] as const

export const DEV_SKILLS = [
  { name: 'Angular / AngularJS',     pct: 70 },
  { name: 'Node.js',                  pct: 65 },
  { name: 'MySQL / Databases',        pct: 65 },
  { name: 'C',                        pct: 85 },
  { name: 'Java & OOP',              pct: 60 },
  { name: 'Django / Python',          pct: 45 },
  { name: 'Git & Version Control',    pct: 78 },
  { name: 'HTML / CSS',              pct: 80 },
] as const

export const CYBER_SKILLS = [
  { name: 'Secure Coding Practices',          pct: 60 },
  { name: 'Input Validation / Access Control', pct: 58 },
  { name: 'Web Security Fundamentals',         pct: 45 },
  { name: 'Authentication Concepts',           pct: 50 },
  { name: 'SDLC & Secure Design',             pct: 65 },
  { name: 'Networking Fundamentals',           pct: 40 },
  { name: 'Linux / System Basics',             pct: 45 },
  { name: 'Data Science (Internshala)',        pct: 35 },
] as const

export type DotColor = 'red' | 'gold' | 'green' | 'white'

export const EXPERIENCE = [
  {
    id:       'zolvac',
    org:      'Zolvac Technologies',
    role:     'Software Developer Intern',
    location: 'Gandhinagar, GJ',
    period:   'Jun 2025 — Dec 2025',
    dotColor: 'red' as DotColor,
    points: [
      'Worked end-to-end across the SDLC — design, development, and maintenance of scalable client-facing applications.',
      'Applied secure coding practices including input validation and access control, directly improving application security posture.',
      'Debugged complex issues and produced technical documentation supporting long-term maintenance cycles.',
    ],
  },
  {
    id:       'vaxa',
    org:      'VAXA Infotech',
    role:     'Web Developer Intern',
    location: 'GJ',
    period:   'Dec 2024 — May 2025',
    dotColor: 'gold' as DotColor,
    points: [
      'Built modular frontend components and backend logic for a live Restaurant Management System using Angular, Node.js, and MySQL.',
      'Practised reusable component design, clean code structure, and Git-based team workflows alongside senior developers.',
      'Improved debugging and systems-thinking skills on a live production codebase.',
    ],
  },
  {
    id:       'prodigy',
    org:      'Prodigy Infotech',
    role:     'Software Developer Intern',
    location: 'Gandhinagar, GJ',
    period:   'Dec 2023 — Jan 2024',
    dotColor: 'white' as DotColor,
    points: [
      'Mastered Java and OOP fundamentals — laying the engineering foundation for all subsequent development work.',
    ],
  },
  {
    id:       'batwebs',
    org:      'Batwebs.com',
    role:     'Web Developer Intern',
    location: 'Gandhinagar, GJ',
    period:   'Dec 2023 — Jan 2024',
    dotColor: 'green' as DotColor,
    points: [
      'Developed a chatbot, blog platform, and weather dashboard — first real full-stack Python/Django experience.',
      'Gained hands-on project management and web deployment experience in an agency environment.',
    ],
  },
  {
    id:       'selfstudy',
    org:      'Self-Directed Security Learning',
    role:     'Technical Lab · Independent',
    location: '',
    period:   'Ongoing · 2024–Present',
    dotColor: 'green' as DotColor,
    points: [
      'Studying web application security, authentication flows, and secure system design principles.',
      'Applying security-aware thinking across all active development work — treating security as a first-class concern.',
      'Completed Introduction to Data Science (Internshala) — expanding analytical toolkit.',
    ],
  },
] as const

export const PROJECTS = [
  {
    id:    'rms',
    num:   '01',
    type:  'dev' as const,
    tags:  ['Full-Stack', 'Live Deployment'],
    name:  'Restaurant Management System',
    desc:  'Modular full-stack system handling orders, inventory, and table management for a real client. Angular frontend with Node.js/MySQL backend using reusable component architecture.',
    stack: ['Angular', 'Node.js', 'MySQL', 'REST API'],
  },
  {
    id:    'client-apps',
    num:   '02',
    type:  'cyber' as const,
    tags:  ['Security-Aware', 'SDLC'],
    name:  'Client Web Applications',
    desc:  'Scalable applications built at Zolvac with secure coding at the core — input validation, access control, and documented architecture for production maintenance.',
    stack: ['Secure Coding', 'SDLC', 'Documentation'],
  },
  {
    id:    'chatbot',
    num:   '03',
    type:  'dev' as const,
    tags:  ['AI', 'Django'],
    name:  'Conversational Chatbot',
    desc:  'Dynamic chatbot with Python and Django — session management, intelligent response routing, and real-time user input handling.',
    stack: ['Python', 'Django', 'NLP Basics'],
  },
  {
    id:    'blog',
    num:   '04',
    type:  'gold' as const,
    tags:  ['Full-Stack', 'CMS'],
    name:  'Blog Platform',
    desc:  'Content management system with full CRUD, reusable Django templates, and responsive frontend design — clean architecture from day one.',
    stack: ['Django', 'Python', 'HTML/CSS'],
  },
  {
    id:    'weather',
    num:   '05',
    type:  'dev' as const,
    tags:  ['API', 'Frontend'],
    name:  'Weather Dashboard',
    desc:  'Real-time weather app consuming live API data with error-handled data flows, responsive UI, and location-based forecasting.',
    stack: ['HTML/CSS/JS', 'REST API', 'Python'],
  },
  {
    id:    'seclab',
    num:   '06',
    type:  'cyber' as const,
    tags:  ['Security Lab', 'In Progress'],
    name:  'Web Security Experiments',
    desc:  'Personal security lab — studying OWASP fundamentals, testing input validation, exploring authentication flows, and building a mental model of how systems fail.',
    stack: ['OWASP', 'Python', 'Web Security', 'Research'],
  },
] as const

export const EDUCATION = [
  {
    degree: 'B.E. Information Technology',
    school: 'Aditya Silver Oak Institute of Technology, Ahmedabad',
    badge:  'CGPA 8.6 — Academic Distinction',
    year:   '2025',
  },
  {
    degree: 'Introduction to Data Science',
    school: 'Internshala — Certified Course',
    badge:  'Certificate · Analytical Toolkit',
    year:   '+',
  },
] as const
