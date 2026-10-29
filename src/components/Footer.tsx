import React from 'react';
import { ExternalLink, Download, FileText, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenPdfViewer: () => void;
  onOpenVerificationLedger?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPdfViewer, onOpenVerificationLedger }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08101C] text-[#FAF8F5]/80 border-t border-[#E7E4DD]/10 py-16 text-xs no-print">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E7E4DD]/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              SUMIT VARMA
            </span>
            <p className="text-sm text-[#EAE6DF]/70 max-w-sm leading-relaxed">
              Education Entrepreneur & Community Leader. Founder of Bharat Education Forum and Director of Schoolyatra and Collegeyatra.
            </p>
            <p className="text-xs text-[#B39A68] font-mono">
              New Delhi, India · Bharat
            </p>
          </div>

          {/* Direct Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B39A68] font-bold block mb-4">
              Navigation
            </span>
            <div><a href="#home" className="hover:text-white transition-colors">Home</a></div>
            <div><a href="#about" className="hover:text-white transition-colors">About</a></div>
            <div><a href="#ventures" className="hover:text-white transition-colors">Leadership & Ventures</a></div>
            <div><a href="#initiatives" className="hover:text-white transition-colors">Initiatives & Summits</a></div>
            <div><a href="#media" className="hover:text-white transition-colors">Speaking & Media</a></div>
            <div><a href="#philosophy" className="hover:text-white transition-colors">Educational Philosophy</a></div>
            <div><a href="#resume" className="hover:text-white transition-colors">Professional Resume</a></div>
          </div>

          {/* Official Resources & External Channels */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B39A68] font-bold block mb-4">
              Verified Portals & Documents
            </span>
            <div>
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>LinkedIn Executive Profile</span>
                <ExternalLink className="w-3 h-3 text-[#B39A68]" />
              </a>
            </div>
            <div>
              <button
                onClick={onOpenPdfViewer}
                className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
              >
                <span>View Source Information Pack (PDF)</span>
                <FileText className="w-3 h-3 text-[#B39A68]" />
              </button>
            </div>
            {onOpenVerificationLedger && (
              <div>
                <button
                  onClick={onOpenVerificationLedger}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span>Fact-Checking & Audit Ledger</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#B39A68]/20 text-[#B39A68] font-mono">Verified</span>
                </button>
              </div>
            )}
            <div>
              <a
                href={PORTFOLIO_DATA.profile.pdfAssetPath}
                download="Sumit_Varma_Resume_Information_Pack.pdf"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Download Information Pack PDF</span>
                <Download className="w-3.5 h-3.5 text-[#B39A68]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAE6DF]/60">
          <p>
            © {new Date().getFullYear()} Sumit Varma. Built with factual integrity and verified documentation.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#EAE6DF]/60 hover:text-[#B39A68] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
