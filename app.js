const express = require("express");
const dotenv = require("dotenv");
const app = express();
let PORT = process.env.PORT || 5000;

// Config dotenv
dotenv.config();

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importing the modules

// Setting the views of the app with EJS

// Setting the static folder
app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
