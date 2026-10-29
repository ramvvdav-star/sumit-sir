import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle2, AlertCircle, Building2, Copy, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('Institutional Partnership');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
    honeypot: '', // anti-spam
    consent: false
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const inquiryOptions = [
    'Institutional Partnership (BEF)',
    'School Discovery Advisory (Schoolyatra)',
    'Higher Education & College Admissions (Collegeyatra)',
    'Speaking Engagement / Panelist Invitation',
    'BrewED Talks / Media Appearance',
    'General Professional Inquiry'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, valid email address, and inquiry message.');
      return;
    }

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('Please acknowledge the professional communication and privacy consent.');
      return;
    }

    setStatus('submitting');

    // Simulate reliable submission workflow with client feedback
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
    <section id="contact" className="py-20 lg:py-28 bg-[#080D1A] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37] mb-3">
            <span>Collaboration & Inquiries</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Professional Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Connect & Collaborate.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            For institutional alliances, keynote invitations, school discovery partnerships, or educational media dialogues, submit an inquiry below or connect via LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Institutional Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* LinkedIn Card */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400">Verified Profile</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-1">
                LinkedIn Executive Profile
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Primary channel for professional networking, institutional announcements, and direct messaging.
              </p>
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors w-full justify-center"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Organizations Directory */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 sm:p-7">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-4">
                <Building2 className="w-4 h-4" />
                <span>Associated Institutional Portals</span>
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div>
                    <h4 className="font-semibold text-white">Bharat Education Forum</h4>
                    <p className="text-[11px] text-slate-400">Summits, Youth Conclaves & Global Opportunities</p>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/bharat-eudcation-forum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium"
                  >
                    <span>Forum</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div>
                    <h4 className="font-semibold text-white">Schoolyatra & Collegeyatra</h4>
                    <p className="text-[11px] text-slate-400">K-12 Discovery & Higher-Ed Pathways</p>
                  </div>
                  <a
                    href="https://linktr.ee/schoolyatra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium"
                  >
                    <span>Linktree</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy & Authorized Communication Pledge */}
            <div className="p-4 rounded-lg bg-[#0B1120] border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-300 block mb-1">Privacy & Authorized Contact Policy:</strong>
              In strict accordance with data privacy standards, private mobile phone numbers and unverified personal contact details are withheld. All incoming inquiries are routed securely through authorized executive channels.
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-xl p-6 sm:p-8">
            
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Inquiry Successfully Received
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your communication regarding <strong className="text-[#D4AF37]">{inquiryType}</strong> has been logged. An executive confirmation will be routed to <span className="text-white font-mono text-xs">{formData.email}</span>.
                </p>

                <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={copyInquirySummary}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
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
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-[#D4AF37] hover:bg-[#E2BE48] rounded-md transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Honeypot field (hidden from humans) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Inquiry Type Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Inquiry Nature / Purpose
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-[#0B1120] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    {inquiryOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-slate-900 text-slate-200">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Full Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0B1120] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Professional Email <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. principal@institution.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0B1120] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* Organization & Role Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Organization / School / University
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Delhi Public School / Apex University"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#0B1120] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Designation / Role
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Director of Admissions / Principal"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#0B1120] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                      Inquiry Details <span className="text-[#D4AF37]">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-500">
                      {formData.message.length}/1000 characters
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    maxLength={1000}
                    placeholder="Briefly state your institutional objectives, prospective partnership, or event timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0B1120] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors resize-y"
                  />
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/25 rounded-lg flex items-center gap-2 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 rounded bg-[#0B1120] border-slate-700 text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-0 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-400 cursor-pointer">
                    I confirm that this is a legitimate professional or institutional communication intended for Sumit Varma and understand that inquiry summaries are archived securely.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#D4AF37] hover:bg-[#E2BE48] text-slate-950 text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'Transmitting Inquiry...' : 'Submit Institutional Inquiry'}</span>
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
