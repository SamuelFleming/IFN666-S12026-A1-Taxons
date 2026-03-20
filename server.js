const express = require("express");

// Put your code here

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

// Put your code here

app.listen(port, () => {
  console.log(`Server is listening on :${port}`)
});

module.exports = app;