import React from 'react';
import { Code2, Zap, Brain, Target, Trophy, Users, BookOpen, Globe, Award, Star, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Python/JavaScript', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'React/Next.js', level: 92, color: 'from-purple-500 to-pink-500' },
    { name: 'AI/ML & GenAI', level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'LangChain/LangGraph', level: 88, color: 'from-orange-500 to-red-500' },
    { name: 'Data Structures & Algorithms', level: 95, color: 'from-indigo-500 to-purple-500' },
    { name: 'Problem Solving', level: 98, color: 'from-yellow-500 to-orange-500' },
  ];

  const highlights = [
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
      description: 'Solved 400+ LeetCode problems. Harvard CS50x Puzzle Day winner (9/9 in 2025, 8/9 in 2024). Proven problem-solving mastery.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Global Educator & Mentor',
      description: 'DSA Trainer at iCodeGuru, empowered 200+ students worldwide. Stanford Code in Place Section Leader.',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  const achievements = [
    { icon: Award, label: 'Harvard CS50x Winner', value: '2024 & 2025' },
    { icon: Star, label: 'LeetCode Problems', value: '400+ Solved' },
    { icon: Users, label: 'Students Trained', value: '200+ Globally' },
    { icon: Trophy, label: 'Hackathons Won', value: '15+ International' },
  ];

  const techStack = [
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

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            A passionate software engineer from Faisalabad, Pakistan, dedicated to transforming ideas into 
            intelligent solutions through AI, machine learning, and cutting-edge web development.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{achievement.value}</div>
              <div className="text-white/70 font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Skills */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  My journey began with a simple fascination for solving complex problems. Today, I'm a software engineer 
                  who bridges the gap between cutting-edge AI research and practical business solutions.
                </p>
                <p>
                  With expertise spanning AI, ML, Generative AI, and modern web development, I've participated in 
                  international hackathons and delivered solutions that drive real business impact. My competitive 
                  programming background gives me a unique edge in algorithm design and optimization.
                </p>
                <p>
                  As a DSA Trainer at iCodeGuru, I've mentored over 200 students globally, helping them master 
                  data structures and algorithms. I'm currently pioneering work in Generative AI, with deep expertise 
                  in LangGraph, LangChain, LangSmith, Crew.ai, and Graph Databases.
                </p>
              </div>

              {/* Education & Certifications */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-bold text-white mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 text-blue-400 mr-2" />
                  Education & Certifications
                </h4>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center p-3 bg-white/5 rounded-xl">
                    <Globe className="w-4 h-4 text-blue-400 mr-3" />
                    <span>University of Agriculture, Faisalabad (Undergraduate)</span>
                  </div>
                  <div className="flex items-center p-3 bg-white/5 rounded-xl">
                    <Award className="w-4 h-4 text-green-400 mr-3" />
                    <span>Certified Web Designer - Saylani Mass IT Training</span>
                  </div>
                  <div className="flex items-center p-3 bg-white/5 rounded-xl">
                    <Star className="w-4 h-4 text-purple-400 mr-3" />
                    <span>Stanford Code in Place - Section Leader</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h4 className="font-bold text-white mb-6 text-xl">Core Expertise</h4>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between text-white/90 mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights & Tech Stack */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${highlight.gradient} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-3 text-lg">{highlight.title}</h4>
                      <p className="text-white/80 leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h4 className="font-bold text-white mb-6 text-xl flex items-center">
                <Zap className="w-6 h-6 text-yellow-400 mr-2" />
                Technology Stack
              </h4>
              <div className="space-y-6">
                {techStack.map((category, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center mb-3">
                      <div className={`w-3 h-3 bg-gradient-to-r ${category.gradient} rounded-full mr-3`}></div>
                      <h5 className="text-white font-bold">{category.category}</h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`bg-gradient-to-r ${category.gradient} bg-opacity-20 text-white px-3 py-2 rounded-full text-sm border border-white/20 hover:scale-105 transition-transform duration-200 cursor-default`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;