import { ThemeToggleProvider } from '@/context/ThemeToggleContext';
import MainLayout from '@/layouts/MainLayout';
import { globalStyles } from '@/styles/globalStyles';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeToggleProvider>
      <MainLayout>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </MainLayout>
    </ThemeToggleProvider>
  );
}
