import * as React from "react";
import { ui } from "../../config/ui";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Pill({ children, className }: Props) {
  return <span className={[ui.pill?.base ?? ui.badge?.base, className ?? ""].join(" ")}>{children}</span>;
}
