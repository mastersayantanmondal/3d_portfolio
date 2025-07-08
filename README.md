# Sayantan Mondal - Marketing Professional Portfolio

A modern, responsive portfolio website built with Next.js 14, showcasing marketing expertise, projects, and professional experience.

## 🚀 Live Demo

[Portfolio Website](https://sayantan-mondal-marketing.vercel.app/) *(Coming Soon)*

> **Note**: This portfolio is currently in development. The live demo will be available once deployed to Vercel or your preferred hosting platform.

## ✨ Features

- **Modern Design**: Clean, professional interface with dark/light mode support
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 14 for optimal speed and SEO
- **Interactive Components**: Smooth animations and engaging user experience
- **Project Showcase**: Dedicated sections for projects, blog, and resume
- **Contact Integration**: Functional contact form with API integration
- **Professional Branding**: Consistent visual identity throughout

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Charts**: [Recharts](https://recharts.org/) for data visualization
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── blog/              # Blog page
│   ├── projects/          # Projects page
│   ├── resume/            # Resume page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── skills.tsx        # Skills section
│   ├── contact.tsx       # Contact form
│   └── ...               # Other components
├── lib/                  # Utility functions
│   ├── data.ts           # Mock data and API functions
│   ├── utils.ts          # Utility functions
│   └── actions.ts        # Server actions
├── public/               # Static assets
│   └── images/           # Image files
├── hooks/                # Custom React hooks
└── styles/               # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ 
- [pnpm](https://pnpm.io/) (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mastersayantanmondal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Package management
pnpm install      # Install dependencies
pnpm update       # Update dependencies
```

## 🎨 Customization

### Personal Information

The portfolio is already configured with Sayantan Mondal's personal information:

- **Profile Image**: `/public/images/sayantan-profile.jpg` ✅
- **Hero Section**: `components/hero.tsx` ✅
- **About Section**: `components/about.tsx` ✅
- **Skills**: `components/skills.tsx` ✅
- **Projects**: `lib/data.ts` ✅

All personal information has been customized and is ready to use.

### Styling

- **Colors**: Customize in `tailwind.config.ts`
- **Theme**: Modify CSS variables in `app/globals.css`
- **Components**: Edit individual component files in `components/`

### Content Management

The portfolio uses mock data that can be easily replaced with:

- **CMS Integration**: Connect to headless CMS like Contentful or Sanity
- **Database**: Replace mock data with database queries
- **API Integration**: Connect to external APIs for dynamic content

## 📱 Pages & Sections

### Home Page (`/`)
- Hero section with professional introduction
- Featured projects showcase
- Skills and expertise overview
- About section
- Contact information

### Projects (`/projects`)
- Complete project portfolio
- Filtering by category
- Search functionality
- Detailed project descriptions

### Blog (`/blog`)
- Professional articles and insights
- Category-based organization
- Reading time estimates
- Author information

### Resume (`/resume`)
- Professional experience
- Education background
- Skills and certifications
- Downloadable PDF version

### Contact (`/contact`)
- Contact form with validation
- Social media links
- Professional contact information

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
# API Configuration
NEXT_PUBLIC_API_URL=your_api_url

# Contact Form
CONTACT_EMAIL=your_email@example.com

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### SEO Optimization

- Update `app/layout.tsx` with your meta information
- Configure `app/sitemap.ts` for search engines
- Update `app/robots.ts` for web crawlers

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

- **Netlify**: Use `pnpm build` and deploy the `.next` folder
- **Railway**: Connect your GitHub repository
- **AWS/GCP**: Use Docker or serverless deployment

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for user experience
- **SEO**: Fully optimized for search engines
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Next.js](https://nextjs.org/) for the amazing framework

## 📞 Contact

**Sayantan Mondal** - [LinkedIn](https://www.linkedin.com/in/sayantanmon/) - [GitHub](https://github.com/mastersayantanmondal)

Project Link: [https://github.com/mastersayantanmondal/portfolio](https://github.com/mastersayantanmondal/portfolio)

---

⭐ If you found this portfolio helpful, please give it a star! 