/**
 * Hero Section Data
 * Contains hero section content for each page
 * - title: Main title text
 * - titleHighlight: Optional text to highlight (displayed in orange/warning color or as SoundArt brand)
 * - description: Paragraph text below title
 * - buttons: Optional array of buttons (only used on homepage)
 */
export const heroData = {
  home: {
    title: "Welcome to",
    titleHighlight: "SoundArt",
    description: "Discover the legends of music, explore rare stories, and dive deep into the world of iconic artists and bands that shaped generations.",
    buttons: [
      {
        to: "/artists",
        text: "Explore Artists",
        icon: "bi bi-music-note",
        variant: "btn-warning"
      },
      {
        to: "/news",
        text: "Latest News",
        icon: "bi bi-newspaper",
        variant: "btn-outline-light"
      }
    ]
  },
  artists: {
    title: "Discover",
    titleHighlight: "Legendary Artists",
    description: "Explore the icons who shaped music history. From The Beatles to Queen, discover their stories, music, and legacy. Browse our complete collection of legendary artists."
  },
  news: {
    title: "Music",
    titleHighlight: "News",
    description: "Stay updated with the latest stories, rare discoveries, and fascinating insights from the world of legendary music artists."
  },
  concerts: {
    title: "Live",
    titleHighlight: "Concerts",
    description: "Experience the magic of legendary artists in spectacular tribute concerts. From The Beatles to Queen, don't miss these unforgettable performances."
  }
};

