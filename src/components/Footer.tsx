import React from 'react';
import { ShieldCheck, ExternalLink, Download, FileText, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenVerificationLedger: () => void;
  onOpenPdfViewer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVerificationLedger, onOpenPdfViewer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-zinc-800/80 py-12 lg:py-16 text-zinc-400 text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-lg font-serif font-bold text-white tracking-tight">
              SUMIT VARMA
            </span>
            <p className="text-zinc-300 max-w-sm leading-relaxed">
              Education Entrepreneur & Community Builder. Connecting students, families, educators, and institutions across India.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-200/90 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#EAB308]" />
              <span>Documented Public & Institutional Record</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block mb-3">
              Explore Portfolio
            </span>
            <div><a href="#overview" className="hover:text-white transition-colors">Executive Overview</a></div>
            <div><a href="#ventures" className="hover:text-white transition-colors">Ventures & Initiatives</a></div>
            <div><a href="#timeline" className="hover:text-white transition-colors">Career Journey & Milestones</a></div>
            <div><a href="#initiatives" className="hover:text-white transition-colors">Conclaves & Impact Projects</a></div>
            <div><a href="#media" className="hover:text-white transition-colors">BrewED Talks & Media</a></div>
            <div><a href="#philosophy" className="hover:text-white transition-colors">Educational Philosophy</a></div>
            <div><a href="#resume" className="hover:text-white transition-colors">Professional Resume & CV</a></div>
          </div>

          {/* Verification & Resources */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block mb-3">
              Verification & Assets
            </span>
            <div>
              <button
                onClick={onOpenVerificationLedger}
                className="text-left text-amber-300/90 hover:text-amber-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Fact-Checking & Audit Ledger</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>
            </div>
            <div>
              <button
                onClick={onOpenPdfViewer}
                className="text-left hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Source Information Pack (PDF)</span>
                <FileText className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
            <div>
              <a
                href={PORTFOLIO_DATA.profile.pdfAssetPath}
                download="Sumit_Varma_Resume_Information_Pack.pdf"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Download Verified PDF Pack</span>
                <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
              </a>
            </div>
            <div>
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>LinkedIn Profile (Official)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © 2026 Sumit Varma. Built with factual integrity and primary source documentation.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
