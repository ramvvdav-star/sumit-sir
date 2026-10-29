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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08101C]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#0D1826] border border-[#E7E4DD]/15 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-[#FAF8F5]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded text-[#EAE6DF]/60 hover:text-white bg-[#142338] hover:bg-[#1B2C44] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#E7E4DD]/10 pb-5 mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B39A68] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-[#B39A68]" />
            <span>Research & Verification Ledger</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
            Fact-Checking & Sourcing Audit.
          </h2>
          <p className="text-sm text-[#EAE6DF]/75 leading-relaxed">
            In compliance with strict editorial standards, this website distinguishes verified public records from self-reported statements and logs all pending data points.
          </p>
        </div>

        {/* Verified Facts List */}
        <div className="mb-8">
          <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Documented & Verified Associations ({PORTFOLIO_DATA.verificationLedger.confirmedFacts.length})</span>
          </h3>
          <div className="bg-[#142338]/60 border border-[#E7E4DD]/10 rounded-lg p-4 space-y-2.5">
            {PORTFOLIO_DATA.verificationLedger.confirmedFacts.map((fact, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FAF8F5]/90">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span className="leading-snug">{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Information Pending from Subject */}
        <div className="mb-8">
          <h3 className="text-xs font-mono text-[#B39A68] uppercase tracking-wider mb-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Information Pending Direct Client Review ({PORTFOLIO_DATA.verificationLedger.pendingFromSubject.length})</span>
          </h3>
          <div className="space-y-3">
            {PORTFOLIO_DATA.verificationLedger.pendingFromSubject.map((item, idx) => (
              <div key={idx} className="bg-[#B39A68]/10 border border-[#B39A68]/20 rounded-lg p-4 text-xs sm:text-sm">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-[#FAF8F5]">{item.item}</h4>
                  <span className="text-[11px] font-mono text-[#B39A68]">Pending Confirmation</span>
                </div>
                <p className="text-[#EAE6DF]/80 mb-2 leading-relaxed">{item.reason}</p>
                <div className="text-[11px] text-[#EAE6DF]/60 font-mono">
                  Recommended Action: <span className="text-[#FAF8F5]">{item.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Original Document Access */}
        <div className="p-4 bg-[#142338] border border-[#E7E4DD]/10 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-[#B39A68] shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-white">Sumit Varma Resume Information Pack</h4>
              <p className="text-xs text-[#EAE6DF]/70">Complete 6-page research dossier with full citation links</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenPdf();
              }}
              className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-medium text-[#FAF8F5] bg-[#1B2C44] hover:bg-[#253B5A] rounded transition-colors cursor-pointer"
            >
              View Document
            </button>
            <a
              href={PORTFOLIO_DATA.profile.pdfAssetPath}
              download="Sumit_Varma_Resume_Information_Pack.pdf"
              className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-semibold text-[#0D1826] bg-[#B39A68] hover:bg-[#C2A875] rounded transition-colors flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-5 border-t border-[#E7E4DD]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#FAF8F5] bg-[#142338] hover:bg-[#1B2C44] rounded transition-colors cursor-pointer"
          >
            Close Ledger
          </button>
        </div>

      </div>
    </div>
  );
};
