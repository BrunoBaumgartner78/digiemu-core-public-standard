import * as React from "react";
import { ui } from "../../config/ui";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hero";
  dividerTop?: boolean;
  borderTop?: boolean;
};

export function Section({
  id,
  children,
  className,
  variant = "default",
  dividerTop = false,
  borderTop = false,
}: Props) {
  const py = variant === "hero" ? ui.layout.hero : ui.layout.section;
  const top = dividerTop || borderTop;
  return (
    <section id={id} className={[top ? ui.hr ?? "" : "", py, className ?? ""].join(" ")}>
      {children}
    </section>
  );
}
