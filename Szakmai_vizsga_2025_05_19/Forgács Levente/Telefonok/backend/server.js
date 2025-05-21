const path = require('node:path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="Iphone" element={<Iphone/>} />
          <Route path="Samsung" element={<Samsung />} />
          <Route path="Xiaomi" element={<Xiaomi />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );

  

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
  console.log(req.body); 
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


const app1 = express();


app.use(cors());

app.get('/', (req, res) => {
  res.send('CORS is enabled!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});