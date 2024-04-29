const mysql = require("mysql2")
/// NEED TO INSTALL MYSQL
const pool = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "a91030312",
        database: "...",
    }).promise();