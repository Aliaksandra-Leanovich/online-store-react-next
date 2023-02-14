import React from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "../Navigation";
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
          <Navigation />
        </ContainerBottomSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
