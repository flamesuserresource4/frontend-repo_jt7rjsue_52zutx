"use client";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Providers({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored) {
      setTheme(stored);
      if (stored === 'dark') document.documentElement.classList.add('dark');
    }
  }, []);
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
