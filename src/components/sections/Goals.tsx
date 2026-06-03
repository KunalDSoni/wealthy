"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { EASE_LUXURY } from "@/lib/motion";
import { JOURNEY_GOALS } from "@/content/goals";

export function Goals() {
  const [active, setActive] = useState(JOURNEY_GOALS[0].id);
  const reduce = useReducedMotion();
  const goal = JOURNEY_GOALS.find((g) => g.id === active) ?? JOURNEY_GOALS[0];
  const Icon = goal.icon;

  return (
    <Section id="goals" className="border-t border-white/5">
      <Reveal>
        <SectionHeading
          kicker="Goal planning"
          title={
            <>
              Every plan is built around a{" "}
              <span className="text-gradient-gold">real life goal.</span>
            </>
          }
          intro="Pick a goal to see how a structured plan turns an ambition into a number — with a horizon, a monthly commitment, and a clear path to get there."
        />
      </Reveal>

      {/* Tabs */}
      <Reveal className="mt-12">
        <div
          role="tablist"
          aria-label="Financial goals"
          className="flex flex-wrap gap-2"
        >
          {JOURNEY_GOALS.map((g) => {
            const TabIcon = g.icon;
            const selected = g.id === active;
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(g.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ease-luxury",
                  selected
                    ? "border-gold/50 bg-gold/10 text-gold"
                    : "border-white/10 text-cloud-dim hover:border-white/25 hover:text-cloud",
                )}
              >
                <TabIcon size={15} />
                {g.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Panel */}
      <Reveal className="mt-8">
        <div className="glass overflow-hidden rounded-4xl shadow-glass-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={goal.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: EASE_LUXURY }}
              className="grid gap-px lg:grid-cols-[1.2fr_1fr]"
            >
              {/* Narrative */}
              <div className="bg-navy-800/40 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-navy-900/70 text-gold">
                    <Icon size={20} />
                  </span>
                  <span className="text-[0.7rem] font-medium uppercase tracking-kicker text-gold/80">
                    {goal.eyebrow}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-balance text-cloud sm:text-3xl">
                  {goal.headline}
                </h3>
                <p className="mt-4 max-w-prose leading-relaxed text-cloud-muted">
                  {goal.story}
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {goal.pillars.map((p) => (
                    <div key={p.label}>
                      <p className="font-display text-lg font-semibold text-cloud">
                        {p.value}
                      </p>
                      <p className="mt-1 text-xs text-cloud-dim">{p.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric highlight */}
              <div className="relative flex flex-col justify-center gap-3 bg-gradient-to-br from-navy-700/50 via-navy-800 to-navy-950 p-8 sm:p-10">
                <div aria-hidden className="absolute inset-0 bg-radial-gold opacity-60" />
                <p className="relative text-sm text-cloud-dim">{goal.metricLabel}</p>
                <p className="relative font-display text-5xl font-semibold text-gradient-gold sm:text-6xl">
                  {goal.metricValue}
                </p>
                <p className="relative text-sm text-cloud-muted">{goal.horizon}</p>
                <p className="relative mt-2 text-xs text-cloud-faint">
                  Illustrative projection. Actual outcomes vary with markets and
                  contributions.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </Section>
  );
}
