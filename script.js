/* ==========================================================================
   CHENIZA KATE — ULTRA-PREMIUM LUXURY GOLD PORTFOLIO
   Master Interactive & Animation Script
   ========================================================================== */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. INITIALIZE LUCIDE ICONS
       -------------------------------------------------------------------------- */
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    /* --------------------------------------------------------------------------
       2. LENIS SMOOTH SCROLL ENGINE
       -------------------------------------------------------------------------- */
    let lenis;
    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
            infinite: false
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    /* --------------------------------------------------------------------------
       3. CUSTOM SPOTLIGHT CURSOR FOLLOWER
       -------------------------------------------------------------------------- */
    const cursorFollower = document.getElementById('cursorFollower');
    const cursorDot      = document.getElementById('cursorDot');

    if (cursorFollower && cursorDot && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top  = `${mouseY}px`;
        });

        function animateCursor() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;

            cursorFollower.style.left = `${followerX}px`;
            cursorFollower.style.top  = `${followerY}px`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Enlarge cursor over interactive links/buttons
        const interactiveElements = document.querySelectorAll('a, button, .estimator__option-card, .work-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.6)';
                cursorFollower.style.borderColor = 'var(--gold-bright)';
                cursorFollower.style.backgroundColor = 'rgba(212, 175, 55, 0.15)';
            });
            el.addEventListener('mouseleave', () => {
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.borderColor = 'var(--gold-primary)';
                cursorFollower.style.backgroundColor = 'transparent';
            });
        });
    }

    /* --------------------------------------------------------------------------
       4. HEADER SCROLL & MOBILE NAV DRAWER
       -------------------------------------------------------------------------- */
    const header       = document.getElementById('header');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileNav    = document.getElementById('mobileNav');
    const mobileLinks  = document.querySelectorAll('.mobile-nav__link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    }, { passive: true });

    function toggleMobileNav() {
        const isOpen = mobileNav.classList.contains('is-open');
        if (isOpen) {
            mobileNav.classList.remove('is-open');
            mobileToggle.classList.remove('is-active');
            document.body.style.overflow = '';
        } else {
            mobileNav.classList.add('is-open');
            mobileToggle.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        }
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileNav);
    }
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('is-open');
            mobileToggle.classList.remove('is-active');
            document.body.style.overflow = '';
        });
    });

    /* --------------------------------------------------------------------------
       5. GSAP SCROLLANIMATION SUITE
       -------------------------------------------------------------------------- */
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Text Fade In
        gsap.from('.hero__badge, .hero__title, .hero__description, .hero__actions', {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out'
        });

        // Hero Image Parallax & Scale
        gsap.from('.hero__media', {
            opacity: 0,
            scale: 0.92,
            duration: 1.2,
            delay: 0.3,
            ease: 'power3.out'
        });

        // Scroll Section Reveals
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const targets = section.querySelectorAll('.section-tag, .section-title, .section-subtitle, .service-card, .work-card, .testimonial-card, .form-card');

            if (targets.length > 0) {
                gsap.from(targets, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    opacity: 0,
                    y: 35,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power3.out'
                });
            }
        });

        // Animated Counters
        const statValues = document.querySelectorAll('.hero__stat-value');
        statValues.forEach(stat => {
            const targetNum = parseInt(stat.dataset.target, 10);
            const suffix    = stat.textContent.replace(/[0-9]/g, '');

            ScrollTrigger.create({
                trigger: stat,
                start: 'top 90%',
                onEnter: () => {
                    gsap.to({ val: 0 }, {
                        val: targetNum,
                        duration: 2,
                        ease: 'power2.out',
                        onUpdate: function() {
                            stat.textContent = Math.floor(this.targets()[0].val) + suffix;
                        }
                    });
                }
            });
        });
    }

    /* --------------------------------------------------------------------------
       6. INTERACTIVE ABOUT TABS
       -------------------------------------------------------------------------- */
    const tabBtns     = document.querySelectorAll('.about__tab-btn');
    const tabContents = document.querySelectorAll('.about__tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('is-active'));
            tabContents.forEach(c => c.classList.remove('is-active'));

            btn.classList.add('is-active');
            const activeTab = document.getElementById(`tab-${tabId}`);
            if (activeTab) {
                activeTab.classList.add('is-active');
            }
        });
    });

    /* --------------------------------------------------------------------------
       7. INTERACTIVE SERVICE ESTIMATOR & RETAINER CALCULATOR
       -------------------------------------------------------------------------- */
    const estimatorCards = document.querySelectorAll('.estimator__option-card');
    const estPriceDisplay = document.getElementById('estPrice');
    const estTimelineDisplay = document.getElementById('estTimeline');
    const estInquireBtn   = document.getElementById('estInquireBtn');

    function calculateEstimator() {
        let totalPrice = 0;
        let totalDays  = 0;
        let count      = 0;

        estimatorCards.forEach(card => {
            if (card.classList.contains('is-selected')) {
                totalPrice += parseInt(card.dataset.price, 10);
                totalDays  += parseInt(card.dataset.days, 10);
                count++;
            }
        });

        if (count === 0) {
            if (estPriceDisplay) estPriceDisplay.textContent = '$0';
            if (estTimelineDisplay) estTimelineDisplay.textContent = 'Select at least one service option';
        } else {
            if (estPriceDisplay) estPriceDisplay.textContent = `$${totalPrice}`;
            if (estTimelineDisplay) estTimelineDisplay.textContent = `Estimated Onboarding: ~${totalDays} Business Days`;
        }
    }

    estimatorCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-selected');

            // Toggle checkbox inner visual
            const checkbox = card.querySelector('.estimator__checkbox');
            if (checkbox) {
                if (card.classList.contains('is-selected')) {
                    checkbox.innerHTML = '<i data-lucide="check" style="width: 14px; height: 14px;"></i>';
                } else {
                    checkbox.innerHTML = '';
                }
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }

            calculateEstimator();
        });
    });

    if (estInquireBtn) {
        estInquireBtn.addEventListener('click', () => {
            const serviceSelect = document.getElementById('service');
            if (serviceSelect) {
                serviceSelect.value = 'custom';
            }
        });
    }

    // Initial calculation
    calculateEstimator();

    /* --------------------------------------------------------------------------
       8. PORTFOLIO FILTER & LIGHTBOX CASE STUDY MODAL
       -------------------------------------------------------------------------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards  = document.querySelectorAll('.work-card');
    const modal      = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody  = document.getElementById('modalBody');

    // Portfolio Category Filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            filterBtns.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            workCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    gsap.fromTo(card, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4 });
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Case Study Data Store
    const projectData = {
        '1': {
            title: 'Boutique Lifestyle Brand — Instagram Ownership',
            category: 'Social Media Management & Feed Curation',
            metrics: [
                { num: '+240%', label: 'Engagement Rate' },
                { num: '3.4M', label: 'Impressions Reached' },
                { num: '100%', label: 'Cohesive Feed Visuals' }
            ],
            image: 'images/work-social.jpg',
            description: 'Full-service social media management for an upscale lifestyle brand. We developed a distinct editorial aesthetic, optimized reel hooks, and cultivated a highly engaged community of ideal customers.',
            deliverables: ['Monthly Content Strategy', 'Carousel & Graphic Design', 'Copywriting & Hashtag Curation', 'DM & Community Cultivation']
        },
        '2': {
            title: 'Aesthetic Brand Identity & Visual System',
            category: 'Graphic Design & Brand Systems',
            metrics: [
                { num: '15+', label: 'Custom Templates' },
                { num: '100%', label: 'Brand Guidelines Alignment' },
                { num: '2x', label: 'Content Creation Speed' }
            ],
            image: 'images/work-design.jpg',
            description: 'Created an elevated visual identity system including flexible social media templates, typography hierarchy, custom color palettes, and story covers for a luxury beauty brand.',
            deliverables: ['Canva & Adobe Template Suite', 'Color & Typography System', 'Story & Highlight Covers', 'Promo Launch Banners']
        },
        '3': {
            title: 'Agency White-Label Content Blueprint',
            category: 'Brand Strategy & Agency Support',
            metrics: [
                { num: '5', label: 'Client Accounts Handled' },
                { num: '0', label: 'Missed Deadlines' },
                { num: '100%', label: 'White-Label Discreteness' }
            ],
            image: 'images/work-strategy.jpg',
            description: 'Provided turnkey white-label strategy, content planning, and asset production for a creative agency’s high-retainer accounts, seamlessly integrating into their Asana and Slack workflows.',
            deliverables: ['Content Calendars', 'Client Asset Packs', 'Caption Copywriting', 'Monthly Performance Reports']
        },
        '4': {
            title: 'High-Fashion Carousel Suite & Reels',
            category: 'Content Curation & Design',
            metrics: [
                { num: '+180%', label: 'Save & Share Rate' },
                { num: '12', label: 'Editorial Carousels' },
                { num: '4.8/5', label: 'Client Rating' }
            ],
            image: 'images/work-content.jpg',
            description: 'Designed a high-converting carousel suite targeting beauty and fashion enthusiasts. Focused on typography balance, smooth slide transitions, and strategic call-to-actions.',
            deliverables: ['12 Slide Carousel Templates', 'Reel Cover Designs', 'Script Writing', 'Visual Layout Art']
        }
    };

    // Open Case Study Modal
    workCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            const data = projectData[projectId];

            if (data && modal && modalBody) {
                modalBody.innerHTML = `
                    <div style="font-size: 0.78rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold-primary); margin-bottom: 0.5rem;">
                        ${data.category}
                    </div>
                    <h2>${data.title}</h2>

                    <div style="width: 100%; height: 340px; border-radius: 12px; overflow: hidden; margin: 1.5rem 0; border: 1px solid var(--border-gold);">
                        <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>

                    <div class="modal__metrics">
                        ${data.metrics.map(m => `
                            <div>
                                <div class="modal__metric-num">${m.num}</div>
                                <div style="font-size: 0.8rem; color: var(--text-muted);">${m.label}</div>
                            </div>
                        `).join('')}
                    </div>

                    <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">${data.description}</p>

                    <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--text-primary); margin-bottom: 0.75rem;">Key Deliverables Included:</h4>
                    <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 2rem;">
                        ${data.deliverables.map(d => `<li style="font-size: 0.85rem; color: var(--text-secondary); display: flex; align-items: center; gap: 8px;"><span style="color: var(--gold-primary);">✦</span> ${d}</li>`).join('')}
                    </ul>

                    <a href="#contact" class="btn btn--gold" id="modalCta" style="width: 100%; text-align: center;">Book A Call For A Similar Project ✦</a>
                `;

                const modalCta = document.getElementById('modalCta');
                if (modalCta) {
                    modalCta.addEventListener('click', closeModal);
                }

                modal.classList.add('is-open');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeModal() {
        if (modal) {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closeModal();
    });

    /* --------------------------------------------------------------------------
       9. CONTACT FORM SUBMISSION
       -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn   = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (submitBtn) {
                submitBtn.innerHTML = 'Sending...';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
            }

            setTimeout(() => {
                contactForm.style.display = 'none';
                if (formSuccess) formSuccess.classList.add('is-visible');
            }, 1200);
        });
    }

});
