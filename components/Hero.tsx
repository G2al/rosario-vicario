import Image from "next/image";
import photo from "@/public/images/rosario/spalle.jpg";
import { defaultMessage, site, whatsappLink } from "@/lib/site";
import { Cta, Eyebrow, Lines } from "./ui";

const facts = ["Laureato in Scienze Motorie", "Calciatore agonista", "Anche a distanza"];

export default function Hero() {
  return (
    <section
      id="top"
      data-hero
      className="relative isolate overflow-hidden bg-bg [clip-path:polygon(0_0,100%_0,100%_calc(100%-7vw),0_100%)] lg:min-h-[100svh]"
    >
      {/* Foto: in alto su mobile, metà destra su desktop */}
      <div className="relative h-[64svh] min-h-[420px] w-full lg:absolute lg:top-[72px] lg:bottom-0 lg:right-0 lg:h-auto lg:w-1/2">
        <div data-hero-photo className="absolute inset-0">
          <Image
            src={photo}
            alt="Rosario Vicario di spalle in sala, con la maglia del suo logo da personal trainer"
            fill
            priority
            quality={85}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[50%_35%]"
          />
        </div>
        {/* La gamba rossa della R: sul braccio a destra su mobile, sull'angolo in basso a sinistra su desktop */}
        <div
          data-hero-slash
          aria-hidden="true"
          className="absolute -right-[16%] bottom-[2%] aspect-square w-[40%] bg-red [clip-path:polygon(0%_0%,22%_0%,100%_100%,78%_100%)] lg:right-auto lg:-bottom-[6%] lg:-left-[5%] lg:w-[28%]"
        />
      </div>

      <div className="gutter relative z-10 mx-auto max-w-[1200px] pb-[calc(56px+7vw)] lg:flex lg:min-h-[100svh] lg:items-center lg:pb-[7vw] lg:pt-24">
        <div className="-mt-[calc(clamp(56px,10vw,136px)*0.9)] lg:mt-0 lg:max-w-[640px]">
          <Eyebrow className="mb-6 hidden lg:flex">
            {site.role} · {site.city}
          </Eyebrow>
          <Lines as="h1" className="text-display" lines={["Rosario", "Vicario"]} />
          <Eyebrow className="mt-6 lg:hidden">
            {site.role} · {site.city}
          </Eyebrow>
          <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-muted" data-reveal>
            Allenamenti one-to-one alla {site.gym}, con un programma costruito su di te. In sala ti seguo io, ogni sessione.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal>
            <Cta href={whatsappLink(defaultMessage)} icon="whatsapp">
              Scrivimi su WhatsApp
            </Cta>
            <Cta href="#pacchetti" variant="secondary" icon="arrow">
              Vedi i pacchetti
            </Cta>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3" data-reveal>
            {facts.map((f) => (
              <li key={f} className="flex items-center gap-2 text-label-md text-silver">
                <span aria-hidden="true" className="inline-block h-[3px] w-3 rotate-45 bg-red" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
