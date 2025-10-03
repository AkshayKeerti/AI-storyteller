# AI Story Builder - Landing Page & Authentication

This is the landing page and authentication flow implementation for the AI Story Builder application.

## Features Implemented

### 🏠 Landing Page
- **Hero Section**: Compelling headline with gradient text and call-to-action buttons
- **Features Showcase**: Interactive cards highlighting key features
- **Navigation**: Clean header with navigation links
- **Footer**: Comprehensive site information and links
- **Mobile Responsive**: Optimized for all screen sizes

### 🔐 Authentication Modal
- **Modal Interface**: Elegant overlay modal design
- **Tab System**: Switch between Login and Register forms
- **Form Validation**: Real-time validation with error handling
- **Social Login**: Google and Facebook integration buttons
- **Password Visibility**: Toggle password visibility
- **Loading States**: Beautiful loading animations during submission

### 🎨 Design System
- **Color Palette**: Primary blue and secondary purple gradients
- **Typographic Scale**: Inter and Poppins font families
- **Component Library**: Reusable button styles, inputs, and cards
- **Animations**: Subtle hover effects and transitions
- **Glass Effects**: Modern backdrop blur styling

## Technology Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Heroicons** for icons
- **React Hooks** for state management

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── auth/
│   │   ├── auth-modal.tsx   # Main authentication modal
│   │   ├── login-form.tsx   # Login form with validation
│   │   ├── register-form.tsx # Registration form with validation
│   │   └── social-login-buttons.tsx # Social authentication buttons
│   ├── header.tsx           # Site header with navigation
│   ├── hero-section.tsx     # Landing page hero section
│   ├── features-section.tsx # Features showcase grid
│   └── footer.tsx           # Site footer
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json          # Project dependencies
```

## Key Components

### AuthModal
- Modal overlay with tab switching
- Form validation and error handling
- Social login integration
- Loading states and animations

### HeroSection
- Compelling headline with gradient text
- Call-to-action buttons
- Statistics showcase
- Responsive design

### FeaturesSection
- Grid layout for feature cards
- Interactive hover effects
- Step-by-step process visualization
- Mobile-optimized layout

## Responsive Design

The application is fully responsive and includes:
- Mobile-first design approach
- Responsive grid systems
- Touch-optimized interactions
- Adaptive typography scaling
- Flexible component layouts

## Customization

### Colors
Modify the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Your primary colors */ },
  secondary: { /* Your secondary colors */ }
}
```

### Fonts
Update font families in `tailwind.config.js` and `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

## Future Enhancements

- Backend integration for actual authentication
- Form submission handling with real APIs
- Social login implementation
- User session management
- Dashboard redirection after login

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

**Built with ❤️ for creating amazing stories with AI**
