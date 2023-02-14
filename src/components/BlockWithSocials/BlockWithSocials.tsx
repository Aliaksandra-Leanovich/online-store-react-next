import React from "react";
import { useTranslation } from "react-i18next";
import { BlockTitleSC, CategorySC } from "../BlockCategories/style";
import { IItem } from "../Footer/types";
import Payments from "/public/icons/payments.png";
import {
  BlockThirdSC,
  InformationSC,
  PaymentSC,
  SocialsSC,
  TextSC,
  TopSC,
} from "./style";

export const BlockWithSocials = () => {
  const { t } = useTranslation();

  return (
    <BlockThirdSC>
      <TopSC>
        <InformationSC>
          <BlockTitleSC>{t("footer.information")}</BlockTitleSC>
          {(
            t("footer.informations", {
              returnObjects: true,
              defaultValue: [],
            }) as []
          ).map(({ name }: IItem) => (
            <CategorySC key={name}>{name}</CategorySC>
          ))}
        </InformationSC>
        <SocialsSC>
          <BlockTitleSC>{t("footer.socials")}</BlockTitleSC>
        </SocialsSC>
      </TopSC>
      <PaymentSC src={Payments.src} />
      <TextSC>{t("footer.text")}</TextSC>
    </BlockThirdSC>
  );
};
