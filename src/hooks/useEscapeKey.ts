'use client';

import { useEffect, useRef } from 'react';

/**
 * Calls `handler` when Escape is pressed. Like `useOnClickOutside`, the
 * handler is kept in a ref so an inline arrow function won't cause the
 * listener to be re-attached on every render.
 */
export function useEscapeKey(handler: () => void, enabled = true) {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    if (!enabled) return;

    const listener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handlerRef.current();
    };

    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [enabled]);
}
