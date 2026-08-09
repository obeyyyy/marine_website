'use client';

import { useEffect, useRef, type RefObject } from 'react';

/**
 * Calls `handler` when a mousedown occurs outside of every element in
 * `refs`. Accepts a single ref or an array — an array is needed when the
 * "menu" is split across two DOM subtrees, e.g. a trigger plus a panel
 * rendered through a portal.
 *
 * The handler is kept in a ref so callers can pass an inline arrow function
 * without needing `useCallback` — the listener is only attached/removed when
 * `enabled` changes, not on every render.
 */
export function useOnClickOutside<T extends HTMLElement>(
  refs: RefObject<T | null> | RefObject<T | null>[],
  handler: (event: MouseEvent) => void,
  enabled = true
) {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    if (!enabled) return;
    const refList = Array.isArray(refs) ? refs : [refs];

    const listener = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInside = refList.some((ref) => ref.current?.contains(target));
      if (clickedInside) return;
      handlerRef.current(event);
    };

    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
    // `refs` are stable useRef objects; only `enabled` should retrigger this.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);
}
