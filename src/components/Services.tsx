'use client';

import { motion } from 'framer-motion';

const scrollReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as any },
});

const services = [
  {
    num: '01',
    icon: '📱',
    title: 'Social Media Management',
    desc: 'End-to-end account ownership. Strategy, feed design, scripting, publishing, and community cultivation so you show up effortlessly.',
    features: [
      'Monthly Content Strategy & Calendars',
      'Feed Curation & Carousel Creation',
      'Copywriting & Hashtag Optimization',
      'DM Handling & Community Growth',
    ],
  },
  {
    num: '02',
    icon: '✦',
    title: 'Graphic & Visual Design',
    desc: 'Stop-the-scroll assets. Custom Canva & Illustrator templates, launch assets, and brand systems that radiate sophistication.',
    features: [
      'Social Media Visual Identity',
      'Carousel & Story Template Suites',
      'Campaign & Promotional Graphics',
      'E-books & Lead Magnet Formatting',
    ],
  },
  {
    num: '03',
    icon: '💼',
    title: 'Executive VA & White-Label',
    desc: 'High-level operational support for agencies and busy executives. Turnkey execution behind the scenes with strict confidentiality.',
    features: [
      'Inbox & Schedule Management',
      'White-Label Agency Fulfillment',
      'Content Repurposing & Scheduling',
      'Client Onboarding Assistance',
    ],
  },
];

export default function Services() {
  return (
    <section className="py-32 relative" id="services">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">

        {/* Header */}
        <motion.div {...scrollReveal(0)} className="text-center mb-16">
          <span className="section-tag section-tag--center">Bespoke Offerings</span>
          <h2 className="font-poppins text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-[1.15] text-text-primary mb-5">
            Designed for <span className="text-gold-gradient italic font-light">Measurable Impact</span>
          </h2>
          <p className="font-ibm text-[clamp(1rem,1.8vw,1.15rem)] text-text-secondary max-w-[620px] mx-auto leading-[1.8]">
            Tailored retainers and strategic support designed to remove friction and elevate your online presence.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              {...scrollReveal(i * 0.1)}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative p-8 rounded-2xl bg-[rgba(18,20,26,0.75)] border border-[rgba(212,175,55,0.12)] backdrop-blur-sm overflow-hidden group hover:border-[rgba(212,175,55,0.35)] hover:bg-[rgba(28,31,40,0.85)] transition-all duration-500"
            >
              {/* Subtle gold glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background: 'radial-gradient(ellipse at top left, rgba(212,175,55,0.06) 0%, transparent 60%)' }} />

              <span className="font-poppins text-[0.7rem] font-bold tracking-[0.2em] text-[rgba(212,175,55,0.5)] mb-4 block relative z-10">{svc.num}</span>
              <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-2xl mb-5 relative z-10">
                {svc.icon}
              </div>
              <h3 className="font-poppins text-xl font-semibold text-text-primary mb-3 relative z-10">{svc.title}</h3>
              <p className="font-ibm text-[0.9rem] text-text-secondary leading-[1.8] mb-6 relative z-10">{svc.desc}</p>
              <ul className="space-y-2.5 relative z-10">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-ibm text-[0.85rem] text-text-secondary">
                    <span className="text-gold-primary mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="gold-divider mb-20" />

        {/* Estimator is a separate React component rendered below */}
      </div>
    </section>
  );
}
