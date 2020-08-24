import React from "react";
import { Table, Space, Button } from "antd";
import {
  DeleteOutlined,
  FormOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { deleteItem } from "../services";

import { Link } from "react-router-dom";

const removeItem = async (id) => await deleteItem(id);

const renderAddress = (address) => {
  return address.map((p) => {
    const { city, state, zip, street, district, number } = p;
    return (
      <span>
        {street}, {number} {city} {district} {state} - {zip}
      </span>
    );
  });
};

const columns = [
  {
    title: "Picture",
    dataIndex: "superMarketMainImage",
    key: "superMarketMainImage",
    render: (text) => <img width={120} src={text} alt="" />,
  },
  {
    title: "Name",
    dataIndex: "superMarketName",
    key: "superMarketName",
    render: (text) => text,
  },
  {
    title: "Description",
    dataIndex: "superMarketDescription",
    key: "superMarketDescription",
  },
  {
    title: "Address",
    dataIndex: "superMarketLocation",
    render: (text) => renderAddress(text),
  },
  {
    title: "Phone Number",
    dataIndex: "superMarketPhone",
    key: "superMarketPhone",
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "_id",
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary" shape="circle" icon={<FormOutlined />} />
        <Button
          onClick={() => removeItem(text)}
          type="danger"
          shape="circle"
          icon={<DeleteOutlined />}
        />
      </Space>
    ),
  },
];

export const DataTable = ({ data }) => {
  return (
    <>
      <Space>
        <Button icon={<PlusCircleOutlined />}>
          <Link to={"/new"}> Add New</Link>
        </Button>
      </Space>
      <Table columns={columns} dataSource={data.supermarket} />
    </>
  );
};
