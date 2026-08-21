import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Orquestador de entrada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Animación de entrada para cada bloque
const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.75], [0, -40]);

  return (
    <main
      ref={containerRef}
      className="relative w-full bg-black min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-24 overflow-hidden"
    >
      {/* ========================================================
          LUCES AMBIENTALES DE FONDO (Spotlights Suaves)
      ======================================================== */}
      
      {/* Foco Superior Izquierdo: Resalta sutilmente detrás del texto */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.12, 0.22, 0.12],
          backgroundColor: [
            "rgba(250, 204, 21, 0.2)",  // Amarillo
            "rgba(168, 85, 247, 0.18)", // Violeta
            "rgba(250, 204, 21, 0.2)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none z-0"
      />

      {/* Foco Inferior Central: Ambiente de piso iluminado */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
          backgroundColor: [
            "rgba(6, 182, 212, 0.15)",  // Cian
            "rgba(236, 72, 153, 0.18)", // Magenta
            "rgba(6, 182, 212, 0.15)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-40 left-1/3 w-[600px] h-[500px] rounded-full blur-[160px] pointer-events-none z-0"
      />

      {/* ========================================================
          CONTENIDO HERO
      ======================================================== */}
      <motion.div
        style={{ opacity, y }}
        className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
      >
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-12">
          
          {/* Columna Izquierda: Textos y CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center items-start gap-10"
          >
            {/* 1. Badge superior */}
            <motion.div variants={itemVariants}>
              <p className="text-yellow-400 uppercase tracking-[4px] sm:tracking-[6px] italic text-xs sm:text-sm font-semibold [text-shadow:_0_0_10px_rgba(250,204,21,0.5)]">
                Alquiler de artefactos LED · RGB · Eventos
              </p>
            </motion.div>

            {/* 2. Título */}
            <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-extrabold uppercase leading-[1.1] tracking-tight flex flex-col gap-3">
              <motion.span variants={itemVariants} className="block text-white">
                Luz que
              </motion.span>

              <motion.span
                variants={itemVariants}
                className="block text-yellow-300 [text-shadow:_0_0_10px_#facc15,_0_0_25px_#eab308,_0_0_50px_#ca8a04] py-1"
              >
                transforma
              </motion.span>

              <motion.span
                variants={itemVariants}
                className="block text-transparent [-webkit-text-stroke:2px_#6b7280]"
              >
                tu evento
              </motion.span>
            </h1>

            {/* 3. Bajada descriptiva */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-loose">
                Brazo 180°, Túnel Hexagonal LED y Arcos de Ingreso. Artefactos
                propios, siempre impecables, entregados con puntualidad. El
                efecto que sorprende a tus invitados.
              </p>
            </motion.div>

            {/* 4. Botón CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="#contacto"
                className="group flex items-center gap-3 bg-white p-5 uppercase hover:bg-yellow-400 tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm font-bold text-black transition-colors duration-200"
              >
                Pedir presupuesto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m0 0l6-6m-6 6l-6-6"
                  />
                </svg>
              </a>
            </motion.div>

            {/* 5. Footer con eventos */}
            <motion.div
              variants={itemVariants}
              className="w-full pt-6 border-t border-zinc-900/80"
            >
              <div className="flex flex-wrap items-center gap-y-2 text-zinc-600 uppercase tracking-[2px] sm:tracking-[4px] lg:tracking-[5px] font-bold text-[10px] sm:text-xs">
                <span>Cumpleaños</span>
                <span className="mx-2 text-zinc-700">—</span>
                <span>Casamientos</span>
                <span className="mx-2 text-zinc-700">—</span>
                <span>Corporativo</span>
                <span className="mx-2 text-zinc-700">—</span>
                <span>Salones</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Logo Animado con Neón */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="hidden lg:flex relative items-center justify-center"
          >
            {/* Halo RGB detrás del logo */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.35, 0.65, 0.35],
                backgroundColor: [
                  "rgba(250, 204, 21, 0.35)",
                  "rgba(236, 72, 153, 0.45)",
                  "rgba(59, 130, 246, 0.4)",
                  "rgba(168, 85, 247, 0.45)",
                  "rgba(250, 204, 21, 0.35)",
                ],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[380px] h-[380px] rounded-full blur-[100px] pointer-events-none -z-10"
            />

            {/* Anillo de luz en rotación */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [0.95, 1.08, 0.95],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-yellow-500/20 via-pink-500/20 to-cyan-500/20 blur-[60px] pointer-events-none -z-10"
            />

            {/* Logo */}
            <motion.img
              src="/frenchi-logo.png"
              alt="Logo Frenchifest"
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.025, 1],
                filter: [
                  "drop-shadow(0 0 25px rgba(250,204,21,0.4)) drop-shadow(0 0 60px rgba(250,204,21,0.2))",
                  "drop-shadow(0 0 35px rgba(236,72,153,0.5)) drop-shadow(0 0 70px rgba(236,72,153,0.25))",
                  "drop-shadow(0 0 30px rgba(6,182,212,0.5)) drop-shadow(0 0 65px rgba(6,182,212,0.25))",
                  "drop-shadow(0 0 25px rgba(250,204,21,0.4)) drop-shadow(0 0 60px rgba(250,204,21,0.2))",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-[480px] h-auto object-contain relative z-10 select-none"
            />
          </motion.div>

        </section>
      </motion.div>
    </main>
  );
};

export default Hero;