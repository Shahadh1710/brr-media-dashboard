import React from "react";

/**
 * Props for the Card component.
 * - children: The content to display inside the card.
 * - className: Optional additional CSS classes for custom styling.
 */
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Card
 * A reusable container component with consistent styling.
 * Used to wrap content in a card-like UI throughout the app.
 */
const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`card-component ${className}`}>
    {children}
  </div>
);

export default Card;