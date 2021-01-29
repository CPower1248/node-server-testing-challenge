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

module.exports = router
