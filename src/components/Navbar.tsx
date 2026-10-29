import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenPdfViewer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPdfViewer }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0D1826]/95 backdrop-blur-md border-b border-[#E7E4DD]/10 shadow-lg py-3.5'
            : 'bg-[#0D1826]/80 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-8">
            
            {/* Restrained Wordmark */}
            <a
              href="#home"
              className="group flex flex-col tracking-tight text-white focus:outline-none"
            >
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF8F5] group-hover:text-[#B39A68] transition-colors">
                SUMIT VARMA
              </span>
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#B39A68]">
                Education & Leadership
              </span>
            </a>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-[#EAE6DF]/80">
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#ventures" className="hover:text-white transition-colors">
                Leadership & Ventures
              </a>
              <a href="#initiatives" className="hover:text-white transition-colors">
                Initiatives
              </a>
              <a href="#media" className="hover:text-white transition-colors">
                Speaking & Media
              </a>
              <a href="#resume" className="hover:text-white transition-colors">
                Resume
              </a>
            </nav>

            {/* Restrained Actions */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={onOpenPdfViewer}
                className="text-xs uppercase tracking-wider text-[#FAF8F5]/80 hover:text-white transition-colors cursor-pointer py-1.5 px-3 border border-[#E7E4DD]/20 rounded hover:border-[#B39A68]"
              >
                Resume PDF
              </button>
              
              <a
                href="#contact"
                className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#0D1826] bg-[#B39A68] hover:bg-[#C2A875] rounded transition-colors shadow-sm"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#FAF8F5] hover:text-[#B39A68] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0D1826] pt-28 px-8 pb-10 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 text-xl font-serif text-[#FAF8F5]">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E7E4DD]/10 hover:text-[#B39A68] transition-colors"
            >
              About
            </a>
            <a
              href="#ventures"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E7E4DD]/10 hover:text-[#B39A68] transition-colors"
            >
              Leadership & Ventures
            </a>
            <a
              href="#initiatives"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E7E4DD]/10 hover:text-[#B39A68] transition-colors"
            >
              Selected Initiatives
            </a>
            <a
              href="#media"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E7E4DD]/10 hover:text-[#B39A68] transition-colors"
            >
              Speaking & Media
            </a>
            <a
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E7E4DD]/10 hover:text-[#B39A68] transition-colors"
            >
              Professional Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#B39A68] font-bold"
            >
              Get in Touch
            </a>
          </div>

          <div className="pt-6 border-t border-[#E7E4DD]/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfViewer();
              }}
              className="w-full py-3 px-4 rounded border border-[#B39A68]/40 text-[#B39A68] text-xs uppercase tracking-wider font-medium text-center"
            >
              View Documented Information Pack (PDF)
            </button>
          </div>
        </div>
      )}
    </>
  );
};
