import {ColumnsType} from "antd/es/table/interface";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Table} from "antd";
import styled from "styled-components";


export const DataWrapper = styled.div`
    border: 2px solid greenyellow;
    width: 400px;
    background-color: white;
    color: var(--headingColor);
    font-size: var(--headingSize);
`

const Data = () => {
    const LIMIT_LIST_SCHOOL: number = 10;

    interface DataType {
        key: number,
        country: string,
        name: string,
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
    ];

    const [page, setPage] = useState<number>(1);
    const [dataSource, setDataSource] = useState<DataType[]>();

    useEffect(() => {
        getUniversity(page, LIMIT_LIST_SCHOOL);
    }, [page, LIMIT_LIST_SCHOOL]);

    const getUniversity = async (page: number, limit: number) => {
        const response = await axios.get(`http://universities.hipolabs.com/search?offset=${ (limit * page - limit) }&limit=${limit}`);
        console.log(response);
        setDataSource(response.data);
    }


    return (
        <>
            <hr/>
            <DataWrapper>
                <Table dataSource={dataSource} columns={columns} pagination={false}/>
                <Button onClick={() => setPage(page - 1)} disabled={page < 2}>Previous</Button>
                <Button onClick={() => setPage(page + 1)}>Next</Button>
                <p>{page}</p>
            </DataWrapper>
        </>
    )
}

export default Data;