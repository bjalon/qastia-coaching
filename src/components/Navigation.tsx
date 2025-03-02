// src/components/Navigation.tsx.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                Accueil
            </NavLink>
            <NavLink to="/references" className={({ isActive }) => (isActive ? 'active' : '')}>
                Références
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contact
            </NavLink>
        </nav>
    );
};

export default Navigation;