const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const User = require('./model/user');

const customMiddleWare = (req, res, next) => {
    console.log("test middleware")
    next();
}

app.use(customMiddleWare)
app.use(express.json())
app.get("/users", (req, res) => {

    let users = ["Test", "User1", "new User"]

    res.send({ users })
})

app.post("/create-user", async (req, res) => {


    //req.body for body Json
    // res.send(`Your user has been created ${req.body.name}`)

    //req.query for params
    // res.send(`Your user has been created ${req.query.name}`)

    try {
        const data = new User({
            name: req.body.name,
            age: req.body.age,
            id: 20
        })
        await data.save();
        res.send(data)
    } catch (error) {
        res.send(error)
    }


})

mongoose.connect(process.env.DB_CONNECTION_STRING, (req, res) => {

    console.log("Successfully connected to database", res)
})

app.listen(process.env.PORT, () => {
    console.log('Listening to 3000')
})