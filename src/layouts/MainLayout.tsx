import { useTheme } from '@/context/ThemeToggleContext';
import { IThemeContextProviderProps } from '@/context/types';
import { useGetTimezone } from '@/hooks/use-get-timezone.hook';
import { useSetTheme } from '@/hooks/use-set-theme.hook';
import { theme } from '@/ui/Themes';
import { isDayTime } from '@/utilis/isDaytime';
import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n';

const MainLayout = ({ children }: IThemeContextProviderProps) => {
  const { t } = useTranslation();

  const { activeTheme, setActiveTheme } = useTheme();
  const daytime = isDayTime();
  const timezon = useGetTimezone();
  const timezoneTheme = useSetTheme(timezon);
  const themeToogle = activeTheme ? theme.light : theme.dark;

  useEffect(() => {
    if (daytime) {
      setActiveTheme(true);
    }
    document.body.style.backgroundColor = activeTheme ? '#ffffff' : '#000000';
  }, [activeTheme, daytime]);

  useEffect(() => {
    if (timezoneTheme === 'light') {
      setActiveTheme(true);
    }
    document.body.style.backgroundColor = activeTheme ? '#ffffff ' : '#000000';
  }, [timezoneTheme]);

  return (
    <ThemeProvider theme={themeToogle}>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="template project with setup for theme switching" />
      </Head>
      {children}
    </ThemeProvider>
  );
};

export default MainLayout;
