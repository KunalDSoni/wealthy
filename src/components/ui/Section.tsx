import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

/** A page section with consistent vertical rhythm. */
export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 sm:py-28 lg:py-32", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Standard section heading block: kicker + title + optional intro. */
export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  className,
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && <p className="kicker mb-4">{kicker}</p>}
      <h2 className="text-display-lg font-display font-semibold text-balance text-cloud">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-lg leading-relaxed text-pretty text-cloud-muted">
          {intro}
        </p>
      )}
    </div>
  );
}
