"use client";

import { useEffect } from "react";

/** Bloqueia o menu de contexto (botão direito) e o arrasto de imagens na página.
 * A seleção de texto é bloqueada por CSS (user-select: none); aqui vai o que o
 * CSS não cobre, mais o selectstart como reforço em navegadores antigos. */
export function LockPage() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const block = (e: Event) => e.preventDefault();
    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    document.addEventListener("selectstart", block);

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
      document.removeEventListener("selectstart", block);
    };
  }, []);

  return null;
}
