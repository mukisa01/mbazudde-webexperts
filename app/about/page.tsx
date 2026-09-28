import Link from "next/link";

export default function AboutPage() {
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
            <span></span> ABOUT MBAZUDDE WEBEXPERTS
          </div>

          <h1>
            We create digital
            <br />
            <span>experiences that matter.</span>
          </h1>

          <p>
            We help businesses, organizations and individuals build a
            professional digital presence through modern websites, web
            applications and practical technology solutions.
          </p>

          <div
            className="hero-buttons"
            style={{ justifyContent: "center" }}
          >
            <Link href="/contact" className="primary-button">
              Work With Us →
            </Link>

            <Link href="/services" className="secondary-button">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section about">
        <div className="about-grid">
          <div className="about-art">
            <div className="art-circle"></div>
            <div className="art-letter">M</div>
            <div className="art-label">MBAZUDDE</div>
            <div className="art-tag">WEBEXPERTS</div>
          </div>

          <div className="about-content">
            <div className="eyebrow">WHO WE ARE</div>

            <h2>
              Technology that
              <br />
              <span>works for people.</span>
            </h2>

            <p>
              Mbazudde WebExperts is a digital solutions business focused on
              creating professional, useful and modern online experiences.
            </p>

            <p>
              We believe technology should not simply look good. It should
              help businesses communicate better, reach customers and
              organize the way they work.
            </p>

            <p>
              From a simple business website to a custom web application, we
              approach every project with attention to design, functionality
              and the needs of the people who will use it.
            </p>

            <ul className="check-list">
              <li>✓ Professional digital solutions</li>
              <li>✓ Modern and responsive designs</li>
              <li>✓ Practical business-focused technology</li>
              <li>✓ Solutions built around your goals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section services">
        <div className="section-heading">
          <div className="eyebrow">OUR DIRECTION</div>

          <h2>
            What drives
            <br />
            <span>what we build.</span>
          </h2>

          <p>
            Our work is guided by a simple goal: use technology to create
            better digital experiences and useful solutions.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card featured">
            <div className="service-number">01</div>
            <div className="service-icon">◎</div>

            <h3>Our Mission</h3>

            <p>
              To create accessible, professional and practical digital
              solutions that help businesses and organizations succeed in an
              increasingly digital world.
            </p>

            <ul className="check-list">
              <li>✓ Solve real problems</li>
              <li>✓ Create useful technology</li>
              <li>✓ Deliver professional experiences</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-number">02</div>
            <div className="service-icon">✦</div>

            <h3>Our Vision</h3>

            <p>
              To become a trusted digital technology partner for businesses
              and organizations looking to grow, improve and connect with
              their audiences online.
            </p>

            <ul className="check-list">
              <li>✓ Digital innovation</li>
              <li>✓ Long-term partnerships</li>
              <li>✓ Meaningful digital experiences</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section why">
        <div className="why-grid">
          <div>
            <div className="eyebrow">OUR VALUES</div>

            <h2>
              Principles behind
              <br />
              <span>our work.</span>
            </h2>

            <p>
              Good digital products are built with more than technology. They
              require clear thinking, attention to detail and an understanding
              of the people they are designed for.
            </p>
          </div>

          <div className="why-item">
            <strong>01</strong>

            <div>
              <h3>Quality</h3>
              <p>
                We aim for professional results in both design and
                functionality.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>02</strong>

            <div>
              <h3>Simplicity</h3>
              <p>
                We make digital experiences clear, understandable and easy
                to use.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>03</strong>

            <div>
              <h3>Innovation</h3>
              <p>
                We explore modern technologies and new ways of solving
                problems.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>04</strong>

            <div>
              <h3>People First</h3>
              <p>
                We consider the people who will actually use the solutions we
                create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section process">
        <div className="section-heading">
          <div className="eyebrow">OUR APPROACH</div>

          <h2>
            Understand.
            <br />
            <span>Create. Improve.</span>
          </h2>

          <p>
            We keep our approach simple and focused so every project has a
            clear direction.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-item">
            <span>01</span>
            <h3>Understand</h3>
            <p>
              We learn about your business, audience, challenges and goals.
            </p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Plan</h3>
            <p>
              We organize the structure, features and content needed for the
              project.
            </p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Create</h3>
            <p>
              We design and develop the solution with usability and quality in
              mind.
            </p>
          </div>

          <div className="process-item">
            <span>04</span>
            <h3>Improve</h3>
            <p>
              We look for opportunities to improve the digital experience as
              your needs grow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <div>
            <div className="eyebrow">LET'S WORK TOGETHER</div>

            <h2>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>

            <p>
              Tell us about your project and let's create something
              professional together.
            </p>
          </div>

          <div className="cta-actions">
            <Link href="/contact" className="cta-button">
              Start Your Project →
            </Link>

            <a
              href="https://wa.me/256740638678"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-outline"
            >
              WhatsApp Us
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