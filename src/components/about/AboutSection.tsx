export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541480605637-293d973b2382?auto=format&fit=crop&q=80"
                alt="Algerian Heritage"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border-[15px] border-[#b91c1c] -z-10"></div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              L'influence par{" "}
              <span className="italic text-[#b91c1c]">l'Inspiration</span>
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                L'Algérie possède un patrimoine culturel, historique et
                artistique exceptionnel, un capital symbolique trop souvent
                invisible à l'échelle internationale.
              </p>
              <p className="font-semibold text-black italic">
                Les Algerian Soft Power Awards ont été conçus pour changer cela.
              </p>
              <p>
                Ces trophées ne célèbrent pas seulement des réussites. Ils sont
                un outil stratégique, un point de convergence entre culture,
                innovation et rayonnement international, permettant de
                construire un réseau durable d'acteurs et de pratiques
                exemplaires.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <div className="text-4xl font-serif text-[#b91c1c]">07</div>
                <div className="text-xs uppercase tracking-widest font-bold mt-2">
                  Catégories
                </div>
              </div>
              <div>
                <div className="text-4xl font-serif text-[#b91c1c]">01</div>
                <div className="text-xs uppercase tracking-widest font-bold mt-2">
                  Grand Prix
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
