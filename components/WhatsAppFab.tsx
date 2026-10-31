"use client";

import { useEffect, useState } from "react";
import { defaultMessage, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

// Bottone flottante solo su mobile/tablet: compare dopo l'hero e sparisce
// sulla sezione contatti, dove la CTA è già in pagina.
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contatti");
    const update = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.6;
      const atContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.8 : false;
      setVisible(pastHero && !atContact);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <a
      href={whatsappLink(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivimi su WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-4 bottom-[calc(16px+env(safe-area-inset-bottom))] z-40 flex size-14 items-center justify-center rounded-full bg-red text-white transition-[opacity,transform] duration-300 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
