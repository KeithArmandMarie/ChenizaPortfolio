'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

type Filter = 'all' | 'social' | 'design' | 'strategy';

const filters: { label: string; value: Filter }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Social Management', value: 'social' },
  { label: 'Visual Identity', value: 'design' },
  { label: 'Strategy', value: 'strategy' },
];

const projects = [
  {
    id: 1,
    category: 'social' as Filter,
    image: '/images/work-social.jpg',
    catLabel: 'Social Media Management',
    title: 'Boutique Lifestyle Brand',
    fullTitle: 'Boutique Lifestyle Brand — Instagram Ownership',
    description: 'Full-service social media management for an upscale lifestyle brand. We developed a distinct editorial aesthetic, optimized reel hooks, and cultivated a highly engaged community of ideal customers.',
    metrics: [{ num: '+240%', label: 'Engagement Rate' }, { num: '3.4M', label: 'Impressions Reached' }, { num: '100%', label: 'Cohesive Feed Visuals' }],
    deliverables: ['Monthly Content Strategy', 'Carousel & Graphic Design', 'Copywriting & Hashtag Curation', 'DM & Community Cultivation'],
  },
  {
    id: 2,
    category: 'design' as Filter,
    image: '/images/work-design.jpg',
    catLabel: 'Visual Identity',
    title: 'Aesthetic Brand System',
    fullTitle: 'Aesthetic Brand Identity & Visual System',
    description: 'Created an elevated visual identity system including flexible social media templates, typography hierarchy, custom color palettes, and story covers for a luxury beauty brand.',
    metrics: [{ num: '15+', label: 'Custom Templates' }, { num: '100%', label: 'Brand Guidelines Alignment' }, { num: '2x', label: 'Content Creation Speed' }],
    deliverables: ['Canva & Adobe Template Suite', 'Color & Typography System', 'Story & Highlight Covers', 'Promo Launch Banners'],
  },
  {
    id: 3,
    category: 'strategy' as Filter,
    image: '/images/work-strategy.jpg',
    catLabel: 'Brand Strategy',
    title: 'Agency Content Blueprint',
    fullTitle: 'Agency White-Label Content Blueprint',
    description: "Provided turnkey white-label strategy, content planning, and asset production for a creative agency's high-retainer accounts, seamlessly integrating into their Asana and Slack workflows.",
    metrics: [{ num: '5', label: 'Client Accounts Handled' }, { num: '0', label: 'Missed Deadlines' }, { num: '100%', label: 'White-Label Discreteness' }],
    deliverables: ['Content Calendars', 'Client Asset Packs', 'Caption Copywriting', 'Monthly Performance Reports'],
  },
  {
    id: 4,
    category: 'design' as Filter,
    image: '/images/work-content.jpg',
    catLabel: 'Content Design',
    title: 'High-Fashion Carousel Suite',
    fullTitle: 'High-Fashion Carousel Suite & Reels',
    description: 'Designed a high-converting carousel suite targeting beauty and fashion enthusiasts. Focused on typography balance, smooth slide transitions, and strategic call-to-actions.',
    metrics: [{ num: '+180%', label: 'Save & Share Rate' }, { num: '12', label: 'Editorial Carousels' }, { num: '4.8/5', label: 'Client Rating' }],
    deliverables: ['12 Slide Carousel Templates', 'Reel Cover Designs', 'Script Writing', 'Visual Layout Art'],
  },
];

const scrollReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as any },
});

export default function Work() {
  const [filter, setFilter] = useState<Filter>('all');
  const [active, setActive] = useState<typeof projects[0] | null>(null);

  const visible = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="py-32 relative" id="work">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">

        {/* Header */}
        <motion.div {...scrollReveal(0)} className="text-center mb-12">
          <span className="section-tag section-tag--center">Portfolio Showcase</span>
          <h2 className="font-poppins text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-[1.15] text-text-primary mb-5">
            Work That <span className="text-gold-gradient italic font-light">Commands Attention</span>
          </h2>
          <p className="font-ibm text-[clamp(1rem,1.8vw,1.15rem)] text-text-secondary max-w-[500px] mx-auto">
            Click any project to explore full metrics, deliverables, and design strategy.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div {...scrollReveal(0.1)} className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full font-poppins text-[0.8rem] font-semibold tracking-wide transition-all duration-300 border ${
                filter === f.value
                  ? 'text-[#08090B] border-gold-primary'
                  : 'text-text-secondary border-[rgba(212,175,55,0.2)] hover:border-gold-primary hover:text-gold-light'
              }`}
              style={filter === f.value ? { background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #A8821F 100%)' } : {}}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence>
            {visible.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                onClick={() => setActive(p)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.15)] cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[rgba(212,175,55,0.4)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.7)] transition-all duration-500"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,9,11,0.92)] via-[rgba(8,9,11,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-7">
                  <span className="font-ibm text-[0.72rem] font-bold uppercase tracking-[0.15em] text-gold-primary mb-2">{p.catLabel}</span>
                  <h3 className="font-poppins text-xl font-semibold text-text-primary mb-3">{p.title}</h3>
                  <span className="inline-flex items-center gap-2 font-poppins text-[0.8rem] font-semibold text-gold-light">
                    Explore Case Study <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[680px] max-h-[90vh] overflow-y-auto rounded-2xl p-8 border border-[rgba(212,175,55,0.3)]"
              style={{ background: '#0E1014' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-text-secondary hover:text-gold-light hover:border-gold-primary transition-all duration-300"
              >
                <X size={16} />
              </button>

              <p className="font-ibm text-[0.75rem] font-bold tracking-[0.15em] uppercase text-gold-primary mb-2">{active.catLabel}</p>
              <h2 className="font-poppins text-2xl font-bold text-text-primary mb-5">{active.fullTitle}</h2>

              <div className="aspect-[16/7] rounded-xl overflow-hidden border border-[rgba(212,175,55,0.2)] mb-6">
                <img src={active.image} alt={active.fullTitle} className="w-full h-full object-cover" />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {active.metrics.map(m => (
                  <div key={m.label} className="text-center p-4 rounded-xl bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.15)]">
                    <div className="font-poppins text-2xl font-bold text-gold-light mb-1">{m.num}</div>
                    <div className="font-ibm text-[0.75rem] text-text-muted">{m.label}</div>
                  </div>
                ))}
              </div>

              <p className="font-ibm text-text-secondary leading-[1.8] mb-6">{active.description}</p>

              <h4 className="font-poppins text-lg font-semibold text-text-primary mb-3">Key Deliverables:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {active.deliverables.map(d => (
                  <li key={d} className="flex items-center gap-2.5 font-ibm text-[0.85rem] text-text-secondary">
                    <span className="text-gold-primary shrink-0">✦</span> {d}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setActive(null)}
                className="w-full text-center block py-4 rounded-lg font-poppins text-[0.8rem] font-bold tracking-[0.14em] uppercase text-[#08090B] transition-all duration-500 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #A8821F 100%)', border: '1px solid #FFF2C2' }}
              >
                Book A Call For A Similar Project ✦
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
