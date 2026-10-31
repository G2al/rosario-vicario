"use client";

import { useId, useState } from "react";
import { defaultMessage, pricing, whatsappLink, type Frequency, type Plan } from "@/lib/site";
import { CheckIcon, Cta, Eyebrow, Lines } from "./ui";

type Tab = keyof typeof pricing;
const tabs = Object.keys(pricing) as Tab[];

function Segmented<T extends string | number>({
  label,
  options,
  value,
  onChange,
  role = "radiogroup",
}: {
  label: string;
  options: { value: T; label: string; id?: string; controls?: string }[];
  value: T;
  onChange: (v: T) => void;
  role?: "radiogroup" | "tablist";
}) {
  return (
    <div role={role} aria-label={label} className="flex w-full border border-line bg-bg p-1 md:inline-flex md:w-auto">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            id={o.id}
            type="button"
            role={role === "tablist" ? "tab" : "radio"}
            aria-selected={role === "tablist" ? active : undefined}
            aria-checked={role === "radiogroup" ? active : undefined}
            aria-controls={o.controls}
            onClick={() => onChange(o.value)}
            className={`h-11 flex-1 px-3 text-label-md transition-colors duration-150 sm:px-6 md:flex-none ${
              active ? "bg-silver text-bg" : "text-muted hover:text-ink"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function PlanCard({ plan, badge }: { plan: Plan; badge: string }) {
  return (
    <article
      className={`corner-cut flex flex-col p-6 sm:p-8 lg:p-10 ${
        plan.featured ? "border-t-[3px] border-red bg-surface-alt" : "border border-line bg-bg"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-headline-sm">{plan.name}</h3>
        {plan.featured && <span className="text-label-wide text-silver">{badge}</span>}
      </div>

      <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-2">
        <span className="overflow-hidden">
          <span key={plan.price} className="price-in block text-price">
            {plan.price}€
          </span>
        </span>
        <span className="pb-2 text-label-md text-muted">{plan.unit}</span>
      </div>

      <div className="mt-3 flex min-h-7 flex-wrap items-center gap-3">
        {plan.savings ? (
          <span key={plan.savings} className="price-in bg-silver px-2.5 py-1 text-label-md text-bg">
            Risparmi {plan.savings}€
          </span>
        ) : null}
        {plan.note && <span className="text-sm text-muted">{plan.note}</span>}
      </div>

      <ul className="mt-8 flex-1 space-y-3 border-t border-line pt-8">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3 text-[15px] leading-snug text-ink">
            <CheckIcon className="mt-0.5 size-4 shrink-0 text-silver" />
            {f}
          </li>
        ))}
      </ul>

      <Cta
        href={whatsappLink(plan.message)}
        icon="whatsapp"
        variant={plan.featured ? "primary" : "secondary"}
        className="mt-10 w-full"
      >
        Scegli su WhatsApp
      </Cta>
    </article>
  );
}

export default function Pricing() {
  const [tab, setTab] = useState<Tab>("singolo");
  const [freq, setFreq] = useState<Frequency>(3);
  const uid = useId();

  const plans: Plan[] = tab === "coaching" ? pricing.coaching.plans : pricing[tab].plans[freq];
  const badge = tab === "coaching" ? "Con sessione dal vivo" : "Il più conveniente";

  return (
    <section id="pacchetti" className="edge-top gutter bg-surface pb-[clamp(80px,12vw,160px)]">
      <div className="mx-auto max-w-[1200px]">
        <Eyebrow>Pacchetti</Eyebrow>
        <Lines className="mt-6 text-headline-lg" lines={["Prezzi chiari,", "nessuna sorpresa"]} />
        <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-muted md:text-lg" data-reveal>
          Scegli la formula, premi il bottone e mi arriva su WhatsApp il messaggio con il pacchetto che ti interessa.
          I pacchetti da 3 mesi si possono pagare in 2 rate.
        </p>

        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between" data-reveal>
          <Segmented
            role="tablist"
            label="Tipo di percorso"
            value={tab}
            onChange={setTab}
            options={tabs.map((t) => ({ value: t, label: pricing[t].label, id: `${uid}-${t}`, controls: `${uid}-panel` }))}
          />
          {tab !== "coaching" && (
            <Segmented
              label="Allenamenti a settimana"
              value={freq}
              onChange={setFreq}
              options={[
                { value: 3 as Frequency, label: "3 a settimana" },
                { value: 2 as Frequency, label: "2 a settimana" },
              ]}
            />
          )}
        </div>

        <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-${tab}`} className="mt-8">
          <p className="mb-6 text-muted">{pricing[tab].intro}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((p) => (
              <PlanCard key={`${tab}-${p.name}`} plan={p} badge={badge} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line-strong pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>Il piano alimentare redatto da un nutrizionista è un servizio esterno, con costo aggiuntivo.</p>
          <a
            href={whatsappLink(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-md text-silver underline underline-offset-[6px] hover:text-ink"
          >
            Hai dubbi? Chiedi senza scrupoli
          </a>
        </div>
      </div>
    </section>
  );
}
