const AWS = require('aws-sdk')
const config = {
    region:"ap-southeast-1",
    endpoint:"http://localhost:8000"
}
AWS.config.update(config)

const dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "User",
    KeySchema: [       
        { AttributeName: "username", KeyType: "HASH"},  //Partition key
    ],
    AttributeDefinitions: [       
        { AttributeName: "username", AttributeType: "S" },
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});