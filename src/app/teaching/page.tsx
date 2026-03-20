import PageWrapper from "@/components/PageWrapper";
import { courses } from "@/data/teaching";

export default function TeachingPage() {
  return (
    <PageWrapper title="Teaching">
      {courses.length === 0 ? (
        <p className="text-text-muted italic">Coming soon.</p>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-text-muted">
                  <th className="pb-3 pr-6 font-medium">Course</th>
                  <th className="pb-3 pr-6 font-medium">Title</th>
                  <th className="pb-3 pr-6 font-medium">Semester</th>
                  <th className="pb-3 font-medium">Role</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-4 pr-6 font-medium text-accent">{course.code}</td>
                    <td className="py-4 pr-6 text-text-primary">{course.title}</td>
                    <td className="py-4 pr-6 text-text-secondary">{course.semester}</td>
                    <td className="py-4 text-text-secondary">{course.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {courses.map((course, i) => (
              <div key={i} className="p-5 rounded-xl bg-bg-secondary border border-border">
                <p className="text-accent font-medium text-sm mb-1">{course.code}</p>
                <h3 className="text-text-primary font-semibold mb-2">{course.title}</h3>
                <p className="text-text-secondary text-sm">
                  {course.semester} &middot; {course.role}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </PageWrapper>
  );
}
