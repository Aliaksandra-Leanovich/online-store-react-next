import { media } from "@/ui";
import styled from "@emotion/styled";

export const WrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  max-width: 250px;
`;

export const ContainerSC = styled.div`
  display: flex;
  column-gap: 10px;

  ${media.DESKTOP} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
    margin-bottom: 30px;
  }
  ${media.TABLET} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
    margin-bottom: 30px;
  }
  ${media.PHONE} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
    margin-bottom: 30px;
  }
`;

export const TitleSC = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  line-height: 33px;
`;
