import { media } from "@/ui";
import styled from "@emotion/styled";

export const BlockThirdSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: space-between;

  ${media.TABLET} {
    row-gap: 20px;
    align-items: left;
  }
`;

export const TopSC = styled.div`
  display: flex;
  column-gap: 176px;

  ${media.DESKTOP} {
    column-gap: 100px;
  }

  ${media.TABLET} {
    flex-direction: column;
    row-gap: 20px;
  }
`;

export const InformationSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const TextSC = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 24px;
  text-align: right;
  color: ${(props) => props.theme.color.text2};

  ${media.TABLET} {
    text-align: left;
  }
`;

export const ContainerTextSC = styled.div`
  max-width: 708px;
  width: 100%;
`;
