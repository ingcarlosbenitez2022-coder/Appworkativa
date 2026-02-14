import { setRequestLocale } from 'next-intl/server';
import HeroVideo from '@/components/HeroVideo';
import ServicesSquareSlider from '@/components/ServicesSquareSlider';
import Categories from '@/components/Categories';
import ReadySection from '@/components/ReadySection';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <HeroVideo />
        <ServicesSquareSlider />
        <Categories />
        <ReadySection />
        <HowItWorks />
      </main>
      <Footer locale={locale} />
    </>
  );
}
