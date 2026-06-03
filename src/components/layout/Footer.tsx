import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SITE, FOUNDER, SOCIAL, NAV_LINKS, DISCLAIMERS } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cloud-dim">
              {SITE.tagline} Led by {FOUNDER.name},{" "}
              {FOUNDER.credentials.join(" · ")} — {FOUNDER.yearsExperience}+ years
              guiding families to financial freedom.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-cloud-muted transition-colors hover:border-gold/40 hover:text-gold"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-cloud-muted transition-colors hover:border-gold/40 hover:text-gold"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-kicker text-cloud-dim">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cloud-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-kicker text-cloud-dim">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-cloud-muted">
              <li>
                <a
                  href={`tel:${SITE.phoneE164}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Phone size={15} className="text-gold" /> {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Mail size={15} className="text-gold" /> {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {SITE.address.line1}, {SITE.address.line2}
                  <br />
                  {SITE.address.city} {SITE.address.pin}, {SITE.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-cloud-faint">
            {DISCLAIMERS.general}
          </p>
          <div className="mt-5 flex flex-col gap-3 text-xs text-cloud-faint sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {SITE.name}. {SITE.regulatoryLabel} · {SITE.arn} ·{" "}
              {SITE.euin}
            </p>
            <p>Built for families building their future.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
