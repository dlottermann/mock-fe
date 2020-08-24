import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  Divider,
  Row,
  Col,
  message,
  Layout,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

import { normalizeInput } from "../utils";
import { insert } from "../services";

const { Header, Content } = Layout;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const initialValues = {
  name: "",
  street: "",
  number: "",
  zip: "",
  city: "",
  state: "",
  country: "",
  phone: "",
  district: "",
  description: "",
  mainImage: "",
};

export const FormSupermarket = () => {
  const [form] = Form.useForm();
  const [picture, setPicture] = useState(false);

  const onFinish = (values) => {
    values.superMarketMainImage = picture || '';
    insert(normalizeInput(values));
  };

  const onChange = (info) => {
    const { status } = info.file;
    
    if (status === "removed") {
          setPicture(false);
    }

    if (status === "done") {
      setPicture(info.file.response);
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content style={{ padding: "50px" }}>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            initialValues={initialValues}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Divider>Address</Divider>

            <Form.Item
              label="Street"
              name="street"
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Input.Group
              style={{ width: "75%", marginTop: 10, margin: "auto" }}
            >
              <Row gutter={8}>
                <Col span={8}>
                  <Form.Item
                    label="Number"
                    name="number"
                    rules={[
                      {
                        required: true,
                        message: "Input something!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="District" name="district">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item label="Zip" name="zip">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={8}>
                <Col span={8}>
                  <Form.Item
                    label="City"
                    name="city"
                    rules={[
                      {
                        required: true,
                        message: "Input something!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="State"
                    name="state"
                    rules={[
                      {
                        required: true,
                        message: "Input something!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={5}>
                <Col span={8}>
                  <Form.Item label="Country" name="country">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Input.Group>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
            >
              <Input style={{ width: 200 }} />
            </Form.Item>

            <Form.Item label="Short description" name="description">
              <Input.TextArea rows={2} />
            </Form.Item>

            <Form.Item
              label="Main Image"
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
            >
              <Upload
                accept="image/*"
                action={`${process.env.REACT_APP_API_URI}file`}
                onChange={onChange}
                multiple={false}
                name="logo"
                listType="picture"
              >
                <Button disabled={picture}>
                  <UploadOutlined /> Click to upload
                </Button>
              </Upload>
            </Form.Item>

            <Form.Item label="Additional images">
              <Upload.Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Only images files are
                  allowed
                </p>
              </Upload.Dragger>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4, span: 5 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>{" "}
              <Button htmlType="reset" danger>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </>
  );
};
