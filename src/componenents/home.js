import React from "react";
import "./home.css";


import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav=useNavigate();
  const nav2=useNavigate();

  return (
    <>
    <section class="hero" id="home">
        <div class="container hero-content">
            <h1>EXCLUSIVE CAR FOR YOUR SPECIAL OCCASION!</h1>
            <p>Découvrez notre collection de voitures de luxe pour rendre chaque moment inoubliable. Service premium et expérience sur mesure.</p>
            <div class="hero-btns">
                <button class="btn-primary" id="bookNowBtn" onClick={() => nav("/services")}>
                    <i class="fas fa-car"></i>
                    NOTRE COLLECTION
                </button>
                <button class="btn-secondary" id="collectionBtn"  onClick={() => nav2("/contact")}> RÉSERVER MAINTENANT</button>
            </div>
        </div>
        
        

    </section>
    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">NOS SERVICES</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-car-side"></i>
                    </div>
                    <h3>Location de Luxe</h3>
                    <p>Choisissez parmi notre sélection exclusive de véhicules haut de gamme pour toutes vos occasions spéciales.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-concierge-bell"></i>
                    </div>
                    <h3>Service Chauffeur</h3>
                    <p>Profitez d'un service chauffeur professionnel pour vous conduire en toute élégance et sécurité.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Assurance Complète</h3>
                    <p>Une couverture d'assurance complète pour votre tranquillité d'esprit pendant toute la durée de location.</p>
                </div>
            </div>
        </div>
    </section>

    
    </>
    
  );
}
