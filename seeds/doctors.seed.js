const mongoose = require("mongoose");
const Doctors = require("../models/doctor.model");

mongoose.connect("mongodb://localhost/Womenx", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const doctors = [
  {
    firstName: "Sylvia",
    lastName: "Kollmann",
    specialisation: "Family Doctor",
    averageRating: 4.7,
    address: "Nassauische Straße 25",
    img: "https://source.unsplash.com/random/300x300",
    followers: 150,
  },
  {
    firstName: "Alexander",
    lastName: "Kulka",
    specialisation: "ObGyn",
    averageRating: 4.9,
    address: "Manfred-von-Richthofen-Str. 9",
    img: "https://source.unsplash.com/random/300x300",
    followers: 250,
  },
  {
    firstName: "Eva",
    lastName: "Essers",
    specialisation: "Specialist in internal medicine",
    averageRating: 4.5,
    address: "Dieffenbachstraße 65",
    img: "https://source.unsplash.com/random/300x300",
    followers: 190,
  },
  {
    firstName: "Lisa",
    lastName: "Liccini",
    specialisation: "Family Doctor",
    averageRating: 4.5,
    address: "Windscheidstraße 31",
    img: "https://source.unsplash.com/random/300x300",
    followers: 100,
  },
  {
    firstName: "Natalie",
    lastName: "Reytan",
    specialisation: "Dermatologist",
    averageRating: 4.6,
    address: "Leipziger Str. 112",
    img: "https://source.unsplash.com/random/300x300",
    followers: 177,
  },
  {
    firstName: "Marie Charlotte",
    lastName: "König",
    specialisation: "Family Doctor",
    averageRating: 4.9,
    address: "Schwedter Str. 9",
    img: "https://source.unsplash.com/random/300x300",
    followers: 230,
  },
  {
    firstName: "Andrea",
    lastName: "Conrads",
    specialisation: "Cardiologist",
    averageRating: 4.7,
    address: "Charlottenstraße 63",
    img: "https://source.unsplash.com/random/300x300",
    followers: 109,
  },
  {
    firstName: "Berndt",
    lastName: "Pohl",
    specialisation: "Family Doctor",
    averageRating: 4.7,
    address: "Feuerbaherstr. 89",
    img: "https://source.unsplash.com/random/300x300",
    followers: 167,
  },
];

Doctors.insertMany(doctors)
  .then((doctors) => {
    console.log("Seed successfull");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(`An error occured: ${err}`);
  });
