const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/api/contentList', (req, res) => {
    connection.query(
        "SELECT * FROM CONTENTLIST",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.listen(port, () => console.log(`리스닝 온 포트 ${port}`));

// INSERT INTO contentlist VALUES(1, 'https://placeimg.com/24/24/1', '케리건', '군단의 정의', '2020-10-10', '내가 바로 군단이다';