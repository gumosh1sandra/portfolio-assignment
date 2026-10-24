import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import "./Projects.css";

export default function Projects() {
  const [accuracy, setAccuracy] = useState(89);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="projects-header text-center">
          <div className="featured-pill-badge">
            <span className="dot-indicator">●</span>
            <Sparkles size={13} className="sparkle-icon" />
            <span>FEATURED WORK • BUILT WITH PASSION</span>
          </div>

          <h2 className="projects-main-title">
            Featured Projects &amp; Technical Explorations
          </h2>
        </div>

        {/* 2 Projects Grid */}
        <div className="projects-grid">
          {/* Card 1: Cinderella Cakes Backend */}
          <div className="project-card">
            <div className="project-category-badge category-backend">
              Backend design
            </div>

            <h3 className="project-title">
              Designed the back end for Cinderella Cakes and the admin dashboard
              for the same business
            </h3>

            <div className="project-tags">
              <span className="project-tag">Python</span>
              <span className="project-tag">SQL</span>
              <span className="project-tag">Figma</span>
            </div>

            <div className="project-card-footer-line"></div>
          </div>

          {/* Card 2: Banking Dataset Analysis */}
          <div className="project-card">
            <div className="project-category-badge category-ml">
              Data Science &amp; ML
            </div>

            <h3 className="project-title">
              Banking Data set analysis
            </h3>

            <p className="project-description">
              Exploratory data analysis tool predicting whether a customer will
              subscribe or not to a term deposit since the bank is experiencing
              unpredictable conversion rates for its term deposit
            </p>

            <div className="project-tags">
              <span className="project-tag">Python</span>
              <span className="project-tag">Pandas</span>
              <span className="project-tag">Sci_kit learn</span>
              <span className="project-tag">Matplotlib</span>
            </div>

            {/* Model Validation Interactive Card */}
            <div className="model-validation-box">
              <div className="validation-header">
                <span className="validation-title">
                  Model Validation (Random Forest)
                </span>
              </div>

              <div className="validation-score-row">
                <div className="score-label">Accuracy Score</div>
                <div className="score-value">{accuracy}%</div>
              </div>

              {/* Progress Bar */}
              <div className="accuracy-progress-track">
                <div
                  className="accuracy-progress-bar"
                  style={{ width: `${accuracy}%` }}
                >
                  <div className="accuracy-progress-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
