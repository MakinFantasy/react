import { Table } from "antd"
import { ColumnsType } from "antd/es/table";

interface DataType {
    key: String,
    name: String,
    lastName: String,
    age: number,
    address: String,
    tags: String[],
}

const dataSource: DataType[] = [
    {
        key: '1',
        name: 'Mike',
        lastName: "Vazovskiy",
        age: 32,
        address: '10 Downing Street',
        tags: ["cartoon", "character"],
    },
    {
        key: '2',
        name: 'John',
        lastName: "Wick",
        age: 42,
        address: '10 Downing Street',
        tags: ["film", "character"],
    },
    {
        key: '3',
        name: "Ivan",
        lastName: "Kulakov",
        age: 18,
        address: "it's a secret)",
        tags: ["irl", "pesron"],
    },
];

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Last name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
    },
];


const Data = () => {
    return (
        <Table dataSource={dataSource} columns = {columns} />
    )
};

export default Data;