/**
 * Author: Md Sholayman
 * Description: This is the file where config has holded.
 * Date : 01 September,2023.
 */


const express = require("express");
const app = express();
const router = require("./src/Routes/api")

app.use("/api" , router)


module.exports = app;