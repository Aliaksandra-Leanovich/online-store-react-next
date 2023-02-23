import styled from '@emotion/styled';

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

export const PhoneSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: 22px;
  line-height: 26px;
  color: ${(props) => props.theme.color.text3};
`;

export const EmailSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: 22px;
  line-height: 26px;
  color: ${(props) => props.theme.color.text3};
`;

export const AddresSC = styled.p`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  line-height: 24px;
  color: ${(props) => props.theme.color.text3};
`;

export const BlockFirstFooterSC = styled.div`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  line-height: 24px;
  color: ${(props) => props.theme.color.text2};
`;

export const LogoContainerSC = styled.a`
  max-width: 194px;
  width: 100%;
  height: 60px;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.theme.backgrounds.logo})`};
`;
