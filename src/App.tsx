import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { Ventures } from './components/Ventures';
import { Timeline } from './components/Timeline';
import { ImpactAndProjects } from './components/ImpactAndProjects';
import { MediaAndPodcasts } from './components/MediaAndPodcasts';
import { Philosophy } from './components/Philosophy';
import { ResumeView } from './components/ResumeView';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VerificationModal } from './components/VerificationModal';
import { PdfViewerModal } from './components/PdfViewerModal';

export default function App() {
  const [isVerificationLedgerOpen, setIsVerificationLedgerOpen] = useState(false);
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);

  // Global keyboard shortcuts (e.g. 'v' to open verification ledger, 'Escape' to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsVerificationLedgerOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1826] text-[#FAF8F5] flex flex-col selection:bg-[#B39A68]/30 selection:text-[#FAF8F5]">
      {/* Top sticky navigation */}
      <Navbar
        onOpenPdfViewer={() => setIsPdfViewerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenPdfViewer={() => setIsPdfViewerOpen(true)}
        />
        <Biography />
        <Ventures />
        <Timeline />
        <ImpactAndProjects />
        <MediaAndPodcasts />
        <Philosophy />
        <ResumeView
          onOpenPdfViewer={() => setIsPdfViewerOpen(true)}
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenPdfViewer={() => setIsPdfViewerOpen(true)}
        onOpenVerificationLedger={() => setIsVerificationLedgerOpen(true)}
      />

      {/* Fact-Checking & Verification Audit Modal */}
      <VerificationModal
        isOpen={isVerificationLedgerOpen}
        onClose={() => setIsVerificationLedgerOpen(false)}
        onOpenPdf={() => setIsPdfViewerOpen(true)}
      />

      {/* Authentic Source PDF Viewer Modal */}
      <PdfViewerModal
        isOpen={isPdfViewerOpen}
        onClose={() => setIsPdfViewerOpen(false)}
      />
    </div>
  );
}
