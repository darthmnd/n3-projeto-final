const express = require('express');
const router = express.Router();

const controller = require("../controller/mangasControllers")
 

router.get("/colecoes", controller.getAll)
router.get("/colecoes/avaliacao", controller.getByRating)
router.post ("/criar", controller.postManga)
router.patch("/avaliar/:id", controller.rateManga)
router.delete("/remover/:id", controller.deleteManga)

module.exports = router

