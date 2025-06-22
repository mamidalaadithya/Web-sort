import React, { useState, useEffect } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'industries', 'careers', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  const services = [
    {
      id: 1,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Cloud Services",
      description: "Comprehensive cloud solutions including migration, management, and optimization.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "AI & Automation",
      description: "Intelligent automation solutions powered by AI and machine learning.",
      image: "https://images.unsplash.com/photo-1677442135136-760c813a743e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const industries = [
    {
      id: 1,
      name: "Banking & Finance",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      name: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      name: "Manufacturing",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <span className="logo-text">Web Sort</span>
            <span className="tagline"> Your Vision Our Design</span>
          </div>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <div 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
              onClick={() => scrollToSection('home')}
            >
              Home
            </div>
            <div 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
              onClick={() => scrollToSection('about')}
            >
              About Us
            </div>
            <div 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} 
              onClick={() => scrollToSection('services')}
            >
              Services
            </div>
            <div 
              className={`nav-link ${activeSection === 'industries' ? 'active' : ''}`} 
              onClick={() => scrollToSection('industries')}
            >
              Industries
            </div>
            <div 
              className={`nav-link ${activeSection === 'careers' ? 'active' : ''}`} 
              onClick={() => scrollToSection('careers')}
            >
              Careers
            </div>
            <div 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </div>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Digital transformation" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Digital Transformation,<br />Intelligent Experience</h1>
            <p>We help businesses reimagine and transform through technology</p>
            <div className="hero-actions">
              <div className="action-link" onClick={() => scrollToSection('services')}>
                Explore Our Services
              </div>
              <div className="action-link" onClick={() => scrollToSection('contact')}>
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About TechVision</h2>
            <p className="section-subtitle">Driving innovation and excellence in technology solutions</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>TechVision is a leading global technology solutions provider, helping enterprises accelerate their digital transformation journey. With our deep domain expertise and innovative approach, we deliver cutting-edge solutions that drive business growth.</p>
              <p>Founded in 2010, we've grown from a small startup to a trusted partner for Fortune 500 companies and innovative startups alike. Our team of experts combines technical excellence with business acumen to deliver measurable results.</p>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Clients Worldwide</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Employees</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="TechVision team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p className="section-subtitle">Comprehensive solutions for your digital needs</p>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <div className="service-card" key={service.id}>
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="learn-more-link" onClick={() => scrollToSection('contact')}>
                    Learn More →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="industries">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p className="section-subtitle">Tailored solutions for diverse industry needs</p>
          </div>
          <div className="industries-grid">
            {industries.map(industry => (
              <div className="industry-card" key={industry.id}>
                <div className="industry-image-container">
                  <img src={industry.image} alt={industry.name} className="industry-image" />
                  <div className="industry-overlay"></div>
                </div>
                <h3>{industry.name}</h3>
                <div className="explore-link" onClick={() => scrollToSection('contact')}>
                  Explore Solutions →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="careers">
        <div className="container">
          <div className="section-header">
            <h2>Careers at TechVision</h2>
            <p className="section-subtitle">Join our team of innovators and problem solvers</p>
          </div>
          <div className="careers-content">
            <div className="careers-text">
              <h3>Why Work With Us?</h3>
              <p>At TechVision, we believe our people are our greatest asset. We offer a dynamic work environment, opportunities for growth, and the chance to work on cutting-edge technologies.</p>
              <ul className="benefits-list">
                <li>Competitive salaries and comprehensive benefits</li>
                <li>Flexible work arrangements and remote options</li>
                <li>Continuous learning and professional development</li>
                <li>Global projects with industry-leading clients</li>
              </ul>
              <div className="careers-actions">
                <div className="action-link" onClick={() => scrollToSection('contact')}>
                  View Open Positions
                </div>
                <div className="action-link" onClick={() => scrollToSection('contact')}>
                  Our Culture
                </div>
              </div>
            </div>
            <div className="careers-image-container">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="TechVision careers"
                className="careers-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p className="section-subtitle">Get in touch with our team</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <h3>Headquarters</h3>
                <p>123 Tech Boulevard<br />San Francisco, CA 94107<br />United States</p>
              </div>
              <div className="info-card">
                <h3>Email Us</h3>
                <p>info@techvision.com<br />sales@techvision.com</p>
              </div>
              <div className="info-card">
                <h3>Call Us</h3>
                <p>+1 (800) 123-4567<br />Mon-Fri, 9am-6pm EST</p>
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Enter your name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Enter your email" 
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Enter subject" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Enter your message" 
                    required
                  ></textarea>
                </div>
                <div className="submit-link" onClick={() => alert('Message sent!')}>
                  Send Message
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-logo">
                <span className="logo-text">TechVision</span>
                <span className="tagline">Sort Your Vision, Our Design</span>
                <p className="footer-description">
                  Transforming businesses through innovative technology solutions since 2010.
                </p>
              </div>
              <div className="footer-links">
                <div className="links-column">
                  <h4>Company</h4>
                  <div className="footer-link" onClick={() => scrollToSection('about')}>About Us</div>
                  <div className="footer-link" onClick={() => scrollToSection('services')}>Services</div>
                  <div className="footer-link" onClick={() => scrollToSection('industries')}>Industries</div>
                  <div className="footer-link" onClick={() => scrollToSection('careers')}>Careers</div>
                </div>
                <div className="links-column">
                  <h4>Resources</h4>
                  <div className="footer-link">Blog</div>
                  <div className="footer-link">Case Studies</div>
                  <div className="footer-link">Whitepapers</div>
                  <div className="footer-link">Webinars</div>
                </div>
                <div className="links-column">
                  <h4>Legal</h4>
                  <div className="footer-link">Privacy Policy</div>
                  <div className="footer-link">Terms of Service</div>
                  <div className="footer-link">Cookie Policy</div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="copyright">
                &copy; {new Date().getFullYear()} TechVision. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;