const { Router } = require("express");

const callController = require("../controllers/call.controller");

const router = Router();

router.get("/consulta", callController.consult);

router.get('/', callController.index)

module.exports = router;
