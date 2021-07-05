const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const doctorSchema = new Schema({
  firstName: String,
  lastName: String,
  specialisation: String,
  averageRating: Number,
  address: String,
  img: String,
});

const Doctors = mongoose.model("Doctors", doctorSchema);
module.exports = Doctors;
