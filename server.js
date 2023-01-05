/////////////////////////
// DEPENDENCIES
/////////////////////////

const express = require('express')


/////////////////////////
// The Application Object
/////////////////////////

const app = express()


/////////////////////////
// The Data
/////////////////////////
const turtles = [
    {name: "Leonardo", role: "ninja"},
    {name: "Michaelangelo", role: "ninja"},
    {name: "Donatello", role: "ninja"},
    {name: "Raphael", role: "ninja"},
]


/////////////////////////
// Routes
/////////////////////////

app.get('/', (req, res) => {
    // res.json let's us send a response as JSON data
    res.json({
        response: "Hello World"
    })
})

// Index Route
app.get("/turtles", (req, res) => {
    // send the turtles array as JSON
    res.json(turtles)
})

// Create Route


// Show Route
app.get("/turtles/:index", (req, res) => {
    res.json(turtles[req.params.index])
})


/////////////////////////
// Listener
/////////////////////////

app.listen(1337, () => {console.log("Listening on port 1337")})