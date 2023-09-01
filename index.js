/**
 * Author: Md Sholayman
 * Description: This is the file where application is running.
 * Date : 01 September,2023.
 */

const express = require("express");
const app = require("./app")

app.listen(3000,()=>{
    console.log("App is listening");
})