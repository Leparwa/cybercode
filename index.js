const prettyjson = require('prettyjson');
const express = require('express');

const options = {
  noColor: true
};

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/cybercode/pay/mpesa', (req, res) => {
  console.log('-----------Received M-Pesa webhook-----------');
	
  console.log(prettyjson.render(req.body, options));
  console.log('-----------------------');
	
  let message = {
	  "ResponseCode": "00000000",
	  "ResponseDesc": "success"
	};
	
  // respond to safaricom servers with a success message
  res.json(message);
});

const server = app.listen(5000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`server listening on port ${port}` );
});