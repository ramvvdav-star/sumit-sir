import React from 'react';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenPdfViewer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPdfViewer }) => {
  return (
    <section id="home" className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#0D1826] text-[#FAF8F5] overflow-hidden">
      
      {/* Subtle fine editorial vertical guide rule */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 sm:px-8 lg:px-12 pointer-events-none hidden lg:block">
        <div className="h-full border-r border-[#E7E4DD]/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Asymmetric Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B39A68] mb-6">
              <span>Education Entrepreneur</span>
              <span className="text-[#E7E4DD]/30">/</span>
              <span>Institutional Leader</span>
              <span className="text-[#E7E4DD]/30">/</span>
              <span>New Delhi</span>
            </div>

            {/* Confident, Refined Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FAF8F5] tracking-tight leading-[1.12] mb-8 [text-wrap:balance]">
              Connecting students, institutions, and educational futures.
            </h1>

            {/* Concise Editorial Introduction */}
            <p className="text-base sm:text-lg text-[#EAE6DF]/85 leading-relaxed font-normal max-w-2xl mb-10">
              Sumit Varma is an education-sector entrepreneur and community leader based in New Delhi.
              As Founder and President of the <span className="text-white font-medium">Bharat Education Forum</span> and Director of <span className="text-white font-medium">Schoolyatra</span> and <span className="text-white font-medium">Collegeyatra</span>, he focuses on transparent school discovery, higher-education guidance, and bilateral institutional dialogue.
            </p>

            {/* Core Verified Appointments Strip */}
            <div className="border-t border-b border-[#E7E4DD]/15 py-5 mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs text-[#EAE6DF]/90 font-sans">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68]" />
                  <span>Founder & President, Bharat Education Forum</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68]" />
                  <span>Director & Co-Founder, Schoolyatra</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68]" />
                  <span>Director, Collegeyatra Higher-Ed Advisory</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68]" />
                  <span>Host, BrewED Talks & Educational Dialogue</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#ventures"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#0D1826] bg-[#B39A68] hover:bg-[#C2A875] rounded transition-all shadow-sm"
              >
                <span>Explore Leadership & Ventures</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#media"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-[#FAF8F5] border border-[#E7E4DD]/25 hover:border-[#B39A68] rounded transition-all"
              >
                <span>Speaking & Media</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.pdfAssetPath}
                download="Sumit_Varma_Resume_Information_Pack.pdf"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs uppercase tracking-wider text-[#B39A68] hover:text-[#FAF8F5] transition-colors"
                title="Download verified Information Pack"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Portrait & Monograph Plate */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#142338] border border-[#E7E4DD]/15 p-8 rounded shadow-xl">
              
              {/* Monograph Top Bar */}
              <div className="flex items-center justify-between border-b border-[#E7E4DD]/15 pb-4 mb-6">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#B39A68]">
                  EXECUTIVE PROFILE
                </span>
                <span className="font-mono text-[11px] text-[#EAE6DF]/50">
                  NEW DELHI, BHARAT
                </span>
              </div>

              {/* Portrait Composition Frame */}
              <div className="relative aspect-[4/5] bg-[#0E1A2B] border border-[#E7E4DD]/10 rounded flex flex-col justify-between p-6 overflow-hidden">
                
                {/* Plate Top Tag */}
                <div className="flex justify-between items-center text-[10px] font-mono text-[#EAE6DF]/60">
                  <span>REF. BEF / SVEI / SY</span>
                  <span className="text-[#B39A68]">EST. DELHI NCR</span>
                </div>

                {/* Monogram & Title Centered */}
                <div className="my-auto text-center py-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#142338] border border-[#B39A68]/60 text-2xl font-serif font-bold text-[#FAF8F5] mb-4 shadow-sm">
                    SV
                  </div>
                  <h2 className="text-xl font-serif font-bold text-white tracking-tight">
                    Sumit Varma
                  </h2>
                  <p className="text-xs text-[#EAE6DF]/70 mt-1 max-w-[220px] mx-auto leading-relaxed">
                    Connecting schools, families, and collegiate institutions across India
                  </p>
                </div>

                {/* Plate Bottom Summary */}
                <div className="pt-4 border-t border-[#E7E4DD]/10 flex items-center justify-between text-[11px] text-[#EAE6DF]/60">
                  <span>Bharat Education Forum</span>
                  <a
                    href="https://www.linkedin.com/in/sumit-varma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B39A68] hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>

              {/* Verified Editorial Quote */}
              <div className="mt-6 pt-5 border-t border-[#E7E4DD]/15 text-xs text-[#EAE6DF]/80 italic font-serif leading-relaxed">
                &ldquo;Educational decisions determine the lifelong trajectory of students and families. Our commitment is to bring clarity to school discovery, accessibility to higher education, and institutional dignity to educators.&rdquo;
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Verified Institutional Impact Row */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#E7E4DD]/15 grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="border-l border-[#B39A68]/40 pl-5">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] block">
              40+ Institutions
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#B39A68] block mt-1">
              International Summit
            </span>
            <p className="text-xs text-[#EAE6DF]/60 mt-1 leading-snug">
              Represented at the GTTCI & BEF Global Education Conference
            </p>
          </div>

          <div className="border-l border-[#B39A68]/40 pl-5">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] block">
              IG Indoor Stadium
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#B39A68] block mt-1">
              Event Showcase
            </span>
            <p className="text-xs text-[#EAE6DF]/60 mt-1 leading-snug">
              Venue for The Great Indian Kids Festival 2024 Showcase
            </p>
          </div>

          <div className="border-l border-[#B39A68]/40 pl-5">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] block">
              K–12 to Higher Ed
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#B39A68] block mt-1">
              Continuous Pathway
            </span>
            <p className="text-xs text-[#EAE6DF]/60 mt-1 leading-snug">
              From foundational school choice to collegiate admissions
            </p>
          </div>

          <div className="border-l border-[#B39A68]/40 pl-5">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] block">
              100% Sourced
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#B39A68] block mt-1">
              Documented Record
            </span>
            <p className="text-xs text-[#EAE6DF]/60 mt-1 leading-snug">
              Grounded in official directories and institutional reports
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
