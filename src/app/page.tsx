/** biome-ignore-all lint/suspicious/noArrayIndexKey: Just for listing, no need to worry */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Intro from "@/components/Intro";
import QuickNav from "@/components/nav/QuickNav";
import Projects from "@/components/projects/Projects";
import { projects } from "@/data/projects";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const setSectionRefArray = (el: HTMLElement | null, index: number) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <QuickNav
        className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
        activeSection={activeSection}
        sections={["intro", "projects", "connect"]}
      />

      <main className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">
        <Intro
          id={"intro"}
          ref={(el) => setSectionRefArray(el, 0)}
          className="min-h-screen flex items-center opacity-0"
          info={{
            firstName: "Vinh",
            lastName: "Dang",
            middleName: "The Hien",
            currentRole: ".NET Backend Developer",
            objective:
              "Seeking a .NET Developer position where I can apply my knowledge of C#, ASP.NET Core, and back-end development to contribute to impactful projects while further enhancing my software engineering skills.",
            skills: [
              "C#",
              ".NET",
              "SQL Server",
              "PostgreSQL",
              "Entity Framework Core",
              "ASP.NET Core",
            ],
          }}
        />

        <Projects
          id={"projects"}
          className="min-h-screen py-20 sm:py-32 opacity-0"
          ref={(el) => setSectionRefArray(el, 1)}
          projects={projects}
        />

        <section
          id="connect"
          ref={(el) => setSectionRefArray(el, 3)}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and
                  conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:test@example.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">
                      test@example.com
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>Email</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@felixmacaspac", url: "#" },
                  { name: "v0.dev", handle: "@felixmacaspac", url: "#" },
                  {
                    name: "HubSpot Community",
                    handle: "@felixmacaspac",
                    url: "#",
                  },
                  { name: "LinkedIn", handle: "felixmacaspac", url: "#" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 Felix Macaspac. All rights reserved.
              </div>
              <div className="text-xs text-muted-foreground">
                Built with v0.dev by Felix Macaspac
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <title>Dark button</title>
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <title>Light button</title>
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button
                type="button"
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>IDK</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
