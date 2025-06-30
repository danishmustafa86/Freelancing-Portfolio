import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { MongoClient } from 'mongodb';

dotenv.config();
console.log('MONGODB_URI:', process.env.MONGODB_URI);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO;
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

let mongoClient;
let contactsCollection;

async function connectMongo() {
  if (!mongoClient) {
    mongoClient = new MongoClient(MONGODB_URI);
    await mongoClient.connect();
    const db = mongoClient.db(MONGODB_DB);
    contactsCollection = db.collection('contacts');
  }
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Data file paths
const PROJECTS_FILE = join(__dirname, 'data', 'projects.json');
const CONTACTS_FILE = join(__dirname, 'data', 'contacts.json');

// Ensure data directory exists
const ensureDataDirectory = async () => {
  try {
    await fs.mkdir(join(__dirname, 'data'), { recursive: true });
  } catch (error) {
    console.log('Data directory already exists');
  }
};

// Initialize data files
const initializeDataFiles = async () => {
  try {
    // Initialize projects file
    try {
      await fs.access(PROJECTS_FILE);
    } catch {
      const initialProjects = [
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
        },
        {
          id: '5',
          title: 'React Dashboard UI',
          description: 'Modern admin dashboard with real-time analytics, user management, and responsive design built with React and Chart.js.',
          image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
          technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind'],
          liveUrl: 'https://example.com',
          githubUrl: 'https://github.com',
          category: 'web-development',
          featured: false,
          createdAt: '2024-03-15'
        },
        {
          id: '6',
          title: 'Smart Chatbot Assistant',
          description: 'AI-powered customer service chatbot with natural language processing, sentiment analysis, and integration with multiple platforms.',
          image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
          technologies: ['Python', 'OpenAI', 'Flask', 'WebSocket'],
          liveUrl: 'https://example.com',
          category: 'ai-apps',
          featured: true,
          createdAt: '2024-04-01'
        }
      ];
      await fs.writeFile(PROJECTS_FILE, JSON.stringify(initialProjects, null, 2));
    }

    // Initialize contacts file
    try {
      await fs.access(CONTACTS_FILE);
    } catch {
      await fs.writeFile(CONTACTS_FILE, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error('Error initializing data files:', error);
  }
};

// Routes

// Get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const data = await fs.readFile(PROJECTS_FILE, 'utf8');
    const projects = JSON.parse(data);
    res.json(projects);
  } catch (error) {
    console.error('Error reading projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Add new project (Admin)
app.post('/api/projects', async (req, res) => {
  try {
    const data = await fs.readFile(PROJECTS_FILE, 'utf8');
    const projects = JSON.parse(data);
    
    const newProject = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    projects.push(newProject);
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2));
    
    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).json({ error: 'Failed to add project' });
  }
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Store in MongoDB
    await connectMongo();
    const newContact = {
      name,
      email,
      subject: subject || 'No subject',
      message,
      createdAt: new Date().toISOString(),
      status: 'new',
    };
    await contactsCollection.insertOne(newContact);

    // Send email with detailed logging
    transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: `New Contact: ${subject || 'No subject'}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    }, (err, info) => {
      if (err) {
        console.error('Nodemailer sendMail error:', err);
        return res.status(500).json({ error: 'Failed to send email', details: err.message });
      }
      console.log('Nodemailer sendMail success:', info);
      res.status(201).json({ message: 'Message sent and stored successfully', emailInfo: info });
    });
  } catch (error) {
    console.error('Error handling contact message:', error);
    res.status(500).json({ error: 'Failed to send and store message', details: error.message });
  }
});

// Get all contact messages (Admin)
app.get('/api/contacts', async (req, res) => {
  try {
    const data = await fs.readFile(CONTACTS_FILE, 'utf8');
    const contacts = JSON.parse(data);
    res.json(contacts);
  } catch (error) {
    console.error('Error reading contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Update contact status (Admin)
app.patch('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const data = await fs.readFile(CONTACTS_FILE, 'utf8');
    const contacts = JSON.parse(data);
    
    const contactIndex = contacts.findIndex(contact => contact.id === id);
    if (contactIndex === -1) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    
    contacts[contactIndex].status = status;
    await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
    
    res.json(contacts[contactIndex]);
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

// Admin dashboard endpoint
app.get('/api/admin/stats', async (req, res) => {
  try {
    const projectsData = await fs.readFile(PROJECTS_FILE, 'utf8');
    const contactsData = await fs.readFile(CONTACTS_FILE, 'utf8');
    
    const projects = JSON.parse(projectsData);
    const contacts = JSON.parse(contactsData);
    
    const stats = {
      totalProjects: projects.length,
      featuredProjects: projects.filter(p => p.featured).length,
      totalContacts: contacts.length,
      newContacts: contacts.filter(c => c.status === 'new').length,
      recentContacts: contacts
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5)
    };
    
    res.json(stats);
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Initialize and start server
const startServer = async () => {
  await ensureDataDirectory();
  await initializeDataFiles();
  
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('- GET  /api/projects     - Get all projects');
    console.log('- POST /api/projects     - Add new project');
    console.log('- POST /api/contact      - Submit contact form');
    console.log('- GET  /api/contacts     - Get all contacts (Admin)');
    console.log('- GET  /api/admin/stats  - Get admin statistics');
  });
};

startServer().catch(console.error);