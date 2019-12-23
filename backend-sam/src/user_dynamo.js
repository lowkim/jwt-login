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
    console.log("Calling auth")
    if (username && password) {
        console.log("HI")
        const {Item: foundUser} = await helper.getData(tableName, {'username':username})
        console.log("foundUser ==> ",foundUser)
        if (foundUser) {
            const isPasswordEqual = await checkPassword(password, foundUser.password)
            if (isPasswordEqual) {
                let secret = process.env.SUPERSECRET
                let token = jwt.sign({ username }, secret, { expiresIn: '24h' })
                console.log(token)
                return {
                    success: true,
                    message: 'Authentication successful',
                    token
                }
            } else {
                return {
                    success: false,
                    message: 'Incorrect password'
                }
            }
        } else {
            return {
                success: false,
                message: 'Authentication failed!'
            }
        }
    } else {
        return {
            success: false,
            message: 'Authentication failed!'
        }
    }
}

module.exports = {
    createUser,
    authenticateUser
}
