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
    img: "http://www.family-practice-berlin.de/images/kollmann1.jpg",
  },
  {
    firstName: "Alexander",
    lastName: "Kulka",
    specialisation: "ObGyn",
    averageRating: 4.9,
    address: "Manfred-von-Richthofen-Str. 9",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/G%C3%A9rald_KIERZEK_%28Cr%C3%A9dit_Ibo%29.jpg",
  },
  {
    firstName: "Eva",
    lastName: "Essers",
    specialisation: "Specialist in internal medicine",
    averageRating: 4.5,
    address: "Dieffenbachstraße 65",
    img: "http://praxis-am-urban.de/mt-content/uploads/2021/01/ee.jpg",
  },
  {
    firstName: "Lisa",
    lastName: "Liccini",
    specialisation: "Family Doctor",
    averageRating: 4.5,
    address: "Windscheidstraße 31",
    img:
      "http://doctorliccini.com/wp-content/uploads/2021/06/lisaliccini-512x769.jpg",
  },
  {
    firstName: "Natalie",
    lastName: "Reytan",
    specialisation: "Dermatologist",
    averageRating: 4.6,
    address: "Leipziger Str. 112",
    img:
      "https://hautarztpraxis-mitte.berlin/wp-content/uploads/2016/03/reytan-hk.jpg",
  },
  {
    firstName: "Marie Charlotte",
    lastName: "König",
    specialisation: "Family Doctor",
    averageRating: 4.9,
    address: "Schwedter Str. 9",
    img:
      "https://res.cloudinary.com/doctolib/image/upload/q_auto:eco,f_auto,w_1024,h_700,c_limit/q76dgotwawmsh1fv39cw.jpg",
  },
  {
    firstName: "Andrea",
    lastName: "Conrads",
    specialisation: "Cardiologist",
    averageRating: 4.7,
    address: "Charlottenstraße 63",
    img: "https://media.timeout.com/images/103338163/630/472/image.jpg",
  },
  {
    firstName: "Berndt",
    lastName: "Pohl",
    specialisation: "Family Doctor",
    averageRating: 4.7,
    address: "Feuerbaherstr. 89",
    img:
      "https://d2tyltutevw8th.cloudfront.net/CACHE/images/media/image/generic-doctor-1520535808/acb39fb3d84c20f52974c4798bd34ebe.png",
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
