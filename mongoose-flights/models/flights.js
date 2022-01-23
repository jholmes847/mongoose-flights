const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
    },
});

const flightSchema = new Schema({
airline: {
    type: String, 
    enum: ['American', 'Southwest', 'United']
},
airport: {
    type:String, 
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'},
flightNo: {
    type:Number, 
    min:10,
    max:999,
},
departs: {
    type: Date,
    default: function() {
        var oneYearFromNow = new Date();
        oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        return oneYearFromNow; }
},
destinations: {
    type: [destinationSchema]
},
});





module.exports = mongoose.model("Flight", flightSchema);