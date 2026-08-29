'use client';

import { useEffect, useState } from 'react';

/**
 * True only after the component has mounted on the client. Needed before
 * rendering a `createPortal` into `document.body`, since `document` isn't
 * available during server rendering.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
