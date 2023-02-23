require('dotenv').config();
const { createPool } = require('mysql');

// Create connection variable
let connection = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port:process.env.PORT,
    database: process.env.DATABASE,
    multipleStatements: true
});
module.exports = connection;