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
  name: 'Akhil Durga Prasad',
  title: 'Embedded Systems Engineer & AI Explorer',
  description:
    'Portfolio of Akhil Durga Prasad — Embedded Systems Engineer, IoT Enthusiast, Game Developer, and AI Explorer.',
  url: 'https://akhilportfolio.vercel.app',
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
  'Embedded Systems Engineer',
  'IoT Enthusiast',
  'Game Developer',
  'AI Explorer',
  'Problem Solver',
]

export const skills: Skill[] = [
  { name: 'C', category: 'Programming', icon: 'Code2' },
  { name: 'C++', category: 'Programming', icon: 'Code2' },
  { name: 'Python', category: 'Programming', icon: 'FileJson' },
  { name: 'Java', category: 'Programming', icon: 'FileJson' },
  { name: 'JavaScript', category: 'Programming', icon: 'FileJson' },
  { name: 'HTML', category: 'Programming', icon: 'FileCode' },
  { name: 'CSS', category: 'Programming', icon: 'FileCode' },
  { name: 'SQL', category: 'Programming', icon: 'Database' },
  { name: 'Unity', category: 'Game Development', icon: 'Gamepad2' },
  { name: 'Godot', category: 'Game Development', icon: 'Gamepad2' },
  { name: 'Arduino', category: 'Embedded Systems', icon: 'Cpu' },
  { name: 'ESP32', category: 'Embedded Systems', icon: 'Cpu' },
  { name: 'IoT', category: 'Embedded Systems', icon: 'Wifi' },
  { name: 'Electronics', category: 'Embedded Systems', icon: 'Zap' },
  { name: 'Machine Learning', category: 'AI', icon: 'Brain' },
  { name: 'Prompt Engineering', category: 'AI', icon: 'MessageSquare' },
  { name: 'Computer Vision', category: 'AI', icon: 'Eye' },
  { name: 'Git', category: 'Tools', icon: 'GitBranch' },
  { name: 'GitHub', category: 'Tools', icon: 'Github' },
  { name: 'VS Code', category: 'Tools', icon: 'Terminal' },
  { name: 'Linux', category: 'Tools', icon: 'Server' },
]

export const timeline: TimelineItem[] = [
  {
    year: '2022 - 2026',
    title: 'ANITS',
    subtitle: 'Electronics & Communication Engineering',
    description:
      'Pursuing a B.Tech in Electronics and Communication Engineering, building a strong foundation in hardware, embedded systems, and signal processing.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Embedded Systems with IoT',
    subtitle: 'Internship',
    description:
      'Hands-on internship focused on embedded systems design, microcontroller programming, and IoT integration for real-world applications.',
    type: 'internship',
  },
  {
    year: '2024 - Present',
    title: 'AI & Game Development',
    subtitle: 'Current Learning',
    description:
      'Exploring artificial intelligence, machine learning, Unity, and Godot to build intelligent systems and immersive interactive experiences.',
    type: 'learning',
  },
  {
    year: '2025 - Present',
    title: 'Full Stack Development',
    subtitle: 'Current Learning',
    description:
      'Expanding expertise into full-stack web development with modern frameworks, databases, and cloud deployment.',
    type: 'learning',
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'Embedded Systems Internship',
    role: 'IoT Intern',
    period: '2024',
    description:
      'Developed IoT solutions using ESP32 and Arduino, integrated sensors, and built real-time monitoring dashboards.',
    gradient: 'from-sky-400/20 to-blue-600/20',
  },
  {
    company: 'Academic Projects',
    role: 'Embedded Systems Developer',
    period: '2023 - Present',
    description:
      'Built multiple embedded systems projects including smart home automation, environmental monitoring, and robotic control systems.',
    gradient: 'from-purple-400/20 to-pink-600/20',
  },
  {
    company: 'Game Development',
    role: 'Indie Game Developer',
    period: '2024 - Present',
    description:
      'Creating interactive games and experiences using Unity and Godot engines, exploring VR and interactive storytelling.',
    gradient: 'from-emerald-400/20 to-teal-600/20',
  },
]

export const stats: Stat[] = [
  { value: 15, label: 'Projects Completed', suffix: '+' },
  { value: 8, label: 'Programming Languages', suffix: '+' },
  { value: 500, label: 'Hours of Coding', suffix: '+' },
  { value: 12, label: 'Technologies Learned', suffix: '+' },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Dr. R. Venkateswara Rao',
    role: 'Professor',
    company: 'ANITS',
    quote:
      'Akhil demonstrates exceptional aptitude in embedded systems and a genuine passion for technology. His project work consistently exceeds expectations.',
    initials: 'VR',
  },
  {
    name: 'Tech Mentor',
    role: 'IoT Internship Supervisor',
    company: 'Embedded Systems Lab',
    quote:
      'One of the most dedicated learners I have mentored. His ability to grasp complex hardware-software integration concepts is remarkable.',
    initials: 'TM',
  },
  {
    name: 'Project Collaborator',
    role: 'Team Member',
    company: 'AI Research Group',
    quote:
      'Working with Akhil on AI projects has been incredible. He brings both technical depth and creative problem-solving to every challenge.',
    initials: 'PC',
  },
]

export const certificates: Certificate[] = [
  {
    title: 'Embedded Systems Design',
    issuer: 'NPTEL',
    date: '2024',
    gradient: 'from-sky-500/30 to-blue-500/30',
  },
  {
    title: 'IoT Fundamentals',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    gradient: 'from-blue-500/30 to-indigo-500/30',
  },
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    date: '2023',
    gradient: 'from-purple-500/30 to-pink-500/30',
  },
  {
    title: 'Machine Learning Basics',
    issuer: 'Stanford Online (Coursera)',
    date: '2024',
    gradient: 'from-emerald-500/30 to-teal-500/30',
  },
]

export const gallery: GalleryItem[] = [
  { title: 'IoT Workshop Demo', category: 'IoT', gradient: 'from-sky-500/20 to-blue-600/20' },
  { title: 'Embedded Systems Lab', category: 'Embedded', gradient: 'from-purple-500/20 to-pink-600/20' },
  { title: 'Game Development Showcase', category: 'Games', gradient: 'from-emerald-500/20 to-teal-600/20' },
  { title: 'AI Model Training Session', category: 'AI', gradient: 'from-orange-500/20 to-red-600/20' },
  { title: 'Circuit Design Project', category: 'Electronics', gradient: 'from-cyan-500/20 to-blue-600/20' },
  { title: 'Hackathon Presentation', category: 'Web', gradient: 'from-violet-500/20 to-purple-600/20' },
]

export const projects: Project[] = [
  {
    id: 'ai-iot-dashboard',
    title: 'AI-Powered IoT Dashboard',
    description:
      'A real-time monitoring dashboard that uses machine learning to predict equipment failures and optimize energy consumption across IoT sensor networks.',
    category: 'AI',
    tags: ['Python', 'TensorFlow', 'ESP32', 'React', 'MQTT'],
    gradient: 'from-sky-500/30 via-blue-500/30 to-indigo-500/30',
    image: '/projects/placeholder-1.jpg',
    liveUrl: '#',
    githubUrl: '#',
    caseStudyUrl: '#',
    featured: true,
  },
  {
    id: 'embedded-monitor',
    title: 'Embedded Systems Monitor',
    description:
      'A comprehensive monitoring system for embedded devices featuring real-time telemetry, over-the-air updates, and automated diagnostics.',
    category: 'Embedded',
    tags: ['C++', 'Arduino', 'ESP32', 'Sensors', 'WebSocket'],
    gradient: 'from-emerald-500/30 via-teal-500/30 to-cyan-500/30',
    image: '/projects/placeholder-2.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'unity-game-prototype',
    title: 'Unity Game Prototype',
    description:
      'An immersive 3D game prototype built with Unity, featuring dynamic environments, AI-driven NPCs, and physics-based interactions.',
    category: 'Games',
    tags: ['Unity', 'C#', 'Blender', 'Shader Graph'],
    gradient: 'from-purple-500/30 via-pink-500/30 to-rose-500/30',
    image: '/projects/placeholder-3.jpg',
    liveUrl: '#',
    githubUrl: '#',
    caseStudyUrl: '#',
  },
  {
    id: 'smart-home-hub',
    title: 'Smart Home Hub',
    description:
      'Centralized IoT controller for home automation with voice control, energy monitoring, and adaptive lighting systems.',
    category: 'IoT',
    tags: ['ESP32', 'MQTT', 'Python', 'React Native'],
    gradient: 'from-orange-500/30 via-amber-500/30 to-yellow-500/30',
    image: '/projects/placeholder-4.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'cv-recognition',
    title: 'Computer Vision Recognition',
    description:
      'Real-time object detection and recognition system using deep learning, optimized for edge deployment on embedded devices.',
    category: 'AI',
    tags: ['Python', 'OpenCV', 'YOLO', 'TensorFlow Lite'],
    gradient: 'from-rose-500/30 via-pink-500/30 to-fuchsia-500/30',
    image: '/projects/placeholder-5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'portfolio-website',
    title: 'This Portfolio',
    description:
      'Awwwards-inspired portfolio built with Next.js, Three.js, and Framer Motion featuring immersive 3D visuals and premium interactions.',
    category: 'Web',
    tags: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    gradient: 'from-sky-500/30 via-indigo-500/30 to-violet-500/30',
    image: '/projects/placeholder-6.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
]

export const blogPosts: BlogPost[] = [
  {
    title: 'Getting Started with ESP32 and MQTT',
    excerpt:
      'A comprehensive guide to setting up ESP32 microcontrollers with MQTT protocol for IoT applications.',
    date: '2024-12-15',
    category: 'IoT',
    gradient: 'from-sky-500/30 to-blue-500/30',
    slug: 'esp32-mqtt-guide',
  },
  {
    title: 'Why Embedded Systems Engineers Should Learn AI',
    excerpt:
      'Exploring the convergence of embedded systems and artificial intelligence, and how it creates new possibilities.',
    date: '2024-11-20',
    category: 'AI',
    gradient: 'from-purple-500/30 to-pink-500/30',
    slug: 'embedded-ai-convergence',
  },
  {
    title: 'Building Games with Godot: A Beginner Perspective',
    excerpt:
      'My journey learning Godot game engine and the first game I built. Tips for other beginners.',
    date: '2024-10-05',
    category: 'Games',
    gradient: 'from-emerald-500/30 to-teal-500/30',
    slug: 'godot-beginner-journey',
  },
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:akhil@example.com', icon: 'Mail' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
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
