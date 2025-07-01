import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Globe, Download, Star } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl mr-3">
                  <Star className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                Danish Mustafa
                <span className="text-blue-400 ml-1">.</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative group"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
              <a
                href="/Resume%202025%20April%20ori.pdf"
                download
                className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:from-purple-500 hover:to-blue-500 hover:scale-105 transition-all duration-300 border-none rounded-2xl px-6 py-3 ml-4 focus:outline-none focus:ring-2 focus:ring-blue-400 relative overflow-hidden"
                aria-label="Download Resume"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Download size={18} className="relative z-10" />
                <span className="relative z-10">Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-left py-2 px-4 hover:bg-white/10 rounded-xl"
                  >
                    {item.name}
                  </button>
                ))}
                <a
                  href="/Resume%202025%20April%20ori.pdf"
                  download
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-200 border-none rounded-2xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-fit"
                  aria-label="Download Resume"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl mr-3">
                  <Star className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <div className="text-xl font-bold text-white">Danish Mustafa</div>
              </div>
              <p className="text-white/70 mb-4 leading-relaxed">
                AI Engineer & Full-Stack Developer from Faisalabad, Pakistan. 
                Transforming ideas into intelligent solutions.
              </p>
              <div className="flex items-center text-white/60 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for new projects
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="space-y-3 mb-6">
                <a 
                  href="mailto:danishmustafa86@gmail.com" 
                  className="flex items-center text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  danishmustafa86@gmail.com
                </a>
                <div className="flex items-center text-white/70">
                  <Globe className="w-4 h-4 mr-2" />
                  Faisalabad, Pakistan
                </div>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/danishmustafa86" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/danish-mustafa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a 
                  href="https://danishmustafa786.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <Globe size={20} className="text-white" />
                </a>
                <a 
                  href="mailto:danishmustafa86@gmail.com" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; 2024 Danish Mustafa. All rights reserved. Built with passion and precision.
            </div>
            <div className="flex items-center space-x-4 text-white/60 text-sm">
              <span>Made with React & TypeScript</span>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;