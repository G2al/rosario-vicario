"use client";

import { useState } from "react";
import { results } from "@/lib/site";
import BeforeAfter from "./BeforeAfter";
import { ArrowIcon, Eyebrow, Lines } from "./ui";

const MOBILE_VISIBLE = 3;

export default function Results() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="risultati" className="section-y gutter border-t border-line">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Trasformazioni</Eyebrow>
            <Lines className="mt-6 text-headline-lg" lines={["Risultati", "veri"]} />
          </div>
          <p className="max-w-[38ch] text-[17px] leading-relaxed text-muted md:text-right" data-reveal>
            Persone che si allenano con me. Trascina la linea per confrontare il prima e il dopo.
          </p>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r, i) => (
            <div key={r.id} className={!expanded && i >= MOBILE_VISIBLE ? "hidden sm:block" : undefined}>
              <BeforeAfter id={r.id} views={r.views} index={i % 3} />
            </div>
          ))}
        </div>

        {!expanded && results.length > MOBILE_VISIBLE && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="mt-10 flex h-[52px] w-full items-center justify-center gap-3 border border-line-strong text-label-lg text-silver sm:hidden"
          >
            Vedi altre trasformazioni
            <ArrowIcon className="size-4 rotate-90" />
          </button>
        )}
      </div>
    </section>
  );
}
