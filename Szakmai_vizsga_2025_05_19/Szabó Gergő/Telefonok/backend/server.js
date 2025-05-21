const path = require('node:path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT;
app.use(express.static(path.join(__dirname, "public")));
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

app.use("/feltolt",require("./routes/feltoltRoutes"))
app.use("/feltolt",require("./routes/iphoneLekerRoutes"))
app.use("/feltolt",require("./routes/iphoneModositRoutes.js"))
app.use("/feltolt",require("./routes/samsungLekerRoutes.js"))
app.use("/feltolt",require("./routes/samsungTorolRoutes.js"))
app.use("/feltolt",require("./routes/xiaomiLekerRoutes.js"))


