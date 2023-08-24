import { query } from 'express'
import {createPool} from 'mysql2/promise'

import{DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} from './config.js'



//nos permite conectarnos son una funcion await con createConnection
export const pool = createPool({
    user:DB_USER,
    password:DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
})

