import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, company, service, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required' });
      }
      
      // In a production app, you would save this data to a database
      // and/or send an email notification using a service like nodemailer
      
      // For this example, we'll just return a success response
      return res.status(200).json({ 
        message: 'Message received successfully',
        data: { name, email, company, service }
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
