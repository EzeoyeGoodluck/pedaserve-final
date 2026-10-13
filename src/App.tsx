import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InsightsHubPage from './pages/InsightsHubPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import TheWritingHubPage from './pages/TheWritingHubPage';
import SeoMarketingPage from './pages/SeoMarketingPage';
import TrainingLeadershipPage from './pages/TrainingLeadershipPage';
import AgribusinessPage from './pages/AgribusinessPage';
import EnergyProcurementPage from './pages/EnergyProcurementPage';
import BlogManagementPage from './pages/BlogManagementPage';
import CharityFoundationPage from './pages/CharityFoundationPage';
import ScientificDocumentationPage from './pages/ScientificDocumentationPage';
import CreativeDirectionPage from './pages/CreativeDirectionPage';
import EconomicsPolicyPage from './pages/EconomicsPolicyPage';
import FinanceCapitalPage from './pages/FinanceCapitalPage';
import AboutUsPage from './pages/AboutUsPage';
import LegalPage from './pages/LegalPage';
import { matchRoute, pathFor, isLegacyRouteHash, RouteMatch } from './lib/routes';

interface AppProps {
  /** Path to render. Supplied by the prerender script; the browser reads location instead. */
  initialPath?: string;
}

export default function App({ initialPath }: AppProps) {
  const [route, setRoute] = useState<RouteMatch>(() =>
    matchRoute(initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/'))
  );

  useEffect(() => {
    // One-time migration for old #hash links still floating around.
    const hash = window.location.hash.replace('#', '').trim();
    if (hash && isLegacyRouteHash(hash)) {
      const m = matchRoute(hash);
      const target = m.page === 'article' ? pathFor('article', m.articleSlug) : pathFor(m.page);
      window.history.replaceState(null, '', target);
      setRoute(m);
    }

    const onPop = () => setRoute(matchRoute(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const handleNavigate = useCallback((path: string, articleId?: string) => {
    const target = pathFor(path, articleId);
    if (window.location.pathname !== target) {
      window.history.pushState(null, '', target);
    }
    setRoute(matchRoute(target));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const renderCurrentView = () => {
    switch (route.page) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'insights': return <InsightsHubPage onNavigate={handleNavigate} />;
      case 'article': return <ArticleDetailPage articleId={route.articleSlug ?? ''} onNavigate={handleNavigate} />;
      case 'contact': return <ContactPage onNavigate={handleNavigate} />;
      case 'services': return <ServicesPage onNavigate={handleNavigate} />;
      case 'the-writing-hub': return <TheWritingHubPage onNavigate={handleNavigate} />;
      case 'seo-and-digital-marketing': return <SeoMarketingPage onNavigate={handleNavigate} />;
      case 'training-and-leadership': return <TrainingLeadershipPage onNavigate={handleNavigate} />;
      case 'agribusiness': return <AgribusinessPage onNavigate={handleNavigate} />;
      case 'energy-procurement': return <EnergyProcurementPage onNavigate={handleNavigate} />;
      case 'blog-management': return <BlogManagementPage onNavigate={handleNavigate} />;
      case 'charity-and-foundation': return <CharityFoundationPage onNavigate={handleNavigate} />;
      case 'scientific-documentation': return <ScientificDocumentationPage onNavigate={handleNavigate} />;
      case 'creative-direction': return <CreativeDirectionPage onNavigate={handleNavigate} />;
      case 'economics-and-policy': return <EconomicsPolicyPage onNavigate={handleNavigate} />;
      case 'finance-and-capital': return <FinanceCapitalPage onNavigate={handleNavigate} />;
      case 'about-us': return <AboutUsPage onNavigate={handleNavigate} />;
      case 'privacy-policy': return <LegalPage type="privacy-policy" onNavigate={handleNavigate} />;
      case 'terms-of-service': return <LegalPage type="terms-of-service" onNavigate={handleNavigate} />;
      case 'sitemap': return <LegalPage type="sitemap" onNavigate={handleNavigate} />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Header expects the legacy key for active-state highlighting.
  const currentPath = route.page === 'contact' ? 'contact-us' : route.page;

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface selection:bg-secondary-container selection:text-primary">
      <Header currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="w-full pt-28 bg-background flex-1">
        {renderCurrentView()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
