require('dotenv').config();
import express from 'express';
import cors from 'cors'
import {
    connectDb,
    models
} from './src/mongoClient'
import {user} from './src/controllers/users'
import { checkToken } from "./src/middleware";

const app = express()
app.use(express.json())
app.use(cors())

app.get('/login',async (req, res) => {
    const result = await user.authenticateUser(req.query)
    res.send(result)
})
app.post('/signup', async (req, res) => {
    const result = await user.createUser(req.body)
    res.send(result)
})
app.get('/user', async (req, res)=>{
    const result = await user.getUserByUsername(res.query);
    res.send(result)
})
app.get('/', checkToken, (req, res)=>{
    res.json({
      success: true,
      message: 'Index page'
    });
})

connectDb().then(async _ => {
    const eraseDatabaseOnSync = true
    if (eraseDatabaseOnSync) {
        await Promise.all([
          models.User.deleteMany({}),
        ]);
      }
    app.listen(process.env.PORT, () => {
        console.log(`listen on port ${process.env.PORT}`)
    })
})