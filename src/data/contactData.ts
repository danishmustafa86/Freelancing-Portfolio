// Data for Contact section
import { Mail, MapPin, Globe, Github, Linkedin, Zap, MessageCircle } from 'lucide-react';

export const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'danishjajja86@gmail.com',
    href: 'mailto:danishjajja86@gmail.com',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Faisalabad, Pakistan',
    href: '#',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    label: 'Portfolio',
    value: 'danishmustafa786.vercel.app',
    href: 'https://danishmustafa786.vercel.app/',
    gradient: 'from-purple-500 to-pink-500'
  }
];

export const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'danishmustafa86',
    href: 'https://github.com/danishmustafa86',
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'danish-mustafa',
    href: 'https://linkedin.com/in/danish-mustafa',
    gradient: 'from-blue-600 to-blue-800'
  }
];

export const projectTypes = [
  { icon: Zap, title: 'AI & ML Solutions', description: 'Custom AI applications and automation' },
  { icon: Globe, title: 'Web Development', description: 'Modern, scalable web applications' },
  { icon: MessageCircle, title: 'Technical Mentorship', description: 'Training and skill development' },
]; 