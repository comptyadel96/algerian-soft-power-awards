"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
}

export const VideoPopup = ({
  isOpen,
  onClose,
  videoSrc,
  title = "Teaser Video",
}: VideoPopupProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-6xl max-h-[85vh] mx-auto px-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-[#b91c1c] rounded-full transition-all duration-300 group"
          aria-label="Close video"
        >
          <X
            size={28}
            className="text-white group-hover:scale-110 transition-transform"
          />
        </button>

        {/* Video Container */}
        <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Title */}
        {title && (
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-lg font-bold">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
};
