import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { PHILOSOPHY_PILLARS } from "@/content/process";

export function Philosophy() {
  return (
    <Section id="philosophy">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            kicker="Our approach"
            title={
              <>
                A wealth practice,{" "}
                <span className="text-gradient-gold">not a product shop.</span>
              </>
            }
            intro="Most financial conversations start with a product. Ours starts with your life. We design the structure that holds a family's goals together — then choose the instruments that fund them."
          />
        </Reveal>

        <Reveal group className="grid gap-px overflow-hidden rounded-4xl border border-white/10 sm:grid-cols-2">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <RevealItem
              key={pillar.title}
              className="bg-navy-800/40 p-7 transition-colors duration-300 hover:bg-navy-700/40"
            >
              <h3 className="font-display text-xl font-semibold text-cloud">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cloud-muted">
                {pillar.body}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
