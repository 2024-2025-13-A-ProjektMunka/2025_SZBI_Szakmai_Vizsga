const path = require('node:path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
let PORT = 5000;
const mysql = require('mysql2');
app.use(express.static('public'))
app.use(cors({origin: true, credentials: true}));
exports.pool = mysql
    .createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    })
    .promise();

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
