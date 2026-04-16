import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { FaRegNewspaper, FaTicketAlt } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function BottomNav({ onMoreClick, isMoreOpen }) {
  const navItems = [
    { to: "/", label: "Home", icon: <AiFillHome /> },
    { to: "/artists", label: "Artists", icon: <AiFillStar /> },
    { to: "/news", label: "News", icon: <FaRegNewspaper /> },
    { to: "/concerts", label: "Concerts", icon: <FaTicketAlt /> },
  ];

  return (
    <nav className="sa-bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `sa-bottom-nav-item${isActive ? " sa-bottom-nav-item--active" : ""}`
          }
        >
          <span className="sa-bottom-nav-icon">{item.icon}</span>
          <span className="sa-bottom-nav-label">{item.label}</span>
        </NavLink>
      ))}
      <button
        type="button"
        className={`sa-bottom-nav-item sa-bottom-nav-item--button${
          isMoreOpen ? " sa-bottom-nav-item--active" : ""
        }`}
        onClick={onMoreClick}
      >
        <span className="sa-bottom-nav-icon">
          <BiDotsHorizontalRounded />
        </span>
        <span className="sa-bottom-nav-label">More</span>
      </button>
    </nav>
  );
}

