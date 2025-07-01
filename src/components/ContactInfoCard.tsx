import React from 'react';

interface ContactInfoCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  gradient: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon: Icon, label, value, href, gradient }) => (
  <a
    href={href}
    className={`flex items-center p-4 rounded-xl bg-gradient-to-r ${gradient} hover:scale-105 transition-transform duration-300 mb-2`}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
  >
    <Icon className="w-6 h-6 text-white mr-4" />
    <div>
      <div className="text-white font-semibold">{label}</div>
      <div className="text-white/80 text-sm">{value}</div>
    </div>
  </a>
);

export default ContactInfoCard; 