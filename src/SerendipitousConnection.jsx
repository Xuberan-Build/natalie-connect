import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SerendipitousConnection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.section
        style={{ opacity }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="block sm:inline"
            >
              When Energy Aligns,{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block sm:inline bg-gradient-to-tr from-yellow-200 to-yellow-500 bg-clip-text text-transparent font-semibold"
            >
              Paths Align
            </motion.span>
          </motion.h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
            When dreams become beliefs reality transforms.
          </p>
        </div>
      </motion.section>

      <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Like yourself, I am an entrepreneur. Mastering the art of creating and adding value. As I strengthen my beliefs - I find meaningful connections in unexpected places. Monica's doordash delivery brought me to your doorstep the other day - and to a possibility worth exploring.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 italic text-gray-400">
              What are the odds I had a delivery just a few homes away from where I reside. We're literal neighbors!
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              The power of belief has transformed my life. I'm evolving through the renewal of my mind. As we change our mindset, reality shifts. Seeing the NRG Society card sparked an immediate recognition of shared values.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 bg-black">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 sm:p-8 rounded-lg"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6 text-yellow-500">
              Exchanging Values & Growing
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              My experience in digital marketing has taught me that true growth comes from the energy we share. I bring expertise in Digital strategy and systems thinking, & I'm equally excited about the opportunity to learn with successful entrepreneurs and grow together.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              I see potential for meaningful exchange of values - through expertise, knowledge exchange, or simply connecting as entrepreneurs who understand the power of energetic alignment & Growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-6">
              Let's Explore This Connection
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="mailto:austin@xuberandigital.com"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 active:bg-yellow-600 transition-colors duration-300 text-center"
              >
                Connect via Email
              </a>
              <a
                href="tel:952-688-2724"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500/10 active:bg-yellow-500/20 transition-colors duration-300 text-center"
              >
                Call or Text
              </a>
              <div className="flex justify-center items-center gap-6 mt-8">
                <a
                  href="https://luminary-studio.netlify.app"
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/austinsantos"
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SerendipitousConnection;
