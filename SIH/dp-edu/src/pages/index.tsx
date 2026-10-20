import LandingPage from "./LandingPage";

export default function Index() {
  return LandingPage ? <LandingPage /> : (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-2xl font-bold">DisasterEd</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        LandingPage.tsx is missing. Create src/pages/LandingPage.tsx or update index.tsx to point to your home component.
      </p>
    </div>
  );
}
