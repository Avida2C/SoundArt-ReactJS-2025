import React from "react";
import { Link } from "react-router-dom";

const MoreArticlesSidebar = ({ articles }) => {
  return (
    <div className="col-lg-4">
      <div className="bg-light p-3 rounded">
        <h4 className="border-bottom pb-2">More Articles</h4>
        <div className="list-group">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="list-group-item list-group-item-action"
            >
              <small>{article.date}</small>
              <h6>{article.title}</h6>
            </Link>
          ))}
        </div>
        {/* More Articles Button */}
        <Link to="/more-articles" className="btn btn-warning w-100 mt-3">
          More Articles
        </Link>
      </div>
    </div>
  );
};

export default MoreArticlesSidebar;
