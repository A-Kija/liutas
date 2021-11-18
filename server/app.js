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

// Randa visus skirtingus gyvunu tipus
// SELECT DISTINCT column1, column2, ...
// FROM table_name;
app.get('/animals-type', (req, res) => {
    const sql = `
        SELECT DISTINCT type
        FROM animals
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// rodo tik tam tikro tipo gyvunus
app.get('/animals-filter/:t', (req, res) => {
    const sql = `
        SELECT *
        FROM animals
        WHERE type = ?
    `;
    con.query(sql, [req.params.t], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// paieska pagal varda
// SELECT column1, column2, ...
// FROM table_name
// WHERE columnN LIKE pattern;
app.get('/animals-name', (req, res) => {
    const sql = `
        SELECT *
        FROM animals
        WHERE name LIKE ?
    `;
    con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Bendra gyvunu statistika
// SELECT COUNT(column_name)
// FROM table_name
// WHERE condition;
app.get('/stats', (req, res) => {
    const sql = `
        SELECT COUNT(id) as count, 
        SUM(weight) as weight,
        AVG(weight) as average
        FROM animals
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


// Grupine gyvunu statistika
// SELECT column_name(s)
// FROM table_name
// WHERE condition
// GROUP BY column_name(s)
// ORDER BY column_name(s);

app.get('/group-stats', (req, res) => {
    const sql = `
        SELECT COUNT(id) as count, type
        FROM animals
        GROUP BY type
        ORDER BY COUNT(id) DESC, type
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


//DOMINO

// Visi dominai
app.get('/dominos', (req, res) => {
    const sql = `
        SELECT *
        FROM dominos
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})




app.listen(port, () => {
    // console.log(`Example app listening at http://localhost:${port}`)
})