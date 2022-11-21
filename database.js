const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    database: 'resto_dinus',
    user: 'root',
    password: '',
})

db.connect((err) => {
    if (err) throw err
    console.log('DATABASE CONNECTED')
})

module.exports = db