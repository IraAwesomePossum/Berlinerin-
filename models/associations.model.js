const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const associationSchema = new Schema({
  name: String,
  address: String,
  consultationIn: [],
  eMail: String,
  website:String,
  language: [],
  img: String,
  
});
console.log("hi")
const association = mongoose.model("association", associationSchema);
module.exports = association;

 