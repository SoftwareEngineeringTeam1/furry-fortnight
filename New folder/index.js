const express = require('express')
const sql = require('mssql')
const app = express()
const port = 3000

const pool = new sql.ConnectionPool
({
    user: 'ROSAMARIA-LENOV\\rosam',
    password: '',
    server:'ROSAMARIA-LENOV\\RB',
    database: 'furry'
})
;

pool.connect()
    .then( success => {
        console.log(success, 'we connected');
        app.get('/', (req, res) => res.send('Hello World!'))

        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    })
    .catch( err => {
        console.log(err);

    })

