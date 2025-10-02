import React from "react";
import { useParams } from "react-router-dom";
import MoreArticlesSidebar from "../../components/Articles/moreArticlesSidebar"; // ✅ Correct import
import CommentsSection from "../../components/Articles/commentsSection"; // ✅ Correct import
import ArticleContent from "../../components/Articles/articleComponent"; // ✅ Ensure this file exists
import moreArticles from "../../data/Articles/moreArticlesData";
import articlesData from "../../data/Articles/articlesData";

const ArticlePage = () => {
  const { id } = useParams(); // Get article ID from URL
  const article = articlesData.find((a) => a.id === parseInt(id));

  if (!article) {
    return <h2 className="text-center mt-5">Article Not Found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        {/* Reusable Article Content Component */}
        <ArticleContent {...article} />

        {/* Sidebar - More Articles */}
        <MoreArticlesSidebar articles={moreArticles} />
      </div>

      {/* Comments Section */}
      <CommentsSection />
    </div>
  );
};

export default ArticlePage;
