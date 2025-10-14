import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import type { Ref } from "react";

export default function Contact({
  ref,
  mail,
  gitHub,
  linkedIn,
}: {
  ref: Ref<HTMLElement> | undefined;
  mail?: string;
  gitHub?: string;
  linkedIn?: string;
}) {
  return (
    <section id="connect" ref={ref} className="py-20 sm:py-32 opacity-0">
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
                href={`mailto:${mail}`}
                className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span className="text-base sm:text-lg">{mail}</span>
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

          <div className="grid grid-cols-1 gap-2">
            {[
              {
                name: "GitHub",
                handle: gitHub,
                icon: Github,
              },
              {
                name: "LinkedIn",
                handle: linkedIn,
                icon: Linkedin,
              },
            ]
              .filter((social) => Boolean(social.handle))
              .map((social) => {
                const Icon = social.icon;
                const href = social.handle ?? "#";
                const displayHandle = href.replace(/^https?:\/\//, "");

                return (
                  <Link
                    key={social.name}
                    href={href}
                    className="group flex items-center gap-4 p-4 hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="p-2 rounded-md bg-muted/50 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <Icon className="w-5 h-5" aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </span>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        {displayHandle}
                      </span>
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
