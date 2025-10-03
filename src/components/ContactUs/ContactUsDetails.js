export default function ContactUsDetails() {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h1 className="display-4 fw-bold mb-3">Get in Touch</h1>
                    <p className="lead text-muted">
                        We'd love to hear from you. Whether you're an artist looking to get featured, 
                        a music lover with questions, or a potential partner, we're here to help.
                    </p>
                </div>
            </div>

            <div className="row g-4 mb-5">
                {/* Contact Information Cards */}
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                            <div className="mb-3">
                                <i className="bi bi-envelope-fill text-warning contact-icon"></i>
                            </div>
                            <h5 className="card-title fw-bold">Email Us</h5>
                            <p className="card-text text-muted mb-3">
                                Send us an email and we'll respond within 24 hours
                            </p>
                            <a href="mailto:info@soundart.com" className="btn btn-outline-warning">
                                info@soundart.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                            <div className="mb-3">
                                <i className="bi bi-telephone-fill text-warning contact-icon"></i>
                            </div>
                            <h5 className="card-title fw-bold">Call Us</h5>
                            <p className="card-text text-muted mb-3">
                                Monday to Friday, 9:00 AM - 6:00 PM
                            </p>
                            <a href="tel:+35612341234" className="btn btn-outline-warning">
                                +356 1234 1234
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                            <div className="mb-3">
                                <i className="bi bi-geo-alt-fill text-warning contact-icon"></i>
                            </div>
                            <h5 className="card-title fw-bold">Visit Us</h5>
                            <p className="card-text text-muted mb-3">
                                Our office is located in the heart of the city
                            </p>
                            <address className="mb-0">
                                <strong>SoundArt Ltd.</strong><br />
                                112, Roy Buildings<br />
                                JC Roads<br />
                                RY
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links Section */}
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 quick-links-card">
                        <div className="card-body p-4">
                            <h4 className="card-title fw-bold mb-3 text-center">Quick Links</h4>
                            <div className="row g-3">
                                <div className="col-md-3 col-6">
                                    <div className="text-center">
                                        <i className="bi bi-music-note-beamed text-warning mb-2 d-block quick-link-icon"></i>
                                        <h6>Artist Applications</h6>
                                        <small className="text-muted">Get featured on our platform</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="text-center">
                                        <i className="bi bi-handshake text-warning mb-2 d-block quick-link-icon"></i>
                                        <h6>Partnerships</h6>
                                        <small className="text-muted">Collaborate with us</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="text-center">
                                        <i className="bi bi-question-circle text-warning mb-2 d-block quick-link-icon"></i>
                                        <h6>Support</h6>
                                        <small className="text-muted">Get help and assistance</small>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="text-center">
                                        <i className="bi bi-newspaper text-warning mb-2 d-block quick-link-icon"></i>
                                        <h6>Media Inquiries</h6>
                                        <small className="text-muted">Press and media contacts</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}