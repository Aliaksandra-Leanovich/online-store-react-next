import { Colors, media } from "@/ui";
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

  color: #1a1a1a;
`;

export const TypeSC = styled.p`
  font-size: 16px;
  line-height: 18px;

  color: #5c5c66;
`;

export const NewPriceSC = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #1a1a1a;
`;
export const OldPriceSC = styled.p`
  font-family: "Roboto", sans-serif;

  font-size: 14px;
  line-height: 16px;

  color: #bcbcbc;
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

  color: ${Colors.White};

  width: 56px;
  height: 56px;

  background-color: #ff3465;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonsSC = styled.div`
  align-self: right;

  column-gap: 16px;

  position: absolute;
  top: 0;
  right: 6%;
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

  &:active {
    svg {
      path {
        fill: ${Colors.DarkBlack};
      }
    }
  }
`;
