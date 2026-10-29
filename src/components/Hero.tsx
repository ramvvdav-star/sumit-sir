import React from 'react';
import { ArrowDown, Download, ExternalLink, ChevronRight, Building, School, GraduationCap, Mic, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenVerificationLedger: () => void;
  onOpenPdfViewer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVerificationLedger, onOpenPdfViewer }) => {
  return (
    <section id="overview" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 bg-executive-grid">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#EAB308] mb-4">
              <span>EDUCATION ENTREPRENEUR</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>COMMUNITY BUILDER</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>GUIDANCE PROFESSIONAL</span>
            </div>

            {/* Headline matching screenshot */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              Building Connections.{' '}
              <span className="block italic text-[#EAB308]">
                Shaping Educational Futures.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mb-8">
              An education-sector entrepreneur focused on connecting students, families, educators, and institutions across India through structured school discovery, higher-education guidance, and national dialogue forums.
            </p>

            {/* 4 Dark Badges in 2x2 Grid (matching screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="bg-[#141418] hover:bg-[#1A1A20] border border-zinc-800/90 rounded-xl p-3.5 flex items-center gap-3 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#EAB308] shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-zinc-200">
                  Founder & President, Bharat Education Forum
                </span>
              </div>

              <div className="bg-[#141418] hover:bg-[#1A1A20] border border-zinc-800/90 rounded-xl p-3.5 flex items-center gap-3 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#EAB308] shrink-0">
                  <School className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-zinc-200">
                  Director & Co-Founder, Schoolyatra
                </span>
              </div>

              <div className="bg-[#141418] hover:bg-[#1A1A20] border border-zinc-800/90 rounded-xl p-3.5 flex items-center gap-3 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#EAB308] shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-zinc-200">
                  Director, Collegeyatra Higher-Ed Advisory
                </span>
              </div>

              <div className="bg-[#141418] hover:bg-[#1A1A20] border border-zinc-800/90 rounded-xl p-3.5 flex items-center gap-3 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#EAB308] shrink-0">
                  <Mic className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-zinc-200">
                  Host, BrewED Talks & Dialogue Series
                </span>
              </div>
            </div>

            {/* Buttons Row matching screenshot */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#ventures"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-zinc-950 bg-[#EAB308] hover:bg-[#F59E0B] rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-amber-500/20 whitespace-nowrap cursor-pointer"
              >
                <span>Explore My Journey</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-zinc-200 bg-[#141418] hover:bg-[#1C1C22] border border-zinc-700/80 rounded-xl transition-all whitespace-nowrap cursor-pointer"
              >
                <span>View Professional Resume</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.pdfAssetPath}
                download="Sumit_Varma_Resume_Information_Pack.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-amber-300 hover:text-amber-200 bg-[#141418] hover:bg-[#1C1C22] border border-amber-500/30 rounded-xl transition-all whitespace-nowrap cursor-pointer"
                title="Download verified Information Pack PDF"
              >
                <Download className="w-4 h-4 text-[#EAB308]" />
                <span>Download Resume PDF</span>
              </a>
            </div>

            {/* Verification Note with green dot and underlined trigger */}
            <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Grounded in verified institutional reports & public directories.</span>
              <button
                onClick={onOpenVerificationLedger}
                className="underline text-amber-300 hover:text-amber-200 transition-colors cursor-pointer font-medium"
              >
                Inspect Audit Ledger
              </button>
            </div>
          </div>

          {/* Right Column: Executive Identity Card matching screenshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#101014] border border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative">
              
              {/* Card Header */}
              <div className="flex items-start justify-between border-b border-zinc-800/80 pb-5 mb-5">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#EAB308] uppercase block mb-1">
                    PROFESSIONAL PROFILE
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-white tracking-tight">
                    Sumit Varma
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    New Delhi, India
                  </p>
                </div>

                {/* Circular Gold Badge [SV] */}
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#EAB308] font-serif font-bold text-sm">
                  SV
                </div>
              </div>

              {/* Inner Box with Monogram Graphic */}
              <div className="bg-[#09090C] border border-zinc-800/80 rounded-xl p-5 mb-5 text-center flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>EST. DELHI NCR</span>
                  <span className="text-[#EAB308] font-medium bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded text-[10px]">
                    Leader in Education
                  </span>
                </div>

                <div className="my-auto py-2">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#141418] border border-[#EAB308]/60 shadow-lg mb-2">
                    <span className="text-2xl font-serif font-bold text-[#EAB308]">SV</span>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#09090C]" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    Sumit Varma
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 max-w-[240px] mx-auto leading-snug">
                    Connecting students, families, educators and institutions across India
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>SVEI · Schoolyatra · BEF</span>
                  <a
                    href="https://www.linkedin.com/in/sumit-varma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Bottom Quote Box */}
              <div className="pt-4 border-t border-zinc-800/80">
                <p className="text-xs italic text-zinc-300 leading-relaxed font-serif">
                  &ldquo;Educational decisions shape the trajectory of entire families. Our mission is to make school discovery transparent, higher education accessible, and youth voices heard.&rdquo;
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Metric Cards Row matching screenshot */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 transition-all hover:border-zinc-700/80">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight block">
              40+ Universities
            </span>
            <span className="text-xs font-bold font-mono text-[#EAB308] uppercase tracking-wider mt-1.5 block">
              INSTITUTIONAL CONVENINGS
            </span>
            <span className="text-xs text-zinc-400 mt-1.5 block leading-relaxed">
              Represented at GTTCI Global Education Summit 2026
            </span>
          </div>

          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 transition-all hover:border-zinc-700/80">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight block">
              Indira Gandhi Stadium
            </span>
            <span className="text-xs font-bold font-mono text-[#EAB308] uppercase tracking-wider mt-1.5 block">
              MAJOR EVENT VENUE
            </span>
            <span className="text-xs text-zinc-400 mt-1.5 block leading-relaxed">
              The Great Indian Kids Festival 2024 Showcase
            </span>
          </div>

          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 transition-all hover:border-zinc-700/80">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight block">
              Pan-India Alliances
            </span>
            <span className="text-xs font-bold font-mono text-[#EAB308] uppercase tracking-wider mt-1.5 block">
              COMMUNITY REACH
            </span>
            <span className="text-xs text-zinc-400 mt-1.5 block leading-relaxed">
              School principals, deans, embassy envoys & educators
            </span>
          </div>

          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 transition-all hover:border-zinc-700/80">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight block">
              100% Sourced
            </span>
            <span className="text-xs font-bold font-mono text-[#EAB308] uppercase tracking-wider mt-1.5 block">
              VERIFICATION STANDARD
            </span>
            <span className="text-xs text-zinc-400 mt-1.5 block leading-relaxed">
              Public records & independent institutional coverage
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
