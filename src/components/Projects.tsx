import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, Star, Calendar, TrendingUp, Award } from 'lucide-react';
import { Project } from '../types';
import { fetchProjects } from '../api/projects';
import ProjectCard from './ProjectCard';
import ProjectFilterButton from './ProjectFilterButton';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Star },
    { id: 'ai-apps', label: 'AI Applications', icon: TrendingUp },
    { id: 'web-development', label: 'Web Development', icon: Github },
    { id: 'automation', label: 'Automation', icon: Award },
    { id: 'gohighlevel', label: 'GoHighLevel', icon: Filter }
  ];

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        setError('Failed to fetch projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto"></div>
            <p className="text-white/80 mt-6 text-lg">Loading amazing projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-red-300 text-lg font-semibold mb-2">{error}</p>
              <p className="text-red-200 text-sm">Check your internet connection or try again later.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30 mb-6">
            <Award className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-100 text-sm font-medium">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            A curated collection of innovative solutions demonstrating expertise across AI, 
            web development, and automation. Each project represents real-world impact and technical excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
              {projects.length}+
            </div>
            <div className="text-white/80">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
              {featuredProjects.length}
            </div>
            <div className="text-white/80">Featured Solutions</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">
              100%
            </div>
            <div className="text-white/80">Client Satisfaction</div>
          </div>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <ProjectFilterButton
              key={category.id}
              id={category.id}
              label={category.label}
              icon={category.icon}
              active={filter === category.id}
              onClick={setFilter}
            />
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-md mx-auto">
              <Filter className="w-12 h-12 text-white/40 mx-auto mb-4" />
              <p className="text-white/60 text-lg mb-2">No projects found</p>
              <p className="text-white/40 text-sm">Try selecting a different category</p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and proven expertise.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;