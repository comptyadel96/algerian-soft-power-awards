import { ChevronRight } from "lucide-react";

const TIMELINE = [
  {
    date: "Octobre 2024",
    event: "Lancement des candidatures & Appel à projets",
    status: "Terminé",
  },
  {
    date: "Décembre 2024",
    event: "Grand Forum : Stratégies de Soft Power",
    status: "En cours",
  },
  {
    date: "Février 2025",
    event: "Soirée de Gala & Remise des Trophées",
    status: "À venir",
    highlight: true,
  },
];

export const ProgrammeSection = () => {
  return (
    <section id="programme" className="py-24 bg-[#111]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif mb-4 italic text-[#b91c1c]">
              Calendrier de l&apos;édition
            </h2>
            <p className="text-gray-400">
              Une série d&apos;événements exclusifs pour forger de nouveaux ponts.
            </p>
          </div>
          <button className="text-[#b91c1c] flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:underline decoration-2 underline-offset-8">
            Télécharger le dossier complet <ChevronRight size={16} />
          </button>
        </div>

        <div className="space-y-4">
          {TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className={`group flex flex-col md:flex-row justify-between items-center p-8 border border-white/10 transition-all duration-300 hover:bg-[#b91c1c] hover:text-white ${
                item.highlight ? "bg-white/5 border-[#b91c1c]/50" : ""
              }`}
            >
              <div className="text-2xl font-serif italic mb-4 md:mb-0">
                {item.date}
              </div>
              <div className="text-xl font-bold uppercase tracking-tighter text-center md:text-left">
                {item.event}
              </div>
              <div
                className={`text-[10px] px-3 py-1 rounded-full border ${
                  item.highlight
                    ? "border-[#b91c1c] text-[#b91c1c] group-hover:text-white group-hover:border-black"
                    : "border-white/20 text-white/40"
                }`}
              >
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
