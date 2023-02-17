import styled from "@emotion/styled";

export const BlockFirstSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BlockWithLogoSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const LogoSC = styled.img`
  width: 100%;
  max-width: 194px;
`;

export const PhoneSC = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: ${(props) => props.theme.color.text3};
`;

export const EmailSC = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: ${(props) => props.theme.color.text3};
`;

export const AddresSC = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 24px;
  color: ${(props) => props.theme.color.text3};
`;

export const BlockFirstFooterSC = styled.div`
  font-family: "Roboto", sans-serif;
  line-height: 24px;
  color: ${(props) => props.theme.color.text2};
`;
