const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error');


const placesRoutes = require('./routes/places-routes');
const userRoutes = require('./routes/users-routes');

const app = express();
app.use(bodyParser.json());

app.use('/api/places', placesRoutes); 

app.use('/api/users', userRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Cannot find the Route', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(7000);