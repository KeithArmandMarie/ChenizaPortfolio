'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    stars: 5,
    text: '"Cheniza brought such a fresh, intentional eye to our brand. Her background in education and communication shines through in how clearly structured and visually stunning her content strategy is. Our engagement grew rapidly in just two months!"',
    initials: 'LC',
    name: 'Luisa C. — Founder & Creative Director',
    brand: 'Luxurious Living Brand',
  },
  {
    stars: 5,
    text: '"Finding a fresh graduate who delivers pixel-perfect work on tight agency timelines is rare. Cheniza is dependable, creative, and communicates clearly every step of the way. She has been an outstanding creative partner."',
    initials: 'AP',
    name: 'Adrian P. — Agency Director',
    brand: 'Aesthetic Media Studio',
  },
  {
    stars: 5,
    text: '"Fast, organized, and genuinely talented. Cheniza\'s designs look polished and high-end. As a Cum Laude graduate, her dedication and attention to detail show in every single carousel and story set she creates."',
    initials: 'SK',
    name: 'Sophia K. — E-Commerce Founder',
    brand: 'Skin & Radiance Collective',
  },
  {
    stars: 5,
    text: '"She delivered our full social media kit ahead of schedule. The quality of her carousels and caption copywriting was top tier. Her pedagogical background makes her content exceptionally clear and engaging!"',
    initials: 'MR',
    name: 'Mark R. — Brand Strategist',
    brand: 'Elevate Digital Studio',
  },
  {
    stars: 5,
    text: '"Cheniza understood our brand voice immediately. She created a stunning content calendar and visual identity that our audience loves. Extremely professional, deadline-driven, and easy to work with."',
    initials: 'JL',
    name: 'Jessica L. — Marketing Lead',
    brand: 'Jade Luxe Boutique',
  },
  {
    stars: 5,
    text: '"I was impressed by how quickly Cheniza adapted to our niche. She didn\'t just design static graphics — she crafted meaningful stories that truly connected with our customers. Sales and inquiries noticeably improved!"',
    initials: 'NB',
    name: 'Nathalie B. — Boutique Owner',
    brand: 'NB Wellness & Co.',
  },
  {
    stars: 5,
    text: '"Working with Cheniza was effortless. She\'s proactive, highly responsive, and the visuals she created elevated our entire Instagram presence. I highly recommend her to any brand owner!"',
    initials: 'TR',
    name: 'Tristan R. — Content Creator',
    brand: 'The Radiance Studio',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-28 relative bg-[#FFF9FA] overflow-hidden" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)]">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag section-tag--center">Client & Agency Praise</span>
          <h2 className="font-poppins text-[clamp(2.1rem,4vw,3.4rem)] font-bold leading-[1.15] text-text-primary mb-4">
            Trusted By <span className="text-gold-gradient font-bold">Founders & Agencies</span>
          </h2>
          <p className="font-ibm text-[clamp(1rem,1.8vw,1.15rem)] text-text-secondary max-w-[600px] mx-auto">
            Here is what direct brand clients and agency partners say about working with Cheniza.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative max-w-[850px] mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden min-h-[280px] sm:min-h-[240px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full p-8 md:p-12 rounded-3xl border border-[rgba(248,200,220,0.8)] bg-white shadow-[0_15px_45px_rgba(248,200,220,0.35)] flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex gap-1 text-gold-primary mb-5">
                    {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                      <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  <p className="font-ibm text-text-secondary leading-[1.85] text-[1.05rem] sm:text-[1.15rem]">
                    {testimonials[currentIndex].text}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[rgba(248,200,220,0.5)]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-pink-baby bg-[#FFF0F5] flex items-center justify-center font-poppins font-bold text-[0.95rem] text-gold-primary shrink-0 shadow-sm">
                      {testimonials[currentIndex].initials}
                    </div>
                    <div>
                      <h4 className="font-poppins text-[0.98rem] font-bold text-text-primary">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="font-ibm text-[0.82rem] text-text-muted">
                        {testimonials[currentIndex].brand}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-[rgba(248,200,220,0.9)] bg-white flex items-center justify-center text-text-primary hover:border-gold-primary hover:text-gold-primary hover:scale-105 transition-all shadow-sm cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-8 bg-gradient-to-r from-[#F8C8DC] to-[#D4AF37]' 
                      : 'w-2.5 bg-[rgba(248,200,220,0.6)] hover:bg-gold-primary'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-[rgba(248,200,220,0.9)] bg-white flex items-center justify-center text-text-primary hover:border-gold-primary hover:text-gold-primary hover:scale-105 transition-all shadow-sm cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

