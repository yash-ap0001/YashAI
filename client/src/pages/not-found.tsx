import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-dark-900 text-white flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 container mx-auto px-6 pt-40 pb-24 text-center">
        <p className="text-amber-500 font-semibold mb-2">404</p>
        <h1 className="font-space text-3xl lg:text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has moved.</p>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white px-6 py-3 rounded-lg"
        >
          Back to home
        </a>
      </main>
      <Footer />
    </div>
  );
}
