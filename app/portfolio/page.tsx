import Link from "next/link";

export default function PortfolioPage() {
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
            <span></span> OUR PORTFOLIO
          </div>

          <h1>
            Ideas turned into
            <br />
            <span>digital experiences.</span>
          </h1>

          <p>
            Explore examples of the websites, applications and digital
            experiences we can create for businesses and organizations.
          </p>

          <div
            className="hero-buttons"
            style={{ justifyContent: "center" }}
          >
            <Link href="/contact" className="primary-button">
              Start Your Project →
            </Link>

            <Link href="/services" className="secondary-button">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section portfolio">
        <div className="section-heading">
          <div className="eyebrow">SELECTED WORK</div>

          <h2>
            Designed with purpose.
            <br />
            <span>Built for impact.</span>
          </h2>

          <p>
            These portfolio examples demonstrate the types of digital
            experiences Mbazudde WebExperts can create.
          </p>
        </div>

        <div className="portfolio-grid">
          {/* PROJECT 1 */}
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

              <h3>Business Growth Website</h3>

              <p>
                A clean and professional website designed to introduce a
                business, explain its services and convert visitors into
                customers.
              </p>

              <Link href="/contact">
                Build Something Similar →
              </Link>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="project">
            <div className="project-image creative-project">
              <div className="creative-layout">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="project-info">
              <small>CREATIVE WEBSITE</small>

              <h3>Creative Brand Experience</h3>

              <p>
                A visually engaging website focused on strong branding,
                presentation and memorable digital experiences.
              </p>

              <Link href="/contact">
                Create Your Brand Website →
              </Link>
            </div>
          </div>

          {/* PROJECT 3 */}
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

              <h3>Management Dashboard</h3>

              <p>
                A custom dashboard concept designed to organize information,
                monitor activities and simplify business operations.
              </p>

              <Link href="/contact">
                Build Your System →
              </Link>
            </div>
          </div>

          {/* PROJECT 4 */}
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
              <small>ORGANIZATION WEBSITE</small>

              <h3>Professional Organization Site</h3>

              <p>
                A structured online presence for an organization that needs
                to communicate its services, information and contact details.
              </p>

              <Link href="/contact">
                Start Your Website →
              </Link>
            </div>
          </div>

          {/* PROJECT 5 */}
          <div className="project">
            <div className="project-image creative-project">
              <div className="creative-layout">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="project-info">
              <small>LANDING PAGE</small>

              <h3>Modern Product Landing Page</h3>

              <p>
                A focused landing page created to present a product or
                service clearly and encourage visitors to take action.
              </p>

              <Link href="/contact">
                Create Your Landing Page →
              </Link>
            </div>
          </div>

          {/* PROJECT 6 */}
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
              <small>CUSTOM PLATFORM</small>

              <h3>Custom Digital Platform</h3>

              <p>
                A flexible digital platform concept designed around specific
                workflows, users and business requirements.
              </p>

              <Link href="/contact">
                Discuss Your Platform →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section why">
        <div className="why-grid">
          <div>
            <div className="eyebrow">WHAT WE CAN BUILD</div>

            <h2>
              Digital products
              <br />
              <span>for different needs.</span>
            </h2>

            <p>
              Whether you need a simple website or a more advanced digital
              system, we can design a solution around your objectives.
            </p>
          </div>

          <div className="why-item">
            <strong>01</strong>

            <div>
              <h3>Business Websites</h3>
              <p>
                Professional websites that help businesses establish a
                strong online presence.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>02</strong>

            <div>
              <h3>Web Applications</h3>
              <p>
                Interactive applications designed around specific users and
                business processes.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>03</strong>

            <div>
              <h3>Management Systems</h3>
              <p>
                Digital systems for managing information, operations and
                reporting.
              </p>
            </div>
          </div>

          <div className="why-item">
            <strong>04</strong>

            <div>
              <h3>Digital Experiences</h3>
              <p>
                Creative online experiences that communicate brands and
                ideas effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process">
        <div className="section-heading">
          <div className="eyebrow">BUILD WITH US</div>

          <h2>
            Your project could be
            <br />
            <span>our next creation.</span>
          </h2>

          <p>
            Tell us what you want to build and we will help turn the idea
            into a professional digital experience.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-item">
            <span>01</span>
            <h3>Tell Us</h3>
            <p>
              Share your business, idea and what you want your website or
              system to achieve.
            </p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Plan</h3>
            <p>
              We discuss the structure, features and direction of your
              project.
            </p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Build</h3>
            <p>
              We create the design and functionality around your
              requirements.
            </p>
          </div>

          <div className="process-item">
            <span>04</span>
            <h3>Launch</h3>
            <p>
              Your completed digital solution is prepared for your audience.
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
              Let's build your
              <br />
              <span>next digital experience.</span>
            </h2>

            <p>
              Have an idea for a website, application or business system?
              Let's talk.
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