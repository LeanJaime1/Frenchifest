import { motion } from "framer-motion";

// Orquestador de la grilla Bento (efecto escalera)
const galleryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

// Animación individual para cada foto
const photoVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo sutil y fluido
    },
  },
};

const Galeria = () => {
  return (
    <section
      id="galeria"
      className="w-full bg-[#0c0c0e] min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-24 border-t border-zinc-800/80 overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start gap-12 lg:gap-16 mb-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-[4px]"
        >
          <span className="text-yellow-400 shrink-0">[ 04</span>
          <span className="flex-1 h-[1px] bg-zinc-800" />
          <span className="text-zinc-600 shrink-0">GALERÍA ]</span>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="font-clash mb-4"
        >
          <span className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            Así se ve
          </span>
          <span className="text-4xl sm:text-5xl lg:text-7xl text-yellow-400 font-bold tracking-tight [text-shadow:_0_0_8px_#facc15,_0_0_20px_#ca8a04] mx-4">
            encendido.
          </span>
        </motion.h2>

        {/* Grilla Bento con Stagger en Cascada */}
        <motion.div
          variants={galleryContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8"
        >
          {/* --- HILERA 1: 7 cols / 5 cols --- */}
          <motion.div
            variants={photoVariants}
            className="group relative md:col-span-7 h-[280px] sm:h-[340px] md:h-[420px] lg:h-[600px] overflow-hidden bg-black border border-zinc-800/80"
          >
            <img
              src="/galeria1.png"
              alt="Evento principal"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={photoVariants}
            className="group relative md:col-span-5 h-[280px] sm:h-[340px] md:h-[420px] lg:h-[600px] overflow-hidden bg-black border border-zinc-800/80"
          >
            <img
              src="/galeria2.png"
              alt="Detalle de luces"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>

          {/* --- HILERA 2: 3 Espacios Iguales (4 cols c/u) --- */}
          <motion.div
            variants={photoVariants}
            className="group relative md:col-span-4 h-[300px] sm:h-[360px] md:h-[440px] lg:h-[640px] overflow-hidden bg-black border border-zinc-800/80"
          >
            <img
              src="/galeria3.png"
              alt="Pista de baile"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={photoVariants}
            className="group relative md:col-span-4 h-[300px] sm:h-[360px] md:h-[440px] lg:h-[640px] overflow-hidden bg-black border border-zinc-800/80"
          >
            <img
              src="/galeria4.png"
              alt="Túnel LED"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={photoVariants}
            className="group relative md:col-span-4 h-[300px] sm:h-[360px] md:h-[440px] lg:h-[640px] overflow-hidden bg-black border border-zinc-800/80"
          >
            <img
              src="/galeria5.png"
              alt="Arco de bienvenida"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>

          {/* --- HILERA 3: Ancho Completo (12 cols) --- */}
          <motion.div
            variants={photoVariants}
            className="group relative md:col-span-12 h-[260px] sm:h-[340px] md:h-[460px] lg:h-[600px] overflow-hidden bg-black border border-zinc-800/80"
          >
            <img
              src="/galeria6.png"
              alt="Panorámica del show lumínico"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Galeria;