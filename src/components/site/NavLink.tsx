import type React from "react";
import { SmartLink } from "./SmartLink";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function NavLink(props: Props) {
  return <SmartLink {...props} />;
}