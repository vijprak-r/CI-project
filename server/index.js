const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI Pipeline");
});

module.exports = app;

if (require.main === module) {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}