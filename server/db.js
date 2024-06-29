const Pool = require("pg").Pool;
const pool = new Pool({
    user:'postgres',
    password:'123123',
    host:'localhost',
    port: 5432,
    database:'perntodo'
})

async function test() {
    const client = await pool.connect();

}

module.exports = pool;