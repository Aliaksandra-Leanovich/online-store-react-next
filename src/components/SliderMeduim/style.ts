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
