var router = require('express').Router();
var User = require('../../../../models/user');
var hash = require('../../../../helper/hash');

router.get("/", function (req, res) {
  User.find({}).then(function (users) {
    res.json(users);
  })
})

router.post('/', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;


  var user = User.find({
    username: username,
    password: hash.hashPassword(password)
  });

  if (user.length == 1) {
    var d = new Date();
    var response = {};
    response.token = hash.hashPassword(d.getDate().toString() + d.getMonth().toString() + d.getFullYear().toString() + username + hash.hashPassword(password));
    response.name = username;
    response.dateCreation = d;
    res.json(response);
  }

})

module.exports = router;
