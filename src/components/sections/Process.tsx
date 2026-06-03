import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/content/process";

export function Process() {
  return (
    <Section id="process" className="border-t border-white/5">
      <Reveal>
        <SectionHeading
          kicker="The process"
          title={
            <>
              From scattered to{" "}
              <span className="text-gradient-gold">in control</span> — in four
              steps.
            </>
          }
          intro="A calm, structured path. No jargon, no pressure — just clarity about where you are and exactly how you reach each goal."
        />
      </Reveal>

      <Reveal group className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* connecting line on desktop */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-7 hidden h-px bg-gold-line lg:block"
        />
        {PROCESS_STEPS.map((step) => (
          <RevealItem key={step.no} className="relative">
            <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-navy-900 font-display text-lg font-semibold text-gradient-gold">
              {step.no}
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-cloud">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cloud-muted">
              {step.body}
            </p>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
