import React from "react";
import { IItemProps } from "../Advantages/types";
import { AdvantageSC, AdvantageTextSC } from "./style";

export const Advantage = ({ name }: IItemProps) => {
  return (
    <AdvantageSC>
      <AdvantageTextSC>{name}</AdvantageTextSC>
    </AdvantageSC>
  );
};
