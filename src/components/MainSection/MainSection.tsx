import { useTranslation } from 'react-i18next';
import { Back, BlockSC, ButtonSC, ContainerSC, DescroptionSC, TitleSC, WrapperSC } from './style';

export const MainSection = () => {
  const { t } = useTranslation();

  return (
    <WrapperSC>
      <ContainerSC>
        <Back />
        <BlockSC>
          <TitleSC>{t('main.title')}</TitleSC>
          <DescroptionSC>{t('main.decription')}</DescroptionSC>
          <ButtonSC>{t('main.button')}</ButtonSC>
        </BlockSC>
      </ContainerSC>
    </WrapperSC>
  );
};
