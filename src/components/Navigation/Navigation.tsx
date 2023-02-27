import { Links } from '../Links/Links';
import { LinksContainerSC, StyledNavigationSC } from './style';
import { INavigationProps } from './type';
// import CartIcon from '@/assets/icons/cart.svg';
// import FavoritesIcon from '@/assets/icons/favorites.svg';
// import ProfileIcon from '@/assets/icons/profile.svg';
// import SearchIcon from '@/assets/icons/search.svg';

export const Navigation = ({ isOpen }: INavigationProps) => {
  return (
    <StyledNavigationSC isOpen={isOpen}>
      <Links />
      <LinksContainerSC>
        {/* <SearchIcon />
        <FavoritesIcon />
        <CartIcon />
        <ProfileIcon /> */}
      </LinksContainerSC>
    </StyledNavigationSC>
  );
};
