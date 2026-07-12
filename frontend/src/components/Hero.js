import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Automate Your Tasks with
          <span> Automatify</span>
        </h1>

        <p>
          Extract text from images, convert speech into text,
          and translate content into multiple languages using
          powerful AI technologies.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            Get Started
          </button>

          <button className="btn-secondary">
            Learn More
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <div className="circle"></div>

          <h2>AI Automation</h2>

          <p>OCR</p>

          <p>Speech Recognition</p>

          <p>Translation</p>

        </div>

      </div>

    </section>
  );
}

export default Hero;