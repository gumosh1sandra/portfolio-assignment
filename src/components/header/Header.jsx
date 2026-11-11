import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logoImg from "../../assets/logo-horizontal.png";
import "./Header.css";

const navItems = [
  { label: "Home", href: "#home", bubble: "Welcome! 🌿" },
  { label: "About Me", href: "#about", bubble: "About Sandra ✨" },
  { label: "Skills", href: "#skills", bubble: "My Tech Stack 💻" },
  { label: "Projects", href: "#projects", bubble: "Featured Work 🚀" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo aligned on the left side of the navbar, outside the pill, with NO popup */}
        <a
          href="#home"
          className="header-standalone-logo"
          onClick={(e) => scrollTo(e, "#home")}
          aria-label="Sandra Gumoshabe - Home"
        >
          <img
            src={logoImg}
            alt="Guma Logo"
            className="standalone-logo-img"
          />
        </a>

        {/* Centered Navbar Pill */}
        <div className="navbar-pill">
          {/* Navigation Links */}
          <nav className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${
                  activeSection === item.href.replace("#", "") ? "active" : ""
                }`}
                onClick={(e) => scrollTo(e, item.href)}
              >
                <span>{item.label}</span>
                <span className="nav-bubble-popup" aria-hidden="true">
                  <span className="bubble-pulse-dot"></span>
                  <span>{item.bubble}</span>
                </span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="nav-action">
            <div className="talk-btn-wrapper">
              <a
                href="#contact"
                className="talk-btn"
                onClick={(e) => scrollTo(e, "#contact")}
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={17} strokeWidth={2.4} className="talk-arrow" />
              </a>
              <span className="nav-bubble-popup" aria-hidden="true">
                <span className="bubble-pulse-dot"></span>
                <span>Say Hello! 👋</span>
              </span>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`mobile-link ${
                activeSection === item.href.replace("#", "") ? "active" : ""
              }`}
              onClick={(e) => scrollTo(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-talk-btn"
            onClick={(e) => scrollTo(e, "#contact")}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={18} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </header>
  );
}
