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
            ? 'bg-[#09090C]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3.5'
            : 'bg-transparent border-b border-zinc-800/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Brand Zone with SV Monogram Badge */}
            <a
              href="#overview"
              className="group flex items-center gap-3 text-slate-100 font-bold tracking-tight whitespace-nowrap shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-[#18181C] border border-[#EAB308]/60 flex items-center justify-center font-serif font-bold text-xs text-[#EAB308] shadow-sm">
                SV
              </div>
              <div className="flex items-center gap-1.5 font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#EAB308] transition-colors">
                <span>SUMIT VARMA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] inline-block" />
              </div>
            </a>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
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

            {/* Right Buttons matching screenshot */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenVerificationLedger}
                title="View Fact-Checking & Source Audit Ledger"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-amber-300 bg-[#141418] hover:bg-[#1C1C22] border border-amber-500/40 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>Verification Ledger</span>
              </button>

              <a
                href="#contact"
                className="px-4 py-2 text-xs font-bold text-zinc-950 bg-[#EAB308] hover:bg-[#F59E0B] rounded-lg transition-all shadow-md hover:shadow-lg hover:shadow-amber-500/20 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Get In Touch
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onOpenVerificationLedger}
                aria-label="Verification Ledger"
                className="p-1.5 text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg"
              >
                <ShieldCheck className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#09090C]/98 backdrop-blur-lg pt-24 px-6 pb-8 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-5 text-lg font-medium text-zinc-200">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-zinc-800/80 hover:text-[#EAB308] transition-colors"
            >
              Overview
            </a>
            <a
              href="#ventures"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-zinc-800/80 hover:text-[#EAB308] transition-colors"
            >
              Ventures & Initiatives
            </a>
            <a
              href="#timeline"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-zinc-800/80 hover:text-[#EAB308] transition-colors"
            >
              Career Journey
            </a>
            <a
              href="#initiatives"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-zinc-800/80 hover:text-[#EAB308] transition-colors"
            >
              Selected Impact & Media
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-zinc-800/80 hover:text-[#EAB308] transition-colors"
            >
              Educational Philosophy
            </a>
            <a
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-zinc-800/80 hover:text-[#EAB308] transition-colors"
            >
              Executive Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#EAB308] font-bold"
            >
              Contact & Collaboration
            </a>
          </div>

          <div className="pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerificationLedger();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm font-medium"
            >
              <ShieldCheck className="w-4 h-4 text-[#EAB308]" />
              <span>Fact-Checking & Verification Ledger</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfViewer();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm font-medium"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>View Source Research PDF</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
