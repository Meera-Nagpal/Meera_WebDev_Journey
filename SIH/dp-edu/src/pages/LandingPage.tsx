import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/cards/Card";
import { ShieldCheckIcon, AcademicCapIcon, CheckCircleIcon, ExclamationTriangleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-zinc-50 dark:bg-zinc-950">
      <Header />

      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900/40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
              School safety first
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Be drill‑ready in 5 minutes a day
            </h1>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">
              Learn what to do before, during, and after earthquakes, floods, fires, and heatwaves. Practice quick drills and share SOPs with students and staff.
            </p>
            <div className="mt-5 flex gap-3">
              <Link to="/drill" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">
                Start 5‑min Drill
              </Link>
              <Link to="/resources" className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
                Kit Checklist
              </Link>
            </div>
            <div className="mt-6 grid max-w-md grid-cols-3 gap-3">
              <Stat label="Schools using" value="12" />
              <Stat label="Avg. readiness" value="72%" />
              <Stat label="Modules" value="4" />
            </div>
          </div>
          <Card className="p-6">
            <div className="aspect-video w-full rounded-lg bg-emerald-100/60 dark:bg-emerald-900/30" />
            <p className="mt-2 text-center text-xs text-zinc-500">Demo: Evacuation route map / dashboard preview</p>
          </Card>
        </div>
      </section>

      {/* Who is this for */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="transition hover:-translate-y-0.5 hover:shadow-md">
            <CardHeader>
              <AcademicCapIcon className="mx-auto mb-2 h-10 w-10 text-emerald-600" />
              <CardTitle className="text-center text-lg">For Students</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-emerald-600" /> Personal emergency kit checklist</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-emerald-600" /> Quick drills with instant feedback</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-emerald-600" /> Offline plan card</li>
              </ul>
              <Link to="/students" className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-300">
                Explore for students <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="transition hover:-translate-y-0.5 hover:shadow-md">
            <CardHeader>
              <ShieldCheckIcon className="mx-auto mb-2 h-10 w-10 text-emerald-600" />
              <CardTitle className="text-center text-lg">For Institutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-emerald-600" /> Assign drills and SOPs</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-emerald-600" /> Readiness analytics</li>
                <li className="flex items-center gap-2"><CheckCircleIcon className="h-5 w-5 text-emerald-600" /> Staff training tracker</li>
              </ul>
              <Link to="/institutions" className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-300">
                Explore for institutions <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advisory */}
      <section className="mx-auto max-w-7xl px-4 pb-12">
        <Card className="border-amber-300 bg-amber-50/60 dark:border-amber-800 dark:bg-amber-950/30">
          <CardContent className="flex items-start gap-3">
            <ExclamationTriangleIcon className="mt-0.5 h-5 w-5 text-amber-600" />
            <div>
              <div className="text-sm font-medium">Heat advisory tomorrow</div>
              <p className="text-sm text-amber-800 dark:text-amber-300">Reschedule outdoor drills after 12 PM. Hydration stations to be set up.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function Stat({label, value}:{label:string; value:string}) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-zinc-500">{label}</div>
    </div>
  );
}
