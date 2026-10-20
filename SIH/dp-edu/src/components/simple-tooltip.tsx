import { createContext } from "react";
import { useState, useRef } from "react";

export const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  // Provider reserved for future global options
  return <TooltipContext.Provider value={{}}>{children}</TooltipContext.Provider>;
};

const TooltipContext = createContext<Record<string, never>>({});

export function Tooltip({
  content,
  children,
  side = "top",
}: {
  content: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const pos =
    side === "bottom"
      ? "top-full left-1/2 -translate-x-1/2 mt-2"
      : side === "left"
      ? "right-full top-1/2 -translate-y-1/2 mr-2"
      : side === "right"
      ? "left-full top-1/2 -translate-y-1/2 ml-2"
      : "bottom-full left-1/2 -translate-x-1/2 mb-2"; // top

  return (
    <div
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      className="relative inline-block"
    >
      {children}
      {open && (
        <div
          role="tooltip"
          className={`pointer-events-none absolute z-40 rounded-md bg-zinc-900 px-2 py-1 text-xs text-white shadow-lg ${pos}`}
        >
          {content}
        </div>
      )}
    </div>
  );
}
