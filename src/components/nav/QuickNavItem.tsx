import clsx from "clsx";
import { upperCaseFirstChar } from "@/lib/utils";

export default function QuickNavItem({
  section,
  isActive,
}: {
  section: string;
  isActive: boolean;
}) {
  const navigate = () => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        type="button"
        onClick={navigate}
        className={`w-2 h-8 rounded-full transition-all duration-500 cursor-pointer ${
          isActive
            ? "bg-foreground"
            : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
        }`}
        aria-label={`Navigate to ${section}`}
      />
      <span
        className={clsx(
          !isActive && "text-muted-foreground",
          "bg-card-foreground/5 px-2 py-1 rounded text-sm select-none transition-colors"
        )}
      >
        {upperCaseFirstChar(section)}
      </span>
    </div>
  );
}
