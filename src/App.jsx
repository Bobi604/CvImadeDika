import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CV from "./CV";
import Bg from "./assets/bg.png";

function App() {
  const [showCV, setShowCV] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-zinc-600 to-zinc-700 flex justify-center items-center">
      <img
        src={Bg}
        alt="Background"
        className="absolute inset-0 w-400 h-full object-cover opacity-10 z-0 pointer-events-none"
      />

      <AnimatePresence mode="wait">
        {!showCV ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <motion.h1
              className="text-5xl font-bold text-gold mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Selamat Datang
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              CV <span className="text-gold font-semibold">I MADE DIKA</span> -
              Web Developer
            </motion.p>

            <motion.button
              onClick={() => setShowCV(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gold text-dark font-semibold rounded-xl shadow-lg hover:bg-zinc-700 transition"
            >
              Lihat CV
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="cv"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}
            className="w-full"
          >
            <CV />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
