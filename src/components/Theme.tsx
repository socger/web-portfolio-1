"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

// Corregir la tipificación usando ReactNode
const Theme = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  if (!state) {
    return null;
  }

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};
export default Theme;
