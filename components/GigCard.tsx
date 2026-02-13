'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import type { Gig } from '@/types';

interface GigCardProps {
  gig: Gig;
  locale: string;
}

export default function GigCard({ gig }: GigCardProps) {
  const t = useTranslations('gigs');

  return (
    <Link href={`/freelancer/${gig.id}`}>
      <article className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all h-full flex flex-col">
        <h3 className="text-lg font-semibold text-text-main mb-2 line-clamp-1">
          {gig.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{gig.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-primary">${gig.price}</span>
          <span className="text-sm text-gray-500">
            {t('from')} {gig.author} · ⭐ {gig.rating}
          </span>
        </div>
      </article>
    </Link>
  );
}
