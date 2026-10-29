import React, { useState } from 'react';
import { ExternalLink, CheckCircle, ArrowRight, Building2, School, GraduationCap, Radio, Users2, X, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA, Venture } from '../data/portfolioData';

export const Ventures: React.FC = () => {
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);

  const bef = PORTFOLIO_DATA.ventures.find(v => v.id === 'bef')!;
  const schoolyatra = PORTFOLIO_DATA.ventures.find(v => v.id === 'schoolyatra')!;
  const collegeyatra = PORTFOLIO_DATA.ventures.find(v => v.id === 'collegeyatra')!;
  const svei = PORTFOLIO_DATA.ventures.find(v => v.id === 'svei')!;
  const brewedTalks = PORTFOLIO_DATA.ventures.find(v => v.id === 'brewed-talks')!;
  const bylc = PORTFOLIO_DATA.ventures.find(v => v.id === 'bylc')!;

  return (
    <section id="ventures" className="py-24 lg:py-32 bg-[#0D1826] text-[#FAF8F5] border-t border-[#E7E4DD]/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E7E4DD]/15">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B39A68] mb-4">
              <span>Leadership & Enterprise</span>
              <span className="text-[#E7E4DD]/30">/</span>
              <span>Documented Initiatives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Ventures & Institutional Leadership.
            </h2>
            <p className="mt-4 text-base text-[#EAE6DF]/80 leading-relaxed">
              Every initiative represents a targeted response to a systemic need—from transparent preschool discovery to bilateral international education dialogues.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-xs font-mono text-[#B39A68]">
            <span>6 Documented Initiatives · 100% Sourced</span>
          </div>
        </div>

        {/* 1. FEATURED FLAGSHIP: Bharat Education Forum (Large Asymmetric Feature) */}
        <div className="bg-[#142338] border border-[#E7E4DD]/15 rounded-lg p-8 sm:p-12 mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#B39A68] mb-3">
                <span>FLAGSHIP INITIATIVE</span>
                <span className="text-[#E7E4DD]/30">·</span>
                <span>EST. 2024</span>
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
                Bharat Education Forum (BEF)
              </h3>
              
              <p className="text-sm font-medium text-[#B39A68] mb-6">
                Sumit Varma’s Role: <strong className="text-white">Founder & President</strong>
              </p>

              <p className="text-sm sm:text-base text-[#EAE6DF]/85 leading-relaxed mb-6">
                A premier national network convening university vice-chancellors, school principals, policymakers, and foreign diplomatic delegations. Under Sumit Varma’s leadership, BEF champions high-level international academic conferences, teacher development summits, and youth leadership assemblies.
              </p>

              {/* Documented Milestones */}
              <div className="space-y-2.5 mb-8 text-xs sm:text-sm text-[#EAE6DF]/90">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#B39A68] shrink-0 mt-0.5" />
                  <span>Co-organized the <strong>Global Education, Global Opportunities</strong> conference with GTTCI (Sept 2026), attended by embassy envoys and 40+ universities.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#B39A68] shrink-0 mt-0.5" />
                  <span>Convened the <strong>Speaking Minds Youth Conclave</strong> (March 2026) engaging emerging student leaders.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#B39A68] shrink-0 mt-0.5" />
                  <span>Official Education Partner for the <strong>National School Awards 2026</strong> at Welcomhotel by ITC Hotels, Dwarka.</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedVenture(bef)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#0D1826] bg-[#B39A68] hover:bg-[#C2A875] rounded transition-colors"
                >
                  <span>View BEF Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://www.linkedin.com/company/bharat-eudcation-forum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FAF8F5]/80 hover:text-white transition-colors"
                >
                  <span>Official Forum Page</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B39A68]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0D1826] border border-[#E7E4DD]/10 p-7 rounded">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#B39A68] block mb-4">
                INSTITUTIONAL PARTNERS & REACH
              </span>
              <div className="space-y-4 text-xs text-[#EAE6DF]/80">
                <div className="border-b border-[#E7E4DD]/10 pb-3">
                  <strong className="text-white block text-sm mb-1">Global Trade & Technology Council (GTTCI)</strong>
                  <span>Bilateral conference partnership fostering international academic ties and cross-border university alliances.</span>
                </div>
                <div className="border-b border-[#E7E4DD]/10 pb-3">
                  <strong className="text-white block text-sm mb-1">National School Awards</strong>
                  <span>Collaborative educational partner recognizing excellence across K-12 school leadership and pedagogy.</span>
                </div>
                <div>
                  <strong className="text-white block text-sm mb-1">Diplomatic Missions & Embassies</strong>
                  <span>Engaging diplomatic representatives to facilitate higher-education student mobility.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. DUAL SHOWCASE: Schoolyatra & Collegeyatra (Editorial Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Schoolyatra */}
          <div className="bg-[#142338] border border-[#E7E4DD]/15 p-8 sm:p-10 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#B39A68] mb-3">
                <span>K-12 DISCOVERY & EARLY LEARNING</span>
                <span>EST. 2024</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Schoolyatra
              </h3>
              <p className="text-xs font-medium text-[#FAF8F5]/70 mb-4">
                Director & Co-Founder (with Shiven Varma)
              </p>
              <p className="text-sm text-[#EAE6DF]/85 leading-relaxed mb-6">
                A grassroots initiative empowering parents to make child-centric schooling decisions. Tackles the information asymmetry in preschool and primary school selection through verified community consultations and large-scale child engagement festivals.
              </p>
              <div className="bg-[#0D1826] border border-[#E7E4DD]/10 p-4 rounded mb-6 text-xs text-[#EAE6DF]/90">
                <span className="font-mono text-[#B39A68] block text-[10px] uppercase tracking-wider mb-1">
                  Documented Landmark
                </span>
                Associated with <strong>The Great Indian Kids Festival (17 Nov 2024)</strong> at the prestigious Indira Gandhi Indoor Stadium/Arena, New Delhi, in partnership with Give for Rising Indian Stars Foundation.
              </div>
            </div>
            <div className="pt-4 border-t border-[#E7E4DD]/10 flex items-center justify-between">
              <button
                onClick={() => setSelectedVenture(schoolyatra)}
                className="text-xs font-semibold uppercase tracking-wider text-[#B39A68] hover:text-[#C2A875] flex items-center gap-1.5"
              >
                <span>Read Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://thedailymetro.in/index.php/2024/08/29/transforming-early-childhood-education-schoolyatra-leads-the-way-introduction/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#EAE6DF]/60 hover:text-white flex items-center gap-1"
              >
                <span>Daily Metro Article</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Collegeyatra */}
          <div className="bg-[#142338] border border-[#E7E4DD]/15 p-8 sm:p-10 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#B39A68] mb-3">
                <span>HIGHER EDUCATION ADVISORY</span>
                <span>EST. 2024</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Collegeyatra
              </h3>
              <p className="text-xs font-medium text-[#FAF8F5]/70 mb-4">
                Director & Co-Founder
              </p>
              <p className="text-sm text-[#EAE6DF]/85 leading-relaxed mb-6">
                A collegiate admissions and guidance initiative bridging ambitious students across India with verified higher-education pathways. Connects applicants directly with university deans, directors, and transparent curriculum parameters.
              </p>
              <div className="bg-[#0D1826] border border-[#E7E4DD]/10 p-4 rounded mb-6 text-xs text-[#EAE6DF]/90">
                <span className="font-mono text-[#B39A68] block text-[10px] uppercase tracking-wider mb-1">
                  Documented Landmark
                </span>
                Official <strong>Community Partner for National School Awards 2026</strong>. Featured in Borok Times covering the entrepreneurial journey guiding higher education choices across Bharat.
              </div>
            </div>
            <div className="pt-4 border-t border-[#E7E4DD]/10 flex items-center justify-between">
              <button
                onClick={() => setSelectedVenture(collegeyatra)}
                className="text-xs font-semibold uppercase tracking-wider text-[#B39A68] hover:text-[#C2A875] flex items-center gap-1.5"
              >
                <span>Read Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://boroktimes.com/the-edupreneur-guiding-bharats-educational-renaissance-sumit-varma-shiven-varma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#EAE6DF]/60 hover:text-white flex items-center gap-1"
              >
                <span>Borok Times Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* 3. ASYMMETRIC TRIO: SVEI, BrewED Talks, and BYLC */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* SVEI */}
          <div className="bg-[#101D2E] border border-[#E7E4DD]/10 p-7 rounded flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B39A68] block mb-2">
                CONSULTING & OVERSEAS ADVISORY
              </span>
              <h4 className="text-xl font-serif font-bold text-white mb-1">
                SVEI
              </h4>
              <p className="text-xs text-[#EAE6DF]/60 mb-3">
                Sumit Varma Education & Immigration · Est. 2022
              </p>
              <p className="text-xs sm:text-sm text-[#EAE6DF]/80 leading-relaxed mb-4">
                Personalized educational consulting providing structured guidance for domestic and international university choices, including MBA and competitive professional programs.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E7E4DD]/10 flex items-center justify-between text-xs">
              <span className="text-[11px] text-[#EAE6DF]/50">Delhi Directory Filing</span>
              <button
                onClick={() => setSelectedVenture(svei)}
                className="text-[#B39A68] hover:underline font-medium cursor-pointer"
              >
                Dossier ↗
              </button>
            </div>
          </div>

          {/* BrewED Talks */}
          <div className="bg-[#101D2E] border border-[#E7E4DD]/10 p-7 rounded flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B39A68] block mb-2">
                EDUCATIONAL MEDIA & PODCASTS
              </span>
              <h4 className="text-xl font-serif font-bold text-white mb-1">
                BrewED Talks
              </h4>
              <p className="text-xs text-[#EAE6DF]/60 mb-3">
                Host & Executive Producer · 2024–Present
              </p>
              <p className="text-xs sm:text-sm text-[#EAE6DF]/80 leading-relaxed mb-4">
                Long-form conversational interview series and the 'Partners in Parenting' dialogues examining screen time, childhood pedagogy, and future-ready curricula with leading educators.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E7E4DD]/10 flex items-center justify-between text-xs">
              <span className="text-[11px] text-[#EAE6DF]/50">BEF Media Archive</span>
              <button
                onClick={() => setSelectedVenture(brewedTalks)}
                className="text-[#B39A68] hover:underline font-medium cursor-pointer"
              >
                Dossier ↗
              </button>
            </div>
          </div>

          {/* BYLC */}
          <div className="bg-[#101D2E] border border-[#E7E4DD]/10 p-7 rounded flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B39A68] block mb-2">
                YOUTH LEADERSHIP COUNCIL
              </span>
              <h4 className="text-xl font-serif font-bold text-white mb-1">
                Bharat Young Leaders
              </h4>
              <p className="text-xs text-[#EAE6DF]/60 mb-3">
                Convening Mentor · Classes 8–12 & University
              </p>
              <p className="text-xs sm:text-sm text-[#EAE6DF]/80 leading-relaxed mb-4">
                A student-centric initiative under BEF fostering public speaking, Model UNs, startup pitch days, and policy debates that give young learners real agency.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E7E4DD]/10 flex items-center justify-between text-xs">
              <span className="text-[11px] text-[#EAE6DF]/50">Conclave Delegations</span>
              <button
                onClick={() => setSelectedVenture(bylc)}
                className="text-[#B39A68] hover:underline font-medium cursor-pointer"
              >
                Dossier ↗
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* In-Depth Venture Dossier Modal */}
      {selectedVenture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1826]/90 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="bg-[#142338] border border-[#E7E4DD]/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative text-[#FAF8F5]"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelectedVenture(null)}
              className="absolute top-6 right-6 p-1.5 rounded text-[#EAE6DF]/60 hover:text-white bg-[#0D1826] border border-[#E7E4DD]/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-[#E7E4DD]/15 pb-5 mb-6 pr-8">
              <div className="flex items-center gap-2 text-xs font-mono text-[#B39A68] uppercase tracking-wider mb-2">
                <span>{selectedVenture.category}</span>
                <span aria-hidden="true">·</span>
                <span>Est. {selectedVenture.established}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                {selectedVenture.name}
              </h3>
              <p className="text-xs text-[#EAE6DF]/80">
                Sumit Varma's Verified Role: <strong className="text-white">{selectedVenture.role}</strong>
              </p>
            </div>

            <div className="space-y-6 text-sm text-[#EAE6DF]/85">
              <div>
                <h4 className="text-xs font-mono text-[#B39A68] uppercase tracking-wider mb-2">
                  Institutional Scope & Mission
                </h4>
                <p className="leading-relaxed">
                  {selectedVenture.detailedDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#B39A68] uppercase tracking-wider mb-2.5">
                  Key Documented Responsibilities
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {selectedVenture.keyResponsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B39A68] mt-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#B39A68] uppercase tracking-wider mb-2.5">
                  Documented Achievements & Events
                </h4>
                <ul className="space-y-2">
                  {selectedVenture.documentedMilestones.map((milestone, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm bg-[#0D1826] p-3 rounded border border-[#E7E4DD]/10">
                      <CheckCircle className="w-4 h-4 text-[#B39A68] shrink-0 mt-0.5" />
                      <span>{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedVenture.sourceCitations.length > 0 && (
                <div className="pt-4 border-t border-[#E7E4DD]/15">
                  <h4 className="text-xs font-mono text-[#B39A68] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#B39A68]" />
                    <span>Public Source Verification</span>
                  </h4>
                  <div className="space-y-2 text-xs">
                    {selectedVenture.sourceCitations.map((citation, idx) => (
                      <div key={idx} className="p-3 rounded bg-[#0D1826] border border-[#E7E4DD]/10">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-white">{citation.label}</span>
                          {citation.url && (
                            <a
                              href={citation.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#B39A68] hover:underline flex items-center gap-1"
                            >
                              <span>Original Link</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-[#EAE6DF]/60">{citation.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-5 border-t border-[#E7E4DD]/15 flex justify-end">
              <button
                onClick={() => setSelectedVenture(null)}
                className="px-5 py-2 text-xs font-semibold text-[#FAF8F5] bg-[#0D1826] hover:bg-[#1B2C44] border border-[#E7E4DD]/15 rounded transition-colors cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
