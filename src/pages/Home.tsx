import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import img1 from '../assets/image-1.jpg'
import img2 from '../assets/image-2.png'
import img3 from '../assets/image-3.png'
import img4 from '../assets/image-4.png'
import img5 from '../assets/image-7.png'
import img6 from '../assets/image-6.png'
import img7 from '../assets/image-7.png'

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Accueil - Qastia Coaching</title>
                <meta name="description" content="Coaching en leadership et développement professionnel pour entrepreneurs, salariés, dirigeants et étudiants." />
                <meta property="og:title" content="Qastia Coaching" />
                <meta property="og:description" content="Coaching en leadership et développement personnel sur-mesure." />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-4 py-8"
            >
                {/* Section Accueil */}
                <section className="text-center my-8">
                    <h1 className="text-4xl font-bold text-purple-700 mb-4">Développez votre Leadership avec Qastia Coaching</h1>
                    <p className="text-lg text-gray-700">
                        Un accompagnement sur-mesure pour entrepreneurs, dirigeants, salariés et étudiants afin de révéler leur plein potentiel.
                    </p>
                    <img src={img1} alt="Leadership Coaching" className="mx-auto mt-4 rounded shadow-lg w-full md:w-3/4" />
                </section>

                {/* Nos Services */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-6">Nos Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Coaching en Leadership", img: img2, desc: "Pour entrepreneurs et dirigeants souhaitant inspirer et motiver efficacement." },
                            { title: "Coaching Professionnel", img: img3, desc: "Accompagnement pour évolution de carrière et reconversion professionnelle." },
                            { title: "Coaching en Entreprise", img: img4, desc: "Optimisation de la gestion d'équipe et amélioration de la communication interne." },
                            { title: "Coaching Étudiant", img: img5, desc: "Développement des compétences organisationnelles et confiance en soi." }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded mb-2" />
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Approche & Méthodologies */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-4">Notre Approche</h2>
                    <p className="text-gray-700 mb-6">
                        Nous adoptons une approche bienveillante et personnalisée, inspirée des meilleures méthodologies de coaching.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "PNL & Intelligence Émotionnelle", img: img6, desc: "Maîtrisez votre communication et gérez vos émotions avec efficacité." },
                            { title: "Méthode GROW", img: img7, desc: "Fixez des objectifs clairs et atteignez-les avec un plan d'action structuré." },
                            { title: "Coaching Cognitif", img: img2, desc: "Identifiez vos croyances limitantes et transformez votre mindset." }
                        ].map((method, index) => (
                            <motion.div
                                key={index}
                                className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={method.img} alt={method.title} className="w-full h-40 object-cover rounded mb-2" />
                                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                                <p className="text-gray-600">{method.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Résultats Attendus */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-4">Les Résultats Attendus</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Développement du leadership et de la capacité à inspirer.</li>
                        <li>Amélioration de la gestion du stress et de la prise de décision.</li>
                        <li>Meilleure confiance en soi et impact professionnel accru.</li>
                        <li>Optimisation de l’organisation et de la productivité.</li>
                        <li>Accompagnement efficace lors des transitions de carrière.</li>
                    </ul>
                    <img src={img6} alt="Résultats Coaching" className="mx-auto mt-4 rounded shadow-lg w-full md:w-3/4" />
                </section>

                {/* Valeurs et Engagements */}
                <section className="my-8">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-4">Nos Valeurs et Engagements</h2>
                    <p className="text-gray-700">
                        Notre coaching repose sur des valeurs fondamentales : bienveillance, confiance, et engagement envers la réussite durable de nos clients.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {[
                            { title: "Bienveillance & Écoute Active", img: img5, desc: "Nous valorisons chaque individu et croyons en leur potentiel unique." },
                            { title: "Méthodes Personnalisées", img: img3, desc: "Chaque coaching est adapté à vos besoins spécifiques et à vos objectifs." },
                            { title: "Éthique & Confidentialité", img: img1, desc: "Un cadre de coaching sécurisé, respectueux et confidentiel." }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={value.img} alt={value.title} className="w-full h-40 object-cover rounded mb-2" />
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default Home;
