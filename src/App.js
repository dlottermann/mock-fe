import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { DataTable } from "./components";
import { getAll } from "./services";

const { Header, Content } = Layout;

const App = () => {
  const [items, setItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await getAll().then((data) => setItems(data));
    };
    fetchData();
  }, []);




  return (
    <>
      <Layout>
        <Header/>
        <Content style={{ padding: "50px" }}>
          {items && <DataTable data={items} />}
        </Content>
      </Layout>
    </>
  );
};

export default App;
