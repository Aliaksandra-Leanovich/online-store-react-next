import { useRef } from "react";
import { Navigation, Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import {
  ArrowLeftSC,
  ArrowRightSC,
  ButtonSC,
  ButtonsSC,
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
import ArrowImage from "/public/icons/arrow.svg";

export const SliderMedium = ({ data }: IData) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <>
      <ButtonsSC>
        <ButtonSC onClick={() => swiperRef.current?.slidePrev()}>
          <ArrowLeftSC>
            <ArrowImage />
          </ArrowLeftSC>
        </ButtonSC>
        <ButtonSC onClick={() => swiperRef.current?.slideNext()}>
          <ArrowRightSC>
            <ArrowImage />
          </ArrowRightSC>
        </ButtonSC>
      </ButtonsSC>
      <ContainerSwiperSC>
        <CustomSwiperSC
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          breakpoints={{
            1152: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={56}
          modules={[Navigation]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
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
