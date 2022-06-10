const express = require('express');
const app = express();

app.get('/', (req, res, next)=>{
  console.log('Hello');
  // res.sendStatus(500);
  // res.status(404).send('Oops!');
  // res.status(404).json({message: "Error"});
  res.download('server.js');
})

app.listen(3001);