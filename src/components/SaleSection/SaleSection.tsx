import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Navigation, Swiper as SwiperType } from "swiper";
import ArrowImage from "/public/icons/arrow.svg";
import ProductImage from "/public/icons/product7.svg";
import {
  ArrowLeftSC,
  ArrowRightSC,
  ButtonSC,
  ButtonsSC,
  ContainerSC,
  ContainerSlideSC,
  ContainerSwiperSC,
  ContainerTitleSC,
  CustomSwiperSC,
  DecriptionSC,
  ImageSC,
  NameSC,
  SliderSC,
  TitleSC,
  TypeSC,
  WrapperSC,
} from "./style";
import { SwiperSlide } from "swiper/react";

const data = [
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",

    image: <ProductImage />,
  },
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",

    image: <ProductImage />,
  },
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",

    image: <ProductImage />,
  },
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",

    image: <ProductImage />,
  },
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",

    image: <ProductImage />,
  },
  {
    name: "R&B Black Food 3.7",
    type: "Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7 черных плодов",

    image: <ProductImage />,
  },
];

export const SaleSection = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperType>();
  return (
    <WrapperSC>
      <ContainerSC>
        <SliderSC>
          <ContainerTitleSC>
            <TitleSC>{t("sales.title")}</TitleSC>
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
          </ContainerTitleSC>
        </SliderSC>
        <ContainerSwiperSC>
          <CustomSwiperSC
            slidesPerView={2.02}
            centeredSlides={true}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            spaceBetween={114}
            modules={[Navigation]}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <ContainerSlideSC>
                  <ImageSC>{item.image}</ImageSC>

                  <DecriptionSC>
                    <NameSC>{item.name}</NameSC>

                    <TypeSC>{item.type}</TypeSC>
                  </DecriptionSC>
                </ContainerSlideSC>
              </SwiperSlide>
            ))}
          </CustomSwiperSC>
        </ContainerSwiperSC>
      </ContainerSC>
    </WrapperSC>
  );
};
