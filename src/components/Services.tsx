import React from 'react';
import { Globe, Bot, TrendingUp, Code, ArrowRight, Zap, Sparkles, Target, CheckCircle, Clock } from 'lucide-react';
import { services } from '../data/servicesData';
import ServiceCard from './ServiceCard';
import ProcessStepCard from './ProcessStepCard';

const Services: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-40 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-100 text-sm font-medium">Premium Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services That Drive Results
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI and development solutions backed by proven expertise in competitive programming, 
            international hackathons, and real-world application development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} onCtaClick={scrollToContact} />
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">My Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Strategy', description: 'Crafting the perfect solution approach' },
              { step: '03', title: 'Development', description: 'Building with precision and expertise' },
              { step: '04', title: 'Delivery', description: 'Launching and optimizing for success' }
            ].map((process, index) => (
              <ProcessStepCard key={index} step={process.step} title={process.title} description={process.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;