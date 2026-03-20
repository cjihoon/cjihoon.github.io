import PageWrapper from "@/components/PageWrapper";
import { researchAreas } from "@/data/research";
import { publications } from "@/data/publications";

export default function ResearchPage() {
  return (
    <PageWrapper title="Research">
      {/* Research Areas */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Research Interests</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="p-6 rounded-xl bg-bg-secondary border border-border hover:border-accent/40 transition-colors"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-2">{area.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Peer-reviewed Articles */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Peer-reviewed Articles</h2>
        <div className="space-y-6">
          {publications.filter((p) => p.status === "published").map((pub, i) => (
            <div key={i} className="p-6 rounded-xl bg-bg-secondary border border-border">
              <h3 className="text-base font-semibold text-text-primary mb-1">{pub.title}</h3>
              <p className="text-sm text-text-secondary mb-1">{pub.authors}</p>
              <p className="text-sm text-text-muted">
                <em>{pub.journal}</em>, {pub.year}
              </p>
              {(pub.doi || pub.pdfUrl) && (
                <div className="flex gap-3 mt-3">
                  {pub.pdfUrl && (
                    <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                      PDF
                    </a>
                  )}
                  {pub.doi && (
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                      DOI
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Working Papers */}
      <section>
        <h2 className="text-xl font-semibold text-text-primary mb-6">Working Papers</h2>
        <div className="space-y-6">
          {publications.filter((p) => p.status === "working").map((pub, i) => (
            <div key={i} className="p-6 rounded-xl bg-bg-secondary border border-border">
              <h3 className="text-base font-semibold text-text-primary mb-1">{pub.title}</h3>
              {pub.authors && <p className="text-sm text-text-muted italic">{pub.authors}</p>}
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
