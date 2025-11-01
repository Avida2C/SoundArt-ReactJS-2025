import React, { useState } from "react";

export default function ContactFAQ({ faqs = [] }) {
    const [openFaqIndex, setOpenFaqIndex] = useState(-1);

    const toggleFaq = (index) => {
        setOpenFaqIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <div className="contact-faq-card h-100">
            <h3 className="contact-faq-title mb-4">Frequently Asked Questions</h3>
            <div className="contact-faq-list">
                {faqs.map((item, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                        <div className="contact-faq-item" key={index}>
                            <button 
                                className={`contact-faq-question${isOpen ? ' active' : ''}`}
                                type="button"
                                onClick={() => toggleFaq(index)}
                            >
                                <span>{item.q}</span>
                                <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`}></i>
                            </button>
                            {isOpen && (
                                <div className="contact-faq-answer">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

