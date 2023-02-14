import React from "react";
import ArrowImage from "/public/icons/arrow.svg";
import { SwiperSlide } from "swiper/react";
import {
  ContainerSlideSC,
  DecriptionSC,
  ImageSC,
  NameSC,
  TypeSC,
} from "./style";
import { IPropsSlide } from "./types";

export const SaleSlide = ({ item }: IPropsSlide) => {
  return (
    <SwiperSlide>
      <ContainerSlideSC>
        <ImageSC>{item.image}</ImageSC>
        <DecriptionSC>
          <NameSC>{item.name}</NameSC>
          <TypeSC>{item.type}</TypeSC>
        </DecriptionSC>
      </ContainerSlideSC>
    </SwiperSlide>
  );
};
