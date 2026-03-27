# Brosa AI - WhatsApp Ordering Platform

A modern, full-stack web application that enables businesses to accept orders through WhatsApp using QR codes. Built with React, Node.js, and advanced animations for an exceptional user experience.

## 🚀 Features

### Frontend Features
- **Modern React 18** with hooks and functional components
- **Responsive Design** with mobile-first approach
- **Advanced Animations** using Framer Motion and Anime.js
- **Interactive Components** including QR code generator and WhatsApp simulator
- **Smooth Scrolling** with intersection observer animations
- **Particle Background** effects for enhanced visual appeal
- **Typewriter Effects** for dynamic text animations
- **Professional UI** with Tailwind CSS and custom components

### Backend Features
- **Node.js & Express** RESTful API
- **JWT Authentication** for secure user sessions
- **QR Code Generation** with customizable options
- **Analytics Dashboard** with real-time metrics
- **Contact Form** with email integration
- **Rate Limiting** and security middleware
- **Database Integration** ready (MongoDB compatible)

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Anime.js** - Micro-interactions
- **Typed.js** - Typewriter effects
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **QRCode.js** - QR code generation
- **Nodemailer** - Email integration
- **Helmet** - Security middleware
- **Express Rate Limit** - API protection

## 📁 Project Structure

```
/mnt/okcomputer/output/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/                 # Source code
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   └── styles/          # CSS and styling
│   ├── package.json         # Frontend dependencies
│   └── .env                 # Environment variables
├── backend/                 # Node.js backend API
│   ├── src/                 # Source code
│   │   ├── controllers/     # API controllers
│   │   ├── models/          # Data models
│   │   ├── routes/          # API routes
│   │   └── middleware/      # Custom middleware
│   ├── package.json         # Backend dependencies
│   └── server.js            # Main server file
├── docs/                    # Documentation
├── .env.example            # Environment variables template
├── package.json            # Root package.json
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16.0.0
- npm >= 8.0.0

### Installation

1. **Clone the repository** (or download the folder)
```bash
cd /mnt/okcomputer/output
```

2. **Install all dependencies**
```bash
npm run install:all
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
NODE_ENV=development
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-here
```

4. **Start the development servers**
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Individual Commands

**Start only frontend:**
```bash
cd frontend && npm run dev
```

**Start only backend:**
```bash
cd backend && npm run dev
```

**Build for production:**
```bash
cd frontend && npm run build
```

## 🎯 Pages & Features

### 1. Homepage (index.html)
- **Hero Section** with animated phone mockup
- **WhatsApp Ordering Simulator**
- **Business Categories** with interactive cards
- **Feature Showcase** with hover effects
- **Statistics** with animated counters
- **Call-to-Action** sections

### 2. About Page (about.html)
- **Company Mission & Values**
- **Team Members** with profiles
- **Timeline** of company journey
- **Interactive Elements**

### 3. Services Page (services.html)
- **Service Offerings** with detailed features
- **Pricing Plans** with toggle animation
- **FAQ Section** with smooth transitions
- **Comparison Tables**

### 4. Contact Page (contact.html)
- **Interactive Contact Form** with validation
- **Multiple Contact Methods**
- **Live Chat Simulation**
- **Resource Links**

## 🎨 Design Features

### Animations & Effects
- **Particle Background** with mouse interaction
- **Typewriter Text** with gradient colors
- **Scroll Animations** with intersection observer
- **3D Hover Effects** on cards and buttons
- **Smooth Transitions** between pages
- **Loading States** with skeleton screens

### Visual Design
- **Modern Color Palette** (Teal, Blue, Purple)
- **Professional Typography** (Inter font family)
- **Consistent Spacing** and layout
- **Mobile-Responsive** design
- **Accessibility** compliant

## 🔧 Customization

### Colors
Edit CSS variables in `frontend/src/styles/globals.css`:
```css
:root {
  --primary-teal: #14B8A6;
  --secondary-blue: #0EA5E9;
  --accent-purple: #8B5CF6;
}
```

### Animations
Modify animation parameters in components:
- Duration: Adjust `transition={{ duration: 0.8 }}`
- Easing: Change `ease: 'easeOut'` to custom curves
- Stagger: Modify `staggerChildren: 0.2`

### Content
Update text content in page components located in `frontend/src/pages/`

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/verify` - Token verification

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/dashboard` - Dashboard data

### QR Codes
- `POST /api/qr/generate` - Generate QR code
- `GET /api/qr/:id` - Get QR code
- `PUT /api/qr/:id` - Update QR code
- `DELETE /api/qr/:id` - Delete QR code
- `GET /api/qr/:id/analytics` - QR analytics

### Analytics
- `GET /api/analytics/business/:id` - Business analytics
- `GET /api/analytics/customers/:id` - Customer analytics
- `GET /api/analytics/realtime/:id` - Real-time metrics

### Contact
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/submissions` - Get submissions
- `GET /api/contact/stats` - Contact statistics

## 🚀 Deployment

### Frontend Deployment
1. Build the frontend: `cd frontend && npm run build`
2. Deploy `frontend/dist` folder to your hosting service
3. Configure SPA routing for client-side routes

### Backend Deployment
1. Set production environment variables
2. Install production dependencies: `cd backend && npm install --production`
3. Start server: `npm start`
4. Use PM2 or similar process manager for production

### Full-Stack Deployment Options
- **Vercel** - Frontend + Serverless functions
- **Netlify** - Frontend with backend proxy
- **Heroku** - Full-stack deployment
- **AWS/Digital Ocean** - VPS deployment

## 🔐 Security Features

- **JWT Authentication** for secure sessions
- **Password Hashing** with bcrypt
- **Rate Limiting** to prevent abuse
- **CORS Configuration** for cross-origin requests
- **Helmet.js** for security headers
- **Input Validation** with express-validator

## 📱 Mobile Optimization

- **Responsive Design** with Tailwind CSS
- **Touch-Friendly** interface elements
- **Optimized Images** for faster loading
- **Mobile Navigation** with slide menu
- **Performance** optimizations

## 🎨 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Optimizations

- **Code Splitting** with React.lazy
- **Image Optimization** with WebP support
- **CSS Purging** with Tailwind
- **Bundle Optimization** with Vite
- **Caching Strategies** for static assets

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, please contact:
- Email: hello@brosa.ai
- Documentation: /docs
- Help Center: /help

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by the need for simple, effective ordering solutions
- Designed for businesses of all sizes
- Focused on user experience and performance

---

**Made with ❤️ for businesses worldwide**

© 2025 Brosa AI Inc. All rights reserved.