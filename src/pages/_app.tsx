import { ThemeToggleProvider } from "@/context/ThemeToggleContext";
import MainLayout from "@/layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeToggleProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeToggleProvider>
  );
}
