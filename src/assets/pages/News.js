import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import articlesData from "../data/Articles/articlesData";

// Helper to parse DD/MM/YYYY or similar dates safely
function parseDate(dateStr) {
  // Accepts formats like 06/10/2022 or 10/03/2025 (DD/MM/YYYY)
  const [d, m, y] = dateStr.split("/");
  const day = Number(d);
  const month = Number(m) - 1;
  const year = Number(y);
  const dt = new Date(year, month, day);
  return isNaN(dt.getTime()) ? new Date() : dt;
}

export default function News() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // newest | oldest | title
  const [category, setCategory] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  // Derive categories from titles/content keywords (simple heuristic) or fallback
  const categories = useMemo(() => {
    const base = new Set(["all", "beatles", "queen", "metal", "pop", "news"]);
    articlesData.forEach(a => {
      const t = a.title.toLowerCase();
      if (t.includes("beatles")) base.add("beatles");
      if (t.includes("queen")) base.add("queen");
      if (t.includes("metal") || t.includes("metallica")) base.add("metal");
      if (t.includes("pop")) base.add("pop");
    });
    return Array.from(base);
  }, []);

  const filtered = useMemo(() => {
    let list = [...articlesData];

    // Search across title, author and first paragraph
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q) ||
        (a.content?.[0] || "").toLowerCase().includes(q)
      );
    }

    // Category filter (simple keyword match)
    if (category !== "all") {
      list = list.filter(a => a.title.toLowerCase().includes(category));
    }

    // Sort
    if (sortBy === "newest") {
      list.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    } else if (sortBy === "oldest") {
      list.sort((a, b) => parseDate(a.date) - parseDate(b.date));
    } else if (sortBy === "title") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [search, sortBy, category]);

  const featured = filtered[0] || articlesData[0];
  const rest = filtered.slice(1);

  return (
    <div className="container py-5">
      {/* Page Header */}
      <div className="row align-items-center mb-4 g-3">
        <div className="col-lg-3">
          <h1 className="h2 fw-bold mb-0">Latest News</h1>
          <small className="text-muted">Find stories fast without extra clicks</small>
        </div>
        <div className="col-lg-5">
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-search"></i></span>
            <input
              className="form-control"
              placeholder="Search title, author, or topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-2">
          <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map(c => (
              <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
            ))}
          </select>
        </div>
        <div className="col-lg-2">
          <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="title">Title A-Z</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {/* Main Column */}
        <div className="col-lg-8">
          {/* Featured Article */}
          {featured && (
            <div className="card shadow-sm mb-4">
              <div className="row g-0">
                <div className="col-md-6">
                  <img 
                    src={featured.image1} 
                    className="img-fluid h-100" 
                    alt={featured.title}
                    style={{objectFit: 'cover'}}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body h-100 d-flex flex-column p-4">
                    <span className="badge bg-warning text-dark mb-2">Featured</span>
                    <h2 className="h4 fw-bold mb-2">{featured.title}</h2>
                    <small className="text-muted mb-3">{featured.author} • {featured.date}</small>
                    <p className="text-muted mb-3">{featured.content?.[0]?.substring(0, 180)}...</p>
                    <div className="mt-auto d-flex gap-2">
                      <Link to={`/article/${featured.id}`} className="btn btn-warning">
                        Read Article
                      </Link>
                      <button className="btn btn-outline-warning" onClick={() => setExpandedId(expandedId === featured.id ? null : featured.id)}>
                        {expandedId === featured.id ? "Hide Quick Read" : "Quick Read"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {expandedId === featured.id && (
                <div className="card-body border-top">
                  {featured.content?.slice(0, 3).map((p, i) => (
                    <p key={i} className="mb-2">{p}</p>
                  ))}
                  <Link to={`/article/${featured.id}`} className="btn btn-sm btn-link text-warning p-0">Continue reading →</Link>
                </div>
              )}
            </div>
          )}

          {/* Articles List - compact with quick read */}
          <div className="row g-4">
            {rest.map((article) => (
              <div key={article.id} className="col-12">
                <div className="card shadow-sm h-100">
                  <div className="row g-0 align-items-stretch">
                    <div className="col-md-4">
                      <img 
                        src={article.image1} 
                        className="img-fluid h-100" 
                        alt={article.title}
                        style={{objectFit: 'cover'}}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body d-flex flex-column h-100 p-3">
                        <h3 className="h5 fw-bold mb-1">{article.title}</h3>
                        <small className="text-muted mb-2">{article.author} • {article.date}</small>
                        <p className="text-muted mb-2">{article.content?.[0]?.substring(0, 160)}...</p>
                        <div className="mt-auto d-flex gap-2">
                          <Link to={`/article/${article.id}`} className="btn btn-outline-warning btn-sm">Open</Link>
                          <button className="btn btn-warning btn-sm" onClick={() => setExpandedId(expandedId === article.id ? null : article.id)}>
                            {expandedId === article.id ? "Hide Quick Read" : "Quick Read"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {expandedId === article.id && (
                    <div className="card-body border-top">
                      {article.content?.slice(0, 2).map((p, i) => (
                        <p key={i} className="mb-2">{p}</p>
                      ))}
                      <Link to={`/article/${article.id}`} className="btn btn-sm btn-link text-warning p-0">Continue reading →</Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="position-sticky" style={{top: '2rem'}}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Top Stories</h5>
                <ul className="list-unstyled mb-0">
                  {filtered.slice(0, 5).map((a) => (
                    <li key={a.id} className="mb-3">
                      <Link to={`/article/${a.id}`} className="text-decoration-none">
                        <div className="d-flex gap-3">
                          <img src={a.image1} alt={a.title} style={{width: 70, height: 50, objectFit: 'cover'}} className="rounded" />
                          <div>
                            <h6 className="mb-1">{a.title}</h6>
                            <small className="text-muted">{a.date}</small>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h6 className="card-title mb-3">Categories</h6>
                <div className="d-flex flex-wrap gap-2">
                  {categories.map(c => (
                    <button
                      key={c}
                      className={`btn btn-sm ${category === c ? 'btn-warning' : 'btn-outline-warning'}`}
                      onClick={() => setCategory(c)}
                    >
                      {c.charAt(0).toUpperCase() + c.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
