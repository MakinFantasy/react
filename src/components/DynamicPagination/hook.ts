import { useEffect, useState } from "react";
import axios from "axios";
import { UniversityDataInterface } from "./types";
import { useInView } from "react-intersection-observer";

export const useDynamicPagination = () => {
  const LIMIT_SCHOOL = 17;
  const [universitiesData, setUniversitiesData] = useState<UniversityDataInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUniversitiesData = async () => {
    try {
      setLoading(true);
      const offset = (currentPage - 1) * LIMIT_SCHOOL;
      const { data } = await axios.get(
        `http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_SCHOOL}`,
      );
      setUniversitiesData((prev) => [...prev, ...data]);
    } catch (error) {
      console.error(`Ошибка при получении данных... ${error}`);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    void fetchUniversitiesData();
  }, [currentPage]);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [inView]);

  return { universitiesData, loading, ref };
};
