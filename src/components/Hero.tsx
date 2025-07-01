import React from 'react';
import { ArrowRight, Download, Star, Trophy, Code, Users, Sparkles, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-400/30 mb-8 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-yellow-400 mr-2 animate-pulse" fill="currentColor" />
            <span className="text-green-100 font-medium">Available for High-Impact AI Projects</span>
            <Zap className="w-4 h-4 text-yellow-400 ml-2" />
          </div>

          {/* Enhanced Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="block">AI Engineer &</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Innovation Catalyst
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
              Hi! I'm <span className="text-blue-400 font-bold">Danish Mustafa</span>, a software engineer from Faisalabad, Pakistan.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              I transform businesses with cutting-edge AI solutions, advanced web applications, and proven problem-solving expertise. 
              With <span className="text-purple-400 font-semibold">400+ LeetCode problems solved</span> and 
              <span className="text-green-400 font-semibold"> multiple international hackathon victories</span>, 
              I deliver results that exceed expectations.
            </p>
          </div>

          {/* Enhanced Key Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="group flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30 hover:scale-105 transition-all duration-300">
              <Code className="w-5 h-5 text-blue-400 mr-3 group-hover:animate-pulse" />
              <span className="text-white font-medium">400+ LeetCode Mastery</span>
            </div>
            <div className="group flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400/30 hover:scale-105 transition-all duration-300">
              <Trophy className="w-5 h-5 text-yellow-400 mr-3 group-hover:animate-pulse" />
              <span className="text-white font-medium">Harvard CS50x Champion</span>
            </div>
            <div className="group flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30 hover:scale-105 transition-all duration-300">
              <Users className="w-5 h-5 text-green-400 mr-3 group-hover:animate-pulse" />
              <span className="text-white font-medium">200+ Global Students</span>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-white/80 font-medium">AI Projects Delivered</div>
            </div>
            <div className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-white/80 font-medium">Hackathons Won</div>
            </div>
            <div className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
              <div className="text-white/80 font-medium">Students Mentored</div>
            </div>
            <div className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-white/80 font-medium">Years Excellence</div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Launch Your AI Project</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>
            <a 
              href="https://danishmustafa786.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center hover:scale-105 hover:shadow-xl"
            >
              <Download className="mr-3 w-6 h-6 group-hover:animate-bounce" />
              <span>Explore Portfolio</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Trusted by clients worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/40">
              <span className="font-semibold">Stanford Code in Place</span>
              <span>•</span>
              <span className="font-semibold">Harvard CS50x</span>
              <span>•</span>
              <span className="font-semibold">iCodeGuru</span>
              <span>•</span>
              <span className="font-semibold">Meta Hacker Cup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;