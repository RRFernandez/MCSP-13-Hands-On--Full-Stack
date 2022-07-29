"use strict";

var _express = _interopRequireDefault(require("express"));

var _promises = _interopRequireDefault(require("fs/promises"));

var _pg = _interopRequireDefault(require("pg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
var PORT = 4000;
var pool = new _pg["default"].Pool({
  database: 'CaughtPokemon'
});
app.get("/api/CaughtPokemon", function (req, res, next) {
  pool.query('SELECT * FROM trainers').then(function (data) {
    res.send(data.rows);
  })["catch"](next);
});
app.get("/api/CaughtPokemon/pokemon", function (req, res, next) {
  pool.query('SELECT * FROM pokemon').then(function (data) {
    res.send(data.rows);
  })["catch"](next);
});
app.get("/api/CaughtPokemon/:id", function (req, res, next) {
  var id = req.params.id;
  console.log(id);
  pool.query('SELECT * FROM trainers WHERE id = $1', [id]).then(function (data) {
    if (CaughtPokemon) {
      res.status(201).send(data.rows[0]);
    } else {
      res.sendStatus(400);
    }
  })["catch"](next);
});
app.listen(PORT, function () {
  console.log("listening on ".concat(PORT));
});