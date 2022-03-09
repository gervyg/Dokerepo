require('dotenv').config()

const { Client } = require('pg')
const eliminarTarea = async (id) => {
    try {
        const consulta = {
            text: `DELETE FROM todo WHERE id = $1`,
            values: [id]
        };
      
        const client = new Client()
        await client.connect()
        const res = await client.query(consulta);
        await client.end()
        return res.rows

    }
    catch (e) {
        return e;
    }

}

module.exports = eliminarTarea