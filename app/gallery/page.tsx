'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = Array.from({ length: 18 }, (_, i) => `/gallery/${i + 1}.jpeg`);

const imageButtonClass = 'cursor-pointer transition-transform duration-300 hover:scale-[1.03]';

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const goPrev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const goNext = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % GALLERY_IMAGES.length));

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[300px] bg-gradient-to-br from-brand-beige to-brand-beige/80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-brand-primary/60 text-sm font-semibold tracking-widest uppercase mb-4">
              {t('subtitle')}
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-brand-primary mb-6">
              {t('title')}
            </h1>
            <p className="text-brand-primary/80 text-lg md:text-xl max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main images carousel */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {GALLERY_IMAGES.map((src, i) => (
              <CarouselItem key={src} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <button
                  type="button"
                  onClick={() => openLightbox(i)}
                  className={`w-full aspect-[4/3] relative overflow-hidden rounded-xl bg-brand-beige/30 ${imageButtonClass} block text-left`}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 border-brand-primary/20 text-brand-primary hover:bg-brand-beige/50 hover:text-brand-primary" />
          <CarouselNext className="right-2 md:-right-12 border-brand-primary/20 text-brand-primary hover:bg-brand-beige/50 hover:text-brand-primary" />
        </Carousel>
      </section>

      {/* Layout examples — displayed separately */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* Option 1: Classic Grid */}
        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-2 border-b border-brand-primary/20 pb-2">
            {t('option1')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => openLightbox(i)}
                className={`aspect-square relative overflow-hidden rounded-lg bg-brand-beige/30 ${imageButtonClass}`}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Option 2: Masonry */}
        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-2 border-b border-brand-primary/20 pb-2">
            {t('option2')}
          </h2>

          <div
            className="columns-2 md:columns-3 lg:columns-4"
            style={{ columnGap: '1rem' }}
          >
            {GALLERY_IMAGES.map((src, i) => {
              const aspect = i % 3 === 0 ? 'aspect-[4/3]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[3/4]';
              return (
                <div key={src} className="break-inside-avoid mb-4">
                  <button
                    type="button"
                    onClick={() => openLightbox(i)}
                    className={`relative overflow-hidden rounded-lg bg-brand-beige/30 w-full ${aspect} cursor-pointer transition-transform duration-300 hover:scale-[1.02] block`}
                  >
                    <Image
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Option 3: Featured hero + grid */}
        <section>
          <h2 className="text-2xl font-bold text-brand-primary mb-2 border-b border-brand-primary/20 pb-2">
            {t('option3')}
          </h2>

          <div className="space-y-4">
            <button
              type="button"
              onClick={() => openLightbox(0)}
              className={`w-full aspect-[21/9] relative overflow-hidden rounded-xl bg-brand-beige/30 cursor-pointer transition-transform duration-300 hover:scale-[1.02] block`}
            >
              <Image
                src={GALLERY_IMAGES[0]}
                alt="Gallery hero"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </button>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {GALLERY_IMAGES.slice(1, 13).map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => openLightbox(i + 1)}
                  className={`aspect-square relative overflow-hidden rounded-lg bg-brand-beige/30 ${imageButtonClass}`}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox — full-page shadcn Dialog */}
      <Dialog open={isOpen} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent
          showCloseButton={false}
          className="z-50 w-full h-full min-w-full max-w-7xl mx-auto rounded-none border-0 bg-black/95 p-0 gap-0 outline-none "
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Image lightbox</DialogTitle>
          {lightboxIndex !== null && (
            <>
              <div className="relative w-full h-full flex items-center justify-center p-14">
                <div className="relative w-full h-[85vh] max-h-[900px] min-h-[300px]">
                  <Image
                    src={GALLERY_IMAGES[lightboxIndex]}
                    alt={`Gallery ${lightboxIndex + 1}`}
                    fill
                    className="object-contain rounded-lg"
                    sizes="100vw"
                  />
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 size-10 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"
                aria-label="Close"
              >
                <X className="size-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"
                aria-label="Next image"
              >
                <ChevronRight className="size-8" />
              </Button>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                {lightboxIndex + 1} / {GALLERY_IMAGES.length}
              </span>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
