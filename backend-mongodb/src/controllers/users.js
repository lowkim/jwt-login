import userSchema from '../schemas/userSchema'
import {hashPassword, checkPassword} from '../common'
import jwt from 'jsonwebtoken'

const createUser = async ({username, email, password}) => {
    hashPassword(password).then(async hashedPassword =>{
        console.log(hashedPassword)
        const newUser = new userSchema({username, email, password:hashedPassword,})
        await newUser.save()
    })
}
const meme = async ({username}) => {
    console.log("Calling meme")
    console.log(username)
    const founduser = await userSchema.findByLogin(username)
    console.log(founduser)
    return founduser
}

const getUser = async ({username, password}) => {
    if(username && password){
        const foundUser = await userSchema.findByLogin(username)
        if(foundUser){
            const isPasswordEqual = await checkPassword(password, foundUser.password)
            if(isPasswordEqual){
                let secret = process.env.SUPERSECRET
                let token = jwt.sign({username}, secret,{expiresIn:'24h'})
                console.log(token)
                return {
                    success: true,
                    message: 'Authentication successful',
                    token
                }
            }else{
                return {
                    success: false,
                    message: 'Incorrect password'
                }
            }
        }else{
            return {
                success: false,
                message: 'Authentication failed!'
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
    createUser,getUser, meme
}
export {
    user
}