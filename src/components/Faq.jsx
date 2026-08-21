import { useState } from "react";
import { motion } from "framer-motion";

const preguntasFaq = [
  {
    pregunta: "¿Se pueden elegir los colores y los efectos?",
    respuesta:
      "Sí. Todos nuestros artefactos son LED RGB: los colores, las escenas y los efectos se programan a medida de tu evento y de tu paleta.",
  },
  {
    pregunta: "¿Trabajan en mi ciudad?",
    respuesta:
      "Trabajamos en toda la Zona Sur de Buenos Aires. Escribinos por WhatsApp con la ubicación de tu evento y te confirmamos cobertura y traslado.",
  },
  {
    pregunta: "¿Con cuánta anticipación tengo que reservar?",
    respuesta:
      "Cuanto antes, mejor: las fechas de fin de semana se agotan rápido. Consultanos disponibilidad para tu fecha y la separamos.",
  },
  {
    pregunta: "¿El alquiler incluye entrega e instalación?",
    respuesta:
      "Coordinamos contigo la entrega con puntualidad — es una de las cosas que más valoran nuestros clientes — y dejamos todo funcionando.",
  },
  {
    pregunta: "¿Para qué tipo de eventos sirven los artefactos?",
    respuesta:
      "Cumpleaños, fiestas, casamientos, eventos corporativos y salones. Cada artefacto tiene su momento ideal: te asesoramos para elegir el correcto.",
  },
];

// Orquestador para las filas del acordeón
const accordionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Animación de entrada de cada pregunta
const faqItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Faq = () => {
  const [abierta, setAbierta] = useState(null);

  const togglePregunta = (index) => {
    setAbierta(abierta === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-black min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start gap-12 lg:gap-16 my-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="w-full flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-[4px]"
        >
          <span className="text-yellow-400 shrink-0">[ 05</span>
          <span className="flex-1 h-[1px] bg-zinc-800" />
          <span className="text-zinc-600 shrink-0">PREGUNTAS FRECUENTES ]</span>
        </motion.div>

        {/* Layout 2 columnas */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Columna Izquierda: Título */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12"
          >
            <h2 className="font-clash flex flex-col gap-1 sticky top-28">
              <span className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight">
                Dudas de último momento,
              </span>
              <span className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-transparent [-webkit-text-stroke:2px_#6b7280]">
                respuestas rápidas.
              </span>
            </h2>
          </motion.div>

          {/* Columna Derecha: Acordeón con Stagger */}
          <motion.div
            variants={accordionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-7/12 flex flex-col border-y divide-y border-zinc-800/80 divide-zinc-800/80"
          >
            {preguntasFaq.map((item, index) => {
              const estaAbierta = abierta === index;
              return (
                <motion.div
                  key={index}
                  variants={faqItemVariants}
                  className="w-full transition-colors duration-300"
                >
                  {/* Botón Cabecera */}
                  <button
                    onClick={() => togglePregunta(index)}
                    className="w-full py-6 sm:py-8 flex items-center justify-between text-left gap-6 group cursor-pointer"
                  >
                    <h3
                      className={`font-clash text-lg sm:text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                        estaAbierta
                          ? "text-yellow-400"
                          : "text-white group-hover:text-yellow-400"
                      }`}
                    >
                      {item.pregunta}
                    </h3>

                    {/* Flecha con rotación */}
                    <div
                      className={`shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ${
                        estaAbierta
                          ? "border-yellow-400 bg-yellow-400/10 text-yellow-400 rotate-180"
                          : "text-zinc-500 group-hover:border-zinc-700 group-hover:text-white"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Contenedor colapsable */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      estaAbierta
                        ? "grid-rows-[1fr] opacity-100 pb-6 sm:pb-8"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                        {item.respuesta}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Faq;