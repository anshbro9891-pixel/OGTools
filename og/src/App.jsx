import { Suspense, lazy, useEffect } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import AdPlaceholder from './components/AdPlaceholder';
import BackgroundGlow from './components/BackgroundGlow';
import Footer from './components/Footer';
import LoadingSkeleton from './components/LoadingSkeleton';
import Navbar from './components/Navbar';

const HomePage = lazy(() => import('./pages/HomePage'));
const ToolsListPage = lazy(() => import('./pages/ToolsListPage'));
const ToolDetailPage = lazy(() => import('./pages/ToolDetailPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function AppShell() {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      <BackgroundGlow />
      <div className="noise-overlay" />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10 pb-16">
        <div className="section-shell pt-24 sm:pt-28">
          <AdPlaceholder variant="banner" label="Header AdSense Slot" />
        </div>
        <Suspense fallback={<LoadingSkeleton />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/instagram-tools"
          element={<ToolsListPage toolType="instagram" />}
        />
        <Route path="/ai-tools" element={<ToolsListPage toolType="ai" />} />
        <Route path="/tool/:slug" element={<ToolDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
