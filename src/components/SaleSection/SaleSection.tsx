import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Navigation, Swiper as SwiperType } from "swiper";
import ProductImage from "/public/icons/product7.svg";
import {
  ContainerSC,
  ContainerSwiperSC,
  ContainerTitleSC,
  CustomSwiperSC,
  SliderSC,
  TitleSC,
  WrapperSC,
} from "./style";
import { ButtonsSlider } from "../ButtonsSlider/ButtonsSlider";
import { SaleSlide } from "../SaleSlide/SaleSlide";

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
            <ButtonsSlider swiperRef={swiperRef} />
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
            {data.map((item) => (
              <SaleSlide item={item} key={item.name} />
            ))}
          </CustomSwiperSC>
        </ContainerSwiperSC>
      </ContainerSC>
    </WrapperSC>
  );
};
