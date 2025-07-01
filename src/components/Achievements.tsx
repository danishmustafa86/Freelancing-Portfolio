import React from 'react';
import { Trophy, Award, Users, Code, ExternalLink, Star } from 'lucide-react';
import { hackathons, stats } from '../data/achievementsData';

const Achievements: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Proven track record in competitive programming, hackathons, and technical leadership 
            across international platforms.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-300 font-semibold mb-2">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Hackathons & Competitions */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Hackathons & Competitions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${hackathon.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <hackathon.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">{hackathon.title}</h4>
                    <div className="text-blue-300 font-semibold mb-2">{hackathon.result}</div>
                    <p className="text-white/80 text-sm">{hackathon.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Verify My Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://leetcode.com/u/danishmustafa86/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center"
            >
              <Code className="mr-2 w-5 h-5" />
              LeetCode Profile
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            <a
              href="https://lablab.ai/u/@danish_mustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center"
            >
              <Trophy className="mr-2 w-5 h-5" />
              Hackathon Profile
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            <a
              href="https://rb.gy/lw8j1r"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center"
            >
              <Users className="mr-2 w-5 h-5" />
              Training Showcase
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;