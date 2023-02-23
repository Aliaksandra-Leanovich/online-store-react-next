import { Colors, media } from "@/ui";
import styled from "@emotion/styled";

export const WrapperSC = styled.div`
  width: 100%;
  max-width: 604px;
  mix-blend-mode: screen;
  filter: grayscale(100%);
`;

export const ContainerSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;

  ${media.DESKTOP} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
  }

  ${media.LAPTOP} {
    display: flex;
    column-gap: 50px;
    margin: 30px 0;
  }

  ${media.TABLET} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
  }

  ${media.PHONE} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
  }
`;
