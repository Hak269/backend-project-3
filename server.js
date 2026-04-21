const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const authRouter = require('./controllers/auth.routes');
const verifyToken = require('./middleware/verify-token');
const bookingRouter = require('./controllers/booking.routes')
const aircraftRouter = require('./controllers/aircraft.routes')
const flightRouter = require('./controllers/flight.routes')

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Routes go here
app.use('/auth', authRouter);
app.use('/bookings',bookingRouter);
app.use('/aircrafts', aircraftRouter);
app.use('/flights', flightRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
