import { IKey } from '@/ui/fonts-config';
import data from '../../public/assets/color.json';
import { useUpdateValuesInObject } from '../hooks/use-update-values-in-object.hook';

interface IVal {
  color: {
    [key: string]: string;
  };
}

export const dark = {
  color: {
    borderAdvantage: '#ff3465',
    formBackground: '#000000',
    formText: '#ffffff',
    formInput: '#ffffff ',
    formPlaceholder: '#ffffff',
    labelSlider: '#ff3465',
    lightPrimary: '#000000',
    lightPrimary2: '#4e4e4e',
    navigationBackground: '#000000',
    primary: '#ffffff',
    priceSliderNew: '#1a1a1a',
    priceSliderOld: '#bcbcbc',
    secondary: '#000000',
    sliderBackground: '#ffffff',
    text: '#ffffff',
    text2: '#b7b7b7',
    text3: '#828282',
    textSlider: '#969696',
    textSlider2: '#5c5c66',
    textSlider3: '#ff3465'
  }
};

export const gray = {
  color: {
    borderAdvantage: '#ff3465',
    formBackground: '#3d3d3d',
    formText: '#ffffff',
    formInput: '#ffffff ',
    formPlaceholder: '#ffffff',
    labelSlider: '#ff3465',
    lightPrimary: '#3d3d3d',
    lightPrimary2: '#4e4e4e',
    navigationBackground: '#3d3d3d',
    primary: '#ffffff',
    priceSliderNew: '#1a1a1a',
    priceSliderOld: '#bcbcbc',
    secondary: '#3d3d3d',
    sliderBackground: '#ffffff',
    text: '#ffffff',
    text2: '#b7b7b7',
    text3: '#828282',
    textSlider: '#969696',
    textSlider2: '#5c5c66',
    textSlider3: '#ff3465'
  }
};

export const light: IVal = {
  color: {
    // borderAdvantage: 'rgba(0, 0, 0, 0.2)',
    // formBackground: '#f3f3f3',
    // formText: '#5a5a5a',
    // formInput: '#c4c4c4 ',
    // formPlaceholder: '#9a9a9a',
    // labelSlider: '#ff3465',
    // lightPrimary: '#323232',
    // lightPrimary2: '#4e4e4e',
    // navigationBackground: '#000000',
    // primary: '#000000',
    // priceSliderNew: '#1a1a1a',
    // priceSliderOld: '#bcbcbc',
    // secondary: '#ffffff',
    // sliderBackground: '#ffffff',
    // text: '#464646',
    // text2: '#b7b7b7',
    // text3: '#828282',
    // textSlider: '#969696',
    // textSlider2: '#5c5c66',
    // textSlider3: '#ffffff'
    borderAdvantage: '#ff3465',
    formBackground: '#000000',
    formText: '#ffffff',
    formInput: '#ffffff ',
    formPlaceholder: '#ffffff',
    labelSlider: '#ff3465',
    lightPrimary: '#000000',
    lightPrimary2: '#4e4e4e',
    navigationBackground: '#000000',
    primary: '#ffffff',
    priceSliderNew: '#1a1a1a',
    priceSliderOld: '#bcbcbc',
    secondary: '#000000',
    sliderBackground: '#ffffff',
    text: '#ffffff',
    text2: '#b7b7b7',
    text3: '#828282',
    textSlider: '#969696',
    textSlider2: '#5c5c66',
    textSlider3: '#ff3465'
  }
};

const newObject: IKey = useUpdateValuesInObject(light.color, data.color);
light.color = newObject;
