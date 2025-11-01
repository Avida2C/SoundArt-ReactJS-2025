const commentsData = [
  {
    id: 1,
    articleId: 5, // "See rare photos of the Beatles before they were famous!"
    author: "Music Lover",
    email: "musiclover@example.com",
    content: "Amazing article! I never knew these details about The Beatles. Thanks for sharing this fascinating story.",
    date: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    articleId: 5,
    author: "Beatles Fan",
    email: "beatlesfan@example.com",
    content: "These rare photos are incredible! It's amazing to see them before they became famous. Great find!",
    date: "2024-01-15T07:15:00Z"
  },
  {
    id: 3,
    articleId: 1, // "The Beatles: The Story Behind The Legend"
    author: "Rock Historian",
    email: "rockhistorian@example.com",
    content: "This is one of the most comprehensive articles about The Beatles I've read. Well researched and beautifully written.",
    date: "2024-01-14T15:45:00Z"
  },
  {
    id: 4,
    articleId: 1,
    author: "Music Enthusiast",
    email: "musicenthusiast@example.com",
    content: "The Beatles truly changed everything. Their influence can still be heard in modern music today.",
    date: "2024-01-14T12:20:00Z"
  },
  {
    id: 5,
    articleId: 2, // "Queen's Rise to Global Stardom"
    author: "Queen Fanatic",
    email: "queenfanatic@example.com",
    content: "Freddie Mercury was an absolute legend. This article captures his impact perfectly!",
    date: "2024-01-13T18:00:00Z"
  },
  {
    id: 6,
    articleId: 2,
    author: "Concert Goer",
    email: "concertgoer@example.com",
    content: "I saw Queen live back in the day. This article brings back so many memories. Great work!",
    date: "2024-01-13T14:30:00Z"
  },
  {
    id: 7,
    articleId: 3, // "Metallica: Masters of Metal"
    author: "Metal Head",
    email: "metalhead@example.com",
    content: "Master of Puppets is a masterpiece. This article does it justice. Keep up the great content!",
    date: "2024-01-12T20:15:00Z"
  },
  {
    id: 8,
    articleId: 6, // "How The Beatles Changed Rock Music Forever"
    author: "Music Student",
    email: "musicstudent@example.com",
    content: "As a music student, I appreciate the depth of analysis in this article. Very educational!",
    date: "2024-01-11T11:00:00Z"
  }
];

/**
 * Get all comments for a specific article
 * @param {number} articleId - The ID of the article
 * @returns {Array} Array of comments for the article, sorted by date (newest first)
 */
export function getCommentsByArticleId(articleId) {
  return commentsData
    .filter(comment => comment.articleId === articleId)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get comment by ID
 * @param {number} commentId - The ID of the comment
 * @returns {Object|null} The comment object or null if not found
 */
export function getCommentById(commentId) {
  return commentsData.find(comment => comment.id === commentId) || null;
}

export default commentsData;
