import Head from "next/head";
import "../i18n/i18n";
import { useTheme } from "@/context/ThemeToggleContext";
import { theme } from "@/ui/Themes";
import { ThemeProvider } from "@emotion/react";
import { IThemeContextProviderProps } from "@/context/types";
import { useTranslation } from "react-i18next";

const MainLayout = ({ children }: IThemeContextProviderProps) => {
  const activeTheme = useTheme();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={activeTheme ? theme.dark : theme.light}>
      <Head>
        <title>{t("title")}</title>
        <meta
          name="description"
          content="template project with setup for theme switching"
        />
      </Head>
      {children}
    </ThemeProvider>
  );
};

export default MainLayout;
