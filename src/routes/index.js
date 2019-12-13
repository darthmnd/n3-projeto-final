const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.status(200).send("いらっしゃいませ! SEJAM BEM-VINDES A BIBLIOTECA DE MANGÁS ʕ•ᴥ•ʔ")
})

module.exports = router
