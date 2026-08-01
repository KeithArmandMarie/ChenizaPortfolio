'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Option {
  label: string;
  desc: string;
  price: number;
  days: number;
}

const options: Option[] = [
  { label: 'Social Media Management', desc: 'Strategy, 12 posts/mo, captions & analytics.', price: 600, days: 5 },
  { label: 'Visual Template Suite', desc: '15 custom editable Canva / Adobe graphics.', price: 450, days: 3 },
  { label: 'Short-Form Video Editing', desc: '8 edited Reels / TikToks with subtitles.', price: 350, days: 2 },
  { label: 'Executive VA Support', desc: 'Inbox, scheduling & admin (20 hrs/mo).', price: 500, days: 4 },
];

export default function Estimator() {
  const [selected, setSelected] = useState<Set<number>>(new Set([0]));

  const totalPrice = Array.from(selected).reduce((acc, i) => acc + options[i].price, 0);
  const totalDays = Array.from(selected).reduce((acc, i) => acc + options[i].days, 0);

  const toggle = (i: number) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="pb-32 relative" id="estimator">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-8 md:p-12 bg-[rgba(18,20,26,0.75)] border border-[rgba(212,175,55,0.2)] backdrop-blur-sm"
          style={{ background: 'rgba(14,16,20,0.9)' }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="section-tag section-tag--center">Interactive Calculator</span>
            <h3 className="font-poppins text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.2] text-text-primary mb-3">
              Build Your Custom <span className="text-gold-gradient italic font-light">Retainer Scope</span>
            </h3>
            <p className="font-ibm text-[0.95rem] text-text-secondary max-w-[520px] mx-auto">
              Select your required services below for an instant estimated monthly investment & turnaround time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            {/* Option Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {options.map((opt, i) => {
                const isOn = selected.has(i);
                return (
                  <motion.button
                    key={opt.label}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggle(i)}
                    className={`text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isOn
                        ? 'border-gold-primary bg-[rgba(212,175,55,0.08)] shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        : 'border-[rgba(212,175,55,0.15)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(212,175,55,0.3)]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all duration-300 border ${
                        isOn
                          ? 'bg-gold-primary border-gold-primary text-[#08090B]'
                          : 'border-[rgba(212,175,55,0.3)] bg-transparent'
                      }`}>
                        {isOn && <span className="text-[0.7rem] font-bold">✓</span>}
                      </div>
                      <div>
                        <h4 className="font-poppins text-[0.9rem] font-semibold text-text-primary mb-1">{opt.label}</h4>
                        <p className="font-ibm text-[0.8rem] text-text-secondary">{opt.desc}</p>
                        <p className="font-poppins text-[0.85rem] font-bold text-gold-light mt-2">${opt.price}/mo</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Summary Box */}
            <div className="rounded-2xl p-6 border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.04)] flex flex-col justify-between">
              <div>
                <p className="font-ibm text-[0.75rem] font-bold uppercase tracking-[0.15em] text-gold-primary mb-2">
                  Estimated Retainer
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={totalPrice}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="font-poppins text-[3.5rem] font-bold text-text-primary leading-none mb-2"
                  >
                    {selected.size === 0 ? '$0' : `$${totalPrice}`}
                  </motion.div>
                </AnimatePresence>
                <p className="font-ibm text-[0.85rem] text-text-secondary mb-6">
                  {selected.size === 0
                    ? 'Select at least one service'
                    : `Estimated Onboarding: ~${totalDays} Business Days`}
                </p>
              </div>
              <a
                href="#contact"
                className="w-full text-center block py-4 px-6 rounded-lg font-poppins text-[0.8rem] font-bold tracking-[0.14em] uppercase text-[#08090B] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(212,175,55,0.45)]"
                style={{ background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #A8821F 100%)', border: '1px solid #FFF2C2' }}
              >
                Lock In This Package ✦
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
