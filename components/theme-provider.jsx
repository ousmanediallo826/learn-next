'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"           // Adds class="dark" to <html> for dark mode
      defaultTheme="system"      // Follows system preference by default
      enableSystem={true}        // Enables system-based theming
      disableTransitionOnChange  // Optional: avoids flickering
    >
      {children}
    </NextThemesProvider>
  )
}
