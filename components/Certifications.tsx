"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { certifications } from "@/lib/site";
import { ArrowIcon, Eyebrow, Lines } from "./ui";

type Cert = (typeof certifications)[number];

export default function Certifications() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState<Cert | null>(null);

  const open = (c: Cert) => {
    setCurrent(c);
    dialog.current?.showModal();
  };

  return (
    <section id="formazione" className="section-y gutter">
      <div className="mx-auto max-w-[1200px]">
        <Eyebrow>Formazione</Eyebrow>
        <Lines className="mt-6 text-headline-lg" lines={["Studio", "continuo"]} />
        <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-muted md:text-lg" data-reveal>
          Laurea, tre livelli da personal trainer e specializzazioni. Tocca una certificazione per vedere l'attestato.
        </p>

        <ul className="mt-12 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => {
            const body = (
              <>
                <span className="text-label-wide text-muted">{c.year}</span>
                <span className="mt-4 block text-headline-sm">{c.title}</span>
                <span className="mt-2 block text-sm text-muted">{c.issuer}</span>
              </>
            );
            return (
              <li key={c.title + c.issuer} className="border-r border-b border-line" data-reveal>
                {c.file ? (
                  <button
                    type="button"
                    onClick={() => open(c)}
                    className="group relative block h-full w-full p-6 text-left transition-colors duration-150 hover:bg-surface sm:p-8"
                    aria-label={`Vedi l'attestato: ${c.title}, ${c.issuer}`}
                  >
                    {body}
                    <ArrowIcon className="absolute top-6 right-6 size-4 -rotate-45 text-muted transition-colors duration-150 group-hover:text-red sm:top-8 sm:right-8" />
                  </button>
                ) : (
                  <div className="h-full p-6 sm:p-8">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <dialog
        ref={dialog}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-auto max-h-[90svh] w-[min(92vw,820px)] overflow-visible bg-transparent p-0 text-ink backdrop:bg-bg/90 backdrop:backdrop-blur-sm"
        aria-label={current ? `Attestato: ${current.title}` : "Attestato"}
      >
        {current?.file && (
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-headline-sm">{current.title}</p>
                <p className="mt-1 text-sm text-muted">{current.issuer}</p>
              </div>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                className="flex size-11 shrink-0 items-center justify-center border border-line-strong text-2xl leading-none hover:border-silver"
                aria-label="Chiudi"
              >
                ×
              </button>
            </div>
            <div className="relative max-h-[75svh] overflow-auto bg-white" data-lenis-prevent>
              <Image
                src={`/images/attestati/${current.file}.jpg`}
                alt={`Attestato ${current.title} rilasciato a Rosario Vicario da ${current.issuer}`}
                width={1200}
                height={1600}
                sizes="(min-width: 900px) 820px, 92vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
