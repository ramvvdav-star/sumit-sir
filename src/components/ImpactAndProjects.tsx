import React, { useState } from 'react';
import { Target, Users, Calendar, MapPin, ExternalLink, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { PORTFOLIO_DATA, ImpactProject } from '../data/portfolioData';

export const ImpactAndProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ImpactProject>(PORTFOLIO_DATA.impactProjects[0]);

  return (
    <section id="initiatives" className="py-20 lg:py-28 bg-[#080D1A] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37] mb-3">
            <span>Convenings & Impact</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Documented Initiatives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Selected Initiatives & Impact.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
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
                  className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-[#D4AF37]/60 shadow-lg shadow-[#D4AF37]/5'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-mono text-[#D4AF37] font-semibold">{project.date}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {project.evidenceTier}
                    </span>
                  </div>
                  <h3 className={`text-base font-serif font-bold transition-colors ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {project.organization} · Role: {project.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Project Deep Dive */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-xl p-6 sm:p-8">
            
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
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-[#D4AF37]" />
                  <span>Project Objective</span>
                </h4>
                <p className="leading-relaxed bg-[#0B1120] p-4 rounded-lg border border-slate-800/80">
                  {activeProject.objective}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Documented Outcome & Impact</span>
                </h4>
                <p className="leading-relaxed bg-[#0B1120] p-4 rounded-lg border border-slate-800/80 text-slate-200">
                  {activeProject.documentedOutcome}
                </p>
              </div>

              {/* Partners */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-sky-400" />
                  <span>Documented Institutional Partners</span>
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeProject.partners.map((partner, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded bg-slate-800/90 text-slate-200 border border-slate-700/80">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Source Citation */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div>
                  <span className="font-mono text-[11px] text-[#D4AF37] uppercase block">Documentation Source:</span>
                  <span>{activeProject.source}</span>
                </div>

                {activeProject.sourceUrl && (
                  <a
                    href={activeProject.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-sky-300 font-medium transition-colors"
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
