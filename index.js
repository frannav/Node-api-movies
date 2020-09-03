const express = require('express');
const app = express();
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');
const { config } = require('./config/index');

const moviesApi = require('./routes/movies.js');

//Body Parser
app.use(express.json());

moviesApi(app);

//Catch 404
app.use(notFoundHandler);

//  Error Middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Server on port: http://localhost:${config.port}`);
})