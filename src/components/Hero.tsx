import React from 'react';
import { ArrowRight, Download, Star, Trophy, Code, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30 mb-8">
            <Star className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" />
            <span className="text-green-100 text-sm">Available for Freelance Projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Engineer &<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Hi! I'm <span className="text-blue-400 font-semibold">Danish Mustafa</span>, a software engineer from Faisalabad, Pakistan. 
            I specialize in AI, ML, Generative AI, and modern web development with React. 
            I've solved 400+ LeetCode problems and won multiple international hackathons.
          </p>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-white">400+ LeetCode Problems</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white">Harvard CS50x Winner</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Users className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white">200+ Students Trained</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/60">AI Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-white/60">Hackathons Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-white/60">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-white/60">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center"
            >
              Start Your AI Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://danishmustafa786.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center"
            >
              <Download className="mr-2 w-5 h-5" />
              View Full Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;