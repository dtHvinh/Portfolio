import type { ProjectType } from "@/components/projects/Projects";

export class ProjectBuilder {
  private project: ProjectType;

  constructor() {
    this.project = {
      name: "",
      description: "",
      features: [],
      period: { start: "", end: "" },
      links: [],
    };
  }

  static create(): ProjectBuilder {
    return new ProjectBuilder();
  }

  withName(name: string): ProjectBuilder {
    this.project.name = name;
    return this;
  }

  withDescription(description: string): ProjectBuilder {
    this.project.description = description;
    return this;
  }

  withFeature(feature: string): ProjectBuilder {
    this.project.features.push(feature);
    return this;
  }

  withFeatures(features: string[]): ProjectBuilder {
    this.project.features.push(...features);
    return this;
  }

  withPeriod(start: string, end: string): ProjectBuilder {
    this.project.period = { start, end };
    return this;
  }

  withLink(label: string, url: string): ProjectBuilder {
    this.project.links.push({ label, url });
    return this;
  }

  withLinks(links: { label: string; url: string }[]): ProjectBuilder {
    this.project.links.push(...links);
    return this;
  }

  build(): ProjectType {
    return this.project;
  }
}
