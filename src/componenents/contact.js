import "./contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact" id="contacts">
        <div className="container">
          <h2 className="section-title">CONTACTEZ-NOUS</h2>

          <div className="contact-container">
            {/* LEFT SIDE INFO */}
            <div className="contact-info">
              <h3>Réservation & Informations</h3>
              <p>
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous aider à choisir le véhicule parfait pour votre occasion spéciale.
              </p>

              <div className="contact-details">

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4>Adresse</h4>
                    <p>123 Avenue des Champs-Élysées, 75008 Paris</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4>Téléphone</h4>
                    <p>+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>contact@luxecar.fr</p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="contact-form">
              <form id="contactForm">

                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input type="text" id="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" required />
                </div>

                <div className="form-group">
                  <label htmlFor="car">Véhicule d'intérêt</label>
                  <select id="car">
                    <option value="">Sélectionnez un modèle</option>
                    <option value="mercedes">dacia duster</option>
                    <option value="range">ducia 2026</option>
                    <option value="porsche">Porsche 911 Turbo S</option>
                    <option value="other">ford f-150</option>
                    <option value="other">ford edge st</option>
                    <option value="other">ferrari</option>
                    <option value="other">marcedes</option>
                    <option value="other">marcedes g class</option>
                    <option value="other">auddi</option>
                    <option value="other">porche 911</option>
                    <option value="other">golf</option>
                   
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4"></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                  <i className="fas fa-paper-plane"></i> ENVOYER LA DEMANDE
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
