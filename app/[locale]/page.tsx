import { setRequestLocale } from 'next-intl/server';
import HeroVideo from '@/components/HeroVideo';
import ServicesSquareSlider from '@/components/ServicesSquareSlider';
import Categories from '@/components/Categories';
import ReadySection from '@/components/ReadySection';
import HowItWorks from '@/components/HowItWorks';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroVideo />
      <ServicesSquareSlider />
      <Categories />
      <ReadySection />
      <HowItWorks />
    </>
  );
}
