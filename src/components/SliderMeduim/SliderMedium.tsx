import { useRef } from "react";
import { Navigation, Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ButtonsSlider } from "../ButtonsSlider/ButtonsSlider";
import { Slide } from "../Slide/Slide";
import { ContainerSwiperSC, CustomSwiperSC } from "./style";
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
              slidesPerView: 4,
            },
          }}
          spaceBetween={56}
          modules={[Navigation]}
        >
          {data.map((item) => (
            <Slide item={item} key={item.name} />
          ))}
        </CustomSwiperSC>
      </ContainerSwiperSC>
    </>
  );
};
