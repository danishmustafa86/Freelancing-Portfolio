// Data for About section
import { Code2, Zap, Brain, Target, Trophy, Users, BookOpen, Globe, Award, Star, Lightbulb } from 'lucide-react';

export const skills = [
  { name: 'Python/JavaScript', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'React/Next.js', level: 92, color: 'from-purple-500 to-pink-500' },
  { name: 'AI/ML & GenAI', level: 90, color: 'from-green-500 to-emerald-500' },
  { name: 'LangChain/LangGraph', level: 88, color: 'from-orange-500 to-red-500' },
  { name: 'Data Structures & Algorithms', level: 95, color: 'from-indigo-500 to-purple-500' },
  { name: 'Problem Solving', level: 98, color: 'from-yellow-500 to-orange-500' },
];

export const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Excellence',
    description: 'Architecting scalable applications with React, Next.js, and Python. Delivering clean, maintainable code that stands the test of time.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'AI Innovation Leader',
    description: 'Pioneering solutions with Generative AI, RAG systems, LangChain, LangGraph, LangSmith, Crew.ai, and Graph Databases.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Trophy,
    title: 'Competitive Programming Champion',
    description: `Solved 400+ LeetCode problems. Harvard CS50x Puzzle Day winner (9/9 in ${new Date().getFullYear()}, 8/9 in ${new Date().getFullYear() - 1}). Proven problem-solving mastery.`,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Global Educator & Mentor',
    description: 'DSA Trainer at iCodeGuru, empowered 200+ students worldwide. Stanford Code in Place Section Leader.',
    gradient: 'from-green-500 to-emerald-500'
  },
];

export const achievements = [
  { icon: Award, label: 'Harvard CS50x Winner', value: `${new Date().getFullYear() - 1} & ${new Date().getFullYear()}` },
  { icon: Star, label: 'LeetCode Problems', value: '400+ Solved' },
  { icon: Users, label: 'Students Trained', value: '200+ Globally' },
  { icon: Trophy, label: 'Hackathons Won', value: '15+ International' },
];

export const techStack = [
  {
    category: 'AI & Machine Learning',
    technologies: ['LangChain', 'LangGraph', 'LangSmith', 'Crew.ai', 'RAG Systems', 'Graph Databases', 'OpenAI GPT', 'AgenticAI'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Web Development',
    technologies: ['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Problem Solving',
    technologies: ['Data Structures', 'Algorithms', 'Dynamic Programming', 'Graph Theory', 'System Design', 'Optimization'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Tools & Platforms',
    technologies: ['Git', 'Docker', 'AWS', 'MongoDB', 'Redis', 'Supabase', 'Vercel', 'GitHub Actions'],
    gradient: 'from-orange-500 to-red-500'
  }
]; 