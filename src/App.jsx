import React, { useState } from 'react';
import { Shield, ArrowRight, HeartHandshake, Users, ChevronRight, Award, Globe } from 'lucide-react';

const translations = {
  en: {
    policeTitle: "Siddipet Police",
    udyogaMitra: "UDYOGA MITRA",
    hrLogin: "HR / Company Login",
    jobSeekerSignUp: "Job Seeker Sign Up",
    initiative: "🤝 A SIDDIPET POLICE INITIATIVE",
    heroTitle1: "Empowering Youth.",
    heroTitle2: "Securing Our Future.",
    heroDesc: "The Siddipet Police Department believes that true public service extends beyond safety—it means uplifting our community. Udyoga Mitra is our flagship initiative to connect local talent directly with prestigious career opportunities across India's top sectors.",
    registerBtn: "Register for Jobs",
    commDesk: "From the Commissioner's Desk",
    commQuote: "\"Our youth are the foundation of tomorrow's society. By bridging the gap between talent and opportunity, we are not just providing jobs; we are building a safer, more prosperous Siddipet. We encourage every eligible candidate to seize this opportunity.\"",
    commName: "Sadhana Rashmi Perumal, IPS",
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
    helpdesk: "Helpdesk: 100"
  },
  te: {
    policeTitle: "సిద్దిపేట పోలీస్",
    udyogaMitra: "ఉద్యోగ మిత్ర",
    hrLogin: "HR / కంపెనీ లాగిన్",
    jobSeekerSignUp: "ఉద్యోగార్థి సైన్ అప్",
    initiative: "🤝 ఒక సిద్దిపేట పోలీస్ చొరవ",
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
    helpdesk: "హెల్ప్‌డెస్క్: 100"
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'te' : 'en');
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-wrapper">
          <span className="initiative-top-text">{t.initiative}</span>
          <div className="logo-section">
            <img src="/telanganapolicelogo.png" alt="Telangana Police Logo" className="police-logo left-logo" />
            <div className="logo-text">
              <h1>{t.policeTitle}</h1>
              <span>{t.udyogaMitra}</span>
            </div>
            <img src="/siddipetpolicelogo.png" alt="Siddipet Police Logo" className="police-logo right-logo" />
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
          <a href="https://careers.applywizz.ai/signup" className="btn btn-accent">{t.jobSeekerSignUp}</a>
        </div>
      </nav>

      {/* Hero Content - Split Layout Without Image */}
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
            <a href="https://careers.applywizz.ai/signup" className="btn btn-accent">
              {t.registerBtn} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
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
            <p className="commissioner-name">{t.commName}</p>
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
          <div className="powered-by">
            {t.techPartner} <a href="https://www.applywizz.ai/" target="_blank" rel="noopener noreferrer">Applywizz AI</a>
          </div>
          <div>
            {t.copyright}
          </div>
          <div>
            {t.helpdesk} | support@applywizz.ai
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
