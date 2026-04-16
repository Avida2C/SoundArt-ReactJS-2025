import React from "react";
import { HeroSection } from "../components/layout";
import { heroData } from "../data/heroData";
import ContactUsDetails from "../components/ContactUs/ContactUsDetails";
import ContactFAQ from "../components/ContactUs/ContactFAQ";
import ContactForm from "../components/ContactUs/ContactForm";
import { usePageTitle } from "../hooks";
import "../styles/contact.css";

export default function Contact() {
    const faqs = [
        { q: "How soon will I get a response after contacting you?", a: "We typically respond within 24 hours on business days. Artist applications may take up to 5–7 business days to review." },
        { q: "What Should I include in an artist application?", a: "Share your artist/band name, genre, links to your music and social media, notable achievements, and a short bio about your sound and goals." },
        { q: "Do you offer support for ticket or payment issues?", a: "Yes. Choose \"Technical Support\" in the form and include your order ID and any error messages. Our support team will assist you promptly." },
        { q: "Can brands or venues partner with SoundArt?", a: "Absolutely. Select \"Partnership Opportunity\" in the form and share your goals, timeline, and relevant links. Our partnerships team will follow up." }
    ];

    usePageTitle("Contact");

    return (
        <div>
            {/* Hero Section */}
            <HeroSection
                title={heroData.contact.title}
                titleHighlight={heroData.contact.titleHighlight}
                description={heroData.contact.description}
            />
            
            {/* Main Content Area - Light Gray Background */}
            <div className="contact-main-content">
                <div className="container py-5">
                    {/* Get in Touch Section */}
                    <div className="mb-5">
                        <h1 className="contact-section-title mb-3">Get in Touch</h1>
                        <p className="contact-intro-text mb-4 col-12 col-md-6">
                            Whether you're an artist looking to get featured, a music lover with questions, or a potential partner, we're here to help.
                        </p>
                        
                        {/* Contact Info Cards */}
                        <ContactUsDetails />
                    </div>

                    {/* Form and FAQ Section */}
                    <div className="row g-4">
                        {/* Left: Contact Form */}
                        <div className="col-lg-7">
                            <ContactForm />
                        </div>

                        {/* Right: FAQ */}
                        <div className="col-lg-5">
                            <ContactFAQ faqs={faqs} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

