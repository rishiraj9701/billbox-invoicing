import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
        <a href="#top" className="brand" aria-label="Billbox - home">
          <svg className="brand-mark"><use href="#logo" /></svg>Billbox
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#funkciok">Features</a>
          <a href="#hogyan">How it works</a>
          <a href="#velemenyek">Testimonials</a>
          <a href="#arak">Pricing</a>
          <a href="#gyik">FAQ</a>
        </nav>
        <div className="nav-cta">
          <a href="#" className="login">Log in</a>
          <a href="#arak" className="btn btn-dark">
            Free account <svg><use href="#i-arrow" /></svg>
          </a>
          <button
            className="menu-btn"
            id="menuBtn"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg viewBox="0 0 24 24">
              <path d="M4 8h16M4 16h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#funkciok" onClick={closeMenu}>Features</a>
        <a href="#hogyan" onClick={closeMenu}>How it works</a>
        <a href="#velemenyek" onClick={closeMenu}>Testimonials</a>
        <a href="#arak" onClick={closeMenu}>Pricing</a>
        <a href="#gyik" onClick={closeMenu}>FAQ</a>
        <a href="#" onClick={closeMenu}>Log in</a>
        <a href="#arak" className="btn btn-accent" onClick={closeMenu}>
          Free account <svg><use href="#i-arrow" /></svg>
        </a>
      </div>
    </>
  );
};
