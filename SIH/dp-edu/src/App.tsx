import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// If your pages exist, keep these imports; otherwise comment them and use the Home stub below.
import Index from "./pages/index";
import StudentPage from "./pages/StudentPage";
import InstitutionPage from "./pages/InstitutionPage";
import NotFound from "./pages/NotFound";

// Minimal Header without shadcn (uses Tailwind classes only)
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          DisasterEd
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm text-zinc-700 hover:text-emerald-700 dark:text-zinc-200 dark:hover:text-emerald-300">
            Home
          </Link>
          <Link to="/students" className="text-sm text-zinc-700 hover:text-emerald-700 dark:text-zinc-200 dark:hover:text-emerald-300">
            Students
          </Link>
          <Link to="/institutions" className="text-sm text-zinc-700 hover:text-emerald-700 dark:text-zinc-200 dark:hover:text-emerald-300">
            Institutions
          </Link>
        </nav>
      </div>
    </header>
  );
}

// Safety fallback if pages are not created yet
function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-2xl font-bold">DisasterEd</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        Welcome. Create pages/Index.tsx, pages/StudentPage.tsx, pages/InstitutionPage.tsx, and pages/NotFound.tsx
        to replace this placeholder.
      </p>
    </div>
  );
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <main className="min-h-[calc(100dvh-3.5rem)]">
          <Routes>
            {/* If pages exist, these render; else they error. Keep the fallback route at bottom. */}
            <Route path="/" element={Index ? <Index /> : <Home />} />
            <Route path="/students" element={StudentPage ? <StudentPage /> : <Home />} />
            <Route path="/institutions" element={InstitutionPage ? <InstitutionPage /> : <Home />} />
            <Route path="*" element={NotFound ? <NotFound /> : <Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
