import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" className="stroke-current" strokeWidth="1.5"/>
    </svg>
  );
}
function IconHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 11l9-7 9 7" className="stroke-current" strokeWidth="1.5"/>
      <path d="M5 10v10h14V10" className="stroke-current" strokeWidth="1.5"/>
    </svg>
  );
}
function IconUsers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="8" r="3" className="stroke-current" strokeWidth="1.5"/>
      <path d="M4 20c0-3 2.5-5 5-5" className="stroke-current" strokeWidth="1.5"/>
      <circle cx="17" cy="10" r="2.5" className="stroke-current" strokeWidth="1.5"/>
      <path d="M14 20c0-2.5 2-4 4-4" className="stroke-current" strokeWidth="1.5"/>
    </svg>
  );
}
function IconBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="3" width="10" height="18" rx="1" className="stroke-current" strokeWidth="1.5"/>
      <path d="M18 9h2v12h-2M7 7h4M7 11h4M7 15h4" className="stroke-current" strokeWidth="1.5"/>
    </svg>
  );
}
function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" className="stroke-current" strokeWidth="1.5"/>
    </svg>
  );
}

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const is = (p: string) => location.pathname === p;
  const linkBase =
    "flex items-center gap-1 text-sm font-medium transition-colors";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90">
          <IconShield className="h-8 w-8 text-emerald-600" />
          <div>
            <h1 className="text-lg font-bold">DisasterEd</h1>
            <p className="text-xs text-zinc-500">Preparedness & Response</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className={`${linkBase} ${
              is("/") ? "text-emerald-700 dark:text-emerald-300" : "text-zinc-800 hover:text-emerald-700 dark:text-zinc-200 dark:hover:text-emerald-300"
            }`}
            aria-current={is("/") ? "page" : undefined}
          >
            <IconHome className="h-4 w-4" />
            Home
          </Link>

          <Link
            to="/students"
            className={`${linkBase} ${
              is("/students") ? "text-emerald-700 dark:text-emerald-300" : "text-zinc-800 hover:text-emerald-700 dark:text-zinc-200 dark:hover:text-emerald-300"
            }`}
            aria-current={is("/students") ? "page" : undefined}
          >
            <IconUsers className="h-4 w-4" />
            Students
          </Link>

          <Link
            to="/institutions"
            className={`${linkBase} ${
              is("/institutions") ? "text-emerald-700 dark:text-emerald-300" : "text-zinc-800 hover:text-emerald-700 dark:text-zinc-200 dark:hover:text-emerald-300"
            }`}
            aria-current={is("/institutions") ? "page" : undefined}
          >
            <IconBuilding className="h-4 w-4" />
            Institutions
          </Link>

          <button
            className="inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            onClick={() => alert("Emergency alert sent (demo)")}
          >
            Emergency Alert
          </button>
        </nav>

        <button
          className="rounded-md p-2 md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-800"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <IconMenu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-3">
            <Link onClick={()=>setOpen(false)} to="/" className={`${linkBase} ${is("/") ? "text-emerald-700 dark:text-emerald-300":"text-zinc-800 dark:text-zinc-200"}`}>
              <IconHome className="h-4 w-4" /> Home
            </Link>
            <Link onClick={()=>setOpen(false)} to="/students" className={`${linkBase} ${is("/students") ? "text-emerald-700 dark:text-emerald-300":"text-zinc-800 dark:text-zinc-200"}`}>
              <IconUsers className="h-4 w-4" /> Students
            </Link>
            <Link onClick={()=>setOpen(false)} to="/institutions" className={`${linkBase} ${is("/institutions") ? "text-emerald-700 dark:text-emerald-300":"text-zinc-800 dark:text-zinc-200"}`}>
              <IconBuilding className="h-4 w-4" /> Institutions
            </Link>
            <button
              className="w-full rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              onClick={() => { setOpen(false); alert("Emergency alert sent (demo)"); }}
            >
              Emergency Alert
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
