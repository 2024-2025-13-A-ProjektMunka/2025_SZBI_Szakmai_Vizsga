const path = require('node:path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors)
const PORT = process.env.PORT || 5000;

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

const feltolt = require("./routes/feltoltRoutes");
const iphoneleker = require("./routes/iphoneLekerRoutes");
const iphonemodosit = require("./routes/iphoneModositRoutes");
const samsungleker = require("./routes/samsungLekerRoutes");
const samsungtorol = require("./routes/samsungtorolRoutes");
const xiaomileker = require("./routes/xiaomiLekerRoutes");

app.use("/feltolt", feltolt)
app.use("/iphoneleker", iphoneleker)
app.use("/samsungleker", samsungleker)
app.use("/iphonemodosit", iphonemodosit)
app.use("/samsungtorol", samsungtorol)
app.use("/xiaomileker", xiaomileker)

