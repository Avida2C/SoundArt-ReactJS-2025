# React SoundArt - Code Organization

This document outlines the organized structure of the React SoundArt application.

## 📁 Directory Structure

```
src/
├── components/           # Reusable React components
│   ├── Articles/        # Article-related components
│   ├── ArtistGallery/   # Artist gallery and related components
│   ├── ContactUs/       # Contact form and details components
│   ├── Navigation/      # Header and Footer components
│   ├── Reviews/         # Review-related components
│   └── index.js         # Main components export
├── data/                # Static data and mock data
│   ├── Articles/        # Article data
│   ├── Artist/          # Artist data
│   └── index.js         # Data exports
├── pages/               # Page components (routes)
│   ├── Article/         # Article page
│   ├── Artist/          # Artist pages
│   └── ...              # Other pages
├── styles/              # Organized CSS files
│   ├── globals.css      # Global styles and CSS variables
│   ├── home.css         # Homepage-specific styles
│   ├── artists.css      # Artist gallery and artist page styles
│   ├── contact.css      # Contact page styles
│   ├── concerts.css     # Concerts page styles
│   └── index.css        # Main styles entry point
├── assets/              # Static assets (images, etc.)
├── App.js               # Main App component
├── index.js             # Application entry point
└── utils.js             # Utility functions
```

## 🎨 CSS Organization

### CSS Variables
All CSS files use consistent CSS variables defined in `globals.css`:
- `--primary-color`: Main brand color (#ffc107)
- `--primary-dark`: Darker variant (#ff8f00)
- `--dark-bg`: Dark background (#1a1a1a)
- `--light-bg`: Light background (#f8f9fa)
- `--border-radius`: Standard border radius (15px)
- `--transition`: Standard transition (all 0.3s ease)

### Style Files
- **globals.css**: Base styles, typography, buttons, cards, and global utilities
- **home.css**: Homepage-specific styles including hero section, featured content
- **artists.css**: Artist gallery, artist pages, and related components
- **contact.css**: Contact page and form styles
- **concerts.css**: Concerts page and concert card styles

## 🧩 Component Organization

### Naming Conventions
- **Components**: PascalCase (e.g., `ArtistGallery.js`, `ContactUsForm.js`)
- **Data Files**: camelCase (e.g., `articlesData.js`, `artistData.js`)
- **CSS Classes**: kebab-case (e.g., `.artist-gallery`, `.contact-form`)

### Component Structure
Each component directory includes:
- Individual component files
- `index.js` for clean exports
- Related sub-components in subdirectories

### Import/Export Pattern
```javascript
// Clean imports using index files
import { ArtistGallery, ArtistCTA } from '../components/ArtistGallery';
import { ContactUsDetails, ContactUsForm } from '../components/ContactUs';
import { articlesData, artistData } from '../data';
```

## 📱 Responsive Design

All components follow a mobile-first approach with:
- Consistent breakpoints (576px, 768px, 992px, 1200px)
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions

## 🎯 Best Practices

### CSS
- Use CSS variables for consistent theming
- Organize styles by component/page
- Avoid inline styles (moved to CSS classes)
- Use semantic class names

### Components
- Single responsibility principle
- Consistent prop interfaces
- Proper state management
- Clean separation of concerns

### File Organization
- Logical grouping of related files
- Clear naming conventions
- Index files for clean imports
- Consistent directory structure

## 🚀 Development Guidelines

1. **Adding New Components**: Create in appropriate directory with PascalCase naming
2. **Adding Styles**: Use existing CSS variables and add to appropriate style file
3. **Adding Data**: Place in `data/` directory with camelCase naming
4. **Importing**: Use index files for clean imports
5. **Responsive**: Always consider mobile-first design

## 📦 Dependencies

- React 18+
- React Router DOM
- Bootstrap 5
- Bootstrap Icons

This organization ensures maintainability, scalability, and consistency across the application.
