import { Colors, media } from "../../ui";
import styled from "@emotion/styled";

export const StyledHeaderSC = styled.header`
  width: 100%;
  max-width: 1920px;
  z-index: 2;
  top: 0;
  left: 0;

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;

  margin: 0 auto;
`;
export const WrapperSC = styled.div`
  width: 100%;
`;

export const ContainerTopSC = styled.div`
  width: 100%;

  background-color: ${Colors.LightBlack};

  padding: 16px 110px;
  ${media.DESKTOP} {
    padding: 16px 34px;
  }
`;
export const InformationSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContainerBottomSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  column-gap: 40px;
  padding: 30px 110px;
  ${media.DESKTOP} {
    padding: 30px 34px;
  }
`;

export const LogoContainerSC = styled.a`
  max-width: 124px;
  width: 100%;
  cursor: pointer;
`;
export const PhoneNumberSC = styled.p`
  font-size: 22px;
  line-height: 33px;

  color: ${Colors.White};
`;