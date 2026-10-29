import React, { useState } from 'react';
import { Compass, Users, Sparkles, BookOpen, Quote, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Biography: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'genesis' | 'approach'>('narrative');

  return (
    <section id="biography" className="py-20 lg:py-28 bg-[#070B14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37] mb-3">
            <span>Professional Profile</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Leadership & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Connecting Ecosystems Across Bharat’s Educational Landscape.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Sumit Varma is an education entrepreneur, community builder, and guidance professional dedicated
            to fostering collaboration between schools, universities, parents, and emerging student leaders.
          </p>
        </div>

        {/* Tab Controls (Functional Button Elements) */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-lg max-w-md mb-10">
          <button
            onClick={() => setActiveTab('narrative')}
            className={`flex-1 px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'narrative'
                ? 'bg-[#D4AF37] text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Executive Narrative
          </button>
          <button
            onClick={() => setActiveTab('genesis')}
            className={`flex-1 px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'genesis'
                ? 'bg-[#D4AF37] text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Venture Genesis
          </button>
          <button
            onClick={() => setActiveTab('approach')}
            className={`flex-1 px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'approach'
                ? 'bg-[#D4AF37] text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Guidance Approach
          </button>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === 'narrative' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-in fade-in duration-300">
            <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
              <p>
                In an educational landscape marked by rapid transformation, information overload, and increasing divergence between academic curricula and economic realities, Sumit Varma has focused his work on building trustworthy, accessible bridges for students and families.
              </p>
              <p>
                Operating across New Delhi and national educational networks, Varma spearheads initiatives that span the entire educational continuum—from foundational K-12 school discovery through <strong className="text-white font-medium">Schoolyatra</strong>, to higher-education pathways via <strong className="text-white font-medium">Collegeyatra</strong>, overseas education guidance under <strong className="text-white font-medium">SVEI</strong>, and institutional policy exchange through the <strong className="text-white font-medium">Bharat Education Forum</strong>.
              </p>
              <p>
                His professional philosophy rejects transactional advisory models in favor of sustained stakeholder collaboration. By convening school principals, university deans, corporate partners, and international embassy delegations, his work creates spaces where genuine educational problem-solving can occur.
              </p>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400">
                <div>
                  <span className="text-[#D4AF37] block font-mono uppercase mb-1">Primary Mandates</span>
                  <p className="text-slate-300">Institutional convenings, admissions advisory, parent guidance, youth conclaves.</p>
                </div>
                <div>
                  <span className="text-[#D4AF37] block font-mono uppercase mb-1">Geographic Presence</span>
                  <p className="text-slate-300">Headquartered in New Delhi, active across North India and pan-Bharat networks.</p>
                </div>
              </div>
            </div>

            {/* Right Side Editorial Callout */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-xl p-8 relative">
              <Quote className="w-8 h-8 text-[#D4AF37]/40 mb-4" />
              <blockquote className="text-base sm:text-lg font-serif italic text-slate-200 leading-relaxed mb-6">
                &ldquo;Real leadership in education does not belong exclusively to administrators in boardrooms or students in lecture halls. It happens when parents, educators, and young minds come together in mutual respect and clear direction.&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-200">Sumit Varma</span>
                <span className="font-mono text-[11px] text-[#D4AF37]">Speaking Minds Conclave Address</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'genesis' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-in fade-in duration-300">
            <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs text-amber-200 mb-2 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Source: First-person reflection documented at Speaking Minds Youth Conclave (March 2026) and recorded in Bharat Education Forum archival records.
                </span>
              </div>
              <p>
                The foundation of Schoolyatra and Collegeyatra emerged from an authentic intergenerational dialogue. Following the completion of Class 12, Sumit Varma’s son, <strong className="text-white font-medium">Shiven Varma</strong>, proposed creating a dedicated ecosystem to demystify educational choices for students struggling with uncertainty and opaque admissions criteria.
              </p>
              <p>
                Rather than rushing into execution, Varma spent nearly two years researching the structural pain points of India’s school discovery and college admissions ecosystem. The goal was to build an enterprise that was not merely a marketing directory, but a genuine guidance ecosystem grounded in parental trust and educator partnerships.
              </p>
              <p>
                Today, the father-and-son partnership exemplifies a rare blend of executive organizational discipline and youthful digital insight, powering initiatives like the Great Indian Kids Festival and the Bharat Young Leaders Council.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-xl p-8 space-y-6">
              <h3 className="text-lg font-serif font-bold text-white">The Collaborative Model</h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-amber-500/20 text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Parent-Centric Diligence</h4>
                    <p className="text-slate-400 mt-0.5">Assisting parents through objective criteria rather than institutional marketing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-amber-500/20 text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Youth Agency</h4>
                    <p className="text-slate-400 mt-0.5">Giving students a direct voice in shaping education through BYLC and youth assemblies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-amber-500/20 text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Multi-Institutional Dialogue</h4>
                    <p className="text-slate-400 mt-0.5">Connecting preschools, K-12 boards, and higher-ed universities in a continuous cycle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'approach' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-2">Unbiased Discovery</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Moving past generic ratings by providing families with verified information on school culture, teacher ratios, pedagogical approach, and pastoral care.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                INITIATIVE: SCHOOLYATRA
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-2">Ecosystem Convening</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Creating open platforms for university chancellors, school principals, and embassy diplomats to forge mutual partnerships and discuss national educational priorities.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                INITIATIVE: BHARAT EDUCATION FORUM
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-2">Future-Ready Readiness</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Aligning student ambitions with practical employability, digital literacy, and global educational opportunities in an evolving economy.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                INITIATIVE: SVEI & COLLEGYATRA
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
