import React from 'react';
import { ArrowDown, Download, ExternalLink, ChevronRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenVerificationLedger: () => void;
  onOpenPdfViewer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVerificationLedger, onOpenPdfViewer }) => {
  return (
    <section id="overview" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Subtle geometric background grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Restrained subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-500/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Kicker metadata with dot separator */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D4AF37] mb-4">
              <span>Education Entrepreneur</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Community Builder</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Guidance Professional</span>
            </div>

            {/* Display Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-100 tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              Building Connections.{' '}
              <span className="text-gold-gradient block sm:inline">Shaping Educational Futures.</span>
            </h1>

            {/* Supporting Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              An education-sector entrepreneur focused on connecting students, families, educators, and institutions
              across India through structured school discovery, higher-education guidance, and national dialogue forums.
            </p>

            {/* Verified Key Positions (Clean unboxed list) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Founder & President, Bharat Education Forum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Director & Co-Founder, Schoolyatra</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Director, Collegeyatra Higher-Ed Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Host, BrewED Talks & Dialogue Series</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#ventures"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-[#D4AF37] hover:bg-[#E2BE48] rounded-md transition-all shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/20 whitespace-nowrap cursor-pointer"
              >
                <span>Explore My Journey</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-md transition-all whitespace-nowrap cursor-pointer"
              >
                <span>View Professional Resume</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.pdfAssetPath}
                download="Sumit_Varma_Resume_Information_Pack.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-md transition-all whitespace-nowrap cursor-pointer"
                title="Download verified Information Pack PDF"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>Download Resume PDF</span>
              </a>
            </div>

            {/* Research & Sourcing Disclaimer note */}
            <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400/80" />
              <span>Grounded in verified institutional reports & public directories</span>
              <span aria-hidden="true">·</span>
              <button
                onClick={onOpenVerificationLedger}
                className="underline hover:text-amber-300 transition-colors cursor-pointer"
              >
                Inspect Audit Ledger
              </button>
            </div>
          </div>

          {/* Right Column: Executive Portrait & Identity Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative hairline frame */}
              <div className="absolute -inset-2 rounded-2xl border border-[#D4AF37]/20 pointer-events-none" />
              
              {/* Main Portrait Box */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-slate-900 via-[#0E1626] to-[#0A0F1D] border border-slate-800 p-6 sm:p-8 shadow-2xl">
                
                {/* Executive Identity Header */}
                <div className="flex items-start justify-between border-b border-slate-800 pb-5 mb-6">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-1">
                      Professional Profile
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-white tracking-tight">
                      Sumit Varma
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      New Delhi, India
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-xl">
                    SV
                  </div>
                </div>

                {/* Editorial Visual Composition / Portrait Graphic */}
                <div className="relative h-64 sm:h-72 w-full rounded-lg bg-[#070B14] border border-slate-800/80 overflow-hidden flex flex-col justify-between p-6">
                  {/* Subtle architectural abstract lines */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(45deg,#D4AF37_1px,transparent_1px),linear-gradient(-45deg,#38BDF8_1px,transparent_1px)] [background-size:32px_32px]" />
                  
                  {/* Monogram emblem */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">EST. DELHI NCR</span>
                    <span className="text-xs px-2.5 py-1 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-medium">
                      Leader in Education
                    </span>
                  </div>

                  {/* Centered Graphic Identity Representation */}
                  <div className="relative z-10 text-center my-auto">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-900/90 border-2 border-[#D4AF37]/50 shadow-inner mb-3">
                      <span className="text-3xl font-serif font-bold text-gold-gradient">SV</span>
                    </div>
                    <p className="text-sm font-medium text-slate-200">
                      Sumit Varma
                    </p>
                    <p className="text-xs text-slate-400 mt-1 max-w-[260px] mx-auto">
                      Connecting students, families, educators, and institutions across India
                    </p>
                  </div>

                  {/* Verified Footer Bar */}
                  <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
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

                {/* Executive Mission Quote Box */}
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <p className="text-xs italic text-slate-300 leading-relaxed font-serif">
                    &ldquo;Educational decisions shape the trajectory of entire families. Our mission is to make school discovery transparent, higher education accessible, and youth voices heard.&rdquo;
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column Fact Strip (Below Hero Split as per layout rules) */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.quickFacts.map((fact, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight tabular-nums">
                {fact.value}
              </span>
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mt-1">
                {fact.label}
              </span>
              <span className="text-xs text-slate-400 mt-1 leading-snug">
                {fact.detail}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="flex justify-center mt-12 sm:mt-16">
        <a
          href="#biography"
          aria-label="Scroll to Biography"
          className="flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-[#D4AF37] transition-colors"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Explore Bio & Vision</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
