import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SERVICES } from "@/content/services";

export function Services() {
  return (
    <Section id="services" className="border-t border-white/5">
      <Reveal>
        <SectionHeading
          kicker="What we do"
          title={
            <>
              Six disciplines, one{" "}
              <span className="text-gradient-gold">integrated plan.</span>
            </>
          }
          intro="Each service is led by the goal it serves — never sold in isolation. Together they form a single, coherent financial life."
        />
      </Reveal>

      <Reveal
        group
        className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-white/10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <RevealItem
              key={service.slug}
              className="group relative flex flex-col bg-navy-800/40 p-7 transition-colors duration-300 hover:bg-navy-700/50"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold/25 bg-navy-900/60 text-gold transition-colors duration-300 group-hover:border-gold/50">
                  <Icon size={20} />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-cloud-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                />
              </div>

              <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-kicker text-gold/80">
                {service.goalReframe}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-cloud">
                {service.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-cloud-muted">
                {service.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cloud-dim">
                {service.body}
              </p>

              <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-xs text-cloud-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
