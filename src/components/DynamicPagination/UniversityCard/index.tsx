import { UniversityDataInterface } from "../types";

import { FC } from "react";

export const UniversityCard: FC<{ data: UniversityDataInterface }> = ({ data }) => {
  return (
    <div>
      <div>
        <h1>{data.name}</h1>
        <h2>{data.country}</h2>
        {data.domains.map((domain) => (
          <p>{domain}</p>
        ))}
      </div>
    </div>
  );
};

export default UniversityCard;
