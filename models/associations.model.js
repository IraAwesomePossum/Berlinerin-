const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AssociationSchema = new Schema({
  name: String,
  address: String,
  consultationIn: [],
  language: String,
});
console.log("hi")
const association = mongoose.model("association", associationSchema);
module.exports = association;

