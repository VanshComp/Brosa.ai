import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const post = {
    title: "How WhatsApp Is Changing the Way We Order Food and Services — And How BROSA Is Leading the Shift",
    author: "Brosa Team",
    date: "March 24, 2026",
    readTime: "6 min read",
    category: "Insights",
    content: [
      {
        type: "paragraph",
        text: "For years, ordering food or services meant downloading apps, creating accounts, remembering passwords, and navigating complex interfaces. In many parts of Africa, especially Ghana, that model has always had friction — data costs, storage limitations, and user fatigue from too many apps."
      },
      {
        type: "paragraph",
        text: "Today, a new model is emerging — ordering through WhatsApp. Not as a side feature. But as the main platform for commerce. And at the center of this shift is Brosa."
      },
      {
        type: "heading",
        text: "The Shift: From Apps to Conversations"
      },
      {
        type: "paragraph",
        text: "WhatsApp is already where people communicate daily. It is familiar, trusted, and requires no learning curve. Instead of forcing users to adapt to new platforms, businesses are now meeting customers where they already are."
      },
      {
        type: "comparison",
        title: "The Frictionless Experience",
        from: ["Opening an app", "Searching endlessly", "Adding to cart", "Checking out"],
        to: ["Send a message", "Browse a menu", "Select what you want", "Pay", "Receive your order"]
      },
      {
        type: "heading",
        text: "Why WhatsApp Works Better in Africa"
      },
      {
        type: "list",
        items: [
          { title: "Mobile-First Reality", description: "Most users rely entirely on their phones. WhatsApp is already installed and actively used." },
          { title: "Low Friction", description: "No downloads. No sign-ups. No forgotten passwords." },
          { title: "Built-In Trust", description: "Customers are more comfortable interacting through WhatsApp than unfamiliar apps." },
          { title: "Seamless Payments", description: "With mobile money (MoMo), users can complete transactions instantly within the same flow." },
          { title: "Real-Time Interaction", description: "Customers can ask questions, make changes, and receive updates instantly." }
        ]
      },
      {
        type: "heading",
        text: "Enter Brosa: Built for How People Actually Order"
      },
      {
        type: "paragraph",
        text: "Brosa is not trying to “compete” with apps. It is redefining the model entirely. Brosa turns WhatsApp into a complete marketplace, where users can discover vendors, browse menus, place orders, make payments, and receive update — all without leaving WhatsApp."
      },
      {
        type: "callout",
        text: "In the near future, people will not say: 'Download this app to order food.' They will say: 'Just message this number.' Ordering will feel like texting or calling a friend."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "WhatsApp is no longer just a messaging app — it is becoming the operating system for everyday transactions in emerging markets, and Brosa is at the forefront of this transformation. By turning conversations into commerce, Brosa is not just improving how people order — it is redefining how businesses and customers connect."
      }
    ]
  };

  return (
    <div style={{ background: '#FFF7ED', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* Blog Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', borderBottom: '1px solid rgba(249,115,22,0.1)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'linear-gradient(to left, rgba(249,115,22,0.05), transparent)' }}></div>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ padding: '6px 12px', background: 'rgba(249,115,22,0.1)', color: '#F97316', borderRadius: '8px', fontSize: '14px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {post.category}
              </span>
              <span style={{ color: '#A8A29E', fontWeight: '500' }}>•</span>
              <span style={{ color: '#78716C', fontWeight: '500' }}>{post.readTime}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: '900', color: '#1C0A00', marginBottom: '32px', lineHeight: '1.1', letterSpacing: '-1.5px' }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', background: '#FFEDD5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', color: '#F97316', border: '2px solid #FFF7ED', boxShadow: '0 4px 12px rgba(249,115,22,0.15)' }}>
                BT
              </div>
              <div style={{ fontSize: '14px' }}>
                <p style={{ fontWeight: '800', color: '#1C0A00', margin: 0 }}>{post.author}</p>
                <p style={{ color: '#78716C', margin: 0, marginTop: '2px' }}>{post.date}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div>
            {post.content.map((block, idx) => {
              if (block.type === "paragraph") {
                return <p key={idx} style={{ color: '#444', fontWeight: '400', fontSize: '18px', lineHeight: '1.8', marginBottom: '32px' }}>{block.text}</p>;
              }
              if (block.type === "heading") {
                return (
                  <h2 key={idx} style={{ fontSize: '32px', fontWeight: '900', color: '#1C0A00', marginTop: '64px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px', letterSpacing: '-1px' }}>
                    <span style={{ height: '32px', width: '6px', background: '#F97316', borderRadius: '4px' }}></span>
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "comparison") {
                return (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', margin: '64px 0' }}>
                    <div style={{ background: '#FFF', padding: '32px', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                      <p style={{ fontWeight: '800', color: '#A8A29E', textTransform: 'uppercase', fontSize: '14px', marginBottom: '24px', letterSpacing: '0.1em' }}>The Old Way</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {block.from.map((item, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#A8A29E', textDecoration: 'line-through' }}>
                            <span style={{ color: '#EF4444', fontWeight: 'bold' }}>✕</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ background: '#1C0A00', padding: '32px', borderRadius: '24px', color: '#FFF', boxShadow: '0 24px 48px rgba(249,115,22,0.15)' }}>
                      <p style={{ fontWeight: '800', color: '#F97316', textTransform: 'uppercase', fontSize: '14px', marginBottom: '24px', letterSpacing: '0.1em' }}>The Brosa Way</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {block.to.map((item, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#FFF' }}>
                            <span style={{ color: '#F97316', fontWeight: 'bold' }}>✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }
              if (block.type === "list") {
                return (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '24px', margin: '48px 0' }}>
                    {block.items.map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: '24px', padding: '24px', background: '#FFF', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)', transition: 'border-color 0.2s ease', cursor: 'default' }}>
                        <div style={{ fontSize: '48px', fontWeight: '900', color: 'rgba(249,115,22,0.15)', lineHeight: 1 }}>
                          0{i + 1}
                        </div>
                        <div>
                          <h4 style={{ fontWeight: '800', color: '#1C0A00', fontSize: '20px', marginBottom: '8px' }}>{item.title}</h4>
                          <p style={{ color: '#444', fontWeight: '400', fontSize: '16px', lineHeight: '1.6' }}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }
              if (block.type === "callout") {
                return (
                  <div key={idx} style={{ margin: '64px 0', padding: '40px', background: '#F97316', borderRadius: '48px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 48px rgba(249,115,22,0.2)' }}>
                    <p style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: '800', color: '#FFF', position: 'relative', zIndex: 10, lineHeight: '1.4', fontStyle: 'italic' }}>
                      "{block.text}"
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div style={{ marginTop: '96px', paddingTop: '48px', borderTop: '1px solid rgba(249,115,22,0.1)' }}>
            <div style={{ background: 'rgba(249,115,22,0.05)', borderRadius: '40px', padding: '48px', textAlign: 'center', border: '1px solid rgba(249,115,22,0.1)' }}>
              <h3 style={{ fontSize: '32px', fontWeight: '900', color: '#1C0A00', marginBottom: '16px', letterSpacing: '-1px' }}>Ready to experience the shift?</h3>
              <p style={{ color: '#78716C', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px', fontSize: '18px' }}>
                Join thousands of users in Ghana ordering smarter every day. No app. Just chat.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                <a href="https://brosa-ai-ltd.blogspot.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', padding: '16px 32px', background: '#F97316', color: '#FFF', borderRadius: '16px', fontWeight: '800', textDecoration: 'none', boxShadow: '0 8px 24px rgba(249,115,22,0.25)', transition: 'all 0.2s' }}>
                  More Blog →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default BlogPage;
