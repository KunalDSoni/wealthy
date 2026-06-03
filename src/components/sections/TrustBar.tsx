import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { TRUST_STATS, TRUST_BADGES } from "@/content/stats";

export function TrustBar() {
  // Duplicate the badge list so the CSS marquee loops seamlessly.
  const badges = [...TRUST_BADGES, ...TRUST_BADGES];

  return (
    <section className="relative border-y border-white/10 bg-navy-950/60 py-16">
      {/* Marquee of credentials */}
      <div
        className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
        aria-hidden
      >
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {badges.map((badge, i) => (
            <span
              key={`${badge}-${i}`}
              className="whitespace-nowrap text-sm font-medium tracking-wide text-cloud-dim"
            >
              <span className="mr-12 text-gold/60">◆</span>
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <Container className="mt-14">
        <Reveal group className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <RevealItem key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-display-md font-semibold text-gradient-gold">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-cloud">{stat.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-cloud-dim">
                {stat.caption}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
