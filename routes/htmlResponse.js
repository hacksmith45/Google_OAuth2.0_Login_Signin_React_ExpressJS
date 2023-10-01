const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.render('htmlAuth')
});

module.exports = router;