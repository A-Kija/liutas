const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "zoo",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//Routing
app.get('/', (req, res) => {
    res.send('Labas, ka tu? As tai nieko.')
})

app.get('/labas/:id', (req, res) => {
    res.send(`Pats tu ${req.params.id}.`)
})

app.get('/test', (req, res) => {
    res.send(JSON.stringify({ test: 'OK' }))
})

// Visi gyvunai
app.get('/animals', (req, res) => {
    const sql = `
        SELECT *
        FROM animals
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Prideti gyvuna
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post('/animals', (req, res) => {
    const sql = `
        INSERT INTO animals
        (name, type, weight, born)
        VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [
        req.body.name,
        req.body.type,
        req.body.weight,
        req.body.born
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Redaguoja gyvuna
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put('/animals/:id', (req, res) => {
    const sql = `
        UPDATE animals
        SET name = ?, type = ?, weight = ?, born = ?
        WHERE id = ?
    `;
    con.query(sql, [
        req.body.name,
        req.body.type,
        req.body.weight,
        req.body.born,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Trina gyvuna
// DELETE FROM table_name
// WHERE some_column = some_value
app.delete('/animals/:id', (req, res) => {
    const sql = `
        DELETE FROM animals
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})







app.listen(port, () => {
    // console.log(`Example app listening at http://localhost:${port}`)
})