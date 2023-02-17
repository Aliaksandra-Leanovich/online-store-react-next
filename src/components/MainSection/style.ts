import { media } from "@/ui";
import styled from "@emotion/styled";

export const WrapperSC = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 166px;
`;

export const BlockSC = styled.div`
  padding: 80px 0 314px 266px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 42px;

  ${media.TABLET} {
    max-width: 300px;
    padding: 80px 0 314px 46px;
  }

  ${media.PHONE} {
    max-width: 200px;
    padding: 80px 0 314px 14px;
  }
`;

export const Back = styled.div`
  position: absolute;
  background-position: center;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 1;
  margin: 0 auto;
`;

export const ContainerSC = styled.div`
  width: 100%;
  max-width: 1920px;
  position: relative;
`;

export const TitleSC = styled.p`
  font-weight: 600;
  font-size: 99px;
  line-height: 110px;
  z-index: 2;

  ${media.TABLET} {
    font-size: 52px;
  }
`;

export const DescroptionSC = styled.p`
  font-size: 24px;
  line-height: 26px;
  z-index: 2;
  ${media.TABLET} {
    font-size: 20px;
  }
`;

export const ButtonSC = styled.button`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  width: 100%;
  max-width: 268px;
  padding: 16px 0;
  text-align: center;
  z-index: 2;

  ${media.TABLET} {
    max-width: 208px;
  }
`;
