const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const doctorSchema = new Schema({
  firstName: String,
  lastName: String,
  averageRating: Number,
  address: String,
});

const doctor = mongoose.model("doctor", doctorSchema);
module.exports = doctor;
