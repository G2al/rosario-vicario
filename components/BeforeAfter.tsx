"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import type { View } from "@/lib/site";

const viewLabel: Record<View, string> = { fronte: "Fronte", schiena: "Schiena", profilo: "Profilo" };

export default function BeforeAfter({ id, views, index }: { id: string; views: View[]; index: number }) {
  const [view, setView] = useState<View>(views[0]);
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  // Piccolo "invito" a trascinare la prima volta che la card entra nello schermo.
  useEffect(() => {
    const el = box.current;
    if (!el || !document.documentElement.classList.contains("motion")) return;
    const state = { v: 50 };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        gsap
          .timeline({ delay: 0.4 + index * 0.12, onUpdate: () => setPos(state.v) })
          .to(state, { v: 32, duration: 0.6, ease: "power2.inOut" })
          .to(state, { v: 62, duration: 0.7, ease: "power2.inOut" })
          .to(state, { v: 50, duration: 0.5, ease: "power2.out" });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  const moveTo = (clientX: number) => {
    const rect = box.current!.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  const src = (side: "pre" | "post") => `/images/risultati/${id}-${view}-${side}.jpg`;
  const sizes = "(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw";

  return (
    <figure data-reveal>
      <div
        ref={box}
        className="relative aspect-[3/4] cursor-ew-resize touch-pan-y overflow-hidden bg-surface select-none has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-3 has-[input:focus-visible]:outline-silver"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          moveTo(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <Image src={src("post")} alt={`Dopo il percorso, vista ${viewLabel[view].toLowerCase()}`} fill sizes={sizes} className="object-cover" draggable={false} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={src("pre")} alt={`Prima del percorso, vista ${viewLabel[view].toLowerCase()}`} fill sizes={sizes} className="object-cover" draggable={false} />
        </div>

        <span className="pointer-events-none absolute top-3 left-3 bg-bg/80 px-2.5 py-1.5 text-label-wide text-ink">Prima</span>
        <span className="pointer-events-none absolute top-3 right-3 bg-bg/80 px-2.5 py-1.5 text-label-wide text-ink">Dopo</span>

        <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-ink" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red text-white">
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
              <path d="M9 6l-6 6 6 6V6zm6 0v12l6-6-6-6z" />
            </svg>
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Confronta prima e dopo"
          className="sr-only"
        />
      </div>

      {views.length > 1 && (
        <div className="mt-3 flex border border-line" role="group" aria-label="Scegli la vista">
          {views.map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={v === view}
              onClick={() => setView(v)}
              className={`h-11 flex-1 text-label-md transition-colors duration-150 ${
                v === view ? "bg-silver text-bg" : "text-muted hover:text-ink"
              }`}
            >
              {viewLabel[v]}
            </button>
          ))}
        </div>
      )}
    </figure>
  );
}
