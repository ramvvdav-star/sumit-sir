import React, { useState } from 'react';
import { Download, Printer, ExternalLink, ShieldCheck, FileText, CheckCircle2, AlertCircle, Building2, Calendar, MapPin, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeViewProps {
  onOpenPdfViewer: () => void;
  onOpenVerificationLedger: () => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ onOpenPdfViewer, onOpenVerificationLedger }) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'ats'>('interactive');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 lg:py-28 bg-[#070B14] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 no-print">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37] mb-3">
              <span>Executive Dossier</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Professional Resume.
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              Curated from verified public records, institutional convenings, and documented entrepreneurial initiatives.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors cursor-pointer"
              title="Print clean executive copy or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Print / Export PDF</span>
            </button>

            <a
              href={PORTFOLIO_DATA.profile.pdfAssetPath}
              download="Sumit_Varma_Resume_Information_Pack.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-[#D4AF37] hover:bg-[#E2BE48] rounded-md transition-all shadow-sm cursor-pointer"
              title="Download verified Information Pack"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF Pack</span>
            </a>

            <button
              onClick={onOpenPdfViewer}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-sky-400 bg-sky-950/40 hover:bg-sky-900/50 border border-sky-800/60 rounded-md transition-colors cursor-pointer"
              title="Preview original research PDF"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Source PDF</span>
            </button>
          </div>
        </div>

        {/* View Switcher Tabs (no-print) */}
        <div className="flex items-center gap-2 p-1 bg-slate-900 border border-slate-800 rounded-lg max-w-sm mb-8 no-print">
          <button
            onClick={() => setViewMode('interactive')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              viewMode === 'interactive'
                ? 'bg-[#D4AF37] text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Executive Visual CV
          </button>
          <button
            onClick={() => setViewMode('ats')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              viewMode === 'ats'
                ? 'bg-[#D4AF37] text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ATS-Friendly Plain Format
          </button>
        </div>

        {/* Resume Paper Container */}
        <div className="bg-[#0B1120] print:bg-white print:text-black border border-slate-800 print:border-none rounded-xl p-8 sm:p-12 shadow-2xl print:shadow-none print-container">
          
          {/* Header Lockup */}
          <div className="border-b border-slate-800 print:border-black pb-8 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white print:text-black tracking-tight">
                  Sumit Varma
                </h1>
                <p className="text-sm font-medium text-[#D4AF37] print:text-black mt-1">
                  Education Entrepreneur · Community Builder · Career Guidance Professional
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 print:text-black mt-3">
                  <span>New Delhi, India</span>
                  <span aria-hidden="true" className="print:inline">·</span>
                  <a href={PORTFOLIO_DATA.profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                    linkedin.com/in/sumit-varma
                  </a>
                  <span aria-hidden="true" className="print:inline">·</span>
                  <span>SVEI · Schoolyatra · Bharat Education Forum</span>
                </div>
              </div>

              <div className="no-print">
                <button
                  onClick={onOpenVerificationLedger}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1.5 rounded-md hover:bg-emerald-500/15 transition-colors cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sourced & Verified</span>
                </button>
              </div>
            </div>

            {/* Professional Summary Candidate */}
            <div className="mt-6 pt-6 border-t border-slate-800/60 print:border-gray-300">
              <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 print:text-black mb-2">
                Professional Profile
              </h2>
              <p className="text-sm text-slate-300 print:text-black leading-relaxed">
                Education-sector entrepreneur and executive leader working across K-12 school discovery, higher-education guidance, overseas education consulting, educator networking, youth initiatives, and educational media. Co-founder and director of Schoolyatra and Collegeyatra; Founder and President of Bharat Education Forum. Recognized for convening high-level institutional partnerships with diplomatic missions, university chancellors, and school leaders across India.
              </p>
            </div>
          </div>

          {/* Section: Core Leadership Competencies */}
          <div className="mb-8 print-section">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] print:text-black font-semibold mb-4 pb-1 border-b border-slate-800 print:border-gray-400">
              Core Leadership Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-300 print:text-black">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] print:bg-black" />
                <span>Education Entrepreneurship</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] print:bg-black" />
                <span>Institutional Alliances & Networking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] print:bg-black" />
                <span>School & College Admissions Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] print:bg-black" />
                <span>Large-Scale Event Strategy & Convening</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] print:bg-black" />
                <span>Educational Podcast & Media Production</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] print:bg-black" />
                <span>Youth Leadership Mentoring (BYLC)</span>
              </div>
            </div>
          </div>

          {/* Section: Executive Experience & Ventures Founded */}
          <div className="mb-8 print-section space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] print:text-black font-semibold mb-4 pb-1 border-b border-slate-800 print:border-gray-400">
              Executive Experience & Ventures Founded
            </h2>

            {/* Role 1: Bharat Education Forum */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-base font-bold text-white print:text-black">
                  Founder & President
                </h3>
                <span className="text-xs font-mono text-[#D4AF37] print:text-black">2024 – Present · New Delhi</span>
              </div>
              <div className="text-xs text-slate-400 print:text-gray-700 font-medium">
                Bharat Education Forum (BEF) · Institutional Education Network
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 print:text-black pl-4 list-disc">
                <li>Founded and direct a national platform connecting school principals, vice-chancellors, deans, educators, and diplomatic delegations.</li>
                <li>Co-hosted the international conference <em>Global Education, Global Opportunities</em> with GTTCI (Sept 2026), delivering opening remarks before embassy representatives and 40+ educational institutions.</li>
                <li>Convened the Speaking Minds Youth Conclave (March 2026) bringing student leaders together for policy and career dialogues.</li>
                <li>Appointed official Education Partner for the National School Awards 2026.</li>
              </ul>
            </div>

            {/* Role 2: Schoolyatra */}
            <div className="space-y-1 pt-4 border-t border-slate-800/60 print:border-gray-300">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-base font-bold text-white print:text-black">
                  Director & Co-Founder
                </h3>
                <span className="text-xs font-mono text-[#D4AF37] print:text-black">2024 – Present · New Delhi</span>
              </div>
              <div className="text-xs text-slate-400 print:text-gray-700 font-medium">
                Schoolyatra · K-12 Discovery & Early Childhood Advisory
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 print:text-black pl-4 list-disc">
                <li>Direct the development of child-centric school discovery platforms aiding families in making informed preschool and K-12 schooling choices.</li>
                <li>Strategic organizer for <em>The Great Indian Kids Festival</em> (Nov 2024) at the Indira Gandhi Indoor Stadium/Arena, New Delhi, in partnership with Give for Rising Indian Stars Foundation.</li>
                <li>Published in <em>The Daily Metro</em> on reforming early-childhood pedagogy and parental engagement strategies.</li>
              </ul>
            </div>

            {/* Role 3: Collegeyatra */}
            <div className="space-y-1 pt-4 border-t border-slate-800/60 print:border-gray-300">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-base font-bold text-white print:text-black">
                  Director & Co-Founder
                </h3>
                <span className="text-xs font-mono text-[#D4AF37] print:text-black">2024 – Present · New Delhi</span>
              </div>
              <div className="text-xs text-slate-400 print:text-gray-700 font-medium">
                Collegeyatra · Higher-Education Admissions Guidance Platform
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 print:text-black pl-4 list-disc">
                <li>Oversee digital counseling initiatives connecting aspiring undergraduate students with college deans and admissions authorities.</li>
                <li>Community Partner for the National School Awards 2026 at Welcomhotel by ITC Hotels, Dwarka.</li>
                <li>Profiled in <em>Borok Times</em> highlighting entrepreneurial guidance during Bharat's higher educational expansion.</li>
              </ul>
            </div>

            {/* Role 4: SVEI */}
            <div className="space-y-1 pt-4 border-t border-slate-800/60 print:border-gray-300">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="text-base font-bold text-white print:text-black">
                  Founder & Principal Consultant
                </h3>
                <span className="text-xs font-mono text-[#D4AF37] print:text-black">Est. 2022 · East Patel Nagar, Delhi</span>
              </div>
              <div className="text-xs text-slate-400 print:text-gray-700 font-medium">
                SVEI — Sumit Varma Education & Immigration
              </div>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300 print:text-black pl-4 list-disc">
                <li>Provided individualized education consultancy, career mapping, and admissions advisory for domestic and overseas university aspirants.</li>
                <li>Specialized in counseling for undergraduate and professional streams including MBA and medical admissions.</li>
              </ul>
            </div>

          </div>

          {/* Section: Media & Public Engagements */}
          <div className="mb-8 print-section">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] print:text-black font-semibold mb-4 pb-1 border-b border-slate-800 print:border-gray-400">
              Media Productions & Public Engagements
            </h2>
            <div className="space-y-2 text-xs text-slate-300 print:text-black">
              <p>
                <strong>Host & Series Producer:</strong> <em>BrewED Talks</em>, <em>Partners in Parenting</em> (with Preet Sharma, NKS Education), and <em>Coffee with Educators</em>.
              </p>
              <p>
                <strong>Keynote Speaker:</strong> Speaking Minds Youth Conclave (March 2026); GTTCI Global Opportunities International Conference (September 2026).
              </p>
              <p>
                <strong>Invited Panelist:</strong> National School Awards 2026 (Welcomhotel Dwarka, New Delhi).
              </p>
            </div>
          </div>

          {/* Section: Documented Recognitions */}
          <div className="mb-8 print-section">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] print:text-black font-semibold mb-4 pb-1 border-b border-slate-800 print:border-gray-400">
              Documented Recognitions & Registry Records
            </h2>
            <div className="text-xs text-slate-300 print:text-black space-y-1">
              <p className="font-semibold text-white print:text-black">
                Influencer Book of World Records — January 2025 (Record No. 0198)
              </p>
              <p className="text-slate-400 print:text-gray-700">
                Citation: &ldquo;India’s Emerging Edupreneur & Influential Leader In Education&rdquo; for contributions to school and collegiate guidance.
              </p>
            </div>
          </div>

          {/* Section: Academic Credentials & Verification Ledger Status */}
          <div className="pt-6 border-t border-slate-800 print:border-gray-300 print-section">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 print:text-black font-semibold mb-3">
              Credentials & Verification Status
            </h2>
            <div className="bg-slate-950/60 print:bg-gray-50 border border-slate-800 print:border-gray-200 rounded-lg p-4 text-xs text-slate-400 print:text-gray-700 leading-relaxed">
              <div className="flex items-center gap-2 text-amber-300 print:text-black font-semibold mb-1">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Fact-Checking Transparency Notice</span>
              </div>
              <p>
                In strict adherence to professional resume standards, this profile lists only verified associations from official institutional records, business directory filings, and published media features. Academic degrees, graduation institutions, and pre-2022 employment roles are held pending final confirmation from Sumit Varma.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
