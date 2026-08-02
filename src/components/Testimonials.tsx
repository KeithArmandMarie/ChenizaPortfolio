'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    stars: 5,
    text: '"Cheniza brought such a fresh, intentional eye to our brand. Her background in education and communication shines through in how clearly structured and visually stunning her content strategy is. Our engagement grew rapidly in just two months!"',
    initials: 'LC',
    name: 'Luisa C.',
    role: 'Founder & Creative Director',
    brand: 'Luxurious Living Brand',
  },
  {
    stars: 5,
    text: '"Finding a fresh graduate who delivers pixel-perfect work on tight agency timelines is rare. Cheniza is dependable, creative, and communicates clearly every step of the way. She has been an outstanding creative partner."',
    initials: 'AP',
    name: 'Adrian P.',
    role: 'Agency Director',
    brand: 'Aesthetic Media Studio',
  },
  {
    stars: 5,
    text: '"Fast, organized, and genuinely talented. Cheniza\'s designs look polished and high-end. As a Cum Laude graduate, her dedication and attention to detail show in every single carousel and story set she creates."',
    initials: 'SK',
    name: 'Sophia K.',
    role: 'E-Commerce Founder',
    brand: 'Skin & Radiance Collective',
  },
  {
    stars: 5,
    text: '"She delivered our full social media kit ahead of schedule. The quality of her carousels and caption copywriting was top tier. Her pedagogical background makes her content exceptionally clear and engaging!"',
    initials: 'MR',
    name: 'Mark R.',
    role: 'Brand Strategist',
    brand: 'Elevate Digital Studio',
  },
  {
    stars: 5,
    text: '"Cheniza understood our brand voice immediately. She created a stunning content calendar and visual identity that our audience loves. Extremely professional, deadline-driven, and easy to work with."',
    initials: 'JL',
    name: 'Jessica L.',
    role: 'Marketing Lead',
    brand: 'Jade Luxe Boutique',
  },
  {
    stars: 5,
    text: '"I was impressed by how quickly Cheniza adapted to our niche. She didn\'t just design static graphics — she crafted meaningful stories that truly connected with our customers. Sales and inquiries noticeably improved!"',
    initials: 'NB',
    name: 'Nathalie B.',
    role: 'Boutique Owner',
    brand: 'NB Wellness & Co.',
  },
  {
    stars: 5,
    text: '"Working with Cheniza was effortless. She\'s proactive, highly responsive, and the visuals she created elevated our entire Instagram presence. I highly recommend her to any brand owner!"',
    initials: 'TR',
    name: 'Tristan R.',
    role: 'Content Creator',
    brand: 'The Radiance Studio',
  },
];

// Inject keyframes once
const STYLE_ID = 'testimonial-marquee-style';
function injectStyle() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    @keyframes marquee-scroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee-scroll 40s linear infinite;
    }
    .marquee-track:hover,
    .marquee-track:focus-within {
      animation-play-state: paused;
    }
  `;
  document.head.appendChild(style);
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="shrink-0 w-[340px] sm:w-[400px] mx-4 p-7 rounded-2xl border border-[rgba(248,200,220,0.75)] bg-white shadow-[0_8px_32px_rgba(248,200,220,0.28)] flex flex-col gap-5 select-none"
    >
      {/* Stars */}
      <div className="flex gap-1 text-gold-primary">
        {[...Array(t.stars)].map((_, i) => (
          <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
        ))}
      </div>

      {/* Quote */}
      <p className="font-ibm text-[0.95rem] text-text-secondary leading-[1.8] line-clamp-5">
        {t.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[rgba(248,200,220,0.5)]">
        <div className="w-10 h-10 rounded-full border border-pink-baby bg-[#FFF0F5] flex items-center justify-center font-poppins font-bold text-[0.85rem] text-gold-primary shrink-0 shadow-sm">
          {t.initials}
        </div>
        <div>
          <p className="font-poppins text-[0.9rem] font-bold text-text-primary leading-tight">
            {t.name}
          </p>
          <p className="font-ibm text-[0.75rem] text-text-muted leading-tight">
            {t.role} · {t.brand}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    injectStyle();
  }, []);

  // Duplicate cards for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-28 relative bg-[#FFF9FA] overflow-hidden" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="section-tag section-tag--center">Client &amp; Agency Praise</span>
          <h2 className="font-poppins text-[clamp(2.1rem,4vw,3.4rem)] font-bold leading-[1.15] text-text-primary mb-4">
            Trusted By <span className="text-gold-gradient font-bold">Founders &amp; Agencies</span>
          </h2>
          <p className="font-ibm text-[clamp(1rem,1.8vw,1.15rem)] text-text-secondary max-w-[600px] mx-auto">
            Here is what direct brand clients and agency partners say about working with Cheniza.
          </p>
        </motion.div>
      </div>

      {/* Full-width marquee (outside the constrained container) */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, #FFF9FA, transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, #FFF9FA, transparent)' }} />

        <div ref={ref} className="marquee-track py-4">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
