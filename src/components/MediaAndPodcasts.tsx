import React, { useState } from 'react';
import { Radio, Headphones, Play, Award, ExternalLink, ShieldCheck, CheckCircle2, Info, Sparkles, X } from 'lucide-react';
import { PORTFOLIO_DATA, MediaEpisode } from '../data/portfolioData';

export const MediaAndPodcasts: React.FC = () => {
  const [activeEpisode, setActiveEpisode] = useState<MediaEpisode | null>(null);

  return (
    <section id="media" className="py-20 lg:py-28 bg-[#09090C] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#EAB308] mb-3">
              <span>Thought Leadership</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Podcasts & Public Appearances</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Educational Media & Dialogue.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              Curating thoughtful conversations with school leaders, child psychologists, collegiate deans, and educators to unpack the evolving challenges of Indian education.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-zinc-400">
            <span>SERIES: BrewED Talks · Partners in Parenting</span>
          </div>
        </div>

        {/* Media Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PORTFOLIO_DATA.mediaEpisodes.map((ep) => (
            <div
              key={ep.id}
              className="bg-[#121215] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3 pb-3 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-[#EAB308]" />
                    <span className="font-mono text-[#EAB308] font-bold">{ep.series}</span>
                  </div>
                  <span>{ep.recordedDate} · Approx {ep.durationApprox}</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#EAB308] transition-colors mb-2">
                  {ep.title}
                </h3>

                <p className="text-xs text-amber-200/90 mb-3 font-medium">
                  Featuring: {ep.featuredGuestOrTopic}
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                  {ep.description}
                </p>

                {/* Key Themes tags */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mb-6">
                  {ep.keyThemes.map((theme, i) => (
                    <React.Fragment key={i}>
                      <span>{theme}</span>
                      {i < ep.keyThemes.length - 1 && <span aria-hidden="true" className="text-zinc-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] text-zinc-400 font-mono">Archive: {ep.source}</span>
                <button
                  onClick={() => setActiveEpisode(ep)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-zinc-950 bg-[#EAB308] hover:bg-[#F59E0B] rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Episode Brief</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Public Registry Recognition Subsection */}
        <div className="pt-12 border-t border-zinc-800">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#EAB308] mb-2">
              <span>Public Recognition & Registry</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Understated Standards</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Documented Recognitions & Registry Records.
            </h3>
            <p className="text-sm text-zinc-300 mt-2">
              Maintained with journalistic transparency, distinguishing official directory records from independent institutional audits.
            </p>
          </div>

          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#EAB308] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#EAB308] mb-1 font-bold">
                    <span>Influencer Book of World Records</span>
                    <span aria-hidden="true">·</span>
                    <span>Registry Record No. 0198</span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white mb-2">
                    India’s Emerging Edupreneur & Influential Leader In Education
                  </h4>
                  <p className="text-xs text-zinc-400 mb-3">
                    Documented Record Entry Date: January 2025 · Registry Category: Education Leadership
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
                    Recognized within the private record-book registry for entrepreneurial initiatives across school discovery and collegiate guidance in India.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:items-end gap-2">
                <a
                  href="https://www.influencerbookofworldrecords.com/recordDetail/sumit-verma4751"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-sky-400 hover:text-sky-300 bg-sky-950/40 border border-sky-800/60 rounded-xl transition-colors"
                >
                  <span>View Registry Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Fact-Checking Integrity Callout */}
            <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-start gap-3 text-xs text-amber-200/90 bg-amber-500/5 p-4 rounded-xl border border-amber-500/15">
              <Info className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-200">Fact-Checking & Audit Note:</strong> In strict alignment with our verification standards, we document that this recognition is a third-party record directory listing rather than a statutory government honor. Physical certificate inspection is logged in the verification ledger to reconcile minor registration date discrepancies across external portals.
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Episode Audio Brief Modal */}
      {activeEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0B1120] border border-slate-700 rounded-xl max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveEpisode(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-md bg-slate-800/60 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-2">
              <span>{activeEpisode.series}</span>
              <span aria-hidden="true">·</span>
              <span>{activeEpisode.recordedDate}</span>
            </div>

            <h3 className="text-xl font-serif font-bold text-white mb-2">
              {activeEpisode.title}
            </h3>

            <p className="text-xs text-amber-200 mb-4 font-medium">
              Guest / Theme: {activeEpisode.featuredGuestOrTopic}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeEpisode.description}
            </p>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-6">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Core Pedagogical Insights
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeEpisode.keyThemes.map((theme, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-800">
              <span>Host: Sumit Varma</span>
              <button
                onClick={() => setActiveEpisode(null)}
                className="px-4 py-1.5 rounded bg-slate-800 text-slate-200 hover:bg-slate-700 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
