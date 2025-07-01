import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Globe, Linkedin, Github, Clock, Star, Zap, MessageCircle } from 'lucide-react';
import { submitContactForm } from '../api/contact';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'danishmustafa86@gmail.com',
      href: 'mailto:danishmustafa86@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Faisalabad, Pakistan',
      href: '#',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'danishmustafa786.vercel.app',
      href: 'https://danishmustafa786.vercel.app/',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'danishmustafa86',
      href: 'https://github.com/danishmustafa86',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'danish-mustafa',
      href: 'https://linkedin.com/in/danish-mustafa',
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  const projectTypes = [
    { icon: Zap, title: 'AI & ML Solutions', description: 'Custom AI applications and automation' },
    { icon: Globe, title: 'Web Development', description: 'Modern, scalable web applications' },
    { icon: MessageCircle, title: 'Technical Mentorship', description: 'Training and skill development' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-400/30 mb-6">
            <Star className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-100 text-sm font-medium">Let's Collaborate</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into reality with AI-powered solutions and cutting-edge technology. 
            Let's discuss your project and create innovative solutions that drive real business impact.
          </p>
        </div>

        {/* Project Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {projectTypes.map((type, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <type.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{type.title}</h3>
              <p className="text-white/70">{type.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl mr-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Send Message</h3>
            </div>
            
            {status === 'success' && (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <div>
                  <div className="text-green-300 font-semibold">Message sent successfully!</div>
                  <div className="text-green-300/80 text-sm">I'll get back to you within 24 hours.</div>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl p-6 mb-6 flex items-center">
                <AlertCircle className="w-6 h-6 text-red-400 mr-3" />
                <div>
                  <div className="text-red-300 font-semibold">Failed to send message</div>
                  <div className="text-red-300/80 text-sm">{errorMessage}</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/15"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/15"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-3">
                  Project Type
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/15"
                  placeholder="AI Project / Web Development / Mentorship / Other"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-3">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none hover:bg-white/15"
                  placeholder="Tell me about your project goals, timeline, budget, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-xl relative overflow-hidden"
              >
                {status === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10">Send Message</span>
                    <Send className="ml-3 w-6 h-6 relative z-10" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 text-blue-400 mr-3" />
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center space-x-4 hover:bg-white/10 p-4 rounded-2xl transition-all duration-300 hover:scale-105"
                  >
                    <div className={`bg-gradient-to-r ${info.gradient} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium">{info.label}</p>
                      <p className="text-white font-semibold text-lg">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Star className="w-6 h-6 text-purple-400 mr-3" />
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 hover:bg-white/10 p-4 rounded-2xl transition-all duration-300 hover:scale-105"
                  >
                    <div className={`bg-gradient-to-r ${social.gradient} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium">{social.label}</p>
                      <p className="text-white font-semibold text-lg">{social.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Availability */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 text-green-400 mr-3" />
                Availability & Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <span className="text-white/80 font-medium">Response Time:</span>
                  <span className="text-green-400 font-bold">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <span className="text-white/80 font-medium">Project Start:</span>
                  <span className="text-blue-400 font-bold">1-2 weeks</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <span className="text-white/80 font-medium">Timezone:</span>
                  <span className="text-white font-bold">PKT (UTC+5)</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <span className="text-white/80 font-medium">Consultation:</span>
                  <span className="text-purple-400 font-bold">Free 30min</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Me?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">
                  100%
                </div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
                  24/7
                </div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                  5+
                </div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;