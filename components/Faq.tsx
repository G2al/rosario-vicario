import { faqs } from "@/lib/site";
import { Eyebrow, Lines } from "./ui";

export default function Faq() {
  return (
    <section id="faq" className="section-y gutter border-t border-line">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Eyebrow>FAQ</Eyebrow>
          <Lines className="mt-6 text-headline-lg" lines={["Domande", "frequenti"]} />
        </div>

        <div className="border-t border-line md:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line" data-reveal>
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-6 text-headline-sm transition-colors duration-150 hover:text-silver">
                {f.q}
                <span
                  aria-hidden="true"
                  className="faq-icon relative size-5 shrink-0 transition-transform duration-300 ease-(--ease-out-expo)"
                >
                  <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-red" />
                  <span className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-red" />
                </span>
              </summary>
              <p className="max-w-[60ch] pb-7 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
