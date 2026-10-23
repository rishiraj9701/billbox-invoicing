import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <a href="#top" className="brand">
              <svg className="brand-mark"><use href="#logo" /></svg>Billcircle
            </a>
            <p>Online invoicing for small businesses. Built in Budapest since 2019.</p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#funkciok">Features</a></li>
              <li><a href="#arak">Pricing</a></li>
              <li><a href="#">Mobile app</a></li>
              <li><a href="#">API documentation</a></li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li><a href="#gyik">FAQ</a></li>
              <li><a href="#">Tax authority setup guide</a></li>
              <li><a href="#">Migration</a></li>
              <li><a href="mailto:hello@billcircle.com">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Imprint</a></li>
              <li><a href="#">Cookie settings</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bar">
          <span>© 2026 Billcircle. All rights reserved.</span>
          <span className="nav-ok"><i></i>Tax authority connection: all systems operational</span>
        </div>
      </div>
      <div className="wordmark" aria-hidden="true">Billcircle</div>
    </footer>
  );
};
