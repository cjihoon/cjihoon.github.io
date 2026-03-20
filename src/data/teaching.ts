export interface Course {
  code: string;
  title: string;
  semester: string;
  role: string;
  university?: string;
}

export const courses: Course[] = [
  // Add your courses here. Example:
  // {
  //   code: "PUBP 710",
  //   title: "Policy Analysis",
  //   semester: "Fall 2025",
  //   role: "Teaching Assistant",
  //   university: "George Mason University",
  // },
];
