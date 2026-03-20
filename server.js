const express = require("express");

// Put your code here
const routes = require("./src/routes/index.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;


// Put your code here
app.use(`/api`, routes);

app.get(`/`, (req, res) => {
  res.json('Hello, IFN666!')
});

app.listen(port, () => {
  console.log(`Server is listening on :${port}`)
});

module.exports = app;