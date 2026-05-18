import React from 'react';
import { Shield, ArrowRight, HeartHandshake, Users, ChevronRight, Award } from 'lucide-react';

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-section">
          <Shield className="police-logo" color="#D4AF37" size={40} />
          <div className="logo-text">
            <h1>Siddipet Police</h1>
            <span>UDYOGA MITRA 2026</span>
          </div>
        </div>
        <div className="nav-actions">
          <a href="https://careers.applywizz.ai/signup" className="btn btn-primary">HR / Company Login</a>
          <a href="https://careers.applywizz.ai/signup" className="btn btn-accent">Job Seeker Sign Up</a>
        </div>
      </nav>

      {/* Hero Content - Split Layout Without Image */}
      <section className="hero">
        
        {/* Left Column: Main Messaging */}
        <div className="hero-content">
          <div className="hero-badge">🤝 A SIDDIPET POLICE INITIATIVE</div>
          <h2>Empowering Youth.<br/>Securing Our Future.</h2>
          <p className="hero-description">
            The Siddipet Police Department believes that true public service extends beyond safety—it means uplifting our community. 
            <strong> Udyoga Mitra</strong> is our flagship initiative to connect local talent directly with prestigious career opportunities across India's top sectors. 
          </p>
          <div className="hero-actions">
            <a href="https://careers.applywizz.ai/signup" className="btn btn-accent">
              Register for Job Mela <ArrowRight size={20} style={{marginLeft: '8px'}} />
            </a>
          </div>
        </div>

        {/* Right Column: The Commissioner's Message */}
        <div className="status-card">
          <div className="card-header">
            <Award color="#D4AF37" size={32} />
            <h3>From the Commissioner's Desk</h3>
          </div>
          <blockquote className="commissioner-quote">
            "Our youth are the foundation of tomorrow's society. By bridging the gap between talent and opportunity, we are not just providing jobs; we are building a safer, more prosperous Siddipet. We encourage every eligible candidate to seize this opportunity."
          </blockquote>
          <div className="card-footer">
            <p className="commissioner-name">Sadhana Rashmi Perumal, IPS</p>
            <p className="commissioner-title">Commissioner of Police, Siddipet</p>
          </div>
        </div>
      </section>

      {/* Sectors and Opportunities */}
      <section className="features" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="section-header">
          <p>Opportunities</p>
          <h2>Unlocking Careers Across Key Sectors</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card sector-card">
            <h4><ChevronRight color="#D4AF37"/> Information Technology</h4>
            <p>Software Development, Data Analysis, and IT Support roles for engineering and computer science graduates.</p>
          </div>
          <div className="feature-card sector-card">
            <h4><ChevronRight color="#D4AF37"/> Banking & Finance</h4>
            <p>Opportunities in retail banking, financial operations, and accounting for commerce and finance students.</p>
          </div>
          <div className="feature-card sector-card">
            <h4><ChevronRight color="#D4AF37"/> Skill Development & Core</h4>
            <p>Manufacturing, logistics, and technical roles requiring specialized vocational training and diplomas.</p>
          </div>
        </div>
      </section>

      {/* Process / Sectors */}
      <section className="features" style={{ borderTop: 'none', paddingTop: '2rem' }}>
        <div className="section-header">
          <p>Our Commitment</p>
          <h2>How Udyoga Mitra Works</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <HeartHandshake size={28} />
            </div>
            <h4>Community First</h4>
            <p>This employment drive is organized exclusively to uplift local talent, ensuring you get priority access to top employers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Users size={28} />
            </div>
            <h4>Direct Connections</h4>
            <p>We are bringing top companies right to our district so you don't have to travel to major cities for interviews.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Shield size={28} />
            </div>
            <h4>Safe & Transparent</h4>
            <p>Powered by Applywizz AI, the entire recruitment pipeline is merit-based, lightning-fast, and monitored by the police department.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="powered-by">
            Technology Partner: <a href="https://www.applywizz.ai/" target="_blank" rel="noopener noreferrer">Applywizz AI</a>
          </div>
          <div>
            &copy; 2026 Siddipet Police Department. All rights reserved.
          </div>
          <div>
            Helpdesk: 100 | support@applywizz.ai
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
