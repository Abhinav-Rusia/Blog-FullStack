#!/bin/bash

echo "🚀 Deploying Backend to Vercel..."

# Navigate to backend directory
cd Backend

# Install Vercel CLI if not installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "✅ Backend deployment complete!"
