import React from "react";

function FeatureCard({ icon, title, description, buttonText }) {
  return (
    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      <button>{buttonText}</button>

    </div>
  );
}

export default FeatureCard;