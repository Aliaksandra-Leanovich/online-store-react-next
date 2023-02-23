import React from "react";
import { useTranslation } from "react-i18next";
import { ContainerSC, TitleSC, WrapperSC } from "./style";
import TelegramIcon from "public/icons/telegramm.svg";
import OkIcon from "public/icons/ok.svg";
import FacebookIcon from "public/icons/facebook.svg";
import WhatsappIcon from "public/icons/watsapp.svg";
import ViberIcon from "public/icons/viber.svg";
import InstagramIcon from "public/icons/instagramm.svg";
import VkIcon from "public/icons/vk.svg";

export const SocialMedia = () => {
  const { t } = useTranslation();

  return (
    <WrapperSC>
      <TitleSC>{t("footer.socials")}</TitleSC>
      <ContainerSC>
        <TelegramIcon />
        <OkIcon />
        <FacebookIcon />
        <WhatsappIcon />
        <ViberIcon />
        <InstagramIcon />
        <VkIcon />
      </ContainerSC>
    </WrapperSC>
  );
};
