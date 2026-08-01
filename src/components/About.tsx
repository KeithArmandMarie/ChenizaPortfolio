'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = ['story', 'philosophy', 'tools'] as const;
type Tab = typeof tabs[number];

const tabLabels: Record<Tab, string> = {
  story: 'My Story',
  philosophy: 'Philosophy',
  tools: 'Tools & Tech',
};

const tools = [
  { label: 'Figma', icon: '⬡' },
  { label: 'Adobe Suite', icon: '◈' },
  { label: 'CapCut Pro', icon: '▶' },
  { label: 'Meta Suite', icon: '◉' },
  { label: 'Notion / Asana', icon: '◻' },
  { label: 'Canva Pro', icon: '✦' },
];

const scrollReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any },
};

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>('story');

  return (
    <section className="py-32 relative" id="about">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Media */}
          <motion.div {...scrollReveal}>
            <div className="relative max-w-[480px]">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-[rgba(212,175,55,0.35)] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <img
                  src="/images/portrait-about.jpg"
                  alt="Cheniza Kate in an editorial setting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Gold accent block */}
              <div className="absolute bottom-[-16px] right-[-16px] w-24 h-24 border border-gold-primary rounded-xl opacity-40" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            {...scrollReveal}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">About Cheniza</span>
            <h2 className="font-poppins text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-[1.15] text-text-primary mb-8">
              Glam in the Details. <br />
              <span className="text-gold-gradient italic font-light">Precision in Strategy.</span>
            </h2>

            {/* Tab Buttons */}
            <div className="flex gap-1 mb-8 p-1 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(212,175,55,0.12)] w-fit">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-md text-[0.8rem] font-semibold tracking-wide transition-all duration-300 font-poppins ${
                    activeTab === tab
                      ? 'bg-gold-gradient text-[#08090B] shadow-sm'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  style={activeTab === tab ? { background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #A8821F 100%)' } : {}}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[180px]">
              {activeTab === 'story' && (
                <motion.div key="story" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <p className="font-ibm text-text-secondary leading-[1.8] mb-4">
                    I'm Cheniza Kate — a brand right-hand, social strategist, and visual designer dedicated to founders and agencies who demand their digital presence feel as luxurious as their offer.
                  </p>
                  <p className="font-ibm text-text-secondary leading-[1.8] mb-4">
                    Over the past 3+ years, I've partnered directly with boutique founders and behind-the-scenes with agencies managing high-touch client rosters. My work bridges aesthetic storytelling with structured backend organization.
                  </p>
                  <blockquote className="border-l-2 border-gold-primary pl-5 mt-4 font-poppins italic text-text-secondary text-[0.95rem] leading-relaxed">
                    "Posting isn't enough. We build presence, authority, and emotional connection."
                  </blockquote>
                </motion.div>
              )}

              {activeTab === 'philosophy' && (
                <motion.div key="philosophy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <p className="font-ibm text-text-secondary leading-[1.8] mb-4">
                    Every brand has a distinct frequency. My goal is to capture that unique essence and translate it into high-converting visual systems, cohesive feeds, and seamless operational workflows.
                  </p>
                  <p className="font-ibm text-text-secondary leading-[1.8]">
                    Whether taking complete ownership of a founder's Instagram or delivering white-label assets for agency partners, reliability and premium finish are non-negotiable.
                  </p>
                </motion.div>
              )}

              {activeTab === 'tools' && (
                <motion.div key="tools" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <p className="font-ibm text-text-secondary leading-[1.8] mb-5">
                    I operate fluently across industry-standard creative and workflow suites:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {tools.map(({ label, icon }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(212,175,55,0.15)] text-[0.85rem] text-text-secondary font-ibm hover:border-gold-primary hover:text-gold-light transition-all duration-300"
                      >
                        <span className="text-gold-primary">{icon}</span>
                        {label}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 rounded-[4px] font-poppins text-[0.8rem] font-bold tracking-[0.14em] uppercase text-[#08090B] shadow-[0_4px_25px_rgba(212,175,55,0.22)] border border-[#FFF2C2] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(212,175,55,0.45)]"
              style={{ background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #A8821F 100%)' }}
            >
              Inquire For Availability
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
