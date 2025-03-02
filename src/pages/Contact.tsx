// src/pages/Contact.tsx
import React from 'react';
import '../styles/contact.css';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <h2>Nous Contacter</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" required></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;