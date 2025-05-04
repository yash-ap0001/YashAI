import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";
import { nanoid } from "nanoid";
import { Server } from "http";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setupVite(app: express.Application, server: Server) {
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: { server },
      watch: {
        usePolling: true,
        interval: 100
      }
    },
    appType: "custom"
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const template = await fs.promises.readFile(
        path.resolve(__dirname, "../client/index.html"),
        "utf-8"
      );

      const transformedTemplate = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      const html = await vite.transformIndexHtml(url, transformedTemplate);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: express.Application) {
  const distPath = path.resolve(__dirname, "../dist/public");
  
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Static files not found at ${distPath}. Please run 'npm run build' first.`
    );
  }

  app.use(express.static(distPath));
}
