"use client";

import React, { useCallback, useEffect, useRef } from "react";

function isTypingInInput(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName?.toLowerCase();
  return tag === "input" || tag === "textarea" || el.isContentEditable;
}

export function EasterEggProvider({ children }: { children: React.ReactNode }) {
  const timeoutRef = useRef<number | null>(null);
  const lastTapRef = useRef<number>(0);

  const setRed = (on: boolean) => {
    document.body.classList.toggle("egg-red", on);
  };

  const trigger = useCallback((ms = 12_000) => {
    setRed(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setRed(false), ms);
  }, []);

  const toggle = useCallback(() => {
    const on = !document.body.classList.contains("egg-red");
    setRed(on);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  }, []);

  // Refs that always point to the latest callbacks for use in event listeners
  const triggerRef = useRef(trigger);
  const toggleRef = useRef(toggle);

  useEffect(() => {
    triggerRef.current = trigger;
  }, [trigger]);

  useEffect(() => {
    toggleRef.current = toggle;
  }, [toggle]);

  // Secret typing: "xxx" (or "redpearl")
  useEffect(() => {
    let buf = "";
    const onKeyDown = (e: KeyboardEvent) => {
      if (isTypingInInput(e.target)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const k = e.key;
      if (!k || k.length !== 1) return;

      buf = (buf + k).slice(-16).toLowerCase();
      if (buf.includes("xxx") || buf.includes("redpearl")) {
        triggerRef.current();
        buf = "";
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Shake detection
  useEffect(() => {
    let last = 0;

    const onMotion: EventListener = (ev) => {
      const e = ev as DeviceMotionEvent;
      const acc = e.accelerationIncludingGravity;
      if (!acc) return;

      const x = acc.x ?? 0;
      const y = acc.y ?? 0;
      const z = acc.z ?? 0;

      const mag = Math.sqrt(x * x + y * y + z * z);
      const THRESHOLD = 18;

      const now = Date.now();
      if (mag > THRESHOLD && now - last > 900) {
        last = now;
        triggerRef.current();
      }
    };

    window.addEventListener("devicemotion", onMotion);
    return () => window.removeEventListener("devicemotion", onMotion);
  }, []);

  // Double-tap/click on the pearl itself
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Click might happen on a descendant; climb up
      const el = target.closest(".core-mark") as HTMLElement | null;
      if (!el) return;

      const now = Date.now();
      if (now - lastTapRef.current < 320) {
        toggleRef.current();
        lastTapRef.current = 0;
      } else {
        lastTapRef.current = now;
      }
    };

    document.addEventListener("click", handler, true);
    document.addEventListener("touchend", handler, true);

    return () => {
      document.removeEventListener("click", handler, true);
      document.removeEventListener("touchend", handler, true);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return <>{children}</>;
}
