import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Header.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
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
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="nav-action">
          <a
            href="#contact"
            className="talk-btn"
            onClick={(e) => scrollTo(e, "#contact")}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={17} strokeWidth={2.4} className="talk-arrow" />
          </a>
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
    </header>
  );
}