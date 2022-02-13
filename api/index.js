const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient();

const table_name = process.env.TABLE_NAME;

const params = {
  TableName : table_name
}

async function listItems(){
  try {
    const data = await client.scan(params).promise();
    return data;
  } catch (err) {
    return err;
  }
}

exports.lambdaHandler = async (event, context) => {
  try {
    const data = await listItems();
    return {body: JSON.stringify(data)};
  } catch (err) {
    return {body: err};
  }
};
