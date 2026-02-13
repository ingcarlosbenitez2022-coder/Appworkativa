'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import {
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
  ShoppingCartIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';

export default function MegaMenu({ mobile = false }: { mobile?: boolean }) {
  // 🟢 ESTA LÍNEA ES LA CLAVE - Conecta con el idioma seleccionado en el Navbar
  const t = useTranslations('categories');

  return (
    <div
      className={
        mobile
          ? "mt-4 mb-2"
          : "absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50"
      }
    >
      <div
        className={`
          bg-white border shadow-xl rounded-2xl p-8
          grid gap-8
          ${mobile ? "grid-cols-1" : "grid-cols-4 w-[95vw] max-w-6xl"}
        `}
      >
        {/* COLUMNA 1 - Desarrollo & Tecnología */}
        <Column title={t('tech.title')}>
          <MenuItem icon={ComputerDesktopIcon} text={t('tech.web')} link="webDev" />
          <MenuItem icon={DevicePhoneMobileIcon} text={t('tech.mobile')} link="mobile" />
          <MenuItem icon={CpuChipIcon} text={t('tech.ai')} link="ai" />
          <MenuItem icon={Cog6ToothIcon} text={t('tech.backend')} link="backend" />
          <MenuItem icon={GlobeAltIcon} text={t('tech.wordpress')} link="wordpress" />
        </Column>

        {/* COLUMNA 2 - Diseño & Creatividad */}
        <Column title={t('design.title')}>
          <MenuItem icon={PaintBrushIcon} text={t('design.uiux')} link="uiUx" />
          <MenuItem icon={PencilSquareIcon} text={t('design.branding')} link="branding" />
          <MenuItem icon={PaintBrushIcon} text={t('design.graphic')} link="graphic" />
        </Column>

        {/* COLUMNA 3 - Marketing & Crecimiento */}
        <Column title={t('marketing.title')}>
          <MenuItem icon={ChartBarIcon} text={t('marketing.digital')} link="marketing" />
          <MenuItem icon={BriefcaseIcon} text={t('marketing.email')} link="email" />
          <MenuItem icon={ChartBarIcon} text={t('marketing.social')} link="social" />
          <MenuItem icon={ChartBarIcon} text={t('marketing.analytics')} link="analytics" />
        </Column>

        {/* COLUMNA 4 - E-commerce & Soporte + Multimedia */}
        <Column title={t('ecommerce.title')}>
          <MenuItem icon={ShoppingCartIcon} text={t('ecommerce.ecommerce')} link="ecommerce" />
          <MenuItem icon={WrenchIcon} text={t('ecommerce.support')} link="support" />
          <MenuItem icon={VideoCameraIcon} text={t('content.video')} link="video" />
          <MenuItem icon={CameraIcon} text={t('content.photo')} link="photo" />
          <MenuItem icon={SpeakerWaveIcon} text={t('content.audio')} link="audio" />
        </Column>
      </div>
    </div>
  );
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold uppercase text-indigo-600 tracking-wide">
        {title}
      </h4>
      <ul className="space-y-1">{children}</ul>
    </div>
  );
}

function MenuItem({ icon: Icon, text, link }: any) {
  return (
    <li>
      <Link
        href={`/gigs?category=${link}`}
        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-gray-600 hover:text-indigo-600 transition-colors"
      >
        <Icon className="w-5 h-5 text-gray-400" />
        <span className="text-sm">{text}</span>
      </Link>
    </li>
  );
}
