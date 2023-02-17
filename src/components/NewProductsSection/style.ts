import { media } from "@/ui";
import styled from "@emotion/styled";

export const WrapperSC = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.sliderBackground};
`;

export const ContainerSC = styled.div`
  max-width: 1920px;
  width: 100%;
`;

export const TitleSC = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  line-height: 32px;
`;

export const SliderSC = styled.div`
  position: relative;
  padding: 76px 110px;

  ${media.DESKTOP} {
    padding: 46px 80px;
  }

  ${media.LAPTOP} {
    padding: 46px 40px;
  }

  ${media.PHONE} {
    padding: 46px 14px;
  }
`;
