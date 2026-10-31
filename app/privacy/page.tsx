import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy e cookie — Rosario Vicario",
  robots: { index: false },
};

export default function Privacy() {
  return (
    <main className="gutter mx-auto max-w-[760px] py-16 md:py-24">
      <Link href="/" className="inline-flex items-center gap-3 text-label-md text-muted hover:text-ink">
        <LogoMark className="h-5 w-auto" /> Torna al sito
      </Link>
      <h1 className="mt-12 text-headline-lg">Privacy e cookie</h1>

      <div className="mt-10 space-y-8 leading-relaxed text-muted [&_h2]:mb-3 [&_h2]:text-headline-sm [&_h2]:text-ink">
        <section>
          <h2>Titolare del trattamento</h2>
          <p>
            {site.name}, {site.role} — email{" "}
            <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </section>
        <section>
          <h2>Quali dati raccoglie questo sito</h2>
          <p>
            Il sito non ha moduli di contatto e non chiede dati personali. Per funzionare, il servizio di hosting registra
            in automatico dati tecnici di navigazione (ad esempio indirizzo IP e tipo di browser), usati solo per
            garantire sicurezza e corretto funzionamento.
          </p>
        </section>
        <section>
          <h2>Cookie</h2>
          <p>
            Il sito non usa cookie di profilazione né strumenti di statistica o pubblicità. I caratteri tipografici sono
            serviti direttamente dal sito, senza richieste a servizi esterni. Per questo non è necessario un banner di
            consenso.
          </p>
        </section>
        <section>
          <h2>WhatsApp, email e mappe</h2>
          <p>
            Quando premi un bottone WhatsApp, un indirizzo email o il link alla mappa, lasci questo sito e vieni portato
            su servizi esterni (WhatsApp di Meta, il tuo programma di posta, Google Maps), che trattano i dati secondo le
            proprie informative. I dati che mi invii in chat o via email li uso solo per risponderti e organizzare il
            percorso.
          </p>
        </section>
        <section>
          <h2>I tuoi diritti</h2>
          <p>
            Puoi chiedere in qualsiasi momento accesso, rettifica o cancellazione dei tuoi dati scrivendo all&apos;email
            sopra (artt. 15–22 GDPR). Hai anche diritto di proporre reclamo al Garante per la protezione dei dati
            personali.
          </p>
        </section>
        <p className="text-sm">Ultimo aggiornamento: ottobre 2026.</p>
      </div>
    </main>
  );
}
