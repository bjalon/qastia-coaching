import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-purple-700">Coaching Pro</Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? 'text-purple-700 font-semibold' : 'text-gray-600'} end>
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/references" className={({isActive}) => isActive ? 'text-purple-700 font-semibold' : 'text-gray-600'}>
                                Références
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-purple-700 font-semibold' : 'text-gray-600'}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
