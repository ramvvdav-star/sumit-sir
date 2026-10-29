import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#0B1120] border border-slate-700 rounded-xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl relative overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#D4AF37]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white leading-tight">
                Sumit Varma — Resume Information Pack & Research Profile
              </h3>
              <p className="text-[11px] text-slate-400">
                Official source document (6 pages) · Verified research starting point
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.profile.pdfAssetPath}
              download="Sumit_Varma_Resume_Information_Pack.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-[#D4AF37] hover:bg-[#E2BE48] rounded-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.pdfAssetPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
              title="Open in new window"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close PDF Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF View / Fallback Preview */}
        <div className="flex-1 bg-slate-950 relative overflow-hidden">
          <iframe
            src={`${PORTFOLIO_DATA.profile.pdfAssetPath}#toolbar=1&navpanes=1`}
            title="Sumit Varma Resume Information Pack PDF"
            className="w-full h-full border-none"
          />
        </div>

        {/* Bottom Banner */}
        <div className="px-6 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Documented archive asset from user brief</span>
          </span>
          <span className="font-mono text-[11px] text-[#D4AF37]">
            File: Sumit_Varma_Resume_Information_Pack_4037f241.pdf
          </span>
        </div>
      </div>
    </div>
  );
};
