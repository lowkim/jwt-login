import userSchema from '../schemas/userSchema'
import {hashPassword, checkPassword} from '../common'

const createUser = async ({username, password}) => {
    hashPassword(password).then(async hashedPassword =>{
        console.log(hashedPassword)
        const newUser = new userSchema({username, password:hashedPassword})
        await newUser.save()
    })
}

const getUser = async ({username, password}) => {
    const foundUser = await userSchema.findByLogin(username)
    const result = await checkPassword(password, foundUser.password).then(isPasswordCorrect=>{
        if(!isPasswordCorrect){
            return "Password is incorrect"
        }
        return foundUser
    })
    return result
}

const user = {
    createUser,getUser
}
export {
user
}