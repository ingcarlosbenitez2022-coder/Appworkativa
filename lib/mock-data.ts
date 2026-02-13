import type { Locale } from './i18n-config';
import type { Gig, Freelancer } from '@/types';

type GigData = Record<Locale, Gig[]>;
type FreelancerData = Record<Locale, Freelancer[]>;

export const mockGigs: GigData = {
  es: [
    { id: '1', title: 'Desarrollaré tu sitio web profesional', description: 'Sitio moderno con React/Next.js', price: 150, author: 'Carlos Dev', rating: 4.9, category: 'webDev' },
    { id: '2', title: 'Diseño de interfaz UI/UX', description: 'Diseños atractivos para tu app', price: 120, author: 'Ana Designer', rating: 5.0, category: 'uiUx' },
    { id: '3', title: 'Estrategia de marketing digital', description: 'SEO y campañas en redes sociales', price: 200, author: 'Marco Marketing', rating: 4.8, category: 'marketing' },
  ],
  en: [
    { id: '1', title: 'I will build your professional website', description: 'Modern site with React/Next.js', price: 150, author: 'Carlos Dev', rating: 4.9, category: 'webDev' },
    { id: '2', title: 'UI/UX interface design', description: 'Attractive designs for your app', price: 120, author: 'Ana Designer', rating: 5.0, category: 'uiUx' },
    { id: '3', title: 'Digital marketing strategy', description: 'SEO and social media campaigns', price: 200, author: 'Marco Marketing', rating: 4.8, category: 'marketing' },
  ],
  fr: [
    { id: '1', title: 'Je créerai votre site web professionnel', description: 'Site moderne avec React/Next.js', price: 150, author: 'Carlos Dev', rating: 4.9, category: 'webDev' },
    { id: '2', title: 'Conception d\'interface UI/UX', description: 'Designs attractifs pour votre app', price: 120, author: 'Ana Designer', rating: 5.0, category: 'uiUx' },
    { id: '3', title: 'Stratégie de marketing digital', description: 'SEO et campagnes réseaux sociaux', price: 200, author: 'Marco Marketing', rating: 4.8, category: 'marketing' },
  ],
  de: [
    { id: '1', title: 'Ich erstelle Ihre professionelle Website', description: 'Moderne Website mit React/Next.js', price: 150, author: 'Carlos Dev', rating: 4.9, category: 'webDev' },
    { id: '2', title: 'UI/UX Schnittstellendesign', description: 'Attraktive Designs für Ihre App', price: 120, author: 'Ana Designer', rating: 5.0, category: 'uiUx' },
    { id: '3', title: 'Digitale Marketingstrategie', description: 'SEO und Social-Media-Kampagnen', price: 200, author: 'Marco Marketing', rating: 4.8, category: 'marketing' },
  ],
  it: [
    { id: '1', title: 'Creerò il tuo sito web professionale', description: 'Sito moderno con React/Next.js', price: 150, author: 'Carlos Dev', rating: 4.9, category: 'webDev' },
    { id: '2', title: 'Progettazione interfaccia UI/UX', description: 'Design accattivanti per la tua app', price: 120, author: 'Ana Designer', rating: 5.0, category: 'uiUx' },
    { id: '3', title: 'Strategia di marketing digitale', description: 'SEO e campagne sui social', price: 200, author: 'Marco Marketing', rating: 4.8, category: 'marketing' },
  ],
  pt: [
    { id: '1', title: 'Desenvolverei seu site profissional', description: 'Site moderno com React/Next.js', price: 150, author: 'Carlos Dev', rating: 4.9, category: 'webDev' },
    { id: '2', title: 'Design de interface UI/UX', description: 'Designs atraentes para seu app', price: 120, author: 'Ana Designer', rating: 5.0, category: 'uiUx' },
    { id: '3', title: 'Estratégia de marketing digital', description: 'SEO e campanhas em redes sociais', price: 200, author: 'Marco Marketing', rating: 4.8, category: 'marketing' },
  ],
  nl: [
    { id: '1', title: 'Ik bouw je professionele website', description: 'Moderne site met React/Next.js', price: 150, author: 'Carlos Dev', rating: 4.9, category: 'webDev' },
    { id: '2', title: 'UI/UX interfaceontwerp', description: 'Aantrekkelijke ontwerpen voor je app', price: 120, author: 'Ana Designer', rating: 5.0, category: 'uiUx' },
    { id: '3', title: 'Digitale marketingstrategie', description: 'SEO en social media campagnes', price: 200, author: 'Marco Marketing', rating: 4.8, category: 'marketing' },
  ],
  sv: [
    { id: '1', title: 'Jag bygger din professionella webbplats', description: 'Modern webbplats med React/Next.js', price: 150, author: 'Carlos Dev', rating: 4.9, category: 'webDev' },
    { id: '2', title: 'UI/UX gränssnittsdesign', description: 'Tilltalande design för din app', price: 120, author: 'Ana Designer', rating: 5.0, category: 'uiUx' },
    { id: '3', title: 'Digital marknadsföringsstrategi', description: 'SEO och sociala medieförbuden', price: 200, author: 'Marco Marketing', rating: 4.8, category: 'marketing' },
  ],
  zh: [
    { id: '1', title: '我将为你打造专业网站', description: '使用 React/Next.js 的现代化网站', price: 150, author: 'Carlos Dev', rating: 4.9, category: 'webDev' },
    { id: '2', title: 'UI/UX 界面设计', description: '为你的应用打造吸引人的设计', price: 120, author: 'Ana Designer', rating: 5.0, category: 'uiUx' },
    { id: '3', title: '数字营销策略', description: 'SEO 与社交媒体营销活动', price: 200, author: 'Marco Marketing', rating: 4.8, category: 'marketing' },
  ],
  ja: [
    { id: '1', title: 'プロフェッショナルなウェブサイトを制作します', description: 'React/Next.js のモダンなサイト', price: 150, author: 'Carlos Dev', rating: 4.9, category: 'webDev' },
    { id: '2', title: 'UI/UXインターフェースデザイン', description: 'あなたのアプリの魅力的なデザイン', price: 120, author: 'Ana Designer', rating: 5.0, category: 'uiUx' },
    { id: '3', title: 'デジタルマーケティング戦略', description: 'SEOとソーシャルメディアキャンペーン', price: 200, author: 'Marco Marketing', rating: 4.8, category: 'marketing' },
  ],
  ar: [
    { id: '1', title: 'سأصمم موقعك الاحترافي', description: 'موقع حديث بـ React/Next.js', price: 150, author: 'Carlos Dev', rating: 4.9, category: 'webDev' },
    { id: '2', title: 'تصميم واجهة UI/UX', description: 'تصاميم جذابة لتطبيقك', price: 120, author: 'Ana Designer', rating: 5.0, category: 'uiUx' },
    { id: '3', title: 'استراتيجية التسويق الرقمي', description: 'تحسين محركات البحث وحملات التواصل', price: 200, author: 'Marco Marketing', rating: 4.8, category: 'marketing' },
  ],
};

export const mockFreelancers: FreelancerData = {
  es: [
    { id: '1', name: 'Carlos Dev', title: 'Desarrollador Full Stack', bio: 'Especialista en React y Node.js con más de 5 años de experiencia.', rating: 4.9, completedJobs: 120, category: 'webDev' },
    { id: '2', name: 'Ana Designer', title: 'Diseñadora UI/UX', bio: 'Creo experiencias digitales memorables.', rating: 5.0, completedJobs: 85, category: 'uiUx' },
  ],
  en: [
    { id: '1', name: 'Carlos Dev', title: 'Full Stack Developer', bio: 'React and Node.js specialist with over 5 years of experience.', rating: 4.9, completedJobs: 120, category: 'webDev' },
    { id: '2', name: 'Ana Designer', title: 'UI/UX Designer', bio: 'I create memorable digital experiences.', rating: 5.0, completedJobs: 85, category: 'uiUx' },
  ],
  fr: [
    { id: '1', name: 'Carlos Dev', title: 'Développeur Full Stack', bio: 'Spécialiste React et Node.js avec plus de 5 ans d\'expérience.', rating: 4.9, completedJobs: 120, category: 'webDev' },
    { id: '2', name: 'Ana Designer', title: 'Designer UI/UX', bio: 'Je crée des expériences digitales mémorables.', rating: 5.0, completedJobs: 85, category: 'uiUx' },
  ],
  de: [
    { id: '1', name: 'Carlos Dev', title: 'Full Stack Entwickler', bio: 'React- und Node.js-Spezialist mit über 5 Jahren Erfahrung.', rating: 4.9, completedJobs: 120, category: 'webDev' },
    { id: '2', name: 'Ana Designer', title: 'UI/UX Designerin', bio: 'Ich erstelle unvergessliche digitale Erlebnisse.', rating: 5.0, completedJobs: 85, category: 'uiUx' },
  ],
  it: [
    { id: '1', name: 'Carlos Dev', title: 'Sviluppatore Full Stack', bio: 'Specialista React e Node.js con oltre 5 anni di esperienza.', rating: 4.9, completedJobs: 120, category: 'webDev' },
    { id: '2', name: 'Ana Designer', title: 'Designer UI/UX', bio: 'Creo esperienze digitali indimenticabili.', rating: 5.0, completedJobs: 85, category: 'uiUx' },
  ],
  pt: [
    { id: '1', name: 'Carlos Dev', title: 'Desenvolvedor Full Stack', bio: 'Especialista em React e Node.js com mais de 5 anos de experiência.', rating: 4.9, completedJobs: 120, category: 'webDev' },
    { id: '2', name: 'Ana Designer', title: 'Designer UI/UX', bio: 'Crio experiências digitais memoráveis.', rating: 5.0, completedJobs: 85, category: 'uiUx' },
  ],
  nl: [
    { id: '1', name: 'Carlos Dev', title: 'Full Stack Ontwikkelaar', bio: 'React en Node.js specialist met meer dan 5 jaar ervaring.', rating: 4.9, completedJobs: 120, category: 'webDev' },
    { id: '2', name: 'Ana Designer', title: 'UI/UX Ontwerper', bio: 'Ik creëer memorabele digitale ervaringen.', rating: 5.0, completedJobs: 85, category: 'uiUx' },
  ],
  sv: [
    { id: '1', name: 'Carlos Dev', title: 'Full Stack-utvecklare', bio: 'React- och Node.js-specialist med över 5 års erfarenhet.', rating: 4.9, completedJobs: 120, category: 'webDev' },
    { id: '2', name: 'Ana Designer', title: 'UI/UX-designare', bio: 'Jag skapar minnesvärda digitala upplevelser.', rating: 5.0, completedJobs: 85, category: 'uiUx' },
  ],
  zh: [
    { id: '1', name: 'Carlos Dev', title: '全栈开发工程师', bio: 'React 与 Node.js 专家，拥有 5 年以上经验。', rating: 4.9, completedJobs: 120, category: 'webDev' },
    { id: '2', name: 'Ana Designer', title: 'UI/UX 设计师', bio: '打造令人难忘的数字体验。', rating: 5.0, completedJobs: 85, category: 'uiUx' },
  ],
  ja: [
    { id: '1', name: 'Carlos Dev', title: 'フルスタック開発者', bio: '5年以上の経験を持つReactとNode.jsの専門家。', rating: 4.9, completedJobs: 120, category: 'webDev' },
    { id: '2', name: 'Ana Designer', title: 'UI/UXデザイナー', bio: '忘れられないデジタル体験を創造します。', rating: 5.0, completedJobs: 85, category: 'uiUx' },
  ],
  ar: [
    { id: '1', name: 'Carlos Dev', title: 'مطور Full Stack', bio: 'متخصص في React و Node.js بأكثر من 5 سنوات خبرة.', rating: 4.9, completedJobs: 120, category: 'webDev' },
    { id: '2', name: 'Ana Designer', title: 'مصممة واجهات المستخدم', bio: 'أصمم تجارب رقمية لا تُنسى.', rating: 5.0, completedJobs: 85, category: 'uiUx' },
  ],
};
