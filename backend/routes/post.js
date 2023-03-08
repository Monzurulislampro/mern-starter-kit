const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ message: "This is another page" });
});
router.get("/test", (req, res) => {
  res.send({ message: "GET request to the homepage" });
});
module.exports = router;
