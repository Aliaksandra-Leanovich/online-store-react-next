import styled from '@emotion/styled';
import { IProps } from './type';

export const ContainerSlideSC = styled.div`
  max-width: 990px;
  width: 100%;
  height: 534px;
  display: flex;
  flex-direction: column;
`;

export const DecriptionSC = styled.div`
  position: absolute;
  bottom: 6%;
  left: 2%;
`;

export const NameSC = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: 48px;
  line-height: 62px;
  letter-spacing: 0.0375em;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fontFamily.primary};
`;

export const TypeSC = styled.p`
  font-size: 18px;
  line-height: 23px;
  font-family: ${(props) => props.theme.fontFamily.primary};
`;

export const ImageSC = styled.div<IProps>`
  position: relative;
  width: 100%;
  height: 480px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme, name }) =>
    ` url(${theme.products[name as keyof typeof theme.products]})`};
`;
