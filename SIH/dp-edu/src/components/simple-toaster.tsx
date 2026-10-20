import { createContext, useContext, useEffect, useState } from "react";

type ToastItem = {
  id: number;
  msg: string;
  type?: "info" | "success" | "warn" | "error";
  timeout?: number;
};

const ToastCtx = createContext<{ push: (t: Omit<ToastItem, "id">) => void } | null>(null);

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error("useToast must be used within <Toaster/>");
  return ctx.push;
}

export const toast = {
  info: (m: string, timeout = 3000) => (window as any).__toast?.({ msg: m, type: "info", timeout }),
  success: (m: string, timeout = 3000) => (window as any).__toast?.({ msg: m, type: "success", timeout }),
  warn: (m: string, timeout = 3000) => (window as any).__toast?.({ msg: m, type: "warn", timeout }),
  error: (m: string, timeout = 3000) => (window as any).__toast?.({ msg: m, type: "error", timeout }),
};

export function Toaster({ children }: { children?: React.ReactNode }) {
  const [list, setList] = useState<ToastItem[]>([]);

  useEffect(() => {
    (window as any).__toast = (t: Omit<ToastItem, "id">) => {
      const id = Date.now() + Math.random();
      const item = { id, timeout: 3000, ...t };
      setList((l) => [...l, item]);
      if (item.timeout && item.timeout > 0) {
        setTimeout(() => remove(id), item.timeout);
      }
    };
    return () => {
      if ((window as any).__toast) delete (window as any).__toast;
    };
  }, []);

  const remove = (id: number) => setList((l) => l.filter((x) => x.id !== id));

  const colors = (type?: ToastItem["type"]) =>
    type === "success"
      ? "border-l-4 border-emerald-600"
      : type === "warn"
      ? "border-l-4 border-amber-500"
      : type === "error"
      ? "border-l-4 border-red-600"
      : "border-l-4 border-zinc-400";

  return (
    <ToastCtx.Provider value={{ push: (t) => (window as any).__toast?.(t) }}>
      {children}
      <div className="fixed right-4 top-4 z-50 space-y-2">
        {list.map((t) => (
          <div
            key={t.id}
            className={`group flex items-start gap-3 rounded-md bg-white/90 px-4 py-2 text-sm shadow-md ring-1 ring-black/10 backdrop-blur dark:bg-zinc-900/90 dark:ring-white/10 ${colors(t.type)}`}
            role="status"
          >
            <span className="mt-0.5 select-none">
              {t.type === "success" ? "✅" : t.type === "warn" ? "⚠️" : t.type === "error" ? "⛔" : "ℹ️"}
            </span>
            <div className="flex-1">{t.msg}</div>
            <button
              aria-label="Close"
              className="select-none text-zinc-400 transition hover:text-zinc-700 dark:hover:text-zinc-300"
              onClick={() => remove(t.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}
