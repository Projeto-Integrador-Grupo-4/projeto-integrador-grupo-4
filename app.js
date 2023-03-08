const express = require("express");
const dotenv = require("dotenv");
const app = express();
let PORT = process.env.PORT || 5000;

// Config dotenv
dotenv.config();

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");

// Setting the static folder
app.use(express.static("public"));

// Importing the modules
const indexRouter = require("./routes/indexRouter");

// Setting the views of the app with EJS
app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
