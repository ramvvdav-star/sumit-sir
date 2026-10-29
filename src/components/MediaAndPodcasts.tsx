import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, Mic, Radio, ShieldCheck, Award, Info, X } from 'lucide-react';
import { PORTFOLIO_DATA, MediaEpisode } from '../data/portfolioData';

export const MediaAndPodcasts: React.FC = () => {
  const [activeEpisode, setActiveEpisode] = useState<MediaEpisode | null>(null);

  return (
    <section id="media" className="py-24 lg:py-32 bg-[#F7F5F0] text-[#252A30] border-t border-[#E7E4DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-[#E7E4DD]">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B39A68] mb-4">
            <span>Public Engagements</span>
            <span className="text-[#252A30]/30">/</span>
            <span>Conferences, Media & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#142338] tracking-tight leading-tight">
            Speaking, Media & Public Dialogue.
          </h2>
          <p className="mt-4 text-base text-[#252A30]/80 leading-relaxed">
            A documented record of conference keynotes, diplomatic convenings, broadcast discussions with educators, and public registry recognitions.
          </p>
        </div>

        {/* 1. SPEAKING & CONFERENCE ENGAGEMENTS (Editorial Ledger Format) */}
        <div className="mb-20">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#B39A68] font-bold mb-8 flex items-center gap-2">
            <span>01. Verified Conference & Keynote Appearances</span>
          </h3>

          <div className="space-y-6">
            
            {/* GTTCI Conference */}
            <div className="bg-white border border-[#E7E4DD] p-7 sm:p-9 rounded shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#B39A68] font-bold">14 September 2026 · New Delhi</span>
                <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-[#F7F5F0] text-[#142338] border border-[#E7E4DD] font-medium">
                  Verified Institutional Report
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#142338] mb-2">
                Global Education, Global Opportunities International Conference
              </h4>
              <p className="text-xs text-[#535C68] mb-4 font-medium">
                Organized jointly with Global Trade & Technology Council of India (GTTCI) · Role: Co-Host & Opening Address
              </p>
              <p className="text-sm text-[#252A30]/85 leading-relaxed mb-5 max-w-4xl">
                Delivered opening remarks before foreign embassy representatives, education chancellors, and delegates from more than 40 educational institutions to establish cooperative international pathways for Indian students.
              </p>
              <div className="pt-4 border-t border-[#E7E4DD] flex items-center justify-between text-xs">
                <span className="text-[#535C68]">Source: Official GTTCI Institutional Conference Dispatch</span>
                <a
                  href="https://gttcindia.com/gttci-bharat-education-forum-host-global-education-global-opportunities-conference-to-strengthen-international-education-partnerships/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B39A68] hover:underline font-medium flex items-center gap-1"
                >
                  <span>View Dispatch</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Speaking Minds Youth Conclave */}
            <div className="bg-white border border-[#E7E4DD] p-7 sm:p-9 rounded shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#B39A68] font-bold">20 March 2026 · New Delhi</span>
                <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-[#F7F5F0] text-[#142338] border border-[#E7E4DD] font-medium">
                  Documented Public Conclave
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#142338] mb-2">
                Speaking Minds Youth Conclave
              </h4>
              <p className="text-xs text-[#535C68] mb-4 font-medium">
                Convened by Bharat Education Forum & BYLC · Role: Founder & Keynote Speaker
              </p>
              <p className="text-sm text-[#252A30]/85 leading-relaxed mb-5 max-w-4xl">
                Address reflecting on the origins of the education discovery movement alongside his son Shiven Varma, urging secondary and university students toward educational self-determination and critical civic engagement.
              </p>
              <div className="pt-4 border-t border-[#E7E4DD] flex items-center justify-between text-xs">
                <span className="text-[#535C68]">Source: Bharat Education Forum Official Archives</span>
                <a
                  href="https://www.linkedin.com/posts/bharat-eudcation-forum_speakingmindsyouthconclave-bharateducationforum-activity-7450845162559156224-yoei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B39A68] hover:underline font-medium flex items-center gap-1"
                >
                  <span>Archival Post</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* National School Awards 2026 */}
            <div className="bg-white border border-[#E7E4DD] p-7 sm:p-9 rounded shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#B39A68] font-bold">6 September 2026 · Welcomhotel by ITC, Dwarka, New Delhi</span>
                <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-[#F7F5F0] text-[#142338] border border-[#E7E4DD] font-medium">
                  Advertised Panelist & Institutional Partner
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#142338] mb-2">
                National School Awards 2026
              </h4>
              <p className="text-xs text-[#535C68] mb-4 font-medium">
                Official Education Partner: Bharat Education Forum · Community Partner: Collegeyatra
              </p>
              <p className="text-sm text-[#252A30]/85 leading-relaxed max-w-4xl">
                Invited panelist addressing nationwide educators on modern K-12 benchmarking and the convergence between school leadership and parent expectations.
              </p>
            </div>

          </div>
        </div>

        {/* 2. MEDIA PRODUCTIONS & PODCASTS (Editorial Cards) */}
        <div className="mb-20">
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#B39A68] font-bold mb-8 flex items-center gap-2">
            <span>02. Educational Podcasting & Broadcast Dialogues</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.mediaEpisodes.map((ep) => (
              <div
                key={ep.id}
                className="bg-white border border-[#E7E4DD] p-8 rounded shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#B39A68] mb-3 pb-3 border-b border-[#E7E4DD]">
                    <span className="font-bold">{ep.series}</span>
                    <span>{ep.recordedDate} · Approx {ep.durationApprox}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-serif font-bold text-[#142338] mb-2">
                    {ep.title}
                  </h4>

                  <p className="text-xs text-[#B39A68] font-medium mb-3">
                    Featured Theme / Speaker: {ep.featuredGuestOrTopic}
                  </p>

                  <p className="text-sm text-[#252A30]/85 leading-relaxed mb-6">
                    {ep.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#535C68] mb-6">
                    {ep.keyThemes.map((theme, i) => (
                      <React.Fragment key={i}>
                        <span>{theme}</span>
                        {i < ep.keyThemes.length - 1 && <span className="text-[#E7E4DD]">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E4DD] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#535C68]">Archive: {ep.source}</span>
                  <button
                    onClick={() => setActiveEpisode(ep)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#B39A68] hover:text-[#9E8453] cursor-pointer"
                  >
                    View Brief ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. ACHIEVEMENTS & PUBLIC REGISTRY (Restrained & Credible Format) */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#B39A68] font-bold mb-8 flex items-center gap-2">
            <span>03. Documented Recognitions & Registry Records</span>
          </h3>

          <div className="bg-white border border-[#E7E4DD] p-8 sm:p-10 rounded shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded bg-[#FAF8F5] border border-[#B39A68]/30 flex items-center justify-center text-[#B39A68] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#B39A68] font-bold mb-1">
                    <span>Influencer Book of World Records</span>
                    <span>·</span>
                    <span>Registry Record No. 0198</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#142338] mb-2">
                    India’s Emerging Edupreneur & Influential Leader In Education
                  </h4>
                  <p className="text-xs text-[#535C68] mb-3">
                    Documented Entry: January 2025 · Registry Category: Education Leadership
                  </p>
                  <p className="text-sm text-[#252A30]/85 leading-relaxed max-w-3xl">
                    Documented within the independent record registry honoring entrepreneurial initiatives across preschool discovery, higher-education guidance, and stakeholder convening in Bharat.
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href="https://www.influencerbookofworldrecords.com/recordDetail/sumit-verma4751"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#142338] bg-[#F7F5F0] hover:bg-[#E7E4DD] border border-[#E7E4DD] rounded transition-colors"
                >
                  <span>View Registry Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Fact-Checking Journalistic Note */}
            <div className="mt-8 pt-6 border-t border-[#E7E4DD] flex items-start gap-3 text-xs text-[#535C68] leading-relaxed">
              <Info className="w-4 h-4 text-[#B39A68] shrink-0 mt-0.5" />
              <div>
                <strong>Journalistic Transparency Standard:</strong> This entry is documented exactly as registered with the issuing body. In keeping with our strict factual verification rules, we note that a record-book listing represents third-party recognition rather than a statutory state award or independently audited national ranking. Physical certificate inspection is logged for client review.
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Episode Brief Modal */}
      {activeEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1826]/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-[#E7E4DD] rounded-lg max-w-lg w-full p-8 shadow-2xl relative text-[#252A30]">
            <button
              onClick={() => setActiveEpisode(null)}
              className="absolute top-6 right-6 p-1.5 text-[#535C68] hover:text-[#142338] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono text-[#B39A68] uppercase tracking-wider mb-2 font-bold">
              {activeEpisode.series} · {activeEpisode.recordedDate}
            </div>

            <h4 className="text-xl font-serif font-bold text-[#142338] mb-2">
              {activeEpisode.title}
            </h4>

            <p className="text-xs text-[#B39A68] mb-4 font-medium">
              Topic / Guest: {activeEpisode.featuredGuestOrTopic}
            </p>

            <p className="text-sm text-[#252A30]/85 leading-relaxed mb-6">
              {activeEpisode.description}
            </p>

            <div className="bg-[#FAF8F5] border border-[#E7E4DD] rounded p-4 mb-6">
              <span className="text-[11px] font-mono text-[#142338] uppercase tracking-wider block mb-2 font-bold">
                Discussion Takeaways
              </span>
              <ul className="space-y-1.5 text-xs text-[#252A30]/80">
                {activeEpisode.keyThemes.map((theme, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68]" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-xs text-[#535C68] pt-4 border-t border-[#E7E4DD]">
              <span>Host: Sumit Varma</span>
              <button
                onClick={() => setActiveEpisode(null)}
                className="px-4 py-1.5 rounded bg-[#142338] text-white hover:bg-[#1B2C44] cursor-pointer"
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
