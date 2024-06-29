const Pool = require("pg").Pool;
const pool = new Pool({
    user:'postgres',
    password:'123123',
    host:'localhost',
    port: 2200,
    database:'perntodo'
})

async function test() {
    const client = await pool.connect();
    
}

module.exports = pool;