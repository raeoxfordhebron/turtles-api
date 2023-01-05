/////////////////////////
// DEPENDENCIES
/////////////////////////

const express = require('express')


/////////////////////////
// The Application Object
/////////////////////////

const app = express()


/////////////////////////
// MIDDLEWARE
/////////////////////////

app.use(express.json())


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

// Update Route
app.put("/turtles/:index", (req, res) => {
    turtles[req.params.index] = req.body
    res.json(turtles)
})

// Create Route
app.post("/turtles", (req, res) => {
    turtles.push(req.body)
    res.json(turtles)
})

// Show Route
app.get("/turtles/:index", (req, res) => {
    res.json(turtles[req.params.index])
})


/////////////////////////
// Listener
/////////////////////////

app.listen(1337, () => {console.log("Listening on port 1337")})