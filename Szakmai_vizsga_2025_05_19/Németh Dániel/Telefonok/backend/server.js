const path = require('node:path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const mysql = require('mysql2');
const { route } = require('./routes/feltoltRoutes');
exports.pool = mysql
    .createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    })
    .promise();

app.use(express())
app.use(cors())
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.use('iphone-leker', require('./routes/iphoneLekerRoutes'));
app.use('iphoneModosit', require('./routes/iphoneModositRoutes'));
app.use('samsung-leker', require('./routes/samsungLekerRoutes'));
app.use('samsungTorol', require('./routes/samsungTorolRoutes'));
app.use('xiaomi-leker', require('./routes/xiaomiLekerRoutes'));

