import styled from "@emotion/styled";

export const BlockSecondSC = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const BlockTitleSC = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  line-height: 33px;
  color: ${(props) => props.theme.color.text3};
`;

export const CategorySC = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 24px;
  color: ${(props) => props.theme.color.text2};
`;
