'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ResumeVersion = 'technologist' | 'land-steward';

export default function Home() {
  const [resumeVersion, setResumeVersion] = useState<ResumeVersion>('land-steward');

  const technologistResume = '/resumes/Chris_Melancon_Resume_Technologist.pdf';
  const landStewardResume = '/resumes/Chris_Melancon_Resume_Land_Steward.pdf';

  const currentResume = resumeVersion === 'technologist' ? technologistResume : landStewardResume;

  const scrollToResume = () => {
    const resumeSection = document.getElementById('resume-section');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#000000', fontFamily: 'Georgia, serif' }}>
      {/* Navigation */}
      <nav className="border-b" style={{ borderColor: '#2A2A2A' }}>
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-base font-bold" style={{ fontFamily: 'Georgia, serif' }}>Chris Melançon</h1>
          <div className="flex gap-6 items-center">
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/chrismelancon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
              title="LinkedIn"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#000000' }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            {/* Email Icon */}
            <a
              href="mailto:cpmelancon@gmail.com"
              className="hover:opacity-70 transition"
              title="Email"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#000000' }}>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <p className="mb-2 leading-relaxed font-bold text-2xl text-center" style={{ color: '#2D5016', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          I believe the Human Economy and Nature's Economy can be reconciled.
        </p>
      </section>

      {/* Positioning Statement + Featured Image Section (Side by Side) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left side: Positioning Statement */}
          <div className="flex flex-col justify-start">
            <div className="space-y-4">
              <h2 className="text-3xl mb-4" style={{ color: '#000000', fontFamily: 'Georgia, serif' }}>
                Committed to Regenerative Leadership
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#000000', lineHeight: '1.4' }}>
                I am committed to promoting resilient agroecological systems that bend human behavior
                towards justice and resilience, as a{' '}
                <span
                  onClick={() => {
                    setResumeVersion('land-steward');
                    scrollToResume();
                  }}
                  style={{
                    color: '#1B4D7E',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontWeight: 'bold'
                  }}
                >
                  Land Steward
                </span>{' '}
                and as a{' '}
                <span
                  onClick={() => {
                    setResumeVersion('technologist');
                    scrollToResume();
                  }}
                  style={{
                    color: '#1B4D7E',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontWeight: 'bold'
                  }}
                >
                  Technologist
                </span>
                .
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#000000', lineHeight: '1.4' }}>
                I'm now seeking a leadership role as a technically astute land steward and ecologically
                astute technologist serving regenerative agriculture, land stewardship, soil health,
                environmental monitoring, corporate sustainability, or plant and animal health. I'm open
                to conversations about operating roles, land stewardship positions, or small business
                acquisitions in this space.
              </p>
            </div>
          </div>

          {/* Right side: Featured Image - Portrait */}
          <div className="flex flex-col justify-start">
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: '2/3' }}>
              <Image
                src="/images/dog-garden.jpg"
                alt="Chris with McNab dog in garden - community and partnership"
                fill
                className="object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Toggle & Display */}
      <section className="max-w-4xl mx-auto px-6 py-12" id="resume-section">
        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => setResumeVersion('land-steward')}
            className={`px-6 py-2 text-lg transition`}
            style={{
              fontFamily: 'Georgia, serif',
              borderBottom: resumeVersion === 'land-steward' ? '2px solid #2D5016' : 'none',
              color: '#000000',
            }}
          >
            Land Steward
          </button>
          <button
            onClick={() => setResumeVersion('technologist')}
            className={`px-6 py-2 text-lg transition`}
            style={{
              fontFamily: 'Georgia, serif',
              borderBottom: resumeVersion === 'technologist' ? '2px solid #2D5016' : 'none',
              color: '#000000',
            }}
          >
            Technologist
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white p-6 rounded-lg shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="flex justify-between items-center mb-4 pb-4" style={{ borderBottom: '1px solid #2A2A2A' }}>
            <p className="text-sm" style={{ color: '#555555' }}>
              {resumeVersion === 'technologist' ? 'Product Leader & Founder' : 'Land Steward & Operating Executive'}
            </p>
            <a
              href={currentResume}
              download
              className="text-sm px-4 py-2 rounded transition"
              style={{ backgroundColor: '#2D5016', color: '#FFFFFF', fontFamily: 'Georgia, serif' }}
            >
              Download PDF
            </a>
          </div>
          <iframe
            src={`${currentResume}#toolbar=0`}
            className="w-full"
            style={{
              height: '600px',
              border: 'none',
              borderRadius: '4px',
            }}
            title="Resume PDF"
          />
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="max-w-4xl mx-auto px-6 py-20" style={{ borderTop: '1px solid #2A2A2A' }}>
        <h2 className="text-3xl mb-12" style={{ color: '#000000', fontFamily: 'Georgia, serif' }}>
          These are the domains and roles where I will thrive and create the most impact.
        </h2>

        <div>
          <p className="text-lg mb-6 font-bold" style={{ color: '#1B4D7E', fontFamily: 'Georgia, serif' }}>
            Director/VP roles in Regenerative Agriculture · Director of Land Stewardship · VP of Product for AgTech platforms · Director of Soil Health Programs · VP of Corporate Sustainability · Director of Environmental Monitoring · Director of Animal/Plant Health Programs
          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="max-w-5xl mx-auto px-6 py-20" style={{ borderTop: '1px solid #2A2A2A' }}>
        <h2 className="text-3xl mb-12" style={{ color: '#000000', fontFamily: 'Georgia, serif' }}>
          Chris in the Field
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Beehives */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-gray-200">
              <Image
                src="/images/beehives.jpg"
                alt="Chris working with beehives"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm" style={{ color: '#000000' }}>
              Hands-on expertise and precision in land stewardship
            </p>
          </div>

          {/* Field Inspection */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-gray-200">
              <Image
                src="/images/field-inspection.jpg"
                alt="Chris examining crops in field"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm" style={{ color: '#000000' }}>
              Ecological knowledge and practical assessment skills
            </p>
          </div>

          {/* Dog & Goat - Community */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-gray-200">
              <Image
                src="/images/community-dog-goat.jpg"
                alt="Chris with dog and goat"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm" style={{ color: '#000000' }}>
              Community and partnership in land stewardship
            </p>
          </div>

          {/* Falconry */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-gray-200">
              <Image
                src="/images/falcon-silhouette.jpg"
                alt="Chris with falcon at dusk"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm" style={{ color: '#000000' }}>
              Mastery, discipline, and deep relationship with natural systems
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20" style={{ borderTop: '1px solid #2A2A2A' }}>
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-4" style={{ color: '#000000', fontFamily: 'Georgia, serif' }}>
            Let's Explore Regenerative Leadership Together
          </h2>
          <p className="text-lg" style={{ color: '#1B4D7E' }}>
            I'd welcome a conversation about where our shared values and visions align.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href="mailto:cpmelancon@gmail.com"
            className="px-6 py-3 rounded transition"
            style={{ backgroundColor: '#0D2847', color: '#FFFFFF', fontFamily: 'Georgia, serif' }}
          >
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/chrismelancon"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded transition"
            style={{ backgroundColor: '#0D2847', color: '#FFFFFF', fontFamily: 'Georgia, serif' }}
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 text-sm" style={{ borderColor: '#2A2A2A', color: '#000000' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Chris Melançon • Sonoma, California</p>
        </div>
      </footer>
    </div>
  );
}
