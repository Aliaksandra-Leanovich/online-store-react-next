import { useTranslation } from 'react-i18next';
import { Advantages } from '../Advantages/Advantages';
import {
  ContainerSC,
  DecriptionSC,
  ImageSC,
  InformationSC,
  LinkSC,
  LinkTextSC,
  TextSC,
  TitleSC,
  WrapperSC
} from './style';

// import ArrowImage from '@/assets/icons/arrow_pink.svg';

export const AdvantagesSection = () => {
  const { t } = useTranslation();

  return (
    <WrapperSC>
      <ContainerSC>
        <InformationSC>
          <ImageSC />
          <DecriptionSC>
            <TitleSC>{t('advantages.title')}</TitleSC>
            <TextSC>{t('advantages.decription')}</TextSC>
            <LinkSC>
              <LinkTextSC>{t('advantages.link')}</LinkTextSC>
              {/* <ArrowImage /> */}
            </LinkSC>
          </DecriptionSC>
        </InformationSC>
        <Advantages />
      </ContainerSC>
    </WrapperSC>
  );
};
