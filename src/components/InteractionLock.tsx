"use client";

import { useEffect } from "react";

/** Blocks text selection helpers and the context menu (right-click). */
export function InteractionLock() {
  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    const onSelectStart = (event: Event) => {
      event.preventDefault();
    };
    const onDragStart = (event: DragEvent) => {
      event.preventDefault();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const block =
        (event.ctrlKey || event.metaKey) &&
        (key === "c" || key === "x" || key === "a" || key === "u" || key === "s");
      if (block) event.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("selectstart", onSelectStart);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("selectstart", onSelectStart);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
