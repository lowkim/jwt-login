const AWS = require('aws-sdk')
const config = {
    region:"ap-southeast-1",
    endpoint:"http://dynamodb:8000/"
}
AWS.config.update(config);
var docClient = new AWS.DynamoDB.DocumentClient();

// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/using-promises.html
async function putData(tableName, data){
    console.log("Calling put data")
    const params = {
        TableName: tableName,
        Item: data,
    }
    const request = docClient.put(params).promise()
    return await request.then(function(data){
        console.log("data", data)
    }).catch(function(err){
        console.log(err)
    })
}

module.exports = {
    putData
}