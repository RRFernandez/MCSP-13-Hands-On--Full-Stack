CREATE TABLE trainers (
    trainers_id SERIAL PRIMARY KEY,
    name TEXT,
    gym_leader BOOLEAN
);

CREATE TABLE pokemon (
    pokemon_id SERIAL PRIMARY KEY,
    name TEXT,
    trainer_id INTEGER REFERENCES trainers(trainers_id)
);