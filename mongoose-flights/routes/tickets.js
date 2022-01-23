var express = require('express');
var router = express.Router();
var ticketsctrl = require('../controllers/tickets');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

outer.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);
router.delete('/tickets/:id', ticketsCtrl.delete);
module.exports = router;