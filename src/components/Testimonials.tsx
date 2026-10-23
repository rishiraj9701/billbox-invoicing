import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="sec" id="velemenyek" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head center">
          <span className="kicker">Testimonials</span>
          <h2 className="h2" data-split>
            Written by business owners, <span className="dim">not the marketing department.</span>
          </h2>
        </div>
        <div className="tm-grid">
          {/* Column 1 (Scrolls Up) */}
          <div className="tm-col">
            <figure className="tm">
              <blockquote>“It used to take the last Sunday of every month. <strong>Now it's done while the coffee brews.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#0A7D3E' } as React.CSSProperties}>AK</span>
                <div><b>Anna Kovacs</b><small>Kovacs Bakery, Kecskemet</small></div>
              </figcaption>
            </figure>
            <figure className="tm">
              <blockquote>“I switched because of the bank sync. <strong>Finally I can see who paid, and I don't have to hunt through Excel.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#3F3F46' } as React.CSSProperties}>BN</span>
                <div><b>Ben Nagy</b><small>Web developer, freelancer</small></div>
              </figcaption>
            </figure>
            <figure className="tm dark">
              <blockquote>“I have twenty-four clients in Billcircle. <strong>I've never had such a clean export from any invoicing tool.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#7C5A3A' } as React.CSSProperties}>ET</span>
                <div><b>Esther Toth</b><small>Certified accountant</small></div>
              </figcaption>
            </figure>
            <figure className="tm">
              <blockquote>“Thanks to recurring invoices, <strong>I don't even have to think about my monthly-fee clients any more.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#27272A' } as React.CSSProperties}>LH</span>
                <div><b>Lilly Horvath</b><small>Bridgeend Studio, Budapest</small></div>
              </figcaption>
            </figure>

            {/* Loop duplicate */}
            <figure className="tm" aria-hidden="true">
              <blockquote>“It used to take the last Sunday of every month. <strong>Now it's done while the coffee brews.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#0A7D3E' } as React.CSSProperties}>AK</span>
                <div><b>Anna Kovacs</b><small>Kovacs Bakery, Kecskemet</small></div>
              </figcaption>
            </figure>
            <figure className="tm" aria-hidden="true">
              <blockquote>“I switched because of the bank sync. <strong>Finally I can see who paid, and I don't have to hunt through Excel.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#3F3F46' } as React.CSSProperties}>BN</span>
                <div><b>Ben Nagy</b><small>Web developer, freelancer</small></div>
              </figcaption>
            </figure>
            <figure className="tm dark" aria-hidden="true">
              <blockquote>“I have twenty-four clients in Billcircle. <strong>I've never had such a clean export from any invoicing tool.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#7C5A3A' } as React.CSSProperties}>ET</span>
                <div><b>Esther Toth</b><small>Certified accountant</small></div>
              </figcaption>
            </figure>
            <figure className="tm" aria-hidden="true">
              <blockquote>“Thanks to recurring invoices, <strong>I don't even have to think about my monthly-fee clients any more.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#27272A' } as React.CSSProperties}>LH</span>
                <div><b>Lilly Horvath</b><small>Bridgeend Studio, Budapest</small></div>
              </figcaption>
            </figure>
          </div>

          {/* Column 2 (Scrolls Down / Reverse) */}
          <div className="tm-col rev">
            <figure className="tm">
              <blockquote>“The tax authority once rejected an invoice because I mistyped the tax ID. <strong>Billcircle told me within 10 seconds and showed me the mistake.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#52525B' } as React.CSSProperties}>GS</span>
                <div><b>Gregory Szabo</b><small>Summit Builders Inc.</small></div>
              </figcaption>
            </figure>
            <figure className="tm dark">
              <blockquote>“Our web shop gets 80-120 orders a day. <strong>We don't have to issue a single invoice by hand.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#0A7D3E' } as React.CSSProperties}>RM</span>
                <div><b>Rebecca Molnar</b><small>Almond Beauty, web shop</small></div>
              </figcaption>
            </figure>
            <figure className="tm">
              <blockquote>“I invoice from my phone on site. By the time I'm back at the car, <strong>the PDF is already with the customer.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#7C5A3A' } as React.CSSProperties}>DF</span>
                <div><b>Daniel Farkas</b><small>Electrician, sole proprietor</small></div>
              </figcaption>
            </figure>
            <figure className="tm">
              <blockquote>“Moving from the old invoicing tool really took one afternoon, <strong>customer list included.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#3F3F46' } as React.CSSProperties}>KV</span>
                <div><b>Kate Varga</b><small>Tisza Wine House LLC</small></div>
              </figcaption>
            </figure>

            {/* Loop duplicate */}
            <figure className="tm" aria-hidden="true">
              <blockquote>“The tax authority once rejected an invoice because I mistyped the tax ID. <strong>Billcircle told me within 10 seconds and showed me the mistake.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#52525B' } as React.CSSProperties}>GS</span>
                <div><b>Gregory Szabo</b><small>Summit Builders Inc.</small></div>
              </figcaption>
            </figure>
            <figure className="tm dark" aria-hidden="true">
              <blockquote>“Our web shop gets 80-120 orders a day. <strong>We don't have to issue a single invoice by hand.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#0A7D3E' } as React.CSSProperties}>RM</span>
                <div><b>Rebecca Molnar</b><small>Almond Beauty, web shop</small></div>
              </figcaption>
            </figure>
            <figure className="tm" aria-hidden="true">
              <blockquote>“I invoice from my phone on site. By the time I'm back at the car, <strong>the PDF is already with the customer.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#7C5A3A' } as React.CSSProperties}>DF</span>
                <div><b>Daniel Farkas</b><small>Electrician, sole proprietor</small></div>
              </figcaption>
            </figure>
            <figure className="tm" aria-hidden="true">
              <blockquote>“Moving from the old invoicing tool really took one afternoon, <strong>customer list included.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#3F3F46' } as React.CSSProperties}>KV</span>
                <div><b>Kate Varga</b><small>Tisza Wine House LLC</small></div>
              </figcaption>
            </figure>
          </div>

          {/* Column 3 */}
          <div className="tm-col c3">
            <figure className="tm">
              <blockquote>“I'm VAT-exempt, and <strong>finally I don't have to type the legal text onto every invoice by hand.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#27272A' } as React.CSSProperties}>EB</span>
                <div><b>Eve Balogh</b><small>Yoga instructor</small></div>
              </figcaption>
            </figure>
            <figure className="tm">
              <blockquote>“Thanks to the reminders, <strong>our outstanding balance was cut in half</strong> in three months.”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#0A7D3E' } as React.CSSProperties}>ZP</span>
                <div><b>Zoltan Papp</b><small>Balaton Car Rental</small></div>
              </figcaption>
            </figure>
            <figure className="tm dark">
              <blockquote>“Support where <strong>a real human answers,</strong> within 15 minutes.”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#52525B' } as React.CSSProperties}>ML</span>
                <div><b>Mark Lakatos</b><small>Cobblestone Dev</small></div>
              </figcaption>
            </figure>
            <figure className="tm">
              <blockquote>“Simple, fast, and <strong>I've never had to call the tax authority</strong> because of it.”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#7C5A3A' } as React.CSSProperties}>IO</span>
                <div><b>Ildiko Olah</b><small>Light&amp;Shadow photo studio</small></div>
              </figcaption>
            </figure>

            {/* Loop duplicate */}
            <figure className="tm" aria-hidden="true">
              <blockquote>“I'm VAT-exempt, and <strong>finally I don't have to type the legal text onto every invoice by hand.</strong>”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#27272A' } as React.CSSProperties}>EB</span>
                <div><b>Eve Balogh</b><small>Yoga instructor</small></div>
              </figcaption>
            </figure>
            <figure className="tm" aria-hidden="true">
              <blockquote>“Thanks to the reminders, <strong>our outstanding balance was cut in half</strong> in three months.”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#0A7D3E' } as React.CSSProperties}>ZP</span>
                <div><b>Zoltan Papp</b><small>Balaton Car Rental</small></div>
              </figcaption>
            </figure>
            <figure className="tm dark" aria-hidden="true">
              <blockquote>“Support where <strong>a real human answers,</strong> within 15 minutes.”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#52525B' } as React.CSSProperties}>ML</span>
                <div><b>Mark Lakatos</b><small>Cobblestone Dev</small></div>
              </figcaption>
            </figure>
            <figure className="tm" aria-hidden="true">
              <blockquote>“Simple, fast, and <strong>I've never had to call the tax authority</strong> because of it.”</blockquote>
              <figcaption>
                <span className="av" style={{ '--c': '#7C5A3A' } as React.CSSProperties}>IO</span>
                <div><b>Ildiko Olah</b><small>Light&amp;Shadow photo studio</small></div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
