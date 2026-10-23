import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Does Billcircle meet the tax authority's requirements?",
    answer: "Yes. Billcircle communicates with the tax authority's online invoice system (API 3.0) and submits invoices automatically the moment they're issued. Our software is registered with the tax authority, and we track every regulatory change at no extra charge.",
  },
  {
    question: "What is a technical user and how do I set it up?",
    answer: "With a technical user, Billcircle can submit invoices to the tax authority on your behalf. It has to be created in the Online Invoice portal. After sign-up we walk you through it with screenshots, and it usually takes 3-4 minutes.",
  },
  {
    question: "I'm a VAT-exempt sole proprietor. Is it right for me too?",
    answer: "Yes. You can set your VAT exemption and the required text is added to every invoice automatically. If you cross the threshold, Billcircle warns you and helps you switch to invoicing with VAT.",
  },
  {
    question: "Can I move over from another invoicing program?",
    answer: "Yes. You can import your customers, products and previous invoices from CSV or from the tax authority. We continue invoice numbering where you left off.",
  },
  {
    question: "Where is my data stored, and for how long?",
    answer: "Data is stored encrypted in the European Union with daily backups. In line with accounting law, we archive invoices for at least 8 years, even if you cancel your subscription in the meantime.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, with no lock-in. On the monthly plan you can use the paid features until the end of the month, on the annual plan until the end of the year you started, after which your account automatically switches to the Starter plan.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="sec" id="gyik" style={{ paddingTop: 0 }}>
      <div className="wrap faq-wrap">
        <div className="sec-head">
          <span className="kicker">FAQ</span>
          <h2 className="h2" data-split>
            Got a question? <span className="dim">Here's the answer.</span>
          </h2>
          <p className="lead">
            If you can't find what you're looking for, email us at{' '}
            <a href="mailto:hello@billcircle.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              hello@billcircle.com
            </a>
            . On business days we reply within 15 minutes.
          </p>
        </div>
        <div className="faq">
          {faqData.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div key={index} className={`q ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(index)}
                >
                  {item.question}
                  <span className="pm" aria-hidden="true"></span>
                </button>
                <div className="a">
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
