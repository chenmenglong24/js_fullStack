const express = require('express');
const router = express.Router();

router.get('/:name', function(req, res) {
  res.render('users', {
    name: req.params.name,
    supplies: ['上文', '小鱼', '老魏']
  })
})

module.exports = router;