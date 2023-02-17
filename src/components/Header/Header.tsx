import { useTheme, useThemeUpdate } from "@/context/ThemeToggleContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Burger } from "../Burger";
import { RightNavigation } from "../Navigation/RightNavigation";
import { TopNavigation } from "../Navigation/TopNavigation";
import { ButtonTheme } from "../SlideMedium/style";
import {
  ContainerBottomSC,
  ContainerTopSC,
  InformationSC,
  LogoContainerSC,
  PhoneNumberSC,
  StyledHeaderSC,
  WrapperSC,
} from "./style";
import Logo from "/public/icons/logo.svg";

export const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const activeTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const handleClick = () => {
    toggleTheme();
    document.body.style.background = !activeTheme ? "#000000" : "#ffffff";
  };

  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerTopSC>
          <InformationSC>
            <PhoneNumberSC>{t("header.phone")}</PhoneNumberSC>
          </InformationSC>
        </ContainerTopSC>
        <ContainerBottomSC>
          <LogoContainerSC>
            <Logo />
          </LogoContainerSC>
          <ButtonTheme onClick={handleClick}>Toggle Theme</ButtonTheme>
          <TopNavigation isOpen={isOpen} />
          <RightNavigation isOpen={isOpen} />
          <Burger isOpen={isOpen} setOpen={setOpen} />
        </ContainerBottomSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
