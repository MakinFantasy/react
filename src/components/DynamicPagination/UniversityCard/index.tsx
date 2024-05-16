import { UniversityDataInterface } from "../types";

import { FC } from "react";

export const UniversityCard: FC<{ data: UniversityDataInterface }> = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <span>{data.country}</span>
    </div>
  );
};

export default UniversityCard;
