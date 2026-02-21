import Link from "next/link";
import GlobeSVG from "../src/components/site/GlobeSVG";

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-56px)] overflow-hidden">
      {/* Background globe (direct, guaranteed visible) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* light-mode: blue-ish lines, dark-mode: white lines */}
        <div className="absolute inset-0 opacity-[0.22] dark:opacity-[0.35]">
          <div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2">
            <GlobeSVG className="h-full w-full stroke-blue-500/50 dark:stroke-white/45" />
          </div>
        </div>

        {/* subtle glow vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(59,130,246,0.12),transparent_65%)] dark:bg-[radial-gradient(closest-side,rgba(59,130,246,0.16),transparent_70%)]" />
      </div>

      {/* Foreground */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl rounded-3xl border border-black/10 bg-white/70 p-8 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-black/40">
          <div className="text-xs font-medium tracking-widest text-black/50 dark:text-white/50">
            ERROR 404
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black dark:text-white">
            Page not found
          </h1>

          <p className="mt-3 text-[15px] leading-7 text-black/70 dark:text-white/70">
            This route does not exist in the Public Standard site. If you followed a link, it may be outdated.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-xl border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              Back to Home
            </Link>

            <Link
              href="/reference"
              className="rounded-xl px-3 py-2 text-sm text-black/70 underline decoration-black/20 underline-offset-4 transition hover:text-black dark:text-white/70 dark:decoration-white/20 dark:hover:text-white"
            >
              Reference
            </Link>

            <Link
              href="/contact"
              className="rounded-xl px-3 py-2 text-sm text-black/70 underline decoration-black/20 underline-offset-4 transition hover:text-black dark:text-white/70 dark:decoration-white/20 dark:hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
