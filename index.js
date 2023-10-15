const express = require("express");
const app = require("./app");



app.listen(`${process.env.RUNNING_PORT}`,()=>{
    console.log(`App is listening on port ${process.env.RUNNING_PORT}`)
});