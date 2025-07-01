import React from 'react';

interface ProjectFilterButtonProps {
  id: string;
  label: string;
  icon: React.ElementType;
  active: boolean;
  onClick: (id: string) => void;
}

const ProjectFilterButton: React.FC<ProjectFilterButtonProps> = ({ id, label, icon: Icon, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`group px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center hover:scale-105 ${
      active
        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
        : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'
    }`}
  >
    <Icon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
    {label}
  </button>
);

export default ProjectFilterButton; 