import React from "react";
import moreArticles from "../../data/Articles/moreArticlesData";
import { Link } from "react-router-dom";

const MoreArticles = () => {
  return (
    <div className="container my-5">
      <h1>More Articles</h1>
      <div className="row">
        {moreArticles.map((article) => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={article.image} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="text-muted">{article.date}</p>
                <Link to={`/article/${article.id}`} className="btn btn-warning">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreArticles;
