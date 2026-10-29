import React, { useState } from 'react';
import { Target, Users, Calendar, MapPin, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA, ImpactProject } from '../data/portfolioData';

export const ImpactAndProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ImpactProject>(PORTFOLIO_DATA.impactProjects[0]);

  return (
    <section id="initiatives" className="py-24 lg:py-32 bg-[#F7F5F0] text-[#252A30] border-t border-[#E7E4DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-[#E7E4DD]">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B39A68] mb-4">
            <span>Convenings & Impact</span>
            <span className="text-[#252A30]/30">/</span>
            <span>Documented Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#142338] tracking-tight leading-tight">
            Selected Initiatives & Convenings.
          </h2>
          <p className="mt-4 text-base text-[#252A30]/80 leading-relaxed">
            Major summits, community festivals, and educational initiatives convened to deliver tangible institutional partnerships, parental clarity, and youth leadership.
          </p>
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 space-y-3.5">
            {PORTFOLIO_DATA.impactProjects.map((project) => {
              const isSelected = activeProject.id === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`w-full text-left p-6 rounded border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#B39A68] shadow-md'
                      : 'bg-[#FAF9F6] border-[#E7E4DD] hover:border-[#B39A68]/60 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#535C68] mb-2 font-mono">
                    <span className="text-[#B39A68] font-bold">{project.date}</span>
                    <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-[#F7F5F0] text-[#142338] border border-[#E7E4DD]">
                      {project.evidenceTier}
                    </span>
                  </div>
                  <h3 className={`text-base sm:text-lg font-serif font-bold transition-colors ${isSelected ? 'text-[#142338]' : 'text-[#252A30]'}`}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#535C68] mt-1.5 line-clamp-1">
                    {project.organization} · Role: {project.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Project Details */}
          <div className="lg:col-span-7 bg-white border border-[#E7E4DD] rounded p-8 sm:p-10 shadow-sm">
            
            {/* Project Header */}
            <div className="border-b border-[#E7E4DD] pb-6 mb-8">
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#535C68] font-mono mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#B39A68]" />
                  <span>{activeProject.date}</span>
                </span>
                <span>/</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B39A68]" />
                  <span>{activeProject.venueOrPlatform}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#142338] mb-3">
                {activeProject.title}
              </h3>

              <div className="text-xs sm:text-sm text-[#535C68]">
                Convening Organization: <strong className="text-[#142338]">{activeProject.organization}</strong> · Role: <strong className="text-[#B39A68]">{activeProject.role}</strong>
              </div>
            </div>

            {/* Objective & Outcomes */}
            <div className="space-y-6 text-sm text-[#252A30]/85">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#B39A68] font-bold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#B39A68]" />
                  <span>Project Objective</span>
                </h4>
                <p className="leading-relaxed bg-[#FAF9F6] p-5 rounded border border-[#E7E4DD]">
                  {activeProject.objective}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#B39A68] font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B39A68]" />
                  <span>Documented Outcome & Impact</span>
                </h4>
                <p className="leading-relaxed bg-[#FAF9F6] p-5 rounded border border-[#E7E4DD] text-[#142338] font-medium">
                  {activeProject.documentedOutcome}
                </p>
              </div>

              {/* Partners */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#B39A68] font-bold mb-2.5 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#B39A68]" />
                  <span>Documented Institutional Partners</span>
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeProject.partners.map((partner, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded bg-[#F7F5F0] text-[#142338] border border-[#E7E4DD] font-medium">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>

              {/* Source Link */}
              <div className="pt-6 border-t border-[#E7E4DD] flex flex-wrap items-center justify-between gap-4 text-xs text-[#535C68]">
                <div>
                  <span className="font-mono text-[10px] text-[#B39A68] uppercase block font-bold">Documentation Source:</span>
                  <span>{activeProject.source}</span>
                </div>

                {activeProject.sourceUrl && (
                  <a
                    href={activeProject.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#142338] hover:bg-[#1B2C44] text-white font-medium transition-colors"
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
