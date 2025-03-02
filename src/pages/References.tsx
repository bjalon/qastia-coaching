// src/pages/References.tsx
import React from 'react';
import '../styles/references.css';

const References: React.FC = () => {
    return (
        <div className="references-page">
            <h2>Nos Références</h2>
            <ul className="reference-list">
                <li>Entreprise A - Transformation digitale (2023)</li>
                <li>Entreprise B - Leadership training (2022-2024)</li>
                <li>Entreprise C - Coaching exécutif (2021)</li>
            </ul>
        </div>
    );
};

export default References;
