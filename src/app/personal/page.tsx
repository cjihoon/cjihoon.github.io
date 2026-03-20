import PageWrapper from "@/components/PageWrapper";

export default function PersonalPage() {
  return (
    <PageWrapper title="Personal">
      <div className="max-w-2xl space-y-6 text-text-secondary leading-relaxed">
        <p>
          Beyond research, I enjoy exploring diverse interests that keep me grounded and curious.
          This page is a space to share a bit about who I am outside of academia.
        </p>

        {/* Add your personal content here — hobbies, interests, photos, etc. */}
        <div className="p-6 rounded-xl bg-bg-secondary border border-border">
          <p className="text-text-muted italic">
            More content coming soon. Stay tuned!
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
