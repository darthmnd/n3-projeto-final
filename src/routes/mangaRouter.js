const express = require('express');
const router = express.Router();

const controller = require("../controller/mangasControllers")
 

router.get("/", controller.getAll)
router.get("/avaliacao", controller.getByRating)
router.post ("/criar", controller.addManga)
router.patch("/avaliar/:id", controller.rateManga)
router.delete("/remover/:id", controller.deleteManga)

module.exports = router

