// index.js
const express = require('express');
const app = express();

// test
// app.use('/', (req, res) => {
//     res.send('hello!');
//  })

// Mentors
app.use('/api/mentors', require('./routes/api/mentors'));

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


// Users
app.use('/api/auth', require('./routes/api/auth/users'));

const port = 4000;

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});