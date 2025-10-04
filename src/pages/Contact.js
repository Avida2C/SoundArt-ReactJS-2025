import React from "react";
// Components were moved; show a simple contact placeholder to resolve imports for now
import "../styles/contact.css";

export default function Contact() {
    return (
        <div className="container mt-4">
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h1 className="display-4 fw-bold mb-3">Get in Touch</h1>
                    <p className="lead text-muted">We'd love to hear from you.</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" placeholder="Your name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="you@example.com" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" rows="4" placeholder="How can we help?" />
                        </div>
                        <button type="submit" className="btn btn-warning w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


