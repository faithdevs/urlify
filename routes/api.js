const { Router } = require("express");
const { shorten } = require("../controllers/url.controller");

const router = Router();

router.post("/short", shorten);

module.exports = router;
