import React from "react";
import { useTranslation } from "react-i18next";
import { BlockTitleSC, CategorySC } from "../BlockCategories/style";
import { IItem } from "../Footer/types";
import { Payments } from "../Payments/Payments";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import {
  BlockThirdSC,
  ContainerTextSC,
  InformationSC,
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
        <SocialMedia />
      </TopSC>
      <Payments />
      <ContainerTextSC>
        <TextSC>{t("footer.text")}</TextSC>
      </ContainerTextSC>
    </BlockThirdSC>
  );
};
