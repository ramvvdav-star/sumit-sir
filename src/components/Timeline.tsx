import React, { useState } from 'react';
import { Calendar, ExternalLink, ShieldCheck, MapPin, Award, Building, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, TimelineMilestone } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Conferences & Summits', 'Foundation', 'Public Events', 'Recognition'];

  const filteredTimeline = filter === 'All'
    ? PORTFOLIO_DATA.timeline
    : PORTFOLIO_DATA.timeline.filter(item => item.category === filter);

  const getTierBadgeStyle = (tier: TimelineMilestone['evidenceTier']) => {
    switch (tier) {
      case 'Verified Institutional Report':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Media Coverage':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/30';
      case 'Documented Public Listing':
        return 'text-amber-300 bg-amber-500/10 border-amber-500/30';
      case 'Advertised / Scheduled':
        return 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30';
      case 'Pending Verification':
        return 'text-orange-300 bg-orange-500/10 border-orange-500/30';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  return (
    <section id="timeline" className="py-20 lg:py-28 bg-[#09090C] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#EAB308] mb-3">
              <span>Career Trajectory</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Documented Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Chronological Career Journey.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              A transparent chronological record of entrepreneurial milestones, public convenings, media productions, and institutional alliances across India.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2 text-xs text-amber-200 bg-[#141418] border border-amber-500/30 px-3.5 py-2 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-[#EAB308] shrink-0" />
            <span>Every entry corresponds directly to verified source documentation</span>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 text-xs scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-colors cursor-pointer ${
                filter === cat
                  ? 'bg-[#EAB308] text-zinc-950 font-bold shadow-sm'
                  : 'bg-[#141418] text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {filteredTimeline.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#09090C] border-2 border-[#EAB308] group-hover:scale-125 transition-transform shadow-md" />

              {/* Timestamp label */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono font-bold text-[#EAB308] md:w-28 md:text-right mb-2 md:mb-0">
                {item.period}
              </div>

              {/* Milestone Card */}
              <div className="bg-[#121215] border border-zinc-800 group-hover:border-zinc-700 rounded-2xl p-6 transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="text-white font-medium">{item.organization}</span>
                    <span aria-hidden="true">·</span>
                    <span>Role: {item.role}</span>
                  </div>

                  {/* Evidence Tier Badge */}
                  <span className={`text-[11px] px-2.5 py-0.5 rounded-md border font-medium ${getTierBadgeStyle(item.evidenceTier)}`}>
                    {item.evidenceTier}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.notes && (
                  <div className="p-3 bg-[#09090C] border border-zinc-800 rounded-xl text-xs text-amber-300/90 mb-4">
                    <strong>Verification Notice:</strong> {item.notes}
                  </div>
                )}

                {/* Sourcing reference line */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span className="truncate max-w-md">Source: {item.source}</span>
                  {item.sourceUrl && (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium shrink-0 ml-3"
                    >
                      <span>Public Record</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
