import React from "react";
import { formatNumber, formatDateShort } from "../../utils/helpers";
import Card from "../Card";

/**
 * ArticleCard - Component for displaying article cards on the News page
 * Wrapper around the universal Card component
 */
export default function ArticleCard({ article }) {
  return (
    <Card
      image={article.image1}
      title={article.title}
      description={article.content[0].substring(0, 120) + "..."}
      buttonText="Read Full Story"
      buttonLink={`/article/${article.id}`}
      topLeftBadge={[{ text: article.category, className: "bg-warning text-dark fw-bold" }]}
      topRightBadge={[{ text: article.readTime, icon: "bi-clock", className: "bg-dark bg-opacity-75 text-white fw-normal" }]}
      metadata={article.author ? [
        { text: article.author, icon: "bi-person" }
      ] : undefined}
      tags={article.tags}
      stats={[
        { value: formatDateShort(article.date), icon: "bi-calendar" },
        { value: formatNumber(article.views), icon: "bi-eye" },
        { value: formatNumber(article.shares || article.likes || 0), icon: "bi-share" }
      ]}
      cardType="news"
    />
  );
}

