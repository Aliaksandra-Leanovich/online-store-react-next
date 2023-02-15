import { Colors, media } from "@/ui";
import styled from "@emotion/styled";

export const AdvantageSC = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  padding: 16px 160px 16px 32px;

  ${media.DESKTOP} {
    max-width: 300px;
    padding: 16px 0 16px 32px;
  }

  ${media.LAPTOP} {
    max-width: 280px;
    padding: 16px 0 16px 32px;
  }

  ${media.TABLET} {
    max-width: 220px;
    padding: 16px 0 16px 10px;
  }
`;

export const AdvantageTextSC = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${Colors.LightGray};
`;
