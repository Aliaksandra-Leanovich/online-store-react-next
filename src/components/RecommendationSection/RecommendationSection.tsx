import { useTranslation } from 'react-i18next';
import { SliderMedium } from '../SliderMeduim/SliderMedium';
import { data } from './config';
import { ContainerSC, SliderSC, TitleSC, WrapperSC } from './style';

export const RecommendationSection = () => {
  const { t } = useTranslation();

  return (
    <WrapperSC>
      <ContainerSC>
        <SliderSC>
          <TitleSC>{t('recommendation.title')}</TitleSC>
          <SliderMedium data={data} />
        </SliderSC>
      </ContainerSC>
    </WrapperSC>
  );
};
