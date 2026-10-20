import Header from "@/components/Header";

export default function StudentPage() {
  return (
    <div className="min-h-dvh bg-zinc-50 dark:bg-zinc-950">
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-lg font-semibold">Students</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Practice quick drills, track readiness, and review module notes.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold">Start 5‑min Drill</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              10 quick questions with instant feedback.
            </p>
            <button
              className="mt-3 inline-flex items-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              onClick={() => alert("Starting drill (demo)")}
            >
              Begin
            </button>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold">Kit Checklist</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Track emergency kit items and save progress locally.
            </p>
            <button
              className="mt-3 inline-flex items-center rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
              onClick={() => alert("Open checklist (demo)")}
            >
              Open
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
