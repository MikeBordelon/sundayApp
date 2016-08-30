var bookRoutes = require('./bookroutes');


// when the client navigates to /movies
module.exports = function routes(app) {
  app.use('/books', bookRoutes);
};