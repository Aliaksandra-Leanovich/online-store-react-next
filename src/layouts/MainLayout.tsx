import { useTheme } from '@/context/ThemeToggleContext';
import { IThemeContextProviderProps } from '@/context/types';
import { useGetTimezone } from '@/hooks/use-get-timezone.hook';
import { useSetTheme } from '@/hooks/use-set-theme.hook';
import { darkTheme, grayTheme, lightTheme } from '@/ui/Themes';
import { isDayTime } from '@/utilis/isDaytime';
import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n';

const MainLayout = ({ children }: IThemeContextProviderProps) => {
  const { t } = useTranslation();

  const { activeTheme, setActiveTheme } = useTheme();
  const [mainTheme, setMainTheme] = useState(darkTheme);
  const daytime = isDayTime();
  const timezon = useGetTimezone();
  const timezoneTheme = useSetTheme(timezon);
  const themeToogle = activeTheme ? grayTheme : darkTheme;

  useEffect(() => {
    if (daytime) {
      setActiveTheme(true);
      setMainTheme(lightTheme);
    }
    document.body.style.backgroundColor = activeTheme ? '#ffffff' : '#000000';
  }, [activeTheme, daytime]);

  useEffect(() => {
    if (timezoneTheme === 'light') {
      setActiveTheme(true);
      setMainTheme(grayTheme);
    }
    document.body.style.backgroundColor = activeTheme ? '#3d3d3d ' : '#000000';
  }, [timezoneTheme]);

  return (
    <ThemeProvider theme={mainTheme}>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="template project with setup for theme switching" />
      </Head>
      {children}
    </ThemeProvider>
  );
};

export default MainLayout;
