const Slider = () => {
  const items = [
    {
      texto: "Iluminación profesional",
      estilo: "text-white tracking-[4px] font-bold uppercase",
    },
    {
      texto: "Eventos inolvidables",
      estilo:
        "text-transparent [-webkit-text-stroke:2px_#6b7280] font-bold uppercase tracking-[2px]",
    },
    {
      texto: "Led - RGB",
      estilo: "text-white tracking-[4px] font-bold uppercase",
    },
    {
      texto: "Efectos WOW",
      estilo:
        "text-transparent [-webkit-text-stroke:2px_#6b7280] font-bold uppercase tracking-[2px]",
    },
  ];

  return (
    <section className="relative z-20 bg-black border-y border-zinc-900 py-10 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,1)]">
      <div className="flex w-max gap-12 items-center animate-[marquee_90s_linear_infinite]">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-12 shrink-0">
            <span
              className={`text-4xl sm:text-5xl lg:text-9xl whitespace-nowrap ${item.estilo}`}
            >
              {item.texto}
            </span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;