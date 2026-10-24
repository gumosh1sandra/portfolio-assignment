import React from "react";
import { Code, Database, TrendingUp, Palette } from "lucide-react";
import "./Skills.css";

const skillsData = [
  {
    id: "web-dev",
    icon: <Code size={20} strokeWidth={2.4} />,
    iconColor: "green",
    title: "Programming and web development",
    skills: ["HTML5", "Javascript", "React JS"],
    description: "Developing programming logic,, web pages and application features",
  },
  {
    id: "backend",
    icon: <Database size={20} strokeWidth={2.4} />,
    iconColor: "teal",
    title: "Databases and Backend development",
    skills: ["Python", "Flask", "MySQL", "REST API"],
    description: "Working with databases, server-side logic and API development",
  },
  {
    id: "data-science",
    icon: <TrendingUp size={20} strokeWidth={2.4} />,
    iconColor: "gray",
    title: "Data Science and Machine learning",
    skills: ["Python", "Pandas", "Scikit-learn"],
    description: "Exploring data processing, analysis, and introductory machine learning models",
  },
  {
    id: "tools-design",
    icon: <Palette size={20} strokeWidth={2.4} />,
    iconColor: "green",
    title: "Tools and design",
    skills: ["Figma", "Adobe Illustrator", "Git & Github"],
    description: "Version control, development tools UI design",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {/* Section Pill Title */}
        <div className="skills-header text-center">
          <div className="skills-pill-tag">
            <span>Skills &amp; Expertise</span>
          </div>
        </div>

        {/* 2x2 Dark Cards Grid */}
        <div className="skills-grid">
          {skillsData.map((item) => (
            <div key={item.id} className="skill-card">
              <div className="skill-card-header">
                <div className={`skill-icon-badge ${item.iconColor}`}>
                  {item.icon}
                </div>
                <h3 className="skill-card-title">{item.title}</h3>
              </div>

              {/* Skill Pill Badges */}
              <div className="skill-tags">
                {item.skills.map((skill) => (
                  <span key={skill} className="skill-tag-pill">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="skill-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
