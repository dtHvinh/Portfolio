import { ExternalLink } from "lucide-react";
import type { Ref } from "react";

export type ProjectType = {
  name: string;
  description: string;
  features: string[];
  period: { start: string; end: string };
  links: { label: string; url: string }[];
};

export default function Projects({
  ref,
  id,
  projects,
  className,
}: {
  ref: Ref<HTMLElement> | undefined;
  id?: string;
  projects: ProjectType[];
  className?: string;
}) {
  return (
    <section id={id} ref={ref} className={className}>
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
        </div>

        <div className="space-y-10 sm:space-y-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
            >
              <div className="lg:col-span-2">
                <div className="text-sm sm:text-base text-muted-foreground font-mono group-hover:text-foreground transition-colors duration-500">
                  {project.period.start} — {project.period.end}
                </div>
              </div>

              <div className="lg:col-span-8 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}.</li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-2 lg:items-end justify-center mt-2 lg:mt-0">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
