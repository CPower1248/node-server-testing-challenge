const db = require("../../data/dbConfig")

module.exports = {
  find,
  add,
  remove
}

function find() {
  return db("users")
}

function add(user) {
  return db("users").insert(user)
    .then(([id]) => db("users").where({ id }).first())
}

function remove(id) {
  return db("users").where({ id }).del()
}
