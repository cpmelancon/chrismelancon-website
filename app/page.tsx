'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ResumeVersion = 'technologist' | 'land-steward';

export default function Home() {
  const [resumeVersion, setResumeVersion] = useState<ResumeVersion>('technologist');

  const technologistResume = '/resumes/Chris_Melancon_Resume_Technologist.pdf';
  const landStewardResume = '/resumes/Chris_Melancon_Resume_Land_Steward.pdf';

  const currentResume = resumeVersion === 'technologist' ? technologistResume : landStewardResume;

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
      {/* Navigation */}
      <nav className="border-b" style={{ borderColor: '#2A2A2A' }}>
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold">Chris Melançon</h1>
          <div className="flex gap-6 items-center">
            <a
              href="https://linkedin.com/in/chrismelancon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:cpmelancon@gmail.com"
              className="text-sm hover:opacity-70 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-lg mb-8 leading-relaxed font-light" style={{ color: '#A0A0A0' }}>
          I believe the human economy and Nature's economy can be reconciled with
          protracted thoughtful observations and intentional long term action.
        </p>
      </section>

      {/* Featured Image Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="relative w-full" style={{ aspectRatio: '3/2', maxHeight: '500px' }}>
          <Image
            src="/images/chris-hawk.jpg"
            alt="Chris with hawk - mastery and deep relationship with natural systems"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-3xl mb-6" style={{ color: '#000000' }}>
              Committed to Regenerative Leadership
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#000000' }}>
              I am committed to promoting resilient agroecological systems that bend human behavior
              towards justice and resilience, as a Land Steward and as a Technologist.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#000000' }}>
              I'm now seeking a leadership role as a technically astute land steward and ecologically
              astute technologist serving regenerative agriculture, land stewardship, soil health,
              environmental monitoring, corporate sustainability, or Plant and Animal Health. I'm open
              to conversations about operating roles, land stewardship positions, or small business
              acquisitions in this space.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Toggle & Display */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => setResumeVersion('technologist')}
            className={`px-6 py-2 font-serif text-lg transition`}
            style={{
              borderBottom: resumeVersion === 'technologist' ? '2px solid #2D5016' : 'none',
              color: '#000000',
            }}
          >
            Technologist
          </button>
          <button
            onClick={() => setResumeVersion('land-steward')}
            className={`px-6 py-2 font-serif text-lg transition`}
            style={{
              borderBottom: resumeVersion === 'land-steward' ? '2px solid #2D5016' : 'none',
              color: '#000000',
            }}
          >
            Land Steward
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white p-6 rounded-lg shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="flex justify-between items-center mb-4 pb-4" style={{ borderBottom: '1px solid #2A2A2A' }}>
            <p className="text-sm" style={{ color: '#A0A0A0' }}>
              {resumeVersion === 'technologist' ? 'Product Leader & Founder' : 'Land Steward & Operating Executive'}
            </p>
            <a
              href={currentResume}
              download
              className="text-sm px-4 py-2 rounded transition"
              style={{ backgroundColor: '#2D5016', color: '#FFFFFF' }}
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
        <h2 className="font-serif text-3xl mb-12" style={{ color: '#000000' }}>
          I'm Exploring Leadership Opportunities Across
        </h2>

        <div className="space-y-8">
          <div>
            <p className="text-lg font-serif mb-6" style={{ color: '#3D6B22' }}>
              Regenerative agriculture · Land stewardship · AgTech decision-support · Soil health ·
              Sustainability · Environmental monitoring · Plant and Animal Health
            </p>
          </div>

          <div>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#000000' }}>
              Specific examples include: Director/VP roles in Regenerative Agriculture, Director of
              Land Stewardship, VP of Product for AgTech platforms, Director of Soil Health Programs,
              VP of Corporate Sustainability, Director of Environmental Monitoring, Director of
              Animal/Plant Health Programs.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#000000' }}>
              I'm equally interested in operating roles, land stewardship positions, or small business
              acquisitions in this space.
            </p>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="max-w-5xl mx-auto px-6 py-20" style={{ borderTop: '1px solid #2A2A2A' }}>
        <h2 className="font-serif text-3xl mb-12" style={{ color: '#000000' }}>
          Evidence of Work
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
            <p className="text-sm" style={{ color: '#A0A0A0' }}>
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
            <p className="text-sm" style={{ color: '#A0A0A0' }}>
              Ecological knowledge and practical assessment skills
            </p>
          </div>

          {/* Dog & Garden */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-gray-200">
              <Image
                src="/images/dog-garden.jpg"
                alt="Chris with McNab dog in garden"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm" style={{ color: '#A0A0A0' }}>
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
            <p className="text-sm" style={{ color: '#A0A0A0' }}>
              Mastery, discipline, and deep relationship with natural systems
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center" style={{ borderTop: '1px solid #2A2A2A' }}>
        <h2 className="font-serif text-3xl mb-8" style={{ color: '#000000' }}>
          Let's Explore Regenerative Leadership Together
        </h2>
        <p className="text-lg mb-8" style={{ color: '#A0A0A0' }}>
          I'm open to conversations about where our shared values and visions align.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="mailto:cpmelancon@gmail.com"
            className="px-6 py-3 rounded transition font-serif"
            style={{ backgroundColor: '#2D5016', color: '#FFFFFF' }}
          >
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/chrismelancon"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded transition font-serif"
            style={{ backgroundColor: '#3D6B22', color: '#FFFFFF' }}
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 text-center text-sm" style={{ borderColor: '#2A2A2A', color: '#A0A0A0' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p>Chris Melançon • Sonoma, CA • +1 415 265 3634</p>
          <p className="mt-2">
            <a href="https://linkedin.com/in/chrismelancon" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
              LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
