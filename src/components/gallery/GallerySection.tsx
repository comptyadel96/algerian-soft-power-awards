const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80",
];

export const GallerySection = () => {
  return (
    <section id="galerie" className="py-32 bg-black overflow-hidden">
      <div className="px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-serif italic mb-4">
          L'univers <span className="text-[#b91c1c]">Visuel</span>
        </h2>
      </div>

      <div className="flex gap-4 animate-scroll-horizontal">
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={i}
            className="min-w-[400px] h-[500px] bg-gray-900 group relative overflow-hidden"
          >
            <img
              src={img}
              alt="Event"
              className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[#b91c1c] text-xs font-bold tracking-widest uppercase mb-2 block">
                Edition 2024
              </span>
              <h4 className="text-xl font-bold">Moments d'exception</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
