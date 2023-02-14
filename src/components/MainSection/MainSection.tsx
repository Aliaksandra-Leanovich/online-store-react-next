import React from "react";
import {
  Back,
  BlockSC,
  ButtonSC,
  ContainerSC,
  DescroptionSC,
  TitleSC,
  WrapperSC,
} from "./style";
import BackgroundImage from "/public/icons/mainBackground.svg";
import { useTranslation } from "react-i18next";

export const MainSection = () => {
  const { t } = useTranslation();
  return (
    <WrapperSC>
      <ContainerSC>
        <Back>
          <BackgroundImage />
        </Back>
        <BlockSC>
          <TitleSC>{t("main.title")}</TitleSC>
          <DescroptionSC>{t("main.decription")}</DescroptionSC>
          <ButtonSC>{t("main.button")}</ButtonSC>
        </BlockSC>
      </ContainerSC>
    </WrapperSC>
  );
};
