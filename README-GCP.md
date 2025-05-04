# Deploying YashAI Technologies App to Google Cloud Run

This guide will help you deploy your Vite + React + Express app to Google Cloud Platform (GCP) using Cloud Run.

---

## Prerequisites
- Google Cloud account and a project created
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed and initialized (`gcloud init`)
- Billing enabled for your project

---

## 1. Build & Push Docker Image

1. **Authenticate with Google Cloud:**
   ```sh
   gcloud auth login
   gcloud config set project YOUR_PROJECT_ID
   ```

2. **Build and push the Docker image:**
   ```sh
   gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/yashai-app
   ```
   Replace `YOUR_PROJECT_ID` with your actual GCP project ID.

---

## 2. Deploy to Cloud Run

1. **Deploy the image to Cloud Run:**
   ```sh
   gcloud run deploy yashai-app \
     --image gcr.io/YOUR_PROJECT_ID/yashai-app \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```
   - You can change `us-central1` to your preferred region.
   - After deployment, Cloud Run will provide a public URL for your app.

---

## 3. Environment Variables (Optional)
- You can set environment variables in the Cloud Run console or with the `--set-env-vars` flag.

---

## 4. Notes
- Your app must listen on the port provided by the `PORT` environment variable (already set in the Dockerfile).
- For custom domains, see [Cloud Run custom domains](https://cloud.google.com/run/docs/mapping-custom-domains).

---

## 5. Useful Links
- [Cloud Run Quickstart](https://cloud.google.com/run/docs/quickstarts/build-and-deploy)
- [Cloud Run Pricing](https://cloud.google.com/run/pricing)
- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)

---

**Enjoy your scalable, serverless deployment on GCP!** 