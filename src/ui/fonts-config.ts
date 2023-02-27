import { useUpdateValuesInObject } from '@/hooks/use-update-values-in-object.hook';
import data from '../../public/assets/fonts.json';

interface IVal {
  fontWeight: {
    [key: string]: string;
  };

  fontFamily: {
    [key: string]: string;
  };
}

export interface IKey {
  [key: string]: string;
}

export const fonts: IVal = {
  fontWeight: {
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
  },

  fontFamily: {
    primary: `"OpenSans", sans-serif`,
    secondary: `"Roboto", sans-serif`
  }
};

const newObject: IKey = useUpdateValuesInObject(fonts.fontFamily, data.fonts.fontFamily);
fonts.fontFamily = newObject;
