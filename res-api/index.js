const express = require('express')
const app = express()
const port = 8080

const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: 'db',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/healthz', (req, res) => {
    pool.query('SELECT NOW()', (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).send(result.rows)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
