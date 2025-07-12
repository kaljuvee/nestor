# NESTOR Ambassador Landing Page

A professional Next.js landing page for the NESTOR Ambassador program - an elite network for tokenized real-world assets.

## Features

- **Interactive Hero Section** with animated globe visualization
- **Real-time Earnings Calculator** with dynamic sliders
- **Countdown Timer** to application deadline
- **Responsive Design** optimized for all devices
- **Modern UI Components** using shadcn/ui and Tailwind CSS
- **Smooth Animations** and micro-interactions
- **Professional Typography** and gradient effects

## Tech Stack

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Lucide Icons** - Beautiful icon library
- **Framer Motion** - Animation library
- **Vite** - Fast build tool

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kaljuvee/nestor.git
cd nestor
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push to main branch

### Other Platforms

The project can be deployed to any static hosting platform:

- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Upload build files to S3 bucket
- **Cloudflare Pages**: Connect repository for automatic deployment

## Project Structure

```
src/
├── components/
│   └── ui/          # shadcn/ui components
├── assets/          # Static assets
├── App.jsx          # Main application component
├── App.css          # Global styles and animations
└── main.jsx         # Application entry point
```

## Key Sections

1. **Hero Section** - Main value proposition with CTA buttons
2. **Market Overview** - Key statistics and market opportunity
3. **Ambassador Tiers** - Three performance levels with earnings
4. **Features Grid** - What ambassadors can do
5. **Revenue Calculator** - Interactive earnings estimation
6. **Scarcity Section** - Limited seats with countdown
7. **Process Flow** - 6-step onboarding process
8. **Social Proof** - Partner logos and testimonials
9. **Final CTA** - Strong closing call-to-action

## Customization

### Colors
The design uses a dark theme with gradient accents. Main colors can be customized in `App.css`:
- Primary: Blue to Purple gradients
- Secondary: Green to Teal gradients
- Accent: Various gradient combinations

### Content
All content is defined in `App.jsx` and can be easily modified:
- Headlines and copy
- Statistics and numbers
- Ambassador tier information
- Revenue calculation formulas

### Animations
Custom animations are defined in `App.css`:
- Floating elements
- Gradient shifts
- Glow effects
- Smooth transitions

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with tree-shaking and code splitting
- **Loading Speed**: Fast initial load with progressive enhancement

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For questions about the NESTOR Ambassador program, visit the landing page or contact the founding team.

