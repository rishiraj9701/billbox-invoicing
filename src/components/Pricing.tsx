import React, { useState } from 'react';
import gsap from 'gsap';

export const Pricing: React.FC = () => {
  const [period, setPeriod] = useState<'m' | 'y'>('y');

  const togglePeriod = (newPeriod: 'm' | 'y') => {
    if (newPeriod === period) return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll<HTMLSpanElement>('.price span[data-m]');

    elements.forEach((el) => {
      const from = parseFloat(el.textContent?.replace(/\D/g, '') || '0');
      const to = parseFloat(el.dataset[newPeriod] || '0');

      if (!isReduced) {
        const obj = { v: from };
        gsap.to(obj, {
          v: to,
          duration: 0.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          },
        });
      } else {
        el.textContent = to.toString();
      }
    });

    setPeriod(newPeriod);
  };

  return (
    <section className="sec" id="arak" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head center">
          <span className="kicker">Pricing</span>
          <h2 className="h2" data-split>
            Transparent pricing, <span className="dim">no hidden fees.</span>
          </h2>
          <p className="lead">
            Every plan includes tax authority reporting and 8-year archiving. You can cancel anytime.
          </p>
          <div className="price-toggle" role="group" aria-label="Billing period">
            <button
              type="button"
              aria-pressed={period === 'm'}
              data-period="m"
              onClick={() => togglePeriod('m')}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={period === 'y'}
              data-period="y"
              onClick={() => togglePeriod('y')}
            >
              Annual<span className="save">−2 months</span>
            </button>
          </div>
        </div>

        <div className="prices" data-reveal>
          {/* Plan 1: Starter */}
          <article className="price-card">
            <h3>Starter</h3>
            <p className="desc">For new businesses that issue a few invoices a month.</p>
            <div className="price">
              $<span data-m="0" data-y="0">0</span><small>/mo</small>
            </div>
            <div className="price-note">free forever</div>
            <a href="#" className="btn btn-light">
              Free account <svg><use href="#i-arrow" /></svg>
            </a>
            <ul>
              <li><svg><use href="#i-check" /></svg>10 invoices a month</li>
              <li><svg><use href="#i-check" /></svg>Automatic tax authority submission</li>
              <li><svg><use href="#i-check" /></svg>PDF invoice by email</li>
              <li><svg><use href="#i-check" /></svg>1 user</li>
            </ul>
          </article>

          {/* Plan 2: Business (Featured) */}
          <article className="price-card featured">
            <h3>
              Business <span className="badge">Most popular</span>
            </h3>
            <p className="desc">For everyday invoicing, with bank sync and accountant access.</p>
            <div className="price">
              $<span data-m="9" data-y="7">{period === 'y' ? '7' : '9'}</span><small>/mo</small>
            </div>
            <div
              className="price-note"
              data-note-m="billed monthly"
              data-note-y="$84 billed annually"
            >
              {period === 'y' ? '$84 billed annually' : 'billed monthly'}
            </div>
            <a href="#" className="btn btn-accent">
              30 days free <svg><use href="#i-arrow" /></svg>
            </a>
            <ul>
              <li><svg><use href="#i-check" /></svg>Unlimited invoices and pro formas</li>
              <li><svg><use href="#i-check" /></svg>Bank sync and automatic matching</li>
              <li><svg><use href="#i-check" /></svg>Recurring invoices, payment reminders</li>
              <li><svg><use href="#i-check" /></svg>Free accountant access</li>
              <li><svg><use href="#i-check" /></svg>Mobile app</li>
            </ul>
          </article>

          {/* Plan 3: Team */}
          <article className="price-card">
            <h3>Team</h3>
            <p className="desc">For companies with multiple locations, a web shop or several employees.</p>
            <div className="price">
              $<span data-m="19" data-y="15">{period === 'y' ? '15' : '19'}</span><small>/mo</small>
            </div>
            <div
              className="price-note"
              data-note-m="billed monthly"
              data-note-y="$180 billed annually"
            >
              {period === 'y' ? '$180 billed annually' : 'billed monthly'}
            </div>
            <a href="#" className="btn btn-dark">
              30 days free <svg><use href="#i-arrow" /></svg>
            </a>
            <ul>
              <li><svg><use href="#i-check" /></svg>Everything in Business</li>
              <li><svg><use href="#i-check" /></svg>Up to 10 users, with permission management</li>
              <li><svg><use href="#i-check" /></svg>Web shop plugins and REST API</li>
              <li><svg><use href="#i-check" /></svg>Multiple invoice series and bank accounts</li>
              <li><svg><use href="#i-check" /></svg>Priority phone support</li>
            </ul>
          </article>
        </div>
        <p className="price-foot">Prices exclude VAT. You can try it without a credit card.</p>
      </div>
    </section>
  );
};
