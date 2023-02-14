import React from "react";
import { useTranslation } from "react-i18next";
import {
  AddresSC,
  BlockFirstFooterSC,
  BlockFirstSC,
  BlockSecondSC,
  BlockThirdSC,
  BlockTitleSC,
  BlockWithLogoSC,
  CategorySC,
  ContainerSC,
  EmailSC,
  InformationSC,
  LogoSC,
  PaymentSC,
  PhoneSC,
  SocialsSC,
  TextSC,
  TopSC,
  WrapperSC,
} from "./style";
import { IItem } from "./types";
import Logo from "/public/icons/logo.svg";
import Payments from "/public/icons/payments.png";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <WrapperSC>
      <ContainerSC>
        <BlockFirstSC>
          <BlockWithLogoSC>
            <Logo />
            <PhoneSC>{t("footer.phone")}</PhoneSC>
            <EmailSC>{t("footer.email")}</EmailSC>
            <AddresSC>{t("footer.address")}</AddresSC>
          </BlockWithLogoSC>
          <BlockFirstFooterSC>{t("footer.content")}</BlockFirstFooterSC>
        </BlockFirstSC>
        <BlockSecondSC>
          <BlockTitleSC>{t("footer.title")}</BlockTitleSC>
          {(
            t("footer.categories", {
              returnObjects: true,
              defaultValue: [],
            }) as []
          ).map((item: IItem, index) => (
            <CategorySC key={index}>{item.name}</CategorySC>
          ))}
        </BlockSecondSC>
        <BlockThirdSC>
          <TopSC>
            <InformationSC>
              <BlockTitleSC>{t("footer.information")}</BlockTitleSC>
              {(
                t("footer.informations", {
                  returnObjects: true,
                  defaultValue: [],
                }) as []
              ).map((item: IItem, index) => (
                <CategorySC key={index}>{item.name}</CategorySC>
              ))}
            </InformationSC>
            <SocialsSC>
              <BlockTitleSC>{t("footer.socials")}</BlockTitleSC>
            </SocialsSC>
          </TopSC>
          <PaymentSC src={Payments.src} />
          <TextSC>{t("footer.text")}</TextSC>
        </BlockThirdSC>
      </ContainerSC>
    </WrapperSC>
  );
};
