/** @format */
import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);
const http = require('http').Server(app);

app.get('/', (req: any, res: any) => {
  res.send('hello world');
});

const server = http.listen(3000, function() {
  console.log('listening on 3000');
});
