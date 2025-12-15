// components/TransitionLink.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function TransitionLink({ to, children, className, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();

    // If there's a custom onClick handler, run it
    if (onClick) onClick();

    // Wait a bit before navigation to allow animation to start
    setTimeout(() => {
      window.location.href = to;
    }, 300);
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
