// components/TransitionLink.jsx
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TransitionLink = ({ to, children, className, onClick, ...props }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    // Call the original onClick if provided
    if (onClick) onClick();

    // Start transition
    setIsTransitioning(true);

    // Wait for transition to start, then navigate
    setTimeout(() => {
      navigate(to);
      // Reset transition state after navigation
      setTimeout(() => setIsTransitioning(false), 100);
    }, 50);
  };

  return (
    <Link to={to} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
