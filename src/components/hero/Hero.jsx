import React, { useState, useEffect } from "react";
import {
  FileText,
  Mail,
  GraduationCap,
  Download,
  Eye,
  ExternalLink,
  X,
} from "lucide-react";
import sandraImg from "../../assets/sandra.jpg";
import "./Hero.css";

export default function Hero() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const resumePdfUrl = `${import.meta.env.BASE_URL}Sandra_Gumoshabe_Resume.pdf`;

  // Typewriter animation state for "a Junior developer"
  const fullRoleText = "a Junior developer";
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && typedRole === fullRoleText) {
      // Pause after typing the full text before gently looping
      timeout = setTimeout(() => setIsDeleting(true), 4000);
    } else if (isDeleting && typedRole === "") {
      setIsDeleting(false);
      timeout = setTimeout(() => {}, 500);
    } else {
      timeout = setTimeout(() => {
        setTypedRole(
          isDeleting
            ? fullRoleText.slice(0, typedRole.length - 1)
            : fullRoleText.slice(0, typedRole.length + 1)
        );
      }, currentSpeed);
    }

    return () => clearTimeout(timeout);
  }, [typedRole, isDeleting]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };
    if (isPreviewOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
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
            <span className="hero-greeting-line">
              Hello, I am{" "}
              <span className="highlight-name">Sandra</span>
              <span className="wave-hand" aria-hidden="true">
                👋
              </span>
              ,
            </span>
            <span className="hero-role-line">
              <span className="hero-role-text">
                {typedRole || "a Junior developer"}
              </span>
              <span className="typing-cursor" aria-hidden="true">
                |
              </span>
            </span>
          </h1>

          <p className="hero-description">
            And an IT student at Women's Institute of Technology and Innovation
            currently pursuing a diploma in Computer Science Year Two
          </p>

          <div className="hero-actions">
            {/* Download / View Resume Action Group */}
            <div className="resume-btn-group">
              <a
                href={resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary-green resume-main-btn"
                aria-label="Visit Sandra's Resume PDF to view and download"
              >
                <FileText size={19} strokeWidth={2.2} />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className="btn btn-preview-icon"
                aria-label="Preview Resume in modal"
                title="Quick preview on this page"
              >
                <Eye size={18} strokeWidth={2.2} />
              </button>
            </div>

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

      {/* Resume Viewer Modal */}
      {isPreviewOpen && (
        <div
          className="resume-modal-overlay"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="resume-modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Sandra Gumoshabe Resume Viewer"
          >
            <div className="resume-modal-header">
              <div className="resume-modal-title">
                <div className="modal-title-icon-wrap">
                  <FileText size={20} className="modal-title-icon" />
                </div>
                <div>
                  <h3>Sandra Gumoshabe</h3>
                  <span>Curriculum Vitae (PDF)</span>
                </div>
              </div>

              <div className="resume-modal-actions">
                <a
                  href={resumePdfUrl}
                  download="Sandra_Gumoshabe_Resume.pdf"
                  className="btn btn-primary-green modal-action-btn"
                  title="Download Resume PDF file"
                >
                  <Download size={17} />
                  <span>Download</span>
                </a>

                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white modal-action-btn"
                  title="Open PDF in new tab"
                >
                  <ExternalLink size={17} />
                  <span>New Tab</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(false)}
                  className="modal-close-btn"
                  aria-label="Close resume viewer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="resume-modal-body">
              <iframe
                src={`${resumePdfUrl}#toolbar=1`}
                title="Sandra Gumoshabe Resume PDF"
                className="resume-iframe"
              />
              <div className="resume-modal-footer">
                <p>Viewing Sandra Gumoshabe's Resume</p>
                <a
                  href={resumePdfUrl}
                  download="Sandra_Gumoshabe_Resume.pdf"
                  className="mobile-download-link"
                >
                  <Download size={15} /> Click here to download file
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
