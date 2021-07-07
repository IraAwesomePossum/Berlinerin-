const mongoose = require("mongoose");
const forum = require("../models/forum.model");

mongoose.connect("mongodb://localhost/Womenx", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const forum = [
{
    name: "Angelica Fernandez",
    iOffer: Boolean,
    iSearch: Boolean,
    iNeedhelp:Boolean,
    language: "Spanish",
    Contact: String,
    img: "https://unsplash.com/photos/_HM4pFsXA7o/300x300",



}
    
]




Associations.insertMany(forum)
  .then((forum) => {
    console.log("Seed successfull");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(`An error occured: ${err}`);
  });