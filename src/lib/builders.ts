import type { ProjectType } from "@/components/projects/Projects";

export class ProjectBuilder {
  private project: ProjectType;
  private keyWords: string[] = [];

  constructor() {
    this.project = {
      name: "",
      description: "",
      features: [],
      period: { start: "", end: "" },
      links: [],
    };
  }

  private highlightKeywords(text: string): string {
    let highlighted = text;
    for (const word of this.keyWords) {
      const pattern = new RegExp(`\\b${this.escapeRegex(word)}\\b`, "gi");
      highlighted = highlighted.replace(
        pattern,
        `<strong class="text-primary">${word}</strong>`
      );
    }
    return highlighted;
  }

  private escapeRegex(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  static create(): ProjectBuilder {
    return new ProjectBuilder();
  }

  withName(name: string): ProjectBuilder {
    this.project.name = name;
    return this;
  }

  withKeyWord(keyWord: string): ProjectBuilder {
    this.keyWords.push(keyWord);
    return this;
  }
  withKeyWords(keyWords: string[]): ProjectBuilder {
    this.keyWords.push(...keyWords);
    return this;
  }

  withDescription(description: string): ProjectBuilder {
    this.project.description = description;
    return this;
  }

  withFeature(feature: string): ProjectBuilder {
    const formatted = this.highlightKeywords(feature);
    this.project.features.push(formatted);
    return this;
  }

  withFeatures(features: string[]): ProjectBuilder {
    const formatted = features.map((f) => this.highlightKeywords(f));
    this.project.features.push(...formatted);
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
