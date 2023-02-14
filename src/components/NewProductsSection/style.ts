import { media } from "@/ui";
import styled from "@emotion/styled";

export const WrapperSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerSC = styled.div`
  max-width: 1920px;
  width: 100%;

  padding: 76px 120px;
  ${media.DESKTOP} {
    padding: 46px 80px;
  }
  ${media.LAPTOP} {
    padding: 46px 40px;
  }
`;
export const TitleSC = styled.p`
  font-family: "Open Sans", sans-serif;

  font-size: 28px;
  line-height: 32px;
`;

export const SliderSC = styled.div`
  position: relative;

  padding: 0 110px;
  ${media.DESKTOP} {
    padding: 0 80px;
  }
  ${media.LAPTOP} {
    padding: 0 40px;
  }
`;
