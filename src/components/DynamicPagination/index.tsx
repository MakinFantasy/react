import { ObserverBlock } from "./styles";
import { useDynamicPagination } from "./hook";
import { UniversityCard } from "./UniversityCard";

export const DynamicPagination = () => {
  const { universitiesData, loading, ref } = useDynamicPagination();

  return (
    <>
      <div>
        <div>
          {universitiesData?.length > 0 &&
            universitiesData.map((university, index) => <UniversityCard key={index} data={university} />)}
          {!loading && <ObserverBlock ref={ref} />}
        </div>
        {loading && "loading"}
      </div>
    </>
  );
};

export default DynamicPagination;
