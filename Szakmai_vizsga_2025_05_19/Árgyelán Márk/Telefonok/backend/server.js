require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, 'public')));
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
app.use('/iphone-leker', require('./routes/iphoneLekerRoutes'));
app.use('/iphone-modosit', require('./routes/iphoneModositRoutes'));
app.use('/samsung-leker', require ('./routes/samsungLekerRoutes'));
app.use('/samsung-torol' , require('./routes/samsungTorolRoutes'));
app.use('/xiaomi-leker', require('./routes/xiaomiLekerRoutes'));
app.use('/xiaomi-torol', require('./routes/xiaomiTorolRoutes'));
app.use('/xiaomi-modosit', require('./routes/xiaomiModositRoutes'));
