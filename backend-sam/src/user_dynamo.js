const helper = require("./helper")
const jwt = require('jsonwebtoken');
const common = require('./common');
const tableName = 'User'

async function createUser({username, password}){
    const hashedPwd = await common.hashPassword(password)
    const items = {username, password:hashedPwd}
    await helper.putData(tableName, items)
}

module.exports = {
    createUser
}
