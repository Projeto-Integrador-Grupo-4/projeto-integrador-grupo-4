const { Router } = require("express");
const router = Router();

const indexController = require("../controller/indexController");

router.get("/", indexController.publicAccess);

module.exports = router;
