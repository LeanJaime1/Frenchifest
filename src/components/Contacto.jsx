import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <section
      id="contacto"
      className="w-full bg-[#0c0c0e] min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-24 border-t border-zinc-800/80 overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start gap-12 lg:gap-16 my-12">
        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="w-full flex items-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-[4px]"
        >
          <span className="text-yellow-400 shrink-0">[ 06</span>
          <span className="flex-1 h-[1px] bg-zinc-800" />
          <span className="text-zinc-600 shrink-0">CONTACTO ]</span>
        </motion.div>

        {/* Layout: 5 columnas texto / 7 columnas formulario */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda (Texto + WhatsApp) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start justify-between h-full gap-8"
          >
            <div className="flex flex-col gap-6">
              <h2 className="font-clash flex flex-col gap-1">
                <span className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none">
                  Contanos de tu
                </span>
                <span className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none">
                  evento.
                </span>
                <span className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-transparent [-webkit-text-stroke:2px_#52525b] leading-none">
                  Nosotros lo prendemos.
                </span>
              </h2>

              <p className="font-sans text-zinc-400 text-base sm:text-lg max-w-md leading-relaxed">
                Dejanos tus datos y la fecha, y te armamos un presupuesto. O si
                preferís, escribinos directo por WhatsApp.
              </p>
            </div>

            <div className="flex flex-col gap-8 w-full pt-4">
              {/* Botón WhatsApp con efecto Neón */}
              <a
                href="https://wa.me/tu_numero"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#2fe673] text-black font-bold uppercase tracking-[2px] text-xs sm:text-sm px-8 py-4 rounded-none shadow-[0_0_15px_#25D366,0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_#25D366,0_0_50px_rgba(37,211,102,0.8)] transition-all duration-300 w-fit cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Escribir por WhatsApp</span>
              </a>

              <p className="font-mono text-zinc-600 uppercase tracking-[2px] text-[11px] leading-relaxed">
                COBERTURA: ZONA SUR DE BUENOS AIRES — CONSULTANOS POR TU
                LOCALIDAD
              </p>
            </div>
          </motion.div>

          {/* Columna Derecha (Formulario) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7 w-full border border-zinc-800/80 bg-black/60 p-8 sm:p-12 backdrop-blur-sm shadow-2xl"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-7"
            >
              {/* Nombre */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-zinc-500 uppercase tracking-[2px] text-[10px] sm:text-xs font-semibold">
                  Nombre *
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="font-sans w-full bg-black border border-zinc-800 text-white placeholder-zinc-600 px-4 py-4 text-sm outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              {/* Email o WhatsApp */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-zinc-500 uppercase tracking-[2px] text-[10px] sm:text-xs font-semibold">
                  Email o WhatsApp *
                </label>
                <input
                  type="text"
                  placeholder="Para responderte"
                  className="font-sans w-full bg-black border border-zinc-800 text-white placeholder-zinc-600 px-4 py-4 text-sm outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              {/* Fila: Tipo de Evento & Fecha */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-zinc-500 uppercase tracking-[2px] text-[10px] sm:text-xs font-semibold">
                    Tipo de evento *
                  </label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="font-sans w-full bg-black border border-zinc-800 text-zinc-300 px-4 py-4 text-sm outline-none focus:border-yellow-400 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-zinc-600">
                        Elegí una opción
                      </option>
                      <option value="cumpleanos">Cumpleaños / Fiesta</option>
                      <option value="casamiento">Casamiento</option>
                      <option value="corporativo">Corporativo</option>
                      <option value="otro">Otro</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                      <svg
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
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-zinc-500 uppercase tracking-[2px] text-[10px] sm:text-xs font-semibold">
                    Fecha del evento
                  </label>
                  <input
                    type="date"
                    className="font-sans w-full bg-black border border-zinc-800 text-zinc-300 px-4 py-4 text-sm outline-none focus:border-yellow-400 transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-zinc-500 uppercase tracking-[2px] text-[10px] sm:text-xs font-semibold">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="Contanos qué artefacto te interesa, la ciudad, cantidad de invitados..."
                  className="font-sans w-full bg-black border border-zinc-800 text-white placeholder-zinc-600 px-4 py-4 text-sm outline-none focus:border-yellow-400 transition-colors resize-none"
                />
              </div>

              {/* Botón Enviar */}
              <button
                type="submit"
                className="group w-full bg-white hover:bg-yellow-400 text-black font-semibold uppercase tracking-[3px] text-xs py-4.5 flex items-center justify-center gap-2.5 transition-colors cursor-pointer mt-2"
              >
                <span>Enviar consulta</span>
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
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;