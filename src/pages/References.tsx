import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const References: React.FC = () => {
    const navigate = useNavigate();
    // Exemple de données de témoignages
    const testimonials = [
        { id: 1, name: 'Alice', comment: 'Grâce à Qastia Coaching, j’ai atteint mes objectifs professionnels !' },
        { id: 2, name: 'Bob', comment: 'Une approche personnalisée et très professionnelle.' },
        { id: 3, name: 'Charlie', comment: 'Les séances m’ont permis de prendre confiance en moi et de réussir.' },
    ];

    return (
        <>
            <Helmet>
                <title>Références - Qastia Coaching</title>
                <meta name="description" content="Découvrez qui nous sommes et les témoignages de nos clients et leur succès grâce à notre coaching professionnel." />
                <meta property="og:title" content="Références - Qastia Coaching" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <section className="text-center my-8">
                    <h1 className="text-4xl font-bold text-purple-700 mb-4">À propos de moi</h1>
                    <p className="text-lg text-gray-700">
                        De l'enseignement au coaching, un parcours dédié à la transmission et au développement personnel.
                    </p>
                    {/*<img src="https://source.unsplash.com/featured/?leadership,teaching" alt="Coaching Leadership" className="mx-auto mt-4 rounded shadow-lg w-full md:w-3/4" />*/}
                </section>

                {/* Mon parcours */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-4">Mon Parcours : De l'enseignement au Coaching</h2>
                    <p className="text-gray-700">
                        Ancienne professeure de français et cheffe d’établissement, j’ai développé une expertise unique dans
                        la transmission du savoir, la gestion d’équipe et le développement des talents. Aujourd’hui, je mets
                        cette expérience au service du coaching en leadership et en développement professionnel.
                    </p>
                    {/*<img src="https://source.unsplash.com/featured/?education,leadership" alt="Enseignement et leadership" className="mx-auto mt-4 rounded shadow-lg w-full md:w-3/4" />*/}
                </section>

                {/* Expérience en leadership */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-4">Le Leadership dans l'Éducation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Gestion d'équipes", img: "teamwork", desc: "Encadrer et motiver des équipes pédagogiques." },
                            { title: "Stratégie et Vision", img: "strategy", desc: "Définir des orientations et piloter le changement." },
                            { title: "Prise de Décision", img: "decision", desc: "Faire face aux défis et prendre des décisions stratégiques." },
                            { title: "Culture de l’Excellence", img: "growth", desc: "Encourager l’initiative et l’autonomie." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow"
                                whileHover={{ scale: 1.05 }}
                            >
                                {/*<img src={`https://source.unsplash.com/featured/?${item.img}`} alt={item.title} className="w-full h-40 object-cover rounded mb-2" />*/}
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Mon approche en coaching */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-4">Pourquoi le Coaching ?</h2>
                    <p className="text-gray-700">
                        Accompagner, guider, révéler : trois piliers qui m’animent dans ma mission de coaching.
                        Mon approche repose sur l’écoute active, une pédagogie adaptée et des outils concrets
                        pour structurer votre évolution.
                    </p>
                    {/*<img src="https://source.unsplash.com/featured/?coaching,mentoring" alt="Coaching" className="mx-auto mt-4 rounded shadow-lg w-full md:w-3/4" />*/}
                </section>

                {/* Valeurs et engagement */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-4">Mes Valeurs et Engagements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Bienveillance & Écoute", img: "empathy", desc: "Un accompagnement personnalisé et respectueux de chaque individu." },
                            { title: "Méthodes Structurées", img: "planning", desc: "Des outils éprouvés pour assurer un développement efficace." },
                            { title: "Éthique & Confidentialité", img: "trust", desc: "Un cadre de coaching sécurisé et aligné avec vos besoins." }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow"
                                whileHover={{ scale: 1.05 }}
                            >
                                {/*<img src={`https://source.unsplash.com/featured/?${value.img}`} alt={value.title} className="w-full h-40 object-cover rounded mb-2" />*/}
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Call to action */}
                <section className="text-center my-8">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-4">Prêt à Transformer votre Leadership ?</h2>
                    <p className="text-gray-700">
                        Réservez une session de coaching dès aujourd’hui et découvrez comment activer votre plein potentiel.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition"
                        onClick={() => navigate("/contact")}
                    >
                        Prendre Rendez-vous
                    </motion.button>
                </section>

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
