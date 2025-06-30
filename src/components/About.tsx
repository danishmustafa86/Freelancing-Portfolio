import React from 'react';
import { Code2, Zap, Brain, Target, Trophy, Users, BookOpen, Globe } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Python/JavaScript', level: 95 },
    { name: 'React/Next.js', level: 92 },
    { name: 'AI/ML & GenAI', level: 90 },
    { name: 'LangChain/LangGraph', level: 88 },
    { name: 'Data Structures & Algorithms', level: 95 },
    { name: 'Problem Solving', level: 98 },
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expert in modern web technologies with React, Next.js, and Python. Building scalable applications with clean, efficient code.'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Specialized in Generative AI, RAG systems, LangChain, LangGraph, LangSmith, Crew.ai, and Graph Databases.'
    },
    {
      icon: Trophy,
      title: 'Competitive Programming',
      description: 'Solved 400+ LeetCode problems. Harvard CS50x Puzzle Day winner (9/9 in 2025, 8/9 in 2024).'
    },
    {
      icon: Users,
      title: 'Teaching & Mentoring',
      description: 'DSA Trainer at iCodeGuru, taught 200+ students globally. Stanford Code in Place Section Leader.'
    },
  ];

  const techStack = [
    {
      category: 'Programming Languages',
      technologies: ['Python', 'JavaScript (ES6+)', 'C/C++', 'Java']
    },
    {
      category: 'Web Development',
      technologies: ['React', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS']
    },
    {
      category: 'AI & Machine Learning',
      technologies: ['LangChain', 'LangGraph', 'LangSmith', 'Crew.ai', 'RAG', 'Graph Databases']
    },
    {
      category: 'Problem Solving',
      technologies: ['Data Structures', 'Algorithms', 'LeetCode (400+ solved)', 'Competitive Programming']
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Software engineer from Faisalabad, Pakistan, with expertise in AI, ML, and web development. 
            Passionate about solving complex problems and teaching others.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-white/80">
                <p>
                  Hello! I'm Danish, a software engineer from Faisalabad, Pakistan, with a passion for 
                  AI, machine learning, and web development. My journey combines competitive programming 
                  excellence with practical application development.
                </p>
                <p>
                  I have expertise in AI, ML, Generative AI, and web application development using React. 
                  I've worked on multiple projects in international hackathons, leveraging my combined 
                  experience in AI and web development.
                </p>
                <p>
                  As a DSA Trainer at iCodeGuru (Welfare Organization), I've helped over 200 students 
                  master data structures and algorithms while solving LeetCode problems effectively. 
                  Currently, I'm diving deep into Generative AI, with a special focus on LangGraph, 
                  LangChain, LangSmith, Crew.ai, AgenticAI and Graph Databases.
                </p>
              </div>

              {/* Education & Certifications */}
              <div className="mt-8">
                <h4 className="font-semibold text-white mb-4">Education & Certifications</h4>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 text-blue-400 mr-3" />
                    <span>University of Agriculture, Faisalabad (Undergraduate)</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 text-blue-400 mr-3" />
                    <span>Certified Web Designer - Saylani Mass IT Training</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 text-blue-400 mr-3" />
                    <span>Stanford Code in Place - Section Leader</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-8">
                <h4 className="font-semibold text-white mb-4">Core Skills</h4>
                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm text-white/80 mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights & Tech Stack */}
          <div className="space-y-6">
            {/* Highlights */}
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{highlight.title}</h4>
                    <p className="text-white/80">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Tech Stack */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-semibold text-white mb-4">Tech Stack</h4>
              <div className="space-y-4">
                {techStack.map((category, index) => (
                  <div key={index}>
                    <h5 className="text-blue-300 font-medium mb-2">{category.category}:</h5>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
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