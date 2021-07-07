const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const forumSchema = new Schema({
  name: String,
  iOffer: Boolean,
  iSearch: Boolean,
  iNeedhelp:Boolean,
  language: String,
  Contact: String,
  img: String,
  
});
console.log("forum")
const forum = mongoose.model("forum", forumSchema);
module.exports = forum;
