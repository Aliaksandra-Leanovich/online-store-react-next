// import Arrow from '@/assets/icons/arrow_header.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Burger } from '../Burger';
import { RightNavigation } from '../Navigation/RightNavigation';
import { TopNavigation } from '../Navigation/TopNavigation';
import {
  AdressContainerSC,
  AdressSC,
  ContainerBottomSC,
  ContainerTopSC,
  InformationSC,
  LogoContainerSC,
  PhoneNumberSC,
  StyledHeaderSC,
  WrapperSC
} from './style';

export const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledHeaderSC>
      <WrapperSC>
        <ContainerTopSC>
          <InformationSC>
            <AdressContainerSC>
              <AdressSC>Санкт-Петербург</AdressSC>
              {/* <Arrow /> */}
            </AdressContainerSC>
            <PhoneNumberSC>{t('header.phone')}</PhoneNumberSC>
          </InformationSC>
        </ContainerTopSC>
        <ContainerBottomSC>
          <LogoContainerSC />
          <TopNavigation isOpen={isOpen} />
          <RightNavigation isOpen={isOpen} />
          <Burger isOpen={isOpen} setOpen={setOpen} />
        </ContainerBottomSC>
      </WrapperSC>
    </StyledHeaderSC>
  );
};
