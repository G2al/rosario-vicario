"use client";

import { useEffect, useState } from "react";
import { defaultMessage, navLinks, site, whatsappLink } from "@/lib/site";
import { Cta, LogoMark } from "./ui";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Il pannello mobile sta fuori dall'header: il backdrop-blur dell'header farebbe da
  // contenitore ai figli position:fixed, schiacciando il pannello a 64px.
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <nav className="gutter mx-auto flex h-16 max-w-[1200px] items-center justify-between md:h-[72px]" aria-label="Principale">
          <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <LogoMark className="h-6 w-auto" />
            <span className="font-display text-xl uppercase tracking-wide">{site.name}</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-label-md text-muted transition-colors duration-150 hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Cta href={whatsappLink(defaultMessage)} icon="whatsapp" className="h-11! px-5!">
              Scrivimi
            </Cta>
          </div>

          <button
            type="button"
            className="relative -mr-2 flex size-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`absolute h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </nav>
      </header>

      <div
        id="menu-mobile"
        data-lenis-prevent
        className={`gutter fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between overflow-y-auto bg-bg pt-8 pb-[calc(40px+env(safe-area-inset-bottom))] transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {navLinks.map((l) => (
            <li key={l.href} className="border-b border-line">
              <a href={l.href} className="block py-5 text-headline-md" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Cta href={whatsappLink(defaultMessage)} icon="whatsapp" className="w-full">
          Scrivimi su WhatsApp
        </Cta>
      </div>
    </>
  );
}
