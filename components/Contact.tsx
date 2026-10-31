import { defaultMessage, site, whatsappLink } from "@/lib/site";
import { Cta, Eyebrow, InstagramIcon, Lines, TikTokIcon } from "./ui";

export default function Contact() {
  const socials = [
    site.instagram && { href: site.instagram, label: "Instagram", Icon: InstagramIcon },
    site.tiktok && { href: site.tiktok, label: "TikTok", Icon: TikTokIcon },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof InstagramIcon }[];

  return (
    <section id="contatti" className="edge-top gutter relative overflow-hidden bg-surface pb-[clamp(80px,12vw,160px)]">
      <div className="mx-auto max-w-[1200px]">
        <Eyebrow>Contatti</Eyebrow>
        <Lines className="mt-6 text-display" lines={["Iniziamo?"]} />
        <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-muted" data-reveal>
          Hai dubbi o domande? Chiedi senza scrupoli: ti rispondo io e troviamo insieme la soluzione migliore per te.
        </p>
        <div className="mt-10" data-reveal>
          <Cta href={whatsappLink(defaultMessage)} icon="whatsapp" className="w-full sm:w-auto">
            Scrivimi su WhatsApp
          </Cta>
        </div>

        <dl className="mt-20 grid gap-px border border-line bg-line sm:grid-cols-3">
          <div className="bg-surface p-6 sm:p-8" data-reveal>
            <dt className="text-label-wide text-muted">WhatsApp</dt>
            <dd className="mt-3">
              <a href={whatsappLink(defaultMessage)} target="_blank" rel="noopener noreferrer" className="text-headline-sm hover:text-silver">
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
          <div className="bg-surface p-6 sm:p-8" data-reveal>
            <dt className="text-label-wide text-muted">Dove</dt>
            <dd className="mt-3">
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-headline-sm hover:text-silver">
                {site.gym}
              </a>
              <p className="mt-1 text-sm text-muted">{site.area} · anche a distanza</p>
            </dd>
          </div>
          <div className="bg-surface p-6 sm:p-8" data-reveal>
            <dt className="text-label-wide text-muted">Email</dt>
            <dd className="mt-3">
              <a href={`mailto:${site.email}`} className="break-all text-[17px] font-semibold hover:text-silver">
                {site.email}
              </a>
            </dd>
          </div>
        </dl>

        {socials.length > 0 && (
          <ul className="mt-8 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center border border-line-strong text-silver hover:border-silver hover:text-ink"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
