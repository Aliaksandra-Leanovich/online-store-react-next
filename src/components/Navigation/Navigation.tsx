import { useCallback, useState } from 'react';
import { Links } from '../Links/Links';
import { IconSC, LinksContainerSC, StyledNavigationSC, IconFavoriteSC } from './style';
import { INavigationProps } from './type';
import CartIcon from '/public/assets/icons/cart.svg';
import FavoritesIcon from 'public/assets/icons/favorites.svg';
import ProfileIcon from 'public/assets/icons/profile.svg';
import SearchIcon from 'public/assets/icons/search.svg';
import { Modal } from '../Modal/Modal';

export const Navigation = ({ isOpen }: INavigationProps) => {
  const [show, setShow] = useState(false);

  const showModal = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <StyledNavigationSC isOpen={isOpen}>
      <Links />
      <LinksContainerSC>
        <IconSC>
          <SearchIcon />
        </IconSC>
        <IconFavoriteSC>
          <FavoritesIcon />
        </IconFavoriteSC>
        <IconSC onClick={showModal}>
          <CartIcon />
        </IconSC>
        <IconSC>
          <ProfileIcon />
        </IconSC>
      </LinksContainerSC>
      <Modal show={show} handleClose={showModal} />
    </StyledNavigationSC>
  );
};
