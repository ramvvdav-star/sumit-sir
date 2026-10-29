import React, { useState } from 'react';
import { Compass, Users, Sparkles, Quote, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Biography: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'genesis' | 'approach'>('narrative');

  return (
    <section id="biography" className="py-20 lg:py-28 bg-[#09090C] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#EAB308] mb-3">
            <span>PROFESSIONAL PROFILE</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>LEADERSHIP & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Connecting Ecosystems Across Bharat’s Educational Landscape.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            Sumit Varma is an education entrepreneur, community builder, and guidance professional dedicated
            to fostering collaboration between schools, universities, parents, and emerging student leaders.
          </p>
        </div>

        {/* Tab Controls matching screenshot */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          <button
            onClick={() => setActiveTab('narrative')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'narrative'
                ? 'bg-[#EAB308] text-zinc-950 shadow-md'
                : 'bg-[#141418] text-zinc-200 border border-zinc-800 hover:border-zinc-700'
            }`}
          >
            Executive Narrative
          </button>
          <button
            onClick={() => setActiveTab('genesis')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
              activeTab === 'genesis'
                ? 'bg-[#EAB308] text-zinc-950 font-bold shadow-md'
                : 'bg-[#141418] text-zinc-200 border border-zinc-800 hover:border-zinc-700'
            }`}
          >
            Venture Genesis
          </button>
          <button
            onClick={() => setActiveTab('approach')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
              activeTab === 'approach'
                ? 'bg-[#EAB308] text-zinc-950 font-bold shadow-md'
                : 'bg-[#141418] text-zinc-200 border border-zinc-800 hover:border-zinc-700'
            }`}
          >
            Guidance Approach
          </button>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === 'narrative' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start animate-in fade-in duration-300">
            {/* Left Column Narrative */}
            <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-sm sm:text-base">
              <p>
                In an educational landscape marked by rapid transformation, information overload, and increasing divergence between academic curricula and economic realities, Sumit Varma has focused his work on building trustworthy, accessible bridges for students and families.
              </p>
              <p>
                Operating across New Delhi and national educational networks, Varma spearheads initiatives that span the entire educational continuum—from foundational K-12 school discovery through <strong className="text-white font-semibold">Schoolyatra</strong>, to higher-education pathways via <strong className="text-white font-semibold">Collegeyatra</strong>, overseas education guidance under <strong className="text-white font-semibold">SVEI</strong>, and institutional policy exchange through the <strong className="text-white font-semibold">Bharat Education Forum</strong>.
              </p>
              <p>
                His professional philosophy rejects transactional advisory models in favor of sustained stakeholder collaboration. By convening school principals, university deans, corporate partners, and international embassy delegations, his work creates spaces where genuine educational problem-solving can occur.
              </p>

              {/* Bottom Mandates & Presence Metadata */}
              <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-zinc-400">
                <div>
                  <span className="text-[#EAB308] font-bold font-mono uppercase tracking-wider block mb-1">
                    PRIMARY MANDATES
                  </span>
                  <p className="text-zinc-300">
                    Institutional convenings, admissions advisory, parent guidance, youth conclaves.
                  </p>
                </div>
                <div>
                  <span className="text-[#EAB308] font-bold font-mono uppercase tracking-wider block mb-1">
                    GEOGRAPHIC PRESENCE
                  </span>
                  <p className="text-zinc-300">
                    Headquartered in New Delhi, active across North India and pan-Bharat networks.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Quote Card matching screenshot */}
            <div className="lg:col-span-5 bg-[#101014] border border-zinc-800 rounded-2xl p-7 sm:p-9 relative shadow-2xl">
              <Quote className="w-10 h-10 text-[#EAB308] mb-5 opacity-90" />
              <blockquote className="text-lg sm:text-xl font-serif italic text-white leading-relaxed mb-8">
                &ldquo;Real leadership in education does not belong exclusively to administrators in boardrooms or students in lecture halls. It happens when parents, educators, and young minds come together in mutual respect and clear direction.&rdquo;
              </blockquote>
              <div className="pt-5 border-t border-zinc-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white text-sm">Sumit Varma</span>
                <span className="font-mono text-[#EAB308] font-medium">Speaking Minds Conclave Address</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'genesis' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start animate-in fade-in duration-300">
            <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-sm sm:text-base">
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                <span>
                  Source: First-person reflection documented at Speaking Minds Youth Conclave (March 2026) and recorded in Bharat Education Forum archival records.
                </span>
              </div>
              <p>
                The foundation of Schoolyatra and Collegeyatra emerged from an authentic intergenerational dialogue. Following the completion of Class 12, Sumit Varma’s son, <strong className="text-white font-semibold">Shiven Varma</strong>, proposed creating a dedicated ecosystem to demystify educational choices for students struggling with uncertainty and opaque admissions criteria.
              </p>
              <p>
                Rather than rushing into execution, Varma spent nearly two years researching the structural pain points of India’s school discovery and college admissions ecosystem. The goal was to build an enterprise that was not merely a marketing directory, but a genuine guidance ecosystem grounded in parental trust and educator partnerships.
              </p>
              <p>
                Today, the father-and-son partnership exemplifies a rare blend of executive organizational discipline and youthful digital insight, powering initiatives like the Great Indian Kids Festival and the Bharat Young Leaders Council.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#101014] border border-zinc-800 rounded-2xl p-7 space-y-6">
              <h3 className="text-lg font-serif font-bold text-white">The Collaborative Model</h3>
              <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-amber-500/20 text-[#EAB308] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Parent-Centric Diligence</h4>
                    <p className="text-zinc-400 mt-0.5">Assisting parents through objective criteria rather than institutional marketing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-amber-500/20 text-[#EAB308] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Youth Agency</h4>
                    <p className="text-zinc-400 mt-0.5">Giving students a direct voice in shaping education through BYLC and youth assemblies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-amber-500/20 text-[#EAB308] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Multi-Institutional Dialogue</h4>
                    <p className="text-zinc-400 mt-0.5">Connecting preschools, K-12 boards, and higher-ed universities in a continuous cycle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'approach' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="bg-[#101014] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#EAB308] mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-2">Unbiased Discovery</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Moving past generic ratings by providing families with verified information on school culture, teacher ratios, pedagogical approach, and pastoral care.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-zinc-800 text-[11px] font-mono text-[#EAB308]">
                INITIATIVE: SCHOOLYATRA
              </div>
            </div>

            <div className="bg-[#101014] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#EAB308] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-2">Ecosystem Convening</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Creating open platforms for university chancellors, school principals, and embassy diplomats to forge mutual partnerships and discuss national educational priorities.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-zinc-800 text-[11px] font-mono text-[#EAB308]">
                INITIATIVE: BHARAT EDUCATION FORUM
              </div>
            </div>

            <div className="bg-[#101014] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#EAB308] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-2">Future-Ready Readiness</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Aligning student ambitions with practical employability, digital literacy, and global educational opportunities in an evolving economy.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-zinc-800 text-[11px] font-mono text-[#EAB308]">
                INITIATIVE: SVEI & COLLEGEYATRA
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
