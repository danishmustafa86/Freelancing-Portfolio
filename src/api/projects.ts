import { Project } from '../types';

const API_BASE_URL = 'http://localhost:3001/api';

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Return fallback data if API is not available
    return [
      {
        id: '1',
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include inventory management, order processing, and analytics dashboard.',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        category: 'web-development',
        featured: true,
        createdAt: '2024-01-15'
      },
      {
        id: '2',
        title: 'Marketing Automation Workflow',
        description: 'n8n automation that connects CRM, email marketing, and social media platforms to create seamless lead nurturing sequences.',
        image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['n8n', 'HubSpot', 'Mailchimp', 'Slack'],
        category: 'automation',
        featured: true,
        createdAt: '2024-02-01'
      },
      {
        id: '3',
        title: 'AI Document Analyzer',
        description: 'Machine learning application that extracts and analyzes data from documents using OpenAI GPT and custom NLP models.',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Python', 'OpenAI', 'FastAPI', 'PostgreSQL'],
        liveUrl: 'https://example.com',
        category: 'ai-apps',
        featured: false,
        createdAt: '2024-02-15'
      },
      {
        id: '4',
        title: 'High-Converting Sales Funnel',
        description: 'GoHighLevel funnel system with multi-step lead qualification, automated follow-ups, and conversion tracking that increased client sales by 300%.',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['GoHighLevel', 'JavaScript', 'Zapier', 'Google Analytics'],
        category: 'gohighlevel',
        featured: true,
        createdAt: '2024-03-01'
      }
    ];
  }
};