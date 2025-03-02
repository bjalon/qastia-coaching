import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Accueil - Coaching Pro</title>
                <meta name="description" content="Découvrez nos services de coaching pour booster votre carrière et atteindre vos objectifs." />
                <meta property="og:title" content="Coaching Pro" />
                <meta property="og:description" content="Coaching professionnel pour booster votre carrière." />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <section className="text-center my-8">
                    <h1 className="text-4xl font-bold text-purple-700 mb-4">Bienvenue chez Coaching Pro</h1>
                    <p className="text-lg text-gray-700">
                        Transformez votre potentiel en succès grâce à notre expertise en coaching professionnel.
                    </p>
                </section>
                <section className="my-8">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-2">Nos Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-2">Coaching Individuel</h3>
                            <p className="text-gray-600">Des séances personnalisées pour booster votre carrière.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-2">Ateliers de Groupe</h3>
                            <p className="text-gray-600">Des ateliers interactifs pour développer vos compétences.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-2">Sessions de Suivi</h3>
                            <p className="text-gray-600">Un accompagnement continu pour atteindre vos objectifs.</p>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default Home;
