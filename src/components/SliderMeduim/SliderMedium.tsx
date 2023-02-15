import { useRef } from "react";
import { Navigation, Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { ButtonsSlider } from "../ButtonsSlider/ButtonsSlider";
import { SlideMedium } from "../SlideMedium/SlideMedium";
import { ContainerSwiperSC, CustomSwiperSC } from "./style";
import { IData } from "./types";

const breakpoints = {
  768: {
    slidesPerView: 2,
  },
  1152: {
    slidesPerView: 3,
  },
  1440: {
    slidesPerView: 4,
  },
};

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
          breakpoints={breakpoints}
          spaceBetween={56}
          modules={[Navigation]}
        >
          {data.map((item) => (
            <SwiperSlide key={item.name}>
              <SlideMedium item={item} />
            </SwiperSlide>
          ))}
        </CustomSwiperSC>
      </ContainerSwiperSC>
    </>
  );
};
