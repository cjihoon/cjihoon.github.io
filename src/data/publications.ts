export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  status?: "published" | "working" | "in-progress";
  doi?: string;
  pdfUrl?: string;
  abstract?: string;
}

export const publications: Publication[] = [
  {
    title: "The Impact of Twin Transition on Firm's Business Performance: Empirical Evidence from Korean Manufacturing Firms",
    authors: "Choi, J., & Kim, Y. J.",
    journal: "Energy Economics",
    year: 2025,
    status: "published",
    doi: "https://doi.org/10.1016/j.eneco.2025.108765",
  },
  {
    title: "Does Age-targeted Extra EV Subsidy Attract Young Adults? Evidence from Korea",
    authors: "",
    journal: "Working Paper",
    year: 2025,
    status: "working",
  },
  {
    title: "Charging Ahead or Catching Up? Causal Evidence on EV Adoption and Charger Expansion in South Korea",
    authors: "with Yeong Jae Kim and David Woo",
    journal: "Working Paper",
    year: 2025,
    status: "working",
  },
];
