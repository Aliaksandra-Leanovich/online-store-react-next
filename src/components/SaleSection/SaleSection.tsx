import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation, Swiper as SwiperType } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import { ButtonsSlider } from '../ButtonsSlider/ButtonsSlider';
import { SaleSlide } from '../SaleSlide/SaleSlide';
import { breakpoints, data } from './config';
import {
  ContainerSC,
  ContainerSwiperSC,
  ContainerTitleSC,
  CustomSwiperSC,
  SliderSC,
  TitleSC,
  WrapperSC
} from './style';

export const SaleSection = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperType>();

  return (
    <WrapperSC>
      <ContainerSC>
        <SliderSC>
          <ContainerTitleSC>
            <TitleSC>{t('sales.title')}</TitleSC>
            <ButtonsSlider swiperRef={swiperRef} />
          </ContainerTitleSC>
        </SliderSC>
        <ContainerSwiperSC>
          <CustomSwiperSC
            slidesPerView={1}
            centeredSlides={true}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={breakpoints}
            loop={true}
            spaceBetween={114}
            modules={[Navigation]}>
            {data.map((item) => (
              <SwiperSlide key={uuidv4()}>
                <SaleSlide item={item} />
              </SwiperSlide>
            ))}
          </CustomSwiperSC>
        </ContainerSwiperSC>
      </ContainerSC>
    </WrapperSC>
  );
};
