const bcrypt = require('bcryptjs')
const saltRounds = 10

async function hashPassword(password){
    return await bcrypt.hash(password, saltRounds)
}

async function checkPassword(userPassword, dbHashPwd){
    return await bcrypt.compare(userPassword, dbHashPwd)
}

module.exports = {
    hashPassword, checkPassword
}