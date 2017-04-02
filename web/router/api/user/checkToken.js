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
  var token = req.body.token;
  var d = req.body.dateCreation;

  if (hash.hashPassword(d.getDate().toString() + d.getMonth().toString() + d.getFullYear().toString() + username + hash.hashPassword(password)) == token) {
    var response = {};
    response.statut = true;
    res.json(response);
  }else {
    var response = {};
    response.statut = false;
    res.json(response);
  }

})

module.exports = router;
