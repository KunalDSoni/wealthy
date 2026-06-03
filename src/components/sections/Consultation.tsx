import { Phone, Mail, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SITE, CTA } from "@/content/site";

const ASSURANCES = [
  "A no-obligation, 30-minute discovery call",
  "An honest read on where you stand today",
  "A clear next step — whether or not you work with us",
];

export function Consultation() {
  return (
    <section id="consult" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-radial-gold opacity-80" />
        <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="glass mx-auto max-w-4xl rounded-5xl p-8 text-center shadow-glass-lg sm:p-14">
            <p className="kicker">Start here</p>
            <h2 className="mt-5 text-display-lg font-display font-semibold text-balance text-cloud">
              Let&rsquo;s map your goals to a{" "}
              <span className="text-gradient-gold">plan you trust.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-pretty text-cloud-muted">
              Book a free consultation with {SITE.name}. No pressure, no jargon —
              just a clear-headed conversation about your family&rsquo;s future.
            </p>

            <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-3 text-left sm:flex-row sm:flex-wrap sm:justify-center">
              {ASSURANCES.map((a) => (
                <li
                  key={a}
                  className="inline-flex items-center gap-2 text-sm text-cloud-muted"
                >
                  <Check size={15} className="shrink-0 text-gold" />
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={`mailto:${SITE.email}`} size="lg" withArrow>
                {CTA.primary.label}
              </Button>
              <Button href={`tel:${SITE.phoneE164}`} variant="secondary" size="lg">
                <Phone size={16} /> {SITE.phone}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cloud-dim">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Mail size={14} className="text-gold" /> {SITE.email}
              </a>
              <span className="hidden sm:inline">·</span>
              <span>{SITE.address.city}, {SITE.address.country}</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
