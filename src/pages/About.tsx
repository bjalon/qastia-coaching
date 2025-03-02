import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>À Propos - Qastia Coaching</title>
                <meta name="description" content="Découvrez mon parcours et mon expertise en coaching leadership et développement professionnel." />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-4 py-8"
            >

            </motion.div>
        </>
    );
};

export default About;
