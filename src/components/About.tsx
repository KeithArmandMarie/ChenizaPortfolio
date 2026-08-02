'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = ['story', 'philosophy', 'tools'] as const;
type Tab = typeof tabs[number];

const tabLabels: Record<Tab, string> = {
  story: 'My Background',
  philosophy: 'Approach & Value',
  tools: 'Toolkit & Tech',
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
    <section className="py-32 relative bg-[#FFF8FA]" id="about">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Media */}
          <motion.div {...scrollReveal}>
            <div className="relative max-w-[480px]">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[rgba(248,200,220,0.8)] shadow-[0_15px_40px_rgba(248,200,220,0.35)] bg-white">
                <img
                  src="/images/portrait-about.jpg"
                  alt="Cheniza Kate — Bachelor of Science in Secondary Education, Cum Laude"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Gold accent block */}
              <div className="absolute bottom-[-16px] right-[-16px] w-24 h-24 border border-[rgba(212,175,55,0.4)] rounded-2xl opacity-60 pointer-events-none" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            {...scrollReveal}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">About Cheniza</span>
            <h2 className="font-poppins text-[clamp(2.1rem,4vw,3.4rem)] font-bold leading-[1.18] text-text-primary mb-4">
              Academic Excellence. <br />
              <span className="text-gold-gradient font-bold">Uncompromising Design Quality.</span>
            </h2>

            {/* Education Honor Badge */}
            <div className="mb-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-[rgba(248,200,220,0.8)] shadow-sm">
              <span className="text-xl">🎓</span>
              <div>
                <div className="font-poppins font-bold text-[0.88rem] text-text-primary">Bachelor of Science in Secondary Education</div>
                <div className="font-ibm text-[0.78rem] font-semibold text-gold-primary">Cum Laude Graduate</div>
              </div>
            </div>

            {/* Tab Buttons */}
            <div className="flex gap-1.5 mb-8 p-1.5 rounded-xl bg-white border border-[rgba(248,200,220,0.8)] w-fit shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-lg text-[0.8rem] font-semibold tracking-wide transition-all duration-300 font-poppins ${
                    activeTab === tab
                      ? 'text-[#1F1A24] shadow-sm'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  style={activeTab === tab ? { background: 'linear-gradient(135deg, #F8C8DC 0%, #D4AF37 50%, #C5A059 100%)' } : {}}
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
                    I'm Cheniza Kate — a proud Cum Laude graduate with a <strong className="text-text-primary">Bachelor of Science in Secondary Education</strong>. My academic background gives me a unique advantage: clear communication, structured presentation, and an innate understanding of how to engage an audience.
                  </p>
                  <p className="font-ibm text-text-secondary leading-[1.8] mb-4">
                    As a fresh graduate, I bring unbounded enthusiasm, quick adaptability, and meticulous attention to detail. I am dedicated to helping brand owners and creative agencies grow through social media management, visual design, and virtual assistance.
                  </p>
                  <blockquote className="border-l-2 border-gold-primary pl-5 mt-4 font-poppins font-normal text-text-primary text-[0.95rem] leading-relaxed">
                    "Every brand story deserves to be communicated clearly, beautifully, and purposefully."
                  </blockquote>
                </motion.div>
              )}

              {activeTab === 'philosophy' && (
                <motion.div key="philosophy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <p className="font-ibm text-text-secondary leading-[1.8] mb-4">
                    I approach every project with structured intent and genuine passion. My background in education means I break down complex concepts into engaging, easy-to-digest visuals and captions.
                  </p>
                  <p className="font-ibm text-text-secondary leading-[1.8]">
                    Whether assisting direct brand founders with full Instagram management or supporting creative agencies with white-label design assets, I guarantee prompt communication, high reliability, and top-quality output.
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
                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-white border border-[rgba(248,200,220,0.8)] text-[0.85rem] text-text-primary font-ibm hover:border-gold-primary transition-all duration-300 shadow-sm"
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
              className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 rounded-[6px] font-poppins text-[0.8rem] font-bold tracking-[0.14em] uppercase text-[#1F1A24] shadow-[0_4px_20px_rgba(248,200,220,0.4)] border border-[rgba(248,200,220,0.9)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(248,200,220,0.6)]"
              style={{ background: 'linear-gradient(135deg, #F8C8DC 0%, #D4AF37 50%, #C5A059 100%)' }}
            >
              Get In Touch ✦
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

