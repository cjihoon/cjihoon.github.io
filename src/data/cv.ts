export interface CVEntry {
  title: string;
  organization: string;
  years: string;
  description?: string;
}

export const education: CVEntry[] = [
  {
    title: "PhD in Public Policy",
    organization: "George Mason University, Schar School of Policy and Government",
    years: "2023 – Present",
  },
  // Add more education entries here
];

export const experience: CVEntry[] = [
  // Add your experience entries here. Example:
  // {
  //   title: "Research Assistant",
  //   organization: "George Mason University",
  //   years: "2023 – Present",
  //   description: "Research on energy transition and labor markets.",
  // },
];
