import {ColumnsType} from "antd/es/table/interface";
import {DataType} from "./Datatype.tsx";

export const columns: ColumnsType<DataType> = [
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