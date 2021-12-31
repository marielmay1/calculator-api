const express = require('express');
const app = express();
const cors = require('cors');

const Calculator = require('./calculator');
const calc = new Calculator();
// configure express to use cors()
// ------------------------------------------------------------------
app.use(cors());

app.get('/add/:left/:right', async (req, res) => {
  const { left, right } = req.params
  res.json(calc.add(left, right));
});



app.get('/', (req, res) => {
  res.send('Hello from Node.js app \n');
});

// start server
// -----------------------
app.listen(8080, async () => {
  console.log('Running on port 8080! - http://localhost:8080');
});