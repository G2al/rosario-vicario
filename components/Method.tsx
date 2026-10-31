import { steps } from "@/lib/site";
import { Eyebrow, Lines } from "./ui";

export default function Method() {
  return (
    <section id="percorso" className="section-y gutter border-t border-line">
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <Eyebrow>Il percorso</Eyebrow>
            <Lines className="mt-6 text-headline-lg" lines={["Come", "lavoriamo"]} />
            <p className="mt-8 max-w-[40ch] text-[17px] leading-relaxed text-muted md:text-lg" data-reveal>
              Un'assistenza completa e strutturata, flessibile sui tuoi orari. Ogni passo ha un motivo, e te lo spiego.
            </p>
          </div>
        </div>

        <ol data-timeline className="relative md:col-span-7 md:pl-8 lg:pl-16">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-line md:left-[calc(2rem+5px)] lg:left-[calc(4rem+5px)]">
            <span data-timeline-fill className="absolute inset-0 bg-silver" />
          </span>
          {steps.map((step, i) => (
            <li key={step.title} data-step className="relative pb-14 pl-12 last:pb-0 md:pb-20">
              <span
                aria-hidden="true"
                className="absolute top-2 left-0 size-[11px] rotate-45 bg-(--step-color) transition-colors duration-300"
              />
              <div className="step-body">
                <span className="text-headline-md text-(--step-color) transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-headline-sm">{step.title}</h3>
                <p className="mt-3 max-w-[48ch] leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
