import React from 'react';

export const Features: React.FC = () => {
  return (
    <section className="sec" id="funkciok" style={{ paddingTop: 'clamp(72px, 9vw, 112px)' }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="kicker">Features</span>
          <h2 className="h2" data-split>
            Everything invoicing needs. <span className="dim">And nothing it doesn't.</span>
          </h2>
          <p className="lead">
            We built Billbox for small businesses: it does as much as you need, and you don't need an accounting degree to use it.
          </p>
        </div>

        <div className="bento" data-reveal>
          {/* Card 1: Automatic tax reporting */}
          <article className="cell c-nav">
            <div className="ui">
              <div className="flow">
                <div className="node ok">
                  <span className="nd"><svg><use href="#i-file" /></svg></span>
                  Issued
                  <small>14:02:11</small>
                </div>
                <div className="wire"></div>
                <div className="node ok">
                  <span className="nd"><svg><use href="#i-send" /></svg></span>
                  Submitted
                  <small>14:02:12</small>
                </div>
                <div className="wire w2"></div>
                <div className="node ok">
                  <span className="nd"><svg><use href="#i-shield" /></svg></span>
                  Accepted
                  <small>14:02:13</small>
                </div>
              </div>
              <div className="log">
                <div><span>14:02:13</span><span>BC-2026-0148</span><span className="hide-sm">CREATE · $508</span><span className="okk">DONE</span></div>
                <div><span>11:47:30</span><span>BC-2026-0147</span><span className="hide-sm">CREATE · $175</span><span className="okk">DONE</span></div>
                <div><span>09:15:02</span><span>BC-2026-0146</span><span className="hide-sm">VOID · −$35</span><span className="okk">DONE</span></div>
              </div>
            </div>
            <div className="txt">
              <h3>Automatic tax authority reporting</h3>
              <p>Every invoice reaches the tax authority's online invoice system within seconds. If it rejects an invoice, we tell you right away and show you what to fix.</p>
            </div>
          </article>

          {/* Card 2: Bank sync */}
          <article className="cell c-bank">
            <div className="ui">
              <div className="bank-head">
                Business account <small><i></i>Synced · 2 min ago</small>
              </div>
              <div className="tx">
                <span className="bi">KC</span>
                <div className="who">
                  <b>Kovacs &amp; Co. LLP</b>
                  <span className="match"><svg><use href="#i-check" /></svg>BC-0148 matched</span>
                </div>
                <span className="amt">+508</span>
              </div>
              <div className="tx">
                <span className="bi">AB</span>
                <div className="who">
                  <b>Almond Beauty LLC</b>
                  <span className="match"><svg><use href="#i-check" /></svg>BC-0145 matched</span>
                </div>
                <span className="amt">+133</span>
              </div>
              <div className="tx">
                <span className="bi">TW</span>
                <div className="who">
                  <b>Tisza Wine House LLC</b>
                  <span className="match wait"><i></i>Matching…</span>
                </div>
                <span className="amt">+595</span>
              </div>
              <div className="tx">
                <span className="bi">SB</span>
                <div className="who">
                  <b>Summit Builders Inc.</b>
                  <span className="match"><svg><use href="#i-check" /></svg>BC-0139 matched</span>
                </div>
                <span className="amt">+2,800</span>
              </div>
              <div className="tx">
                <span className="bi">BS</span>
                <div className="who">
                  <b>Bridgeend Studio</b>
                  <span className="match"><svg><use href="#i-check" /></svg>BC-0137 matched</span>
                </div>
                <span className="amt">+210</span>
              </div>
              <div className="bank-sum">
                <span>Received this week</span>
                <b>$4,246</b>
              </div>
            </div>
            <div className="txt">
              <h3>Bank sync, no manual bookkeeping</h3>
              <p>Connect your bank account and we automatically assign incoming transfers to invoices based on the reference and the amount. You see who paid and who didn't.</p>
            </div>
          </article>

          {/* Card 3: Recurring */}
          <article className="cell c-rec">
            <div className="ui">
              <div className="months">
                <span className="on">JUL</span>
                <span className="on">AUG</span>
                <span className="on">SEP</span>
                <span className="now">OCT</span>
                <span>NOV</span>
                <span>DEC</span>
              </div>
              <div className="toggle-row">
                On the 1st of every month
                <span className="tg anim" aria-hidden="true"></span>
              </div>
              <div className="next">
                Next: <b>Nov 1</b> · 4 invoices · $265
              </div>
            </div>
            <div className="txt">
              <h3>Recurring invoices</h3>
              <p>Your monthly-fee clients get their invoice automatically, by email, together with the payment request.</p>
            </div>
          </article>

          {/* Card 4: Receivables monitor */}
          <article className="cell c-due dark">
            <div className="ui">
              <div className="due-top">
                <div>
                  <small>Outstanding · 30 days</small>
                  <b>$1,140</b>
                </div>
                <span className="chip">−38%</span>
              </div>
              <svg className="spark" viewBox="0 0 240 64" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#19B864" stopOpacity=".35" />
                    <stop offset="1" stopColor="#19B864" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="ar" d="M0 10 L30 16 L60 12 L90 26 L120 22 L150 36 L180 34 L210 48 L240 52 L240 64 L0 64Z" />
                <path className="ln" id="sparkLine" d="M0 10 L30 16 L60 12 L90 26 L120 22 L150 36 L180 34 L210 48 L240 52" />
              </svg>
              <div className="remind">
                <svg><use href="#i-bell" /></svg>3 reminders sent this week
              </div>
            </div>
            <div className="txt">
              <h3>Receivables monitor</h3>
              <p>Polite, automatic payment reminders so you don't have to write awkward emails.</p>
            </div>
          </article>

          {/* Card 5: Accountant access */}
          <article className="cell c-acc">
            <div className="ui">
              <div className="acc-row">
                <span className="av" style={{ '--c': '#7C5A3A' } as React.CSSProperties}>ET</span>
                <div>
                  <b>Esther Toth</b>
                  <small>Accountant · invite accepted</small>
                </div>
                <span className="perm">read-only</span>
              </div>
              <div className="files">
                <span className="file"><svg><use href="#i-file" /></svg>vat-analytics_2026Q3.xlsx</span>
                <span className="file"><svg><use href="#i-file" /></svg>invoices_sept.zip</span>
                <span className="file"><svg><use href="#i-file" /></svg>tax-export.xml</span>
              </div>
            </div>
            <div className="txt">
              <h3>Accountant access</h3>
              <p>Invite your accountant in one click. They download what they need, and you don't have to send PDFs at the end of the month.</p>
            </div>
          </article>

          {/* Card 6: Web shop & API */}
          <article className="cell c-shop">
            <div className="ui">
              <div className="pflow">
                <span className="pf"><svg><use href="#i-cart" /></svg>Web shop order</span>
                <span className="arrow"><svg><use href="#i-arrow" /></svg></span>
                <span className="pf hl"><svg className="brand-mark"><use href="#logo" /></svg>Billbox</span>
                <span className="arrow"><svg><use href="#i-arrow" /></svg></span>
                <span className="pf"><svg><use href="#i-mail" /></svg>Invoice to the customer</span>
              </div>
              <div className="code">
                <span className="k">POST</span> /v1/invoices  <span className="s">"customer"</span>: <span className="s">"Ben Nagy"</span><span className="caret"></span>
              </div>
            </div>
            <div className="txt">
              <h3>Web shop plugins and API</h3>
              <p>Ready-made plugins for popular web shop platforms and an open REST API for everything else. After a paid order, the invoice is created by itself.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
