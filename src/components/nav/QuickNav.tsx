import QuickNavItem from "./QuickNavItem";

export default function QuickNav({
  activeSection,
  sections,
  className,
}: {
  activeSection: string;
  sections: string[];
  className?: string;
}) {
  return (
    <nav className={className} aria-label="Quick navigation">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <QuickNavItem
            key={section}
            section={section}
            isActive={section === activeSection}
          />
        ))}
      </div>
    </nav>
  );
}
