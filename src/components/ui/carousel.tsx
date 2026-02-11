'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    children: React.ReactNode[];
    autoplay?: boolean;
    autoplayDelay?: number;
    showArrows?: boolean;
    showDots?: boolean;
    className?: string;
    slidesToShow?: number;
}

const Carousel: React.FC<CarouselProps> = ({
    children,
    autoplay = false,
    autoplayDelay = 3000,
    showArrows = true,
    showDots = true,
    className = '',
    slidesToShow = 1,
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            skipSnaps: false,
            containScroll: 'trimSnaps',
        },
        autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : []
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi) emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    const slideWidth = slidesToShow === 1 ? '100%' : `${100 / slidesToShow}%`;

    return (
        <div className={`relative ${className}`}>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {children.map((child, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 min-w-0 px-2"
                            style={{ flex: `0 0 ${slideWidth}` }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {showArrows && children.length > slidesToShow && (
                <>
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-gray-900/80 text-white backdrop-blur-sm hover:bg-gray-900 transition-all hover:scale-110 shadow-lg"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-gray-900/80 text-white backdrop-blur-sm hover:bg-gray-900 transition-all hover:scale-110 shadow-lg"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {showDots && scrollSnaps.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`h-2 rounded-full transition-all ${index === selectedIndex
                                ? 'w-8 bg-gradient-to-r from-sky-500 to-purple-500'
                                : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
