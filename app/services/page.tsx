import Link from "next/link";

export default function ServicesPage() {
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
            <span></span>
            OUR SERVICES
          </div>

          <h1>
            Digital solutions
            <br />
            <span>built for growth.</span>
          </h1>

          <p>
            From professional websites to custom business systems,
            Mbazudde WebExperts helps you turn ideas into useful digital
            experiences.
          </p>

          <div
            className="hero-buttons"
            style={{ justifyContent: "center" }}
          >
            <a href="#services-list" className="primary-button">
              Explore Services ↓
            </a>

            <Link href="/contact" className="secondary-button">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services" id="services-list">
        <div className="section-heading">
          <div className="eyebrow">WHAT WE OFFER</div>

          <h2>
            Solutions designed
            <br />
            <span>around your needs.</span>
          </h2>

          <p>
            Every project is different. We create solutions based on your
            business, audience and goals.
          </p>
        </div>

        <div className="services-grid">
          {/* WEBSITE */}
          <div className="service-card featured">
            <div className="service-number">01</div>

            <div className="service-icon">◈</div>

            <h3>Website Design</h3>

            <p>
              Modern websites that make your business look professional
              and give customers an easy way to discover your services.
            </p>

            <ul className="check-list">
              <li>✓ Professional design</li>
              <li>✓ Mobile responsive</li>
              <li>✓ Fast performance</li>
              <li>✓ Contact integration</li>
              <li>✓ Search-friendly structure</li>
            </ul>

            <Link href="/contact">
              Start a Website Project →
            </Link>
          </div>

          {/* WEB APPLICATION */}
          <div className="service-card">
            <div className="service-number">02</div>

            <div className="service-icon">▣</div>

            <h3>Web Applications</h3>

            <p>
              Custom web applications that provide useful functionality
              beyond a normal website.
            </p>

            <ul className="check-list">
              <li>✓ Custom functionality</li>
              <li>✓ User accounts</li>
              <li>✓ Dashboards</li>
              <li>✓ Database integration</li>
              <li>✓ Business workflows</li>
            </ul>

            <Link href="/contact">
              Build an Application →
            </Link>
          </div>

          {/* BUSINESS SYSTEMS */}
          <div className="service-card">
            <div className="service-number">03</div>

            <div className="service-icon">◎</div>

            <h3>Business Systems</h3>

            <p>
              Digital systems that help businesses organize information,
              manage operations and improve productivity.
            </p>

            <ul className="check-list">
              <li>✓ Management systems</li>
              <li>✓ Data management</li>
              <li>✓ Reporting systems</li>
              <li>✓ Administrative dashboards</li>
              <li>✓ Custom workflows</li>
            </ul>

            <Link href="/contact">
              Build Your System →
            </Link>
          </div>

          {/* BRANDING */}
          <div className="service-card">
            <div className="service-number">04</div>

            <div className="service-icon">✦</div>

            <h3>Digital Branding</h3>

            <p>
              Build a consistent digital identity that helps customers
              recognize and remember your business.
            </p>

            <ul className="check-list">
              <li>✓ Digital identity</li>
              <li>✓ Website visual style</li>
              <li>✓ Professional layouts</li>
              <li>✓ Digital graphics</li>
              <li>✓ Brand presentation</li>
            </ul>

            <Link href="/contact">
              Build Your Brand →
            </Link>
          </div>
        </div>
      </section>

      {/* WEBSITE FEATURE */}
      <section className="section about">
        <div className="about-grid">
          <div className="about-art">
            <div className="art-circle"></div>

            <div className="art-letter">W</div>

            <div className="art-label">WEB DESIGN</div>

            <div className="art-tag">
              RESPONSIVE • MODERN • FAST
            </div>
          </div>

          <div className="about-content">
            <div className="eyebrow">WEBSITE DESIGN</div>

            <h2>
              Your website is
              <br />
              <span>your digital office.</span>
            </h2>

            <p>
              Your website is often the first place potential customers
              interact with your business. We create professional
              experiences designed to build trust and communicate what
              you offer clearly.
            </p>

            <ul className="check-list">
              <li>✓ Professional homepage</li>
              <li>✓ Services and information pages</li>
              <li>✓ Mobile-friendly layouts</li>
              <li>✓ WhatsApp and contact integration</li>
              <li>✓ Professional calls to action</li>
            </ul>

            <Link href="/contact" className="primary-button">
              Discuss Your Website →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why">
        <div className="why-grid">
          <div>
            <div className="eyebrow">WHY WORK WITH US</div>

            <h2>
              Technology should
              <br />
              <span>work for you.</span>
            </h2>

            <p>
              We focus on practical digital solutions that are easy to
              understand, attractive to use and designed around your
              objectives.
            </p>
          </div>

          <div className="why-item">
            <strong>01</strong>

            <div>
              <h3>Modern Technology</h3>

              <p>
                We use modern web technologies to create reliable digital
                experiences.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>02</strong>

            <div>
              <h3>Responsive Design</h3>

              <p>
                Your website works across phones, tablets and computers.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>03</strong>

            <div>
              <h3>Business Focused</h3>

              <p>
                We build around your actual business needs rather than
                using a one-size-fits-all approach.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>04</strong>

            <div>
              <h3>Ongoing Support</h3>

              <p>
                We can continue helping you improve your digital presence
                after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process">
        <div className="section-heading">
          <div className="eyebrow">OUR PROCESS</div>

          <h2>
            From your idea
            <br />
            <span>to the final product.</span>
          </h2>
        </div>

        <div className="process-grid">
          <div className="process-item">
            <span>01</span>

            <h3>Discuss</h3>

            <p>
              We listen to your idea and understand your requirements.
            </p>
          </div>

          <div className="process-item">
            <span>02</span>

            <h3>Plan</h3>

            <p>
              We organize the structure, features and content.
            </p>
          </div>

          <div className="process-item">
            <span>03</span>

            <h3>Build</h3>

            <p>
              We design and develop your digital solution.
            </p>
          </div>

          <div className="process-item">
            <span>04</span>

            <h3>Launch</h3>

            <p>
              Your finished project is prepared for your customers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <div>
            <div className="eyebrow">HAVE A PROJECT?</div>

            <h2>
              Let's create your
              <br />
              <span>next digital solution.</span>
            </h2>

            <p>
              Tell us what you need and let's discuss how we can help.
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