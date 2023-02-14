import React from "react";
import { useTranslation } from "react-i18next";
import { LinkSC, LinksContainerSC, StyledNavigationSC } from "./style";
import SearchIcon from "/public/icons/search.png";
import FavoritesIcon from "/public/icons/favorites.png";
import CartIcon from "/public/icons/cart.png";
import ProfileIcon from "/public/icons/profile.png";
import { ILink } from "./types";

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <StyledNavigationSC>
      <LinksContainerSC>
        {(
          t("nav", {
            returnObjects: true,
            defaultValue: [],
          }) as []
        ).map((item: ILink, index) => (
          <LinkSC key={index} href="/">
            {item.name}
          </LinkSC>
        ))}
      </LinksContainerSC>

      <LinksContainerSC>
        <img src={SearchIcon.src} alt="" />
        <img src={FavoritesIcon.src} alt="" />
        <img src={CartIcon.src} alt="" />
        <img src={ProfileIcon.src} alt="" />
      </LinksContainerSC>
    </StyledNavigationSC>
  );
};
