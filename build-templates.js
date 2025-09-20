const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

// Configure Nunjucks
const env = nunjucks.configure('src/templates', {
  autoescape: true,
  noCache: true
});

// Template variables
const templateVars = {
  title: 'Abhivamsh - Modern Web Solutions',
  author: 'Abhivamsh',
  year: new Date().getFullYear(),
  description: 'Cutting-edge web development and digital experiences'
};

// Pages to build
const pages = [
  {
    template: 'index.njk',
    output: 'src/index.html',
    vars: { ...templateVars, page: 'home' }
  },
  {
    template: 'about.njk', 
    output: 'src/about.html',
    vars: { ...templateVars, page: 'about' }
  },
  {
    template: 'contact.njk',
    output: 'src/contact.html', 
    vars: { ...templateVars, page: 'contact' }
  }
];

// Build each page
pages.forEach(page => {
  try {
    const html = env.render(page.template, page.vars);
    fs.writeFileSync(page.output, html);
    console.log(`✅ Built ${page.template} -> ${page.output}`);
  } catch (error) {
    console.error(`❌ Error building ${page.template}:`, error.message);
  }
});

console.log('🎉 Template compilation complete!');