import React from 'react';

interface ProjectTypeCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ProjectTypeCard: React.FC<ProjectTypeCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center">
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

export default ProjectTypeCard; 