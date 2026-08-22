import { motion } from "framer-motion";

const Eventos = () => {
  const eventosLista = [
    {
      num: "01",
      titulo: "Cumpleaños y fiestas",
      descripcion: "La entrada y la pista que nadie olvida.",
    },
    {
      num: "02",
      titulo: "Casamientos",
      descripcion: "El arco para recibir y el túnel para el gran momento.",
    },
    {
      num: "03",
      titulo: "Salones y wedding planners",
      descripcion: "Sumá el efecto wow a tu propuesta para los novios.",
    },
    {
      num: "04",
      titulo: "Eventos corporativos",
      descripcion: "Marcas que se prenden, lanzamientos que brillan.",
    },
  ];

  return (
    <section
      id="eventos"
      className="w-full bg-black min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start gap-12 lg:gap-16 mt-20 mb-10 lg:mb-32">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="w-full flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-[4px]"
        >
          <span className="text-yellow-400 shrink-0">[ 03</span>
          <span className="flex-1 h-[1px] bg-zinc-800" />
          <span className="text-zinc-600 shrink-0">PARA QUÉ EVENTOS ]</span>
        </motion.div>

        
        <div className="w-full flex flex-col border-y divide-y border-zinc-800/80 divide-zinc-800/80">
          {eventosLista.map((evento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.85,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group cursor-pointer px-6 sm:px-8 py-8 sm:py-12 flex items-center justify-between transition-colors duration-700 ease-in-out hover:bg-zinc-900/50"
            >
              <div className="flex items-center gap-6 lg:gap-12">
                <a href="#contacto">
                <span className="text-zinc-400 group-hover:text-yellow-400 font-bold text-lg sm:text-2xl tracking-widest transition-colors duration-700 ease-in-out">
                  {evento.num}
                </span>
                <div>
                  <h2 className="font-clash text-white group-hover:text-yellow-400 group-hover:translate-x-3 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none transition-all duration-700 ease-in-out">
                    {evento.titulo}
                  </h2>
                  <p className="text-zinc-400 text-base sm:text-lg mt-3">
                    {evento.descripcion}
                  </p>
                </div>
                </a>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 lg:w-10 lg:h-10 text-zinc-500 group-hover:text-yellow-400 transition-all duration-700 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Eventos;