import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Globe, Linkedin, Github, Clock, Star, Zap, MessageCircle } from 'lucide-react';
import { submitContactForm } from '../api/contact';
import { contactInfo, socialLinks, projectTypes } from '../data/contactData';
import ContactForm from './ContactForm';
import ProjectTypeCard from './ProjectTypeCard';
import ContactInfoCard from './ContactInfoCard';

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
            <ProjectTypeCard key={index} icon={type.icon} title={type.title} description={type.description} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <ContactForm />

          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 text-blue-400 mr-3" />
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} icon={info.icon} label={info.label} value={info.value} href={info.href} gradient={info.gradient} />
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