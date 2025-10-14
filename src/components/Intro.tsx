import { Playfair } from "next/font/google";
import Image from "next/image";
import type { ReactElement, Ref } from "react";

const playFair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export type IntroInformation = {
  firstName: string;
  middleName: string;
  lastName: string;
  currentRole: string;
  objective: string;
  skills: string[];
};

export default function Intro({
  ref,
  id,
  className,
  info,
}: {
  ref: Ref<HTMLElement> | undefined;
  id?: string;
  className?: string;
  info: IntroInformation;
}): ReactElement {
  const { firstName, middleName, lastName, currentRole, skills, objective } =
    info || {};

  return (
    <header id={id} className={className} ref={ref}>
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">
              PORTFOLIO / 2025
            </div>
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight ${playFair.className}`}
            >
              {firstName.toUpperCase()}
              <br />
              <span className="text-muted-foreground">
                {lastName.toUpperCase()}{" "}
                {middleName
                  .split(" ")
                  .map((name) => `${name.toUpperCase()[0]}.`)
                  .join(" ")}
              </span>
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {currentRole}
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">
              OBJECTIVE
            </div>
            <div className="space-y-2">
              <div className="text-foreground text-sm">{objective}</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
            <div className="flex flex-wrap gap-2">
              {skills?.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
