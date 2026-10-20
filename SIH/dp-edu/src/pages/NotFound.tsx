import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="grid min-h-[80dvh] place-items-center px-4">
      <div className="text-center">
        <p className="text-sm font-medium text-emerald-700">404</p>
        <h1 className="mt-2 text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          The page requested does not exist or was moved.
        </p>
        <div className="mt-4">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
