import { BlockCategories } from "../BlockCategories/BlockCategories";
import { BlockWithLogo } from "../BlockWithLogo/BlockWithLogo";
import { BlockWithSocials } from "../BlockWithSocials/BlockWithSocials";
import { ContainerSC, WrapperSC } from "./style";

export const Footer = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <BlockWithLogo />
        <BlockCategories />
        <BlockWithSocials />
      </ContainerSC>
    </WrapperSC>
  );
};
