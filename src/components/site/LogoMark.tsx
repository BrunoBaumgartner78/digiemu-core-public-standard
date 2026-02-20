import Image from "next/image";

export function LogoMark({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <picture className={className}>
      {/* Dark mode: use the light logo for contrast */}
      <source media="(prefers-color-scheme: dark)" srcSet="/brand/logo-dark.webp" />
      <Image
      
        src="/brand/logo-light.webp"
        alt="DigiEmu Core"
        width={size}
        height={size}
        priority
      />
    </picture>
  );
}
