import React, { useState } from 'react';
import { ExternalLink, CheckCircle, ArrowRight, Layers, Building2, GraduationCap, Radio, Users2, X, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA, Venture } from '../data/portfolioData';

export const Ventures: React.FC = () => {
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'National Forum', 'K-12 Discovery', 'Higher Education', 'Consulting & Advisory', 'Media & Podcasts', 'Youth Leadership'];

  const filteredVentures = filterCategory === 'All'
    ? PORTFOLIO_DATA.ventures
    : PORTFOLIO_DATA.ventures.filter(v => v.category === filterCategory);

  return (
    <section id="ventures" className="py-20 lg:py-28 bg-[#09090C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#EAB308] mb-3">
              <span>Leadership & Organizations</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Documented Entities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Ventures & Initiatives.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              Every initiative represents an institutional response to a specific systemic challenge in education—from early school choice to global diplomatic academic alliances.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-xs text-zinc-400 font-mono">
            <span>6 Documented Initiatives</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span className="text-[#EAB308]">Verified Public Records</span>
          </div>
        </div>

        {/* Category Filter Buttons (Functional segmented buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-colors cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#EAB308] text-zinc-950 font-bold shadow-sm'
                  : 'bg-[#141418] text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Venture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredVentures.map((venture) => (
            <div
              key={venture.id}
              className="group bg-[#121215] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* Header row: Category & Role (Unboxed metadata) */}
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-4 pb-3 border-b border-zinc-800/80">
                  <span className="font-mono text-[#EAB308] font-bold">{venture.category}</span>
                  <span>{venture.established}</span>
                </div>

                {/* Venture Name & Tagline */}
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#EAB308] transition-colors mb-2">
                  {venture.name}
                </h3>
                
                {/* Confirmed Role Badge (Single unboxed line) */}
                <div className="text-xs font-semibold text-zinc-200 mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
                  <span>{venture.role}</span>
                </div>

                {/* Summary */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {venture.summary}
                </p>

                {/* Key Documented Milestone Preview */}
                <div className="bg-[#09090C] border border-zinc-800/80 rounded-xl p-3.5 mb-6 text-xs text-zinc-300">
                  <span className="text-[10px] font-mono text-[#EAB308] uppercase tracking-wider block mb-1">
                    Key Documented Outcome
                  </span>
                  <p className="line-clamp-2 leading-relaxed">
                    {venture.documentedMilestones[0]}
                  </p>
                </div>
              </div>

              {/* Card Footer: Detail Modal Trigger */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="text-[11px] text-zinc-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{venture.verificationStatus}</span>
                </div>

                <button
                  onClick={() => setSelectedVenture(venture)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EAB308] hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>View Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* In-Depth Venture Dossier Modal */}
      {selectedVenture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="bg-[#0B1120] border border-slate-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedVenture(null)}
              className="absolute top-5 right-5 p-1.5 rounded-md text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-slate-800 pb-5 mb-6 pr-8">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                <span>{selectedVenture.category}</span>
                <span aria-hidden="true">·</span>
                <span>Est. {selectedVenture.established}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                {selectedVenture.name}
              </h3>
              <p className="text-sm font-medium text-slate-300">
                Confirmed Role: <strong className="text-white">{selectedVenture.role}</strong>
              </p>
            </div>

            {/* Detailed Description */}
            <div className="space-y-6 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Institutional Scope & Mission
                </h4>
                <p className="leading-relaxed">
                  {selectedVenture.detailedDescription}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                  Key Responsibilities & Contributions
                </h4>
                <ul className="space-y-2">
                  {selectedVenture.keyResponsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documented Milestones */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                  Documented Achievements & Events
                </h4>
                <ul className="space-y-2">
                  {selectedVenture.documentedMilestones.map((milestone, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Official Partners */}
              {selectedVenture.officialPartners.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Documented Partners & Collaborators
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {selectedVenture.officialPartners.map((partner, idx) => (
                      <span key={idx} className="px-3 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Source Verification Citations */}
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Public Sourcing & Evidence References</span>
                </h4>
                <div className="space-y-2">
                  {selectedVenture.sourceCitations.map((citation, idx) => (
                    <div key={idx} className="p-3 rounded bg-amber-500/5 border border-amber-500/20 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-amber-200">{citation.label}</span>
                        {citation.url && (
                          <a
                            href={citation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:text-sky-300 flex items-center gap-1"
                          >
                            <span>Official Source</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-slate-400">{citation.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedVenture(null)}
                className="px-5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
