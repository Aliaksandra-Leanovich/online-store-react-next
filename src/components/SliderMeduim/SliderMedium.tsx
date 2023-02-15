import { useRef } from "react";
import { Navigation, Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { ButtonsSlider } from "../ButtonsSlider/ButtonsSlider";
import {
  ContainerSlideSC,
  ContainerSwiperSC,
  CustomSwiperSC,
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
import { IData } from "./types";

export const SliderMedium = ({ data }: IData) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <>
      <ButtonsSlider swiperRef={swiperRef} />
      <ContainerSwiperSC>
        <CustomSwiperSC
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1152: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={56}
          modules={[Navigation]}
        >
          {data.map((item) => (
            <SwiperSlide key={item.name}>
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
          ))}
        </CustomSwiperSC>
      </ContainerSwiperSC>
    </>
  );
};
