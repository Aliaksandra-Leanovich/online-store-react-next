import { useState } from 'react';

export const isDayTime = () => {
  const date = new Date();
  const showTime = date.getHours();

  if (showTime > 6 && showTime < 21) {
    return true;
  }
  return false;
};
