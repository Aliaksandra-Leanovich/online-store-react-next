import { useTranslation } from 'react-i18next';
import {
  AddresSC,
  BlockFirstFooterSC,
  BlockFirstSC,
  BlockWithLogoSC,
  EmailSC,
  LogoContainerSC,
  PhoneSC
} from './style';

export const BlockWithLogo = () => {
  const { t } = useTranslation();

  return (
    <BlockFirstSC>
      <BlockWithLogoSC>
        <LogoContainerSC />
        <PhoneSC>{t('footer.phone')}</PhoneSC>
        <EmailSC>{t('footer.email')}</EmailSC>
        <AddresSC>{t('footer.address')}</AddresSC>
      </BlockWithLogoSC>
      <BlockFirstFooterSC>{t('footer.content')}</BlockFirstFooterSC>
    </BlockFirstSC>
  );
};
