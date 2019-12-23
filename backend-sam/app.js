// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';

const user = require('./src/user_dynamo');
exports.lambdaHandler = async (event, context) => {
    const {httpMethod, resource:route, body, queryStringParameters:data} = event
    let response = {
        'statusCode': 200,
        'body': JSON.stringify({
            message: 'hello world',
            // location: ret.data.trim()
        })
    }
    try{
        if(httpMethod === "GET"){
            switch(route){
                case '/login':
                    console.log("login")
                    respond = await user.authenticateUser(data)
                    break;
                case '/user':
                    console.log('user')
                    break
            }
    
        }else if (httpMethod === "POST"){
            let dataset = JSON.parse(body)
            switch(route){
                case '/signup':
                    console.log('signup')
                    await user.createUser(dataset)
                    break;
            }
                
        }

    }catch(err) {
        response = {
            code: 500,
            body: { status: "not ok", message: "Internal Server Error" }
          };
          return err;
    }

    return response
};
