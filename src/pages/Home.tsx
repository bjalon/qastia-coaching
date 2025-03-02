// src/pages/Home.tsx
import React from 'react';
import '../styles/home.css';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <h2>Notre Offre de Coaching</h2>
            <section className="offer-section">
                <div className="offer-card">
                    <h3>Coaching Individuel</h3>
                    <p>Un accompagnement personnalisé pour atteindre vos objectifs professionnels</p>
                </div>
                <div className="offer-card">
                    <h3>Coaching d'Équipe</h3>
                    <p>Renforcez la cohésion et l'efficacité de votre équipe</p>
                </div>
            </section>
        </div>
    );
};

export default Home;