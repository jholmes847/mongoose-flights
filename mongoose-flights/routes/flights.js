var express = require('express');
var router = express.Router();

const flightCtrl = require("../controllers/flights");

router.get("/", flightCtrl.index);
router.get("/new", flightCtrl.new);

router.post("/", flightCtrl.create);
router.get("/:id", flightCtrl.show);
router.delete('/:id', flightsCtrl.delete);

router.get("/:id/tickets/new", flightCtrl.newTicket);

module.exports = router;
module.exports = router;
