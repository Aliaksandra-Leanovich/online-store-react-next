import { Colors, media } from "@/ui";
import styled from "@emotion/styled";

export const ButtonsSC = styled.div`
  align-self: right;
  column-gap: 16px;
  position: absolute;
  top: 0;
  right: 6%;

  ${media.PHONE} {
    position: relative;
    right: 0;
    margin-top: 10px;
  }
`;

export const ButtonSC = styled.button`
  width: 24px;
`;

export const ArrowLeftSC = styled.div`
  &:hover {
    svg {
      path {
        fill: ${Colors.DarkBlack};
      }
    }
  }
`;

export const ArrowRightSC = styled.div`
  transform: rotate(180deg);

  &:active {
    svg {
      path {
        fill: ${Colors.DarkBlack};
      }
    }
  }
`;
