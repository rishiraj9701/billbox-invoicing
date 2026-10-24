import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import type { SplitTextInstance } from './vite-env';

import { SvgSprite } from './components/SvgSprite';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Logos } from './components/Logos';
import { Features } from './components/Features';
import { Statement } from './components/Statement';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const SplitText = window.SplitText;

    if (SplitText) {
      gsap.registerPlugin(ScrollTrigger, SplitText);
    } else {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Lenis smooth scrolling
    let lenis: Lenis | null = null;
    let tickerFn: ((time: number) => void) | null = null;

    if (!reduce) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      tickerFn = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);
    }

    // Smooth anchor navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        try {
          const dest = document.querySelector(href);
          if (dest) {
            e.preventDefault();
            if (lenis) {
              lenis.scrollTo(dest as HTMLElement, { offset: -90, duration: 1.2 });
            } else {
              dest.scrollIntoView({ behavior: 'smooth' });
            }
          }
        } catch {
          // Ignore invalid selector
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    const fmt = (v: number, d = 0) =>
      v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });

    const ctx = gsap.context(() => {
      if (reduce) {
        document.querySelectorAll<HTMLElement>('.fill-text').forEach((el) => {
          el.style.color = '#fff';
        });
        return;
      }

      // Hero animations
      if (SplitText) {
        SplitText.create('.hero h1', {
          type: 'words,lines',
          mask: 'lines',
          autoSplit: true,
          onSplit(self: SplitTextInstance) {
            return gsap.fromTo(
              self.words || [],
              { yPercent: 110, rotateX: -40, opacity: 0, transformOrigin: '50% 100%' },
              {
                yPercent: 0,
                rotateX: 0,
                opacity: 1,
                duration: 1.1,
                ease: 'expo.out',
                stagger: 0.06,
                delay: 0.15,
                clearProps: 'transform,opacity',
              }
            );
          },
        });
      } else {
        gsap.fromTo(
          '.hero h1',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 0.15, clearProps: 'transform,opacity' }
        );
      }

      gsap.fromTo(
        '.hero [data-fade]',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08, delay: 0.45, clearProps: 'transform,opacity' }
      );

      gsap.fromTo(
        '.mock',
        { y: 90, rotateX: 16, opacity: 0, transformPerspective: 1400, transformOrigin: '50% 0' },
        { y: 0, rotateX: 0, opacity: 1, duration: 1.4, ease: 'power3.out', delay: 0.7, clearProps: 'transform,opacity' }
      );

      gsap.fromTo(
        '.float',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.15, delay: 1.3, clearProps: 'transform,opacity' }
      );

      // Reveal groups
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((g) => {
        gsap.fromTo(
          g.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: { trigger: g, start: 'top 82%' },
            clearProps: 'transform,opacity',
          }
        );
      });

      // Headings
      gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
        if (SplitText) {
          SplitText.create(el, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit(self: SplitTextInstance) {
              return gsap.fromTo(
                self.lines || [],
                { yPercent: 100, opacity: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  duration: 1,
                  ease: 'expo.out',
                  stagger: 0.1,
                  scrollTrigger: { trigger: el, start: 'top 85%' },
                  clearProps: 'transform,opacity',
                }
              );
            },
          });
        } else {
          gsap.fromTo(
            el,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'expo.out',
              scrollTrigger: { trigger: el, start: 'top 85%' },
              clearProps: 'transform,opacity',
            }
          );
        }
      });

      gsap.utils.toArray<HTMLElement>('.sec-head .lead, .sec-head .price-toggle').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            delay: 0.15,
            scrollTrigger: { trigger: el, start: 'top 88%' },
            clearProps: 'transform,opacity',
          }
        );
      });

      // Scroll-fill text
      gsap.utils.toArray<HTMLElement>('.fill-text').forEach((el) => {
        el.classList.add('split');
        if (SplitText) {
          SplitText.create(el, {
            type: 'lines',
            linesClass: 'line',
            autoSplit: true,
            onSplit(self: SplitTextInstance) {
              return gsap.timeline().add(
                (self.lines || []).map((l) =>
                  gsap.to(l, {
                    backgroundPosition: '0% 0',
                    ease: 'none',
                    scrollTrigger: { trigger: l, start: 'top 85%', end: 'bottom 50%', scrub: true },
                  })
                )
              );
            },
          });
        } else {
          el.style.color = '#fff';
        }
      });

      // Counters
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const end = parseFloat(el.dataset.count || '0');
        const d = parseInt(el.dataset.decimals || '0', 10);
        const o = { v: 0 };
        el.textContent = fmt(0, d);
        gsap.to(o, {
          v: end,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => {
            el.textContent = fmt(d ? o.v : Math.round(o.v), d);
          },
        });
      });

      // Sparkline drawing animation
      const sp = document.getElementById('sparkLine') as unknown as SVGGeometryElement | null;
      if (sp && sp.getTotalLength) {
        const L = sp.getTotalLength();
        gsap.fromTo(
          sp,
          { strokeDasharray: L, strokeDashoffset: L },
          { strokeDashoffset: 0, duration: 1.8, ease: 'power2.out', scrollTrigger: { trigger: sp, start: 'top 85%' } }
        );
      }

      // Parallax
      gsap.utils.toArray<HTMLElement>('[data-speed]').forEach((el) => {
        gsap.to(el, {
          yPercent: -20 * parseFloat(el.dataset.speed || '1'),
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Stacking cards on desktop
      ScrollTrigger.matchMedia({
        '(min-width: 769px)': () => {
          const cards = gsap.utils.toArray<HTMLElement>('.stack-card');
          cards.forEach((c, i) => {
            if (i === cards.length - 1) return;
            gsap.to(c, {
              scale: 0.94,
              filter: 'brightness(.82)',
              ease: 'none',
              scrollTrigger: {
                trigger: cards[i + 1],
                start: 'top bottom',
                end: 'top 140px',
                scrub: true,
              },
            });
          });
        },
      });

      ScrollTrigger.refresh();
    });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      if (tickerFn) gsap.ticker.remove(tickerFn);
      ctx.revert();
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <SvgSprite />
      <Navbar />
      <main id="top">
        <Hero />
        <Logos />
        <Features />
        <Statement />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default App;
