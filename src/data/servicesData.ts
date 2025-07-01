// Data for Services section
import { Globe, Bot, TrendingUp, Code } from 'lucide-react';

export const services = [
  {
    icon: Bot,
    title: 'AI & Machine Learning Solutions',
    description: 'Transform your business with cutting-edge AI applications. From concept to deployment, I deliver intelligent solutions that drive measurable results.',
    features: [
      'Custom Generative AI Applications',
      'RAG (Retrieval-Augmented Generation) Systems',
      'LangChain & LangGraph Integration',
      'Multi-Agent AI Systems (Crew.ai)',
      'Graph Database Solutions',
      'AI Model Fine-tuning & Optimization'
    ],
    benefits: [
      'Reduce operational costs by 40-60%',
      'Automate complex decision-making',
      'Scale intelligent operations'
    ],
    pricing: 'Starting at $2,500',
    timeline: '2-4 weeks',
    gradient: 'from-purple-500 to-pink-500',
    popular: true
  },
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    description: 'Build modern, scalable web applications that engage users and drive business growth. Performance-optimized and production-ready.',
    features: [
      'React & Next.js Applications',
      'Python Backend Development',
      'Responsive & Mobile-First Design',
      'API Development & Integration',
      'Database Design & Optimization',
      'Performance & SEO Optimization'
    ],
    benefits: [
      'Increase user engagement by 70%',
      'Improve page load speeds',
      'Mobile-responsive design'
    ],
    pricing: 'Starting at $1,800',
    timeline: '1-3 weeks',
    gradient: 'from-blue-500 to-cyan-500',
    popular: false
  },
  {
    icon: Code,
    title: 'Algorithm & Problem Solving',
    description: 'Optimize your systems with expert algorithm design. From technical interviews to complex optimization challenges.',
    features: [
      'Custom Algorithm Development',
      'Data Structure Implementation',
      'Performance Optimization',
      'Technical Interview Preparation',
      'Code Review & Refactoring',
      'System Architecture Design'
    ],
    benefits: [
      'Improve system performance by 80%',
      'Reduce computational complexity',
      'Expert problem-solving approach'
    ],
    pricing: 'Starting at $75/hour',
    timeline: 'Flexible',
    gradient: 'from-green-500 to-emerald-500',
    popular: false
  },
  {
    icon: TrendingUp,
    title: 'Technical Training & Mentorship',
    description: 'Accelerate your team\'s growth with comprehensive training programs. From AI fundamentals to advanced problem-solving.',
    features: [
      'AI & ML Training Programs',
      'Web Development Bootcamps',
      'Data Structures & Algorithms Mastery',
      'One-on-One Mentorship',
      'Team Training Sessions',
      'Career Development Guidance'
    ],
    benefits: [
      'Upskill teams in 4-6 weeks',
      'Improve coding interview success',
      'Build internal AI capabilities'
    ],
    pricing: 'Starting at $60/hour',
    timeline: 'Ongoing',
    gradient: 'from-orange-500 to-red-500',
    popular: false
  }
]; 