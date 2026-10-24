import React from "react";
import { FileText, Mail, GraduationCap, Download } from "lucide-react";
import sandraImg from "../../assets/sandra.jpg";
import "./Hero.css";

export default function Hero() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // In a production app, this links to the actual resume PDF
    const link = document.createElement("a");
    link.href = "#";
    link.setAttribute("download", "Sandra_Gumoshabe_Resume.pdf");
    alert("Resume download triggered for Sandra Gumoshabe!");
  };

  return (
    <section id="home" className="hero-section">
      <div className="section-container hero-container">
        {/* Left Column: Intro Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span>Junior Developer &amp; CS Student</span>
          </div>

          <h1 className="hero-title">
            Hello, I am <span className="highlight-name">Sandra</span> a<br />
            Junior developer
          </h1>

          <p className="hero-description">
            And an IT student at Women's Institute of Technology and Innovation
            currently pursuing a diploma in Computer Science Year Two
          </p>

          <div className="hero-actions">
            <button
              onClick={handleDownloadResume}
              className="btn btn-primary-green"
              aria-label="Download Resume"
            >
              <FileText size={19} strokeWidth={2.2} />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="btn btn-outline-white"
              aria-label="Get In Touch"
            >
              <Mail size={19} strokeWidth={2} />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Portrait & Floating Card */}
        <div className="hero-visual">
          {/* Floating Education Badge */}
          <div className="floating-edu-badge">
            <div className="edu-icon-wrap">
              <GraduationCap size={22} className="edu-icon" />
            </div>
            <div className="edu-text">
              <span className="edu-sub">Year 2 · Computer Science</span>
              <span className="edu-title">Women's Inst. of Tech</span>
            </div>
          </div>

          {/* Portrait Image Container */}
          <div className="portrait-wrapper">
            <img
              src={sandraImg}
              alt="Sandra Gumoshabe - Junior Developer"
              className="portrait-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
