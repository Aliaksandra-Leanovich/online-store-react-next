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
  height: 600px;
  padding: 76px 120px;
  display: flex;
  column-gap: 200px;
  ${media.DESKTOP} {
    column-gap: 140px;
    padding: 76px 80px;
  }
  ${media.LAPTOP} {
    column-gap: 100px;
    padding: 76px 40px;
  }
`;
