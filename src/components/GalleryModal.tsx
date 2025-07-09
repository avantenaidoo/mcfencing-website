'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageEntry {
  full: string;
  thumb: string;
}

interface GalleryModalProps {
  images: ImageEntry[];
}

export default function GalleryModal({ images }: GalleryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextImage, prevImage]);

  return (
    <>
      {/* ✅ Thumbnail Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image
              src={img.thumb}
              alt={`Thumbnail ${index + 1}`}
              width={300}
              height={200}
              className="rounded shadow object-cover w-full h-auto"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* ✅ Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            aria-label="Close modal"
          >
            &times;
          </button>

          {/* Previous Arrow */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl font-bold select-none z-50"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Full-size Image */}
          <div
            className="relative w-full max-w-4xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
            style={{ zIndex: 40 }}
          >
            <Image
              src={images[currentIndex].full}
              alt={`Image ${currentIndex + 1}`}
              width={1200}
              height={900}
              className="object-contain rounded"
              priority
            />
          </div>

          {/* Next Arrow */}
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl font-bold select-none z-50"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
