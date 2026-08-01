'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const stats = [
  { value: '3+', label: 'Years of Excellence' },
  { value: '20+', label: 'Brands Elevated' },
  { value: '100%', label: 'On-Time Execution' },
];

export default function Hero() {
  return (
    <section
      className="min-h-screen pt-[calc(84px+3rem)] pb-16 flex flex-col justify-center relative overflow-hidden"
      id="hero"
    >
      {/* Ambient Glows */}
      <div className="ambient-glow ambient-glow--gold absolute" style={{ top: '-100px', right: '-100px' }} />
      <div className="ambient-glow ambient-glow--dark absolute" style={{ top: '40%', left: '-200px' }} />

      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* Content */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <motion.div
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.35)] text-[0.78rem] font-semibold tracking-[0.08em] text-gold-light mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#4ECA84] shadow-[0_0_10px_#4ECA84] pulse-glow" />
              Available for Select Retainers Q3/Q4
            </motion.div>

            {/* Title */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-poppins text-[clamp(2.8rem,5.5vw,4.8rem)] font-bold leading-[1.08] tracking-[-0.02em] text-text-primary mb-6"
            >
              Making Your Brand <br />
              <span className="text-gold-gradient font-light italic">The Main Character.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeUp(0.3)}
              className="font-ibm text-[clamp(1.05rem,1.8vw,1.2rem)] text-text-secondary leading-[1.8] max-w-[540px] mb-10"
            >
              Bespoke social media management, editorial graphic design, and strategic executive
              assistance crafted for visionary founders and high-growth creative agencies.
            </motion.p>

            {/* Actions */}
            <motion.div {...fadeUp(0.4)} className="flex items-center gap-5 flex-wrap mb-12">
              <a href="#contact" className="hero-btn-gold group">
                Work With Me
                <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="#work" className="hero-btn-outline">
                View Showcase
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex items-center gap-10 pt-8 border-t border-[rgba(212,175,55,0.12)] w-full"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-poppins text-[2.2rem] font-semibold text-gold-primary leading-none">
                    {value}
                  </span>
                  <span className="font-ibm text-[0.78rem] text-text-muted tracking-[0.05em] mt-1">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Media Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[440px] mx-auto">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[rgba(212,175,55,0.35)] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.22)] group">
                <img
                  src="/images/portrait-hero.jpg"
                  alt="Cheniza Kate — Brand Strategist & Designer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="eager"
                />
              </div>
              {/* Offset frame */}
              <div className="absolute inset-[-15px] border border-gold-primary rounded-2xl opacity-35 pointer-events-none" />

              {/* Floating tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[-20px] left-[-30px] bg-[rgba(18,20,26,0.75)] backdrop-blur-[20px] border border-[rgba(212,175,55,0.35)] rounded-lg p-4 flex items-center gap-3.5 z-10 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(212,175,55,0.08)] border border-gold-primary text-gold-primary flex items-center justify-center text-[1.1rem]">
                  ✦
                </div>
                <div>
                  <h4 className="font-poppins text-[0.95rem] font-semibold text-text-primary">Strategy Meets Style</h4>
                  <p className="font-ibm text-[0.75rem] text-text-secondary">Content that stops the scroll.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .hero-btn-gold {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 1.1rem 2.2rem;
          border-radius: 4px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #A8821F 100%);
          color: #08090B;
          box-shadow: 0 4px 25px rgba(212, 175, 55, 0.22);
          border: 1px solid #FFF2C2;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
        }
        .hero-btn-gold:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 35px rgba(212, 175, 55, 0.45);
        }
        .hero-btn-outline {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 1.1rem 2.2rem;
          border-radius: 4px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: transparent;
          color: #FAF8F5;
          border: 1px solid rgba(212, 175, 55, 0.35);
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
        }
        .hero-btn-outline:hover {
          border-color: #D4AF37;
          color: #FFF2C2;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(212,175,55,0.15);
        }
      `}</style>
    </section>
  );
}
