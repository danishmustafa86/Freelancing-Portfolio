import React from 'react';
import { ArrowRight, Zap, Target, CheckCircle, Clock } from 'lucide-react';

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    pricing: string;
    timeline: string;
    gradient: string;
    popular: boolean;
  };
  onCtaClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onCtaClick }) => (
  <div
    className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
      service.popular ? 'ring-2 ring-purple-500/50' : ''
    }`}
  >
    {/* Popular Badge */}
    {service.popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
          <Zap className="w-4 h-4 mr-1" />
          Most Popular
        </div>
      </div>
    )}
    {/* Header */}
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center">
        <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-blue-300 font-bold">{service.pricing}</span>
            <div className="flex items-center text-white/60">
              <Clock className="w-4 h-4 mr-1" />
              {service.timeline}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Description */}
    <p className="text-white/80 mb-6 leading-relaxed">{service.description}</p>
    {/* Benefits */}
    <div className="mb-6">
      <h4 className="font-bold text-white mb-3 flex items-center">
        <Target className="w-5 h-5 text-green-400 mr-2" />
        Key Benefits
      </h4>
      <div className="space-y-2">
        {service.benefits.map((benefit, benefitIndex) => (
          <div key={benefitIndex} className="flex items-center text-white/80">
            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
            <span className="text-sm">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
    {/* Features */}
    <div className="mb-8">
      <h4 className="font-bold text-white mb-3">What's Included:</h4>
      <div className="grid grid-cols-1 gap-2">
        {service.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center text-white/80">
            <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}></div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
    {/* CTA */}
    <button 
      onClick={onCtaClick}
      className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center group-hover:scale-105 relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <span className="relative z-10">Get Started Today</span>
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
    </button>
  </div>
);

export default ServiceCard; 