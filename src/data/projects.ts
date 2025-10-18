import type { ProjectType } from "@/components/projects/Projects";
import { ProjectBuilder } from "@/lib/builders";

export const projects: ProjectType[] = [
  ProjectBuilder.create()
    .withName("Question and Answer Platform")
    .withDescription(
      "Developed a full-stack web application for ask and answering question"
    )
    .withKeyWords([
      "Next.js",
      "ASP.NET Core",
      "Entity Framework Core",
      "SignalR",
      "SQL Server",
      "Supabase",
      "Redis",
      "Tailwind CSS",
      "JWT Bearer",
    ])
    .withFeatures([
      "Designed the user interface using Next.js and Tailwind CSS",
      "Developed RESTful API with ASP.NET Core Web API and JWT Bearer for user authentication",
      "Utilized ORM with Entity Framework Core for SQL Server for efficient data access",
      "Implemented role-based authorization and user privileges based on their “Reputation”",
      "Integrated real-time chat functionality using SignalR",
      "Implemented image processing for user personalization and customizable communication using Supabase storage",
      "Redis caching for user blacklist, community name validation, and username duplication checks",
    ])
    .withPeriod("01/2025", "05/2025")
    .withLinks([
      { label: "GitHub/Frontend", url: "https://github.com/dtHvinh/QA.Web" },
      { label: "GitHub/Backend", url: "https://github.com/dtHvinh/QA.WebAPI" },
    ])
    .build(),

  ProjectBuilder.create()
    .withName("English Learning Platform")
    .withKeyWords([
      "Next.js",
      "ASP.NET Core",
      "Entity Framework Core",
      "GPT",
      "LLM",
      "Piper TTS",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
      "Shadcn UI",
      "JWT Bearer",
    ])
    .withDescription(
      "Developed a web application for learning English with blog, flashcard, course, test exam, and voice communication with AI."
    )
    .withFeatures([
      "Designed the user interface using Next.js, Tailwind CSS, and Shadcn UI.",
      "Developed RESTful API with ASP.NET Core Web API and JWT Bearer for user authentication.",
      "Utilized ORM with Entity Framework Core for PostgreSQL for efficient data access.",
      "Redis caching for user blacklist.",
      "Developed features for users to read and write blogs, learn courses, use flashcards, and take exams.",
      "Integrated GPT LLM with Piper TTS for real-time voice communication with AI.",
    ])
    .withPeriod("2025-05", "2025-08")
    .withLinks([
      {
        label: "GitHub/Frontend",
        url: "https://github.com/dtHvinh/EStudy.Client",
      },
      {
        label: "GitHub/Backend",
        url: "https://github.com/dtHvinh/EStudy.WebAPI",
      },
    ])
    .build(),
];
