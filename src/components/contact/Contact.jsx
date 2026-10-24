import React, { useState } from "react";
import { Send, CheckCircle2, Copy, Check, ArrowRight } from "lucide-react";
import "./Contact.css";

const explorationTopics = [
  "Internship Opportunity",
  "Freelance / Project",
  "Mentorship & Advice",
  "General Tech Chat",
];

export default function Contact() {
  const [selectedTopic, setSelectedTopic] = useState("Internship Opportunity");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email address.");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      // Reset form after short delay or keep success state
    }, 4000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-layout">
          {/* Left Column: Big Speech Bubble & Info Pills */}
          <div className="contact-info-col">
            {/* Styled Speech Bubble with SVG Tail */}
            <div className="speech-bubble-container">
              <div className="speech-bubble-body">
                <h3 className="speech-title">Let's Connect</h3>
                <p className="speech-text">
                  Looking for a motivated Computer Science student to collaborate
                  with, or would you like to discuss a project or opportunity?
                  I'd love to hear from you!
                </p>
              </div>
              {/* Tail of speech bubble */}
              <div className="speech-bubble-tail">
                <svg
                  viewBox="0 0 60 48"
                  className="speech-tail-svg"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 0 C30 20 18 36 0 46 C24 44 46 30 54 0"
                    fill="#1A6B41"
                  />
                </svg>
              </div>
            </div>

            {/* Email & Phone Pill Buttons */}
            <div className="contact-pills-list">
              <div
                className="contact-pill-item"
                onClick={() => copyToClipboard("gumosh1sandra@gmail.com", "email")}
                title="Click to copy email address"
              >
                <a
                  href="mailto:gumosh1sandra@gmail.com"
                  className="pill-text-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  gumosh1sandra@gmail.com
                </a>
                <button
                  type="button"
                  className="copy-btn"
                  aria-label="Copy Email"
                  onClick={() => copyToClipboard("gumosh1sandra@gmail.com", "email")}
                >
                  {copiedType === "email" ? (
                    <Check size={16} className="text-green" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              <div
                className="contact-pill-item"
                onClick={() => copyToClipboard("+256706626877", "phone")}
                title="Click to copy phone number"
              >
                <a
                  href="tel:+256706626877"
                  className="pill-text-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  +256706626877
                </a>
                <button
                  type="button"
                  className="copy-btn"
                  aria-label="Copy Phone"
                  onClick={() => copyToClipboard("+256706626877", "phone")}
                >
                  {copiedType === "phone" ? (
                    <Check size={16} className="text-green" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form Card */}
          <div className="contact-form-card">
            <div className="form-header">
              <div>
                <span className="form-eyebrow">Direct Message</span>
                <h3 className="form-heading">Drop Sandra a line</h3>
              </div>
              <div className="plane-icon-circle">
                <Send size={18} className="plane-icon" />
              </div>
            </div>

            {isSubmitted ? (
              <div className="form-success-state">
                <CheckCircle2 size={48} className="success-icon" />
                <h4>Message Sent Successfully!</h4>
                <p>
                  Thank you for reaching out, {formData.name || "friend"}. Sandra will get
                  back to you shortly.
                </p>
                <button
                  className="btn btn-primary-green reset-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="direct-form">
                {/* Topic selection chips */}
                <div className="topics-section">
                  <label className="topics-label">What are you exploring?</label>
                  <div className="topic-chips">
                    {explorationTopics.map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        className={`topic-chip ${
                          selectedTopic === topic ? "active" : ""
                        }`}
                        onClick={() => setSelectedTopic(topic)}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Inputs Grid */}
                <div className="form-row two-cols">
                  <div className="form-group">
                    <label htmlFor="name" className="input-label">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="input-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="input-label">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject of discussion"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="input-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell Sandra about your project, idea, or role..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="form-submit-row">
                  <button type="submit" className="send-message-btn">
                    <span>Send Message</span>
                    <ArrowRight size={17} strokeWidth={2.4} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
