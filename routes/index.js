const { Router } = require("express");
const { index, showAll } = require("../controllers/url.controller");

const router = Router();

router.get("/", showAll);
router.get("/:urlId", index);

module.exports = router;
