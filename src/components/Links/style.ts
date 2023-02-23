import { media } from '@/ui';
import styled from '@emotion/styled';
import Link from 'next/link';

export const LinksContainerSC = styled.div`
  display: flex;
  column-gap: 25px;

  ${media.LAPTOP} {
    flex-direction: column;
    column-gap: 0;
    row-gap: 10px;
  }
`;

export const LinkContainerSC = styled.div`
  position: relative;
  &:hover {
    div {
      display: block;
    }
    cursor: pointer;
  }
`;

export const BorderSC = styled.div`
  display: none;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -6px;
  border-bottom: 2px solid ${(props) => props.theme.color.primary};

  ${media.LAPTOP} {
    border-bottom: 2px solid ${(props) => props.theme.color.labelSlider};
  }
`;

export const LinkSC = styled(Link)`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-size: 18px;
  line-height: 27px;
  padding-bottom: 6px;
  color: ${(props) => props.theme.color.primary};

  ${media.LAPTOP} {
    color: ${(props) => props.theme.color.labelSlider};
  }
`;
