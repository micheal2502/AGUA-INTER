// contexts/TransitionContext.jsx
import React, { createContext, useContext, useState } from "react";

export const TransitionContext = createContext(undefined);

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = () => setIsTransitioning(true);
  const endTransition = () => setIsTransitioning(false);

  return (
    <TransitionContext.Provider
      value={{ isTransitioning, startTransition, endTransition }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }
  return context;
};
