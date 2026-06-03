import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SUCCESS_STORIES } from "@/content/testimonials";

export function Testimonials() {
  return (
    <Section id="stories" className="border-t border-white/5">
      <Reveal>
        <SectionHeading
          kicker="Family stories"
          title={
            <>
              Real journeys from{" "}
              <span className="text-gradient-gold">worried to in control.</span>
            </>
          }
          intro="Composite stories drawn from years of planning work — illustrative of the outcomes a structured plan makes possible."
        />
      </Reveal>

      <Reveal group className="mt-14 grid gap-6 lg:grid-cols-3">
        {SUCCESS_STORIES.map((story) => (
          <RevealItem
            key={story.id}
            className="flex flex-col rounded-4xl border border-white/10 bg-navy-800/40 p-7 transition-colors duration-300 hover:border-gold/25"
          >
            <p className="text-[0.7rem] font-medium uppercase tracking-kicker text-gold/80">
              {story.category}
            </p>

            <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/5 p-4">
              <p className="font-display text-2xl font-semibold text-gradient-gold">
                {story.metric.value}
              </p>
              <p className="mt-1 text-xs text-cloud-dim">{story.metric.label}</p>
            </div>

            <blockquote className="mt-5 text-base italic leading-relaxed text-cloud">
              &ldquo;{story.quote}&rdquo;
            </blockquote>

            <p className="mt-5 text-sm leading-relaxed text-cloud-muted">
              <span className="font-medium text-cloud">The turning point — </span>
              {story.journey}
            </p>

            <div className="mt-auto pt-6">
              <p className="text-sm font-semibold text-cloud">{story.name}</p>
              <p className="text-xs text-cloud-dim">{story.persona}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
