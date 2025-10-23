"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <NextThemesProvider forcedTheme="light" attribute="class">{children}</NextThemesProvider>;
}