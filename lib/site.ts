// Tutti i contenuti del sito in un unico posto: per cambiare un prezzo, un testo
// o un link basta modificare questo file.

export const site = {
  name: "Rosario Vicario",
  role: "Personal Trainer",
  gym: "Golden Village",
  city: "Sant'Antimo",
  area: "Sant'Antimo (NA)",
  phoneDisplay: "+39 334 822 2793",
  whatsappNumber: "393348222793",
  email: "rosariovicario04@gmail.com",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Golden+Village+Sant%27Antimo",
  // Da compilare quando arrivano gli URL: finché sono null i link non vengono mostrati.
  instagram: null as string | null,
  tiktok: null as string | null,
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultMessage =
  "Ciao Rosario! Ho visto il tuo sito e vorrei qualche informazione sui tuoi percorsi.";

export const navLinks = [
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#percorso", label: "Percorso" },
  { href: "#risultati", label: "Risultati" },
  { href: "#pacchetti", label: "Pacchetti" },
  { href: "#faq", label: "FAQ" },
];

export const stats = [
  { value: 11, suffix: "", label: "Anni di calcio agonistico" },
  { value: 8, suffix: "", label: "Certificazioni" },
  { value: 75, prefix: "60–", suffix: "′", label: "Minuti per sessione" },
];

export const steps = [
  {
    title: "Anamnesi e misurazioni",
    text: "Raccolgo i tuoi dati e prendo le misure antropometriche. Partiamo da numeri veri, non da impressioni.",
  },
  {
    title: "Programma su misura",
    text: "Costruisco l'allenamento sui tuoi obiettivi, sul tuo livello e sul tempo che hai a disposizione.",
  },
  {
    title: "3 sessioni one-to-one a settimana",
    text: "60–75 minuti con me accanto: tecnica corretta, carichi giusti, progressione costante.",
  },
  {
    title: "Un 4° allenamento, se serve",
    text: "Quando ha senso aggiungiamo una sessione. Gli orari li organizzo io, con la massima flessibilità.",
  },
  {
    title: "Nutrizione, se vuoi",
    text: "Puoi integrare il percorso con un piano alimentare redatto da un nutrizionista. È un servizio esterno, con costo aggiuntivo.",
  },
];

export type View = "fronte" | "schiena" | "profilo";

export const results: { id: string; views: View[] }[] = [
  { id: "a", views: ["schiena", "fronte", "profilo"] },
  { id: "e", views: ["fronte", "schiena", "profilo"] },
  { id: "c", views: ["fronte"] },
  { id: "b", views: ["fronte", "schiena"] },
  { id: "d", views: ["fronte", "schiena"] },
  { id: "f", views: ["fronte"] },
];

export type Plan = {
  name: string;
  price: number;
  unit: string;
  note?: string;
  savings?: number;
  featured?: boolean;
  features: string[];
  message: string;
};

// Word joiner + spazio non separabile: "60–75 min" non va mai a capo.
const SESSION = "60–⁠75 min";

const personalFeatures = (sessions: number) => [
  "Anamnesi e misurazioni antropometriche",
  "Programma di allenamento personalizzato",
  `${sessions} sessioni one-to-one a settimana (${SESSION})`,
  "Possibilità di un allenamento in più a settimana",
];

const coupleFeatures = (sessions: number) => [
  "Anamnesi e misurazioni per entrambi",
  "Programma personalizzato per ciascuno",
  `${sessions} sessioni insieme a settimana (${SESSION})`,
  "Vi allenate insieme e vi motivate a vicenda",
];

export type Frequency = 3 | 2;

export const pricing = {
  singolo: {
    label: "Singolo",
    intro: "Il percorso completo, solo tu e io.",
    plans: {
      3: [
        {
          name: "Mensile",
          price: 240,
          unit: "/mese",
          features: personalFeatures(3),
          message: "Ciao Rosario! Sono interessato al Percorso 1-to-1, 3 allenamenti a settimana, formula mensile (240€).",
        },
        {
          name: "3 mesi",
          price: 600,
          unit: "totale",
          note: "200€ al mese · pagabile in 2 rate",
          savings: 120,
          featured: true,
          features: personalFeatures(3),
          message: "Ciao Rosario! Sono interessato al Percorso 1-to-1, 3 allenamenti a settimana, pacchetto 3 mesi (600€).",
        },
      ],
      2: [
        {
          name: "Mensile",
          price: 160,
          unit: "/mese",
          features: personalFeatures(2),
          message: "Ciao Rosario! Sono interessato al Percorso 1-to-1, 2 allenamenti a settimana, formula mensile (160€).",
        },
        {
          name: "3 mesi",
          price: 390,
          unit: "totale",
          note: "130€ al mese · pagabile in 2 rate",
          savings: 90,
          featured: true,
          features: personalFeatures(2),
          message: "Ciao Rosario! Sono interessato al Percorso 1-to-1, 2 allenamenti a settimana, pacchetto 3 mesi (390€).",
        },
      ],
    } as Record<Frequency, Plan[]>,
  },
  coppia: {
    label: "Coppia",
    intro: "Lo stesso percorso, in due. Il prezzo a persona scende.",
    plans: {
      3: [
        {
          name: "Mensile",
          price: 300,
          unit: "/mese in due",
          note: "150€ a persona",
          features: coupleFeatures(3),
          message: "Ciao Rosario! Siamo interessati al Percorso di Coppia, 3 allenamenti a settimana, formula mensile (300€).",
        },
        {
          name: "3 mesi",
          price: 750,
          unit: "totale in due",
          note: "125€ al mese a persona · pagabile in 2 rate",
          savings: 150,
          featured: true,
          features: coupleFeatures(3),
          message: "Ciao Rosario! Siamo interessati al Percorso di Coppia, 3 allenamenti a settimana, pacchetto 3 mesi (750€).",
        },
      ],
      2: [
        {
          name: "Mensile",
          price: 200,
          unit: "/mese in due",
          note: "100€ a persona",
          features: coupleFeatures(2),
          message: "Ciao Rosario! Siamo interessati al Percorso di Coppia, 2 allenamenti a settimana, formula mensile (200€).",
        },
        {
          name: "3 mesi",
          price: 500,
          unit: "totale in due",
          note: "83€ al mese a persona · pagabile in 2 rate",
          savings: 100,
          featured: true,
          features: coupleFeatures(2),
          message: "Ciao Rosario! Siamo interessati al Percorso di Coppia, 2 allenamenti a settimana, pacchetto 3 mesi (500€).",
        },
      ],
    } as Record<Frequency, Plan[]>,
  },
  coaching: {
    label: "Coaching",
    intro: "Ti alleni in autonomia, anche a distanza, con la mia scheda e i miei check.",
    plans: [
      {
        name: "Basic",
        price: 35,
        unit: "6–8 settimane",
        features: [
          "Scheda personalizzata su obiettivi, livello e disponibilità",
          "Spiegazione dettagliata di ogni esercizio",
          "Check periodici, online o dal vivo",
          "Rinnovabile a fine ciclo",
        ],
        message: "Ciao Rosario! Sono interessato al Coaching Basic (35€).",
      },
      {
        name: "Completo",
        price: 50,
        unit: "6–8 settimane",
        note: "Include 1 allenamento one-to-one con me",
        featured: true,
        features: [
          "Tutto quello che c'è nel Basic",
          "1 allenamento one-to-one, da concordare insieme",
          "Check periodici, online o dal vivo",
          "Rinnovabile a fine ciclo",
        ],
        message: "Ciao Rosario! Sono interessato al Coaching Completo con allenamento one-to-one (50€).",
      },
    ] as Plan[],
  },
};

export const certifications = [
  { title: "Laurea in Scienze Motorie", issuer: "Università Pegaso · L-22", year: "2026" },
  { title: "Personal Trainer 3° livello", issuer: "ASI · riconosciuto CONI", year: "2025", file: "asi-personal-trainer-3-livello-2025-03" },
  { title: "Personal Trainer 2° livello", issuer: "ASI · riconosciuto CONI", year: "2025", file: "asi-personal-trainer-2-livello-2025-02" },
  { title: "Personal Trainer 1° livello", issuer: "ASI · riconosciuto CONI", year: "2024", file: "asi-personal-trainer-1-livello-2024-12" },
  { title: "Personal Trainer EQF 4", issuer: "EREPS · Registro europeo", year: "Europa", file: "ereps-personal-trainer-eqf4" },
  { title: "Ipertrofia e programmazione", issuer: "Fitnessway", year: "2024", file: "fitnessway-ipertrofia-programmazione-2024-12" },
  { title: "Alimentazione per lo sportivo", issuer: "ASI · riconosciuto CONI", year: "2024", file: "asi-operatore-alimentazione-sportivo-2024-12" },
  { title: "Istruttore di Ginnastica Posturale", issuer: "ATS", year: "2025", file: "ats-istruttore-ginnastica-posturale-2025-07" },
  { title: "Istruttore di Ginnastica Posturale", issuer: "ACSI · riconosciuto CONI", year: "2025", file: "acsi-istruttore-ginnastica-posturale-2025-07" },
];

export const faqs = [
  {
    q: "Devo essere già allenato per iniziare?",
    a: "No. Il programma parte dal tuo livello di oggi: per questo il primo passo è sempre l'anamnesi con le misurazioni.",
  },
  {
    q: "Dove ci alleniamo?",
    a: "Alla Golden Village di Sant'Antimo. Se sei lontano c'è il Coaching: scheda personalizzata e check periodici, online o dal vivo.",
  },
  {
    q: "Quanto dura una sessione?",
    a: "Tra 60 e 75 minuti, sempre con me accanto a seguire tecnica e carichi.",
  },
  {
    q: "Posso pagare a rate?",
    a: "Sì. I pacchetti da 3 mesi si possono dividere in 2 rate mensili.",
  },
  {
    q: "Il piano alimentare è incluso?",
    a: "No, ma puoi aggiungerlo: lo redige un nutrizionista, come servizio esterno con un costo a parte.",
  },
  {
    q: "Possiamo allenarci in due?",
    a: "Sì, c'è il percorso di coppia: vi allenate insieme, vi motivate a vicenda e il prezzo a persona scende.",
  },
  {
    q: "Che differenza c'è tra Coaching Basic e Completo?",
    a: "Entrambi includono la scheda personalizzata spiegata nel dettaglio e i check periodici per 6–8 settimane. Il Completo aggiunge un allenamento one-to-one con me.",
  },
  {
    q: "Come si comincia?",
    a: "Scrivimi su WhatsApp. Ti rispondo io, capiamo insieme il tuo obiettivo e scegliamo il percorso giusto.",
  },
];
