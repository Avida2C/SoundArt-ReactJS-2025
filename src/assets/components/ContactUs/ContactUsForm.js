import { useState } from "react";

export default function ContactUsForm() {
    const [messageSent, setMessageSent] = useState(false);
    const [formType, setFormType] = useState("general");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        setMessageSent(true); // Show success message
        setTimeout(() => setMessageSent(false), 3000); // Hide message after 3s
    };

    const handleFormTypeChange = (e) => {
        setFormType(e.target.value);
    };

    return (
        <div className="container contact-us-form px-5">
            <div className="row">
                <div className="col">
                    <h1>Contact Us</h1>
                    <p className="lead text-muted mb-4">
                        Get in touch with us for general inquiries or apply to get featured as an artist on our platform.
                    </p>
                    
                    <form onSubmit={handleSubmit}>
                        {/* Form Type Selection */}
                        <div className="mb-4">
                            <label htmlFor="formType" className="form-label fw-semibold">I'm contacting you about:</label>
                            <select 
                                className="form-select" 
                                id="formType" 
                                value={formType} 
                                onChange={handleFormTypeChange}
                                required
                            >
                                <option value="general">General Inquiry</option>
                                <option value="artist">Artist Application</option>
                                <option value="partnership">Partnership Opportunity</option>
                                <option value="support">Technical Support</option>
                            </select>
                        </div>

                        {/* Basic Information */}
                        <div className="mb-3">
                            <label htmlFor="formFullName" className="form-label">
                                {formType === "artist" ? "Artist/Band Name" : "Full Name"}
                            </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="formFullName" 
                                placeholder={formType === "artist" ? "Your artist or band name" : "Full Name"} 
                                required 
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="formEmailAddress" className="form-label">Email Address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="formEmailAddress" 
                                placeholder="Email Address" 
                                required 
                            />
                        </div>

                        {/* Artist-specific fields */}
                        {formType === "artist" && (
                            <>
                                <div className="mb-3">
                                    <label htmlFor="formGenre" className="form-label">Music Genre</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="formGenre" 
                                        placeholder="e.g., Rock, Pop, Electronic, Jazz" 
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="formSocialMedia" className="form-label">Social Media Links</label>
                                    <textarea 
                                        className="form-control" 
                                        id="formSocialMedia" 
                                        rows="2" 
                                        placeholder="Spotify, YouTube, Instagram, etc. (optional)"
                                    ></textarea>
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="formExperience" className="form-label">Musical Experience</label>
                                    <select className="form-select" id="formExperience">
                                        <option value="">Select your experience level</option>
                                        <option value="beginner">Just starting out</option>
                                        <option value="intermediate">Some experience</option>
                                        <option value="professional">Professional musician</option>
                                        <option value="established">Established artist</option>
                                    </select>
                                </div>
                            </>
                        )}

                        {/* Message */}
                        <div className="mb-3">
                            <label htmlFor="formMessage" className="form-label">
                                {formType === "artist" ? "Tell us about your music and why you'd like to be featured" : "Message"}
                            </label>
                            <textarea 
                                className="form-control" 
                                id="formMessage" 
                                rows="4" 
                                placeholder={
                                    formType === "artist" 
                                        ? "Share your story, musical style, achievements, and what makes you unique..." 
                                        : "How can we help you?"
                                } 
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-warning w-100 fw-semibold py-3">
                            {formType === "artist" ? "Submit Artist Application" : "Send Message"}
                        </button>
                        
                        {/* Success Message */}
                        {messageSent && (
                            <div className="alert alert-success mt-3 text-center">
                                <i className="bi bi-check-circle me-2"></i>
                                {formType === "artist" 
                                    ? "Your artist application has been submitted! We'll review it and get back to you soon." 
                                    : "Your message has been sent! We will contact you shortly."
                                }
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
