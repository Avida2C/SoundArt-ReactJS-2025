import React from "react";

export default function SearchFilter({
  searchTerm,
  onSearchChange,
  filterValue,
  onFilterChange,
  filterOptions = [],
  sortValue,
  onSortChange,
  sortOptions = [],
  resultCount,
  totalCount,
  resultCountFormat,
  searchPlaceholder = "Search...",
  filterLabel = "Filter",
  sortLabel = "Sort"
}) {
  return (
    <div className="row g-3 align-items-center">
      {/* Search Bar */}
      <div className="col-lg-4 col-md-6">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchTerm && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => onSearchChange('')}
              type="button"
            >
              <i className="bi bi-x"></i>
            </button>
          )}
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="col-lg-3 col-md-3">
        <select
          className="form-select"
          value={filterValue}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Dropdown */}
      <div className="col-lg-3 col-md-3">
        <select
          className="form-select"
          value={sortValue}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Result Count */}
      <div className="col-lg-2 col-md-12">
        <div className="text-lg-end text-md-start">
          <small className="text-muted">
            {resultCountFormat ? resultCountFormat(resultCount, totalCount) : `${resultCount} found`}
          </small>
        </div>
      </div>
    </div>
  );
}
