import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-luxury focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy-950 shadow-gold-soft hover:bg-gold-300 hover:shadow-gold hover:-translate-y-0.5",
  secondary:
    "glass text-cloud hover:border-gold/40 hover:text-gold hover:-translate-y-0.5",
  ghost: "text-cloud-muted hover:text-gold",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  ...rest
}: CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          size={size === "lg" ? 18 : 16}
          className="transition-transform duration-300 ease-luxury group-hover:translate-x-1"
        />
      )}
    </>
  );

  // Internal hash/route links use Next Link; tel:/mailto:/external use <a>.
  const isExternal = /^(https?:|tel:|mailto:|#)/.test(href);
  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
