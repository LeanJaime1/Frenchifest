const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-zinc-800/80 pt-16 pb-12 text-white">
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-16">
        
        {/* Fila Superior */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Logo y Bajada */}
          <div className="flex flex-col gap-5 max-w-sm">
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
          </div>

          {/* Links de Navegación */}
          <div className="grid grid-cols-2 gap-12 sm:gap-20">
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
            <div className="flex flex-col gap-4">
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
          <p>
            © 2026 FRENCHIFEST — TODOS LOS DERECHOS RESERVADOS
          </p>
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