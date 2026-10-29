import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenVerificationLedger: () => void;
  onOpenPdfViewer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVerificationLedger, onOpenPdfViewer }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080D1A]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
            : 'bg-transparent border-b border-slate-800/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 Nav Links) — Zone 3 (Primary Action) */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single element brand mark */}
            <a
              href="#overview"
              className="group flex items-center gap-2.5 text-slate-100 font-serif text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap shrink-0 hover:text-[#D4AF37] transition-colors"
            >
              <span>SUMIT VARMA</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]/70 group-hover:scale-125 transition-transform" />
            </a>

            {/* Zone 2: 4–5 clean single-line nav links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
              <a href="#overview" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
                Overview
              </a>
              <a href="#ventures" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
                Ventures
              </a>
              <a href="#timeline" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
                Journey
              </a>
              <a href="#initiatives" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
                Impact & Media
              </a>
              <a href="#resume" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
                Resume
              </a>
            </nav>

            {/* Zone 3: Primary Action & Audit Trigger */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenVerificationLedger}
                title="View Fact-Checking & Source Audit Ledger"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-300/90 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/25 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Verification Ledger</span>
              </button>

              <a
                href="#contact"
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-[#D4AF37] hover:bg-[#E2BE48] rounded-md transition-all shadow-sm hover:shadow-md hover:shadow-[#D4AF37]/20 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Get In Touch
              </a>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onOpenVerificationLedger}
                aria-label="Verification Ledger"
                className="p-1.5 text-amber-300/80 bg-amber-500/10 border border-amber-500/20 rounded-md"
              >
                <ShieldCheck className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#080D1A]/98 backdrop-blur-lg pt-24 px-6 pb-8 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-5 text-lg font-medium text-slate-200">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/80 hover:text-[#D4AF37] transition-colors"
            >
              Overview
            </a>
            <a
              href="#ventures"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/80 hover:text-[#D4AF37] transition-colors"
            >
              Ventures & Initiatives
            </a>
            <a
              href="#timeline"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/80 hover:text-[#D4AF37] transition-colors"
            >
              Career Journey
            </a>
            <a
              href="#initiatives"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/80 hover:text-[#D4AF37] transition-colors"
            >
              Selected Impact & Media
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/80 hover:text-[#D4AF37] transition-colors"
            >
              Educational Philosophy
            </a>
            <a
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/80 hover:text-[#D4AF37] transition-colors"
            >
              Executive Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#D4AF37] font-semibold"
            >
              Contact & Collaboration
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerificationLedger();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm font-medium"
            >
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Fact-Checking & Verification Ledger</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfViewer();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200 text-sm font-medium"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>View Source Research PDF</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
