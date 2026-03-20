import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-2 text-text-muted text-sm text-center">
        <p>George Mason University, Schar School of Policy and Government</p>
        <p>3351 Fairfax Drive, Van Metre Hall 543</p>
        <p>Arlington, VA 22201</p>
        <p>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
            {siteConfig.email}
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
