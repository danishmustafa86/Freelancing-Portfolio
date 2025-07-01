// Data for Achievements section
import { Trophy, Award, Users, Code, Star } from 'lucide-react';

const currentYear = new Date().getFullYear();

export const hackathons = [
  {
    title: `Harvard CS50x Puzzle Day ${currentYear}`,
    result: 'Winner (9/9)',
    description: "Perfect score in Harvard's prestigious puzzle competition",
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: `Harvard CS50x Puzzle Day ${currentYear - 1}`,
    result: 'Winner (8/9)',
    description: 'Outstanding performance in competitive puzzle solving',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: `Stanford Code in Place ${currentYear - 1}`,
    result: 'Section Leader',
    description: 'Selected as senior student and section leader',
    icon: Award,
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: `Meta Hacker Cup ${currentYear - 1}`,
    result: 'Participant',
    description: "Competed in Meta's global programming competition",
    icon: Code,
    color: 'from-blue-600 to-cyan-500'
  },
  {
    title: 'UC Berkeley Calico Competition',
    result: 'Participant',
    description: 'Participated in prestigious coding competition',
    icon: Code,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Multiple International Hackathons',
    result: 'Active Participant',
    description: 'Lablab.ai, iCodeGuru, MLH hackathons',
    icon: Star,
    color: 'from-purple-500 to-pink-500'
  }
];

export const stats = [
  {
    number: '400+',
    label: 'LeetCode Problems Solved',
    description: 'Mastery in Data Structures & Algorithms',
    icon: Code
  },
  {
    number: '200+',
    label: 'Students Trained',
    description: 'Global mentorship in AI & DSA',
    icon: Users
  },
  {
    number: '10+',
    label: 'Hackathons Won',
    description: 'International competitions',
    icon: Trophy
  },
  {
    number: '5+',
    label: 'Years Experience',
    description: 'Software development & AI',
    icon: Award
  }
]; 