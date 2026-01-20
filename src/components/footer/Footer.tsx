export const Footer = () => {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">
          © 2024 Algerian Soft Power Awards. Tous droits réservés.
        </div>
        <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase text-gray-400">
          <a href="#" className="hover:text-[#d4af37]">
            Presse
          </a>
          <a href="#" className="hover:text-[#d4af37]">
            Mentions Légales
          </a>
          <a href="#" className="hover:text-[#d4af37]">
            Confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
};
