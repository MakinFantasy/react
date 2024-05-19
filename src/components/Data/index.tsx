import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "antd";
import styled from "styled-components";
import { DataType } from "./Datatype.tsx";
import { columns } from "./columns.tsx";

export const DataWrapper = styled.div`
  border: 2px solid greenyellow;
  width: 400px;
  background-color: white;
  color: var(--headingColor);
  font-size: var(--headingSize);
  margin: 0 auto;
`;

const Data = () => {
  const LIMIT_LIST_SCHOOL: number = 10;

  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>();

  useEffect(() => {
    getUniversity(page, LIMIT_LIST_SCHOOL);
  }, [page, LIMIT_LIST_SCHOOL]);

  const getUniversity = async (page: number, limit: number) => {
    const offset = LIMIT_LIST_SCHOOL * page - LIMIT_LIST_SCHOOL;
    const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`);
    console.log(response);
    setDataSource(response.data);
  };

  return (
    <>
      <hr />
      <DataWrapper>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button onClick={() => setPage(page - 1)} disabled={page < 2}>
          Previous
        </Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
        <p>{page}</p>
      </DataWrapper>
    </>
  );
};

export default Data;
