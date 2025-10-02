
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container">
        {/* ✅ Make the logo a clickable Home link */}
        <a className="navbar-brand" href="/">
          <img src="/images/logo.png" alt="Company Logo" style={{ height: "50px" }} /> {/* Adjust size if needed */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <a className="nav-link" href="/Artists">Artists</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="/News">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
