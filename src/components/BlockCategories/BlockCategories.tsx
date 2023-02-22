import React from 'react';
import { useTranslation } from 'react-i18next';
import { IItem } from '../Footer/types';
import { BlockSecondSC, BlockTitleSC, CategorySC } from './style';
import { v4 as uuidv4 } from 'uuid';

export const BlockCategories = () => {
  const { t } = useTranslation();

  return (
    <BlockSecondSC>
      <BlockTitleSC>{t('footer.title')}</BlockTitleSC>
      {(
        t('footer.categories', {
          returnObjects: true,
          defaultValue: []
        }) as []
      ).map(({ name }: IItem) => (
        <CategorySC key={uuidv4()}>{name}</CategorySC>
      ))}
    </BlockSecondSC>
  );
};
