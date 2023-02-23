import { useTranslation } from 'react-i18next';
import {
  ContainerSC,
  FacebookSC,
  InstagramSC,
  OkSC,
  TelegramSC,
  TitleSC,
  ViberSC,
  VkSC,
  WhatsappSC,
  WrapperSC
} from './style';

export const SocialMedia = () => {
  const { t } = useTranslation();

  return (
    <WrapperSC>
      <TitleSC>{t('footer.socials')}</TitleSC>
      <ContainerSC>
        <TelegramSC />
        <OkSC />
        <FacebookSC />
        <WhatsappSC />
        <ViberSC />
        <InstagramSC />
        <VkSC />
      </ContainerSC>
    </WrapperSC>
  );
};
