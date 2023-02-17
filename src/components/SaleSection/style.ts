import { media } from "@/ui";
import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const WrapperSC = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.sliderBackground};
`;

export const ContainerSC = styled.div`
  width: 100%;
`;

export const TitleSC = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  line-height: 32px;
`;

export const SliderSC = styled.div`
  width: 100%;
  max-width: 1920px;
`;

export const ContainerTitleSC = styled.div`
  padding: 0 120px;
  position: relative;

  ${media.LAPTOP} {
    padding: 0 40px;
  }

  ${media.PHONE} {
    padding: 0 14px;
  }
`;

export const CustomSwiperSC = styled(Swiper)`
  .swiper {
    width: 100%;
    display: flex;
    align-self: right;
  }

  .fullscreen .swiper-slide .backdrop {
    opacity: 0.7;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 1;
    cursor: pointer;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerSwiperSC = styled.div`
  width: 100%;
  margin-top: 24px;
  position: relative;

  ${media.TABLET} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
