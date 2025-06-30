import React from 'react';
import { Globe, Bot, TrendingUp, Code, ArrowRight, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI & Machine Learning Solutions',
      description: 'Custom AI applications using Generative AI, RAG systems, LangChain, LangGraph, and advanced ML models.',
      features: [
        'Generative AI Applications',
        'RAG (Retrieval-Augmented Generation)',
        'LangChain & LangGraph Integration',
        'Custom AI Model Development',
        'Graph Database Solutions',
        'AgenticAI Systems'
      ],
      pricing: 'Starting at $2,000',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Full-Stack Web Development',
      description: 'Modern web applications built with React, Next.js, and Python backends. Scalable and production-ready.',
      features: [
        'React & Next.js Applications',
        'Python Backend Development',
        'Responsive Design',
        'API Development & Integration',
        'Database Design & Optimization',
        'Performance Optimization'
      ],
      pricing: 'Starting at $1,500',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Algorithm & Problem Solving',
      description: 'Expert-level algorithm design and optimization. LeetCode coaching and competitive programming mentorship.',
      features: [
        'Algorithm Design & Analysis',
        'Data Structure Implementation',
        'LeetCode Problem Solving',
        'Competitive Programming Coaching',
        'Code Optimization',
        'Technical Interview Preparation'
      ],
      pricing: 'Starting at $50/hour',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Technical Training & Mentorship',
      description: 'Comprehensive training programs for individuals and teams in AI, web development, and problem-solving.',
      features: [
        'AI & ML Training Programs',
        'Web Development Bootcamps',
        'DSA Mastery Courses',
        'One-on-One Mentorship',
        'Team Training Sessions',
        'Career Guidance'
      ],
      pricing: 'Starting at $40/hour',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive AI and development solutions backed by proven expertise 
            in competitive programming and real-world application development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-blue-300 font-semibold">{service.pricing}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;