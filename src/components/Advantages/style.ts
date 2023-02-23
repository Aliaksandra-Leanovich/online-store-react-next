import { media } from "@/ui";
import styled from "@emotion/styled";

export const AdvantagesSC = styled.div`
  display: flex;
  column-gap: 26px;

  ${media.TABLET} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
    column-gap: 20px;
  }

  ${media.PHONE} {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
`;
