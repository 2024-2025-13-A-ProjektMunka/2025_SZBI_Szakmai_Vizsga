const path = require('node:path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join('public')));

app.use(express.json());
app.use(cors());

const mysql = require('mysql2');
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

app.use('/feltolt', require('./routes/feltoltRoutes'));
app.use('/iphoneLeker', require('/routes/iphoneLekerRoutes'));
app.use('/iphoneModosit', require('./routes/iphoneModositRoutes'));
app.use('/samsungLeker', require('./routes/samsungLekerRoutes'));
app.use('/samsungTorol', require('./routes/samsungTorolRoutes'));
app.use('/xiaomiLeker', require('./routes/xiaomiLekerRoutes'));
