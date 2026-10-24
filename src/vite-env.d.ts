/// <reference types="vite/client" />

export interface SplitTextInstance {
  words?: HTMLElement[];
  lines?: HTMLElement[];
  chars?: HTMLElement[];
  revert?: () => void;
}

export interface SplitTextStatic {
  create: (
    target: string | Element,
    options: {
      type?: string;
      mask?: string;
      autoSplit?: boolean;
      linesClass?: string;
      onSplit?: (self: SplitTextInstance) => unknown;
    }
  ) => SplitTextInstance;
}

declare global {
  interface Window {
    SplitText?: SplitTextStatic;
  }
}
