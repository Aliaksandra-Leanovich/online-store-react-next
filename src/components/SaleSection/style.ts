import { Colors, media } from "@/ui";
import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const WrapperSC = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const CustomSwiperSC = styled(Swiper)`
  .swiper {
    width: 100%;
    display: flex;
    align-self: right;
  }
  .fullscreen .swiper-slide .backdrop {
    background: #000;
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

export const ContainerSlideSC = styled.div`
  max-width: 990px;
  width: 100%;
  height: 534px;
  display: flex;
  flex-direction: column;
`;

export const ButtonsSC = styled.div`
  align-self: right;
  display: flex;
  column-gap: 16px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ButtonSC = styled.button`
  width: 24px;
`;

export const ArrowLeftSC = styled.div`
  &:hover {
    svg {
      path {
        fill: ${Colors.DarkBlack};
      }
    }
  }
`;

export const ArrowRightSC = styled.div`
  transform: rotate(180deg);
  &:hover {
    svg {
      path {
        fill: ${Colors.DarkBlack};
      }
    }
  }
`;

export const DecriptionSC = styled.div`
  position: absolute;
  bottom: 6%;
  left: 2%;
`;

export const NameSC = styled.p`
  font-weight: 700;
  font-size: 48px;
  line-height: 62px;
  letter-spacing: 0.0375em;
  text-transform: uppercase;
`;

export const TypeSC = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${Colors.LightGraySlider};
`;

export const ImageSC = styled.div`
  position: relative;
  width: 100%;
`;
