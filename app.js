const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

const server = app.listen(5000, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`server started successfully at http://${host}:${port}`);
});
