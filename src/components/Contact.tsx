'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [btnText, setBtnText] = useState('Submit Inquiry ✦');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setBtnText('Sending...');
    setTimeout(() => setFormState('success'), 1200);
  };

  const scrollReveal = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as any },
  });

  return (
    <section className="py-32 relative" id="contact">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">

          {/* Info */}
          <motion.div {...scrollReveal(0)}>
            <span className="section-tag">Get In Touch</span>
            <h2 className="font-poppins text-[clamp(2.2rem,4vw,3.4rem)] font-bold leading-[1.15] text-text-primary mb-5">
              Ready to Make Your Brand <br />
              <span className="text-gold-gradient italic font-light">The Main Character?</span>
            </h2>
            <p className="font-ibm text-text-secondary leading-[1.8] mb-10 max-w-[480px]">
              Whether you need full social management, high-fashion graphic suites, or dedicated agency support — I'm here to bring your vision to life.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-gold-primary shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-poppins text-[0.95rem] font-semibold text-text-primary mb-0.5">Fast Response Time</h4>
                  <p className="font-ibm text-[0.85rem] text-text-muted">Replies within 24–48 business hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-gold-primary shrink-0">
                  <Calendar size={18} />
                </div>
                <div>
                  <h4 className="font-poppins text-[0.95rem] font-semibold text-text-primary mb-0.5">Free Discovery Call</h4>
                  <p className="font-ibm text-[0.85rem] text-text-muted">30-minute alignment call with zero commitment.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            {...scrollReveal(0.15)}
            className="relative rounded-2xl p-8 md:p-10 border border-[rgba(212,175,55,0.2)] bg-[rgba(14,16,20,0.9)] overflow-hidden"
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)' }} />

            <AnimatePresence mode="wait">
              {formState !== 'success' ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 relative z-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="form-label">Your Name *</label>
                      <input type="text" id="name" required placeholder="Jane Smith" className="form-input" />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input type="email" id="email" required placeholder="jane@brand.com" className="form-input" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="clientType" className="form-label">I Am A... *</label>
                    <select id="clientType" required className="form-input">
                      <option value="" disabled>Select option</option>
                      <option value="founder">Direct Client / Brand Founder</option>
                      <option value="agency">Agency / White-Label Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="service" className="form-label">Interested Service *</label>
                    <select id="service" required className="form-input">
                      <option value="" disabled>Select service</option>
                      <option value="smm">Social Media Management</option>
                      <option value="design">Graphic & Visual Design</option>
                      <option value="va">Executive VA / White-Label</option>
                      <option value="custom">Custom Package Scope</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">Project Details & Goals *</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell me about your brand, goals, and target start date..."
                      className="form-input resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === 'submitting'}
                    whileHover={{ y: -2, boxShadow: '0 10px 35px rgba(212,175,55,0.45)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-lg font-poppins text-[0.8rem] font-bold tracking-[0.14em] uppercase text-[#08090B] transition-all duration-300 disabled:opacity-70"
                    style={{ background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #A8821F 100%)', border: '1px solid #FFF2C2' }}
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Submit Inquiry ✦'}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center py-10 relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 rounded-full border-2 border-gold-primary bg-[rgba(212,175,55,0.08)] flex items-center justify-center text-4xl text-gold-primary mb-6"
                  >
                    ✓
                  </motion.div>
                  <h3 className="font-poppins text-3xl font-bold text-text-primary mb-4">Inquiry Received!</h3>
                  <p className="font-ibm text-text-secondary max-w-[340px] leading-[1.8]">
                    Thank you for reaching out. I'll review your details and be in touch within 24–48 hours to schedule our discovery call!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
