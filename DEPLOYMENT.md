# 🚀 Vercel Deployment Guide

This guide will help you deploy your full-stack blog application to Vercel.

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **MongoDB Atlas**: Set up a cloud MongoDB database
4. **Cloudinary Account**: For image uploads

## 🗄️ Database Setup (MongoDB Atlas)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster (free tier available)
3. Create a database user with read/write permissions
4. Get your connection string (replace `<password>` with actual password)
5. Whitelist all IP addresses (0.0.0.0/0) for Vercel deployment

## 🖼️ Cloudinary Setup

1. Go to [Cloudinary](https://cloudinary.com)
2. Sign up for a free account
3. Get your Cloud Name, API Key, and API Secret from the dashboard

## 🚀 Backend Deployment

### Step 1: Deploy Backend to Vercel

1. **Import Project**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `Backend` folder as the root directory

2. **Configure Environment Variables**:
   Add these environment variables in Vercel dashboard:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blog-database
   JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   NODE_ENV=production
   ```

3. **Deploy**: Click "Deploy" and wait for deployment to complete

4. **Get Backend URL**: Copy the deployment URL (e.g., `https://your-backend.vercel.app`)

### Step 2: Deploy Frontend to Vercel

1. **Import Project**:
   - Click "New Project" again
   - Import the same GitHub repository
   - Select the `Frontend` folder as the root directory

2. **Configure Environment Variables**:
   Add this environment variable:
   ```
   VITE_API_URL=https://your-backend.vercel.app/api
   ```
   (Replace with your actual backend URL from Step 1)

3. **Deploy**: Click "Deploy"

## 🔧 Post-Deployment Configuration

### Update CORS Settings

Your backend is now deployed, but you need to update CORS settings to allow your frontend domain.

1. Go to your backend Vercel deployment
2. In the Vercel dashboard, go to Settings > Environment Variables
3. Add or update:
   ```
   FRONTEND_URL=https://your-frontend.vercel.app
   ```

### Test Your Deployment

1. Visit your frontend URL
2. Try registering a new account
3. Create a blog post
4. Add comments
5. Test image uploads

## 🛠️ Troubleshooting

### Common Issues:

1. **CORS Errors**:
   - Make sure FRONTEND_URL is set correctly in backend
   - Check that API_URL in frontend points to correct backend

2. **Database Connection Issues**:
   - Verify MongoDB connection string
   - Ensure IP whitelist includes 0.0.0.0/0
   - Check database user permissions

3. **Environment Variables**:
   - Ensure all required env vars are set
   - Redeploy after adding new environment variables

4. **Build Errors**:
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in package.json

### Useful Commands:

```bash
# Test backend locally
cd Backend && npm start

# Test frontend locally
cd Frontend && npm run dev

# Build frontend locally
cd Frontend && npm run build
```

## 📱 Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 🔄 Automatic Deployments

Vercel automatically deploys when you push to your main branch. To deploy:

1. Make changes to your code
2. Commit and push to GitHub
3. Vercel will automatically redeploy

## 📊 Monitoring

- Check deployment logs in Vercel dashboard
- Monitor function execution times
- Set up error tracking if needed

Your blog is now live! 🎉
