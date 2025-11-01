import React, { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";

/**
 * CommentForm Component - Form for submitting comments
 * @param {Function} onSubmit - Optional callback when form is submitted
 */
export default function CommentForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !content) {
      return;
    }

    if (onSubmit) {
      onSubmit({ name, email, content });
    }

    // Reset form
    setName("");
    setEmail("");
    setContent("");
  };

  return (
    <div className="contact-form-card mb-4" style={{ boxShadow: '0 0.125rem 0.5rem rgba(0, 0, 0, 0.1)' }}>
      <h6 className="contact-form-title mb-4">Leave a Comment</h6>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-12">
            <textarea 
              className="form-control contact-textarea" 
              rows="6" 
              placeholder="Share your thoughts about this article..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="col-md-6">
            <input 
              type="text" 
              className="form-control contact-input" 
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <input 
              type="email" 
              className="form-control contact-input" 
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-warning btn-lg w-100">
              POST COMMENT
              <LuSendHorizontal className="ms-2 mb-1" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
