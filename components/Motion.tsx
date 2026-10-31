"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Unico punto in cui vivono scroll morbido e animazioni allo scroll.
// Le sezioni dichiarano solo attributi data-*; gli stati iniziali sono in globals.css
// sotto .motion, classe che il layout aggiunge solo se il movimento è consentito.
export default function Motion() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("motion")) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.12, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const ease = "expo.out";
    const reveal = mobile ? 0.6 : 0.8;

    const ctx = gsap.context(() => {
      // 1. Entrata dell'hero
      gsap
        .timeline({ defaults: { ease }, delay: 0.1 })
        .to("[data-hero-photo]", { opacity: 1, scale: 1, duration: 1.6 }, 0)
        .to(
          "[data-hero-slash]",
          { clipPath: "polygon(0% 0%, 22% 0%, 100% 100%, 78% 100%)", duration: 1.1, ease: "power4.inOut" },
          0.2,
        )
        .to("[data-hero] [data-line] > span", { y: 0, duration: 1, stagger: 0.08 }, 0.3)
        .to("[data-hero] [data-reveal]", { opacity: 1, y: 0, duration: reveal, stagger: 0.07 }, 0.65);

      // 2. Titoli a righe fuori dall'hero
      gsap.utils.toArray<HTMLElement>("[data-lines]").forEach((el) => {
        if (el.closest("[data-hero]")) return;
        gsap.to(el.querySelectorAll("[data-line] > span"), {
          y: 0,
          duration: 0.9,
          ease,
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      // 3. Testi ed elementi: dissolvenza dal basso, a gruppi
      const reveals = gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .filter((el) => !el.closest("[data-hero]"));
      ScrollTrigger.batch(reveals, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: reveal, ease, stagger: 0.07 }),
      });

      // 4. Immagini: maschera diagonale
      gsap.utils.toArray<HTMLElement>("[data-reveal-image]").forEach((el) => {
        gsap.to(el, {
          clipPath: "polygon(0% 0%, 150% 0%, 100% 100%, -50% 100%)",
          duration: mobile ? 0.9 : 1.2,
          ease: "power4.inOut",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onComplete: () => gsap.set(el, { clipPath: "none" }),
        });
      });

      // 5. Numeri che contano
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const counter = { v: 0 };
        el.textContent = "0";
        gsap.to(counter, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(counter.v));
          },
        });
      });

      // 6. Timeline del percorso: la linea si riempie con lo scroll
      gsap.utils.toArray<HTMLElement>("[data-timeline]").forEach((el) => {
        const fill = el.querySelector("[data-timeline-fill]");
        if (fill) {
          gsap.to(fill, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 60%", end: "bottom 60%", scrub: true },
          });
        }
        el.querySelectorAll<HTMLElement>("[data-step]").forEach((step) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 60%",
            onEnter: () => step.classList.add("is-active"),
            onLeaveBack: () => step.classList.remove("is-active"),
          });
        });
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
