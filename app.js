import express from "express";
import dotenv from "dotenv";
const app = express();

// Config dotenv
dotenv.config();

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importing the modules

// Setting the views of the app with EJS

// Setting the static folder
app.use(express.static("public"));

export default app;
