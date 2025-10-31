import React, { useState } from "react";
import ContactUsDetails from "../components/ContactUs/ContactUsDetails";
import "../styles/contact.css";

export default function Contact() {
    const [openFaqIndex, setOpenFaqIndex] = useState(0);
    const [topic, setTopic] = useState("general");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [orderId, setOrderId] = useState("");
    const [artistName, setArtistName] = useState("");
    const [genre, setGenre] = useState("");
    const [links, setLinks] = useState("");
    const [consent, setConsent] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const faqs = [
        { q: "How soon will I get a response after contacting you?", a: "We typically respond within 24 hours on business days. Artist applications may take up to 5–7 business days to review." },
        { q: "What should I include in an artist application?", a: "Share your artist/band name, genre, links to your music and social media, notable achievements, and a short bio about your sound and goals." },
        { q: "Do you offer support for ticket or payment issues?", a: "Yes. Choose \"Technical Support\" in the form and include your order ID and any error messages. Our support team will assist you promptly." },
        { q: "Can brands or venues partner with SoundArt?", a: "Absolutely. Select \"Partnership Opportunity\" in the form and share your goals, timeline, and relevant links. Our partnerships team will follow up." }
    ];

    const toggleFaq = (index) => setOpenFaqIndex((prev) => (prev === index ? -1 : index));

    const isEmailValid = (value) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);
    const isFormValid = () => {
        if (!fullName || !email || !message || !consent) return false;
        if (!isEmailValid(email)) return false;
        if (topic === "support" && !orderId) return false;
        if (topic === "artist" && !artistName) return false;
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid()) return;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        // Reset non-essential fields but keep topic selection
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setOrderId("");
        setArtistName("");
        setGenre("");
        setLinks("");
        setConsent(false);
    };
    return (
        <div className="container mt-4">
            {/* Hero Section - consistent gradient theme */}
            <section className="py-5 mb-4" style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                borderRadius: '0.5rem'
            }}>
                <div className="container text-white">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="display-5 fw-bold mb-3">
                                Contact <span className="text-warning">Us</span>
                            </h1>
                            <p className="lead mb-0 text-muted">We'd love to hear from you. Tell us how we can help.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards (previous style) */}
            <ContactUsDetails />

            {/* Main Content */}
            <div className="row g-4 mt-1 mt-lg-2">
                {/* Left: New Contact Form */}
                <div className="col-lg-7">
                    <div className="card border-0 shadow-lg">
                        <div className="card-body p-4 p-lg-5">
                            <h2 className="h3 fw-bold mb-4">Send us a <span className="text-warning">message</span></h2>
                            {submitted && (
                                <div className="alert alert-success" role="alert">
                                    <i className="bi bi-check-circle me-2"></i>
                                    Thanks! Your message has been sent.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="topic" className="form-label fw-semibold">I'm contacting you about</label>
                                        <select id="topic" className="form-select" value={topic} onChange={(e) => setTopic(e.target.value)}>
                                            <option value="general">General Inquiry</option>
                                            <option value="artist">Artist Application</option>
                                            <option value="partnership">Partnership Opportunity</option>
                                            <option value="support">Technical Support</option>
                                        </select>
                                    </div>

                                    {/* Conditional fields */}
                                    {topic === "artist" && (
                                        <>
                                            <div className="col-12">
                                                <label htmlFor="artistName" className="form-label">Artist/Band Name<span className="text-danger">*</span></label>
                                                <input id="artistName" type="text" className="form-control" value={artistName} onChange={(e) => setArtistName(e.target.value)} placeholder="Your artist or band name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="genre" className="form-label">Genre</label>
                                                <input id="genre" type="text" className="form-control" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="e.g., Rock, Pop, Electronic" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="links" className="form-label">Links</label>
                                                <input id="links" type="text" className="form-control" value={links} onChange={(e) => setLinks(e.target.value)} placeholder="Spotify, YouTube, Instagram" />
                                            </div>
                                        </>
                                    )}

                                    {topic === "support" && (
                                        <div className="col-12">
                                            <label htmlFor="orderId" className="form-label">Order ID<span className="text-danger">*</span></label>
                                            <input id="orderId" type="text" className="form-control" value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="#123456" required />
                                        </div>
                                    )}

                                    <div className="col-md-6">
                                        <label htmlFor="fullName" className="form-label">Full Name<span className="text-danger">*</span></label>
                                        <input id="fullName" type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">Email Address<span className="text-danger">*</span></label>
                                        <input id="email" type="email" className={`form-control${email && !isEmailValid(email) ? ' is-invalid' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                                        {email && !isEmailValid(email) && (
                                            <div className="invalid-feedback">Please enter a valid email address.</div>
                                        )}
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input id="subject" type="text" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="How can we help?" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="message" className="form-label">Message<span className="text-danger">*</span></label>
                                        <textarea id="message" className="form-control" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Share details so we can help faster" required></textarea>
                                    </div>

                                    <div className="col-12 form-check mb-2">
                                        <input className="form-check-input" type="checkbox" id="consent" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                                        <label className="form-check-label" htmlFor="consent">
                                            I agree to the processing of my information as described in the Privacy Policy.
                                        </label>
                                    </div>

                                    <div className="col-12">
                                        <button type="submit" className="btn btn-warning btn-lg w-100" disabled={!isFormValid()}>
                                            <i className="bi bi-send me-2"></i>Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Right: FAQ */}
                <div className="col-lg-5">
                    <div className="d-flex flex-column gap-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <h3 className="h5 fw-bold mb-3">Frequently Asked <span className="text-warning">Questions</span></h3>
                                <div className="accordion" id="contactFaq">
                                    {faqs.map((item, index) => {
                                        const isOpen = openFaqIndex === index;
                                        return (
                                            <div className="accordion-item" key={index}>
                                                <h2 className="accordion-header">
                                                    <button 
                                                        className={`accordion-button${isOpen ? '' : ' collapsed'}`}
                                                        type="button"
                                                        aria-expanded={isOpen}
                                                        onClick={() => toggleFaq(index)}
                                                    >
                                                        {item.q}
                                                    </button>
                                                </h2>
                                                <div className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}>
                                                    <div className="accordion-body text-muted">{item.a}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

