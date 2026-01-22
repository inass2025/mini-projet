import "./About.css";
import {Link} from 'react-router-dom'
export default function About() {
  return (
    <>
    <div className='about-page'>
      <div className="hero">
        <h1>About Us</h1>
        <div className="breadcrumb">
          <a href="#">Accueil</a> / À Propos
        </div>
      </div>

      <div className="container">
        <div className="about-section">
          <div className="about-image"></div>

          <div className="about-content">
            <h3>About Us</h3>
            <h2>Nous Offrons Toujours Le Meilleur Service</h2>
            <p>
              Avec plus de 20 ans d'expérience dans la location de véhicules,
              nous proposons une flotte diversifiée de voitures de qualité
              supérieure pour répondre à tous vos besoins.
            </p>
            <Link to="/contact" className="btn">Contactez-Nous</Link>

          </div>
        </div>

        <div className="skills-section">
          <div className="skills-header">
            <h2>Nos Atouts</h2>
            <p>
              Nous excellons dans tous les aspects de la location de véhicules,
              offrant un service professionnel et personnalisé.
            </p>
          </div>

          <div className="skills-grid">
            <div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">Service Client</span>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">Qualité des Véhicules</span>
                  <span className="skill-percentage">92%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "92%" }}></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">Flexibilité</span>
                  <span className="skill-percentage">88%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "88%" }}></div>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Années d'Expérience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Véhicules</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Clients Satisfaits</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15</div>
                <div className="stat-label">Agences</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h3>Réservez Maintenant</h3>
          <h2>
            Nous Sommes Toujours Prêts À <br /> Vous Servir
          </h2>
          <Link to="/services" className="btn">Commencer</Link>
        </div>
      </div>
      </div>
    </>
  );
}
