# My Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases my professional experience, projects, articles, and technical skills through an elegant and performant web application.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite for fast development and builds
- **Beautiful UI**: Built with Tailwind CSS and shadcn/ui components
- **Dark/Light Theme**: Seamless theme switching with next-themes
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: Code splitting, lazy loading, and PWA support
- **SEO Friendly**: Meta tags and structured data for better search visibility
- **Type Safety**: Full TypeScript implementation with strict mode
- **Component Architecture**: Modular, reusable components with Radix UI primitives

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components built on Radix UI

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Vitest** - Unit testing framework

### UI/UX
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Beautiful icon library
- **React Query** - Server state management
- **React Hook Form** - Form handling with validation
- **Sonner** - Toast notifications

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── articles/       # Article-related components
│   ├── experience/     # Experience timeline components
│   ├── home/          # Homepage components
│   └── ui/            # Base UI components (shadcn/ui)
├── data/              # Static data (articles, projects, experience)
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Route components
└── types/             # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🎨 Customization

### Adding New Projects

1. Update `src/data/projects.ts` with your project details
2. Create project detail components in `src/components/projects/`
3. Add routes in `src/App.tsx` if needed

### Adding New Articles

1. Update `src/data/articles.ts` with article content
2. Articles support Markdown content with custom rendering
3. Add tags and metadata for better organization

### Theme Customization

- Edit `tailwind.config.ts` for design system changes
- Modify theme colors in `src/components/ThemeProvider.tsx`
- Update CSS variables in `src/index.css`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

This is a personal portfolio project. If you find issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## 🌟 Acknowledgments

- Built with modern web technologies and best practices
- UI components inspired by shadcn/ui
- Icons from Lucide React
- Typography and design system based on modern web standards
