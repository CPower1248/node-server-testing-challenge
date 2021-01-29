const db = require("../../data/dbConfig")

module.exports = {
  find,
  add
}

function find() {
  return db("users")
}

function add(user) {
  return db("users").insert(user)
    .then(([id]) => db("users").where({ id }).first())
}
