'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

const stats = [
  { value: 'BSEd', label: 'Secondary Education' },
  { value: 'Cum Laude', label: 'Academic Honor' },
  { value: '100%', label: 'Dedication & Quality' },
];

export default function Hero() {
  return (
    <section
      className="min-h-screen pt-[calc(84px+3rem)] pb-16 flex flex-col justify-center relative overflow-hidden bg-white"
      id="hero"
    >
      {/* Ambient Glows */}
      <div className="ambient-glow ambient-glow--gold absolute" style={{ top: '-100px', right: '-100px' }} />
      <div className="ambient-glow ambient-glow--dark absolute" style={{ top: '35%', left: '-150px' }} />

      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">

          {/* Content */}
          <div className="flex flex-col items-start">

            {/* Title — 2 lines only */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-poppins text-[30px] sm:text-[46px] lg:text-[64px] font-bold leading-[1.12] tracking-[-0.02em] text-text-primary mb-6 max-w-[850px]"
            >
              Creative Strategy & Visual Design <br />
              <span className="text-gold-gradient font-bold">Built for Brands & Creative Agencies.</span>
            </motion.h1>

            {/* Description — Graduate of Bachelor of Secondary Education, Cum Laude */}
            <motion.p
              {...fadeUp(0.2)}
              className="font-ibm text-[clamp(1.05rem,1.8vw,1.18rem)] text-text-secondary leading-[1.8] max-w-[580px] mb-10"
            >
              Graduate of <strong className="text-text-primary font-semibold">Bachelor of Secondary Education, Cum Laude</strong>. Fueled by passion, creativity, and a fresh perspective — crafting engaging social media management, editorial graphic design, and virtual assistance for brands and agencies.
            </motion.p>

            {/* Actions */}
            <motion.div {...fadeUp(0.3)} className="flex items-center gap-5 flex-wrap mb-12">
              <a href="#contact" className="hero-btn-gold group">
                Work With Me
                <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="#work" className="hero-btn-outline">
                View Portfolio Showcase
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex items-center gap-8 sm:gap-10 pt-8 border-t border-[rgba(248,200,220,0.6)] w-full flex-wrap"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-poppins text-[1.8rem] sm:text-[2.2rem] font-bold text-gold-primary leading-none">
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
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[rgba(248,200,220,0.8)] shadow-[0_15px_45px_rgba(248,200,220,0.35)] group bg-white">
                <img
                  src="/images/portrait-hero.jpg"
                  alt="Cheniza Kate — Bachelor of Secondary Education, Cum Laude"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="eager"
                />
              </div>
              {/* Offset frame */}
              <div className="absolute inset-[-12px] border border-[rgba(212,175,55,0.4)] rounded-3xl opacity-60 pointer-events-none" />

              {/* Floating tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="absolute bottom-[-20px] left-[-20px] bg-white/95 backdrop-blur-[20px] border border-[rgba(248,200,220,0.8)] rounded-xl p-4 flex items-center gap-3.5 z-10 shadow-[0_12px_30px_rgba(248,200,220,0.4)]"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-pink-baby text-gold-primary flex items-center justify-center text-[1.1rem]">
                  🎓
                </div>
                <div>
                  <h4 className="font-poppins text-[0.92rem] font-semibold text-text-primary">BSEd, Cum Laude</h4>
                  <p className="font-ibm text-[0.75rem] text-text-secondary">Fresh Energy & Educational Rigor</p>
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
          padding: 1.05rem 2.2rem;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #F8C8DC 0%, #D4AF37 50%, #C5A059 100%);
          color: #1F1A24;
          box-shadow: 0 6px 22px rgba(248, 200, 220, 0.45);
          border: 1px solid rgba(248, 200, 220, 0.9);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
        }
        .hero-btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(248, 200, 220, 0.65), 0 4px 15px rgba(212, 175, 55, 0.3);
        }
        .hero-btn-outline {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 1.05rem 2.2rem;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: #FFFFFF;
          color: #1F1A24;
          border: 1px solid rgba(248, 200, 220, 0.8);
          box-shadow: 0 4px 15px rgba(248, 200, 220, 0.2);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
        }
        .hero-btn-outline:hover {
          border-color: #D4AF37;
          color: #C5A059;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212, 175, 55, 0.2);
        }
      `}</style>
    </section>
  );
}

