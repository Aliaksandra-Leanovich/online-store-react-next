import React from 'react';
import CrossIcon from 'public/assets/icons/cross-icon.svg';
import { ButtonSC, ContainerButtonSC, ContainerChildSC, ContainerSC, WrapperSC } from './styles';
import { IModalProps } from './types';

export const Modal = ({ handleClose, show }: IModalProps) => {
  return (
    <WrapperSC show={show}>
      <ContainerSC show={show}>
        <ContainerButtonSC>
          <ButtonSC type="button" onClick={handleClose}>
            <CrossIcon />
          </ButtonSC>
        </ContainerButtonSC>
        {/* <ContainerChildSC>{children}</ContainerChildSC> */}
      </ContainerSC>
    </WrapperSC>
  );
};
