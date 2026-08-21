import { motion } from "framer-motion";

// Orquestador del grid (escalera / stagger entre las 3 cards)
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.1,
    },
  },
};

// Animación de cada card individual: sube sutilmente desde abajo
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // Desaceleración suave
    },
  },
};

const Luces = () => {
  return (
    <section
      id="luces"
      className="w-full bg-[#0c0c0e] min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-24 border-t border-zinc-800/80 overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start gap-12 lg:gap-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="w-full flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-[4px]"
        >
          <span className="text-yellow-400 shrink-0">[ 02</span>
          <span className="flex-1 h-[1px] bg-zinc-800" />
          <span className="text-zinc-600 shrink-0">TIPOS DE LUCES ]</span>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="font-clash flex flex-col gap-1 mb-4"
        >
          <span className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            Tres artefactos.
          </span>
          <span className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-transparent [-webkit-text-stroke:2px_#6b7280]">
            Infinitos colores.
          </span>
        </motion.h2>

        {/* Grid de Cards animado en escalera */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="group/grid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: Brazo 180° */}
          <motion.div
            variants={cardVariants}
            className="group flex flex-col bg-black border border-zinc-800/80 hover:border-zinc-600 transition-colors duration-300"
          >
            <div className="relative w-full h-[460px] sm:h-[520px] overflow-hidden">
              <span className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm border border-zinc-800 text-zinc-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] px-3 py-1.5">
                MOVIMIENTO
              </span>
              <img
                src="/photo4.avif"
                alt="Brazo 180°"
                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover/grid:opacity-40 group-hover/grid:brightness-50 group-hover:!opacity-100 group-hover:!brightness-100 group-hover:scale-105"
              />
            </div>

            <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="font-clash text-white text-2xl sm:text-3xl font-bold tracking-tight">
                  Brazo 180°
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Un brazo de luz que gira 180° barriendo la pista. El centro de
                  atención cuando empieza la fiesta.
                </p>
              </div>

              <div className="flex flex-col gap-6 pt-4">
                <p className="text-yellow-400 font-semibold uppercase tracking-[2px] text-[11px] sm:text-xs leading-relaxed">
                  LED RGB · GIRO 180° · ESCENAS PROGRAMABLES
                </p>

                <a
                  href="#contacto"
                  className="flex items-center gap-3 text-zinc-400 group-hover:text-yellow-400 uppercase tracking-[3px] text-xs font-medium transition-colors duration-300"
                >
                  <span>Cotizar este artefacto</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Túnel Hexagonal LED */}
          <motion.div
            variants={cardVariants}
            className="group flex flex-col bg-black border border-zinc-800/80 hover:border-zinc-600 transition-colors duration-300"
          >
            <div className="relative w-full h-[460px] sm:h-[520px] overflow-hidden">
              <span className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm border border-zinc-800 text-zinc-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] px-3 py-1.5">
                INMERSIÓN
              </span>
              <img
                src="/photo3.avif"
                alt="Túnel Hexagonal LED"
                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover/grid:opacity-40 group-hover/grid:brightness-50 group-hover:!opacity-100 group-hover:!brightness-100 group-hover:scale-105"
              />
            </div>

            <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="font-clash text-white text-2xl sm:text-3xl font-bold tracking-tight">
                  Túnel Hexagonal LED
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Un túnel de luz hexagonal para entradas, pasillos y momentos
                  estelares. Caminar adentro es una experiencia.
                </p>
              </div>

              <div className="flex flex-col gap-6 pt-4">
                <p className="text-yellow-400 font-semibold uppercase tracking-[2px] text-[11px] sm:text-xs leading-relaxed">
                  LED RGB · ESTRUCTURA HEXAGONAL · EFECTOS DINÁMICOS
                </p>

                <a
                  href="#contacto"
                  className="flex items-center gap-3 text-zinc-400 group-hover:text-yellow-400 uppercase tracking-[3px] text-xs font-medium transition-colors duration-300"
                >
                  <span>Cotizar este artefacto</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Arcos de Ingreso */}
          <motion.div
            variants={cardVariants}
            className="group flex flex-col bg-black border border-zinc-800/80 hover:border-zinc-600 transition-colors duration-300"
          >
            <div className="relative w-full h-[460px] sm:h-[520px] overflow-hidden">
              <span className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm border border-zinc-800 text-zinc-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] px-3 py-1.5">
                PRIMER IMPACTO
              </span>
              <img
                src="/photo2.avif"
                alt="Arcos de Ingreso"
                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover/grid:opacity-40 group-hover/grid:brightness-50 group-hover:!opacity-100 group-hover:!brightness-100 group-hover:scale-105"
              />
            </div>

            <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="font-clash text-white text-2xl sm:text-3xl font-bold tracking-tight">
                  Arcos de Ingreso
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  La bienvenida que marca el tono de la noche. Los invitados
                  entran y ya saben que el evento es distinto.
                </p>
              </div>

              <div className="flex flex-col gap-6 pt-4">
                <p className="text-yellow-400 font-semibold uppercase tracking-[2px] text-[11px] sm:text-xs leading-relaxed">
                  LED RGB · ENTRADA PRINCIPAL · COLORES A MEDIDA
                </p>

                <a
                  href="#contacto"
                  className="flex items-center gap-3 text-zinc-400 group-hover:text-yellow-400 uppercase tracking-[3px] text-xs font-medium transition-colors duration-300"
                >
                  <span>Cotizar este artefacto</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Luces;