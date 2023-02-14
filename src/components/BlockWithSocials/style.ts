import { Colors } from "@/ui";
import styled from "@emotion/styled";

export const BlockThirdSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: space-between;
`;

export const TopSC = styled.div`
  display: flex;
  column-gap: 176px;
`;

export const InformationSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SocialsSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const PaymentSC = styled.img`
  width: 100%;
  max-width: 604px;
`;

export const TextSC = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 24px;
  text-align: right;
  color: ${Colors.LightGray2};
`;
