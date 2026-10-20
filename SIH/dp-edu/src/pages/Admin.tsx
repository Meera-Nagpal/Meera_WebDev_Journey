import Header from "../components/Header";
export default function Admin() {
  return (
    <div className="min-h-dvh bg-zinc-50 dark:bg-zinc-950">
      <Header />
      <section className="container mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-lg font-semibold">Admin / Teacher</h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
          Manage classes, assign modules, and review drill analytics.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold">Create Class</h3>
            <div className="mt-3 space-y-3">
              <input className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:border-zinc-700 dark:bg-zinc-900" placeholder="Class name" />
              <input className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:border-zinc-700 dark:bg-zinc-900" placeholder="Grade" />
              <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">
                Create
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold">Assign Module</h3>
            <div className="mt-3 space-y-3">
              <input className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:border-zinc-700 dark:bg-zinc-900" placeholder="Class" />
              <input className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:border-zinc-700 dark:bg-zinc-900" placeholder="Module" />
              <button className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
                Assign
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
