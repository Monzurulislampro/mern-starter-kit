const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
require("dotenv").config();
const mongoose = require("mongoose");

// middleware
app.use(cors());
app.use(express.json());
const uri = process.env.URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log("Database connection error: " + error);
  });
const sch = {
  name: String,
  email: String,
  id: Number,
  jobStatus: String,
};
const monmodel = mongoose.model("NEWCOL", sch);
app.post("/post", async (req, res) => {
  console.log("inside post function");
  const data = new monmodel({
    name: req.body.name,
    email: req.body.email,
    id: req.body.id,
    jobStatus: req.body.job,
  });
  const value = await data.save();
  res.send(data);
  console.log(data);
});
app.get("/post", function (req, res) {
  let posts = monmodel.find({}, function (err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  });
});
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
