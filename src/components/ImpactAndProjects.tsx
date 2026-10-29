import React, { useState } from 'react';
import { Target, Users, Calendar, MapPin, ExternalLink, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { PORTFOLIO_DATA, ImpactProject } from '../data/portfolioData';

export const ImpactAndProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ImpactProject>(PORTFOLIO_DATA.impactProjects[0]);

  return (
    <section id="initiatives" className="py-20 lg:py-28 bg-[#09090C] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#EAB308] mb-3">
            <span>Convenings & Impact</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Documented Initiatives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Selected Initiatives & Impact.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            Major summits, community festivals, and educational initiatives convened to deliver tangible institutional partnerships, parental clarity, and youth leadership.
          </p>
        </div>

        {/* Master-Detail Layout for Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {PORTFOLIO_DATA.impactProjects.map((project) => {
              const isSelected = activeProject.id === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#141418] border-[#EAB308] shadow-lg shadow-amber-500/10'
                      : 'bg-[#101014] border-zinc-800 hover:border-zinc-700 hover:bg-[#141418]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                    <span className="font-mono text-[#EAB308] font-bold">{project.date}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {project.evidenceTier}
                    </span>
                  </div>
                  <h3 className={`text-base font-serif font-bold transition-colors ${isSelected ? 'text-white' : 'text-zinc-200'}`}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                    {project.organization} · Role: {project.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Project Deep Dive */}
          <div className="lg:col-span-7 bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8">
            
            {/* Project Header */}
            <div className="border-b border-slate-800 pb-5 mb-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{activeProject.date}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{activeProject.venueOrPlatform}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                {activeProject.title}
              </h3>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <span>Convening Body: <strong className="text-white">{activeProject.organization}</strong></span>
                <span aria-hidden="true">·</span>
                <span>Role: <strong className="text-[#D4AF37]">{activeProject.role}</strong></span>
              </div>
            </div>

            {/* Objective & Outcomes */}
            <div className="space-y-6 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-[#EAB308]" />
                  <span>Project Objective</span>
                </h4>
                <p className="leading-relaxed bg-[#09090C] p-4 rounded-xl border border-zinc-800/80">
                  {activeProject.objective}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Documented Outcome & Impact</span>
                </h4>
                <p className="leading-relaxed bg-[#09090C] p-4 rounded-xl border border-zinc-800/80 text-zinc-200">
                  {activeProject.documentedOutcome}
                </p>
              </div>

              {/* Partners */}
              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-sky-400" />
                  <span>Documented Institutional Partners</span>
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeProject.partners.map((partner, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-[#141418] text-zinc-200 border border-zinc-700/80">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Source Citation */}
              <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                <div>
                  <span className="font-mono text-[11px] text-[#EAB308] uppercase block font-bold">Documentation Source:</span>
                  <span>{activeProject.source}</span>
                </div>

                {activeProject.sourceUrl && (
                  <a
                    href={activeProject.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141418] hover:bg-[#1C1C22] text-sky-400 hover:text-sky-300 font-medium transition-colors"
                  >
                    <span>View Official Report</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
