import { SwiperSlide } from "swiper/react";
import {
  ContainerSlideSC,
  DescriptionSC,
  ImageContainerSC,
  InformationSC,
  LabelSC,
  NameSC,
  NewPriceSC,
  OldPriceSC,
  PriceSC,
  TypeSC,
} from "./style";
import { IPropsSlide } from "./types";

export const Slide = ({ item }: IPropsSlide) => {
  return (
    <SwiperSlide>
      <ContainerSlideSC>
        {item.label && <LabelSC>{item.label}</LabelSC>}
        <ImageContainerSC>{item.image}</ImageContainerSC>
        <InformationSC>
          <NameSC>{item.name}</NameSC>
          <DescriptionSC>
            <TypeSC>{item.type}</TypeSC>
            <PriceSC>
              <NewPriceSC>{item.priceNew}</NewPriceSC>
              <OldPriceSC>{item.priceOld}</OldPriceSC>
            </PriceSC>
          </DescriptionSC>
        </InformationSC>
      </ContainerSlideSC>
    </SwiperSlide>
  );
};
