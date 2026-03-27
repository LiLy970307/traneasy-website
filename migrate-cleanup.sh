#!/bin/bash
# TranEasy: Next.js → Nuxt.js migration cleanup script
# Run this from the project root: bash migrate-cleanup.sh

echo "🧹 Cleaning up old Next.js files..."

# Remove old Next.js specific files
rm -f next.config.js
rm -f i18n.ts
rm -f middleware.ts
rm -f next-env.d.ts
rm -f postcss.config.js

# Remove old React component files (.tsx)
rm -f components/Header.tsx
rm -f components/Hero.tsx
rm -f components/Footer.tsx
rm -f components/ScrollReveal.tsx
rm -f components/LanguageSwitcher.tsx
rm -f components/Features.tsx
rm -f components/PlatformUnify.tsx
rm -f components/Advantages.tsx
rm -f components/HowItWorks.tsx
rm -f components/Benefits.tsx
rm -f components/Testimonials.tsx
rm -f components/Partners.tsx
rm -f components/UseCasePreview.tsx
rm -f components/IntegrationPreview.tsx
rm -f components/PricingPreview.tsx
rm -f components/FAQAccordion.tsx
rm -f components/Download.tsx
rm -f components/TrustBar.tsx
rm -f components/Breadcrumb.tsx

# Remove old Next.js app directory (pages were in app/[locale]/)
rm -rf app/

# Remove old Next.js build output and node_modules
rm -rf .next
rm -rf node_modules

# Remove old globals.css (now in assets/css/main.css)
# (already removed with app/ directory)

echo "📦 Installing Nuxt dependencies..."
npm install

echo "🔧 Preparing Nuxt project..."
npx nuxt prepare

echo ""
echo "✅ Migration complete!"
echo ""
echo "Run 'npm run dev' to start the development server."
echo "Run 'npm run build' to build for production."
