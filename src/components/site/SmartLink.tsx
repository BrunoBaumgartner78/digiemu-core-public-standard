// src/components/site/SmartLink.tsx
import Link from "next/link";
import type React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function SmartLink({ href, children, className, title, external, onClick }: Props) {
  if (external) {
    return (
      <a
        href={href}
        onClick={onClick}
        target="_blank"
        rel="noreferrer"
        className={className}
        title={title}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} title={title} onClick={onClick}>
      {children}
    </Link>
  );
}