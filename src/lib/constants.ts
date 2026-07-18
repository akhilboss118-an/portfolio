import type {
  NavLink,
  Skill,
  TimelineItem,
  Project,
  ExperienceItem,
  Testimonial,
  Stat,
  Certificate,
  GalleryItem,
  BlogPost,
  SocialLink,
} from '@/types'

export const siteConfig = {
  name: 'Bandi Akhil Durga Prasad',
  title: 'Learning by Building | Embedded Systems & AI',
  description:
    'Portfolio of Bandi Akhil Durga Prasad — ECE student at ANITS exploring embedded systems, IoT, AI, game development, and web technologies.',
  url: 'https://portfolio-wheat-theta-74.vercel.app',
  ogImage: '/og.jpg',
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const rotatingSubtitles: string[] = [
  'Electronics & Communication Engineer',
  'Embedded Systems Explorer',
  'IoT Enthusiast',
  'Game Developer',
  'AI-assisted Builder',
]

export const skills: Skill[] = [
  { name: 'C', category: 'Programming', icon: 'Code2' },
  { name: 'Java', category: 'Programming', icon: 'Code2' },
  { name: 'Python', category: 'Programming', icon: 'FileJson' },
  { name: 'JavaScript', category: 'Programming', icon: 'FileJson' },
  { name: 'HTML', category: 'Programming', icon: 'FileCode' },
  { name: 'CSS', category: 'Programming', icon: 'FileCode' },
  { name: 'C++', category: 'Programming', icon: 'FileCode' },
  { name: 'Arduino', category: 'Embedded Systems', icon: 'Cpu' },
  { name: 'IoT', category: 'Embedded Systems', icon: 'Wifi' },
  { name: 'Embedded Systems', category: 'Embedded Systems', icon: 'Cpu' },
  { name: 'ESP32', category: 'Embedded Systems', icon: 'Zap' },
  { name: 'Embedded C', category: 'Embedded Systems', icon: 'Terminal' },
  { name: 'Electronics', category: 'Embedded Systems', icon: 'Zap' },
  { name: 'Game Development', category: 'Game Development', icon: 'Gamepad2' },
  { name: 'Web Development', category: 'Game Development', icon: 'Globe' },
  { name: 'AI-assisted Dev', category: 'AI', icon: 'Brain' },
  { name: 'Machine Learning', category: 'AI', icon: 'Brain' },
  { name: 'Prompt Engineering', category: 'AI', icon: 'MessageSquare' },
  { name: 'VS Code', category: 'Tools', icon: 'Terminal' },
  { name: 'GitHub', category: 'Tools', icon: 'Github' },
  { name: 'Git', category: 'Tools', icon: 'GitBranch' },
  { name: 'ChatGPT', category: 'Tools', icon: 'MessageSquare' },
  { name: 'Claude', category: 'Tools', icon: 'MessageSquare' },
  { name: 'Cursor', category: 'Tools', icon: 'Terminal' },
]

export const timeline: TimelineItem[] = [
  {
    year: '2025',
    title: 'Started Exploring Embedded Systems & IoT',
    subtitle: 'Discovery Phase',
    description:
      'Began my journey into embedded systems and IoT, fascinated by how software interacts with hardware to create real-world impact.',
    type: 'learning',
  },
  {
    year: '2025',
    title: 'Discovered Arduino & Electronics',
    subtitle: 'Hands-on Hardware',
    description:
      'Started working with Arduino microcontrollers, sensors, and basic electronics — building my first circuits and firmware.',
    type: 'learning',
  },
  {
    year: '2025',
    title: 'Built Software Experiments',
    subtitle: 'Programming Foundations',
    description:
      'Explored software development with Python and Java, building small tools and utilities to strengthen my programming fundamentals.',
    type: 'learning',
  },
  {
    year: '2025',
    title: 'Started Game Development',
    subtitle: 'Creative Coding',
    description:
      'Dove into game development, building a 2D physics playground from scratch to understand game loops, collision, and rendering.',
    type: 'learning',
  },
  {
    year: '2025',
    title: 'Web & AI-assisted Development',
    subtitle: 'Full Stack Exploration',
    description:
      'Learning web development while leveraging AI tools as a pair programmer for faster feedback loops and cleaner code.',
    type: 'learning',
  },
  {
    year: 'Future',
    title: 'The Next Thing Worth Building',
    subtitle: 'Always Learning',
    description:
      'Every project is a testbed. Curiosity first, opinions second. Always looking for the next thing worth building.',
    type: 'learning',
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'IoT Sense',
    role: 'Embedded Systems Builder',
    period: '2025',
    description:
      'Built a sensor node streaming environmental data from Arduino to a live dashboard. Learned that hardware reliability is a design problem, not just a coding one.',
    gradient: 'from-sky-400/20 to-blue-600/20',
  },
  {
    company: 'Pixel Playground',
    role: 'Game Developer',
    period: '2025',
    description:
      'Created a 2D game from scratch with custom physics, entity systems, and collision detection. Discovered that constraints breed creativity.',
    gradient: 'from-purple-400/20 to-pink-600/20',
  },
  {
    company: 'AI Study Buddy',
    role: 'AI-assisted Builder',
    period: '2025',
    description:
      'Built an AI pipeline that transforms messy notes into structured summaries and flashcards. Learned that AI shines when it removes friction from existing workflows.',
    gradient: 'from-emerald-400/20 to-teal-600/20',
  },
]

export const stats: Stat[] = [
  { value: 6, label: 'Projects Built', suffix: '+' },
  { value: 4, label: 'Domains Explored', suffix: '' },
  { value: 200, label: 'Hours Building', suffix: '+' },
  { value: 10, label: 'Technologies Used', suffix: '+' },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Learning by Building',
    role: 'Personal Philosophy',
    company: 'Every Project',
    quote:
      'I learn by building. Every project is an opportunity to explore a new technology — whether it is hardware, software, AI, or game development.',
    initials: 'AD',
  },
  {
    name: 'I Chase Experience',
    role: 'Not a Title',
    company: 'ECE Student at ANITS',
    quote:
      'From embedded systems and IoT to software, AI, game development, and web technologies — I do not chase a specific title. I chase experience.',
    initials: 'AD',
  },
  {
    name: 'Curiosity First',
    role: 'Hands-on Learner',
    company: 'Always Building',
    quote:
      'Concepts stick when they ship. I pick up new tech by making something small with it. Move from idea to prototype fast, then refine what matters.',
    initials: 'AD',
  },
]

export const certificates: Certificate[] = [
  {
    title: 'Electronics & Communication Engg',
    issuer: 'ANITS',
    date: '2022 - 2026',
    gradient: 'from-sky-500/30 to-blue-500/30',
  },
  {
    title: 'Embedded Systems & IoT',
    issuer: 'Self-directed Learning',
    date: '2025',
    gradient: 'from-blue-500/30 to-indigo-500/30',
  },
  {
    title: 'Game Development',
    issuer: 'Self-directed Learning',
    date: '2025',
    gradient: 'from-purple-500/30 to-pink-500/30',
  },
  {
    title: 'AI-assisted Development',
    issuer: 'Self-directed Learning',
    date: '2025',
    gradient: 'from-emerald-500/30 to-teal-500/30',
  },
]

export const gallery: GalleryItem[] = [
  { title: 'Arduino Sensor Setup', category: 'IoT', gradient: 'from-sky-500/20 to-blue-600/20', image: '/gallery/arduino-setup.png' },
  { title: 'Game Dev Prototype', category: 'Games', gradient: 'from-purple-500/20 to-pink-600/20', image: '/gallery/game-prototype.png' },
  { title: 'Circuit Design Lab', category: 'Electronics', gradient: 'from-cyan-500/20 to-blue-600/20', image: '/gallery/circuit-lab.png' },
  { title: 'AI Study Tool Demo', category: 'AI', gradient: 'from-orange-500/20 to-red-600/20', image: '/gallery/ai-demo.png' },
  { title: 'Web Dev Experiment', category: 'Web', gradient: 'from-violet-500/20 to-purple-600/20', image: '/gallery/web-experiment.png' },
  { title: 'Hardware Prototype', category: 'Embedded', gradient: 'from-emerald-500/20 to-teal-600/20', image: '/gallery/hardware-prototype.png' },
]

export const projects: Project[] = [
  {
    id: 'iot-sense',
    title: 'IoT Sense',
    description:
      'A sensor node that streams environmental data from an Arduino to a small dashboard. Features a firmware layer that batches readings and a lightweight web view for instant readability.',
    category: 'IoT',
    tags: ['Arduino', 'C', 'IoT', 'MQTT'],
    gradient: 'from-sky-500/30 via-blue-500/30 to-indigo-500/30',
    image: '/projects/iot-sense.png',
    liveUrl: 'https://github.com/akhilboss118-an/iot-sense',
    githubUrl: 'https://github.com/akhilboss118-an/iot-sense',
    featured: true,
  },
  {
    id: 'pixel-playground',
    title: 'Pixel Playground',
    description:
      'A small 2D game exploring physics, input, and game loop fundamentals. Built from scratch with a custom loop, entity system, and collision layer — kept intentionally small to stay legible.',
    category: 'Games',
    tags: ['Python', 'Game Loop', 'Physics', '2D'],
    gradient: 'from-emerald-500/30 via-teal-500/30 to-cyan-500/30',
    image: '/projects/pixel-playground.png',
    liveUrl: 'https://github.com/akhilboss118-an/pixel-playground',
    githubUrl: 'https://github.com/akhilboss118-an/pixel-playground',
  },
  {
    id: 'ai-study-buddy',
    title: 'AI Study Buddy',
    description:
      'An AI-powered assistant that turns messy class notes into structured summaries and flashcards. Uses an AI pipeline to clean notes, extract key ideas, and generate study sets on demand.',
    category: 'AI',
    tags: ['JavaScript', 'AI', 'Web', 'NLP'],
    gradient: 'from-purple-500/30 via-pink-500/30 to-rose-500/30',
    image: '/projects/ai-study-buddy.png',
    liveUrl: 'https://github.com/akhilboss118-an/ai-study-buddy',
    githubUrl: 'https://github.com/akhilboss118-an/ai-study-buddy',
    caseStudyUrl: '#',
  },
  {
    id: 'arduino-automation',
    title: 'Arduino Home Automation',
    description:
      'An IoT-based home automation prototype using Arduino, controlling lights and fans via Bluetooth and sensor-triggered logic.',
    category: 'Embedded',
    tags: ['Arduino', 'Embedded C', 'Bluetooth', 'Sensors'],
    gradient: 'from-orange-500/30 via-amber-500/30 to-yellow-500/30',
    image: '/projects/arduino-automation.png',
    liveUrl: 'https://github.com/akhilboss118-an/arduino-automation',
    githubUrl: 'https://github.com/akhilboss118-an/arduino-automation',
  },
  {
    id: 'web-experiments',
    title: 'Web Development Experiments',
    description:
      'A collection of small web projects exploring HTML, CSS, JavaScript, and responsive design patterns. Each experiment focuses on one concept.',
    category: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    gradient: 'from-rose-500/30 via-pink-500/30 to-fuchsia-500/30',
    image: '/projects/web-experiments.png',
    liveUrl: 'https://github.com/akhilboss118-an/web-experiments',
    githubUrl: 'https://github.com/akhilboss118-an/web-experiments',
  },
  {
    id: 'portfolio-website',
    title: 'This Portfolio',
    description:
      'A premium portfolio built with Next.js, Three.js, and Framer Motion. Features immersive 3D visuals, glassmorphism, and interactive CLI terminal.',
    category: 'Web',
    tags: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    gradient: 'from-sky-500/30 via-indigo-500/30 to-violet-500/30',
    image: '/projects/portfolio.png',
    liveUrl: 'https://portfolio-wheat-theta-74.vercel.app',
    githubUrl: 'https://github.com/akhilboss118-an/portfolio',
  },
]

export const blogPosts: BlogPost[] = [
  {
    title: 'Why I Learn by Building',
    excerpt:
      'Concepts stick when they ship. Here is why I pick up new tech by making something small with it rather than reading tutorials.',
    date: '2025-06-01',
    category: 'Philosophy',
    gradient: 'from-sky-500/30 to-blue-500/30',
    slug: 'learn-by-building',
  },
  {
    title: 'Hardware Reliability Is a Design Problem',
    excerpt:
      'What building an IoT sensor node taught me about timing, power management, and why hardware bugs are fundamentally different from software bugs.',
    date: '2025-05-15',
    category: 'Embedded',
    gradient: 'from-purple-500/30 to-pink-500/30',
    slug: 'hardware-reliability-design',
  },
  {
    title: 'AI as a Pair Programmer',
    excerpt:
      'How I use AI tools for faster feedback loops, cleaner code, and better explanations — without letting it replace the understanding.',
    date: '2025-04-20',
    category: 'AI',
    gradient: 'from-emerald-500/30 to-teal-500/30',
    slug: 'ai-pair-programmer',
  },
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/akhilboss118-an', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/akhilboss118-an', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:akhilboss118@gmail.com', icon: 'Mail' },
  { name: 'Instagram', url: 'https://instagram.com/akhilboss118', icon: 'Instagram' },
]

export const projectFilterCategories: Project['category'][] = [
  'All',
  'AI',
  'IoT',
  'Embedded',
  'Games',
  'Web',
  'Electronics',
]
