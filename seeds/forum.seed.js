const mongoose = require("mongoose");
const Forum = require("../models/forum.model");

mongoose.connect("mongodb://localhost/Womenx", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const forum = [
  {
    name: "Angelica Fernandez",
    iOffer: true,
    iSearch: false,
    iNeedhelp: false,
    language: "Spanish",
    text: "Hey everyone, I offer help to fill forms for all your government processes",
    img: "/images/Angelica.jpg",
  },

  {
    name: "Sophia Shevchenko",
    iOffer: false,
    iSearch: true,
    iNeedhelp: false,
    language: "English",
    text: "Hello I'm looking for a coach, who can help me to reorient my career",
    img: "/images/Sophia.jpg",
  },

  {
    name: "Shen Yin",
    iOffer: false,
    iSearch: false,
    iNeedhelp: true,
    language: "English",
    text: "Hey I need help to check the german grammar of my thesis. If you can help me, please send me a message with your rates",
    img: "/images/Shen.jpg",
  },
];

Forum.insertMany(forum)
  .then((forum) => {
    console.log("Seed successfull");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(`An error occured: ${err}`);
  });
