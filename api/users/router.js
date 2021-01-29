const router = require("express").Router()

const Users = require("./model")

router.get("/", async (req, res, next) => {
  try {
    const data = await Users.find()
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const data = await Users.add(req.body)
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params

  Users.remove(id)
    .then(deleted => {
      deleted
        ? res.status(200).json(`The user with id ${id} was deleted`)
        : res.status(400).json(`The user with id ${id} could not be found`)
    })
})

module.exports = router
