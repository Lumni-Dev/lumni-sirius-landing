"use client";

import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";

type TopLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "onClick"> & {
  children: ReactNode;
};

/** Always scrolls to document top — plain `#top` stops working once the hash is set. */
export function TopLink({ children, ...props }: TopLinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      const { pathname, search } = window.location;
      window.history.replaceState(null, "", `${pathname}${search}`);
    }
  };

  return (
    <a {...props} href="#top" onClick={onClick}>
      {children}
    </a>
  );
}
