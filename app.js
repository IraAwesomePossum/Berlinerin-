// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("./db/index");
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    saveUninitialized: false,
    resave: true,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://ifalko:vbHmQSn56TWdWpd9@cluster0.madcu.mongodb.net/Berlinerin?retryWrites=true&w=majority",
    }),
  })
);

// default value for title local
const projectName = "Womenx";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);
const auth = require("./routes/auth");
app.use("/", auth);
const forum = require("./routes/forum");
app.use("/", forum);

app.use(express.static("public"));

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);



module.exports = app;
