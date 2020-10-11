// index.js
const express = require('express');
const app = express();

var bodyParser = require('body-parser')

const mentorRouter = express.Router();

mentorRouter.use(bodyParser.json());

// Init middleware
app.use(express.json({ extended: false }))

// Import mentors
let mentorsData = require('../../data/mentors');


/*
GET /mentors
Get all mentors
*/
mentorRouter.get('/', (req, res) => {

    if (!mentorsData) {
        return res.status(401).json({
            "status": 401,
            "error": "Mentors not found!"
        })
    }
    res.json(
        {
            "status": 200,
            // "message": "Mentors list",
            "data": mentorsData
        }
    );
});


// Get one
mentorRouter.get("/:mentorId", (req, res) => {
    const mentorId = req.params.mentorId;
    const mentor = mentorsData.find(_mentor => _mentor.mentorId === mentorId);

    if (mentor) {
        res.status(200).json({
            "status": 200,
            // "message": "Mentor found",
            "data": mentor
        });
    } else {
        res.status(401).json({
            "status": 401,
            "error": `mentor ${mentorId} doesn't exist`
        })
    }
});

module.exports = mentorRouter;