import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const References: React.FC = () => {
    // Exemple de données de témoignages
    const testimonials = [
        { id: 1, name: 'Alice', comment: 'Grâce à Qastia Coaching, j’ai atteint mes objectifs professionnels !' },
        { id: 2, name: 'Bob', comment: 'Une approche personnalisée et très professionnelle.' },
        { id: 3, name: 'Charlie', comment: 'Les séances m’ont permis de prendre confiance en moi et de réussir.' },
    ];

    return (
        <>
            <Helmet>
                <title>Références - Coaching Pro</title>
                <meta name="description" content="Découvrez les témoignages de nos clients et leur succès grâce à notre coaching professionnel." />
                <meta property="og:title" content="Références - Coaching Pro" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <section className="text-center my-8">
                    <h1 className="text-4xl font-bold text-purple-700 mb-4">Ils nous font confiance</h1>
                    <p className="text-lg text-gray-700">Découvrez quelques témoignages de clients satisfaits.</p>
                </section>
                <section className="my-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
                                <p className="text-gray-600 italic mb-2">&quot;{testimonial.comment}&quot;</p>
                                <p className="text-purple-700 font-semibold">- {testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default References;
