import { createServer } from "http";
import { Express } from "express";

export async function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, service, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "Name, email, and message are required" 
        });
      }

      return res.status(200).json({
        message: "Message received successfully",
        data: { name, email, company, service }
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
