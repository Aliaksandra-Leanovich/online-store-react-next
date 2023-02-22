import { TimeZones } from '@/enums/TimeZones';

export const useSetTheme = (city: string) => {
  const indexOfKey = Object.keys(TimeZones).indexOf(city);

  const valueofKey = Object.values(TimeZones)[indexOfKey];

  return valueofKey;
};
