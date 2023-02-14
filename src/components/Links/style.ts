import { Colors } from "@/ui";
import styled from "@emotion/styled";
import Link from "next/link";

export const LinksContainerSC = styled.div`
  display: flex;
  column-gap: 25px;
`;

export const LinkSC = styled(Link)`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  line-height: 27px;
  padding-bottom: 6px;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid ${Colors.DarkBlack};
  }
`;
