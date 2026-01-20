export const Animations = () => {
  return (
    <style>{`
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slide-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slow-zoom {
        from { transform: scale(1.1); }
        to { transform: scale(1.2); }
      }
      @keyframes scroll-horizontal {
        0% { transform: translateX(0); }
        50% { transform: translateX(-20%); }
        100% { transform: translateX(0); }
      }
      .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
      .animate-slide-up { animation: slide-up 1s ease-out forwards; }
      .animate-slow-zoom { animation: slow-zoom 20s linear infinite alternate; }
      .animate-scroll-horizontal { animation: scroll-horizontal 40s linear infinite; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }
      
      html { scroll-behavior: smooth; }
    `}</style>
  );
};
