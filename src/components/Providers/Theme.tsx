"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const MyThemeProvider = NextThemesProvider;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <MyThemeProvider {...props}>{children}</MyThemeProvider>;
}
