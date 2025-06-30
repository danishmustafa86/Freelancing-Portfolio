export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web-development' | 'automation' | 'ai-apps' | 'gohighlevel';
  featured: boolean;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'responded';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: string;
}