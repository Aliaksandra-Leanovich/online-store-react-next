import { MutableRefObject } from "react";
import { Swiper as SwiperType } from "swiper";

export interface IButtonsProps {
  swiperRef: MutableRefObject<SwiperType | undefined>;
}
