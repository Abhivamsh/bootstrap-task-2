# 🌊 PixelWave Portfolio - Task 2 (Nunjucks + Vite)

## 📄 Project Overview

This project is a recreation of Task 1 (Bootstrap Portfolio) using modern build tools and templating. It demonstrates the same responsive Bootstrap 5 website but built with **Nunjucks templating engine** and **Vite bundler** for a more professional development workflow.

## 🛠️ Technology Stack Chosen

### Templating Engine: **Nunjucks**
- **Why Nunjucks?** 
  - Powerful templating with template inheritance
  - Easy to learn syntax similar to Jinja2/Twig
  - Great for creating reusable components and layouts
  - Excellent support for variables and loops

### Bundler/Task Runner: **Vite**
- **Why Vite?**
  - Lightning-fast development server with HMR (Hot Module Replacement)
  - Modern ES modules support
  - Optimized build process
  - Great developer experience
  - Easy configuration

## 📂 Project Structure

```
task-2-templating/
├── src/
│   ├── templates/
│   │   ├── partials/
│   │   │   ├── navbar.njk      # Navigation component
│   │   │   └── footer.njk      # Footer component
│   │   ├── layout.njk          # Base layout template
│   │   ├── index.njk           # Home page template
│   │   ├── about.njk           # About page template
│   │   └── contact.njk         # Contact page template
│   ├── assets/
│   │   └── css/
│   │       └── style.css       # Custom CSS styles
│   ├── index.html              # Generated home page
│   ├── about.html              # Generated about page
│   └── contact.html            # Generated contact page
├── dist/                       # Build output directory
├── build-templates.js          # Template compilation script
├── vite.config.js             # Vite configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository
```bash
git clone [your-repo-url]
cd task-2-templating
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Development Server
```bash
npm run dev
```
This will:
1. Compile Nunjucks templates to HTML
2. Start Vite development server
3. Open browser at `http://localhost:3000`

### Step 4: Build for Production
```bash
npm run build
```
This creates optimized files in the `dist/` directory.

### Step 5: Preview Production Build
```bash
npm run preview
```

## 📝 How It Works

### Template Compilation Process

1. **Templates** are written in Nunjucks (`.njk` files) with template inheritance
2. **Build Script** (`build-templates.js`) compiles templates to HTML files
3. **Vite** serves the generated HTML files and handles assets
4. **Hot Reload** automatically rebuilds templates when files change

### Template Structure

- **`layout.njk`**: Base template with common HTML structure
- **Page Templates**: Extend the base layout and define page-specific content
- **Partials**: Reusable components like navbar and footer
- **Variables**: Passed to templates for dynamic content

### Key Features Implemented

✅ **Template Inheritance**: Clean separation of layout and content  
✅ **Partial Components**: Reusable navbar and footer  
✅ **Dynamic Variables**: Site title, author, year automatically injected  
✅ **Active Navigation**: Current page highlighting  
✅ **Responsive Design**: Mobile-first Bootstrap 5 implementation  
✅ **Custom Styling**: Enhanced CSS with modern design touches  
✅ **Form Validation**: Interactive contact form with Bootstrap validation  
✅ **Performance**: Optimized build with Vite  

## 🎨 Design Enhancements

Compared to the original Task 1, this version includes:

- **Custom Google Fonts** (Inter) for better typography
- **Enhanced Color Gradients** for hero sections
- **Improved Animations** with CSS transitions
- **Better Form UX** with validation feedback
- **Optimized Images** and assets loading
- **Modern CSS** with custom properties

## 📋 Scripts Available

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with template compilation |
| `npm run build` | Build for production |
| `npm run build:templates` | Compile Nunjucks templates only |
| `npm run preview` | Preview production build |

## 🔧 Configuration Files

### `vite.config.js`
Configures Vite for multi-page application with proper asset handling.

### `build-templates.js`
Custom Node.js script that compiles Nunjucks templates to HTML files before Vite processes them.

### `package.json`
Defines project dependencies and build scripts.

## 📱 Responsive Design

The website is fully responsive and tested on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🌟 Key Learning Outcomes

Through this project, I learned:

1. **Template Engine Mastery**: How to structure templates with inheritance and partials
2. **Build Tool Integration**: Setting up Vite with custom preprocessing
3. **Modern Workflow**: Using npm scripts for development automation
4. **Asset Management**: Organizing CSS, fonts, and other assets efficiently
5. **Performance Optimization**: Leveraging Vite's build optimizations

## 🎯 Project Goals Achieved

- [x] **Exact Recreation**: Output matches Task 1 design and functionality
- [x] **Nunjucks Implementation**: All pages use template inheritance
- [x] **Vite Integration**: Fast development and optimized builds
- [x] **Proper Structure**: Organized file structure following best practices
- [x] **Documentation**: Comprehensive setup and usage instructions
- [x] **Responsive**: Works perfectly on all devices

## 🚀 Deployment

This project can be deployed to:
- **GitHub Pages**: Build files can be deployed directly
- **Netlify**: Automatic builds from Git repository
- **Vercel**: Zero-config deployment for static sites

## 🔗 Links

- **Task 1 Original**: [Link to original Bootstrap project]
- **Live Demo**: [Link to deployed site]
- **GitHub Repository**: [Link to repository]

## 👨‍💻 Developer

**Keshav**  
Web Developer passionate about modern web technologies and clean code.

---

*Built with ❤️ using Nunjucks + Vite*