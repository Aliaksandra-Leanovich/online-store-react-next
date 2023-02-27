import React from 'react';
import { SliderMedium } from '../SliderMeduim/SliderMedium';
import { ContainerSC, TitleSC, WrapperSC, SliderSC } from './style';
import { useTranslation } from 'react-i18next';
import { data } from './config';

export const NewProductsSection = () => {
  const { t } = useTranslation();

  return (
    <WrapperSC>
      <ContainerSC>
        <SliderSC>
          <TitleSC>{t('newproducts.title')}</TitleSC>
          <SliderMedium data={data} />
        </SliderSC>
      </ContainerSC>
    </WrapperSC>
  );
};
