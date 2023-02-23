export interface ISlide {
  name: string;
  type: string;
  priceNew: string;
  priceOld: string;
  image: JSX.Element;
  label: string;
}

export interface IPropsSlide {
  item: ISlide;
}
