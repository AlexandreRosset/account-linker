var router = require('express').Router();
var User = require('../../../../models/user');
var hash = require('../../../../helper/hash');

router.get("/", function (req, res) {
  User.find({}).then(function (users) {
    res.json(users);
  })
})

router.post('/', function (req, res) {

})

module.exports = router;
