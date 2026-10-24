import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrap">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-name">Sandra Gumoshabe</span>
            <span className="footer-divider">•</span>
            <span className="footer-tagline">Junior Developer &amp; CS Student</span>
          </div>

          <div className="footer-right">
            <p className="copyright-text">
              © {new Date().getFullYear()} Sandra. Built with React &amp; passion.
            </p>
            <button
              onClick={scrollToTop}
              className="scroll-top-btn"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
