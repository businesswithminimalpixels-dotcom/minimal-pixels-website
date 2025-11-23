import React, { useState, useEffect } from "react";
import { THUMBNAIL_ITEMS, POSTER_ITEMS, PORTFOLIO_VERSION } from "../constants";
import TwitterIcon from "./icons/TwitterIcon";
import FacebookIcon from "./icons/FacebookIcon";
import PinterestIcon from "./icons/PinterestIcon";
import CopyLinkIcon from "./icons/CopyLinkIcon";
import CheckIcon from "./icons/CheckIcon";
import { motion, AnimatePresence } from "framer-motion";

type MainFilter = "All" | "Thumbnails" | "Posters";

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [activeFilter, setActiveFilter] = useState<MainFilter>("All");
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const handleCopyLink = () => {
    if (!selectedImage) return;
    const linkToCopy = `${window.location.origin}${selectedImage.src}`;
    navigator.clipboard.writeText(linkToCopy).then(() => {
      setIsLinkCopied(true);
      setTimeout(() => setIsLinkCopied(false), 2000); // Reset after 2 seconds
    });
  };

  const getShareLinks = () => {
    if (!selectedImage) return {};

    const shareUrl = encodeURIComponent(window.location.href);
    const imageUrl = encodeURIComponent(
      `${window.location.origin}${selectedImage.src}`
    );
    const text = encodeURIComponent(
      `Check out this design "${selectedImage.alt}" from Minimal Pixels!`
    );

    return {
      twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${shareUrl}&media=${imageUrl}&description=${text}`,
    };
  };

  const shareLinks = getShareLinks();

  const mainFilterButtons: { id: MainFilter; label: string }[] = [
    { id: "All", label: "All" },
    { id: "Thumbnails", label: "Thumbnails" },
    { id: "Posters", label: "Posters" },
  ];

  const filteredThumbnails =
    activeFilter === "All" || activeFilter === "Thumbnails"
      ? THUMBNAIL_ITEMS
      : [];

  const filteredPosters =
    activeFilter === "All" || activeFilter === "Posters" ? POSTER_ITEMS : [];

  return (
    <section
      id="portfolio"
      className="py-20 bg-slate-900 overflow-hidden scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
          Our Work
        </h2>
        <p className="mt-2 text-lg text-slate-400">
          A glimpse into the quality and creativity we deliver. Click any item
          to view it fully.
        </p>
      </motion.div>

      {/* Main Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center items-center space-x-2 md:space-x-4 mb-12"
      >
        {mainFilterButtons.map((button) => (
          <motion.button
            key={button.id}
            onClick={() => setActiveFilter(button.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-sky-400 ${
              activeFilter === button.id
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {button.label}
          </motion.button>
        ))}
      </motion.div>

      <div className="space-y-8 md:space-y-16 py-8">
        {/* Thumbnails Scroller */}
        {(activeFilter === "All" || activeFilter === "Thumbnails") &&
          filteredThumbnails.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]"
            >
              <div className="flex w-max animate-[scroll-left_25s_linear_infinite] hover:[animation-play-state:paused]">
                {[...filteredThumbnails, ...filteredThumbnails].map(
                  (item, index) => (
                    <button
                      aria-label={`View ${item.alt}`}
                      onClick={() => setSelectedImage(item)}
                      key={`thumb-${item.id}-${index}`}
                      className="portfolio-card text-left relative group flex-shrink-0 w-80 md:w-96 mx-4 overflow-hidden rounded-xl shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-sky-500/10 aspect-[16/9] bg-slate-800"
                    >
                      <img
                        src={`${item.src}?v=${PORTFOLIO_VERSION}`}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        <h3 className="text-white font-bold text-lg">
                          {item.alt}
                        </h3>
                      </div>
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}

        {/* Posters Scroller */}
        {(activeFilter === "All" || activeFilter === "Posters") &&
          filteredPosters.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]"
            >
              <div className="flex w-max animate-[scroll-right_40s_linear_infinite] hover:[animation-play-state:paused]">
                {[...filteredPosters, ...filteredPosters].map((item, index) => (
                  <button
                    aria-label={`View ${item.alt}`}
                    onClick={() => setSelectedImage(item)}
                    key={`poster-${item.id}-${index}`}
                    className="portfolio-card text-left relative group flex-shrink-0 h-96 w-72 mx-4 bg-slate-800 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-sky-500/10"
                  >
                    <img
                      src={`${item.src}?v=${PORTFOLIO_VERSION}`}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-110 opacity-40"
                    />
                    <img
                      src={`${item.src}?v=${PORTFOLIO_VERSION}`}
                      alt={item.alt}
                      className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 z-20">
                      <h3 className="text-white font-bold text-lg truncate">
                        {item.alt}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
      </div>

      {/* Modal for viewing full image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="image-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-auto h-auto max-w-[90vw] max-h-[85vh] group/modal"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${selectedImage.src}?v=${PORTFOLIO_VERSION}`}
                alt={selectedImage.alt}
                className="block w-auto h-auto max-w-full max-h-full rounded-lg shadow-2xl"
              />
              <h3 id="image-modal-title" className="sr-only">
                {selectedImage.alt}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white rounded-full p-2 text-slate-900 hover:scale-110 transition-transform shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white"
                aria-label="Close image viewer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="absolute bottom-0 right-0 p-4 bg-black/20 backdrop-blur-sm rounded-bl-lg rounded-tr-lg opacity-0 group-hover/modal:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-200 hidden sm:block">
                    Share:
                  </span>
                  <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-tooltip-container"
                  >
                    <TwitterIcon className="h-5 w-5 text-slate-200 hover:text-white transition-colors" />
                    <span className="share-tooltip">Share on X</span>
                  </a>
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-tooltip-container"
                  >
                    <FacebookIcon className="h-5 w-5 text-slate-200 hover:text-white transition-colors" />
                    <span className="share-tooltip">Share on Facebook</span>
                  </a>
                  <a
                    href={shareLinks.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-tooltip-container"
                  >
                    <PinterestIcon className="h-5 w-5 text-slate-200 hover:text-white transition-colors" />
                    <span className="share-tooltip">Pin on Pinterest</span>
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="share-tooltip-container"
                  >
                    {isLinkCopied ? (
                      <CheckIcon className="h-5 w-5 text-emerald-400" />
                    ) : (
                      <CopyLinkIcon className="h-5 w-5 text-slate-200 hover:text-white transition-colors" />
                    )}
                    <span className="share-tooltip">
                      {isLinkCopied ? "Link Copied!" : "Copy Link"}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
