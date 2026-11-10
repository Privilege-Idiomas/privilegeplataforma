import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-border bg-surface rounded-xl border p-5 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
