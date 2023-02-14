import { Colors, media } from "@/ui";
import styled from "@emotion/styled";

export const WrapperSC = styled.section`
  max-width: 1920px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ContainerSC = styled.div`
  padding: 76px 120px 76px 430px;
  position: relative;
  ${media.DESKTOP} {
    padding: 76px 80px 76px 320px;
  }
`;

export const BlockSC = styled.div`
  padding: 98px 280px 98px 433px;
  background: #f3f3f3;
  ${media.DESKTOP} {
    padding: 76px 180px 76px 330px;
  }
`;

export const TitleSC = styled.p`
  font-weight: 700;
  font-size: 48px;
  line-height: 53px;
`;

export const TextSC = styled.p`
  font-size: 22px;
  line-height: 29px;
  color: #5a5a5a;
`;

export const FormSC = styled.form`
  width: 100%;
  max-width: 530px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const InputSC = styled.input`
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
  background-color: transparent;
  padding: 8px 2px;
  &::placeholder {
    font-size: 22px;
    line-height: 29px;
    color: #9a9a9a;
  }
`;

export const ButtonSC = styled.button`
  background-color: ${Colors.DarkBlack};
  color: ${Colors.White};
  width: 100%;
  padding: 16px 0;
  text-align: center;
  font-size: 22px;
  line-height: 29px;
  letter-spacing: 0.0375em;
  color: ${Colors.White};
`;

export const ImageSC = styled.div`
  position: absolute;
  top: 18%;
  left: 2%;
  width: 790px;
  height: 452px;
  ${media.DESKTOP} {
    width: 490px;
    left: 8%;
  }
`;

export const InformationSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 48px;
  width: 100%;
  max-width: 540px;
`;
