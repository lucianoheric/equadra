const db = require("./dao/db")

async function selectAllUser() {
    const client = await connect();
    const res = await client.query('SELECT * FROM eq_user');
    return res.rows;
}

module.exports = { selectAllUser }