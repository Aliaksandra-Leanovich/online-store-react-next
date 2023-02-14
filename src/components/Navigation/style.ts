import { Colors, media } from "@/ui";
import styled from "@emotion/styled";

export const StyledNavigationSC = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${Colors.White};
  ${media.LAPTOP} {
    display: none;
  }
`;

export const LinksContainerSC = styled.div`
  display: flex;
  column-gap: 25px;
`;
