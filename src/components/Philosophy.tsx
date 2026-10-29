import React from 'react';
import { BookOpenCheck, Network, Lightbulb, GraduationCap, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#080D1A] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37] mb-3">
            <span>Guiding Principles</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Educational Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Principles Guiding Educational Impact.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A cohesive framework centered on transparent discovery, institutional accountability, future-ready competencies, and authentic youth participation.
          </p>
        </div>

        {/* 4 Editorial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.philosophy.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800/80">
                  <span className="font-mono text-[#D4AF37] font-semibold">PILLAR 0{index + 1}</span>
                  <span>{item.theme}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Actionable Principles */}
              <div className="bg-[#0B1120] border border-slate-800/80 rounded-lg p-5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Core Implementation Standards
                </span>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {item.principles.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-amber-500/10 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
