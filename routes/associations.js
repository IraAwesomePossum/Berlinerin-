const router = require("express").Router();
const mongoose = require("mongoose");
/* GET associations page */
router.get("/associations", (req, res, next) => {
  let data = mongoose.model("AssociationSchema");
  console.log(data);
  res.render("associations");
});

module.exports = router;
