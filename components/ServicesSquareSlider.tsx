'use client';

import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { 
  Code, 
  Palette, 
  BarChart3, 
  ShoppingCart, 
  Smartphone, 
  Wrench, 
  Video, 
  Camera, 
  Mic, 
  Bot,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface Service {
  id: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
  { id: '1', slug: 'webDev', icon: Code },
  { id: '2', slug: 'uiUx', icon: Palette },
  { id: '3', slug: 'marketing', icon: BarChart3 },
  { id: '4', slug: 'ecommerce', icon: ShoppingCart },
  { id: '5', slug: 'mobile', icon: Smartphone },
  { id: '6', slug: 'support', icon: Wrench },
  { id: '7', slug: 'video', icon: Video },
  { id: '8', slug: 'photo', icon: Camera },
  { id: '9', slug: 'audio', icon: Mic },
  { id: '10', slug: 'ai', icon: Bot },
];

export default function ServicesSquareSlider() {
  const t = useTranslations();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const checkOverflow = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.offsetWidth;
        const itemWidth = window.innerWidth >= 1024 ? 160 : window.innerWidth >= 768 ? 144 : 128;
        const gap = 16;
        const totalWidth = services.length * (itemWidth + gap) - gap;
        
        const newVisibleCount = Math.floor(containerWidth / (itemWidth + gap));
        setVisibleCount(newVisibleCount);
        
        setShowArrows(totalWidth > containerWidth && window.innerWidth >= 768);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const handleNext = () => {
    if (sliderRef.current) {
      const itemWidth = window.innerWidth >= 1024 ? 160 : window.innerWidth >= 768 ? 144 : 128;
      const gap = 16;
      const scrollAmount = (itemWidth + gap) * Math.min(3, services.length - visibleCount);
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const itemWidth = window.innerWidth >= 1024 ? 160 : window.innerWidth >= 768 ? 144 : 128;
      const gap = 16;
      const scrollAmount = (itemWidth + gap) * Math.min(3, services.length - visibleCount);
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        {t('servicesSquareSlider.title')}
      </h2>
      
      <div className="relative">
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/gigs?categoria=${service.slug}`}
                  className="group flex-shrink-0"
                >
                  <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white border border-gray-200 flex flex-col items-center justify-center p-4 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                    <Icon className="w-12 h-12 text-indigo-600 mb-3" />
                    <span className="text-sm md:text-base text-gray-700 text-center font-medium">
                      {t(`categories.${service.slug}.name`)}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows - Desktop Only */}
        {showArrows && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              aria-label="Next services"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
