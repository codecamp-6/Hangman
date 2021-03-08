import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "antd"
import {DeleteOutlined} from "@ant-design/icons"

function CardList() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        "https://60419fa97f50e000173aab16.mockapi.io/todo/todo"
      );
      setData(response.data);
    } catch (err) {
      console.log("ERROR");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div
      css={`
        display: flex;
        flex-flow: wrap;
      `}
    >
      {data === []
        ? null
        : data?.map(({ id, createdAt, author, task }) => {
          <Card
            css={`
              width: 300px;
            `}
            extra={<Button
              icon={<DeleteOutlined />}
              type="primary"
              shape="circle"
              onClick={() => handleDelete(id)}
          ></Button>}
            <div>Task: {task}</div>
            <div>Created: {createdAt}</div>
          </Card>
          })}
    </div>
  );
}

export default CardList;
