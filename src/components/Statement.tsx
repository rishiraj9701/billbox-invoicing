import React from 'react';

export const Statement: React.FC = () => {
  return (
    <section className="dark-band noise" aria-labelledby="stmt">
      <div className="glow" aria-hidden="true">
        <span className="g g1"></span>
        <span className="g e1"></span>
        <span className="g core"></span>
      </div>
      <div className="guides" aria-hidden="true"></div>
      <div className="sec wrap" style={{ position: 'relative', zIndex: 1 }}>
        <span className="kicker" id="stmt">Why we built this</span>
        <p className="fill-text">
          You didn't become an entrepreneur to do invoicing. That's why Billbox asks for ten minutes a month at most and gives the rest of the time back to your work.
        </p>

        <div className="stats" data-reveal>
          <div className="stat">
            <b><span data-count="12000" data-suffix="">12,000</span><em>+</em></b>
            <p>active businesses invoice with us every day</p>
          </div>
          <div className="stat">
            <b><span data-count="4.2" data-decimals="1">4.2</span><em> M</em></b>
            <p>invoices submitted to the tax authority last year</p>
          </div>
          <div className="stat">
            <b><span data-count="99.98" data-decimals="2">99.98</span><em>%</em></b>
            <p>of tax authority submissions accepted on the first try</p>
          </div>
          <div className="stat">
            <b><span data-count="6">6</span><em> days</em></b>
            <p>sooner customers pay, on average</p>
          </div>
        </div>
      </div>
      <div className="giant" aria-hidden="true" data-speed="1">4.2M</div>
    </section>
  );
};
