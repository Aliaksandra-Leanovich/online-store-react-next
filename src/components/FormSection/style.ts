import { media } from "@/ui";
import styled from "@emotion/styled";

export const WrapperSC = styled.section`
  max-width: 1920px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  background-color: ${(props) => props.theme.color.secondary};
`;

export const ContainerSC = styled.div`
  padding: 76px 120px 76px 430px;
  position: relative;

  ${media.DESKTOP} {
    padding: 76px 80px 76px 320px;
  }

  ${media.LAPTOP} {
    padding: 76px 40px 76px 220px;
  }

  ${media.TABLET} {
    padding: 76px 6px;
  }

  ${media.PHONE} {
    padding: 76px 14px;
  }
`;

export const BlockSC = styled.div`
  padding: 98px 280px 98px 433px;
  background: ${(props) => props.theme.color.formBackground};

  ${media.DESKTOP} {
    padding: 76px 180px 76px 330px;
  }

  ${media.TABLET} {
    padding: 76px 20px;
  }

  ${media.PHONE} {
    padding: 46px 10px;
  }
`;

export const TitleSC = styled.p`
  font-weight: 700;
  font-size: 48px;
  line-height: 53px;
  color: ${(props) => props.theme.color.primary};

  ${media.TABLET} {
    font-size: 32px;
    line-height: 34px;
  }
`;

export const TextSC = styled.p`
  font-size: 22px;
  line-height: 29px;
  color: ${(props) => props.theme.color.formText};

  ${media.TABLET} {
    font-size: 18px;
    line-height: 20px;
  }
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
  border-bottom: 1px solid ${(props) => props.theme.color.formInput};
  background-color: transparent;
  padding: 8px 2px;

  &::placeholder {
    font-size: 22px;
    line-height: 29px;
    color: ${(props) => props.theme.color.formPlaceholder};
  }
`;

export const ButtonSC = styled.button`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  width: 100%;
  padding: 16px 0;
  text-align: center;
  font-size: 22px;
  line-height: 29px;
  letter-spacing: 0.0375em;
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

  ${media.LAPTOP} {
    width: 400px;
    left: 8%;
  }

  ${media.TABLET} {
    position: relative;
    width: 100%;
    max-width: 460px;
    left: 0;
    margin-bottom: 50px;
  }

  ${media.PHONE} {
    max-width: 260px;
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
