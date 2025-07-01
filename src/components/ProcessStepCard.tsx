import React from 'react';

interface ProcessStepCardProps {
  step: string;
  title: string;
  description: string;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, title, description }) => (
  <div className="group text-center">
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
      <span className="text-white font-bold text-lg">{step}</span>
    </div>
    <h4 className="text-white font-bold mb-2">{title}</h4>
    <p className="text-white/60 text-sm">{description}</p>
  </div>
);

export default ProcessStepCard; 