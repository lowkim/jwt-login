require('dotenv').config();
import express from 'express';
import {
    connectDb
} from './src/mongoClient'

const app = express()

app.post('/createUser', (req, res) => {
})

connectDb().then(async _ => {
    app.listen(process.env.PORT, () => {
        console.log(`listen on port ${process.env.PORT}`)
    })
})