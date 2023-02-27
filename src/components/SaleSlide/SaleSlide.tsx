import { ContainerSlideSC, DecriptionSC, ImageSC, NameSC, TypeSC } from './style';
import { IPropsSlide } from './type';

export const SaleSlide = ({ item }: IPropsSlide) => {
  return (
    <ContainerSlideSC>
      <ImageSC name={item.image} />
      <DecriptionSC>
        <NameSC>{item.name}</NameSC>
        <TypeSC>{item.type}</TypeSC>
      </DecriptionSC>
    </ContainerSlideSC>
  );
};
