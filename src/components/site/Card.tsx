import * as React from "react";
import { ui } from "../../config/ui";

type Props = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: Props) {
  const hoverCls = hover ? ui.card?.hover ?? "" : "";
  return (
    <div className={[ui.card?.base ?? "", hoverCls, className ?? ""].join(" ")}>
      {children}
    </div>
  );
}
