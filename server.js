import express from "express";
import fs from "fs/promises";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = 4000;

app.use(express.static('static'));

const pool = new pg.Pool({
    database: 'CaughtPokemon'
});

app.get("/Pokemon", (req, res, next) => {
    pool.query('SELECT * FROM trainers').then((data) => {
            res.send(data.rows);
        })
        .catch(next)
});

app.get("/Pokemon/pokemon", (req, res, next) => {
    pool.query('SELECT * FROM pokemon').then((data) => {
            res.send(data.rows);
        })
        .catch(next)
});

app.get("/Pokemon/:id", (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    pool.query('SELECT * FROM trainers WHERE trainers_id = $1', [id]).then((data) => {
            if (data.rows[0]) {
                res.send(data.rows[0]);
            } else {
                res.sendStatus(404);
            }
        })
        // .catch(next)
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});