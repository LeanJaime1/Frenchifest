import { motion } from "framer-motion";

// Orquestador de la lista (stagger pausado y sutil)
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.15,
    },
  },
};

// Entrada individual: deslizamiento corto, lento y gradual
const itemVariants = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo suave
    },
  },
};

const QuienesSomos = () => {
  return (
    <section
      id="nosotros"
      className="w-full bg-black min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start gap-12 lg:gap-16 mb-20 mt-20">
        
        {/* Header de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-[4px]"
        >
          <span className="text-yellow-400 shrink-0">[ 01</span>
          <span className="flex-1 h-[1px] bg-zinc-800" />
          <span className="text-zinc-600 shrink-0">QUIENES SOMOS ]</span>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row md:items-start gap-12 md:gap-0">
          
          {/* Columna Izquierda: Texto + Imagen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 flex flex-col items-start"
          >
            <h2 className="font-clash flex flex-col gap-1 mb-8">
              <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                No alquilamos luces.
              </span>
              <span className="text-4xl sm:text-5xl lg:text-6xl text-yellow-400 font-bold tracking-tight [text-shadow:_0_0_8px_#facc15,_0_0_20px_#ca8a04] leading-tight">
                Creamos el momento.
              </span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Somos un equipo dedicado al alquiler de artefactos lumínicos LED
              RGB para eventos. Trabajamos en toda la Zona Sur de Buenos Aires
              con particulares, salones, wedding planners y empresas.
            </p>

            <div className="w-full mt-10 overflow-hidden">
              <img
                src="/photo1.jpg"
                alt="Efectos lumínicos LED en evento"
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Columna Derecha: Entrada sutil en escalera */}
          <motion.div
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full md:w-1/2 md:pl-12 lg:pl-16 flex flex-col justify-center"
          >
            <div className="w-full flex flex-col border-y divide-y border-zinc-800/80 divide-zinc-800/80">
              
              {/* 01 */}
              <motion.div
                variants={itemVariants}
                className="group hover:bg-zinc-900/50 py-10 lg:py-12 flex items-start gap-6 lg:gap-8 transition-colors duration-300"
              >
                <span className="text-yellow-400 font-bold text-base sm:text-lg tracking-widest shrink-0 mt-1">
                  01
                </span>
                <div className="flex flex-col gap-4">
                  <h3 className="font-clash text-white group-hover:text-yellow-400 text-3xl sm:text-4xl font-bold tracking-tight leading-tight transition-colors duration-300">
                    El efecto que sorprende
                  </h3>
                  <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                    Cuando bajan las luces del salón y se encienden las nuestras,
                    los invitados sacan el teléfono. Ese momento es lo que
                    buscamos en cada evento.
                  </p>
                </div>
              </motion.div>

              {/* 02 */}
              <motion.div
                variants={itemVariants}
                className="group hover:bg-zinc-900/50 py-10 lg:py-12 flex items-start gap-6 lg:gap-8 transition-colors duration-300"
              >
                <span className="text-yellow-400 font-bold text-base sm:text-lg tracking-widest shrink-0 mt-1">
                  02
                </span>
                <div className="flex flex-col gap-4">
                  <h3 className="font-clash text-white group-hover:text-yellow-400 text-3xl sm:text-4xl font-bold tracking-tight leading-tight transition-colors duration-300">
                    Atención y puntualidad
                  </h3>
                  <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                    Coordinamos la entrega contigo y llegamos a horario. Es una de
                    las cosas que más valoran quienes ya trabajaron con nosotros.
                  </p>
                </div>
              </motion.div>

              {/* 03 */}
              <motion.div
                variants={itemVariants}
                className="group hover:bg-zinc-900/50 py-10 lg:py-12 flex items-start gap-6 lg:gap-8 transition-colors duration-300"
              >
                <span className="text-yellow-400 font-bold text-base sm:text-lg tracking-widest shrink-0 mt-1">
                  03
                </span>
                <div className="flex flex-col gap-4">
                  <h3 className="font-clash text-white group-hover:text-yellow-400 text-3xl sm:text-4xl font-bold tracking-tight leading-tight transition-colors duration-300">
                    Artefactos propios, impecables
                  </h3>
                  <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                    Cada pieza es nuestra: la mantenemos, la revisamos y sale
                    impecable hacia tu evento. Nada de equipos de segunda mano de
                    terceros.
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;