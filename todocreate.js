require('dotenv').config()

const { Client } = require('pg')
const todoCreate = async (nombre, descripcion) => {
    const client = new Client()
    await client.connect()
    const res = await client.query(`INSERT INTO todo (nombre, descripcion, fecha) VALUES ('${nombre}', '${descripcion}', NOW());`);
    await client.end()
    return res.rows
}

module.exports = todoCreate