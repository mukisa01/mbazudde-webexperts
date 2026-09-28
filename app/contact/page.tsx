"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const project = String(data.get("project") || "");
    const message = String(data.get("message") || "");

    const text = `Hello Mbazudde WebExperts.

Name: ${name}
Email: ${email}
Phone: ${phone}
Project: ${project}

Message:
${message}`;

    const whatsappUrl =
      "https://wa.me/256740638678?text=" +
      encodeURIComponent(text);

    window.open(whatsappUrl, "_blank");
  }

  return (
    <main>
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-inner">
          <Link href="/" className="logo">
            <span className="logo-mark">M</span>
            <span className="logo-name">
              Mbazudde <strong>WebExperts</strong>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact" className="nav-cta">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div
          className="hero-content"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div className="eyebrow">
            <span></span> LET'S TALK
          </div>

          <h1>
            Have a project?
            <br />
            <span>Let's build it.</span>
          </h1>

          <p>
            Tell us about your website, application or digital idea and
            let's discuss how Mbazudde WebExperts can help.
          </p>

          <div
            className="hero-buttons"
            style={{ justifyContent: "center" }}
          >
            <a
              href="https://wa.me/256740638678"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              WhatsApp Us →
            </a>

            <a
              href="mailto:mbazuddewebexperts@gmail.com"
              className="secondary-button"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="contact-grid">
          {/* LEFT */}
          <div>
            <div className="eyebrow">GET IN TOUCH</div>

            <h2>
              Let's discuss your
              <br />
              <span>next project.</span>
            </h2>

            <p>
              Whether you already have a clear plan or just an idea, send us
              a message. We can discuss your requirements and the best way to
              turn them into a digital solution.
            </p>

            <div className="contact-list">
              <div className="contact-box">
                <div className="contact-icon">W</div>

                <div>
                  <small>WHATSAPP</small>

                  <strong>+256 740 638 678</strong>

                  <a
                    href="https://wa.me/256740638678"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="contact-box">
                <div className="contact-icon">@</div>

                <div>
                  <small>EMAIL</small>

                  <strong>
                    mbazuddewebexperts@gmail.com
                  </strong>

                  <a href="mailto:mbazuddewebexperts@gmail.com">
                    Send an Email →
                  </a>
                </div>
              </div>

              <div className="contact-box">
                <div className="contact-icon">UG</div>

                <div>
                  <small>LOCATION</small>

                  <strong>Uganda 🇺🇬</strong>

                  <span>Serving clients digitally</span>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-card">
            <div className="eyebrow">PROJECT INQUIRY</div>

            <h3>Tell us what you need.</h3>

            <p>
              Complete the form below. When you submit it, your project
              details will be prepared in WhatsApp for us.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+256..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="project">Project Type</label>

                  <select id="project" name="project" required>
                    <option value="">Select a project</option>
                    <option value="Website Design">
                      Website Design
                    </option>
                    <option value="Web Application">
                      Web Application
                    </option>
                    <option value="Business System">
                      Business System
                    </option>
                    <option value="Digital Branding">
                      Digital Branding
                    </option>
                    <option value="E-commerce Website">
                      E-commerce Website
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your project</label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your business, idea, features you need, or anything else that will help us understand your project."
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Send Project Inquiry →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="section why">
        <div className="why-grid">
          <div>
            <div className="eyebrow">WHY START WITH US</div>

            <h2>
              Your idea deserves
              <br />
              <span>a clear direction.</span>
            </h2>

            <p>
              Starting a digital project does not have to be complicated.
              We keep the conversation simple and focus on understanding what
              you actually need.
            </p>
          </div>

          <div className="why-item">
            <strong>01</strong>

            <div>
              <h3>Clear Communication</h3>
              <p>
                We discuss your requirements and explain the project clearly.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>02</strong>

            <div>
              <h3>Practical Solutions</h3>
              <p>
                We focus on features and designs that serve a real purpose.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>03</strong>

            <div>
              <h3>Modern Design</h3>
              <p>
                We create professional experiences designed for modern
                audiences.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>04</strong>

            <div>
              <h3>Direct Contact</h3>
              <p>
                You can reach us directly through WhatsApp or email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <div>
            <div className="eyebrow">MBAZUDDE WEBEXPERTS</div>

            <h2>
              Let's turn your
              <br />
              <span>idea into reality.</span>
            </h2>

            <p>
              Start a conversation today and let's discuss what you want to
              build.
            </p>
          </div>

          <div className="cta-actions">
            <a
              href="https://wa.me/256740638678"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              WhatsApp Us →
            </a>

            <a
              href="mailto:mbazuddewebexperts@gmail.com"
              className="cta-outline"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-column">
            <Link href="/" className="logo">
              <span className="logo-mark">M</span>

              <span className="logo-name">
                Mbazudde <strong>WebExperts</strong>
              </span>
            </Link>

            <p>
              Professional websites and digital solutions for modern
              businesses.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>

            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h4>Services</h4>

            <Link href="/services">Website Design</Link>
            <Link href="/services">Web Applications</Link>
            <Link href="/services">Business Systems</Link>
            <Link href="/services">Digital Branding</Link>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>

            <a href="https://wa.me/256740638678">
              +256 740 638 678
            </a>

            <a href="mailto:mbazuddewebexperts@gmail.com">
              mbazuddewebexperts@gmail.com
            </a>

            <span>Uganda 🇺🇬</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Mbazudde WebExperts. All rights
            reserved.
          </span>

          <span>Built with passion in Uganda 🇺🇬</span>
        </div>
      </footer>
    </main>
  );
}