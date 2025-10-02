import React from "react";
import MoreArticlesSidebar from "./moreArticlesSidebar"; // ✅ Ensure this file exists
import moreArticles from "../../data/Articles/moreArticlesData"; // ✅ Ensure this file exists

const CommentsSection = () => {
  return (
    <div className="mt-5">
      <h3>Comments</h3>
      <form>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a reply"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Full Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <button className="btn btn-warning w-100 fw-bold">POST COMMENT</button>
      </form>

      {/* Sidebar - More Articles */}
      <MoreArticlesSidebar articles={moreArticles} />
    </div>
  );
};

export default CommentsSection;
