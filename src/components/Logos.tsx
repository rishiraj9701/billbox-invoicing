import React from 'react';

export const Logos: React.FC = () => {
  return (
    <section className="logos" aria-label="Our customers">
      <p>From bakeries to software companies: they already invoice with Billbox</p>
      <div className="marquee">
        <div className="marquee-track">
          <span className="logo">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
            Kovacs Bakery
          </span>
          <span className="logo serif">Tisza Wine House</span>
          <span className="logo mono">Bridgeend//Studio</span>
          <span className="logo">
            <svg viewBox="0 0 24 24">
              <path d="M3 20 12 4l9 16z" fill="currentColor" />
            </svg>
            Summit Builders
          </span>
          <span className="logo">open.</span>
          <span className="logo serif">Almond Beauty</span>
          <span className="logo">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" />
              <rect x="13" y="13" width="8" height="8" rx="4" fill="currentColor" />
            </svg>
            Cobblestone Dev
          </span>
          <span className="logo mono">Light&amp;Shadow</span>
          <span className="logo">Balaton Car Rental</span>

          {/* duplicate for infinite loop */}
          <span className="logo" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
            Kovacs Bakery
          </span>
          <span className="logo serif" aria-hidden="true">Tisza Wine House</span>
          <span className="logo mono" aria-hidden="true">Bridgeend//Studio</span>
          <span className="logo" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M3 20 12 4l9 16z" fill="currentColor" />
            </svg>
            Summit Builders
          </span>
          <span className="logo" aria-hidden="true">open.</span>
          <span className="logo serif" aria-hidden="true">Almond Beauty</span>
          <span className="logo" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" />
              <rect x="13" y="13" width="8" height="8" rx="4" fill="currentColor" />
            </svg>
            Cobblestone Dev
          </span>
          <span className="logo mono" aria-hidden="true">Light&amp;Shadow</span>
          <span className="logo" aria-hidden="true">Balaton Car Rental</span>
        </div>
      </div>
    </section>
  );
};
