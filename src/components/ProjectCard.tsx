import React from 'react';
import { ExternalLink, Github, Star, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div
    className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
  >
    {/* Featured Badge */}
    {project.featured && (
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
          <Star className="w-3 h-3 mr-1" fill="currentColor" />
          Featured
        </div>
      </div>
    )}
    {/* Project Image */}
    <div className="relative overflow-hidden h-48">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      {/* Project Links Overlay */}
      <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <ExternalLink className="w-6 h-6 text-white" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
        )}
      </div>
      {/* Date */}
      <div className="absolute bottom-4 left-4 flex items-center text-white/80 text-sm">
        <Calendar className="w-4 h-4 mr-2" />
        {new Date(project.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
      </div>
    </div>
    {/* Project Info */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-white/80 mb-4 line-clamp-3 leading-relaxed">
        {project.description}
      </p>
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech, index) => (
          <span
            key={index}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-500/30 hover:scale-105 transition-transform duration-200"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-white/60 text-xs px-3 py-1">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
      {/* Action Buttons */}
      <div className="flex space-x-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center hover:scale-105"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center border border-white/20 hover:scale-105"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard; 