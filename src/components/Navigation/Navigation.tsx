import { Links } from "../Links/Links";
import { LinksContainerSC, StyledNavigationSC } from "./style";
import { INavigationProps } from "./type";
import CartIcon from "/public/icons/cart.svg";
import FavoritesIcon from "/public/icons/favorites.svg";
import ProfileIcon from "/public/icons/profile.svg";
import SearchIcon from "/public/icons/search.svg";

export const Navigation = ({ isOpen }: INavigationProps) => {
  return (
    <StyledNavigationSC isOpen={isOpen}>
      <Links />
      <LinksContainerSC>
        <SearchIcon />
        <FavoritesIcon />
        <CartIcon />
        <ProfileIcon />
      </LinksContainerSC>
    </StyledNavigationSC>
  );
};
