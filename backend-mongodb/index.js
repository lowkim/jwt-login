require('dotenv').config();
import express from 'express';
import {
    connectDb,
    models
} from './src/mongoClient'
import {user} from './src/controllers/users'

const app = express()
app.use(express.json())

app.get('/login', async (req, res) => {
    const result = await user.getUser(req.query)
    res.send(result)
})
app.post('/signup', async (req, res) => {
    await user.createUser(req.body)
    res.send("whaddup")
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