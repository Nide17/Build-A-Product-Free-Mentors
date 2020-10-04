// index.js
const express = require('express');
const app = express();

// Import mentors
let mentorsData = require('./mentors');

// Route Handler
app.get("/json", (req, res) => {
    res.json({ message: "Hello world" });
});


/*
//  GET /mentors
*/
app.get("/mentors", (req, res) => {
    res.json(mentorsData);
});


// Get one
app.get("/mentors/:id", (req, res) => {
    const mentorId = req.params.id;
    const mentor = mentorsData.find(_mentor => _mentor.id === mentorId);

    if (mentor) {
        res.json(mentorsData);
    } else {
        res.json({ message: `mentor ${mentorId} doesn't exist` })
    }
});


/*
// Post an item
// POST /items
*/
app.post("/mentors", (req, res) => {

    const mentor = req.body;
    console.log('Adding new mentor: ', mentor);

    // add new mentor to array
    mentorsData.push(mentor)

    // return updated list
    res.json(mentorsData);
});


//  app.get("/", (req, res) => {
//     res.sendFile(__dirname + '/UI/mentors.html');
//  });

//  app.get("/items", (req, res) => {
//     res.json({ items: [{ "id": 1, "name": "banana" }, 
//                        { "id": 2, "name": "apple" }
//                       ] 
//             });
//  });

//  app.get("/admin", (req, res) => {
//     res.sendFile(__dirname + '/ui/admin.html');
//  });


const port = 4000;

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});