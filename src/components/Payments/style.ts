import { media } from '@/ui';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IProps } from './Payments';

export const WrapperSC = styled.div`
  width: 100%;
  max-width: 604px;
  filter: grayscale(100%);
`;

export const ContainerSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;

  ${media.DESKTOP} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
  }

  ${media.LAPTOP} {
    display: flex;
    column-gap: 50px;
    margin: 30px 0;
  }

  ${media.TABLET} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
  }

  ${media.PHONE} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
  }
`;

export const ContainerIconSC = styled.div<IProps>`
  width: ${({ theme, name }) => `${theme.payments[name as keyof typeof theme.payments].width}px`};
  height: ${({ theme, name }) => `${theme.payments[name as keyof typeof theme.payments].height}px`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme, name }) =>
    ` url(${theme.payments[name as keyof typeof theme.payments].src})`};
`;
