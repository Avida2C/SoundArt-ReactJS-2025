import { useState } from "react";

export default function ContactUsForm() {
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        setMessageSent(true); // Show success message
        setTimeout(() => setMessageSent(false), 3000); // Hide message after 3s
    };

    return (
        <div className="container contact-us-form px-5">
  <div className="row">
    <div className="col">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formFullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="formFullName" placeholder="Full Name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="formEmailAddress" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="formEmailAddress" placeholder="Email Address" required />
        </div>
        <div className="mb-3">
          <label htmlFor="formMessage" className="form-label">Message</label>
          <textarea className="form-control" id="formMessage" rows="3" placeholder="Message" required></textarea>
        </div>
        <button type="submit" className="btn btn-warning w-100 fw-semibold">Submit</button>
        {/* Success Message */}
        {messageSent && <p className="text-danger mt-2 text-center">Your message has been sent! We will contact you shortly.</p>}
      </form>
    </div>
  </div>
</div>

    );
}
