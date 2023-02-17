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
  display: flex;
  flex-direction: column;
  row-gap: 36px;

  ${media.DESKTOP} {
    padding: 76px 80px;
  }

  ${media.LAPTOP} {
    padding: 76px 40px;
  }

  ${media.TABLET} {
    padding: 76px 20px;
  }

  ${media.PHONE} {
    padding: 76px 14px;
  }
`;

export const InformationSC = styled.div`
  display: flex;
  column-gap: 72px;

  ${media.LAPTOP} {
    flex-direction: column;
    column-gap: 0;
    row-gap: 20px;
  }
`;

export const DecriptionSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  max-width: 770px;

  ${media.DESKTOP} {
    max-width: 570px;
  }
`;

export const ImageSC = styled.div`
  width: 100%;
  max-width: 784px;

  ${media.DESKTOP} {
    max-width: 584px;
  }
`;

export const TitleSC = styled.p`
  font-size: 32px;
  line-height: 34px;
  color: ${(props) => props.theme.color.primary};

  ${media.PHONE} {
    font-size: 22px;
    line-height: 24px;
  }
`;

export const TextSC = styled.p`
  font-size: 16px;
  line-height: 18px;
  color: ${(props) => props.theme.color.primary};

  ${media.PHONE} {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const LinkSC = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
  svg {
    path {
      fill: ${(props) => props.theme.color.labelSlider};
    }
  }
`;

export const LinkTextSC = styled.p`
  color: ${(props) => props.theme.color.labelSlider};
`;
