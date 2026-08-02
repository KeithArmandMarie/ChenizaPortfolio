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
    title: 'Social Media Strategy & Management',
    desc: 'Complete feed curation & content strategy tailored for direct brand owners who want a polished presence without the daily effort.',
    features: [
      'Monthly Content Strategy & Calendars',
      'Editorial Feed Curation & Reels Scripting',
      'Engaging Copywriting & Hashtags',
      'Direct Client & Community Cultivation',
    ],
  },
  {
    num: '02',
    icon: '✦',
    title: 'Graphic & Visual Identity Design',
    desc: 'High-impact visual suites, Canva/Adobe template systems, and campaign graphics engineered to stop the scroll.',
    features: [
      'Social Media Brand Identity Suites',
      'Carousel & Story Template Systems',
      'Launch & Promotional Media Assets',
      'E-books, Lead Magnets & Guides',
    ],
  },
  {
    num: '03',
    icon: '💼',
    title: 'Agency Support & White-Label Fulfillment',
    desc: 'Reliable backend execution for creative agencies needing a disciplined design & content partner to fulfill high-volume client deliverables.',
    features: [
      'White-Label Content & Asset Production',
      'Turnkey Asana / Slack Workflow Sync',
      'Rapid Turnaround & Strict Deadlines',
      'Executive Virtual Assistance & Coordination',
    ],
  },
];

export default function Services() {
  return (
    <section className="py-32 relative bg-white" id="services">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">

        {/* Header */}
        <motion.div {...scrollReveal(0)} className="text-center mb-16">
          <span className="section-tag section-tag--center">Capabilities & Services</span>
          <h2 className="font-poppins text-[clamp(2.1rem,4vw,3.4rem)] font-bold leading-[1.15] text-text-primary mb-4">
            Strategic Execution for <span className="text-gold-gradient font-bold">Brands & Agencies</span>
          </h2>
          <p className="font-ibm text-[clamp(1rem,1.8vw,1.15rem)] text-text-secondary max-w-[640px] mx-auto leading-[1.8]">
            Tailored creative solutions built to elevate direct client brands and power seamless white-label agency workflows.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              {...scrollReveal(i * 0.1)}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative p-8 rounded-2xl bg-white border border-[rgba(248,200,220,0.8)] shadow-[0_8px_25px_rgba(248,200,220,0.2)] overflow-hidden group hover:border-gold-primary hover:shadow-[0_15px_40px_rgba(248,200,220,0.4)] transition-all duration-500"
            >
              {/* Subtle baby pink glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at top left, rgba(248,200,220,0.3) 0%, transparent 60%)' }} />

              <span className="font-poppins text-[0.72rem] font-bold tracking-[0.2em] text-gold-primary mb-4 block relative z-10">{svc.num}</span>
              <div className="w-12 h-12 rounded-xl bg-[#FFF0F5] border border-[rgba(248,200,220,0.8)] flex items-center justify-center text-2xl mb-5 relative z-10 text-gold-primary">
                {svc.icon}
              </div>
              <h3 className="font-poppins text-xl font-bold text-text-primary mb-3 relative z-10">{svc.title}</h3>
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

      </div>
    </section>
  );
}
