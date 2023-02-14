import { Links } from "../Links/Links";
import { LinksContainerSC, StyledNavigationSC } from "./style";
import CartIcon from "/public/icons/cart.png";
import FavoritesIcon from "/public/icons/favorites.png";
import ProfileIcon from "/public/icons/profile.png";
import SearchIcon from "/public/icons/search.png";

export const Navigation = () => {
  return (
    <StyledNavigationSC>
      <Links />
      <LinksContainerSC>
        <img src={SearchIcon.src} alt="" />
        <img src={FavoritesIcon.src} alt="" />
        <img src={CartIcon.src} alt="" />
        <img src={ProfileIcon.src} alt="" />
      </LinksContainerSC>
    </StyledNavigationSC>
  );
};
