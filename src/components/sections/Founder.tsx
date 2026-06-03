import { Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FOUNDER, CTA } from "@/content/site";
import { CREDENTIALS } from "@/content/stats";

export function Founder() {
  return (
    <Section id="founder" className="border-t border-white/5">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Portrait / monogram card */}
        <Reveal>
          <div className="glass sticky top-24 rounded-4xl p-3 shadow-glass">
            <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-gold/20 via-navy-700/50 to-navy-950">
              <div aria-hidden className="absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-30" />
              <span className="relative font-display text-7xl font-semibold text-gradient-gold">
                {FOUNDER.initials}
              </span>
              <p className="relative mt-4 text-sm text-cloud-muted">
                {FOUNDER.name}
              </p>
              <p className="relative text-xs text-gold">
                {FOUNDER.credentials.join(" · ")}
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="kicker mb-4">Meet your planner</p>
            <h2 className="text-display-lg font-display font-semibold text-balance text-cloud">
              An advisor recommends products. A{" "}
              <span className="text-gradient-gold">wealth architect</span>{" "}
              designs the whole structure.
            </h2>

            <figure className="mt-8 border-l-2 border-gold/60 pl-6">
              <Quote size={22} className="text-gold/70" />
              <blockquote className="mt-3 text-lg italic leading-relaxed text-cloud-muted">
                {FOUNDER.mission}
              </blockquote>
              <figcaption className="mt-4 text-sm text-cloud-dim">
                — {FOUNDER.name}, {FOUNDER.position}
              </figcaption>
            </figure>

            <p className="mt-8 max-w-prose leading-relaxed text-cloud-muted">
              {FOUNDER.focus}
            </p>
          </Reveal>

          <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2">
            {CREDENTIALS.map((c) => (
              <RevealItem
                key={c.title}
                className="glass rounded-2xl p-5"
              >
                <h3 className="font-semibold text-cloud">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cloud-muted">
                  {c.body}
                </p>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <Button href={CTA.primary.href} size="lg" withArrow>
              {CTA.primary.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
