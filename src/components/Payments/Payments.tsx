import { config } from './config';
import { ContainerIconSC, ContainerSC, WrapperSC } from './style';

export interface IProps {
  name: string;
}

export const Payments = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        {config.map((payment) => (
          <ContainerIconSC name={payment.name} key={payment.id} />
        ))}
      </ContainerSC>
    </WrapperSC>
  );
};
