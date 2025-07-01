import React from 'react';
import { Globe, Bot, TrendingUp, Code, ArrowRight, Zap, Sparkles, Target, CheckCircle, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI & Machine Learning Solutions',
      description: 'Transform your business with cutting-edge AI applications. From concept to deployment, I deliver intelligent solutions that drive measurable results.',
      features: [
        'Custom Generative AI Applications',
        'RAG (Retrieval-Augmented Generation) Systems',
        'LangChain & LangGraph Integration',
        'Multi-Agent AI Systems (Crew.ai)',
        'Graph Database Solutions',
        'AI Model Fine-tuning & Optimization'
      ],
      benefits: [
        'Reduce operational costs by 40-60%',
        'Automate complex decision-making',
        'Scale intelligent operations'
      ],
      pricing: 'Starting at $2,500',
      timeline: '2-4 weeks',
      gradient: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      icon: Globe,
      title: 'Full-Stack Web Development',
      description: 'Build modern, scalable web applications that engage users and drive business growth. Performance-optimized and production-ready.',
      features: [
        'React & Next.js Applications',
        'Python Backend Development',
        'Responsive & Mobile-First Design',
        'API Development & Integration',
        'Database Design & Optimization',
        'Performance & SEO Optimization'
      ],
      benefits: [
        'Increase user engagement by 70%',
        'Improve page load speeds',
        'Mobile-responsive design'
      ],
      pricing: 'Starting at $1,800',
      timeline: '1-3 weeks',
      gradient: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      icon: Code,
      title: 'Algorithm & Problem Solving',
      description: 'Optimize your systems with expert algorithm design. From technical interviews to complex optimization challenges.',
      features: [
        'Custom Algorithm Development',
        'Data Structure Implementation',
        'Performance Optimization',
        'Technical Interview Preparation',
        'Code Review & Refactoring',
        'System Architecture Design'
      ],
      benefits: [
        'Improve system performance by 80%',
        'Reduce computational complexity',
        'Expert problem-solving approach'
      ],
      pricing: 'Starting at $75/hour',
      timeline: 'Flexible',
      gradient: 'from-green-500 to-emerald-500',
      popular: false
    },
    {
      icon: TrendingUp,
      title: 'Technical Training & Mentorship',
      description: 'Accelerate your team\'s growth with comprehensive training programs. From AI fundamentals to advanced problem-solving.',
      features: [
        'AI & ML Training Programs',
        'Web Development Bootcamps',
        'Data Structures & Algorithms Mastery',
        'One-on-One Mentorship',
        'Team Training Sessions',
        'Career Development Guidance'
      ],
      benefits: [
        'Upskill teams in 4-6 weeks',
        'Improve coding interview success',
        'Build internal AI capabilities'
      ],
      pricing: 'Starting at $60/hour',
      timeline: 'Ongoing',
      gradient: 'from-orange-500 to-red-500',
      popular: false
    }
  ];

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
            <div
              key={index}
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
              <p className="text-white/80 mb-6 leading-relaxed">
                {service.description}
              </p>

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
                onClick={scrollToContact}
                className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center group-hover:scale-105 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </div>
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
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="text-white font-bold mb-2">{process.title}</h4>
                <p className="text-white/60 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;