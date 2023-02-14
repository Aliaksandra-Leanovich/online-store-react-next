import { Colors } from "@/ui";
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
`;
export const InformationSC = styled.div`
  display: flex;
  column-gap: 72px;
`;
export const DecriptionSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  width: 100%;
  max-width: 770px;
`;

export const ImageSC = styled.div`
  width: 100%;
  max-width: 784px;
`;
export const TitleSC = styled.p`
  font-size: 32px;
  line-height: 34px;
`;
export const TextSC = styled.p`
  font-size: 16px;
  line-height: 18px;
`;
export const LinkSC = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
`;
export const LinkTextSC = styled.p`
  font-size: 16px;
  line-height: 18px;

  color: ${Colors.Pink};
`;

export const AdvantagesSC = styled.div`
  display: flex;
  column-gap: 26px;
`;

export const AdvantageSC = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  padding: 16px 160px 16px 32px;
`;

export const AdvantageTextSC = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${Colors.LightGray};
`;
