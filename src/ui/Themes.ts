import { fonts } from '@/ui/fonts-config';
import { images } from '@/ui/images-config';
import { dark, gray, light } from './colors-config';

export const lightTheme = { ...fonts, ...light, ...images };
export const darkTheme = { ...fonts, ...dark, ...images };
export const grayTheme = { ...fonts, ...gray, ...images };
