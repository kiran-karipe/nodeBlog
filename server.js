let express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;


app.get('/home', (req, res) => {
  res.send({express: 'Hello, World!'});
});

app.listen(port);
