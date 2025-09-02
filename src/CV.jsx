import cvData from "./cvData";
import { motion } from "framer-motion";
import { User, BookOpen, Briefcase, Star } from "lucide-react";
import Profil from "./assets/profil.jpg";


function CV() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex justify-center items-start py-12 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-gray-900/70 backdrop-blur-xl border border-gold/50 text-dark w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-dark to-black text-gold p-10 flex items-center justify-between border-b border-gold/30">
          <div>
            <h1 className="text-4xl font-extrabold tracking-wide">
              {cvData.nama}
            </h1>
            <p className="text-lg italic">{cvData.title.toUpperCase()}</p>
            <p className="text-sm text-gray-300 mt-2">
              {cvData.kontak.telp} | {cvData.kontak.email}
            </p>
          </div>
          <motion.div
            className="w-32 h-32 rounded-full border-4 border-gold overflow-hidden shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={Profil}
              alt="Profile"
              className="w-30 h-35 object-cover"
            />
          </motion.div>
        </header>

        {/* Body */}
        <main className="p-10 space-y-8 text-white">
          {/* Data Pribadi */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-md border-l-4 border-gold"
          >
            <div className="flex items-center mb-3 gap-2">
              <User className="text-gold" />
              <h2 className="text-xl font-bold text-gold">Data Pribadi</h2>
            </div>
            <ul className="space-y-1 text-gray-200">
              <li>
                <span className="text-gold">Tempat, Tanggal Lahir:</span>{" "}
                {cvData.dataPribadi.ttl}
              </li>
              <li>
                <span className="text-gold">Alamat:</span>{" "}
                {cvData.dataPribadi.alamat}
              </li>
              <li>
                <span className="text-gold">Jenis Kelamin:</span>{" "}
                {cvData.dataPribadi.jenisKelamin}
              </li>
              <li>
                <span className="text-gold">Kewarganegaraan:</span>{" "}
                {cvData.dataPribadi.kewarganegaraan}
              </li>
              <li>
                <span className="text-gold">Status:</span>{" "}
                {cvData.dataPribadi.status}
              </li>
            </ul>
          </motion.section>

          {/* Pendidikan */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-md border-l-4 border-gold"
          >
            <div className="flex items-center mb-3 gap-2">
              <BookOpen className="text-gold" />
              <h2 className="text-xl font-bold text-gold">Pendidikan</h2>
            </div>
            <ul className="space-y-1 text-gray-200">
              {cvData.pendidikan.map((edu, idx) => (
                <div key={idx}>
                  <li>
                    🎓 {edu.smk} — {edu.jurusansmk}
                  </li>
                  <li>
                    🎓 {edu.kampus} — {edu.jurusan}
                  </li>
                </div>
              ))}
            </ul>
          </motion.section>

          {/* Pengalaman */}
          {/* Pengalaman */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-md border-l-4 border-gold"
          >
            <div className="flex items-center mb-3 gap-2">
              <Briefcase className="text-gold" />
              <h2 className="text-xl font-bold text-gold">Pengalaman</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-200">
              {cvData.pengalaman.map((exp, idx) => (
                <li
                  key={idx}
                  className="bg-gray-900/60 p-2 rounded-md shadow-sm"
                >
                  ✅{" "}
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline"
                    >
                      {exp.text}
                    </a>
                  ) : (
                    exp.text
                  )}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Keahlian */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-md border-l-4 border-gold"
          >
            <div className="flex items-center mb-3 gap-2">
              <Star className="text-gold" />
              <h2 className="text-xl font-bold text-gold">Keahlian</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cvData.keahlian.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gold/20 text-gold border border-gold px-3 py-1 rounded-full text-sm shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>
        </main>
      </div>
    </motion.div>
  );
}

export default CV;
