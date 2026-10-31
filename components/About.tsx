import Image from "next/image";
import photo from "@/public/images/rosario/fronte.jpg";
import { site, stats } from "@/lib/site";
import { Eyebrow, Lines } from "./ui";

export default function About() {
  return (
    <section id="chi-sono" className="section-y gutter">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <div data-reveal-image className="relative aspect-[4/5] w-full max-w-[480px] overflow-hidden bg-surface">
            <Image
              src={photo}
              alt="Rosario Vicario in palestra a braccia conserte, con la polo da coach"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              quality={85}
              className="object-cover object-[50%_30%]"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pl-8 lg:pl-16">
          <Eyebrow>Chi sono</Eyebrow>
          <Lines className="mt-6 text-headline-lg" lines={["Allenatore.", "Prima ancora,", "atleta."]} />
          <div className="mt-8 max-w-[60ch] space-y-5 text-[17px] leading-relaxed text-muted md:text-lg">
            <p data-reveal>
              Gioco a calcio a livello agonistico dal 2015: Promozione, Eccellenza, Serie D. So cosa vuol dire allenarsi
              per un obiettivo, e quanto conta avere accanto qualcuno che ti corregge al momento giusto.
            </p>
            <p data-reveal>
              Mi sono laureato in <span className="text-ink">Scienze Motorie</span> e non ho mai smesso di formarmi:
              personal trainer di 3° livello, ipertrofia e programmazione, alimentazione per lo sportivo, ginnastica
              posturale. Conduco anche corsi di gruppo di functional training, pilates, acquagym e posturale.
            </p>
            <p data-reveal>
              Oggi alleno alla <span className="text-ink">{site.gym} di {site.city}</span> e seguo anche chi vive
              lontano, a distanza.
            </p>
          </div>
        </div>
      </div>

      <dl className="mx-auto mt-20 grid max-w-[1200px] grid-cols-1 border-t border-line sm:grid-cols-3 md:mt-28">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col-reverse gap-3 border-b border-line py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0"
            data-reveal
          >
            <dt className="text-label-wide text-muted">{s.label}</dt>
            <dd className="text-stat">
              {s.prefix}
              <span {...(s.prefix ? {} : { "data-count": s.value })}>{s.value}</span>
              {s.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
