import { useEffect, type ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPANY, CONTACT } from '@/constants/contact';

const LAST_UPDATED = '26 September 2026';

type LegalPageProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const LegalPage = ({ title, description, children }: LegalPageProps) => {
  useEffect(() => {
    document.title = `${title} | YashAI Technologies`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    window.scrollTo(0, 0);
  }, [title, description]);

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main" className="container mx-auto px-6 pt-36 pb-24 max-w-3xl legal">
        <h1 className="font-space text-3xl lg:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: {LAST_UPDATED}</p>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const PrivacyPolicy = () => (
  <LegalPage
    title="Privacy Policy"
    description="How YashAI Technologies Private Limited collects, uses and protects personal data."
  >
    <p>
      This policy explains how {COMPANY.legalName} ("YashAI", "we", "us"), CIN {COMPANY.cin}, handles
      personal data when you visit yashaitech.com or contact us. We follow India's Digital Personal
      Data Protection Act, 2023.
    </p>

    <h2>What we collect</h2>
    <ul>
      <li><strong>Information you send us:</strong> your name, email address, phone number and the content of your message when you email us or message us on WhatsApp.</li>
      <li><strong>Technical data:</strong> our hosting provider (Vercel) records standard server logs, such as IP address, browser type and the pages requested, to keep the site running and secure.</li>
    </ul>
    <p>
      This website does not use advertising or analytics cookies and does not track you across other websites.
    </p>

    <h2>How we use it</h2>
    <ul>
      <li>To reply to your enquiry and provide the products or services you ask for.</li>
      <li>To keep the website secure and fix problems.</li>
      <li>To meet legal, tax and accounting obligations.</li>
    </ul>
    <p>We do not sell your personal data.</p>

    <h2>Third-party services</h2>
    <p>Some parts of the site are provided by other companies, which receive your IP address when your browser loads them:</p>
    <ul>
      <li>Vercel (website hosting)</li>
      <li>Google Fonts and cdnjs/Cloudflare (fonts and icons)</li>
      <li>Unsplash (some images)</li>
      <li>WhatsApp (only if you choose to message us there)</li>
    </ul>
    <p>
      Our career platform GetJobEasy (jobs.yashaitech.com) collects registration details such as resumes
      and photos. That data is covered by the privacy notice shown on that site.
    </p>

    <h2>How long we keep it</h2>
    <p>
      We keep enquiry messages for as long as needed to respond and follow up, and then for up to
      2 years unless the law requires longer. Server logs are kept according to Vercel's retention
      settings.
    </p>

    <h2>Your rights</h2>
    <p>
      You can ask us to access, correct or delete your personal data, withdraw consent, or nominate
      someone to exercise these rights for you. Email{' '}
      <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. We will reply within 30 days.
    </p>

    <h2>Grievance officer</h2>
    <p>
      For complaints about how we handle your data, contact our grievance officer at{' '}
      <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>, or write to {COMPANY.legalName},{' '}
      {COMPANY.address}. If you are not satisfied with our response, you may complain to the Data
      Protection Board of India.
    </p>

    <h2>Changes</h2>
    <p>We will post any changes to this policy on this page and update the date at the top.</p>
  </LegalPage>
);

export const TermsOfService = () => (
  <LegalPage
    title="Terms of Service"
    description="Terms for using the YashAI Technologies website."
  >
    <p>
      These terms apply to your use of yashaitech.com, operated by {COMPANY.legalName}
      (CIN {COMPANY.cin}), registered at {COMPANY.address}. By using the site you agree to them.
    </p>

    <h2>Information on this site</h2>
    <p>
      We describe our products and services in good faith. Products marked "in development" are not
      yet generally available, and features may change before launch. Nothing on this site is a
      binding offer. Any paid work is governed by a separate written agreement.
    </p>

    <h2>Acceptable use</h2>
    <p>
      Do not misuse the site: no attempts to break its security, overload it, scrape it at scale,
      or use it for anything unlawful.
    </p>

    <h2>Intellectual property</h2>
    <p>
      The YashAI name, logo, text and design of this site belong to {COMPANY.legalName}. Some photos
      are used under the Unsplash licence. You may not copy the site's content for commercial use
      without our permission.
    </p>

    <h2>Links to other sites</h2>
    <p>We are not responsible for the content or privacy practices of websites we link to.</p>

    <h2>Liability</h2>
    <p>
      The site is provided "as is". To the extent permitted by law, we are not liable for any
      indirect or consequential loss arising from your use of it.
    </p>

    <h2>Governing law</h2>
    <p>
      These terms are governed by the laws of India. Courts in Hyderabad, Telangana have exclusive
      jurisdiction.
    </p>

    <h2>Contact</h2>
    <p>
      Questions about these terms: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
    </p>
  </LegalPage>
);
