import Link from "next/link";
import { cn } from "@/lib/cn";
import { SITE } from "@/content/site";

/** Brand wordmark with a gold monogram seal. No raster logo asset required. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} — home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-gold/40 bg-navy-800/60">
        <span className="font-display text-sm font-semibold text-gradient-gold">
          P
        </span>
        <span className="absolute inset-0 rounded-xl shadow-gold-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-semibold tracking-tight text-cloud">
          Plan Happy
        </span>
        <span className="text-[0.62rem] font-medium uppercase tracking-kicker text-gold">
          Wealth
        </span>
      </span>
    </Link>
  );
}
