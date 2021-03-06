const express = require('express');
const router = express.Router();

//Discard the session to perform logout processing
router.get('/', function(req, res, next) {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
