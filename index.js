const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

var staticPath = path.join(__dirname, '');
app.use(express.static(staticPath));
app.get('/', function (req, res) {  
  res.redirect('/');  
}); 
app.listen(PORT, function() {
  console.log('listening on '+PORT);
});

