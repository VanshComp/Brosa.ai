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
    <div className="min-h-screen bg-white">
      {/* Blog Hero */}
      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50 to-transparent opacity-50"></div>
        <div className="container-custom max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-lg text-sm font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-gray-400 font-medium">•</span>
              <span className="text-gray-500 font-medium">{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 border-2 border-white shadow-sm">
                BT
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900">{post.author}</p>
                <p className="text-gray-500">{post.date}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-slate prose-xl max-w-none">
            {post.content.map((block, idx) => {
              if (block.type === "paragraph") {
                return <p key={idx} className="text-gray-700 font-light leading-relaxed mb-8">{block.text}</p>;
              }
              if (block.type === "heading") {
                return (
                  <h2 key={idx} className="text-3xl font-extrabold text-slate-900 mt-16 mb-8 flex items-center gap-4">
                    <span className="h-8 w-1.5 bg-teal-500 rounded-full"></span>
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "comparison") {
                return (
                  <div key={idx} className="grid md:grid-cols-2 gap-8 my-16">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                      <p className="font-bold text-slate-400 uppercase text-sm mb-6 tracking-widest">The Old Way</p>
                      <ul className="space-y-4">
                        {block.from.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-500 line-through decoration-slate-300">
                            <span className="text-red-400">✕</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-teal-900 p-8 rounded-3xl text-white shadow-2xl shadow-teal-200">
                      <p className="font-bold text-teal-400 uppercase text-sm mb-6 tracking-widest">The Brosa Way</p>
                      <ul className="space-y-4">
                        {block.to.map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className="text-teal-400">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }
              if (block.type === "list") {
                return (
                  <div key={idx} className="space-y-6 my-12">
                    {block.items.map((item, i) => (
                      <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                        <div className="text-4xl font-black text-slate-200 group-hover:text-teal-200 transition-colors">
                          0{i + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-xl mb-1">{item.title}</h4>
                          <p className="text-gray-600 font-light">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }
              if (block.type === "callout") {
                return (
                  <div key={idx} className="my-16 p-10 bg-slate-900 rounded-[3rem] relative overflow-hidden text-center group">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/20 to-transparent"></div>
                    <p className="text-2xl md:text-3xl font-bold text-white relative z-10 leading-tight">
                      "{block.text.split('"')[1]}"
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-24 pt-12 border-t border-gray-100">
            <div className="bg-teal-50 rounded-[2.5rem] p-12 text-center border border-teal-100">
              <h3 className="text-3xl font-black text-slate-900 mb-4 italic">Ready to experience the shift?</h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Join thousands of users in Ghana ordering smarter every day. No app. Just chat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#" className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                  Try Brosa on WhatsApp
                </a>
                <Link to="/contact" className="px-10 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <footer className="py-12 bg-white border-t border-gray-50">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.3em] mb-6">Spread the Word</p>
          <div className="flex justify-center gap-8 text-gray-400">
            <a href="#" className="hover:text-teal-600 transition-colors"><span className="font-bold">Twitter / X</span></a>
            <a href="#" className="hover:text-teal-600 transition-colors"><span className="font-bold">LinkedIn</span></a>
            <a href="#" className="hover:text-teal-600 transition-colors"><span className="font-bold">Facebook</span></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
