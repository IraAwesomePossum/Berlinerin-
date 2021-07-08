const router = require("express").Router();
const bodyParser = require("body-parser");
const forum = require("../models/forum.model");

function submitPost(name, lang, purpose, message) {
  console.log("submit");
  console.log(`${name}, ${lang}, ${purpose}, ${message}`);

  const newPost = new forum ({
    name: name,
    iOffer: false,
    iSearch: false,
    iNeedhelp: false,
    language: lang,
    text: message,
    img: "/images/Angelica.jpg",
  });

  switch (purpose) {
    case "iOffer":
      newPost.iOffer = true;
      break;
    case "iSearch":
      newPost.iSearch = true;
      break;
    case "iNeedhelp":
      newPost.iNeedhelp = true;
      break;
    default:
      break;
  }
  console.log(newPost);
  newPost.save();
}

router.post("/forum", function (req, res) {
  console.log(JSON.stringify(req.body));
  submitPost(req.body.name, req.body.language, req.body.purpose, req.body.message);
});

module.exports = router;
