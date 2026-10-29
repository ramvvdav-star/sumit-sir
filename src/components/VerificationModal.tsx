import React from 'react';
import { X, ShieldCheck, AlertCircle, FileText, Download, CheckCircle2, HelpCircle, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPdf: () => void;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onClose, onOpenPdf }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#0B1120] border border-slate-700 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-slate-800 pb-5 mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Research & Verification Ledger</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
            Fact-Checking & Sourcing Audit.
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            In compliance with strict editorial standards, this website distinguishes verified public records from self-reported statements and logs all pending data points.
          </p>
        </div>

        {/* Verified Facts List */}
        <div className="mb-8">
          <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Documented & Verified Associations ({PORTFOLIO_DATA.verificationLedger.confirmedFacts.length})</span>
          </h3>
          <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-4 space-y-2.5">
            {PORTFOLIO_DATA.verificationLedger.confirmedFacts.map((fact, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span className="leading-snug">{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Information Pending from Subject (Section 8 of Brief) */}
        <div className="mb-8">
          <h3 className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Information Pending Direct Client Review ({PORTFOLIO_DATA.verificationLedger.pendingFromSubject.length})</span>
          </h3>
          <div className="space-y-3">
            {PORTFOLIO_DATA.verificationLedger.pendingFromSubject.map((item, idx) => (
              <div key={idx} className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4 text-xs sm:text-sm">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-amber-200">{item.item}</h4>
                  <span className="text-[11px] font-mono text-amber-400/80">Pending Confirmation</span>
                </div>
                <p className="text-slate-300 mb-2 leading-relaxed">{item.reason}</p>
                <div className="text-[11px] text-slate-400 font-mono">
                  Recommended Action: <span className="text-slate-300">{item.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Original Document Access */}
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-[#D4AF37] shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-white">Sumit Varma Resume Information Pack</h4>
              <p className="text-xs text-slate-400">Complete 6-page research dossier with full citation links</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenPdf();
              }}
              className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
            >
              View Document
            </button>
            <a
              href={PORTFOLIO_DATA.profile.pdfAssetPath}
              download="Sumit_Varma_Resume_Information_Pack.pdf"
              className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-semibold text-slate-950 bg-[#D4AF37] hover:bg-[#E2BE48] rounded-md transition-colors flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
          >
            Close Ledger
          </button>
        </div>

      </div>
    </div>
  );
};
