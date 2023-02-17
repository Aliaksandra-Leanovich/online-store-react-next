import { media } from "@/ui";
import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const CustomSwiperSC = styled(Swiper)`
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
  max-width: 378px;
  width: 100%;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  row-gap: 98px;
  position: relative;
`;

export const ImageContainerSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ImageSC = styled.img`
  width: 100%;
  max-width: 294px;
`;

export const InformationSC = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionSC = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceSC = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

export const NameSC = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.priceSliderNew};
`;

export const TypeSC = styled.p`
  color: ${(props) => props.theme.color.textSlider2};
`;

export const NewPriceSC = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  line-height: 19px;
  color: ${(props) => props.theme.color.priceSliderOld};
`;

export const OldPriceSC = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.color.priceSliderOld};
`;

export const LabelSC = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.secondary};
  width: 56px;
  height: 56px;
  background-color: ${(props) => props.theme.color.labelSlider};
  display: flex;
  align-items: center;
  justify-content: center;
`;
