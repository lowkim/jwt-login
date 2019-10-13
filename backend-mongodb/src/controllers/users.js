import userSchema from '../schemas/userSchema'
import crypto from 'crypto'
const sha256 = crypto.createHash('sha256')
const createUser = async ({username, password}) => {
    const hashedPassword = sha256.update(password).digest('hex')
    console.log(hashedPassword)
    const newUser = new userSchema({username, password:hashedPassword})
    await newUser.save()
}

const getUser = async ({username}) => {
    const foundUser = await userSchema.findByLogin(username)
    return foundUser.username
}

const user = {
    createUser,getUser
}
export {
user
}