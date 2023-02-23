import React from "react";
import { ContainerSC, WrapperSC } from "./style";
import MirImage from "public/icons/mir.svg";
import GPayImage from "public/icons/googlePay.svg";
import VisaImage from "public/icons/visa.svg";
import WebmoneyImage from "public/icons/webmoney.svg";
import YandexImage from "public/icons/yandex.svg";
import MasterCardImage from "public/icons/masterCard.svg";

export const Payments = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <MirImage />
        <GPayImage />
        <VisaImage />
        <WebmoneyImage />
        <YandexImage />
        <MasterCardImage />
      </ContainerSC>
    </WrapperSC>
  );
};
