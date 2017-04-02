var router = require('express').Router();
var User = require('../../../../models/user');
var hash = require('../../../../helper/hash');

router.get("/", function (req, res) {
  User.find({}).then(function (users) {
    res.json(users);
  })
})

router.post('/', function (req, res) {
  var template = '<a class="twitter-timeline" href="https://twitter.com/' + req.body.username + '">Tweets by TwitterDev</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
  res.json(template);
})

module.exports = router;
