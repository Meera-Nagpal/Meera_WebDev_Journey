import Header from "../components/Header";
import { Card, CardContent } from "../components/cards/Card";
function KPI({
  icon,
  label,
  value,
  tone = "default",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone?: "default" | "warn";
}) {
  const toneClass =
    tone === "warn" ? "text-amber-600 dark:text-amber-300" : "text-emerald-700 dark:text-emerald-300";
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <span className={toneClass} aria-hidden="true">{icon}</span>
          <div>
            <p className="text-xs text-zinc-500">{label}</p>
            <p className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function InstitutionPage() { // keep spelling to match existing imports
  return (
    <div className="min-h-dvh bg-zinc-50 dark:bg-zinc-950">
      <Header />

      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900/40 py-8">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-full bg-emerald-600/10 p-3" aria-hidden="true">🏫</div>
            <div>
              <h1 className="text-2xl font-bold">Institution Dashboard</h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Comprehensive emergency management for educational institutions
              </p>
            </div>
          </div>

          {/* KPI grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <KPI icon="👩‍🎓" label="Total Students" value="1,247" />
            <KPI icon="🛡️" label="Staff Trained" value="89%" />
            <KPI icon="📈" label="Preparedness Score" value="92%" tone="warn" />
            <KPI icon="⏱️" label="Last Drill" value="5 days" />
          </div>
        </div>
      </section>

      {/* Management cards */}
      <section className="container mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Assign Drills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Choose a module and assign to classes. Results appear in analytics.
              </p>
              <div className="flex gap-2">
                <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">
                  New Assignment
                </button>
                <button className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
                  View Results
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>School SOPs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Upload, version, and share evacuation routes and emergency contacts.
              </p>
              <div className="flex gap-2">
                <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">
                  Upload SOP
                </button>
                <button className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
                  Browse Library
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Advisory</CardTitle>
            </CardHeader>
            <CardContent className="flex items-start gap-3">
              <span aria-hidden="true">⚠️</span>
              <div>
                <div className="text-sm font-medium">Heat advisory tomorrow</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Reschedule outdoor drills after 12 PM. Hydration stations to be set up.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
