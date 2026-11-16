// Brosa AI - Financial Super-App Constants
export const APP_NAME = 'Brosa';
export const APP_TAGLINE = 'One Platform to Rule Your Financial World';
export const APP_DESCRIPTION = 'Brosa is Africa’s next-gen conversational fintech super-app on WhatsApp: send MoMo P2P, transfer to 20+ Ghana banks, buy airtime & bundles, pay bills, and track spending — directly in chat.';

// Official WhatsApp Link
export const WHATSAPP_NUMBER = '+233 59 811 1199';
export const WHATSAPP_LINK = 'https://wa.me/233598111199?text=Hi%20Brosa';

// Supported Networks & Top Banks in Ghana
export const SUPPORTED_NETWORKS = [
  { name: 'MTN Mobile Money', short: 'MTN MoMo', color: '#FFCC00', textColor: '#000' },
  { name: 'Telecel Cash', short: 'Telecel Cash', color: '#E60000', textColor: '#FFF' },
  { name: 'AT Money', short: 'AT Money', color: '#0055A5', textColor: '#FFF' },
];

export const SUPPORTED_BANKS = [
  'Ecobank Ghana',
  'Stanbic Bank',
  'GCB Bank',
  'Zenith Bank',
  'Fidelity Bank',
  'Absa Bank',
  'Access Bank',
  'CalBank',
  'Consolidated Bank Ghana (CBG)',
  'Standard Chartered',
  'First National Bank',
  'Prudential Bank',
  'Societe Generale',
  'Agricultural Development Bank (ADB)',
  'Republic Bank',
  'Universal Merchant Bank (UMB)',
  'Guaranty Trust Bank (GTBank)',
  'Bank of Africa',
  'FBNBank',
  'OmniBSIC Bank',
];

// Key Metrics
export const METRICS = [
  { label: 'Volume Processed', value: '₵25M+', desc: 'Across Global Wallets & Banks' },
  { label: 'Transaction Speed', value: '< 3s', desc: 'Average completion time' },
  { label: 'AI Accuracy', value: '99.8%', desc: 'Intent & receipt OCR recognition' },
  { label: 'Banks & Mobile Wallets', value: 'ALL', desc: 'Major commercial banks & rails' },
];

// Features List
export const CORE_FEATURES = [
  {
    id: 'p2p-momo',
    tag: 'INSTANT TRANSFERS',
    title: 'P2P & Bank Transfers in 1 Chat',
    description: 'Send money instantly to mobile wallets or 20+ commercial bank accounts. No app download, no account number memorization.',
    command: 'Pay $150 to 0553277031 Sam',
  },
  {
    id: 'receipt-ocr',
    tag: 'COMPUTER VISION AI',
    title: 'Snap & Pay (Image & Contact Recognition)',
    description: 'Take a picture of a handwritten account number, bill receipt, or share a phone contact card. Brosa auto-detects the account details and sets up the transfer in seconds.',
    command: '📷 [Photo of handwritten account 9040013948008 Stanbic]',
  },
  {
    id: 'airtime-bundles',
    tag: 'TELCO SERVICES',
    title: 'Airtime & High-Speed Data Bundles',
    description: 'Recharge airtime and buy non-expiring data bundles for major networks at discount rates directly from WhatsApp.',
    command: 'Buy $20 airtime for 0244123456',
  },
  {
    id: 'ai-insights',
    tag: 'INTELLIGENT WEALTH',
    title: 'AI Expense Tracking & Real-Time Insights',
    description: 'Understand exactly where your money goes. Brosa categorizes food, bills, transfers, and savings automatically with weekly smart summaries.',
    command: 'How much did I spend this week?',
  },
  {
    id: 'emergency-freeze',
    tag: 'BANK-GRADE SECURITY',
    title: 'Instant Account Freeze Protocol',
    description: 'Lost your phone or suspect unauthorized access? Text "BLOCK" from any phone or browser to freeze your account instantly.',
    command: 'BLOCK ACCOUNT',
  },
  {
    id: 'merchant-qr',
    tag: 'BUSINESS & COMMERCE',
    title: 'Dynamic QR & Merchant Payouts',
    description: 'Accept payments at your shop, stall, or website with dynamic instant-payment QR codes, POS soundbox alerts, and zero monthly fees.',
    command: 'Generate QR for $50.00',
  },
];

// Customer Testimonials
export const TESTIMONIALS = [
  {
    quote: "Sending money straight to a bank account in 5 seconds via WhatsApp is mindblowing. I don't use clunky mobile banking apps anymore.",
    author: "Kwame Mensah",
    role: "Software Engineer",
    location: "Accra, Ghana",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote: "The photo payment is crazy! A customer gave me a handwritten account number on paper, I just snapped a photo to Brosa and it verified the account name instantly.",
    author: "Abena Osei",
    role: "Merchant & Boutique Owner",
    location: "Kumasi, Ghana",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote: "Buying data bundles and sending $2k to my mom takes literally 10 seconds. Brosa understands natural words like 'pay $2k to 055...'. It feels like texting a personal banker.",
    author: "Kofi Boateng",
    role: "University Student",
    location: "Legon",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote: "As a freelancer receiving payments from various clients, having Brosa handle payments, track weekly expenses, and generate instant receipts is indispensable.",
    author: "Esi Darko",
    role: "Creative Director",
    location: "Takoradi",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
    rating: 5,
  },
];

// FAQ List
export const FAQS = [
  {
    question: "What is Brosa AI?",
    answer: "Brosa is a WhatsApp-based payment platform that makes it easy to send, receive, and make payments locally and across borders, without downloading another app.",
  },
  {
    question: "Do I need to download a separate app?",
    answer: "No! Brosa works entirely inside WhatsApp, the app you already have on your phone and use every day. Just message Brosa on WhatsApp to start transacting instantly.",
  },
  {
    question: "Which networks and banks are supported?",
    answer: "Brosa supports all major Mobile Money networks as well as all 20+ commercial banks (including Ecobank, Stanbic, GCB, Fidelity, Zenith, Absa, Access, CalBank, and CBG).",
  },
  {
    question: "What is the maximum transfer limit?",
    answer: "Maximum transfer limits differ based on your location and the payment method you use. Chat with Brosa to check the specific limit for your region.",
  },
  {
    question: "How does 'Snap & Pay' feature work?",
    answer: "Simply take a photo of any bank/mobile money account number or invoice and share it with Brosa on WhatsApp and tell it to what to do...",
  },
  {
    question: "Is Brosa secure?",
    answer: "ABSOLUTELY, brosa is 100% secure because BROSA does not asks sensitive data like your pin and also provides you an extra layer to further protect your account",
  },
];

export default {
  APP_NAME,
  APP_TAGLINE,
  APP_DESCRIPTION,
  WHATSAPP_NUMBER,
  WHATSAPP_LINK,
  SUPPORTED_NETWORKS,
  SUPPORTED_BANKS,
  METRICS,
  CORE_FEATURES,
  TESTIMONIALS,
  FAQS,
};
