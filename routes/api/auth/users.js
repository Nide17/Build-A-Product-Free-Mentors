// index.js
const express = require('express');
const app = express();

var bodyParser = require('body-parser')

const userRouter = express.Router();

userRouter.use(bodyParser.json());

// Init middleware
app.use(express.json({ extended: false }))

// Import users
let usersData = require('../../../data/users');

/*
GET /users
Get all users
*/
// userRouter.get('/', (req, res) => {

//     if (!usersData) {
//         return res.status(401).json({
//             "status": 401,
//             "error": "users not found!"
//         })
//     }
//     res.json(
//         {
//             "status": 200,
//             "message": "users list",
//             "data": usersData
//         }
//     );
// });


// Get one
// userRouter.get("/:userId", (req, res) => {
//     const userId = req.params.userId;
//     const user = usersData.find(_user => _user.userId === userId);

//     if (user) {
//         res.status(200).json({
//             "status": 200,
//             "message": "user found",
//             "data": user
//         });
//     } else {
//         res.status(401).json({
//             "status": 401,
//             "error": `user ${userId} doesn't exist`
//         })
//     }
// });


/*
POST /auth/signup
Create user account
*/
userRouter.post('/signup', (req, res) => {

    const user = req.body;
    console.log('Adding new user: ', user);

    // add new user to array
    usersData.push(user)
    // console.log(req.body);

    // return updated list
    res.status(201).json({
        "status": 201,
        "message": "users list",
        "data": usersData
    });
});

/*
POST /auth/signin
Create user account
*/
userRouter.post('/signin', (req, res) => {

    const user = req.body;
    console.log('Adding new user: ', user);

    // add new user to array
    const user = usersData.find(_user => _user.userId === userId); ???
    // console.log(req.body);

    // return updated list
    res.status(201).json({
        "status": 201,
        "message": "users list",
        "data": usersData
    });
});

module.exports = userRouter;