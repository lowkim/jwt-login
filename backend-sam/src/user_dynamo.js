const helper = require("./helper")
const jwt = require('jsonwebtoken');
const common = require('./common');
const tableName = 'User'

async function createUser({username, password}){
    const hashedPwd = await common.hashPassword(password)
    const items = {username, password:hashedPwd}
    await helper.putData(tableName, items)
}

const authenticateUser = async ({ username, password }) => {
    if (username && password) {
        const {Item: foundUser} = await helper.getData(tableName, {'username':username})
        if (foundUser) {
            const isPasswordEqual = await common.checkPassword(password, foundUser.password)
            if (isPasswordEqual) {
                console.log("PAssword is equal")
                let secret = process.env.SUPERSECRET
                let token = jwt.sign({ username }, secret, { expiresIn: '24h' })
                return {
                    message: 'Authentication successful',
                    statusCode : 200,
                    body:{token}
                }
            } else {
                return {
                    message: 'Incorrect password',
                    statusCode : 200,
                    body:""
                }
            }
        } else {
            return {
                message: 'Authentication failed!',
                statusCode : 400,
                body: ""            
            }
        }
    } else {
        return {
            message: 'Authentication failed!',
            statusCode : 400,
            body: "" 
        }
    }
}

module.exports = {
    createUser,
    authenticateUser
}
