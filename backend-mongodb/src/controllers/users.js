import userSchema from '../schemas/userSchema'
import {hashPassword, checkPassword} from '../common'
import jwt from 'jsonwebtoken'

const createUser = async ({username, password}) => {
    hashPassword(password).then(async hashedPassword =>{
        console.log(hashedPassword)
        const newUser = new userSchema({username, password:hashedPassword})
        await newUser.save()
    })
}

const getUser = async ({username, password}) => {
    if(username && password){
        const foundUser = await userSchema.findByLogin(username)
        const isPasswordEqual = await checkPassword(password, foundUser.password)
        if(isPasswordEqual){
            let secret = process.env.SUPERSECRET
            let token = jwt.sign({username}, secret,{expiresIn:'24h'})
            return {
                success: true,
                message: 'Authentication successful',
                token
            }
        }else{
            return {
                success: false,
                message: 'Incorrect or password'
            }
        }
    }else{
        return {
            success: false,
            message: 'Authentication failed!'
        }
    }
}

const user = {
    createUser,getUser
}
export {
    user
}