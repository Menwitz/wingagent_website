#!/bin/zsh

# base
mkdir -p project/{public,src/app/_components,src/app/_sections}

# root files
touch project/{package.json,postcss.config.js,tailwind.config.js,next.config.mjs,.gitignore,README.md}

# public
touch project/public/favicon.svg

# app level
touch project/src/app/{globals.css,layout.js,page.js}

# components
touch project/src/app/_components/{Logo.jsx,DashboardPreview.jsx,PricingCard.jsx,Metric.jsx,FeatureIcon.jsx,SectionHeader.jsx,Navbar.jsx,Footer.jsx,FAQItem.jsx}

# sections
touch project/src/app/_sections/{Hero.jsx,Stats.jsx,FeaturedIn.jsx,HowItWorks.jsx,WhyChoose.jsx,Pricing.jsx,FAQ.jsx,FinalCTA.jsx}

echo "Structure created."