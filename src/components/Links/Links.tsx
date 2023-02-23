import React from 'react';
import { useTranslation } from 'react-i18next';
import { BorderSC, LinkContainerSC, LinkSC, LinksContainerSC } from './style';
import { ILink } from './types';
import { v4 as uuidv4 } from 'uuid';

export const Links = () => {
  const { t } = useTranslation();

  return (
    <LinksContainerSC>
      {(
        t('nav', {
          returnObjects: true,
          defaultValue: []
        }) as []
      ).map(({ name }: ILink) => (
        <LinkContainerSC>
          <LinkSC key={uuidv4()} href="/">
            {name}
          </LinkSC>
          <BorderSC />
        </LinkContainerSC>
      ))}
    </LinksContainerSC>
  );
};
