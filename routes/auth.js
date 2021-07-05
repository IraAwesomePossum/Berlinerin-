const router = require("express").Router();
const User = require("../models/User.model");
const bcryptjs = require("bcrypt");
const saltRounds = 10;

const { isLoggedIn, isLoggedOut } = require("../middleware/route-guard.js");

router.get("/index", (req, res, next) => {
  res.render("/index");
});
router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.get("/profile", (req, res, next) => {
  res.render("profile");
});

router.get("/signupConf", (req, res, next) => {
  res.render("signupConf");
});

router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;

  const salt = bcryptjs.genSaltSync();
  const hash = bcryptjs.hashSync(password, salt);
  console.log(hash);
  User.create({ username: username, password: hash })
    .then((createdUser) => {
      console.log(createdUser);
      res.redirect("/signupConf");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", (req, res, next) => {
  console.log(req.session);
  const { username, password } = req.body;
  User.findOne({ username: username })
    .then((userFromDB) => {
      if (userFromDB === null) {
        res.render("login", { message: "Invalid credentials" });
        return;
      }

      if (bcryptjs.compareSync(password, userFromDB.password)) {
        req.session.user = userFromDB;
        res.redirect("/profile");
      } else {
        res.render("login", { message: "Invalid credentials" });
        return;
      }
    })
    .catch((err) => next(err));
});

router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      next(err);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;