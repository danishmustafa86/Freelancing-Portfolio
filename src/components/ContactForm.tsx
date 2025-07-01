import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../api/contact';

const ContactForm: React.FC = () => {
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
            <label htmlFor="name" className="block text-white font-semibold mb-3">Full Name *</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/15" placeholder="Your full name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-white font-semibold mb-3">Email Address *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/15" placeholder="your@email.com" />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-white font-semibold mb-3">Project Type</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 hover:bg-white/15" placeholder="AI Project / Web Development / Mentorship / Other" />
        </div>
        <div>
          <label htmlFor="message" className="block text-white font-semibold mb-3">Project Details *</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none hover:bg-white/15" placeholder="Tell me about your project goals, timeline, budget, and any specific requirements..." />
        </div>
        <button type="submit" disabled={status === 'loading'} className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-xl relative overflow-hidden">
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
  );
};

export default ContactForm; 