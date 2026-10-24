import React from "react";
import { Sparkles, Flag } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-intro text-center">
          <div className="section-pill-tag">
            <span>Get to know me</span>
          </div>
          <h2 className="section-title-burgundy">About Me &amp; Aspirations</h2>
        </div>

        {/* Two Aspirations Cards */}
        <div className="about-cards-grid">
          {/* Card 1: Curiosity & Passion */}
          <div className="aspiration-card yellow-accent">
            <div className="corner-circle corner-circle-yellow"></div>
            
            <div className="card-top">
              <span className="card-badge badge-yellow">
                <Sparkles size={14} className="badge-icon" />
                <span>About Me</span>
              </span>
            </div>

            <h3 className="card-heading">
              Curiosity-driven problem solver with a passion for code
            </h3>

            <p className="card-body-text">
              My interest in technology comes from the opportunity to use creativity
              and logical thinking to solve problems. Through my studies and
              personal projects, I have been developing my skills in programming,
              web development, database management, and data analysis. I enjoy
              exploring how software works, learning new tools, and collaborating
              with others to develop useful solutions. I believe that every project
              is an opportunity to learn, improve, and turn knowledge into
              practical experience.
            </p>
          </div>

          {/* Card 2: Goals & Vision */}
          <div className="aspiration-card mint-accent">
            <div className="corner-circle corner-circle-mint"></div>
            
            <div className="card-top">
              <span className="card-badge badge-goals">
                <Flag size={14} className="badge-icon" />
                <span>Goals</span>
              </span>
            </div>

            <h3 className="card-heading">
              Building impactful, human-centered technology
            </h3>

            <p className="card-body-text">
              My goal is to grow into a skilled software engineer who develops
              reliable, user-friendly, and impactful technology solutions. I am
              particularly interested in software development, web applications,
              and data-driven solutions. I am always open to learning
              opportunities, internships, practical experience, and collaborations
              that help me grow professionally.
            </p>

            <div className="card-bottom-divider"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
