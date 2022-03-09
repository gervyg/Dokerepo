require('dotenv').config()

const { Client } = require('pg')
const db = async () => { 
    const client = new Client()
    await client.connect(); 
    const res = await client.query('SELECT * from todo')
    await client.end()
    return res.rows
}

module.exports = db