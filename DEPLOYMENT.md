# Deployment Options

Here are several free options for deploying your Calculator Server:

## 1. Render

Render offers a free tier for hosting web services and static sites.

### Steps to deploy on Render:

1. Sign up at [render.com](https://render.com/)
2. Click "New" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - Name: calculator-server
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Free instance type (which includes 750 hours/month free)
5. Click "Create Web Service"

Render will automatically deploy your service from your GitHub repository.

## 2. Railway

Railway offers a free tier with limited usage.

### Steps to deploy on Railway:

1. Sign up at [railway.app](https://railway.app/)
2. Click "New Project" and select "Deploy from GitHub repo"
3. Connect your GitHub repository
4. Railway will automatically detect Node.js and deploy your app
5. Set environment variables if needed
6. Your app will be deployed to a URL like `your-app-name.railway.app`

## 3. Fly.io

Fly.io offers a generous free tier with 3 shared-cpu VMs and 3GB storage.

### Steps to deploy on Fly.io:

1. Sign up at [fly.io](https://fly.io/) and install flyctl
2. Initialize your app (in your project directory):
   ```
   fly launch
   ```
3. Follow the prompts to set up your app
4. Deploy your app:
   ```
   fly deploy
   ```

## 4. Glitch

Glitch is a simple way to deploy Node.js applications.

### Steps to deploy on Glitch:

1. Sign up at [glitch.com](https://glitch.com/)
2. Create a new project from GitHub
3. Connect your repository
4. Your app will be available at `your-project-name.glitch.me`

## 5. Vercel

Vercel offers free hosting for serverless functions and static sites.

### Steps to deploy on Vercel:

1. Sign up at [vercel.com](https://vercel.com/)
2. Install the Vercel CLI: `npm i -g vercel`
3. Run `vercel login` and follow the prompts
4. Navigate to your project directory and run:
   ```
   vercel
   ```
5. Follow the prompts to deploy your app

## Important Notes for Free Tiers

Most free tier services have limitations:

- Limited compute resources
- May sleep after periods of inactivity (cold starts)
- Limited bandwidth
- Limited storage
- May require a credit card for verification (without charging)

For a production application with high traffic, you may need to upgrade to a paid tier. 