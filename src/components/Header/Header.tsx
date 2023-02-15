import { Colors } from "@/ui";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Burger } from "../Burger";
import { RightNavigation } from "../Navigation/RightNavigation";
import { TopNavigation } from "../Navigation/TopNavigation";
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
          <TopNavigation isOpen={isOpen} />
          <RightNavigation isOpen={isOpen} />
          <Burger isOpen={isOpen} setOpen={setOpen} color={Colors.LightGray} />
        </ContainerBottomSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
