import userSchema from '../schemas/userSchema'
import { hashPassword, checkPassword } from '../common'
import jwt from 'jsonwebtoken'

const doesUserExists = async(username)=>{
    const getUser = await getUserByUsername({username})
    if(username === getUser.username){
        return true
    }else{
        return false
    }
}

const createUser = async ({username, email, password}) => {
    const userExists = await doesUserExists(username)
    if(!userExists){
        const hashedPassword = await hashPassword(password)
        const newUser = new userSchema({ username, email, password: hashedPassword, })
        await newUser.save()
    }else{
        return "username exists"
    }
}

const getUserByUsername = async ({ username }) => {
    const founduser = await userSchema.findByLogin(username)
    return founduser === null ? {username:''} : founduser
}

const authenticateUser = async ({ username, password }) => {
    if (username && password) {
        const foundUser = await userSchema.findByLogin(username)
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

const user = {
    createUser, authenticateUser, getUserByUsername
}
export {
    user
}