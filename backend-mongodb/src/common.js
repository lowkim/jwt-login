import bcrypt from 'bcrypt'
const saltRounds = 10

const hashPassword = (password) =>{
    return bcrypt.hash(password, saltRounds)
}

const checkPassword = async (userPassword, dbHashPwd)=>{
    return await bcrypt.compare(userPassword, dbHashPwd)
}

export {
    hashPassword, checkPassword
}