import { useTranslation } from "react-i18next";
import {
  AdvantageSC,
  AdvantagesSC,
  AdvantageTextSC,
  ContainerSC,
  DecriptionSC,
  ImageSC,
  InformationSC,
  LinkSC,
  LinkTextSC,
  TextSC,
  TitleSC,
  WrapperSC,
} from "./style";
import { itemProps } from "./types";
import ImageIcon from "/public/icons/advantagesImage.svg";
import ArrowImage from "/public/icons/arrow_pink.svg";

export const AdvantagesSection = () => {
  const { t } = useTranslation();
  return (
    <WrapperSC>
      <ContainerSC>
        <InformationSC>
          <ImageSC>
            <ImageIcon />
          </ImageSC>
          <DecriptionSC>
            <TitleSC>{t("advantages.title")}</TitleSC>
            <TextSC>{t("advantages.decription")}</TextSC>
            <LinkSC>
              <LinkTextSC>{t("advantages.link")}</LinkTextSC>
              <ArrowImage />
            </LinkSC>
          </DecriptionSC>
        </InformationSC>
        <AdvantagesSC>
          {(
            t("advantages", {
              returnObjects: true,
              defaultValue: [],
            }) as []
          ).map((item: itemProps, index) => (
            <AdvantageSC key={index}>
              <AdvantageTextSC>{item.name}</AdvantageTextSC>
            </AdvantageSC>
          ))}
        </AdvantagesSC>
      </ContainerSC>
    </WrapperSC>
  );
};
