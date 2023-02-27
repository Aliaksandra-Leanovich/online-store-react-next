import { IKey } from '@/ui/fonts-config';

interface ICome {
  [key: string]: string;
}

export const useUpdateValuesInObject = (initial: ICome, temp: ICome) => {
  Object.keys(temp).forEach((key1) => {
    Object.keys(initial).forEach((key) => {
      if (key === key1) {
        initial[key as keyof typeof initial] = temp[key1 as keyof typeof temp];
      }
    });
  });

  return initial;
};
