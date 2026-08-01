'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    stars: '★★★★★',
    text: '"Cheniza completely elevated how our brand shows up on social media. Every graphic feels tailored and intentional. We gained +240% engagement in 60 days."',
    initials: 'LC',
    name: 'Founder & Creative Director',
    brand: 'Luxurious Living Brand',
  },
  {
    stars: '★★★★★',
    text: '"As an agency owner, finding reliable white-label partners who hit tight deadlines without sacrificing aesthetic quality is rare. Cheniza is our secret weapon."',
    initials: 'AP',
    name: 'Agency Principal',
    brand: 'Aesthetic Media Studio',
  },
  {
    stars: '★★★★★',
    text: '"Fast turnarounds, crystal-clear communication, and graphics that look like a million bucks. Cheniza handles our back-end so seamlessly."',
    initials: 'SK',
    name: 'E-Commerce Founder',
    brand: 'Skin & Beauty Collective',
  },
];

const scrollReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as any },
});

export default function Testimonials() {
  return (
    <section className="py-32 relative" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">

        {/* Header */}
        <motion.div {...scrollReveal(0)} className="text-center mb-16">
          <span className="section-tag section-tag--center">Client Praise</span>
          <h2 className="font-poppins text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-[1.15] text-text-primary mb-5">
            Trusted By <span className="text-gold-gradient italic font-light">Founders & Agencies</span>
          </h2>
          <p className="font-ibm text-[clamp(1rem,1.8vw,1.15rem)] text-text-secondary">
            Read what clients have to say about working together.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.initials}
              {...scrollReveal(i * 0.1)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative p-8 rounded-2xl border border-[rgba(212,175,55,0.12)] bg-[rgba(18,20,26,0.75)] backdrop-blur-sm flex flex-col justify-between gap-6 hover:border-[rgba(212,175,55,0.35)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group overflow-hidden"
            >
              {/* Subtle glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.05) 0%, transparent 70%)' }} />

              <div className="relative z-10">
                <div className="text-gold-light text-lg tracking-wider mb-4">{t.stars}</div>
                <p className="font-ibm text-text-secondary leading-[1.85] italic text-[0.95rem]">{t.text}</p>
              </div>

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-11 h-11 rounded-full border border-gold-primary bg-[rgba(212,175,55,0.08)] flex items-center justify-center font-poppins font-bold text-[0.85rem] text-gold-primary shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-poppins text-[0.9rem] font-semibold text-text-primary">{t.name}</h4>
                  <p className="font-ibm text-[0.78rem] text-text-muted">{t.brand}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
