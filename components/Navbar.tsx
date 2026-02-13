'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LanguageSelector from './LanguageSelector';
import MegaMenu from './MegaMenu';

import {
  MagnifyingGlassIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  ChartBarIcon,
  VideoCameraIcon,
  CpuChipIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  PencilSquareIcon,
  SpeakerWaveIcon,
  CameraIcon,
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';

interface NavbarProps {
  locale?: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const controlSearch = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowSearch(true);
      } 
      else if (currentScrollY < lastScrollY) {
        setShowSearch(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlSearch);
    return () => window.removeEventListener('scroll', controlSearch);
  }, [lastScrollY]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/gigs?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
        
        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-workativa-azulw.png"
            alt="Workativa"
            width={200}
            height={70}
            priority
            className="object-contain"
          />
        </Link>

        {/* BUSCADOR EN NAVBAR */}
        <div
          className={`
            hidden md:block flex-1 max-w-md transition-all duration-300 ease-in-out
            ${showSearch ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}
          `}
        >
          <form onSubmit={handleSearch} className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder') || "Buscar servicios..."}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-indigo-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </form>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          
          {/* 🟢 EXPLORAR - AHORA TRADUCIDO */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-2 font-medium text-gray-600 hover:text-indigo-600"
            >
              {t('explore')}  {/* ← AHORA USA TRADUCCIÓN */}
              <svg className="w-5 h-5 mt-[2px]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21 10 11.94l4.77-4.73" />
              </svg>
            </button>

            {open && <MegaMenu />}
          </div>

          {/* 🟢 EMPIEZA A VENDER - AHORA TRADUCIDO */}
          <Link href="/how-it-works" className="text-gray-600 hover:text-indigo-600 whitespace-nowrap">
            {t('startSelling')}  {/* ← AHORA USA TRADUCCIÓN */}
          </Link>

          <LanguageSelector />

          {/* 🟢 INICIAR SESIÓN - TRADUCIDO */}
          <Link href="/login" className="font-medium text-gray-700 hover:text-indigo-600 whitespace-nowrap">
            {t('login')}
          </Link>

          {/* 🟢 REGÍSTRATE - TRADUCIDO */}
          <Link
            href="/register"
            className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 whitespace-nowrap"
          >
            {t('register')}
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMobileMenu(true)}
        >
          <Bars3Icon className="w-7 h-7 text-gray-700" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <Image src="/images/logo-workativa-azulw.png" alt="Workativa" width={160} height={40} />
            <button onClick={() => setMobileMenu(false)}>
              <XMarkIcon className="w-7 h-7" />
            </button>
          </div>

          {/* Buscador en móvil */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder') || "Buscar servicios..."}
                className="w-full pl-10 pr-4 py-3 rounded-md border border-indigo-300 text-sm focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </form>

          <div className="space-y-4">
            {/* 🟢 EXPLORAR EN MÓVIL - TRADUCIDO */}
            <button
              className="w-full text-left font-semibold text-lg flex items-center justify-between"
              onClick={() => setOpen(!open)}
            >
              {t('explore')}
              <svg className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21 10 11.94l4.77-4.73" />
              </svg>
            </button>

            {open && <MegaMenu mobile />}

            {/* 🟢 EMPIEZA A VENDER EN MÓVIL - TRADUCIDO */}
            <Link 
              href="/how-it-works" 
              className="block py-3 text-gray-700 hover:text-indigo-600"
              onClick={() => setMobileMenu(false)}
            >
              {t('startSelling')}
            </Link>

            <div className="py-3">
              <LanguageSelector />
            </div>

            {/* 🟢 INICIAR SESIÓN EN MÓVIL - TRADUCIDO */}
            <Link 
              href="/login" 
              className="block py-3 text-gray-700 hover:text-indigo-600"
              onClick={() => setMobileMenu(false)}
            >
              {t('login')}
            </Link>

            {/* 🟢 REGÍSTRATE EN MÓVIL - TRADUCIDO */}
            <Link
              href="/register"
              className="block mt-4 bg-green-600 text-white text-center py-3 rounded-md font-semibold hover:bg-green-700"
              onClick={() => setMobileMenu(false)}
            >
              {t('register')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}