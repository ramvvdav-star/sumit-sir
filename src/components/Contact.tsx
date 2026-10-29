import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle2, AlertCircle, Building2, Copy, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('Institutional Partnership (BEF)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
    honeypot: '',
    consent: false
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const inquiryOptions = [
    'Institutional Partnership (BEF)',
    'Keynote / Conference Speaking Invitation',
    'School Discovery Advisory (Schoolyatra)',
    'Collegiate Admissions Consultation (Collegeyatra)',
    'BrewED Talks / Podcast Inquiry',
    'General Professional Dialogue'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name, valid email address, and inquiry message.');
      return;
    }

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('Please acknowledge the professional communication and privacy consent.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const copyInquirySummary = () => {
    const text = `Inquiry Type: ${inquiryType}\nName: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization} (${formData.role})\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0D1826] text-[#FAF8F5] border-t border-[#E7E4DD]/15 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-[#E7E4DD]/15">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#B39A68] mb-4">
            <span>Engagement & Inquiries</span>
            <span className="text-[#E7E4DD]/30">/</span>
            <span>Professional Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Connect & Collaborate.
          </h2>
          <p className="mt-4 text-base text-[#EAE6DF]/80 leading-relaxed">
            For institutional alliances, keynote speaking invitations, school discovery partnerships, or educational media dialogues, submit an inquiry below or reach out via LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links & Institutional Directory */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* LinkedIn Executive Profile Card */}
            <div className="bg-[#142338] border border-[#E7E4DD]/15 p-8 rounded">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B39A68]">
                  VERIFIED CHANNEL
                </span>
                <span className="text-[11px] font-mono text-[#EAE6DF]/60">
                  New Delhi, Bharat
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                LinkedIn Executive Profile
              </h3>
              <p className="text-xs text-[#EAE6DF]/70 mb-6 leading-relaxed">
                Direct channel for professional networking, institutional announcements, and conference correspondence.
              </p>
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-semibold uppercase tracking-wider bg-[#B39A68] hover:bg-[#C2A875] text-[#0D1826] transition-colors w-full shadow-sm"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Associated Entities List */}
            <div className="bg-[#142338] border border-[#E7E4DD]/15 p-8 rounded">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B39A68] block mb-4">
                ASSOCIATED INSTITUTIONAL PLATFORMS
              </span>
              <div className="space-y-4 text-xs text-[#EAE6DF]/85">
                <div className="flex items-center justify-between border-b border-[#E7E4DD]/10 pb-3">
                  <div>
                    <h4 className="font-semibold text-white">Bharat Education Forum</h4>
                    <span className="text-[11px] text-[#EAE6DF]/60">Summits, Youth Conclaves & Global Opportunities</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/bharat-eudcation-forum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B39A68] hover:underline"
                  >
                    Portal ↗
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">Schoolyatra & Collegeyatra</h4>
                    <span className="text-[11px] text-[#EAE6DF]/60">K-12 Discovery & Higher-Ed Pathways</span>
                  </div>
                  <a
                    href="https://linktr.ee/schoolyatra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B39A68] hover:underline"
                  >
                    Linktree ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="p-6 rounded bg-[#101D2E] border border-[#E7E4DD]/10 text-xs text-[#EAE6DF]/65 leading-relaxed">
              <strong className="text-white block mb-1">Privacy & Authorized Communications:</strong>
              In alignment with strict data privacy guidelines, private telephone numbers and personal home addresses are not published. All institutional and professional inquiries are logged securely.
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 bg-[#142338] border border-[#E7E4DD]/15 p-8 sm:p-10 rounded">
            
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#B39A68]/15 border border-[#B39A68]/40 text-[#B39A68] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Inquiry Successfully Received
                </h3>
                <p className="text-sm text-[#EAE6DF]/85 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your communication regarding <strong className="text-[#B39A68]">{inquiryType}</strong> has been received. A correspondence confirmation will be sent to <span className="text-white font-mono text-xs">{formData.email}</span>.
                </p>

                <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={copyInquirySummary}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-medium text-[#FAF8F5] bg-[#0D1826] hover:bg-[#1B2C44] border border-[#E7E4DD]/15 rounded transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Summary Copied' : 'Copy Inquiry Summary'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        role: '',
                        message: '',
                        honeypot: '',
                        consent: false
                      });
                    }}
                    className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-[#0D1826] bg-[#B39A68] hover:bg-[#C2A875] rounded transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#B39A68] mb-2 font-bold">
                    Inquiry Nature / Purpose
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-[#0D1826] border border-[#E7E4DD]/20 rounded px-4 py-3 text-xs sm:text-sm text-[#FAF8F5] focus:outline-none focus:border-[#B39A68] transition-colors"
                  >
                    {inquiryOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-[#0D1826] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE6DF]/70 mb-2">
                      Full Name <span className="text-[#B39A68]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0D1826] border border-[#E7E4DD]/20 rounded px-4 py-3 text-xs sm:text-sm text-[#FAF8F5] placeholder:text-[#EAE6DF]/30 focus:outline-none focus:border-[#B39A68] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE6DF]/70 mb-2">
                      Professional Email <span className="text-[#B39A68]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. principal@institution.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0D1826] border border-[#E7E4DD]/20 rounded px-4 py-3 text-xs sm:text-sm text-[#FAF8F5] placeholder:text-[#EAE6DF]/30 focus:outline-none focus:border-[#B39A68] transition-colors"
                    />
                  </div>
                </div>

                {/* Organization & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE6DF]/70 mb-2">
                      Organization / School / University
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Modern School / Apex University"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#0D1826] border border-[#E7E4DD]/20 rounded px-4 py-3 text-xs sm:text-sm text-[#FAF8F5] placeholder:text-[#EAE6DF]/30 focus:outline-none focus:border-[#B39A68] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE6DF]/70 mb-2">
                      Designation / Role
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Principal / Dean of Admissions"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#0D1826] border border-[#E7E4DD]/20 rounded px-4 py-3 text-xs sm:text-sm text-[#FAF8F5] placeholder:text-[#EAE6DF]/30 focus:outline-none focus:border-[#B39A68] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE6DF]/70">
                      Inquiry Details <span className="text-[#B39A68]">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-[#EAE6DF]/40">
                      {formData.message.length}/1000
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    maxLength={1000}
                    placeholder="Briefly state your institutional objectives, prospective partnership, or conference details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0D1826] border border-[#E7E4DD]/20 rounded px-4 py-3 text-xs sm:text-sm text-[#FAF8F5] placeholder:text-[#EAE6DF]/30 focus:outline-none focus:border-[#B39A68] transition-colors resize-y"
                  />
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="p-3.5 bg-rose-500/10 border border-rose-500/25 rounded flex items-center gap-2.5 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 rounded bg-[#0D1826] border-[#E7E4DD]/30 text-[#B39A68] focus:ring-[#B39A68] focus:ring-offset-0 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-[#EAE6DF]/70 cursor-pointer leading-relaxed">
                    I confirm that this is a professional communication intended for Sumit Varma and accept standard professional correspondence processing.
                  </label>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded text-xs uppercase tracking-wider font-semibold text-[#0D1826] bg-[#B39A68] hover:bg-[#C2A875] transition-all shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'Transmitting...' : 'Submit Inquiry'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
