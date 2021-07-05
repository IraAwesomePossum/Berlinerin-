const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AssociationSchema = new Schema({
  name: String,
  address: String,
  consultationIn: [],
  eMail: String,
  website:String,
  language: [],
  
});
console.log("hi")
const association = mongoose.model("association", associationSchema);
module.exports = association;

 