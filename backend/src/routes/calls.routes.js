const { Router } = require("express");

const callController = require("../controllers/call.controller");

const router = Router();

router.get("/consulta", callController.index);

module.exports = router;
