var router = require('express').Router();


router.use("/user", require('./user'));
router.use("/facebook", require('./facebook'));


module.exports = router;
