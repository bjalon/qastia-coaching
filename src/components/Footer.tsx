import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 py-4 mt-8">
            <div className="container mx-auto text-center text-gray-600">
                &copy; {new Date().getFullYear()} Qastia Coaching. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;
