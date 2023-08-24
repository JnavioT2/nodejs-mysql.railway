import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/',async (req, res)=>{
    const [result] = await pool.query('SELECT * from users ')
    res.send(result)
})

app.get('/ping',async (req, res)=>{
    const [result] = await pool.query('SELECT "Hello world" AS RESULT ')
    res.json(result[0])
    console.log(result);
})

app.get('/create',async (req, res)=>{
    const result = await pool.query('INSERT INTO users(name) values("Jose") ')
    res.json(result)
    console.log(result);
})


app.listen(PORT)
console.log('Server on port', PORT);