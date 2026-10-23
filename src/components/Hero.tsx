import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      setStepIndex(2);
      return;
    }

    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % 4);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const currentStep = stepIndex < 3 ? stepIndex : 2;

  return (
    <section className="hero">
      <div className="hero-frame">
        <div className="hero-bg" aria-hidden="true">
          <div className="dots"></div>
          <span className="gl gl1"></span>
          <span className="gl gl2"></span>
          <span className="gl gl3"></span>
        </div>

        <div className="hero-copy">
          <span className="pill-eyebrow" data-fade>
            <span className="tag"><i></i>Tax API 3.0</span>Real-time reporting, fully automatic
          </span>
          <h1>
            Invoice in 30 seconds. <br className="br-lg" />
            <span className="dim">We handle <span className="nw">the tax authority.</span></span>
          </h1>
          <p className="hero-sub" data-fade>
            Billcircle is online invoicing for freelancers, LLCs and partnerships. You issue the invoice, we submit it to the tax authority, and we match the payment to your bank account.
          </p>
          <div className="hero-ctas" data-fade>
            <a href="#arak" className="btn btn-accent">
              Try it free <svg><use href="#i-arrow" /></svg>
            </a>
            <a href="#hogyan" className="btn btn-light">
              <span className="play">
                <svg viewBox="0 0 10 10"><path d="M1 0.5v9l8-4.5z" fill="currentColor" /></svg>
              </span>
              2-minute walkthrough
            </a>
          </div>
          <div className="proof" data-fade>
            <div className="avatars" aria-hidden="true">
              <span className="av" style={{ '--c': '#0A7D3E' } as React.CSSProperties}>AK</span>
              <span className="av" style={{ '--c': '#3F3F46' } as React.CSSProperties}>BN</span>
              <span className="av" style={{ '--c': '#7C5A3A' } as React.CSSProperties}>ES</span>
              <span className="av" style={{ '--c': '#27272A' } as React.CSSProperties}>LH</span>
              <span className="av" style={{ '--c': '#52525B' } as React.CSSProperties}>+</span>
            </div>
            <div>
              <div className="stars" aria-label="4.9 out of 5">
                <svg><use href="#i-star" /></svg>
                <svg><use href="#i-star" /></svg>
                <svg><use href="#i-star" /></svg>
                <svg><use href="#i-star" /></svg>
                <svg><use href="#i-star" /></svg>
              </div>
              <strong>4.9/5</strong> · 12,000+ small business owners invoice with us
            </div>
          </div>
        </div>

        <div className="mock-wrap">
          <div className="float float-1" aria-hidden="true">
            <span className="ic"><svg><use href="#i-bank" /></svg></span>
            <div>
              <small>Payment received · Kovacs &amp; Co. LLP</small>
              <b>+$508</b>
              <small>BC-2026-0148 matched automatically</small>
            </div>
          </div>
          <div className="float float-2" aria-hidden="true">
            <span className="ic"><svg><use href="#i-shield" /></svg></span>
            <div>
              <b>Tax authority: accepted</b>
              <small className="mono">2.1 s · 14:02:13</small>
            </div>
          </div>

          <div className="mock" role="img" aria-label="The Billcircle invoice editor: customer, items, total and tax authority submission status">
            <div className="mock-bar">
              <i></i><i></i><i></i>
              <span className="mock-url"><svg><use href="#i-lock" /></svg>app.billcircle.com/invoices/new</span>
            </div>
            <div className="mock-body">
              <aside className="side">
                <div className="brand"><svg className="brand-mark"><use href="#logo" /></svg>Billcircle</div>
                <ul>
                  <li><svg><use href="#i-home" /></svg>Overview</li>
                  <li className="on"><svg><use href="#i-file" /></svg>Invoices<span className="cnt">148</span></li>
                  <li><svg><use href="#i-users" /></svg>Customers</li>
                  <li><svg><use href="#i-box" /></svg>Products</li>
                  <li><svg><use href="#i-bank" /></svg>Bank<span className="cnt">3</span></li>
                </ul>
                <div className="sep"></div>
                <ul>
                  <li><svg><use href="#i-repeat" /></svg>Recurring</li>
                  <li><svg><use href="#i-gear" /></svg>Settings</li>
                </ul>
              </aside>
              <div className="main">
                <div className="main-top">
                  <h4>New invoice<span>BC-2026-0148</span></h4>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="mini-btn ghost">Preview</span>
                    <span className="mini-btn go"><svg><use href="#i-send" /></svg>Issue and submit</span>
                  </div>
                </div>
                <div className="main-grid">
                  <div className="panel">
                    <div className="fields">
                      <div className="field wide">
                        <label>Customer</label>
                        <div className="in focus">Kovacs &amp; Co. LLP <small>12345678-2-13</small></div>
                      </div>
                      <div className="field">
                        <label>Delivery date</label>
                        <div className="in">10/01/2026</div>
                      </div>
                      <div className="field">
                        <label>Due date</label>
                        <div className="in">10/09/2026 <small>8 days</small></div>
                      </div>
                      <div className="field">
                        <label>Payment method</label>
                        <div className="in">Bank transfer</div>
                      </div>
                      <div className="field">
                        <label>Currency</label>
                        <div className="in">USD</div>
                      </div>
                    </div>
                    <div className="items">
                      <table>
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th className="n hide-sm">Qty</th>
                            <th className="n hide-sm">VAT</th>
                            <th className="n">Net</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Website maintenance (Oct)</td>
                            <td className="n hide-sm">1 mo</td>
                            <td className="n hide-sm">27%</td>
                            <td className="n">330</td>
                          </tr>
                          <tr>
                            <td>Hosting, annual fee</td>
                            <td className="n hide-sm">1 pc</td>
                            <td className="n hide-sm">27%</td>
                            <td className="n">70</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="add">+ Add item</div>
                    </div>
                  </div>
                  <div>
                    <div className="panel sum">
                      <div className="sum-row"><span>Net</span><b>$400</b></div>
                      <div className="sum-row"><span>VAT 27%</span><b>$108</b></div>
                      <div className="sum-total"><span>Gross</span><b>$508</b></div>
                    </div>
                    <div className="nav-status" aria-live="off">
                      <div className="lbl"><span>TAX AUTHORITY E-INVOICE</span><span className="mono">live</span></div>
                      <div className="steps-mini">
                        <span className="s done"></span>
                        <span className={`s ${currentStep >= 1 ? 'done' : ''}`} id="st2"></span>
                        <span className={`s ${currentStep >= 2 ? 'done' : ''}`} id="st3"></span>
                      </div>
                      <div className={`status-line ${currentStep === 2 ? 'ok' : ''}`} id="statusLine">
                        <span className="dot"></span>
                        <span id="statusTxt">
                          {currentStep === 0 && 'Issued'}
                          {currentStep === 1 && 'Submitting to the tax authority…'}
                          {currentStep === 2 && 'Accepted · INV-7Q2K'}
                        </span>
                        <small id="statusTime">
                          {currentStep === 0 && '14:02:11'}
                          {currentStep === 1 && '14:02:12'}
                          {currentStep === 2 && '14:02:13'}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mock-fade"></div>
        </div>

        <a href="#funkciok" className="notch">
          Keep scrolling <svg><use href="#i-down" /></svg>
        </a>
      </div>
    </section>
  );
};
