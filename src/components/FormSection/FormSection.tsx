import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ButtonSC,
  ContainerSC,
  FormSC,
  ImageSC,
  InformationSC,
  InputSC,
  TextSC,
  TitleSC,
  WrapperSC,
  BlockSC
} from './style';

export const FormSection = () => {
  const { t } = useTranslation();
  const placeholder = t('form.input');

  return (
    <WrapperSC>
      <ContainerSC>
        <ImageSC />
        <BlockSC>
          <InformationSC>
            <TitleSC>{t('form.title')}</TitleSC>
            <TextSC>{t('form.text')}</TextSC>
          </InformationSC>
          <FormSC>
            <InputSC placeholder={placeholder} />
            <ButtonSC>{t('form.button')}</ButtonSC>
          </FormSC>
        </BlockSC>
      </ContainerSC>
    </WrapperSC>
  );
};
