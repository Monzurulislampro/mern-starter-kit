const mongoose = require("mongoose");
const userSchema = {
  name: String,
  email: String,
  jobStatus: String,
};

module.exports = mongoose.model("userModel", userSchema);
