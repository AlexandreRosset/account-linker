var router = require('express').Router();


router.use("/register", require("./register"));
router.use("/login", require("./login"));
router.use("/check", require("./checkToken"));

module.exports = router;
