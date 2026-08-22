const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-zinc-800/80 pt-16 pb-12 text-white">
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-16">
        {/* Fila Superior */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Logo, Bajada e Íconos de Redes */}
          <div className="flex flex-col gap-6 max-w-sm">
            <a href="#" className="flex items-center gap-3 w-fit">
              <img
                src="/frenchi-logo.png"
                alt="Frenchifest Logo"
                className="h-9 sm:h-10 w-auto object-contain"
              />
              <span className="font-clash text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Frenchifest
              </span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Alquiler de artefactos de luz LED RGB para eventos. Zona Sur de
              Buenos Aires y alrededores.
            </p>

            {/* Redes y Vías de Contacto con SVG interactivos */}
            <div className="flex items-center gap-3 pt-1">
              {/* Instagram */}
              <a
                href="https://instagram.com/frenchifesteventos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-pink-500 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Gmail / Correo */}
              <a
                href="mailto:tu_email@gmail.com"
                aria-label="Gmail"
                className="w-10 h-10 border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-red-500 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links de Navegación y Contacto */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16">
            {/* Columna: Secciones */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-zinc-500 text-xs font-semibold uppercase tracking-[3px]">
                Secciones
              </span>
              <ul className="flex flex-col gap-3 text-sm text-zinc-300 font-bold">
                <li>
                  <a
                    href="#nosotros"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#luces"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    Artefactos
                  </a>
                </li>
                <li>
                  <a
                    href="#galeria"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    Galería
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    Preguntas
                  </a>
                </li>
              </ul>
            </div>


            {/* Columna: Contacto */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <span className="font-mono text-zinc-500 text-xs font-semibold uppercase tracking-[3px]">
                Contacto
              </span>
              <ul className="flex flex-col gap-3 text-sm text-zinc-300 font-bold">
                <li>
                  <a
                    href="https://wa.me/tu_numero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    Pedir presupuesto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fila Inferior: Copyright y Créditos */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[2px] text-zinc-600">
          <p>© 2026 FRENCHIFEST — TODOS LOS DERECHOS RESERVADOS</p>
          <p className="flex items-center gap-1">
            <span>Desarrollado por</span>
            <a
              href="https://www.linkedin.com/in/leandro-jaime-5585a5310/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-yellow-400 transition-colors duration-200 underline underline-offset-4"
            >
              Lean Jaime
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;