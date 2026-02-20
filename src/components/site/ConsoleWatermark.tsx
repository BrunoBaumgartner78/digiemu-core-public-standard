"use client";
"use client";

declare global {
  interface Window {
    __DIGIEMU_CONSOLE_WATERMARK__?: boolean;
  }
}

export function installConsoleWatermark(message: string) {
  if (typeof window === "undefined") return;
  if (window.__DIGIEMU_CONSOLE_WATERMARK__) return;
  window.__DIGIEMU_CONSOLE_WATERMARK__ = true;

  const originalLog: Console["log"] = console.log.bind(console);

  console.log = (...args: unknown[]) => {
    originalLog(...args);
  };

  // Engineer watermark
  originalLog(
    "%c" + message,
    "padding:6px 10px;border-radius:10px;background:rgba(0,0,0,.08);color:#2563eb;font-weight:600;"
  );
}

import { useEffect } from "react";

export function ConsoleWatermark() {
  useEffect(() => {
    installConsoleWatermark("DigiEmu Core — Public Standard — Snapshot-verifiable.");
  }, []);
  return null;
}