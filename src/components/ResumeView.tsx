import React, { useState } from 'react';
import { Download, Printer, Eye, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeViewProps {
  onOpenPdfViewer: () => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ onOpenPdfViewer }) => {
  const [viewMode, setViewMode] = useState<'executive' | 'plain'>('executive');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 lg:py-32 bg-[#F7F5F0] text-[#252A30] border-t border-[#E7E4DD]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E7E4DD] no-print">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B39A68] mb-4">
              <span>Executive Dossier</span>
              <span className="text-[#252A30]/30">/</span>
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#142338] tracking-tight leading-tight">
              Professional Resume.
            </h2>
            <p className="mt-3 text-base text-[#252A30]/80 max-w-2xl leading-relaxed">
              Synthesized exclusively from verified public records, institutional convenings, and documented entrepreneurial initiatives.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-[#142338] bg-white hover:bg-[#FAF9F6] border border-[#E7E4DD] rounded transition-colors cursor-pointer"
              title="Print clean executive copy or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#535C68]" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href={PORTFOLIO_DATA.profile.pdfAssetPath}
              download="Sumit_Varma_Resume_Information_Pack.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#0D1826] bg-[#B39A68] hover:bg-[#C2A875] rounded transition-all shadow-sm cursor-pointer"
              title="Download verified Information Pack PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Pack</span>
            </a>

            <button
              onClick={onOpenPdfViewer}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-[#142338] bg-[#E7E4DD]/50 hover:bg-[#E7E4DD] rounded transition-colors cursor-pointer"
              title="Preview original research PDF"
            >
              <Eye className="w-3.5 h-3.5 text-[#535C68]" />
              <span>Source Dossier</span>
            </button>
          </div>
        </div>

        {/* Format Selector (no-print) */}
        <div className="flex items-center gap-2 p-1 bg-[#E7E4DD]/60 rounded max-w-xs mb-8 no-print">
          <button
            onClick={() => setViewMode('executive')}
            className={`flex-1 py-1.5 text-xs uppercase tracking-wider font-medium rounded transition-colors cursor-pointer ${
              viewMode === 'executive'
                ? 'bg-white text-[#142338] font-bold shadow-sm'
                : 'text-[#535C68] hover:text-[#142338]'
            }`}
          >
            Executive Layout
          </button>
          <button
            onClick={() => setViewMode('plain')}
            className={`flex-1 py-1.5 text-xs uppercase tracking-wider font-medium rounded transition-colors cursor-pointer ${
              viewMode === 'plain'
                ? 'bg-white text-[#142338] font-bold shadow-sm'
                : 'text-[#535C68] hover:text-[#142338]'
            }`}
          >
            Plain ATS View
          </button>
        </div>

        {/* Pristine Document Paper Container */}
        <div className="bg-white border border-[#E7E4DD] rounded p-8 sm:p-14 shadow-sm print:border-none print:shadow-none print-container">
          
          {/* Header */}
          <div className="border-b border-[#252A30] pb-8 mb-8">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#142338] tracking-tight">
              Sumit Varma
            </h1>
            <p className="text-sm font-medium text-[#B39A68] mt-1 uppercase font-mono tracking-wider">
              Education Entrepreneur · Founder · Guidance Professional
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#535C68] mt-3 font-sans">
              <span>New Delhi, India</span>
              <span aria-hidden="true">·</span>
              <a href={PORTFOLIO_DATA.profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#142338] underline">
                linkedin.com/in/sumit-varma
              </a>
              <span aria-hidden="true">·</span>
              <span>Founder & President, Bharat Education Forum</span>
            </div>

            {/* Professional Summary */}
            <div className="mt-6 pt-6 border-t border-[#E7E4DD]">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#B39A68] block mb-2 font-bold">
                Professional Executive Summary
              </span>
              <p className="text-sm text-[#252A30]/85 leading-relaxed">
                Education-sector entrepreneur working across school discovery, higher-education guidance, overseas education consulting, educator networking, youth initiatives, and educational media. Co-Founder and Director of Schoolyatra and Collegeyatra; Founder and President of Bharat Education Forum. Recognized for convening high-level institutional partnerships with foreign embassies, university chancellors, and school leaders across India.
              </p>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mb-8 print-section">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#142338] font-bold block mb-4 pb-1 border-b border-[#E7E4DD]">
              Core Competencies & Scope of Leadership
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-[#252A30]/85">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68]" />
                <span>Education Entrepreneurship</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68]" />
                <span>Institutional Alliances & Diplomatic Summits</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68]" />
                <span>K–12 School Discovery & Admissions Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68]" />
                <span>Large-Scale Event Strategy (IG Indoor Stadium)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68]" />
                <span>Educational Media & Podcast Production</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68]" />
                <span>Youth Leadership Programming (BYLC)</span>
              </div>
            </div>
          </div>

          {/* Professional Experience & Ventures Founded */}
          <div className="mb-8 print-section space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#142338] font-bold block mb-4 pb-1 border-b border-[#E7E4DD]">
              Executive Experience & Ventures Founded
            </span>

            {/* BEF */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-base font-bold text-[#142338]">
                  Founder & President
                </h3>
                <span className="text-xs font-mono text-[#B39A68] font-semibold">2024 – Present · New Delhi</span>
              </div>
              <div className="text-xs text-[#535C68] font-medium">
                Bharat Education Forum (BEF) · National Institutional Education Network
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-[#252A30]/85 pl-4 list-disc">
                <li>Founded and lead a national platform connecting school principals, vice-chancellors, deans, and foreign embassy delegations.</li>
                <li>Co-hosted the international conference <em>Global Education, Global Opportunities</em> with GTTCI (Sept 2026), delivering opening remarks before embassy envoys and representatives of 40+ educational institutions.</li>
                <li>Convened the Speaking Minds Youth Conclave (March 2026) bringing student leaders together for policy and career dialogues.</li>
                <li>Appointed official Education Partner for the National School Awards 2026.</li>
              </ul>
            </div>

            {/* Schoolyatra */}
            <div className="space-y-1 pt-4 border-t border-[#E7E4DD]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-base font-bold text-[#142338]">
                  Director & Co-Founder
                </h3>
                <span className="text-xs font-mono text-[#B39A68] font-semibold">2024 – Present · New Delhi</span>
              </div>
              <div className="text-xs text-[#535C68] font-medium">
                Schoolyatra · K-12 Discovery & Early Childhood Advisory
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-[#252A30]/85 pl-4 list-disc">
                <li>Direct the development of transparent school discovery platforms assisting families in preschool and K–12 selection.</li>
                <li>Strategic organizer for <em>The Great Indian Kids Festival</em> (Nov 2024) at the Indira Gandhi Indoor Stadium/Arena, New Delhi, in partnership with Give for Rising Indian Stars Foundation.</li>
                <li>Published in <em>The Daily Metro</em> on reforming early-childhood pedagogy and parental engagement strategies.</li>
              </ul>
            </div>

            {/* Collegeyatra */}
            <div className="space-y-1 pt-4 border-t border-[#E7E4DD]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-base font-bold text-[#142338]">
                  Director & Co-Founder
                </h3>
                <span className="text-xs font-mono text-[#B39A68] font-semibold">2024 – Present · New Delhi</span>
              </div>
              <div className="text-xs text-[#535C68] font-medium">
                Collegeyatra · Higher-Education Admissions Guidance Platform
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-[#252A30]/85 pl-4 list-disc">
                <li>Direct digital counseling initiatives connecting aspiring undergraduate students with college deans and admissions authorities.</li>
                <li>Community Partner for the National School Awards 2026 at Welcomhotel by ITC Hotels, Dwarka.</li>
                <li>Profiled in <em>Borok Times</em> highlighting entrepreneurial guidance during Bharat's higher educational expansion.</li>
              </ul>
            </div>

            {/* SVEI */}
            <div className="space-y-1 pt-4 border-t border-[#E7E4DD]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-base font-bold text-[#142338]">
                  Founder & Principal Consultant
                </h3>
                <span className="text-xs font-mono text-[#B39A68] font-semibold">Est. 2022 · East Patel Nagar, Delhi</span>
              </div>
              <div className="text-xs text-[#535C68] font-medium">
                SVEI — Sumit Varma Education & Immigration
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-[#252A30]/85 pl-4 list-disc">
                <li>Provided personalized education consultancy, career mapping, and admissions advisory for domestic and overseas university aspirants.</li>
                <li>Specialized in counseling for undergraduate and professional streams including MBA and competitive medical admissions.</li>
              </ul>
            </div>

          </div>

          {/* Media & Keynote Engagements */}
          <div className="mb-8 print-section">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#142338] font-bold block mb-4 pb-1 border-b border-[#E7E4DD]">
              Media Productions & Keynote Appearances
            </span>
            <div className="space-y-2 text-xs text-[#252A30]/85">
              <p>
                <strong>Host & Producer:</strong> <em>BrewED Talks</em>, <em>Partners in Parenting</em> (with Preet Sharma, NKS Education), and <em>Coffee with Educators</em>.
              </p>
              <p>
                <strong>Keynote Speaker:</strong> GTTCI Global Opportunities International Conference (September 2026); Speaking Minds Youth Conclave (March 2026).
              </p>
              <p>
                <strong>Invited Panelist:</strong> National School Awards 2026 (Welcomhotel Dwarka, New Delhi).
              </p>
            </div>
          </div>

          {/* Documented Registry Record */}
          <div className="mb-8 print-section">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#142338] font-bold block mb-4 pb-1 border-b border-[#E7E4DD]">
              Documented Recognitions & Registry Records
            </span>
            <div className="text-xs text-[#252A30]/85 space-y-1">
              <p className="font-semibold text-[#142338]">
                Influencer Book of World Records — January 2025 (Record No. 0198)
              </p>
              <p className="text-[#535C68]">
                Citation: &ldquo;India’s Emerging Edupreneur & Influential Leader In Education&rdquo; for contributions to school and collegiate guidance.
              </p>
            </div>
          </div>

          {/* Verification Status Placeholder */}
          <div className="pt-6 border-t border-[#E7E4DD] print-section">
            <div className="bg-[#FAF9F6] border border-[#E7E4DD] p-5 rounded text-xs text-[#535C68] leading-relaxed">
              <div className="flex items-center gap-2 text-[#142338] font-bold mb-1">
                <AlertCircle className="w-4 h-4 text-[#B39A68] shrink-0" />
                <span>Verification & Integrity Ledger</span>
              </div>
              <p>
                This resume compiles exclusively documented public appointments, verified press releases, and directory filings. Specific academic university degrees and employment history prior to 2022 are preserved for direct client update upon full CV submission.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
