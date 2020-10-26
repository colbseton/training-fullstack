const bodyparser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const config = require("./config/config");
const authRoute = require("./routes/auth.route");
const cors = require("cors");

const PORT = 5000;
const app = express();

mongoose
  .connect(config.keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log(err);
  });

// CORS
app.use(cors());
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.status(200);
});

authRoute(app);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
