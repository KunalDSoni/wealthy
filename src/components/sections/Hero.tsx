"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ShieldCheck, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE, FOUNDER, CTA } from "@/content/site";
import { EASE_LUXURY } from "@/lib/motion";

const credentials = FOUNDER.credentials.join(" · ");

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: EASE_LUXURY, delay },
        };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-radial-aurora" />
        <div className="absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-radial-gold blur-2xl" />
        <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow trust pill */}
          <motion.div
            {...rise(0)}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-xs text-cloud-muted"
          >
            <Sparkles size={13} className="text-gold" />
            <span>
              {FOUNDER.name} · {credentials}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...rise(0.08)}
            className="mt-7 text-display-2xl font-display font-semibold text-balance text-cloud"
          >
            Trusted planning for{" "}
            <span className="text-gradient-gold">life&rsquo;s biggest</span>{" "}
            financial goals.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...rise(0.16)}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-cloud-muted sm:text-xl"
          >
            We help families turn income into a structured, goal-based plan —
            retirement, children&rsquo;s education, a home, true financial
            freedom — and grow it without stress, for decades.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...rise(0.24)}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href={CTA.primary.href} size="lg" withArrow>
              {CTA.primary.label}
            </Button>
            <Button href={CTA.secondary.href} variant="secondary" size="lg">
              {CTA.secondary.label}
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.ul
            {...rise(0.32)}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-cloud-dim"
          >
            <li className="inline-flex items-center gap-2">
              <ShieldCheck size={15} className="text-gold" />
              Fiduciary planning process
            </li>
            <li className="inline-flex items-center gap-2">
              <Star size={15} className="text-gold" />
              {FOUNDER.yearsExperience}+ years of experience
            </li>
            <li className="inline-flex items-center gap-2">
              <Sparkles size={15} className="text-gold" />
              {SITE.regulatoryLabel}
            </li>
          </motion.ul>
        </div>

        {/* Floating founder + plan snapshot card */}
        <motion.div
          {...rise(0.4)}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="glass rounded-4xl p-2 shadow-glass-lg">
            <div className="grid gap-px overflow-hidden rounded-[1.6rem] sm:grid-cols-[1.1fr_1fr]">
              {/* Founder panel */}
              <div className="relative flex flex-col justify-between gap-8 bg-gradient-to-br from-navy-700/60 via-navy-800 to-navy-900 p-8">
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-gold/30 bg-navy-900/70">
                    <span className="font-display text-xl font-semibold text-gradient-gold">
                      {FOUNDER.initials}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-display text-lg font-semibold text-cloud">
                      {FOUNDER.name}
                    </p>
                    <p className="text-sm text-gold">{FOUNDER.position}</p>
                  </div>
                </div>
                <p className="text-left text-sm leading-relaxed text-cloud-muted">
                  &ldquo;{FOUNDER.mission}&rdquo;
                </p>
              </div>

              {/* Plan snapshot panel */}
              <div className="bg-navy-900/80 p-8 text-left">
                <p className="kicker">Your plan, at a glance</p>
                <dl className="mt-5 space-y-4">
                  {[
                    { k: "Retirement income", v: "On track to age 90" },
                    { k: "Education corpus", v: "Inflation-protected" },
                    { k: "Family protection", v: "Coverage gap closed" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-center justify-between border-b border-white/5 pb-3"
                    >
                      <dt className="text-sm text-cloud-dim">{row.k}</dt>
                      <dd className="text-sm font-medium text-cloud">{row.v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/5 p-4">
                  <p className="text-xs text-cloud-dim">Financial Freedom number</p>
                  <p className="mt-1 font-display text-2xl font-semibold text-gradient-gold">
                    ₹8.5 Cr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
