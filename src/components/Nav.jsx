import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Luces", href: "#luces" },
    { name: "Galería", href: "#galeria" },
    { name: "Preguntas", href: "#faq" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -15 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav className="w-full bg-black/90 backdrop-blur-md shadow-sm border-b border-zinc-800 sticky top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-3 relative flex items-center justify-between">
        
        {/* Logo */}
        <div className="shrink-0 z-10">
          <a href="#" className="flex items-center gap-2" onClick={closeMenu}>
            <img
              className="h-10 sm:h-12 w-auto object-contain"
              src="/frenchi-logo.png"
              alt="Frenchi Logo"
            />
            <p className="text-lg sm:text-xl font-bold ml-1 sm:ml-2 uppercase text-white tracking-wider">
              Frenchifest{" "}
              <span className="uppercase text-gray-500 text-[10px] sm:text-xs tracking-widest font-semibold block sm:inline">
                Eventos
              </span>
            </p>
          </a>
        </div>

        {/* Links Desktop (Visible solo desde LG / 1024px hacia arriba) */}
        <ul className="hidden lg:flex items-center justify-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="uppercase tracking-[3px] text-gray-400 hover:text-yellow-400 text-xs transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón Desktop & Toggle Hamburguesa */}
        <div className="flex items-center gap-4 z-10">
          <a
            href="#contacto"
            className="hidden lg:inline-block text-white border border-gray-400 py-2.5 px-5 uppercase text-xs font-semibold tracking-widest hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition duration-200 cursor-pointer"
          >
            Contactanos
          </a>

          {/* Botón Hamburguesa (Se muestra en todo lo menor a LG) */}
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-zinc-800 bg-zinc-900/60 p-2 cursor-pointer transition-colors hover:border-yellow-400"
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ease-out ${
                isOpen ? "rotate-45 translate-y-1 bg-yellow-400" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ease-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform duration-300 ease-out ${
                isOpen ? "-rotate-45 -translate-y-1 bg-yellow-400" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menú Desplegable Mobile / Tablet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden w-full bg-black/95 border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((link, idx) => (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={link.href}
                  onClick={closeMenu}
                  className="uppercase tracking-[3px] text-gray-300 hover:text-yellow-400 text-sm font-semibold transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div variants={itemVariants} className="pt-4 border-t border-zinc-800">
                <a
                  href="#contacto"
                  onClick={closeMenu}
                  className="block text-center text-black bg-yellow-400 py-3 uppercase text-xs font-bold tracking-[3px] hover:bg-yellow-300 transition duration-200"
                >
                  Contactanos
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;