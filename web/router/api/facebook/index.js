var router = require('express').Router();


router.use("/recupToken", require("./recupToken"));
router.use("/flux", require("./flux"));


module.exports = router;
