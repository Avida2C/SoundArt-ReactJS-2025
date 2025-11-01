/**
 * Search Filter Configuration Data
 * Contains configurations for search/filter components on different pages
 */

export const searchFilterConfigs = {
  news: {
    searchPlaceholder: "Search articles, authors, or tags...",
    filterLabel: "All Categories",
    filterOptions: {
      all: "All Categories"
    },
    sortLabel: "Sort by Date",
    sortOptions: {
      date: "Sort by Date",
      views: "Sort by Views",
      likes: "Sort by Likes",
      title: "Sort by Title"
    },
    resultCountFormat: (filteredCount, totalCount) => `${filteredCount} articles found`,
    defaultSort: "date"
  },
  concerts: {
    searchPlaceholder: "Search concerts by artist, venue, or city...",
    filterLabel: "All Genres",
    filterOptions: {
      all: "All Genres"
    },
    sortLabel: "Sort by Name",
    sortOptions: {
      name: "Sort by Name",
      date: "Sort by Date",
      venue: "Sort by Venue",
      price: "Sort by Price"
    },
    resultCountFormat: (filteredCount, totalCount) => `Showing ${filteredCount} of ${totalCount} concerts`,
    defaultSort: "name"
  },
  artists: {
    searchPlaceholder: "Search artists...",
    filterLabel: "All Genres",
    filterOptions: {
      all: "All Genres"
    },
    sortLabel: "Sort by Name",
    sortOptions: {
      name: "Sort by Name",
      popularity: "Sort by Popularity",
      year: "Sort by Year"
    },
    resultCountFormat: (filteredCount, totalCount) => `Showing ${filteredCount} of ${totalCount} artists`,
    defaultSort: "name"
  }
};

