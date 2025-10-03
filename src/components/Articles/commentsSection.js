import React, { useState } from "react";

const CommentsSection = () => {
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    comment: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.email && newComment.comment) {
      // In a real app, this would submit to a backend
      console.log("Comment submitted:", newComment);
      setNewComment({ name: "", email: "", comment: "" });
      alert("Comment posted successfully!");
    }
  };

  return (
    <div className="mt-5">
      <h3 className="fw-bold mb-2">Comments</h3>
      <p className="text-muted mb-4">Leave a reply</p>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="comment"
            placeholder="Comment"
            rows="4"
            value={newComment.comment}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            name="name"
            placeholder="Full Name" 
            value={newComment.name}
            onChange={handleInputChange}
            required 
          />
        </div>
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control" 
            name="email"
            placeholder="Email" 
            value={newComment.email}
            onChange={handleInputChange}
            required 
          />
        </div>
        <button type="submit" className="btn btn-warning w-100 fw-bold">
          POST COMMENT
        </button>
      </form>
    </div>
  );
};

export default CommentsSection;
