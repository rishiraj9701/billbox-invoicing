import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="sec" id="hogyan">
      <div className="wrap">
        <div className="sec-head center">
          <span className="kicker">How it works</span>
          <h2 className="h2" data-split>
            Three steps, <span className="dim">and you're invoicing.</span>
          </h2>
          <p className="lead">
            Nothing to install and no course to take. If you have a tax ID, you can issue your first invoice in five minutes.
          </p>
        </div>

        <div className="stack">
          {/* Step 1 */}
          <article className="stack-card">
            <div>
              <span className="step-n">01 / SIGN-UP</span>
              <h3>Enter your tax ID and we'll fill in the rest.</h3>
              <p>We fetch your company details from the tax authority. We guide you step by step through setting up the technical user.</p>
              <ul className="checks">
                <li><svg><use href="#i-check-c" /></svg>Sole proprietor, LLC, partnership, VAT-exempt</li>
                <li><svg><use href="#i-check-c" /></svg>Move over from your previous invoicing tool in 1 click</li>
              </ul>
            </div>
            <div className="step-vis">
              <div className="sv-card">
                <h5>Company details</h5>
                <div className="field">
                  <label>Tax ID</label>
                  <div className="in focus">28471936-2-41</div>
                </div>
                <div className="field">
                  <label>Company</label>
                  <div className="in">Bridgeend Studio LLC <small>from tax authority</small></div>
                </div>
                <div className="field">
                  <label>Address</label>
                  <div className="in">48 Lajos St., 1036 Budapest <small>from tax authority</small></div>
                </div>
                <div className="sv-ok">
                  <svg><use href="#i-check-c" /></svg>Tax authority technical user connected
                </div>
              </div>
            </div>
          </article>

          {/* Step 2 */}
          <article className="stack-card">
            <div>
              <span className="step-n">02 / ISSUE</span>
              <h3>Issue the invoice, even from your phone.</h3>
              <p>We remember customers and products, calculate the VAT and number the invoice. One tap and the invoice is on its way.</p>
              <ul className="checks">
                <li><svg><use href="#i-check-c" /></svg>Invoices in multiple languages, USD, EUR, GBP</li>
                <li><svg><use href="#i-check-c" /></svg>Pro forma, advance and correction invoices</li>
              </ul>
            </div>
            <div className="step-vis">
              <div className="paper" aria-hidden="true">
                <div className="ph">
                  <b>INVOICE</b>
                  <small>BC-2026-0148<br />10/01/2026</small>
                </div>
                <div className="pp">
                  <div><b>Bridgeend Studio LLC</b>1036 Budapest<br />28471936-2-41</div>
                  <div><b>Kovacs &amp; Co. LLP</b>6720 Szeged<br />12345678-2-13</div>
                </div>
                <div className="pl"><span>Website maintenance</span><span>330</span></div>
                <div className="pl"><span>Hosting, annual fee</span><span>70</span></div>
                <div className="pl"><span>VAT 27%</span><span>108</span></div>
                <div className="pt"><span>Total due</span><span>$508</span></div>
              </div>
              <span className="stamp">Tax ✓</span>
            </div>
          </article>

          {/* Step 3 */}
          <article className="stack-card dark">
            <div>
              <span className="step-n">03 / MONITOR</span>
              <h3>We watch for the money to arrive.</h3>
              <p>Billbox matches transfers, sends reminders to late payers and tells you when everything is fine. Meanwhile you can work on the next job.</p>
              <ul className="checks">
                <li><svg><use href="#i-check-c" /></svg>Push notification for every payment</li>
                <li><svg><use href="#i-check-c" /></svg>Monthly summary for your accountant, automatically</li>
              </ul>
            </div>
            <div className="step-vis">
              <div className="notif-stack" aria-hidden="true">
                <div className="notif">
                  <span className="ic"><svg><use href="#i-bank" /></svg></span>
                  <div><b>+$508 received</b>Kovacs &amp; Co. LLP · BC-0148</div>
                  <time>now</time>
                </div>
                <div className="notif">
                  <span className="ic"><svg><use href="#i-bell" /></svg></span>
                  <div><b>Reminder sent</b>Tisza Wine House LLC · overdue by 3 days</div>
                  <time>9:00</time>
                </div>
                <div className="notif">
                  <span className="ic"><svg><use href="#i-mail" /></svg></span>
                  <div><b>September package sent</b>to accountant Esther Toth</div>
                  <time>Oct 1</time>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
