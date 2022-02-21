"use strict";

const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addTodo = async (event) => {
  const dynamoDB = AWS.DynamoDB.DocumentClient();

  const { todo } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = v4();

  await dynamoDB.put({
    TableName: "TodoTable",
    Item: newTodo,
  });

  return {
    statusCode: 200,
    body: JSON.stringify,
  };
};

module.exports = {
  handler: hello,
};
