const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    index,
    create,
    newTicket,
    show,
    deleteFlight,
  };
 
  function newTicket(req, res) {
    // res.send("new ticket function envoked");
    Flight.findById(req.params.id, function (err, flight) {
      console.error(err);
      res.render("tickets/new", { flight });
    });
  }

  function index(req, res) {
    Flight.find({}, function (err, flightDocuments) {
      res.render("flights/index", {
        title: "Flights",
        flights: flightDocuments,
      });
    });
  }

  function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight){
      if (err) return res.redirect('/flights');
        console.log(flight);
      res.redirect('/flights');
    });
  };
  
  
  function create(req, res) {
    if (req.body.departs === '') delete req.body.departs;
    Flight.create(req.body);
    console.log(req.body);
    res.redirect('flights');
  }
  function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
            Ticket.find({ flight: flight._id }, function(err, tickets) {
      res.render('flights/show', {
       flight,
       tickets
        });
      });
    });
  }