import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  actions?: ReactNode;
  variant?: "plain" | "tint" | "reverse";
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, subtitle, align = "left", actions, variant = "plain", children, className }: SectionProps) {
  const headingAlign = align === "center" ? "text-center mx-auto" : "text-left";
  const wrapperAlign = align === "center" ? "items-center" : "items-start";
  const variants: Record<typeof variant, string> = {
    plain: "bg-transparent",
    tint: "bg-wave-blue",
    reverse: "bg-wave-white",
  };
  return (
    <section id={id} className={`${variants[variant]} py-16 md:py-24 ${className ?? ""}`}>
      <div className="container">
        {(eyebrow || title) && (
          <div className={`mb-12 flex w-full flex-col gap-3 ${wrapperAlign}`}>
            {eyebrow && <span className={`text-xs tracking-[0.3em] text-primary ${headingAlign}`}>{eyebrow}</span>}
            {title && <h2 className={`font-display text-3xl md:text-4xl text-primary-dark ${headingAlign}`}>{title}</h2>}
            {subtitle && <p className={`max-w-3xl text-base md:text-lg text-subtext ${headingAlign}`}>{subtitle}</p>}
            {actions && <div className={`${align === "center" ? "justify-center" : "justify-start"} flex gap-3`}>{actions}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
