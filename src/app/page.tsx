import { siteConfig } from "@/data/siteConfig";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12">
        {/* Profile Photo */}
        <div className="shrink-0">
          <div className="relative w-64 h-64 md:w-56 md:h-68 rounded-xl overflow-hidden border-2 border-border ring-2 ring-accent/20 bg-bg-secondary">
            <img
              src="/images/profile.jpg"
              alt={siteConfig.name}
              className="w-full h-full object-cover scale-[1.8] object-[20%_90%]"
            />
            <div className="absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 0 40px 15px rgba(0,0,0,0.7)' }} />
          </div>
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            {siteConfig.name}
          </h1>
          <div className="text-text-secondary leading-relaxed max-w-xl mb-8 space-y-3">
            {siteConfig.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Research Interests Tags */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
            {siteConfig.researchInterests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {interest}
              </span>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
