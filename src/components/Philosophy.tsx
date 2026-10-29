import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-[#0D1826] text-[#FAF8F5] border-t border-[#E7E4DD]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-[#E7E4DD]/15">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B39A68] mb-4">
            <span>Guiding Principles</span>
            <span className="text-[#E7E4DD]/30">/</span>
            <span>Editorial Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Educational Philosophy & Approach.
          </h2>
          <p className="mt-4 text-base text-[#EAE6DF]/80 leading-relaxed">
            An editorial perspective on what authentic educational reform demands: institutional accountability, transparent guidance, and treating youth as active contributors.
          </p>
        </div>

        {/* 4 Pillars Editorial Broadsheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {PORTFOLIO_DATA.philosophy.map((pillar, index) => (
            <div key={index} className="flex flex-col justify-between border-t border-[#B39A68]/40 pt-8">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#B39A68] mb-4">
                  <span className="font-bold tracking-widest uppercase">PRINCIPLE 0{index + 1}</span>
                  <span className="text-[#EAE6DF]/60">{pillar.theme}</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-4 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-[#EAE6DF]/85 leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Actionable Commitments */}
              <div className="bg-[#142338] border border-[#E7E4DD]/10 p-6 rounded">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B39A68] block mb-3 font-bold">
                  Documented Implementation Standards
                </span>
                <ul className="space-y-2 text-xs text-[#EAE6DF]/90">
                  {pillar.principles.map((pr, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{pr}</span>
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
