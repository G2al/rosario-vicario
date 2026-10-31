import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark } from "./ui";

export default function Footer() {
  return (
    <footer className="gutter border-t border-line bg-bg py-16 pb-28 lg:pb-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-4">
          <LogoMark className="h-10 w-auto" />
          <div>
            <p className="font-display text-xl uppercase">{site.name}</p>
            <p className="mt-1 text-label-wide text-muted">{site.role}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted md:items-end">
          <Link href="/privacy" className="hover:text-ink">
            Privacy e cookie
          </Link>
          <p>© {new Date().getFullYear()} {site.name} · {site.area}</p>
        </div>
      </div>
    </footer>
  );
}
