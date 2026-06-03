"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { EASE_LUXURY } from "@/lib/motion";
import { FAQS } from "@/content/faqs";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <Section id="faq" className="border-t border-white/5">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            kicker="Questions"
            title={
              <>
                Everything you might be{" "}
                <span className="text-gradient-gold">wondering.</span>
              </>
            }
            intro="Still unsure? The first consultation is free — it's the easiest way to get a clear, personal answer."
          />
        </Reveal>

        <Reveal>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={cn(
                        "font-display text-lg font-medium transition-colors",
                        isOpen ? "text-gold" : "text-cloud",
                      )}
                    >
                      {faq.q}
                    </span>
                    <Plus
                      size={20}
                      className={cn(
                        "shrink-0 text-cloud-dim transition-transform duration-300 ease-luxury",
                        isOpen && "rotate-45 text-gold",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE_LUXURY }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-prose pb-6 leading-relaxed text-cloud-muted">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
