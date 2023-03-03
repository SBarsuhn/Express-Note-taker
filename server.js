// These are the requirements for the program to run properly. express is basically what runs the application. the routes are what link server.js to the other files and the port is telling the program where to run the application. so in this case either on heroku or on localhost port 3001
const express = require('express');
const htmlRoutes = require('./routes/htmlRoute')
const apiRoutes = require('./routes/apiRoute')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// This is telling express what to use to build the website. it is saying that if there is no extension on the url to use htmlroutes for the code and if it has "/api" in the url to use apiroutes
app.use(express.static('public'));
app.use('/', htmlRoutes)
app.use('/api', apiRoutes)
// This is for when you are running the application in localhost. it is here to give you a link to open the application when testing
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 😈`)
);
