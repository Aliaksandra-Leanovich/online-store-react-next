import React from "react";
import { useTranslation } from "react-i18next";
import { Advantage } from "../Advantage/Advantage";
import { AdvantagesSC } from "./style";
import { IItemProps } from "./types";

export const Advantages = () => {
  const { t } = useTranslation();

  return (
    <AdvantagesSC>
      {(
        t("advantages", {
          returnObjects: true,
          defaultValue: [],
        }) as []
      ).map(({ name }: IItemProps) => (
        <Advantage name={name} key={name} />
      ))}
    </AdvantagesSC>
  );
};
