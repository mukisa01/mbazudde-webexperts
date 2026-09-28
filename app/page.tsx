import Link from "next/link";

export default function HomePage() {
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
      <section className="hero home-hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span></span>
            MBAZUDDE WEBEXPERTS
          </div>

          <h1>
            We build websites
            <br />
            <span>that move businesses forward.</span>
          </h1>

          <p>
            Professional websites, web applications and digital solutions
            designed to help businesses and organizations grow online.
          </p>

          <div className="hero-buttons">
            <Link href="/contact" className="primary-button">
              Start Your Project →
            </Link>

            <Link href="/portfolio" className="secondary-button">
              View Our Work
            </Link>
          </div>

          <div className="hero-trust">
            <div>
              <strong>01</strong>
              <span>Modern Design</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Responsive Websites</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Business Solutions</span>
            </div>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="hero-visual">
          <div className="floating-card card-one">
            <span>WEB DESIGN</span>
            <strong>Modern</strong>
            <small>Beautiful digital experiences</small>
          </div>

          <div className="browser-window">
            <div className="browser-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="browser-content">
              <div className="browser-logo">
                <span>M</span>
                Mbazudde
              </div>

              <div className="browser-lines">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="browser-boxes">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="floating-card card-two">
            <strong>100%</strong>
            <span>Responsive</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services" id="services">
        <div className="section-heading">
          <div className="eyebrow">WHAT WE DO</div>

          <h2>
            Digital solutions
            <br />
            <span>built around you.</span>
          </h2>

          <p>
            From simple business websites to custom digital systems, we
            create solutions that match your goals.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card featured">
            <div className="service-number">01</div>

            <div className="service-icon">◈</div>

            <h3>Website Design</h3>

            <p>
              Professional, modern and responsive websites that give your
              business a strong online presence.
            </p>

            <Link href="/services">
              Explore Service →
            </Link>
          </div>

          <div className="service-card">
            <div className="service-number">02</div>

            <div className="service-icon">▣</div>

            <h3>Web Applications</h3>

            <p>
              Custom web applications designed around the way your
              business works.
            </p>

            <Link href="/services">
              Explore Service →
            </Link>
          </div>

          <div className="service-card">
            <div className="service-number">03</div>

            <div className="service-icon">◎</div>

            <h3>Business Systems</h3>

            <p>
              Digital systems that help organize information and improve
              everyday operations.
            </p>

            <Link href="/services">
              Explore Service →
            </Link>
          </div>

          <div className="service-card">
            <div className="service-number">04</div>

            <div className="service-icon">✦</div>

            <h3>Digital Branding</h3>

            <p>
              Professional digital identities that help your business
              stand out.
            </p>

            <Link href="/services">
              Explore Service →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section about" id="about">
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
              <span>works for you.</span>
            </h2>

            <p>
              Mbazudde WebExperts creates professional digital solutions
              for businesses, organizations and individuals.
            </p>

            <p>
              We combine modern design with useful technology to create
              websites and systems that are attractive, responsive and
              practical.
            </p>

            <ul className="check-list">
              <li>✓ Professional designs</li>
              <li>✓ Mobile-friendly websites</li>
              <li>✓ Business-focused solutions</li>
              <li>✓ Modern web technology</li>
            </ul>

            <Link href="/about" className="text-button">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process" id="process">
        <div className="section-heading">
          <div className="eyebrow">HOW IT WORKS</div>

          <h2>
            Simple process.
            <br />
            <span>Great results.</span>
          </h2>

          <p>
            We keep the process clear so you always know what happens
            next.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-item">
            <span>01</span>
            <h3>Discuss</h3>
            <p>
              Tell us about your business, idea and goals.
            </p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Plan</h3>
            <p>
              We organize the structure and functionality of your project.
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
              Your completed project is ready for your customers.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section portfolio" id="portfolio">
        <div className="section-heading">
          <div className="eyebrow">OUR WORK</div>

          <h2>
            Built with purpose.
            <br />
            <span>Designed to impress.</span>
          </h2>

          <p>
            Explore examples of the digital experiences we can create.
          </p>
        </div>

        <div className="portfolio-grid">
          <div className="project">
            <div className="project-image business-project">
              <div className="project-browser">
                <div className="project-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="project-body">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="project-info">
              <small>BUSINESS WEBSITE</small>

              <h3>Professional Business Website</h3>

              <p>
                A modern online presence designed around business goals.
              </p>
            </div>
          </div>

          <div className="project">
            <div className="project-image system-project">
              <div className="system-layout">
                <div className="system-sidebar"></div>

                <div className="system-content">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="project-info">
              <small>WEB APPLICATION</small>

              <h3>Custom Management System</h3>

              <p>
                A digital platform designed to simplify business
                operations.
              </p>
            </div>
          </div>

          <div className="project">
            <div className="project-image creative-project">
              <div className="creative-layout">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="project-info">
              <small>BRAND WEBSITE</small>

              <h3>Creative Digital Experience</h3>

              <p>
                A visually engaging website built around a strong brand.
              </p>
            </div>
          </div>
        </div>

        <div className="center-button">
          <Link href="/portfolio" className="primary-button">
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="cta-inner">
          <div>
            <div className="eyebrow">READY TO GO DIGITAL?</div>

            <h2>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>

            <p>
              Tell us what you need and let's create something
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