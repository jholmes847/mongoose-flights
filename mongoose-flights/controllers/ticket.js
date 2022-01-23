const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    create,
    new: ticket,
    delete: deleteTicket

  };
  
  function create(req, res) {
    Flight.findById(req.params.id, function (err, flightDoc) {
     
      req.body.flight = flightDoc._id;
      Ticket.create(req.body, function (err, ticket) {
    
        res.redirect(`/flights/${flightDoc._id}`);
      });
    });
  }

  function newTicket(req, res) {
    res.render('tickets/new', { flightId: req.params.id });
  }
  function deleteTicket(req, res) {
    Ticket.findById(req.params.id).populate('flight').exec(function(err, ticket) {
      Ticket.findByIdAndDelete(req.params.id, function(err) {
        console.log(`deleting: ${ticket}`);
        res.redirect(`/flights/${ticket.flight._id}`);
      });
    });
  }