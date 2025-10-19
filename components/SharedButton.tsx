import Link from "next/link";
import { ReactNode } from "react";

type SharedButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function SharedButton({ href, children, variant = "primary", className }: SharedButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles: Record<string, string> = {
    primary: "bg-primary text-white shadow-sm hover:bg-primary-dark focus-visible:ring-primary",
    secondary: "bg-white text-primary border border-primary/80 hover:bg-primary-light/80 focus-visible:ring-primary",
    ghost: "bg-transparent text-text border border-border hover:bg-surface/60 focus-visible:ring-border",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className ?? ""}`}>
      {children}
    </Link>
  );
}
