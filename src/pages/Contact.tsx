import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            // Remplacez "yourFormID" par votre identifiant Formspree
            const response = await fetch("https://formspree.io/f/xanqrpvn", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: formData
            });
            if(response.ok){
                setStatus("Merci, votre message a été envoyé !");
                form.reset();
            } else {
                setStatus("Erreur lors de l'envoi, veuillez réessayer.");
            }
        } catch (error) {
            setStatus("Erreur lors de l'envoi, veuillez réessayer.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact - Qastia Coaching</title>
                <meta name="description" content="Contactez-nous pour en savoir plus sur nos services de coaching professionnel." />
                <meta property="og:title" content="Contact - Qastia Coaching" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <section className="text-center my-8">
                    <h1 className="text-4xl font-bold text-purple-700 mb-4">Contactez-nous</h1>
                    <p className="text-lg text-gray-700">Nous sommes là pour répondre à toutes vos questions.</p>
                </section>
                <section className="max-w-lg mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Nom
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Votre email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-y"
                                placeholder="Votre message"
                            />
                        </div>
                        {status && <p className="text-center text-green-600 mb-4">{status}</p>}
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </section>
            </motion.div>
        </>
    );
};

export default Contact;
