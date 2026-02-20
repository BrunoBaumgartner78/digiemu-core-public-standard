import * as React from "react";
import GlobeSVG from "./GlobeSVG";

type Props = { children: React.ReactNode };

export function HeroBackdrop({ children }: Props) {
  return (
    <div className="relative">
      <GlobeSVG />
      {children}
    </div>
  );
}
