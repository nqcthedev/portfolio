export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "YouTube", href: "#youtube" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = {
  expert: [
    "JavaScript (ES2022+)",
    "TypeScript",
    "React",
    "Redux Toolkit / RTK Query",
    "RESTful APIs",
  ],
  proficient: [
    "Next.js (App Router)",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Framer Motion",
    "Socket.io",
    "Material-UI",
    "JWT Auth",
    "Vue 2",
    "React Hook Form",
    "Ant Design",
  ],
  devops: [
    "Git / GitHub Actions",
    "Docker",
    "AWS (EC2, S3)",
    "Vercel",
    "Firebase",
  ],
  specialized: [
    "Web3.js & Ethers.js",
    "Technical SEO",
    "Google Search Console",
    "SEMRush",
  ],
  aiNative: [
    "Claude (Anthropic)",
    "Google Gemini",
    "OpenAI API",
    "MCP / Agentic Workflows",
    "RAG Pipelines",
  ],
  learning: [
    "PostgreSQL & Prisma",
    "SQL Query Design",
    "Vitest / Jest",
    "React Testing Library",
    "Advanced AI Engineering",
  ],
};

export const EXPERIENCES = [
  {
    company: "Playground Ltd.",
    role: "Full-stack Developer",
    period: "Sep 2023 – Sep 2024",
    location: "Ho Chi Minh City, VN",
    project: "Blockchain P2P Exchange",
    description:
      "Open-source peer-to-peer cryptocurrency exchange platform",
    stack: ["Next.js", "Node.js", "MongoDB", "Web3.js", "Ethers.js"],
    highlights: [
      "Built full-stack marketing & blog platform enabling 200+ articles",
      "Integrated Web3.js & Ethers.js for real-time on-chain data queries",
      "Decentralized auth combining JWT + wallet-signature verification",
      "Led migration to Next.js App Router improving DX across team",
    ],
    color: "#00d4ff",
  },
  {
    company: "Sanbul Solutions",
    role: "Front-End Developer",
    period: "Apr 2023 – Sep 2023",
    location: "Ho Chi Minh City, VN",
    project: "Casual Game Suite",
    description:
      "Flip Coin, Hilo, Sprint Wheels real-time multiplayer games",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Socket.io",
      "Framer Motion",
    ],
    highlights: [
      "Built 3 real-time game interfaces with sub-100ms latency",
      "Animation system at 60fps on mid-tier mobile devices",
      "Edge-case handling: disconnects, race conditions, replay",
    ],
    color: "#9333ea",
  },
  {
    company: "PapaGroup",
    role: "Front-End Developer",
    period: "Dec 2021 – Apr 2023",
    location: "Ho Chi Minh City, VN",
    project: "WHIZZ + TABTAB-ASIAN",
    description: "Enterprise property-valuation & real-estate exchange platforms",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Next.js",
      "Material-UI",
      "Ant Design",
    ],
    highlights: [
      "Owned UI & business logic for 7 core modules in WHIZZ",
      "100% responsive layouts across mobile/tablet/desktop",
      "Built base layout for TABTAB-ASIAN real-estate platform",
      "Also shipped VSTAR-SCHOOL (Vue 2) and P-INVOICE (React)",
    ],
    color: "#10b981",
  },
];

export const PROJECTS = [
  {
    title: "4K Movie",
    description:
      "Full-stack movie streaming web app with multi-provider auth, i18n, dark/light theme, and nested comments system.",
    stack: [
      "Vite",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Firebase",
      "TMDB API",
      "Framer Motion",
    ],
    highlights: [
      "Multi-provider auth: Firebase, Google, Facebook, GitHub",
      "Multi-language, dark/light theme, RTL layout",
      "Nested comments with replies & reactions",
      "Debounced keyword search with lazy-loaded images",
    ],
    github: "https://github.com/nqcthedev/4k-movie",
    live: "#",
    color: "#00d4ff",
    featured: true,
  },
  {
    title: "Entertainment Blog",
    description:
      "Production blog platform serving 10k+ monthly visitors with full SEO strategy achieving 10 Google page-1 rankings.",
    stack: ["Next.js 14", "Node.js", "MongoDB", "Material-UI"],
    highlights: [
      "10k+ monthly visitors",
      "10 keywords ranked Google page 1",
      "~30% organic traffic improvement",
      "Core Web Vitals optimization",
    ],
    color: "#9333ea",
    featured: false,
  },
];

export const YOUTUBE_CHANNELS = [
  {
    name: "WILDERNESS COOKING SHORTSS",
    handle: "@WILDERNESSCOOKINGSHORTSS",
    subscribers: "1M+",
    views: "350M+",
    award: "Gold Play Button",
    description: "Wilderness cooking short-form content",
    color: "#f59e0b",
    emoji: "🏆",
  },
  {
    name: "Ngoc Reviews",
    handle: "@ngocreviews",
    subscribers: "600K",
    views: "1.1B+",
    award: "Silver Play Button",
    description: "Comedy & humor short-form",
    color: "#6366f1",
    emoji: "🎭",
  },
  {
    name: "Vy Banh Mi",
    handle: "@vybanhmii",
    subscribers: "200K",
    views: "200M+",
    award: "Silver Play Button",
    description: "Comedy & humor short-form",
    color: "#ec4899",
    emoji: "🎬",
  },
];

export const STATS = [
  { label: "Years Experience", value: "3+", icon: "code" },
  { label: "YouTube Subscribers", value: "1.8M+", icon: "users" },
  { label: "Lifetime Views", value: "1.65B+", icon: "eye" },
  { label: "Videos Published", value: "3000+", icon: "video" },
];
