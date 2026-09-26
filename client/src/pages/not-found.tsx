import { useEffect } from 'react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | YashAI Technologies';
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex');
  }, []);

  return (
    <div className="site min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1 container-x pt-24 pb-24 text-center">
        <p className="kicker">404</p>
        <h1 className="h2 mb-4">Page not found</h1>
        <p className="text-soft mb-8">The page you are looking for doesn't exist or has moved.</p>
        <a href="/" className="btn btn-primary">
          Back to home
        </a>
      </main>
      <Footer />
    </div>
  );
}
