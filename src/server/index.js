const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const db = require('./db/postgres.js');
const port = 3003;

app.use(express.static(path.resolve(__dirname, '../src')));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.get('/recipes', (req, res) => {
  db.query('SELECT * FROM recipes', async (err, results) => {
    if (err) {
      res.status(400).send(`${err.name} : ${err.message}`);
    } else {
      res.status(200).json(results.rows);
    }
  });
});

app.post('/users', (req, res) => {
  const { email, first_name, last_name, password } = req.body;
  db.query(
    `INSERT INTO users (email, first_name, last_name, password) VALUES ('${email}', '${first_name}', '${last_name}', '${password}')`,
    async (err, results) => {
      if (err) {
        res.status(409).send(`${err.name} : ${err.message}`);
      } else {
        res.status(200).send(`${email} added`);
      }
    },
  );
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
