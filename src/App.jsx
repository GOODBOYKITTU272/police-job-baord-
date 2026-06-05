import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, HeartHandshake, Users, ChevronRight, Award, Globe, ChevronLeft, X, Mail } from 'lucide-react';

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const translations = {
  en: {
    policeTitle: "Siddipet Police",
    udyogaMitra: "UDYOGA MITRA",
    hrLogin: "HR / Company Login",
    jobSeekerSignUp: "Job Seeker Sign Up",
    initiative: "🤝 A SIDDIPET POLICE INITIATIVE",
    portalSubtitle: "Youth employment job portal",
    heroTitle1: "Empowering Youth.",
    heroTitle2: "Securing Our Future.",
    heroDesc: "The Siddipet Police Department believes that true public service extends beyond safety—it means uplifting our community. Udyoga Mitra is our flagship initiative to connect local talent directly with prestigious career opportunities across India's top sectors.",
    registerBtn: "Register for Jobs",
    commDesk: "From the Commissioner's Desk",
    commQuote: "\"Our youth are the foundation of tomorrow's society. By bridging the gap between talent and opportunity, we are not just providing jobs; we are building a safer, more prosperous Siddipet. We encourage every eligible candidate to seize this opportunity.\"",
    commName: "S.Rashmi Perumal, IPS",
    commTitle: "Commissioner of Police, Siddipet",
    oppTitleSmall: "Opportunities",
    oppTitleBig: "Unlocking Careers Across Key Sectors",
    itTitle: "Information Technology",
    itDesc: "Software Development, Data Analysis, and IT Support roles for engineering and computer science graduates.",
    bankTitle: "Banking & Finance",
    bankDesc: "Opportunities in retail banking, financial operations, and accounting for commerce and finance students.",
    skillTitle: "Skill Development & Core",
    skillDesc: "Manufacturing, logistics, and technical roles requiring specialized vocational training and diplomas.",
    commitSmall: "Our Commitment",
    commitBig: "How Udyoga Mitra Works",
    commFirstTitle: "Community First",
    commFirstDesc: "This employment drive is organized exclusively to uplift local talent, ensuring you get priority access to top employers.",
    directConnTitle: "Direct Connections",
    directConnDesc: "We are bringing top companies right to our district so you don't have to travel to major cities for interviews.",
    safeTransTitle: "Safe & Transparent",
    safeTransDesc: "Powered by Applywizz AI, the entire recruitment pipeline is merit-based, lightning-fast, and monitored by the police department.",
    techPartner: "Technology Partner:",
    copyright: "© 2026 Siddipet Police Department. All rights reserved.",
    helpdesk: "Helpdesk: 8712539949",
    termsTitle: "Disclaimer and Limitation of Liability",
    termsAgreeBtn: "I agree to the terms and conditions",
    termsList: [
      "The Siddipet Police Udyogamithra youth Employment job Portal is only a facilitation platform for connecting job seekers and employers.",
      "Siddipet Police Commissionerate and ApplyWizz Technologies Pvt. Ltd. do not guarantee employment, job placement, salary, service conditions, or selection of any candidate.",
      "Verification of credentials, recruitment, appointment, salary payment, and service conditions shall be the sole responsibility of the concerned employer and candidate.",
      "Siddipet Police Commissionerate shall not be responsible or liable for any employment-related disputes, fraud, misrepresentation, breach of contract, labour disputes, financial claims, or legal proceedings arising between employers and job seekers.",
      "Any dispute arising between employers and job seekers shall be resolved by the concerned parties, and Siddipet Police Commissionerate shall not be made a party to such disputes.",
      "This MoU does not create any employer-employee relationship between Siddipet Police Commissionerate, Enougher ApplyWizz  Pvt. Ltd., employers, and job seekers."
    ],
    marqueeText: "Siddipet Police Udyogamithra – Helping Hands for Employment. Register free and connect with genuine job opportunities. Your career journey starts here!"
  },
  te: {
    policeTitle: "సిద్దిపేట పోలీస్",
    udyogaMitra: "ఉద్యోగ మిత్ర",
    hrLogin: "HR / కంపెనీ లాగిన్",
    jobSeekerSignUp: "ఉద్యోగార్థి సైన్ అప్",
    initiative: "🤝 ఒక సిద్దిపేట పోలీస్ చొరవ",
    portalSubtitle: "యువత ఉపాధి జాబ్ పోర్టల్",
    heroTitle1: "యువత సాధికారత.",
    heroTitle2: "మన భవిష్యత్తుకు భద్రత.",
    heroDesc: "సిద్దిపేట పోలీస్ శాఖ నిజమైన ప్రజా సేవ భద్రతకు మించినదని నమ్ముతుంది—దీని అర్థం మన సమాజాన్ని ఉద్ధరించడం. భారతదేశపు అగ్రశ్రేణి రంగాలలో ప్రతిష్టాత్మకమైన కెరీర్ అవకాశాలతో స్థానిక ప్రతిభను నేరుగా అనుసంధానించే మా ప్రధాన చొరవ ఉద్యోగ మిత్ర.",
    registerBtn: "ఉద్యోగాల కోసం నమోదు చేసుకోండి",
    commDesk: "కమిషనర్ డెస్క్ నుండి",
    commQuote: "\"మన యువతే రేపటి సమాజానికి పునాది. ప్రతిభ మరియు అవకాశం మధ్య వారధిని నిర్మించడం ద్వారా, మేము కేవలం ఉద్యోగాలను అందించడమే కాదు; మరింత సురక్షితమైన, సంపన్నమైన సిద్దిపేటను నిర్మిస్తున్నాము. ప్రతి అర్హత గల అభ్యర్థి ఈ అవకాశాన్ని వినియోగించుకోవాలని మేము ప్రోత్సహిస్తున్నాము.\"",
    commName: "సాధన రష్మీ పెరుమాళ్, IPS",
    commTitle: "కమిషనర్ ఆఫ్ పోలీస్, సిద్దిపేట",
    oppTitleSmall: "అవకాశాలు",
    oppTitleBig: "కీలక రంగాలలో కెరీర్‌లను అన్‌లాక్ చేయడం",
    itTitle: "సమాచార సాంకేతిక విజ్ఞానం",
    itDesc: "ఇంజనీరింగ్ మరియు కంప్యూటర్ సైన్స్ గ్రాడ్యుయేట్‌ల కోసం సాఫ్ట్‌వేర్ డెవలప్‌మెంట్, డేటా అనాలిసిస్ మరియు ఐటీ సపోర్ట్ పాత్రలు.",
    bankTitle: "బ్యాంకింగ్ & ఫైనాన్స్",
    bankDesc: "కామర్స్ మరియు ఫైనాన్స్ విద్యార్థుల కోసం రిటైల్ బ్యాంకింగ్, ఫైనాన్షియల్ ఆపరేషన్స్ మరియు అకౌంటింగ్‌లో అవకాశాలు.",
    skillTitle: "స్కిల్ డెవలప్‌మెంట్ & కోర్",
    skillDesc: "ప్రత్యేక వృత్తి శిక్షణ మరియు డిప్లొమాలు అవసరమయ్యే తయారీ, లాజిస్టిక్స్ మరియు సాంకేతిక పాత్రలు.",
    commitSmall: "మా నిబద్ధత",
    commitBig: "ఉద్యోగ మిత్ర ఎలా పనిచేస్తుంది",
    commFirstTitle: "సమాజానికి ప్రాధాన్యత",
    commFirstDesc: "స్థానిక ప్రతిభను ఉద్ధరించడం కోసం ప్రత్యేకంగా ఈ ఉపాధి డ్రైవ్ నిర్వహించబడుతుంది, తద్వారా మీరు అగ్ర యజమానులకు ప్రాధాన్యతను పొందుతారు.",
    directConnTitle: "నేరుగా కనెక్షన్లు",
    directConnDesc: "ఇంటర్వ్యూల కోసం మీరు ప్రధాన నగరాలకు ప్రయాణించాల్సిన అవసరం లేకుండా మేము మా జిల్లాకే అగ్రశ్రేణి కంపెనీలను తీసుకువస్తున్నాము.",
    safeTransTitle: "సురక్షితం & పారదర్శకం",
    safeTransDesc: "అప్లైవిజ్ AI ద్వారా ఆధారితం, మొత్తం నియామక ప్రక్రియ ప్రతిభ-ఆధారితమైనది, అత్యంత వేగవంతమైనది మరియు పోలీస్ శాఖ ద్వారా పర్యవేక్షించబడుతుంది.",
    techPartner: "సాంకేతిక భాగస్వామి:",
    copyright: "© 2026 సిద్దిపేట పోలీస్ శాఖ. సర్వ హక్కులు ప్రత్యేకించబడినవి.",
    helpdesk: "హెల్ప్‌డెస్క్: 8712539949",
    termsTitle: "నిరాకరణ మరియు బాధ్యత పరిమితి",
    termsAgreeBtn: "నేను నిబంధనలు మరియు షరతులను అంగీకరిస్తున్నాను",
    termsList: [
      "సిద్దిపేట పోలీస్ ఉద్యోగమిత్ర యువ ఉపాధి జాబ్ పోర్టల్ అనేది ఉద్యోగార్థులు మరియు యజమానులను అనుసంధానించే కేవలం ఒక సులభతర వేదిక.",
      "సిద్దిపేట పోలీస్ కమీషనరేట్ మరియు అప్లైవిజ్ టెక్నాలజీస్ ప్రైవేట్ లిమిటెడ్ ఎలాంటి ఉద్యోగం, జాబ్ ప్లేస్‌మెంట్, జీతం, సేవా నిబంధనలు లేదా ఏ అభ్యర్థి ఎంపికకు హామీ ఇవ్వవు.",
      "వివరాల ధృవీకరణ, రిక్రూట్‌మెంట్, నియామకం, జీతం చెల్లింపు మరియు సేవా షరతులు సంబంధిత యజమాని మరియు అభ్యర్థి యొక్క పూర్తి బాధ్యత.",
      "యజమానులు మరియు ఉద్యోగార్థుల మధ్య తలెత్తే ఏవైనా ఉపాధి సంబంధిత వివాదాలు, మోసం, తప్పుడు ప్రాతినిధ్యం, కాంట్రాక్ట్ ఉల్లంఘన, కార్మిక వివాదాలు, ఆర్థిక వాదనలు లేదా చట్టపరమైన చర్యలకు సిద్దిపేట పోలీస్ కమీషనరేట్ బాధ్యత వహించదు.",
      "యజమానులు మరియు ఉద్యోగార్థుల మధ్య తలెత్తే ఏదైనా వివాదాన్ని సంబంధిత పార్టీలే పరిష్కరించుకోవాలి మరియు సిద్దిపేట పోలీస్ కమీషనరేట్‌ను అటువంటి వివాదాలకు భాగస్వామిగా చేయరాదు.",
      "ఈ అవగాహన ఒప్పందం (MoU) సిద్దిపేట పోలీస్ కమీషనరేట్, అప్లైవిజ్ టెక్నాలజీస్ ప్రైవేట్ లిమిటెడ్, యజమానులు మరియు ఉద్యోగార్థుల మధ్య ఎలాంటి యజమాని-ఉద్యోగి సంబంధాన్ని సృష్టించదు."
    ],
    marqueeText: "సిద్దిపేట పోలీస్ ఉద్యోగమిత్ర – ఉపాధికి చేయూత. ఉచితంగా నమోదు చేసుకోండి మరియు అసలైన ఉద్యోగ అవకాశాలతో కనెక్ట్ అవ్వండి. మీ కెరీర్ ప్రయాణం ఇక్కడే ప్రారంభమవుతుంది!"
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(new Array(6).fill(false));
  const t = translations[lang];

  const handleOpenTerms = (e) => {
    e.preventDefault();
    setShowTermsModal(true);
    setAgreedTerms(new Array(6).fill(false));
  };

  const allAgreed = agreedTerms.every(term => term === true);

  const handleAgreeAndProceed = () => {
    if (allAgreed) {
      window.location.href = "https://careers.applywizz.ai/signup";
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'te' : 'en');
  };

  // Carousel Logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/hero3.jpeg",
    "/hero2.jpeg",
    "/hero1.jpeg",
    "/hero4.jpeg",
    "/hero5.jpeg",
    "/hero6.jpeg",
    "/hero7.jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // auto-rotate every 4 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-wrapper">
          <div className="logo-section">
            <img src="/telanganapolicelogo.png" alt="Telangana Police Logo" className="police-logo" />
            <div className="logo-center">
              <span className="initiative-top-text">{t.initiative}</span>
              <div className="logo-text">
                <h1>{t.policeTitle}</h1>
                <span>{t.udyogaMitra}</span>
              </div>
              <span className="portal-subtitle">{t.portalSubtitle}</span>
            </div>
            <img src="/surakshalogo1.png" alt="Siddipet Police Logo" className="police-logo right-logo" />
          </div>
        </div>
        <div className="nav-actions">
          <button
            onClick={toggleLanguage}
            className="btn lang-btn"
          >
            <Globe size={18} /> {lang === 'en' ? 'తెలుగు' : 'English'}
          </button>
          <a href="https://careers.applywizz.ai/signup" className="btn btn-primary">{t.hrLogin}</a>
          <button onClick={handleOpenTerms} className="btn btn-accent">{t.jobSeekerSignUp}</button>
        </div>
      </nav>

      {/* Scrolling Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>{t.marqueeText}</span>
        </div>
      </div>

      {/* Photo Carousel */}
      <section className="carousel-section">
        <div className="carousel-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}

          <button className="carousel-btn prev" onClick={prevSlide}>
            <ChevronLeft size={32} />
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            <ChevronRight size={32} />
          </button>

          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hero Content - Split Layout Without Image (Now pushed below carousel) */}
      <section className="hero">

        {/* Left Column: Main Messaging */}
        <div className="hero-content">
          <h2>{t.heroTitle1}<br />{t.heroTitle2}</h2>
          <p className="hero-description">
            {lang === 'en' ? (
              <>
                The Siddipet Police Department believes that true public service extends beyond safety—it means uplifting our community.
                <strong> Udyoga Mitra</strong> is our flagship initiative to connect local talent directly with prestigious career opportunities across India's top sectors.
              </>
            ) : (
              <>
                సిద్దిపేట పోలీస్ శాఖ నిజమైన ప్రజా సేవ భద్రతకు మించినదని నమ్ముతుంది—దీని అర్థం మన సమాజాన్ని ఉద్ధరించడం.
                <strong> ఉద్యోగ మిత్ర</strong> భారతదేశపు అగ్రశ్రేణి రంగాలలో ప్రతిష్టాత్మకమైన కెరీర్ అవకాశాలతో స్థానిక ప్రతిభను నేరుగా అనుసంధానించే మా ప్రధాన చొరవ.
              </>
            )}
          </p>
          <div className="hero-actions">
            <button onClick={handleOpenTerms} className="btn btn-accent">
              {t.registerBtn} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>

        {/* Right Column: The Commissioner's Message */}
        <div className="status-card">
          <div className="card-header">
            <Award color="#D4AF37" size={32} />
            <h3>{t.commDesk}</h3>
          </div>
          <blockquote className="commissioner-quote">
            {t.commQuote}
          </blockquote>
          <div className="card-footer">
            <div className="commissioner-name-row">
              <p className="commissioner-name">{t.commName}</p>
              <a
                href="https://www.instagram.com/siddipet_police_commisionerate?igsh=MWZzaDV2NGY0MGZpag=="
                target="_blank"
                rel="noopener noreferrer"
                className="comm-social-link"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
            <p className="commissioner-title">{t.commTitle}</p>
          </div>
        </div>
      </section>

      {/* Sectors and Opportunities */}
      <section className="features" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="section-header">
          <p>{t.oppTitleSmall}</p>
          <h2>{t.oppTitleBig}</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card sector-card">
            <h4><ChevronRight color="#D4AF37" /> {t.itTitle}</h4>
            <p>{t.itDesc}</p>
          </div>
          <div className="feature-card sector-card">
            <h4><ChevronRight color="#D4AF37" /> {t.bankTitle}</h4>
            <p>{t.bankDesc}</p>
          </div>
          <div className="feature-card sector-card">
            <h4><ChevronRight color="#D4AF37" /> {t.skillTitle}</h4>
            <p>{t.skillDesc}</p>
          </div>
        </div>
      </section>

      {/* Process / Sectors */}
      <section className="features" style={{ borderTop: 'none', paddingTop: '2rem' }}>
        <div className="section-header">
          <p>{t.commitSmall}</p>
          <h2>{t.commitBig}</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <HeartHandshake size={28} />
            </div>
            <h4>{t.commFirstTitle}</h4>
            <p>{t.commFirstDesc}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Users size={28} />
            </div>
            <h4>{t.directConnTitle}</h4>
            <p>{t.directConnDesc}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Shield size={28} />
            </div>
            <h4>{t.safeTransTitle}</h4>
            <p>{t.safeTransDesc}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="powered-by" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div>
              {t.techPartner} <a href="https://www.applywizz.ai/" target="_blank" rel="noopener noreferrer">Applywizz AI</a>
            </div>
            <a href="mailto:support@applywizz.ai" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
              support@applywizz.ai
            </a>
          </div>
          <div className="footer-center">
            <div>
              {t.copyright}
            </div>
            <div className="social-links">
              <a href="https://x.com/siddipetcp" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X / Twitter">
                <TwitterIcon />
              </a>
              <a href="https://www.instagram.com/siddipet_police_commisionerate?igsh=MWZzaDV2NGY0MGZpag==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/share/1HmzZ8JS2J/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="mailto:siddipetpoliceudyogamitra@gmail.com" className="social-icon" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            {t.helpdesk}
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="modal-overlay" onClick={() => setShowTermsModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowTermsModal(false)} aria-label="Close">
              <X size={24} />
            </button>
            <h2>{t.termsTitle}</h2>
            <div className="terms-list">
              <ol>
                {t.termsList.map((term, index) => (
                  <li key={index} className="term-item">
                    <label className="term-checkbox-label">
                      <span>{term}</span>
                      <input
                        type="checkbox"
                        checked={agreedTerms[index]}
                        onChange={(e) => {
                          const newTerms = [...agreedTerms];
                          newTerms[index] = e.target.checked;
                          setAgreedTerms(newTerms);
                        }}
                      />
                    </label>
                  </li>
                ))}
              </ol>
            </div>

            <button
              className={`btn ${allAgreed ? 'btn-accent' : 'btn-disabled'}`}
              onClick={handleAgreeAndProceed}
              disabled={!allAgreed}
              style={{ width: '100%', padding: '1rem', fontSize: '1.05rem', marginTop: '1rem' }}
            >
              {t.termsAgreeBtn}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
