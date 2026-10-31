import type { ComponentProps, ReactNode } from "react";

export function LogoMark({ className, mono = false }: { className?: string; mono?: boolean }) {
  const silver = mono ? "currentColor" : "#C9D1D9";
  const red = mono ? "currentColor" : "#E3161B";
  return (
    <svg viewBox="0 0 1016 631" className={className} aria-hidden="true">
      <path fill={silver} d="M0 0H798C920 0 1015 87 1015 212S915 440 755 447L625 317H785C837 317 866 269 866 213S829 113 771 113H113Z" />
      <polygon fill={red} points="167,167 392,167 856,631 631,631" />
      <polygon fill={silver} points="211,451 391,631 211,631" />
      <polygon fill={red} points="831,561 1016,376 1016,561" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44a9.38 9.38 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44M20.09 3.97A11.3 11.3 0 0 0 12.05.64C5.78.64.68 5.74.68 12.01c0 2 .52 3.96 1.52 5.68L.58 23.64l6.08-1.6a11.33 11.33 0 0 0 5.39 1.38h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.34-8.04" />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="square" />
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="square" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.35-2.49V9.66a5.73 5.73 0 0 0-.75-.05 5.7 5.7 0 0 0-5.7 5.7 5.7 5.7 0 0 0 5.7 5.69 5.7 5.7 0 0 0 5.7-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.26-1.48" />
    </svg>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 text-label-wide text-silver ${className}`} data-reveal>
      <span aria-hidden="true" className="inline-block h-[3px] w-4 rotate-45 bg-red" />
      {children}
    </p>
  );
}

type CtaProps = ComponentProps<"a"> & { variant?: "primary" | "secondary"; icon?: "whatsapp" | "arrow" };

export function Cta({ variant = "primary", icon, className = "", children, ...props }: CtaProps) {
  const base =
    "group inline-flex h-[52px] min-w-[44px] items-center justify-center gap-3 px-7 text-label-lg transition-colors duration-150";
  const styles =
    variant === "primary"
      ? "corner-cut bg-red text-white hover:bg-red-hover active:bg-red-pressed"
      : "border border-line-strong text-silver hover:border-silver hover:text-ink";
  const external = props.href?.startsWith("http");
  return (
    <a
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {icon === "whatsapp" && <WhatsAppIcon className="size-5 shrink-0" />}
      <span>{children}</span>
      {icon === "arrow" && (
        <ArrowIcon className="size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-1" />
      )}
    </a>
  );
}

/** Titolo a righe: ogni riga sale da una maschera all'ingresso (vedi Motion). */
export function Lines({ lines, as: Tag = "h2", className = "" }: { lines: ReactNode[]; as?: "h1" | "h2" | "h3"; className?: string }) {
  return (
    <Tag className={className} data-lines>
      {lines.map((line, i) => (
        <span key={i} data-line>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
