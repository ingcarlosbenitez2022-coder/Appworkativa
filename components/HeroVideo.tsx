'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import { useState, useEffect, useRef } from 'react';
import {
  Search,
  Code,
  Palette,
  TrendingUp,
  ShoppingCart,
  Smartphone,
  Wrench,
  Pause,
  Play
} from 'lucide-react';

const HERO_VIDEOS = [
  '/videos/hero/hero-video1.mp4',
  '/videos/hero/hero-video2.mp4',
  '/videos/hero/hero-video3.mp4',
  '/videos/hero/hero-video4.mp4',
];

const CATEGORY_KEYS = ['webDev', 'uiUx', 'marketing', 'ecommerce', 'mobile', 'support'] as const;
const CATEGORY_ICONS = [Code, Palette, TrendingUp, ShoppingCart, Smartphone, Wrench] as const;

export default function HeroVideo() {
  const t = useTranslations('hero');
  const tCategories = useTranslations('categories');
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          isPlaying ? video.play() : video.pause();
        } else {
          video.pause();
        }
      }
    });
  }, [currentVideoIndex, isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    const params = query ? `?q=${encodeURIComponent(query)}` : '';
    router.push(`/gigs${params}`);
  };

  const handleCategoryClick = (categoryKey: string) => {
    router.push(`/gigs?category=${categoryKey}`);
  };

  return (
    <section className="relative w-full h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden">
      {/* Videos rotativos */}
      <div className="absolute inset-0">
        {HERO_VIDEOS.map((src, index) => (
          <video
            key={src}
            ref={(el) => { videoRefs.current[index] = el; }}
            autoPlay={isPlaying && index === 0}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col justify-center h-full max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            {t('title')}
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-6">
            {t('subtitle')}
          </p>
          <form onSubmit={handleSearch} className="w-full mb-5">
            <div className="flex items-stretch bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('search.placeholder')}
                  className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 text-gray-900 placeholder-gray-500 text-sm md:text-base focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-5 md:px-6 py-3 md:py-4 text-sm md:text-base transition-colors whitespace-nowrap"
              >
                {t('search.button')}
              </button>
            </div>
          </form>
          <div className="flex flex-wrap gap-2">
            {CATEGORY_KEYS.map((key, index) => {
              const Icon = CATEGORY_ICONS[index];
              return (
                <button
                  key={key}
                  onClick={() => handleCategoryClick(key)}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-colors text-xs md:text-sm"
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span>{tCategories(`${key}.name`)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Botón Play/Pause - AHORA CON Z-INDEX MÁS ALTO Y POSICIÓN FIJA */}
      <button
        onClick={togglePlay}
        className="absolute bottom-6 right-6 z-50 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-3 rounded-full transition-all border border-white/30 shadow-lg"
        aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>
    </section>
  );
}