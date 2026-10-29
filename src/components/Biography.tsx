import React from 'react';
import { Quote, CheckCircle2, AlertCircle } from 'lucide-react';

export const Biography: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F7F5F0] text-[#252A30] border-t border-[#E7E4DD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B39A68] mb-4">
            <span>Biographical Profile</span>
            <span className="text-[#252A30]/30">/</span>
            <span>Vision & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#142338] tracking-tight leading-[1.18] [text-wrap:balance]">
            Bridging the divide between foundational schooling, university choices, and national dialogue.
          </h2>
        </div>

        {/* Editorial Multi-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#252A30]/85 text-base sm:text-lg leading-relaxed">
            
            <p className="font-serif text-xl sm:text-2xl text-[#142338] leading-snug">
              In an educational ecosystem shaped by intense competition, information overload, and rapid economic transition, Sumit Varma has dedicated his work to building transparent, accessible bridges for Indian students and families.
            </p>

            <p>
              Operating from New Delhi and across national educational circuits, his initiatives span the entire learning lifecycle. Through <strong className="text-[#142338] font-semibold">Schoolyatra</strong>, he spearheads community-driven school discovery that helps parents navigate early-childhood and K–12 choices with pedagogical clarity rather than marketing rhetoric. With <strong className="text-[#142338] font-semibold">Collegeyatra</strong>, he connects aspiring undergraduate students directly with collegiate administrators, deans, and transparent admissions guidance.
            </p>

            <p>
              The origin of these discovery platforms began through an authentic intergenerational dialogue. Following the completion of Class 12, his son, <strong className="text-[#142338] font-semibold">Shiven Varma</strong>, proposed establishing a dedicated platform to demystify educational admissions for young learners. Taking two years of thorough market study and institutional consultation, Sumit Varma joined the initiative to bring executive governance, institutional alliances, and long-term stability to the vision.
            </p>

            <p>
              Recognizing that structural educational progress requires systemic cooperation, he established the <strong className="text-[#142338] font-semibold">Bharat Education Forum (BEF)</strong>. As President, he convenes vice-chancellors, school principals, policymakers, and foreign diplomatic delegations to forge international partnerships, champion teacher development, and provide young students with national conclaves where their aspirations are heard.
            </p>

            {/* Strategic Pillars Summary */}
            <div className="pt-8 mt-8 border-t border-[#E7E4DD] grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#252A30]/80">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#B39A68] block mb-1.5 font-bold">
                  Core Operational Focus
                </span>
                <p className="leading-relaxed">
                  Institutional convenings, transparent school discovery, collegiate admissions advisory, youth conclaves.
                </p>
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#B39A68] block mb-1.5 font-bold">
                  Guiding Philosophy
                </span>
                <p className="leading-relaxed">
                  Eliminating information asymmetry between institutions and families while treating youth as active stakeholders.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Quote & Biographical Record (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Editorial Broadsheet Pull Quote */}
            <div className="bg-[#FAF9F6] border border-[#E7E4DD] p-8 rounded shadow-sm relative">
              <Quote className="w-8 h-8 text-[#B39A68] mb-4 opacity-70" />
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#142338] leading-relaxed mb-6">
                &ldquo;Real leadership in education does not belong exclusively to administrators in boardrooms or students in lecture halls. It happens when parents, educators, and young minds come together in mutual respect and clear direction.&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-[#E7E4DD] flex items-center justify-between text-xs text-[#535C68]">
                <span className="font-semibold text-[#142338]">Sumit Varma</span>
                <span className="font-mono text-[11px] text-[#B39A68]">Speaking Minds Youth Conclave</span>
              </div>
            </div>

            {/* Verified Credentials Record Card */}
            <div className="bg-white border border-[#E7E4DD] p-8 rounded shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#B39A68] font-bold mb-4">
                Verified Leadership Record
              </h3>
              
              <ul className="space-y-3.5 text-xs text-[#252A30]/85 font-sans">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B39A68] shrink-0 mt-0.5" />
                  <span><strong>Founder & President</strong>, Bharat Education Forum (BEF)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B39A68] shrink-0 mt-0.5" />
                  <span><strong>Director & Co-Founder</strong>, Schoolyatra & Collegeyatra</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B39A68] shrink-0 mt-0.5" />
                  <span><strong>Founder & Consultant</strong>, SVEI (East Patel Nagar, Delhi; Est. 2022)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B39A68] shrink-0 mt-0.5" />
                  <span><strong>Host & Producer</strong>, BrewED Talks & Partners in Parenting</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B39A68] shrink-0 mt-0.5" />
                  <span><strong>Co-Host & Speaker</strong>, GTTCI Global Opportunities Conference</span>
                </li>
              </ul>

              {/* Factual Integrity Footnote */}
              <div className="mt-6 pt-5 border-t border-[#E7E4DD] flex items-start gap-2 text-[11px] text-[#535C68] leading-relaxed">
                <AlertCircle className="w-3.5 h-3.5 text-[#B39A68] shrink-0 mt-0.5" />
                <span>
                  Factual standard: Only independently documented and directory-verified roles are published. Educational degree credentials are preserved for formal client confirmation.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
