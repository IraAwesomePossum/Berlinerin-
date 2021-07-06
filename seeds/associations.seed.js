const mongoose = require("mongoose");
const Associations = require("../models/associations.model");

mongoose.connect("mongodb://localhost/Womenx", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const associations = [
  {
    name: "Box 66",
    address: "Dolziger Straße 16, 10247 Berlin",
    consultationIn: [
      "migration counselling", 
      "Vocational and continuing education counselling",
    ],
    eMail: "box66@bqgankunft.de",
    website: "https://box66berlin.com/",
    language: [
      "German", 
      "English", 
      "Polish", 
      "Spanish", 
      "Arabic",
    ],
    img: "/images/Box66_association.jpeg",
  },
  {
    name: "Hinbun",
    address: " Brunsbütteler Damm 17, 13581 Berlin",
    consultationIn: [
      "General advice",
      "Legal advice",
      "Counselling on violence against women",
      "Health Counselling",
    ],
    eMail: "info@hinbun.de",
    website: "https://hinbun.de/",
    language: [
      "German", 
      "Sorani", 
      "English", 
      "Kurmancì", 
      "arabic",
    ],
    img: "/images/Hinbun-Logo.png",
  },
  {
    name: "Frieda",
    address: " Proskauer Straße 7 - Vorderhaus, 10247 Berlin",
    consultationIn: [
      "Unemployment counselling",
      "Counselling in cases of (cyber)stalking",
      "Vocational coaching",
      "counselling in groups",
      "Conflict counselling",
      "Rent counselling",
      "Psychosocial counselling",
      "Legal information",
      "Social counselling",
    ],
    eMail: "frieda@frieda-frauenzentrum.de",
    website: "https://www.frieda-frauenzentrum.de",
    language: "German",
    img: "/images/Frieda-logo.png",
  },
  {
    name: "Xochicuicatl e.V.",
    address: "Winsstraße 58, 10405 Berlin",
    consultationIn: [
      "Social counselling",
      "Psychosocial counselling",
      "Legal counselling",
      "Counselling in cases of domestic violence",
      "Family counselling",
      "Vocational counselling",
    ],
    eMail: "mail@xochicuicatl.de.",
    website: "https://www.xochicuicatl.de/",
    language: [
      "German", 
      "Spanish", 
      "Portuguese", 
      "Italian"
    ],
    img: "/images/xochicuicatl-logo.png",
  },
];

Associations.insertMany(associations)
  .then((associations) => {
    console.log("Seed successfull");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(`An error occured: ${err}`);
  });
