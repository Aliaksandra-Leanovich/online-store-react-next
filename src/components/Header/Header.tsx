import React from "react";
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
  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerTopSC>
          <InformationSC>
            <PhoneNumberSC>8 495 259 25 00</PhoneNumberSC>
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
