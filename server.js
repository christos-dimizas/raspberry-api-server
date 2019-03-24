const express = require('express');
const {buttonLed} = require('./raspiExamples/buttonLed.js');
const app = express();

// reply to request with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/raspi/buttonLed', (req, res) => {
  buttonLed();
});

//start a server on port 80 and log its start to our console
const server = app.listen(8080, function () {

  const port = server.address().port;
  console.log('Example app listening on port ', port);

});
