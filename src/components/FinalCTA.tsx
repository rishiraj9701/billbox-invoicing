import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="cta noise">
      <div className="glow" aria-hidden="true">
        <span className="g g1"></span>
        <span className="g e1"></span>
        <span className="g core"></span>
      </div>
      <div className="dots" aria-hidden="true"></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <span className="kicker">Start today</span>
        <h2 data-split>
          Your first invoice <span className="dim">can be ready in five minutes.</span>
        </h2>
        <p>
          Create your free account, connect it to the tax authority and issue your first invoice before your coffee gets cold.
        </p>
        <div className="hero-ctas">
          <a href="#arak" className="btn btn-accent">
            Create a free account <svg><use href="#i-arrow" /></svg>
          </a>
          <a href="mailto:hello@billbox.com" className="btn btn-light">
            I'd like to talk to someone
          </a>
        </div>
        <p className="cta-small">No credit card needed · every feature for 30 days · human support</p>
      </div>
    </section>
  );
};
