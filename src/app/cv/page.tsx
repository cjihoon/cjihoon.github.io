import PageWrapper from "@/components/PageWrapper";

export default function CVPage() {
  return (
    <PageWrapper title="Curriculum Vitae">
      {/* Download Button */}
      <div className="mb-6">
        <a
          href="/cv/cv-jihoon-2026-mar.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg-primary font-medium rounded-lg hover:bg-accent-hover transition-colors"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV (PDF)
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="w-full rounded-lg overflow-hidden border border-border bg-bg-secondary">
        <iframe
          src="/cv/cv-jihoon-2026-mar.pdf"
          className="w-full h-[80vh]"
          title="Jihoon Choi CV"
        />
      </div>
    </PageWrapper>
  );
}
