// App Constants
export const APP_NAME = 'Brosa AI';
export const APP_TAGLINE = 'WhatsApp Ordering Made Simple';
export const APP_DESCRIPTION = 'Transform your business with WhatsApp ordering. No apps needed - just scan, order, and pay.';

// API Endpoints
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'brosa_auth_token',
  USER_PREFERENCES: 'brosa_user_preferences',
  CART_ITEMS: 'brosa_cart_items',
};

// Animation Settings
export const ANIMATION_SETTINGS = {
  DURATION: {
    FAST: 0.3,
    NORMAL: 0.5,
    SLOW: 0.8,
  },
  EASING: {
    EASE_OUT: 'easeOut',
    EASE_IN_OUT: 'easeInOut',
    BOUNCE: 'backOut',
  },
  STAGGER: 0.1,
};

// Business Categories
export const BUSINESS_CATEGORIES = [
  { id: 'bakeries', name: 'Bakeries', icon: '🥖' },
  { id: 'butchers', name: 'Butchers', icon: '🥩' },
  { id: 'sandwiches', name: 'Sandwich Shops', icon: '🥪' },
  { id: 'fries', name: 'Fries Shops', icon: '🍟' },
  { id: 'fast-food', name: 'Fast Food', icon: '🍔' },
  { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
  { id: 'restaurants', name: 'Restaurants', icon: '🍽️' },
];

// Feature List
export const FEATURES = [
  {
    title: 'Automated Ordering & Easy Payments',
    description: 'Customers scan your Brosa QR code, browse your menu, place orders instantly, and pay securely, all within WhatsApp.',
    icon: '📱',
  },
  {
    title: 'Boost Sales with WhatsApp Reach',
    description: 'Engage customers directly on the app they use every day. With WhatsApp promotions and notifications, your offers reach more people.',
    icon: '📢',
  },
  {
    title: 'Reduce Stress, Serve Better',
    description: 'Streamlined orders mean less crowding and confusion. Vendors manage orders efficiently, customers enjoy faster service.',
    icon: '🎯',
  },
];

// Pricing Plans
export const PRICING_PLANS = {
  STARTER: {
    name: 'Starter',
    price: { monthly: 29, yearly: 290 },
    features: [
      'Up to 100 orders/month',
      'Basic menu management',
      'QR code generation',
      'WhatsApp integration',
      'Email support',
    ],
  },
  PROFESSIONAL: {
    name: 'Professional',
    price: { monthly: 79, yearly: 790 },
    features: [
      'Up to 1000 orders/month',
      'Advanced menu management',
      'Multiple QR codes',
      'Priority WhatsApp support',
      'Phone & email support',
      'Advanced analytics',
    ],
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: { monthly: 199, yearly: 1990 },
    features: [
      'Unlimited orders',
      'Custom menu solutions',
      'White-label options',
      'Dedicated support manager',
      '24/7 phone support',
      'API access',
    ],
  },
};

// Form Validation Rules
export const VALIDATION_RULES = {
  EMAIL: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  PHONE: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: 'Please enter a valid phone number',
  },
  URL: {
    pattern: /^https?:\/\/.+\..+/,
    message: 'Please enter a valid URL',
  },
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Form submitted successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  ORDER_PLACED: 'Order placed successfully!',
  PASSWORD_CHANGED: 'Password changed successfully!',
};

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200,
};

// Local Storage TTL (Time To Live) in milliseconds
export const STORAGE_TTL = {
  SHORT: 5 * 60 * 1000, // 5 minutes
  MEDIUM: 24 * 60 * 60 * 1000, // 24 hours
  LONG: 30 * 24 * 60 * 60 * 1000, // 30 days
};

// Default Values
export const DEFAULT_VALUES = {
  PAGE_TITLE: `${APP_NAME} - ${APP_TAGLINE}`,
  LOCALE: 'en-US',
  TIMEZONE: 'UTC',
  CURRENCY: 'USD',
  DATE_FORMAT: 'YYYY-MM-DD',
  TIME_FORMAT: 'HH:mm:ss',
};

// Social Media Links
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/brosaai',
  FACEBOOK: 'https://facebook.com/brosaai',
  LINKEDIN: 'https://linkedin.com/company/brosaai',
  INSTAGRAM: 'https://instagram.com/brosaai',
  YOUTUBE: 'https://youtube.com/@brosaai',
};

// Support Links
export const SUPPORT_LINKS = {
  HELP_CENTER: '/help',
  DOCUMENTATION: '/docs',
  COMMUNITY: '/community',
  PRIVACY_POLICY: '/privacy',
  TERMS_OF_SERVICE: '/terms',
};

// Analytics Events
export const ANALYTICS_EVENTS = {
  PAGE_VIEW: 'page_view',
  BUTTON_CLICK: 'button_click',
  FORM_SUBMIT: 'form_submit',
  QR_SCAN: 'qr_scan',
  ORDER_PLACED: 'order_placed',
  USER_SIGNUP: 'user_signup',
  USER_LOGIN: 'user_login',
};

// Feature Flags
export const FEATURE_FLAGS = {
  ENABLE_ANALYTICS: true,
  ENABLE_CHAT: false,
  ENABLE_MULTILINGUAL: false,
  ENABLE_DARK_MODE: false,
  ENABLE_PUSH_NOTIFICATIONS: false,
};

export default {
  APP_NAME,
  APP_TAGLINE,
  APP_DESCRIPTION,
  API_BASE_URL,
  STORAGE_KEYS,
  ANIMATION_SETTINGS,
  BUSINESS_CATEGORIES,
  FEATURES,
  PRICING_PLANS,
  VALIDATION_RULES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  BREAKPOINTS,
  STORAGE_TTL,
  DEFAULT_VALUES,
  SOCIAL_LINKS,
  SUPPORT_LINKS,
  ANALYTICS_EVENTS,
  FEATURE_FLAGS,
};